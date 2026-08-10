import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  OG_IMAGE,
  SEO_PAGES,
  SITE_NAME,
  SITE_URL,
  toCanonical,
} from "./seo-catalog.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = process.argv[2] ?? join(root, "dist");
const shell = readFileSync(join(distDir, "index.html"), "utf8");

function setMeta(html, attr, key, content) {
  const re = new RegExp(
    `<meta\\s+[^>]*${attr}=["']${escapeReg(key)}["'][^>]*>`,
    "i",
  );
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setLink(html, rel, href, hreflang) {
  const selector = hreflang
    ? `rel=["']alternate["'][^>]*hreflang=["']${escapeReg(hreflang)}["']`
    : `rel=["']${escapeReg(rel)}["'](?![^>]*hreflang)`;
  const re = new RegExp(`<link\\s+[^>]*${selector}[^>]*>`, "i");
  const tag = hreflang
    ? `<link rel="alternate" hreflang="${hreflang}" href="${escapeAttr(href)}" />`
    : `<link rel="${rel}" href="${escapeAttr(href)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function pageJsonLd(page) {
  const url = toCanonical(page.path);
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en-US",
    },
  ];

  if (page.breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: toCanonical("/"),
        },
        ...page.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: crumb.label,
          item: toCanonical(crumb.href),
        })),
      ],
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function injectPageSeo(html, page) {
  const canonical = toCanonical(page.path);
  const robots = page.noindex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  let next = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeAttr(page.title)}</title>`,
  );

  next = setMeta(next, "name", "description", page.description);
  next = setMeta(next, "name", "keywords", page.keywords);
  next = setMeta(next, "name", "robots", robots);
  next = setMeta(next, "name", "googlebot", robots);
  next = setMeta(next, "name", "bingbot", robots);
  next = setMeta(next, "property", "og:title", page.title);
  next = setMeta(next, "property", "og:description", page.description);
  next = setMeta(next, "property", "og:type", page.pageType);
  next = setMeta(next, "property", "og:url", canonical);
  next = setMeta(next, "property", "og:image", OG_IMAGE);
  next = setMeta(next, "property", "og:image:alt", page.ogImageAlt);
  next = setMeta(next, "property", "og:site_name", SITE_NAME);
  next = setMeta(next, "name", "twitter:title", page.title);
  next = setMeta(next, "name", "twitter:description", page.description);
  next = setMeta(next, "name", "twitter:image", OG_IMAGE);
  next = setLink(next, "canonical", canonical);
  next = setLink(next, "alternate", canonical, "en");
  next = setLink(next, "alternate", canonical, "en-US");
  next = setLink(next, "alternate", canonical, "x-default");

  const ldTag = `<script type="application/ld+json" data-prerender="page">${JSON.stringify(pageJsonLd(page))}</script>`;
  next = next.replace(
    /<script type="application\/ld\+json" data-prerender="page">[\s\S]*?<\/script>\s*/i,
    "",
  );
  return next.replace("</head>", `    ${ldTag}\n  </head>`);
}

for (const page of SEO_PAGES) {
  const html = injectPageSeo(shell, page);
  if (page.path === "/") {
    writeFileSync(join(distDir, "index.html"), html, "utf8");
  } else {
    const dir = join(distDir, page.path.replace(/^\//, ""));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html, "utf8");
  }
}

console.log(`Prerendered ${SEO_PAGES.length} route HTML shells into dist/`);

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function escapeReg(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

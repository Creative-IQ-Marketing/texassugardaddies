export const SITE_URL = "https://texassugardaddies.com";
export const SITE_NAME = "Texas Sugar Daddies";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export function toCanonical(path) {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const SEO_PAGES = [
  {
    path: "/",
    title:
      "Texas Sugar Daddies | San Antonio Bakery, Custom Cakes & Catering",
    description:
      "Texas Sugar Daddies — San Antonio's premier bakery, catering company & event venue since 2017. Custom cakes, wedding catering, event space up to 150 guests.",
    keywords:
      "San Antonio bakery, custom cakes San Antonio, wedding cakes San Antonio, catering San Antonio TX, wedding catering San Antonio, corporate catering San Antonio, event venue San Antonio, event space San Antonio",
    pageType: "website",
    priority: "1.0",
    changefreq: "weekly",
    ogImageAlt:
      "Texas Sugar Daddies — San Antonio bakery, custom cakes and catering",
  },
];

export const IMAGE_SITEMAP = [
  {
    path: "/",
    images: [
      { loc: OG_IMAGE, title: "Texas Sugar Daddies" },
      {
        loc: `${SITE_URL}/hero/hero-960.webp`,
        title: "Texas Sugar Daddies bakery and catering",
      },
    ],
  },
];

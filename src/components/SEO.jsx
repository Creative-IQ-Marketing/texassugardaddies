import { useEffect } from "react";

export default function SEO({
  title = "Texas Sugar Daddies - San Antonio Bakery, Cafe & Catering",
  description = "San Antonio's premier bakery and catering service since 2017. Custom cakes, fresh baked goods, weekday cafe, full catering services, and event venue. Life is short, eat dessert first!",
  keywords = "San Antonio bakery, Texas Sugar Daddies, custom cakes, catering San Antonio, event venue, cupcakes, cookies, wedding cakes, corporate catering, cafe San Antonio, desserts Texas, bakery near me, best bakery San Antonio, custom birthday cakes, wedding cake design, corporate event catering",
  ogImage = "/og-image.jpg",
  canonical = "",
  // structuredData = null,
}) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "Texas Sugar Daddies" },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "bingbot", content: "index, follow" },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio" },
      { name: "geo.position", content: "29.4241;-98.4936" },
      { name: "ICBM", content: "29.4241, -98.4936" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Texas Sugar Daddies" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: window.location.origin + ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { property: "og:url", content: window.location.href },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: window.location.origin + ogImage },
      { name: "twitter:site", content: "@texassugardaddies" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? "name" : "property";
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    });

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, keywords, ogImage, canonical]);

  return null;
}

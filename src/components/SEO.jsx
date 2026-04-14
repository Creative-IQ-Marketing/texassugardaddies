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
      { name: "locality", content: "San Antonio, Texas" },
      { name: "region", content: "Texas" },
      { name: "country", content: "USA" },
      {
        name: "business:contact_data:street_address",
        content: "1135 Mission Rd, Building 9",
      },
      { name: "business:contact_data:locality", content: "San Antonio" },
      { name: "business:contact_data:region", content: "TX" },
      { name: "business:contact_data:postal_code", content: "78210" },
      { name: "business:contact_data:country_name", content: "USA" },
      { property: "og:locale", content: "en_US" },
      {
        property: "og:site_name",
        content: "San Antonio Bakery & Catering Services",
      },
      {
        property: "business:contact_data:phone_number",
        content: "+12102811415",
      },
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
      { name: "twitter:creator", content: "@texassugardaddies" },
      { property: "og:type", content: "business.business" },
      { property: "og:phone_number", content: "+1-210-281-1415" },
      { property: "og:email", content: "[email protected]" },
      { property: "og:street-address", content: "1135 Mission Rd, Building 9" },
      { property: "og:locality", content: "San Antonio" },
      { property: "og:region", content: "TX" },
      { property: "og:postal-code", content: "78210" },
      { property: "og:country-name", content: "USA" },
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

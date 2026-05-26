import { useEffect } from "react";

export default function SEO({
  title = "Texas Sugar Daddies | San Antonio Bakery, Custom Cakes & Catering",
  description = "San Antonio's premier bakery & catering since 2017. Custom cakes, wedding cakes, corporate catering, event venue up to 150 guests. Call (210) 281-1415.",
  keywords = "San Antonio bakery, bakery San Antonio TX, best bakery San Antonio, bakery near me San Antonio, custom cakes San Antonio, custom birthday cakes San Antonio, birthday cake San Antonio, birthday cake delivery San Antonio, wedding cakes San Antonio, wedding cakes San Antonio TX, cake delivery San Antonio, quinceañera cakes San Antonio, anniversary cakes San Antonio, baby shower cakes San Antonio, specialty cakes San Antonio, custom cake shop San Antonio, cupcakes San Antonio, custom cookies San Antonio, sugar cookies San Antonio, desserts San Antonio, baked goods San Antonio, bakery catering San Antonio, catering San Antonio TX, catering company San Antonio, caterer San Antonio TX, wedding catering San Antonio, corporate catering San Antonio, event catering San Antonio, party catering San Antonio, dessert catering San Antonio, catering services San Antonio, catering near me San Antonio, event venue San Antonio, party venue San Antonio TX, event space San Antonio, wedding venue San Antonio TX, venue rental San Antonio TX, private event venue San Antonio, birthday party venue San Antonio, corporate event venue San Antonio, event space rental San Antonio, lunch cafe San Antonio, grab and go cafe San Antonio",
  ogImage = "/og-image.jpg",
  canonical = window.location.origin + window.location.pathname,
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
      {
        name: "googlebot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "bingbot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      // AI Agent crawlers
      { name: "OAI-SearchBot", content: "index, follow" },
      { name: "CCBot", content: "index, follow" },
      { name: "PerplexityBot", content: "index, follow" },
      { name: "ClaudeBot", content: "index, follow" },
      { name: "revisit-after", content: "7 days" },
      { name: "rating", content: "general" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      // Geo / Local SEO
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, Texas" },
      { name: "geo.position", content: "29.4126;-98.4782" },
      { name: "ICBM", content: "29.4126, -98.4782" },
      { name: "locality", content: "San Antonio, Texas" },
      { name: "region", content: "Texas" },
      { name: "country", content: "USA" },
      // Dublin Core
      { name: "DC.title", content: title },
      { name: "DC.language", content: "en-US" },
      // Business contact data
      {
        name: "business:contact_data:street_address",
        content: "1135 Mission Rd, Building 9",
      },
      { name: "business:contact_data:locality", content: "San Antonio" },
      { name: "business:contact_data:region", content: "TX" },
      { name: "business:contact_data:postal_code", content: "78210" },
      { name: "business:contact_data:country_name", content: "USA" },
      // Page classification
      { name: "classification", content: "Food & Beverage, Bakery, Catering" },
      {
        name: "category",
        content: "Bakery, Custom Cakes, Catering, Event Venue, San Antonio TX",
      },
      // Open Graph
      { property: "og:locale", content: "en_US" },
      {
        property: "og:site_name",
        content: "Texas Sugar Daddies - San Antonio Bakery & Catering",
      },
      {
        property: "business:contact_data:phone_number",
        content: "+12102811415",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: window.location.origin + ogImage },
      {
        property: "og:image:secure_url",
        content: window.location.origin + ogImage,
      },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { property: "og:url", content: window.location.href },
      { property: "og:phone_number", content: "+1-210-281-1415" },
      { property: "og:email", content: "[email protected]" },
      { property: "og:street-address", content: "1135 Mission Rd, Building 9" },
      { property: "og:locality", content: "San Antonio" },
      { property: "og:region", content: "TX" },
      { property: "og:postal-code", content: "78210" },
      { property: "og:country-name", content: "USA" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: window.location.origin + ogImage },
      { name: "twitter:image:alt", content: title },
      { name: "twitter:site", content: "@texassugardaddies" },
      { name: "twitter:creator", content: "@texassugardaddies" },
      { name: "twitter:domain", content: window.location.hostname },
      // Mobile
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "apple-mobile-web-app-title", content: "Texas Sugar Daddies" },
      { name: "format-detection", content: "telephone=no" },
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

    let langLink = document.querySelector(
      'link[rel="alternate"][hreflang="en-US"]',
    );
    if (!langLink) {
      langLink = document.createElement("link");
      langLink.setAttribute("rel", "alternate");
      langLink.setAttribute("hreflang", "en-US");
      document.head.appendChild(langLink);
    }
    langLink.setAttribute("href", window.location.href);
  }, [title, description, keywords, ogImage, canonical]);

  return null;
}

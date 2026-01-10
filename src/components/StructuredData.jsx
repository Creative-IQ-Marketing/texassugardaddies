import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Bakery",
      name: "Texas Sugar Daddies",
      description:
        "San Antonio bakery and catering business specializing in custom cakes, fresh baked goods, cafe services, catering, and venue rentals since 2017",
      url: window.location.origin,
      telephone: "+1-210-281-1415",
      email: "[email protected]",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1135 Mission Rd, Building 9",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78210",
        addressCountry: "US",
      },
      servesCuisine: ["Bakery", "Desserts", "American", "Catering"],
      priceRange: "$$",
      image: window.location.origin + "/og-image.jpg",
      foundingDate: "2017",
      slogan: "Life is short, eat dessert first!",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
          opens: "11:00",
          closes: "15:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "500",
      },
      hasMenu: {
        "@type": "Menu",
        hasMenuSection: [
          {
            "@type": "MenuSection",
            name: "Bakery",
            description:
              "Custom cakes, cookies, cupcakes, and personalized sugar cookies",
          },
          {
            "@type": "MenuSection",
            name: "Cafe",
            description:
              "Daily specials, salad bar, lunch options, and grab-and-go items",
          },
          {
            "@type": "MenuSection",
            name: "Catering",
            description:
              "Custom menus for weddings, corporate events, anniversaries, and parties",
          },
        ],
      },
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}

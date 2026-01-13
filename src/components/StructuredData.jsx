import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Texas Sugar Daddies",
      url: "https://texassugardaddies.com",
      logo: "https://texassugardaddies.com/src/assets/logo.png",
      image: "https://texassugardaddies.com/og-image.jpg",
      description:
        "San Antonio bakery and catering business specializing in custom cakes, fresh baked goods, cafe services, catering, and venue rentals since 2017",
      foundingDate: "2017",
      slogan: "Life is short, eat dessert first!",
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
      sameAs: [
        "https://www.facebook.com/texassugardaddies",
        "https://www.instagram.com/texassugardaddies",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+1-210-281-1415",
        email: "[email protected]",
      },
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://texassugardaddies.com",
      name: "Texas Sugar Daddies",
      image: "https://texassugardaddies.com/og-image.jpg",
      description:
        "San Antonio bakery and catering business specializing in custom cakes, fresh baked goods, cafe services, catering, and venue rentals since 2017",
      url: "https://texassugardaddies.com",
      telephone: "+1-210-281-1415",
      email: "[email protected]",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1135 Mission Rd, Building 9",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78210",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "City",
        name: "San Antonio",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: "11:00",
          closes: "15:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "11:00",
          closes: "15:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "11:00",
          closes: "15:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "500",
      },
    };

    // BakeryBusiness Schema
    const bakerySchema = {
      "@context": "https://schema.org",
      "@type": "Bakery",
      name: "Texas Sugar Daddies",
      url: "https://texassugardaddies.com",
      image: "https://texassugardaddies.com/og-image.jpg",
      description:
        "San Antonio bakery and catering business specializing in custom cakes, fresh baked goods, cafe services, catering, and venue rentals since 2017",
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
      foundingDate: "2017",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "500",
      },
    };

    // Function to add or update script tag
    const addSchemaScript = (schema, id) => {
      let script = document.querySelector(`script[data-schema-id="${id}"]`);
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-schema-id", id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    // Add all schemas
    addSchemaScript(organizationSchema, "organization");
    addSchemaScript(localBusinessSchema, "local-business");
    addSchemaScript(bakerySchema, "bakery");
  }, []);

  return null;
}

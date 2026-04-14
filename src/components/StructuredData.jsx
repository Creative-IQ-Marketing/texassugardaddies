import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    // Organization Schema - Emphasizing services over brand name
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Texas Sugar Daddies",
      alternateName: "San Antonio Bakery & Catering Services",
      legalName: "Texas Sugar Daddies LLC",
      url: "https://texassugardaddies.com",
      logo: "https://texassugardaddies.com/src/assets/logo.png",
      image: "https://texassugardaddies.com/og-image.jpg",
      description:
        "Professional San Antonio catering company and bakery specializing in wedding catering, corporate events, custom cakes, cupcakes, cookies, desserts, lunch cafe, and full-service event venue since 2017. Serving San Antonio, Texas and surrounding areas with expert catering services and custom bakery creations.",
      foundingDate: "2017",
      slogan: "Life is short, eat dessert first!",
      telephone: "+1-210-281-1415",
      email: "[email protected]",
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Debit Card",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1135 Mission Rd, Building 9",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78210",
        addressCountry: "US",
      },
      areaServed: [
        {
          "@type": "City",
          name: "San Antonio",
          "@id": "https://en.wikipedia.org/wiki/San_Antonio",
        },
        {
          "@type": "State",
          name: "Texas",
        },
      ],
      sameAs: [
        "https://www.facebook.com/texassugardaddies",
        "https://www.instagram.com/texassugardaddies",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+1-210-281-1415",
        email: "[email protected]",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Catering and Bakery Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Wedding Catering Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Wedding Catering",
                  description: "Full-service wedding catering in San Antonio",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Corporate Catering Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Corporate Event Catering",
                  description:
                    "Professional corporate catering for meetings and events",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Bakery Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Custom Cakes",
                  description:
                    "Custom wedding cakes, birthday cakes, and special occasion cakes",
                },
              },
            ],
          },
        ],
      },
    };

    // LocalBusiness Schema - Enhanced for Local SEO
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://texassugardaddies.com",
      name: "Texas Sugar Daddies - San Antonio Catering & Bakery",
      alternateName:
        "San Antonio Professional Catering Company & Custom Bakery",
      image: [
        "https://texassugardaddies.com/og-image.jpg",
        "https://texassugardaddies.com/src/assets/hero.jpg",
        "https://texassugardaddies.com/src/assets/daddies.jpg",
      ],
      description:
        "Award-winning San Antonio catering company and custom bakery since 2017. Specializing in wedding catering, corporate event catering, custom wedding cakes, birthday cakes, cupcakes, cookies, desserts, lunch cafe service, and full-service event venue rentals. Professional catering services for all occasions in San Antonio, Texas.",
      url: "https://texassugardaddies.com",
      telephone: "+1-210-281-1415",
      email: "[email protected]",
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Debit Card, Venmo, Apple Pay",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1135 Mission Rd, Building 9",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78210",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.4241,
        longitude: -98.4936,
      },
      areaServed: [
        {
          "@type": "City",
          name: "San Antonio",
        },
        {
          "@type": "State",
          name: "Texas",
        },
      ],
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
        bestRating: "5",
        worstRating: "1",
      },
      servesCuisine: ["Bakery", "Desserts", "American", "Cafe"],
      menu: "https://texassugardaddies.com/#menu",
      hasMap:
        "https://www.google.com/maps/place/1135+Mission+Rd,+San+Antonio,+TX+78210",
      keywords:
        "catering San Antonio, San Antonio bakery, wedding catering, corporate catering, custom cakes, event venue, bakery near me, caterer San Antonio",
    };

    // Bakery Schema - Enhanced for Bakery SEO
    const bakerySchema = {
      "@context": "https://schema.org",
      "@type": "Bakery",
      name: "Texas Sugar Daddies - San Antonio Custom Bakery",
      url: "https://texassugardaddies.com",
      image: "https://texassugardaddies.com/og-image.jpg",
      description:
        "Premier custom bakery in San Antonio specializing in wedding cakes, birthday cakes, custom cakes, cupcakes, cookies, desserts, and fresh baked goods since 2017. Professional bakery services for all occasions.",
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

    // FoodEstablishment Schema for Restaurant/Cafe aspect
    const foodEstablishmentSchema = {
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      name: "Texas Sugar Daddies Cafe - San Antonio Lunch & Bakery Cafe",
      url: "https://texassugardaddies.com",
      description:
        "San Antonio lunch cafe and bakery offering daily specials, salad bar, grab-and-go items, and fresh baked goods. Open Tuesday-Thursday 11am-3pm.",
      servesCuisine: ["American", "Cafe", "Bakery", "Lunch"],
      telephone: "+1-210-281-1415",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1135 Mission Rd, Building 9",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78210",
        addressCountry: "US",
      },
      priceRange: "$$",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.4241,
        longitude: -98.4936,
      },
      openingHours: "Tu-Th 11:00-15:00",
      acceptsReservations: "True",
    };

    // Service Schema for Catering Services
    const cateringServiceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Catering Services",
      provider: {
        "@type": "LocalBusiness",
        name: "Texas Sugar Daddies - San Antonio Catering Company",
        telephone: "+1-210-281-1415",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1135 Mission Rd, Building 9",
          addressLocality: "San Antonio",
          addressRegion: "TX",
          postalCode: "78210",
          addressCountry: "US",
        },
      },
      description:
        "Professional full-service catering in San Antonio for weddings, corporate events, parties, and special occasions. Custom menus, on-site and off-site catering available.",
      areaServed: {
        "@type": "City",
        name: "San Antonio",
        "@id": "https://en.wikipedia.org/wiki/San_Antonio",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Catering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wedding Catering San Antonio",
              description: "Full-service wedding catering with custom menus",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Event Catering San Antonio",
              description:
                "Professional corporate catering for business events and meetings",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Party Catering San Antonio",
              description:
                "Custom catering for birthday parties, anniversaries, and celebrations",
            },
          },
        ],
      },
    };

    // EventVenue Schema
    const eventVenueSchema = {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      name: "Texas Sugar Daddies Event Venue - San Antonio",
      url: "https://texassugardaddies.com",
      description:
        "Full-service event venue in San Antonio accommodating up to 150 guests. Perfect for weddings, corporate events, parties, and special occasions with catering services available.",
      maximumAttendeeCapacity: 150,
      telephone: "+1-210-281-1415",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1135 Mission Rd, Building 9",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78210",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.4241,
        longitude: -98.4936,
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Full Kitchen",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Catering Services",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Event Planning",
          value: true,
        },
      ],
    };

    // BreadcrumbList Schema for better navigation
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://texassugardaddies.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "San Antonio Catering Services",
          item: "https://texassugardaddies.com#services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "San Antonio Bakery",
          item: "https://texassugardaddies.com#menu",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Event Venue",
          item: "https://texassugardaddies.com#services",
        },
      ],
    };

    // Add all schemas
    addSchemaScript(organizationSchema, "organization");
    addSchemaScript(localBusinessSchema, "local-business");
    addSchemaScript(bakerySchema, "bakery");
    addSchemaScript(foodEstablishmentSchema, "food-establishment");
    addSchemaScript(cateringServiceSchema, "catering-service");
    addSchemaScript(eventVenueSchema, "event-venue");
    addSchemaScript(breadcrumbSchema, "breadcrumb");
  }, []);

  return null;
}

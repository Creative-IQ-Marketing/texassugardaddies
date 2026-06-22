import { useEffect } from "react";
import { satxSchemaCities } from "../data/serviceAreas";

export default function StructuredData() {
  useEffect(() => {
    // WebSite Schema with Sitelinks SearchBox
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://texassugardaddies.com/#website",
      name: "Texas Sugar Daddies",
      url: "https://texassugardaddies.com",
      description:
        "San Antonio's premier custom bakery, catering company & event venue since 2017. Custom cakes, cupcakes, cookies, wedding catering, corporate catering, and full-service event venue for up to 150 guests.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://texassugardaddies.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    };

    // FAQ Schema — high-value questions for featured snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Texas Sugar Daddies make custom cakes in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Texas Sugar Daddies is San Antonio's premier custom cake studio. We create custom birthday cakes, wedding cakes, quinceañera cakes, anniversary cakes, baby shower cakes, and more — all made with premium ingredients. Order online or call (210) 281-1415.",
          },
        },
        {
          "@type": "Question",
          name: "What types of catering does Texas Sugar Daddies offer in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Texas Sugar Daddies offers full-service catering in San Antonio for weddings, corporate events, birthday parties, quinceañeras, anniversaries, and private celebrations. We provide custom menus, on-site and off-site catering, professional chefs, and on-time delivery for orders over $10.",
          },
        },
        {
          "@type": "Question",
          name: "Does Texas Sugar Daddies have an event venue in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Texas Sugar Daddies has a full-service event venue at 1135 Mission Rd, Building 9, San Antonio, TX 78210 that accommodates up to 150 guests. The venue is available for weddings, corporate events, birthday parties, quinceañeras, and special occasions, all with in-house catering available.",
          },
        },
        {
          "@type": "Question",
          name: "How do I order a custom wedding cake in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact Texas Sugar Daddies at (210) 281-1415 or visit texassugardaddies.com to place a custom wedding cake order. We offer fully custom designs, premium flavors, and have served over 500 clients across San Antonio, TX.",
          },
        },
        {
          "@type": "Question",
          name: "Does Texas Sugar Daddies offer corporate catering in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Texas Sugar Daddies specializes in corporate event catering throughout San Antonio, TX. From office lunch deliveries to large corporate galas, we provide professional chefs, custom menus, and flawless execution. Call (210) 281-1415 to book.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a cafe at Texas Sugar Daddies in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! The Texas Sugar Daddies cafe is open Tuesday–Thursday from 11:00 AM to 3:00 PM at 1135 Mission Rd, Building 9, San Antonio, TX 78210. We serve daily specials, a salad bar, grab-and-go items, and fresh baked goods.",
          },
        },
        {
          "@type": "Question",
          name: "What custom cookies does Texas Sugar Daddies make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Texas Sugar Daddies creates fully customized sugar cookies with edible custom printing, perfect for weddings, birthdays, baby showers, quinceañeras, and corporate events. We also make cupcakes and specialty cookies for all occasions in San Antonio, TX.",
          },
        },
        {
          "@type": "Question",
          name: "How much does catering cost in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Catering prices at Texas Sugar Daddies vary depending on event size, menu selections, and services needed. We offer competitive pricing for wedding catering, corporate catering, and private event catering in San Antonio. Contact us at (210) 281-1415 for a custom quote.",
          },
        },
      ],
    };

    // Organization Schema - Emphasizing services over brand name
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Texas Sugar Daddies",
      alternateName: "San Antonio Bakery & Catering Services",
      legalName: "Texas Sugar Daddies LLC",
      url: "https://texassugardaddies.com",
      logo: "https://texassugardaddies.com/logo.png",
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
        ...satxSchemaCities,
        { "@type": "State", name: "Texas" },
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
      "@id": "https://texassugardaddies.com/#localbusiness",
      name: "Texas Sugar Daddies - San Antonio Catering & Bakery",
      alternateName:
        "San Antonio Professional Catering Company & Custom Bakery",
      image: [
        "https://texassugardaddies.com/og-image.jpg",
        "https://texassugardaddies.com/hero.jpg",
        "https://texassugardaddies.com/og-image.jpg",
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
      areaServed: [...satxSchemaCities, { "@type": "State", name: "Texas" }],
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
      areaServed: satxSchemaCities,
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
    addSchemaScript(websiteSchema, "website");
    addSchemaScript(faqSchema, "faq");
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

// components/SchemaOrg.tsx
import { BUSINESS, SEO } from "@/lib/constants";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: BUSINESS.name,
    image: `${SEO.siteUrl}/og-image.jpg`,
    "@id": SEO.siteUrl,
    url: SEO.siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "₹₹",
    description: SEO.defaultDesc,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.1741,
      longitude: 72.4341,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Palanpur" },
      { "@type": "City", name: "Deesa" },
      { "@type": "City", name: "Chhapi" },
      { "@type": "City", name: "Vadgam" },
      { "@type": "City", name: "Danta" },
      { "@type": "City", name: "Ambaji" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cab Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local City Rides",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Outstation Cab Service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airport Transfer",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tour Packages",
          },
        },
      ],
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.youtube,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
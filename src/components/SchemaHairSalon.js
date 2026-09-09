export default function SchemaHairSalon() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Hos Frisören",
    inLanguage: "sv",
    url: "https://www.hosfrisoren.se",
    telephone: "+46 247 10038",
    email: "info@frisoren.se",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Torget 6",
      addressLocality: "Leksand",
      postalCode: "793 30",
      addressCountry: "SE",
    },
    areaServed: "Leksand",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "31",
    },
    description:
      "Professional hair salon with licensed stylists holding frisörlicens, gesällbrev, and mästarbrev certifications.",
    memberOf: {
      "@type": "Organization",
      name: "Frisörföretagarna",
      url: "https://frisor.se/",
    },
    services: [
      "Hair cutting",
      "Hair coloring",
      "Highlights",
      "Balayage",
      "Hair treatment",
      "Hair extensions",
      "Premium hair products",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "00:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/hosfrisoren",
      "https://www.facebook.com/HosFrisoren",
      "https://bokning.voady.se/hosfrisoren/hosfrisoren",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

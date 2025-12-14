"use client";

export default function SchemaHairSalon() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Hos Frisören",
    url: "https://www.hosfrisoren.se",
    telephone: "+46 247 10038",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Torget 6",
      addressLocality: "Leksand",
      postalCode: "793 30",
      addressCountry: "SE",
    },
    areaServed: "Leksand",
    openingHours: ["Mo 10:00-18:00", "Tu-Fr 09:00-18:00"],
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

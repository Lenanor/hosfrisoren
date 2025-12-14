import Link from "next/link";

import { montserrat, raleway } from "../fonts/fonts.js";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaHairSalon from "@/components/SchemaHairSalon.js";

export const metadata = {
  title: {
    default: "Hos Frisören | Frisör i Leksand",
    template: "%s | Hos Frisören",
  },
  description:
    "Hos Frisören erbjuder klippning, färg, slingor, balayage och hårförlängning. Försäljning av premiumhårprodukter och matchning av onlinepriser.",
  authors: [{ name: "Hos Frisören", url: "https://hosfrisoren.se" }],
  referrer: "strict-origin-when-cross-origin",
  creator: "Hos Frisören",
  publisher: "Hos Frisören",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.hosfrisoren.se",
  },
  openGraph: {
    siteName: "Hos Frisören",
    title: "Hos Frisören | Frisör i Leksand",
    description:
      "Hos Frisören i Leksand erbjuder klippning, färg, slingor, balayage, permanent och hårförlängning. Våra licensierade frisörer har gesäll- och mästarbrev. Vi säljer även premiumhårprodukter och matchar online priser.",
    url: "https://www.hosfrisoren.se",
    locale: "sv_SE",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className={`${montserrat.variable} ${raleway.variable}`}>
      <head>
        <SchemaHairSalon />
      </head>
      <body>
        <Link href="#main-content" id="skip-link">
          Till huvudinnehållet
        </Link>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

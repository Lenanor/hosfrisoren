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
    "Hos Frisören erbjuder klippning, färg, slingor, balayage, permanent och hårförlängning. Vi säljer premiumhårprodukter och matchar onlinepriser. Våra licensierade frisörer har gesäll- och mästarbrev.",
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
      {/* <head></head> */}
      {/* Next.js is generating the <head> tag automatically from the metadata export! */}
      <body>
        <Link href="#main-content" id="skip-link">
          Till huvudinnehållet
        </Link>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <SchemaHairSalon />
      </body>
    </html>
  );
}

import Link from "next/link";

import { montserrat, raleway } from "../fonts/fonts.js";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hos Frisören | Frisörsalong i Leksand ",
  description:
    "Licensierade frisörer med passion för färg och form. Återförsäljare av Kevin Murphy, Living Proof, K18, Eleven och Epres.",
  authors: [{ name: "Hos Frisören", url: "https://hosfrisoren.se" }],
  referrer: "no-referrer",
  creator: "Hos Frisören",
  publisher: "Hos Frisören",
  icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
  apple: [{ url: "/apple-touch-icon.png" }],
};

export const viewport = {
  themeColor: "black",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className={`${montserrat.variable} ${raleway.variable}`}>
      <head></head>
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

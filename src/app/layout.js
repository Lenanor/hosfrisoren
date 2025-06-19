import Link from "next/link";

import { montserrat, raleway } from "../fonts/fonts";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hos Frisören | Frisörsalong i Leksand ",
  description:
    "Hos Frisören i Leksand – Vi är licensierade frisörer med passion för färg, form och hårhantverk. Varmt välkommen!",
  keywords: [
    "frisör",
    "frisörsalong",
    "boka frisör",
    "hårvård",
    "Hos Frisören",
    "Leksand",
    "Dalarna",
    "klippning",
    "färgning",
    "slingor",
    "permanent",
    "balayage",
    "foliage",
    "styling",
    "detox",
    "tape extensions",
    "keratin extensions",
    "Hårbottenmassage",
    "fransfärg",
    "brynfärg",
    "hårprodukter",
  ],
  authors: [{ name: "Hos Frisören", url: "https://hosfrisoren.se" }],
  generator: "Next.js",
  applicationName: "Hos Frisören",
  referrer: "origin-when-cross-origin",
  creator: "Hos Frisören",
  publisher: "Hos Frisören",
  robots: "index, follow",
  icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
  apple: [{ url: "/apple-touch-icon.png" }],
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

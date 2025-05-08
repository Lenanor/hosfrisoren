import localFont from "next/font/local";

export const nunito = localFont({
  src: [
    {
      path: "/Nunito-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/Nunito-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
  fallback: ["Segoe UI", "Helvetica", "Arial", "sans-serif"],
});

export const lora = localFont({
  src: "/Lora-SemiBold.woff2",
  variable: "--font-lora",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "sans-serif"],
  // adjustFontFallback: "Times New Roman",
});

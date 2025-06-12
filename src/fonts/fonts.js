import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "./Montserrat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Montserrat-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Montserrat-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

export const raleway = localFont({
  src: [
    {
      path: "./Raleway-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Raleway-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

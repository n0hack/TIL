import localFont from "next/font/local";

export const suit = localFont({
  src: "./SUIT-Variable.woff2",
  variable: "--font-suit",
  weight: "100 900",
  fallback: ["sans-serif"],
});

export const tossFace = localFont({
  src: "./TossFaceFontMac.ttf",
  variable: "--font-tossface",
});

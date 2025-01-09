import localFont from "next/font/local";

import { Plus_Jakarta_Sans } from "next/font/google";
export const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const custom_rtl_font = localFont({
  src: [
    {
      path: "./fonts/BahijLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Bahij.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BahijBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-custom-rtl", // Optional: for use with Tailwind's `font-['var(--font-custom-rtl)']`
  display: "swap", // Controls how the font is displayed during loading
});

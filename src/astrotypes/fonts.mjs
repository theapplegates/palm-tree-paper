import { fontProviders } from "astro/config";

export const astrotypeFonts = [
  {
    provider: fontProviders.google(),
    name: "DM Sans",
    cssVariable: "--font-dm-sans"
  },
  {
    provider: fontProviders.google(),
    name: "Playfair Display",
    cssVariable: "--font-playfair-display"
  }
];

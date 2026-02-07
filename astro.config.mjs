// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        provider: fontProviders.local(),
        fallbacks: ["monospace"],
        weights: ["100 900"],
        subsets: ["latin"],
        options: {
          variants: [
            {
              src: ["./src/assets/fonts/JetBrainsMono-VariableFont_wght.ttf"],
            },
          ],
        },
      },
    ],
  },
});

import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/web-portfolio',
  site: 'https://enricplanasmulet.github.io',
  integrations: [tailwind()]
});
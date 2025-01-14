// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from "./integrations/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()]
});
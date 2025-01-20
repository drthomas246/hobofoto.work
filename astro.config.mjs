// @ts-check
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import rehypeMathML from '@daiji256/rehype-mathml';
import { defineConfig } from 'astro/config';
import remarkDirective from "remark-directive";
import remarkMath from 'remark-math';
import remarkRubyDirective from "./src/plugins/remarkRuby";
import remarkRubyStringDirective from "./src/plugins/remarkRubyString";
import remarkTalkingLeftDirective from "./src/plugins/remarkTalkingLeft";
import remarkTalkingRightDirective from "./src/plugins/remarkTalkingRight";
import remarkVimeoDirective from "./src/plugins/remarkVimeo";

// https://astro.build/config
export default defineConfig({
  site: "https://www.hobofoto.work/",
  integrations: [
    react(),
    sitemap(
      {
        filter: (page) =>
          page !== "https://www.hobofoto.work/aboutme/confirm/" &&
          page !== "https://www.hobofoto.work/aboutme/thanks/"
      }
    )
  ],

  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkDirective,
      remarkVimeoDirective,
      remarkRubyStringDirective,
      remarkTalkingLeftDirective,
      remarkTalkingRightDirective,
      remarkRubyDirective
    ],
    rehypePlugins: [rehypeMathML],
  },
  output: "server",
  adapter: vercel()
});
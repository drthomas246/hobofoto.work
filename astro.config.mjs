// @ts-check
import react from '@astrojs/react';
import rehypeMathML from '@daiji256/rehype-mathml';
import { defineConfig } from 'astro/config';
import remarkDirective from "remark-directive";
import remarkMath from 'remark-math';
import sitemap from "./integrations/sitemap";
import remarkRubyDirective from "./src/plugins/remarkRuby";
import remarkRubyStringDirective from "./src/plugins/remarkRubyString";
import remarkTalkingLeftDirective from "./src/plugins/remarkTalkingLeft";
import remarkTalkingRightDirective from "./src/plugins/remarkTalkingRight";
import remarkVimeoDirective from "./src/plugins/remarkVimeo";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
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
  }
});
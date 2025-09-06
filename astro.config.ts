// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import rehypeMathML from "@daiji256/rehype-mathml";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import remarkMath from "remark-math";
import { CopyFilesPlugin } from "./copy-files";
import remarkRubyDirective from "./src/plugins/remarkRuby";
import remarkRubyStringDirective from "./src/plugins/remarkRubyString";
import remarkTalkingLeftDirective from "./src/plugins/remarkTalkingLeft";
import remarkTalkingRightDirective from "./src/plugins/remarkTalkingRight";
import remarkVimeoDirective from "./src/plugins/remarkVimeo";
import rehypeIndent from "./src/plugins/rehypeIndent";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  site: "https://www.hobofoto.work/",
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        page !== "https://www.hobofoto.work/aboutme/confirm/" &&
        page !== "https://www.hobofoto.work/aboutme/thanks/",
    }),
    pagefind(),
    CopyFilesPlugin(),
  ],

  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
    },
    remarkPlugins: [
      remarkMath,
      remarkDirective,
      remarkVimeoDirective,
      remarkRubyStringDirective,
      remarkTalkingLeftDirective,
      remarkTalkingRightDirective,
      remarkRubyDirective,
    ],
    rehypePlugins: [rehypeMathML, rehypeIndent],
  },
  output: "static",
  adapter: vercel(),
});

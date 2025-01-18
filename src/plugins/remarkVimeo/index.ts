import type { Root } from "mdast";
import type { ContainerDirective } from "mdast-util-directive";
import { is } from "unist-util-is";
import { visit } from "unist-util-visit";
import { isParagraph } from "../utils";

export default function remarkEmbedYouTubePlugin() {
  return function (tree: Root) {
    visit(tree, isParagraph, (node, index, parent) => {
      if (index === undefined || parent === undefined) return;

      const firstChild = node.children[0];
      if (!is(firstChild, "link")) return;
      if (!firstChild.url.startsWith("https://player.vimeo.com/")) return;
      const firstLinkChild = firstChild.children[0];
      if (!is(firstLinkChild, "text")) return;
      if (firstLinkChild.value !== firstChild.url) return;

      const pathname = new URL(firstChild.url).pathname;
      if (pathname === null) return;
      const title = new URL(firstChild.url).searchParams.get("title");
      if (title === null) return;
      const byline = new URL(firstChild.url).searchParams.get("byline");
      if (byline === null) return;
      const portrait = new URL(firstChild.url).searchParams.get("portrait");
      if (portrait === null) return;

      const newNode: ContainerDirective = {
        type: "containerDirective",
        name: "vimeo",
        data: {
          hName: "div",
          hProperties: {
            class: "iframe-wrapper",
          },
          hChildren: [
            {
              type: "element",
              tagName: "iframe",
              properties: {
                src: `https://player.vimeo.com${pathname}?=title=${title}&byline=${byline}&portrait=${portrait}`,
                frameborder:"0",
                allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: true
              },
              children: [],
            },
          ],
        },
        children: [],
      };
      parent.children[index] = newNode;
    });
  };
}
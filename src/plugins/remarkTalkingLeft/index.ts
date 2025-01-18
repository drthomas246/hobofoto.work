/// <reference types="mdast-util-directive" />

import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { isText, isTextDirective } from "../utils";

const remarkTalkingLeftDirective: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, isTextDirective, (node) => {
      if (node.name !== "talkingLeft") return;
      if (node.children.length === 0) return;
      if (!isText(node.children[0])) return;

      const textNode = node.children[0];

      node.data = {
        ...node.data,
        hName: "div",
        hProperties: {
          class:"talking left"
        },
        hChildren: [
          {
            type: "element",
            tagName: "figure",
            properties: {class:"talking-left_icon"},
            children:
            [
              {
                type: "element",
                tagName: "img",
                properties: {
                  src: "/talking/MissMath.png",
                  alt: "talkingLeft",
                },
                children: []
              },
              {
                type: "element",
                tagName: "figcaption",
                properties: {},
                children: [
                  {
                    type: "text",
                    value: "数学ちゃん"
                  }
                ]
              }
            ]
          },
          {
            type: "element",
            tagName: "div",
            properties: {
              class:"talking-left"
            },
            children: [
              {
                type: "element",
                tagName: "p",
                properties: {},
                children: [
                  {
                    type: "text",
                    value: textNode.value
                  }
                ]
              }
            ]
          }
        ],
      };
    });
  };
};

export default remarkTalkingLeftDirective;
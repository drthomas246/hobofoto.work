/// <reference types="mdast-util-directive" />

import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { isText, isTextDirective } from "../utils";

const remarkTalkingRightDirective: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, isTextDirective, (node) => {
      if (node.name !== "talkingRight") return;
      if (node.children.length === 0) return;
      if (!isText(node.children[0])) return;

      const textNode = node.children[0];

      node.data = {
        ...node.data,
        hName: "div",
        hProperties: {
          class:"talking right"
        },
        hChildren: [
          {
            type: "element",
            tagName: "figure",
            properties: {class:"talking-right_icon"},
            children:
            [
              {
                type: "element",
                tagName: "img",
                properties: {
                  src: "/talking/MrYoshi.jpg",
                  alt: "talkingRight",
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
                    value: "博士"
                  }
                ]
              }
            ]
          },
          {
            type: "element",
            tagName: "div",
            properties: {
              class:"talking-right"
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

export default remarkTalkingRightDirective;
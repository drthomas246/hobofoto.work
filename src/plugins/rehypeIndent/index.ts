// src/plugins/rehypeIndent/index.ts
import type { Root, Element, Text, Properties } from "hast";
import type { Plugin, Transformer } from "unified";
import { visit } from "unist-util-visit";

/** className を常に string[] に正規化して付与 */
function addClass(props: Properties, name: string) {
  const cls = props.className as unknown;
  const list = Array.isArray(cls)
    ? (cls as string[])
    : typeof cls === "string"
      ? cls.split(/\s+/).filter(Boolean)
      : [];
  if (!list.includes(name)) list.push(name);
  props.className = list;
}

/** 段落の“最初に現れるテキスト”を子孫まで潜って取得 */
function firstTextDeep(node: Element): string {
  if (!node.children) return "";
  for (const child of node.children as any[]) {
    if (child.type === "text" && typeof child.value === "string") {
      const v = child.value.trim();
      if (v) return v;
    }
    if (child.type === "element" && Array.isArray(child.children)) {
      const v = firstTextDeep(child as Element);
      if (v) return v;
    }
  }
  return "";
}

/** 「と『で始まらない段落に indent を付与する rehype プラグイン */
const rehypeIndent: Plugin<[], Root> = function indent(): Transformer<Root> {
  return function transform(tree: Root): Root {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "p") return;

      // 段落の先頭の“可視文字”を（入れ子を辿って）取得
      const head = firstTextDeep(node).trim();
      const ch = head.charAt(0);
      if (ch === "「" || ch === "『") return; // 先頭がカギ括弧なら付けない

      node.properties ||= {};
      addClass(node.properties, "indent");
    });
    return tree;
  };
};

export default rehypeIndent;

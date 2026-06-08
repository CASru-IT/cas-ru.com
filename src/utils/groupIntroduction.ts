import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import production from "react/jsx-runtime";

export const GROUP_INTRODUCTION_DIR = path.join(
  process.cwd(),
  "src/groupIntroduction",
);

export function getAllGroupName() {
  const files = fs.readdirSync(GROUP_INTRODUCTION_DIR);
  if (files) {
    return files
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.split(".")[0]);
  } else {
    return [];
  }
}

type ElementType<T> = T extends (infer U)[] ? U : unknown;
type GroupNameType = ElementType<ReturnType<typeof getAllGroupName>>;

export function getGroupInfo(groupName: GroupNameType) {
  const file = fs.readFileSync(
    path.join(GROUP_INTRODUCTION_DIR, `${groupName}.md`),
  );
  return matter(file).data;
}

export async function getGroupContent(groupName: GroupNameType) {
  const file = fs.readFileSync(
    path.join(GROUP_INTRODUCTION_DIR, `${groupName}.md`),
  );
  const jsx = await unified()
    .use(remarkParse, { fragment: true })
    .use(remarkRehype)
    .use(rehypeReact, production)
    .process(matter(file).content);
  return jsx.result;
}

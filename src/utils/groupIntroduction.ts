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

const SAFE_GROUP_NAME_REGEX = /^[a-zA-Z0-9_-]+$/;

type GroupIntroductionFrontMatter = {
  name: string;
  icon: string;
  header: string;
};

function isGroupIntroductionFrontMatter(
  data: unknown,
): data is GroupIntroductionFrontMatter {
  return (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    "icon" in data &&
    "header" in data
  );
}

export function getAllGroupName() {
  const files = fs.readdirSync(GROUP_INTRODUCTION_DIR);
  if (files) {
    return files
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.split(".")[0])
      .filter((groupName) => SAFE_GROUP_NAME_REGEX.test(groupName));
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
  const frontMatter = matter(file).data;
  if (!isGroupIntroductionFrontMatter(frontMatter)) {
    throw new Error(`Invalid front matter for group: ${groupName}`);
  }
  return frontMatter;
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

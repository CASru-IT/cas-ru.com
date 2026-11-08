import { fs, vol } from "memfs";
import { join } from "path";
import { renderToStaticMarkup } from "react-dom/server";
import { Fragment } from "react/jsx-runtime";
import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  GROUP_INTRODUCTION_DIR,
  getAllGroupName,
  getGroupContent,
  getGroupInfo,
} from "./groupIntroduction";

vi.mock("fs", () => {
  const mem = require("memfs");
  return { default: mem.fs, ...mem.fs };
});
vi.mock("fs/promise", () => {
  const mem = require("memfs");
  return { default: mem.promise, ...mem.promise };
});

beforeEach(() => {
  vol.reset();
});

describe("getAllGroupName", () => {
  test("should throw no such file or directory by no directory", () => {
    expect(() => getAllGroupName()).toThrow();
  });
  test("should return empty list without any file", () => {
    fs.mkdirSync(GROUP_INTRODUCTION_DIR, { recursive: true });
    const allGroupName = getAllGroupName();
    expect(allGroupName).toEqual([]);
  });

  test("should return correct group name", () => {
    const path = join(GROUP_INTRODUCTION_DIR, "anime.md");
    fs.mkdirSync(GROUP_INTRODUCTION_DIR, { recursive: true });
    fs.writeFileSync(path, "");

    const allGroupName = getAllGroupName();
    expect(allGroupName).toStrictEqual(["anime"]);
  });
});

describe("getGroupInfo", () => {
  test("should throw no such file or directory by no directory", () => {
    expect(() => {
      getGroupInfo("anime");
    }).toThrow();
  });

  test("should throw no such file or director by no file", () => {
    fs.mkdirSync(GROUP_INTRODUCTION_DIR, { recursive: true });
    expect(() => {
      getGroupInfo("anime");
    }).toThrow();
  });

  test("should throw invalid front matter by empty file", () => {
    fs.mkdirSync(GROUP_INTRODUCTION_DIR, { recursive: true });
    const path = join(GROUP_INTRODUCTION_DIR, "anime.md");
    fs.writeFileSync(path, "");

    expect(() => {
      getGroupInfo("anime");
    }).toThrow();
  });

  test("should return correct info", () => {
    fs.mkdirSync(GROUP_INTRODUCTION_DIR, { recursive: true });
    const path = join(GROUP_INTRODUCTION_DIR, "anime.md");
    fs.writeFileSync(
      path,
      `---
name: anime
icon: /groups/icon/anime.png
header: /groups/header/anime.jpg
---`,
    );

    const groupInfo = getGroupInfo("anime");
    expect(groupInfo).toStrictEqual({
      name: "anime",
      icon: "/groups/icon/anime.png",
      header: "/groups/header/anime.jpg"
    });
  });
});

describe("getGroupContent", () => {
  test("should throw no such file or directory by no directory", async () => {
    await expect(async () => {
      await getGroupContent("anime");
    }).rejects.toThrow();
  });

  test("should throw no such file or directory by no file", async () => {
    fs.mkdirSync(GROUP_INTRODUCTION_DIR, { recursive: true });

    await expect(async () => {
      await getGroupContent("anime");
    }).rejects.toThrow();
  });

  test("should return undefined by empty file", async () => {
    fs.mkdirSync(GROUP_INTRODUCTION_DIR, { recursive: true });
    const path = join(GROUP_INTRODUCTION_DIR, "anime.md");
    fs.writeFileSync(path, "");

    const content = getGroupContent("anime");
    await expect(content).resolves.toEqual(<></>);
  });

  test("should return undefined by file written only frontmatter", async () => {
    fs.mkdirSync(GROUP_INTRODUCTION_DIR, { recursive: true });
    const path = join(GROUP_INTRODUCTION_DIR, "anime.md");
    fs.writeFileSync(
      path,
      `---
name: anime
---`,
    );

    const content = getGroupContent("anime");
    await expect(content).resolves.toEqual(<></>);
  });

  test("should return correct react element", async () => {
    fs.mkdirSync(GROUP_INTRODUCTION_DIR, { recursive: true });
    const path = join(GROUP_INTRODUCTION_DIR, "anime.md");
    fs.writeFileSync(
      path,
      `---
name: anime
---

# headding1
`,
    );

    // JSX要素を直接toStrictEqualで比較すると失敗するので、レンダリングして比較
    const content = await getGroupContent("anime");
    const rendered = renderToStaticMarkup(content);
    const expected = renderToStaticMarkup(
      <>
        <h1>headding1</h1>
      </>,
    );
    await expect(rendered).toBe(expected);
  });
});

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="/hero.png"
          alt="CASるのヒーローイメージ"
          width={1280}
          height={720}
          className="h-screen max-h-screen min-w-full object-cover"
        />
        <ul className="flex flex-wrap gap-4 text-nowrap justify-around px-4 py-2 absolute bottom-0 min-w-full w-full bg-white text-black text-2xl font-medium">
          <li>
            <a href="#about">概要</a>
          </li>
          <li>
            <a href="#introduction">班紹介</a>
          </li>
          <li>
            <a href="#location">活動場所</a>
          </li>
          <li>
            <a href="#membership">入会方法</a>
          </li>
          <li>
            <a href="#contact">連絡先</a>
          </li>
        </ul>
      </div>
    </>
  );
}

import Image from "next/image";

const Section = ({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <section id={id} className="max-w-2xl mx-auto px-4 py-8 bg-white mb-8">
      <h2 className="text-center mx-auto w-2/3 border-b-2 border-black text-3xl font-medium p-2 mb-2">
        {title}
      </h2>
      <div className="p-2">{children}</div>
    </section>
  );
};

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

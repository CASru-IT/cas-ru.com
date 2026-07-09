import { getAllGroupName, getGroupInfo } from "@/utils/groupIntroduction";
import Image from "next/image";
import Link from "next/link";

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
        <Section title="サークル概要" id="about">
          CASるは、イラスト/音楽/ゲームなどの創作、アニメ視聴/ゲームプレイ/TRPGセッションなどが活動の多くを占めている。メンバーは総勢200人を超え、内部は「班」と呼ばれる複数の職能別の小組織から成り立っています。班では同じような興味で集まった仲間とともに班のテーマに沿って自由に活動します。
        </Section>
        <Section title="班紹介" id="introduction">
          CASるは200人を超える巨大なサークルです。職能集団である班に分かれて活動しています。
          <div className="mx-auto flex flex-wrap justify-center gap-4 p-4">
            {getAllGroupName().map((groupName) => {
              const groupInfo = getGroupInfo(groupName);
              return (
                <div key={groupName}>
                  <Link href={`/groups/${groupName}`} className="">
                    <Image
                      src={groupInfo.icon}
                      alt={groupInfo.name}
                      className="mx-auto w-28 h-28 object-cover aspect-auto rounded-lg"
                      width={100}
                      height={100}
                    />
                    <div className="text-lg text-center text-nowrap">
                      {groupInfo.name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </Section>
      </div>
    </>
  );
}

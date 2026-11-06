import { getAllGroupName, getGroupInfo } from "@/utils/groupIntroduction";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import { InstagramIcon, TwitterIcon, MailIcon } from "@/components/icons";

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
          <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-6">
            {getAllGroupName().map((groupName) => {
              const groupInfo = getGroupInfo(groupName);
              return (
                <div key={groupName} className="w-full">
                  <Link href={`/groups/${groupName}`} className="">
                    <Image
                      src={groupInfo.icon}
                      alt={groupInfo.name}
                      className="mx-auto w-full object-cover aspect-square rounded-lg"
                      width={100}
                      height={100}
                    />
                    <div className="text-sm text-center text-nowrap">
                      {groupInfo.name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </Section>
        <Section title="活動場所" id="location">
          <div className="flex justify-center">
            主に角間キャンパス北地区大学会館第4・5中会議室（通称4・5中）で活動しています。
            <br />
            他にもサークル棟やオンライン（Discordサーバー）でも活動しています。
            {/* 活動場所を説明する画像を置く */}
          </div>
        </Section>
        <Section title="入会方法" id="membership">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 w-fit mx-auto">
            <div className="max-w-2xs">
              <div className="text-9xl font-extrabold relative top-8 right-4 text-gray-300 z-0">
                1
              </div>
              <h3 className="text-lg font-bold relative z-10">
                新歓サーバーに参加
              </h3>
              <p>
                CASるはDiscordとういチャットアプリで活動しています。まずは新歓サーバーで活動の雰囲気を掴もう！
              </p>
            </div>
            <div className="max-w-2xs">
              <div className="text-9xl font-extrabold relative top-8 right-4 text-gray-300 z-0">
                2
              </div>
              <h3 className="text-lg font-bold relative z-10">
                新歓サーバー内で交流
              </h3>
              <p>
                ビンゴ大会等の新歓イベント情報も流れてくる。CASるの日常であるボイスチャットでの雑談も！
              </p>
            </div>
            <div className="max-w-2xs">
              <div className="text-9xl font-extrabold relative top-8 right-4 text-gray-300 z-0">
                3
              </div>
              <h3 className="text-lg font-bold relative z-10">
                総会で会費支払い/入会
              </h3>
              <p>
                5月頃に行われる新歓総会にて、年会費¥5,000を支払って入会完了！
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              href="https://discord.gg/57rZ3rM6BE"
              target="_blank"
              rel="noopener noreferrer"
              as={Link}
            >
              新歓サーバーに参加
            </Button>
          </div>
        </Section>
        <Section title="連絡先" id="contact">
          <ul className="w-fit mx-auto">
            <li>
              <TwitterIcon className="inline-block mr-2" />
              <Link
                href="https://x.com/casrunahibi"
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-500"
              >
                CASるな日々　金沢大学公認サークル
              </Link>
            </li>
            <li>
              <InstagramIcon className="inline-block mr-2" />
              <Link
                href="https://www.instagram.com/cas_ru.inst_hibi/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-500"
              >
                CASるな日々(金沢大学公認サークル)
              </Link>
            </li>
            <li>
              <MailIcon className="inline-block mr-2" />
              <Link
                href="maileto:cas_executive2026@googlegroups.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-500"
              >
                cas_executive2026@googlegroups.com
              </Link>
            </li>
          </ul>
        </Section>
      </div>
    </>
  );
}

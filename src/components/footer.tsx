import Link from "next/link";
import { getAllGroupName, getGroupInfo } from "@/utils/groupIntroduction";

export default function Footer() {
  const groupNames = getAllGroupName();
  return (
    <footer className="mx-auto w-11/12 max-w-lg m-4">
      <div className="mb-4 border-b-2 w-full text-center p-2">
        <h2 className="text-3xl font-bold">
          <Link href="/">CASる</Link>
        </h2>
        <div className="text-sm font-medium">
          金沢大学 漫画・アニメ・SFサークル
        </div>
      </div>
      <ul className="flex justify-around w-full flex-wrap">
        <li className="w-full max-w-56">
          <h3 className="font-bold text-xl text-center mb-2">
            <Link href="/groups">班紹介</Link>
          </h3>
          <ul className="flex flex-wrap gap-x-1 mx-auto justify-around">
            {groupNames.map((name) => {
              const info = getGroupInfo(name);
              return (
                <li
                  key={name}
                  className="w-5/12 text-sm font-medium text-nowrap grow"
                >
                  <Link href={`/groups/${name}`}>{info.name}</Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="w-full max-w-54">
          <h3 className="font-bold text-xl text-center mb-2">
            <Link
              href="https://wiki.cas-ru.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wiki
            </Link>
          </h3>
          <ul></ul>
        </li>
        <li className="w-full max-w-54">
          <h3 className="font-bold text-xl text-center mb-2">
            <Link href="/constitution">会則</Link>
          </h3>
        </li>
      </ul>
    </footer>
  );
}

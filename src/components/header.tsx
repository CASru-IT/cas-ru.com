import Link from "next/link";

export default function Header() {
  return (
    <header className="flex fixed top-0 w-full p-2 items-center backdrop-blur-lg font-bold z-50 text-shadow-[0_0_4px_hsla(0,0%,0%,0.3)] text-white bg-gray-500/20">
      <h1 className="text-3xl font-extrabold pl-1">
        <Link href="/">CASる</Link>
      </h1>
      <ul className="ml-auto flex gap-4 text-xl pr-3">
        <li>
          <Link href="/groups">班紹介</Link>
        </li>
        <li>
          <Link
            href="https://wiki.cas-ru.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wiki
          </Link>
        </li>
        <li>
          <Link href="/cas-ru-constitution.pdf">会則</Link>
        </li>
      </ul>
    </header>
  );
}

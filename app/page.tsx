import Image from "next/image"
import Link from "next/link";
// import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <h1>こんにちは</h1>
      <Link href={'/login/'}>login</Link>
    </main>
  );
}
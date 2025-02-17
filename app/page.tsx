import Image from "next/image";
import Link from "next/link";
import style from "./page.module.scss";
import Button from "./components/button/button";
import { Stint_Ultra_Condensed } from "next/font/google";

export default function Home() {
  return (
    <>
      <section className={style.section__fullScreen__gradation}>
        <h1 className={style.heading1}>ようこそ</h1>
        <p className={style.paragraph}>
          制作/創作/開発の
          <br />
          総合コミュニティCASるは
          <br />
          人間関係を提供します。
          <br />
          イラスト/音楽/プログラミング/ゲーム開発/裁縫/工作/TRPGなど、
          <br />
          様々な仲間が
          <br />
          それぞれの趣味に
          <br />
          打ち込んでいます。
        </p>
        <div className={style.buttonGroup__center}>
          <Button action={"/join-us"}>Join Us</Button>
          <Button action={""}>Events</Button>
        </div>
      </section>
      <section className={style.section__fullScreen__black}>
        <h2 className={style.heading2}>
          <div className={style.heading2__mainText}>About</div>
          <div className={style.heading2__subText}>CASるについて</div>
        </h2>
        <p className={style.paragraph__enphasis}>
          総参加者数<span className={style.fontSize1}>200</span>人超
          <br />
          8つ班から構成
          <br />
        </p>
        <p className={style.paragraph}>
          金沢大学公認サークルの一つで、主に創作に関する8つの班から構成され、それぞれの班が目標に向かって日々創作活動を行っています。
        </p>
        <div className={style.buttonGroup__center}>
          <div className={style.buttonGroup__center}>
            <Button action={"/about"}>About</Button>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <h2 className={style.heading2}>
          <div className={style.heading2__mainText}>Articles</div>
          <div className={style.heading2__subText}>記事</div>
        </h2>
        <div className={style.buttonGroup__center}>
          <Button action={"/articles"}>Articles</Button>
        </div>
      </section>
      <section className={style.section}>
        <h2 className={style.heading2}>
          <div className={style.heading2__mainText}>Join us</div>
          <div className={style.heading2__subText}>参加方法</div>
        </h2>
        <p className={style.paragraph}>ちょっとよくわからないなぁ</p>
        <div className={style.buttonGroup__center}>
          <Button action={"/join-us"}>Join us</Button>
        </div>
      </section>
      <section className={style.section}>
        <h2 className={style.heading2}>
          <div className={style.heading2__mainText}>Contact</div>
          <div className={style.heading2__subText}>問い合わせ</div>
        </h2>
        <p className={style.paragraph}>
          気になることがありましたら気軽にお問い合わせください。
        </p>
        <div className={style.buttonGroup__vertical}>
          <Button
            className={style.buttonGroup__vertical__item}
            action={"https://x.com/IT7710049682143"}
          >
            Twitter
          </Button>
          <Button
            className={style.buttonGroup__vertical__item}
            action={"casru_executive@googlegroups.com"}
          >
            casru_executive@googlegroups.com
          </Button>
        </div>
      </section>
    </>
  );
}

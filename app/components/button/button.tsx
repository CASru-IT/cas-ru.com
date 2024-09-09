"use client";
import Link from "next/link";
import style from "./button.module.scss";
import { Twitter, Instagram, Github, ExternalLink } from "lucide-react";

export default function Button({
  children,
  beforeIcon: BeforeIconName,
  external,
  action,
}: Readonly<{
  children: React.ReactNode;
  beforeIcon?: "Twitter" | "Instagram" | "GitHub";
  external?: boolean;
  action: (() => void) | string;
}>) {
  function BeforeIcon(): React.ReactNode {
    switch (BeforeIconName) {
      case "Twitter":
        return <Twitter className={style.beforeIcon} />;
      case "Instagram":
        return <Instagram className={style.beforeIcon} />;
      case "GitHub":
        return <Github className={style.beforeIcon} />;
    }
  }

  if (typeof action === "string") {
    if (external) {
      return (
        <a href={action} className={style.buttonContainer} target="_blank">
          <div className={style.buttonInner}>
            <BeforeIcon />
            {children}
            {external ? <ExternalLink className={style.afterIcon} /> : null}
          </div>
        </a>
      );
    } else {
      return (
        <Link href={action} className="buttonContainer">
          <BeforeIcon />
          {children}
        </Link>
      );
    }
  } else if (typeof action === "function") {
    return (
      <button onClick={action} className={style.buttonContainer}>
        <BeforeIcon />
        <div className={style.buttonInner}>{children}</div>
        {external ? <ExternalLink className={style.afterIcon} /> : null}
      </button>
    );
  }
}

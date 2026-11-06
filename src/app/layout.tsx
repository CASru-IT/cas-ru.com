import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const notoSansVariable = Noto_Sans_JP({ weight: "variable" });

export const metadata: Metadata = {
  title: "CASる",
  description: "CASる(金沢大学漫画・アニメ・SFサークル)の公式サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp" className={`${notoSansVariable} antialiased`}>
      <body className="font-light">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

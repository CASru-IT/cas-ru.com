import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "ress";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const noto = Noto_Sans_JP({
  weight: ["300", "400"],
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={noto.className}>{children}</body>
    </html>
  );
}

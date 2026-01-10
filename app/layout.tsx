import type { Metadata } from "next";
import { Noto_Sans_JP, Montserrat, Noto_Serif_JP } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
});

const notosserifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "星川だいち 公式サイト | Logic & Passion",
  description: "奈良県議会議員 星川だいちの公式サイト。事件が起きない奈良へ。県民の「もっとこうだったら」を、仕組みとして実現する。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${montserrat.variable} ${notosserifJP.variable} font-sans antialiased bg-gray-100 text-slate-800`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

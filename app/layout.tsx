import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import AnalyticsConsent from "@/components/analytics/AnalyticsConsent";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

// フォントの最適化（Google Fontsを高速読み込み）
// Updated: Force Deploy
const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.daichi-star.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'VN8bBHoMrjzGqSON_YUTqjmgfbBNGxOpw0YTaLrciOg',
  },
  title: {
    template: '%s | 奈良県議会議員 星川大地 公式サイト',
    default: '星川大地 | 奈良県議会議員（元警察官・日本維新の会）',
  },
  description: '事件が起きてから動くのではなく、事件が起きない奈良へ。元警察官の奈良県議会議員、星川大地（日本維新の会）の公式サイト。子育て・防犯、地域交通、観光・地域産業、防災などの政策と活動を紹介します。',
  keywords: ["星川大地", "奈良県議会議員", "奈良市", "山辺郡", "日本維新の会", "元警察官", "政治家", "選挙", "奈良県議会"],
  authors: [{ name: "星川大地" }],
  creator: "星川大地事務所",
  publisher: "星川大地事務所",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '星川大地 | 奈良県議会議員（元警察官）',
    description: '事件が起きてから動くのではなく、事件が起きない奈良へ。星川大地の政策と活動を紹介します。',
    url: 'https://www.daichi-star.com',
    siteName: '星川大地 公式サイト',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/ogp.jpg',
        width: 1200,
        height: 630,
        alt: '星川大地 メインビジュアル',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '星川大地 | 奈良県議会議員',
    description: '事件が起きない奈良へ。星川大地の政策と活動を紹介します。',
    images: ['/images/ogp.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ▼ 構造化データ（JSON-LD）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.daichi-star.com/#person",
  "name": "星川 大地",
  "jobTitle": "奈良県議会議員",
  "url": "https://www.daichi-star.com",
  "image": "https://www.daichi-star.com/images/sidebar_final.jpg",
  "sameAs": [
    "https://twitter.com/daichi_star/",
    "https://www.instagram.com/daichi_star12/",
    "https://www.facebook.com/profile.php?id=100089702911147"
  ],
  "description": "元警察官の奈良県議会議員。日本維新の会所属。奈良市・山辺郡選出。子育て・防犯、地域交通、観光・地域産業、防災に取り組む。",
  "memberOf": {
    "@type": "Organization",
    "name": "日本維新の会"
  },
  "knowsAbout": ["地域防災", "子育て支援", "観光振興"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans antialiased bg-gray-100 text-slate-800`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <AnalyticsConsent />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import MobileHeader from "@/components/layout/MobileHeader";

const title = "星川大地 プロフィール";
const description = "奈良県議会議員・星川大地の経歴、選挙区、所属会派、所属委員会を紹介します。奈良市・山辺郡選出。元警察官。";

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: "/profile",
    },
    openGraph: {
        title: `${title}｜公式サイト`,
        description,
        url: "/profile",
        type: "profile",
        images: [
            {
                url: "/images/ogp.jpg",
                width: 1200,
                height: 630,
                alt: "星川大地 公式サイト",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${title}｜公式サイト`,
        description,
        images: ["/images/ogp.jpg"],
    },
};

const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://www.daichi-star.com/profile#webpage",
    url: "https://www.daichi-star.com/profile",
    name: title,
    description,
    inLanguage: "ja",
    mainEntity: {
        "@id": "https://www.daichi-star.com/#person",
    },
    isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.daichi-star.com/#website",
        url: "https://www.daichi-star.com/",
        name: "星川大地 公式サイト",
    },
};

const profileFacts = [
    { label: "生年月日", value: "1993年12月16日" },
    { label: "学歴", value: "関西大学 商学部 卒業" },
    { label: "警察勤務歴", value: "大阪府警察、千葉県警察、大阪府警察" },
    { label: "選挙区", value: "奈良市・山辺郡" },
    { label: "当選回数", value: "1回" },
    { label: "所属会派", value: "日本維新の会" },
    { label: "所属委員会", value: "経済労働委員会、議会運営委員会" },
    { label: "武道", value: "空手 公認3段、世界大会優勝" },
];

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-[#f5f5f2] pt-16 text-[#0A1A3A] lg:pt-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
            />
            <MobileHeader />

            <header className="bg-[#0A1A3A] px-5 py-16 text-white md:px-10 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-white">
                        <ArrowLeft size={16} aria-hidden="true" />
                        トップページへ戻る
                    </Link>
                    <p className="mt-12 text-xs font-bold tracking-[0.24em] text-[#71c59c]">PROFILE</p>
                    <h1 className="jp-heading mt-4 font-serif text-4xl font-bold leading-tight tracking-wide md:text-6xl">星川大地<br className="sm:hidden" /> プロフィール</h1>
                    <p className="jp-copy mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">奈良市・山辺郡選出の奈良県議会議員。警察官としての勤務経験を、県政での提案と制度の改善に生かします。</p>
                </div>
            </header>

            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
                <div>
                    <div className="relative aspect-[819/1024] overflow-hidden bg-gray-200 shadow-[0_20px_50px_rgba(10,26,58,0.12)]">
                        <Image
                            src="/images/sidebar_final.jpg"
                            alt="奈良県議会議員 星川大地"
                            fill
                            sizes="(max-width: 1024px) 100vw, 380px"
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                    <div className="mt-5 border-l-4 border-[#008c4b] bg-white p-5 shadow-sm">
                        <p className="font-serif text-2xl font-bold">星川 大地</p>
                        <p className="mt-2 text-sm font-bold text-[#006e3b]">奈良県議会議員</p>
                        <p className="mt-1 text-sm text-gray-600">奈良市・山辺郡 選出</p>
                    </div>
                </div>

                <div>
                    <section aria-labelledby="profile-facts-heading">
                        <h2 id="profile-facts-heading" className="jp-heading font-serif text-3xl font-bold md:text-4xl">基本情報</h2>
                        <dl className="mt-8 divide-y divide-gray-200 border-y border-gray-200 bg-white px-5 md:px-8">
                            {profileFacts.map((fact) => (
                                <div key={fact.label} className="grid gap-2 py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
                                    <dt className="text-sm font-bold text-gray-500">{fact.label}</dt>
                                    <dd className="jp-copy font-medium leading-7 text-[#0A1A3A]">{fact.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>

                    <section className="mt-12 border-t-4 border-[#008c4b] bg-white p-6 shadow-sm md:p-8" aria-labelledby="official-source-heading">
                        <h2 id="official-source-heading" className="jp-heading font-serif text-2xl font-bold">奈良県議会の公式情報</h2>
                        <p className="jp-copy mt-4 text-sm leading-7 text-gray-700">所属会派、所属委員会、当選回数は、奈良県議会の議員紹介に掲載されている令和8年7月2日現在の情報を確認しています。</p>
                        <a
                            href="https://www.pref.nara.lg.jp/n161/63671.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#006e3b] underline decoration-2 underline-offset-4"
                        >
                            奈良県議会の議員紹介を見る
                            <ExternalLink size={15} aria-hidden="true" />
                        </a>
                    </section>

                    <nav className="mt-10 grid gap-3 sm:grid-cols-2" aria-label="関連ページ">
                        <Link href="/" className="inline-flex items-center justify-center gap-2 bg-[#0A1A3A] px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-[#142850]">
                            トップページへ
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                        <Link href="/support" className="inline-flex items-center justify-center gap-2 border border-[#008c4b] bg-white px-5 py-4 text-sm font-bold text-[#006e3b] transition-colors hover:bg-[#008c4b] hover:text-white">
                            制度ナビを見る
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </main>
    );
}

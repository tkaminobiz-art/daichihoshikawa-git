import type { Metadata } from "next";

const title = "奈良の制度・相談窓口";
const description = "奈良県の防犯、子育て、医療、防災、仕事、住まい、行政手続きに関する公的な制度と相談窓口を、目的別に案内します。";

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: "/support",
    },
    openGraph: {
        title: `${title}｜星川大地 公式サイト`,
        description,
        url: "/support",
        type: "website",
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
        title: `${title}｜星川大地 公式サイト`,
        description,
        images: ["/images/ogp.jpg"],
    },
};

const supportJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.daichi-star.com/support#webpage",
    url: "https://www.daichi-star.com/support",
    name: title,
    description,
    inLanguage: "ja",
    about: {
        "@id": "https://www.daichi-star.com/#person",
    },
    isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.daichi-star.com/#website",
        url: "https://www.daichi-star.com/",
        name: "星川大地 公式サイト",
    },
};

export default function SupportLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(supportJsonLd) }}
            />
            {children}
        </>
    );
}

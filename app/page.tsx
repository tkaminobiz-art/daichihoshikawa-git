"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, X, Instagram, Facebook, Menu, Quote } from "lucide-react";

import { TextReveal } from "@/components/anim/TextReveal";
import { Magnetic } from "@/components/anim/Magnetic";

// ▼ 1. アニメーション用コンポーネント
const Reveal = ({ children, delay = 0, width = "100%" }: { children: React.ReactNode; delay?: number, width?: string }) => {
   const ref = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.disconnect();
            }
         },
         { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
   }, []);

   return (
      <div
         ref={ref}
         style={{ transitionDelay: `${delay}ms`, width }}
         className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
      >
         {children}
      </div>
   );
};

// ▼ 2. デザイン用コンポーネント（金砂子）
const GoldDustAccent = () => (
   <div className="absolute -top-10 -left-10 w-40 h-40 opacity-30 pointer-events-none z-0" style={{
      backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
      backgroundSize: '16px 16px'
   }}></div>
);

// ▼ 3. データ定義
const activities = [
   {
      id: 1,
      title: "ウズベキスタン共和国大使館を訪問",
      category: "国際交流",
      description: "ウズベキスタン共和国大使館を訪問し、奈良県とサマルカンド州の交流について意見を交わしました。伝統工芸や農産物の販路拡大を含め、経済・文化交流の可能性を検討します。",
      date: "2024.10.15"
   },
   {
      id: 2,
      title: "油長酒造を視察",
      category: "地域産業",
      description: "油長酒造を訪れ、酒米「奈良露（ならつゆ）」と酒蔵観光について説明を受けました。県内での滞在時間と消費を増やす観光施策を検討します。",
      date: "2024.11.02"
   },
   {
      id: 3,
      title: "自立援助ホーム「あらんの家」を訪問",
      category: "若者支援",
      description: "自立援助ホーム・ミモザ「あらんの家」を訪問し、自立を目指して生活する若者や支援者と話しました。退所後も相談と生活支援が途切れない制度を検討します。",
      date: "2024.12.10"
   },
   {
      id: 4,
      title: "明野駐屯地と五條防災拠点予定地を視察",
      category: "防災",
      description: "陸上自衛隊明野駐屯地で多用途ヘリUH-2に搭乗し、五條市の大規模防災拠点予定地も視察しました。災害時の着陸場所、情報収集、物資輸送の手順を確認しました。",
      date: "2025.01.08"
   }
];

const roadmap = [
   { year: "2025.04", title: "奈良県とJUIDAが災害時協定を締結", subtitle: "完了", description: "災害時の被害調査、情報収集、物資輸送にドローンを活用する協定です。実際に運用できる体制を確認します。", source: "https://www.pref.nara.jp/item/320355.htm" },
   { year: "2026", title: "若い世代に届く県政広報", subtitle: "提案中", description: "県広報担当VTuber「奈々鹿」を含む発信について、閲覧数や反応を検証し、県政情報の届け方を改善します。", source: "https://www.pref.nara.jp/secure/333180/shizisyo.pdf" },
   { year: "2028.04", title: "奈良県文化会館の供用開始予定", subtitle: "県の事業予定", description: "再整備の進捗と運営計画を確認し、県民が利用しやすい文化施設を目指します。", source: "https://www.pref.nara.jp/secure/329792/%E5%A5%88%E8%89%AF%E7%9C%8C%E6%96%87%E5%8C%96%E4%BC%9A%E9%A4%A8_%E5%AE%9F%E6%96%BD%E6%96%B9%E9%87%9D%E4%BF%AE%E6%AD%A3%E7%89%88%20%2020251128.pdf" },
   { year: "2031", title: "国スポ・全スポの奈良県開催", subtitle: "県の開催予定", description: "競技環境と受け入れ体制の整備を確認し、開催後も地域に残るスポーツ環境をつくります。", source: "https://www.pref.nara.jp/secure/323247/chirashi.pdf" }
];

const proposals = [
   {
      category: "地域交通",
      title: "公共ライドシェアの導入",
      status: "県議会で質問・提案",
      description: "路線バスの維持が難しい地域を対象に、自治体やNPOが担う公共ライドシェアの導入を求めています。",
      source: "https://www.pref.nara.jp/secure/314922/R060925_shitsumonyoshi_tei.pdf"
   },
   {
      category: "県政広報",
      title: "若い世代に届く情報発信",
      status: "県議会で質問・提案",
      description: "県広報担当VTuber「奈々鹿」などを活用し、若い世代が県政情報に触れる機会を増やすよう求めています。",
      source: "https://www.pref.nara.jp/secure/314922/R060925_shitsumonyoshi_tei.pdf"
   },
   {
      category: "防災",
      title: "災害時のドローン活用",
      status: "県の協定を確認",
      description: "奈良県は2025年4月、JUIDAと災害時の調査・情報収集・物資運搬に関する協定を締結しました。運用体制を継続して確認します。",
      source: "https://www.pref.nara.jp/item/320355.htm"
   }
];

const visionSlides = [
   {
      category: "子育て・防犯",
      title: "子育て・防犯の支援を、",
      accent: "必要な人へ",
      description: "制度を利用できずに困る人を減らします。相談窓口と支援条件を見直し、必要な支援につなげます。",
      bullets: ["見守りカメラ設置への助成", "ベビーシッター利用への支援", "児童相談所と警察の情報連携"],
      image: "/images/sidebar_final.jpg",
      imageAlt: "星川大地のプロフィール写真"
   },
   {
      category: "観光・地域産業",
      title: "観光と地域産業の",
      accent: "収益を伸ばす",
      description: "文化、景観、県産品を、滞在時間と地域消費の増加につなげます。事業者と連携し、県内で収益が循環する観光を進めます。",
      bullets: ["酒蔵を生かした観光企画", "県産品と飲食を扱う拠点づくり", "夜間・宿泊型観光の充実"],
      image: "/images/activity_02.png",
      imageAlt: "油長酒造を視察する星川大地"
   },
   {
      category: "防災",
      title: "災害時の孤立に",
      accent: "備える",
      description: "道路が寸断された場合でも、情報収集と物資輸送を続けられる体制を整えます。五條の防災拠点とドローン活用を具体化します。",
      bullets: ["五條の防災拠点整備", "ドローンによる情報収集", "孤立地域への物資輸送"],
      image: "/images/activity_04.jpg",
      imageAlt: "防災拠点予定地を視察する星川大地"
   }
];

type Activity = (typeof activities)[number];

export default function Page() {
   const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [activeVision, setActiveVision] = useState(0);
   const loadingComplete = true;
   const visionTrackRef = useRef<HTMLDivElement>(null);
   const modalCloseRef = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      if (!selectedActivity) return;

      const previousOverflow = document.body.style.overflow;
      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === "Escape") setSelectedActivity(null);
      };

      document.body.style.overflow = "hidden";
      modalCloseRef.current?.focus();
      window.addEventListener("keydown", handleKeyDown);

      return () => {
         document.body.style.overflow = previousOverflow;
         window.removeEventListener("keydown", handleKeyDown);
      };
   }, [selectedActivity]);

   const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
   const goToVision = useCallback((index: number) => {
      const nextIndex = (index + visionSlides.length) % visionSlides.length;
      const track = visionTrackRef.current;
      const slide = track?.children[nextIndex] as HTMLElement | undefined;

      if (track && slide) {
         track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
         setActiveVision(nextIndex);
      }
   }, []);

   const updateActiveVision = useCallback(() => {
      const track = visionTrackRef.current;
      if (!track) return;

      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      const slides = Array.from(track.children).slice(0, visionSlides.length) as HTMLElement[];
      const closest = slides.reduce((nearest, slide, index) => {
         const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - trackCenter);
         return distance < nearest.distance ? { index, distance } : nearest;
      }, { index: 0, distance: Number.POSITIVE_INFINITY });

      setActiveVision(closest.index);
   }, []);

   const navLinks = [
      { en: 'VISION', ja: '重点方針', href: '#vision' },
      { en: 'POLICY', ja: '政策', href: '#policy' },
      { en: 'PROPOSALS', ja: '主な提案', href: '#proposals' },
      { en: 'SUPPORT', ja: '制度ナビ', href: '/support' },
      { en: 'ROADMAP', ja: '予定・進捗', href: '#roadmap' },
      { en: 'ACTIVITY', ja: '活動', href: '#activity' },
      { en: 'PROFILE', ja: 'プロフィール', href: '#profile' }
   ];

   return (
      <div className="flex min-h-screen text-[#0A1A3A] bg-gray-100 selection:bg-[#FF1A1A] selection:text-white font-sans overflow-x-hidden">
         <div className="contents" inert={selectedActivity ? true : undefined} aria-hidden={selectedActivity ? true : undefined}>

         {/* 全体テクスチャ（和紙） - 復活 */}
         <div className="site-noise fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply"></div>

         {/* MOBILE HEADER */}
         <header className={`lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0A1A3A] z-[60] flex items-center justify-between px-6 shadow-md text-white transition-transform duration-700 ${loadingComplete ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="font-serif font-bold text-lg tracking-widest">星川大地</div>
            <Magnetic>
               <button onClick={toggleMenu} className="p-2" aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={isMobileMenuOpen}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </Magnetic>
         </header>

         {/* MOBILE MENU OVERLAY */}
         {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-[#0A1A3A] z-[55] pt-20 px-8 flex flex-col gap-8 text-white lg:hidden overflow-y-auto">
               <nav className="flex flex-col gap-6">
                  {navLinks.map((item) => (
                     <a
                        key={item.en}
                        href={item.href}
                        onClick={toggleMenu}
                        className={`text-2xl font-serif font-bold tracking-widest border-b border-white/20 pb-4 flex justify-between items-end ${item.en === 'SUPPORT' ? 'text-[#008c4b]' : ''}`}
                     >
                        <span className="flex items-baseline gap-3">
                           {item.en}
                           <span className={`text-xs font-sans font-normal tracking-normal opacity-70 ${item.en === 'SUPPORT' ? 'text-[#008c4b]' : 'text-gray-300'}`}>{item.ja}</span>
                        </span>
                        <ArrowRight size={20} className={item.en === 'SUPPORT' ? 'text-[#008c4b]' : 'text-[#FF1A1A]'} />
                     </a>
                  ))}
               </nav>
               <div className="mt-auto mb-32 space-y-6">
                  <div className="flex justify-center gap-8">
                     <a href="https://twitter.com/daichi_star/" target="_blank" rel="noopener noreferrer" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                     <a href="https://www.instagram.com/daichi_star12/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-6 h-6" /></a>
                     <a href="https://www.facebook.com/profile.php?id=100089702911147" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="w-6 h-6" /></a>
                  </div>
               </div>
            </div>
         )}

         {/* MOBILE STICKY ACTION BAR */}
         <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-[9990] flex flex-col shadow-[0_-4px_20px_rgba(0,0,0,0.2)] transition-transform duration-1000 delay-1000 ${loadingComplete ? 'translate-y-0' : 'translate-y-full'}`}>
            <a href="https://lin.ee/n4zXBZ7" target="_blank" rel="noopener noreferrer" className="bg-[#D71920] text-white py-3 px-4 flex flex-col items-center justify-center group active:scale-95 transition-all">
               <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif font-bold text-lg tracking-widest">星川大地 公式LINE</span>
                  <ArrowRight size={18} />
               </div>
               <span className="text-[10px] font-medium tracking-wider">後援会への入会・ご意見はこちら</span>
            </a>
         </div>

         {/* LEFT SIDEBAR (PC Only) */}
         <aside className={`hidden lg:flex fixed left-0 top-0 h-screen w-[25%] bg-[#F9F9F6] border-r border-gray-200 z-50 flex-col justify-between overflow-hidden transition-transform duration-1000 delay-500 ${loadingComplete ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="site-noise absolute inset-0 opacity-20 pointer-events-none"></div>
            <div className="absolute top-10 left-8 xl:top-12 xl:left-10 z-20 flex items-start gap-4 xl:gap-6 font-serif font-black text-[#0A1A3A]">
               <span className="writing-vertical whitespace-nowrap text-5xl xl:text-6xl tracking-widest leading-none">星川 大地</span>
               <span className="writing-vertical whitespace-nowrap text-2xl xl:text-3xl tracking-[0.18em] leading-none">奈良県議会議員</span>
            </div>
            <div className="relative w-full h-[85%] z-10 mt-auto">
               <img src="/images/left-column.png" alt="星川大地 奈良県議会議員 (山辺郡・奈良市選出)" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain object-bottom drop-shadow-2xl" />
            </div>
         </aside>

         {/* CENTER COLUMN (Main Content) */}
         <main className="min-w-0 flex-1 lg:ml-[25%] lg:mr-[25%] bg-white relative z-40 shadow-[0_0_60px_rgba(0,0,0,0.2)] min-h-screen pb-40 lg:pb-20 pt-16 lg:pt-0">

            {/* HERO SECTION */}
            <section className="relative h-[85vh] min-h-[620px] w-full overflow-hidden bg-[radial-gradient(circle_at_70%_25%,#17315f_0%,#0A1A3A_48%,#061126_100%)] group">
               <img
                  src="/images/image_11.png"
                  alt="奈良県議会議員 星川大地 街頭演説の様子"
                  className={`hidden lg:block absolute inset-0 h-full w-full object-cover object-center z-0 transition-all duration-[1800ms] ease-out ${loadingComplete ? 'scale-100 opacity-80' : 'scale-105 opacity-0'}`}
               />
               <div className="hidden lg:block absolute inset-0 z-[1] bg-gradient-to-b from-[#061126]/55 via-[#061126]/20 to-[#061126]/95" aria-hidden="true"></div>
               <div className="absolute inset-0 z-[2] opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.55) 1px, transparent 1px)", backgroundSize: "28px 28px", maskImage: "linear-gradient(to bottom right, black, transparent 62%)" }} aria-hidden="true"></div>

               <img
                  src="/images/left-column.png"
                  alt="奈良県議会議員 星川大地"
                  className={`lg:hidden absolute bottom-0 right-[-5%] w-[80%] max-w-[350px] object-contain object-bottom z-10 drop-shadow-[0_0_30px_rgba(0,0,0,0.45)] transition-all duration-1000 delay-700 ${loadingComplete ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
               />

               <div className="absolute top-24 left-6 right-6 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:left-12 lg:right-12 z-20">
                  <div className={`transition-all duration-1000 delay-500 ${loadingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     <h1 className="text-white text-[clamp(1rem,5.2vw,1.5rem)] lg:text-[clamp(1.5rem,2.45vw,3.25rem)] font-serif font-black leading-[1.28] drop-shadow-2xl mb-6 lg:mb-8 tracking-[0.02em]">
                        <span className="block whitespace-nowrap">事件が起きてから動くのではなく、</span>
                        <span className="block whitespace-nowrap"><span className="text-[#FF1A1A]">事件が起きない</span>奈良へ。</span>
                     </h1>
                  </div>
                  <div className={`transition-all duration-1000 delay-700 ${loadingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     <div className="lg:border-l-4 lg:border-[#FF1A1A] lg:pl-6">
                        <p className="jp-copy text-white/90 text-sm lg:text-base 2xl:text-lg leading-loose font-medium drop-shadow-md">
                           元警察官として、犯罪や事故の現場に向き合ってきました。<br className="hidden 2xl:block" />
                           その経験を、未然防止と早期支援の制度に生かします。
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            {/* CONTENT BODY */}
            <div className="px-6 py-24 space-y-32 bg-white md:px-12 lg:px-8 2xl:px-12">

               {/* VISION */}
               <section id="vision" className="relative scroll-mt-20 lg:scroll-mt-0">
                  <GoldDustAccent />
                  <Reveal>
                     <div className="flex items-center gap-4 mb-16 relative z-10">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <TextReveal className="text-sm font-bold tracking-widest text-[#FF1A1A]">VISION</TextReveal>
                     </div>
                     <h4 className="jp-heading text-3xl md:text-4xl font-serif font-bold mb-20 text-[#0A1A3A] leading-relaxed relative z-10">
                        3つの重点方針
                     </h4>
                  </Reveal>
                  <div className="relative z-10">
                     <div
                        ref={visionTrackRef}
                        onScroll={updateActiveVision}
                        onKeyDown={(event) => {
                           if (event.key === "ArrowRight") {
                              event.preventDefault();
                              goToVision(activeVision + 1);
                           }
                           if (event.key === "ArrowLeft") {
                              event.preventDefault();
                              goToVision(activeVision - 1);
                           }
                        }}
                        className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 outline-none focus-visible:ring-2 focus-visible:ring-[#FF1A1A] focus-visible:ring-offset-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        role="region"
                        aria-roledescription="カルーセル"
                        aria-label="3つの重点方針"
                        tabIndex={0}
                     >
                        {visionSlides.map((slide, index) => (
                           <article
                              key={slide.category}
                              className="relative min-h-[620px] md:min-h-[560px] 2xl:min-h-[500px] w-[88%] md:w-full shrink-0 snap-start overflow-hidden border border-gray-200 bg-[#F9F9F6] shadow-[0_16px_45px_rgba(10,26,58,0.10)]"
                              role="group"
                              aria-roledescription="スライド"
                              aria-label={`${index + 1} / ${visionSlides.length} ${slide.title}${slide.accent}`}
                           >
                              <div className="grid h-full min-h-[620px] grid-rows-[240px_1fr] md:min-h-[560px] md:grid-cols-[64%_36%] md:grid-rows-1 2xl:min-h-[500px]">
                                 <div className="relative order-2 flex flex-col p-7 sm:p-9 md:order-1 md:p-7 2xl:p-12">
                                    <span data-number={`0${index + 1}`} className="absolute right-6 top-2 text-7xl font-black text-[#0A1A3A]/5 before:content-[attr(data-number)] md:right-8 md:top-5 md:text-8xl" aria-hidden="true" />
                                    <p className="mb-5 text-xs font-bold tracking-[0.18em] text-gray-500">{slide.category}</p>
                                    <h5 className="jp-heading max-w-xl text-[1.375rem] font-bold leading-[1.45] tracking-[0.01em] text-[#0A1A3A] sm:text-[1.75rem] md:text-[1.75rem] lg:text-[1.375rem] xl:text-[1.5rem] 2xl:text-[2.25rem]">
                                       <span className="block"><span className="jp-keep">{slide.title}</span></span>
                                       <span className="block text-[#FF1A1A]"><span className="jp-keep">{slide.accent}</span></span>
                                    </h5>
                                    <p className="jp-copy mt-6 max-w-xl text-sm font-medium leading-8 text-gray-700 xl:text-base">
                                       {slide.description}
                                    </p>
                                    <ul className="mt-auto space-y-3 border-t border-gray-200 pt-6">
                                       {slide.bullets.map((bullet) => (
                                          <li key={bullet} className="jp-copy flex items-start gap-3 text-sm font-bold text-[#0A1A3A] xl:text-base">
                                             <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF1A1A]" aria-hidden="true" />
                                             <span>{bullet}</span>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                                 <div className="relative order-1 overflow-hidden bg-[#0A1A3A] md:order-2">
                                    <img src={slide.image} alt={slide.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A]/35 to-transparent md:bg-gradient-to-r md:from-[#0A1A3A]/15 md:to-transparent" aria-hidden="true" />
                                 </div>
                              </div>
                           </article>
                        ))}
                        <span className="w-[12%] shrink-0 md:hidden" aria-hidden="true" />
                     </div>

                     <div className="mt-6 flex items-center justify-between gap-4">
                        <p className="text-xs font-medium text-gray-500">横にスワイプできます</p>
                        <div className="flex items-center gap-3">
                           <button type="button" onClick={() => goToVision(activeVision - 1)} className="grid h-11 w-11 place-items-center border border-gray-300 bg-white text-[#0A1A3A] transition-colors hover:border-[#FF1A1A] hover:text-[#FF1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1A1A]" aria-label="前の方針を表示">
                              <ArrowLeft size={20} />
                           </button>
                           <div className="flex items-center gap-1" role="group" aria-label="スライド位置">
                              {visionSlides.map((slide, index) => (
                                 <button key={slide.category} type="button" onClick={() => goToVision(index)} className="grid h-8 w-8 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1A1A] focus-visible:ring-offset-2" aria-label={`${index + 1}枚目を表示`} aria-current={activeVision === index ? "true" : undefined}>
                                    <span className={`h-2.5 rounded-full transition-all ${activeVision === index ? "w-7 bg-[#FF1A1A]" : "w-2.5 bg-gray-300 group-hover:bg-gray-400"}`} aria-hidden="true" />
                                 </button>
                              ))}
                           </div>
                           <button type="button" onClick={() => goToVision(activeVision + 1)} className="grid h-11 w-11 place-items-center border border-gray-300 bg-white text-[#0A1A3A] transition-colors hover:border-[#FF1A1A] hover:text-[#FF1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1A1A]" aria-label="次の方針を表示">
                              <ArrowRight size={20} />
                           </button>
                        </div>
                     </div>
                  </div>
               </section>

               {/* POLICY */}
               <section id="policy" className="scroll-mt-20 lg:scroll-mt-0">
                  <Reveal>
                     <div className="flex items-center gap-4 mb-16">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <TextReveal className="text-sm font-bold tracking-widest text-[#FF1A1A]">POLICY</TextReveal>
                     </div>
                     <h4 className="jp-heading text-[1.75rem] md:text-4xl font-serif font-bold mb-16 text-[#0A1A3A]"><span className="block">現場の声をもとにした、</span><span className="block">5つの重点政策</span></h4>
                  </Reveal>
                  <div className="space-y-20">
                     {[
                        { title: <><span className="jp-keep">子育て・防犯支援の</span><wbr /><span className="jp-keep">利用を広げる</span></>, items: ["見守りカメラ設置への助成", "ベビーシッター利用への支援", "児童相談所と警察の情報連携"] },
                        { title: <><span className="jp-keep">地域の移動手段を</span><wbr /><span className="jp-keep">確保する</span></>, items: ["公共ライドシェアの導入", <>踏切課題に関する県・市・<span className="jp-keep">鉄道事業者の協議</span></>, "道路環境の改善"] },
                        { title: <><span className="jp-keep">宿泊・周遊につながる</span><wbr /><span className="jp-keep">観光を進める</span></>, items: ["県産品と飲食を扱う拠点づくり", "酒蔵を生かした観光企画", "夜間・宿泊型観光の充実"] },
                        { title: <><span className="jp-keep">介護・保育・教育・警察の</span><wbr /><span className="jp-keep">人材を確保する</span></>, items: ["介護・保育職員の処遇改善", "教職員・警察官の採用広報", "業務の見直しによる離職防止"] },
                        { title: <><span className="jp-keep">災害時に機能する</span><wbr /><span className="jp-keep">防災体制を整える</span></>, items: ["ドローンの災害活用", "五條の防災拠点整備", "避難所環境の改善"] }
                     ].map((policy, i) => (
                        <Reveal key={i}>
                           <div className="relative pl-8 md:pl-12 border-l-4 border-gray-200 hover:border-[#FF1A1A] transition-colors duration-500">
                              <span className="absolute -top-10 -left-6 text-8xl font-black text-gray-100 -z-10">0{i + 1}</span>
                              <h5 className="jp-heading text-xl md:text-2xl font-bold mb-6 text-[#0A1A3A]">{policy.title}</h5>
                              <ul className="space-y-3">
                                 {policy.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-gray-700 font-medium"><ArrowRight className="mt-[0.2em] text-[#FF1A1A] w-5 h-5 shrink-0" /><span className="jp-copy min-w-0">{item}</span></li>
                                 ))}
                              </ul>
                           </div>
                        </Reveal>
                     ))}
                  </div>
               </section>

               {/* PROPOSALS */}
               <section id="proposals" className="relative scroll-mt-20 border-t border-gray-200 pt-20 lg:scroll-mt-0">
                  <GoldDustAccent />
                  <Reveal>
                     <div className="flex items-center gap-4 mb-16 relative z-10">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <TextReveal className="text-sm font-bold tracking-widest text-[#FF1A1A]">PROPOSALS</TextReveal>
                     </div>
                     <h4 className="jp-heading text-3xl md:text-4xl font-serif font-bold mb-6 text-[#0A1A3A] relative z-10">
                        <span className="block">議会で取り上げた、</span><span className="block">3つの課題</span>
                     </h4>
                     <p className="jp-copy mb-14 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">実績と提案を混同せず、確認できる事実に基づいて掲載しています。</p>
                  </Reveal>

                  <div className="space-y-5 relative z-10">
                     {proposals.map((proposal, i) => (
                        <Reveal key={i} delay={i * 100}>
                           <article className="grid overflow-hidden border border-gray-200 bg-white shadow-[0_12px_35px_rgba(10,26,58,0.08)] transition-shadow hover:shadow-[0_18px_45px_rgba(10,26,58,0.14)] 2xl:min-h-[220px] 2xl:grid-cols-[130px_minmax(220px,0.8fr)_1.2fr]">
                              <div className="flex items-center gap-5 border-b border-gray-200 bg-[#0A1A3A] px-6 py-6 text-white 2xl:flex-col 2xl:items-start 2xl:justify-between 2xl:border-b-0 2xl:px-7 2xl:py-8">
                                 <span className="text-4xl font-black text-white/25" aria-hidden="true">0{i + 1}</span>
                                 <p className="text-xs font-bold tracking-[0.18em]">{proposal.category}</p>
                              </div>
                              <div className="flex flex-col justify-center border-b border-gray-200 px-6 py-7 2xl:border-b-0 2xl:border-r 2xl:px-8">
                                 <p className="mb-3 text-xs font-bold text-[#FF1A1A]">{proposal.status}</p>
                                 <h5 className="jp-heading text-xl font-bold leading-8 text-[#0A1A3A] md:text-2xl">{proposal.title}</h5>
                              </div>
                              <div className="flex flex-col justify-center px-6 py-7 2xl:px-8">
                                 <p className="jp-copy text-sm font-medium leading-8 text-gray-700 md:text-base">{proposal.description}</p>
                                 <a href={proposal.source} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-bold text-[#0A1A3A] underline decoration-gray-300 underline-offset-4 transition-colors hover:text-[#FF1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1A1A]">
                                    公式資料を確認する <ExternalLink size={14} />
                                 </a>
                              </div>
                           </article>
                        </Reveal>
                     ))}
                  </div>
               </section>

               {/* ROADMAP */}
               <section id="roadmap" className="scroll-mt-20 border-t border-gray-200 pt-20 lg:scroll-mt-0">
                  <Reveal>
                     <div className="flex items-center gap-4 mb-16">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">ROADMAP</h3>
                     </div>
                     <div className="mb-14">
                        <h4 className="jp-heading text-3xl font-serif font-bold text-[#0A1A3A] md:text-4xl">県政の予定と確認事項</h4>
                        <p className="jp-copy mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">完了した県の事業、現在の提案、今後の予定を区別して掲載しています。</p>
                     </div>
                  </Reveal>
                  <div className="relative max-w-4xl mx-auto pl-8 2xl:pl-0">
                     <div className="absolute left-0 2xl:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2"></div>
                     <div className="space-y-24">
                        {roadmap.map((item, index) => (
                           <Reveal key={index} delay={index * 150}>
                              <div className={`relative flex flex-col 2xl:flex-row items-start 2xl:items-center ${index % 2 === 0 ? '2xl:flex-row-reverse' : ''}`}>
                                 <div className="absolute left-0 2xl:left-1/2 top-4 2xl:top-auto w-6 h-6 bg-[#FF1A1A] rounded-full border-4 border-white shadow-md z-10 -translate-x-1/2 transform transition-transform hover:scale-125"></div>
                                 <div className="hidden 2xl:block 2xl:w-1/2"></div>
                                 <div className={`w-full 2xl:w-1/2 pl-12 2xl:pl-0 ${index % 2 === 0 ? '2xl:pr-16 2xl:text-right' : '2xl:pl-16 2xl:text-left'}`}>
                                    <span className="text-4xl md:text-5xl font-black text-gray-300 block mb-2">{item.year}</span>
                                    <div className="relative z-10">
                                       <h4 className="jp-heading text-xl md:text-2xl font-bold text-[#0A1A3A] mb-2">{item.title}</h4>
                                       <p className="text-[#FF1A1A] font-bold text-sm mb-3">{item.subtitle}</p>
                                       <p className="jp-copy text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                       <a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0A1A3A] underline decoration-gray-300 underline-offset-4 hover:text-[#FF1A1A]">
                                          県公式資料 <ExternalLink size={13} />
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </Reveal>
                        ))}
                        <div className="absolute left-0 2xl:left-1/2 bottom-[-40px] -translate-x-1/2 text-gray-300">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ACTIVITY REPORT */}
               <section id="activity" className="scroll-mt-20 border-t border-gray-200 pt-32 lg:scroll-mt-0">
                  <Reveal>
                     <div className="flex items-center gap-4 mb-12">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#B5151B]">ACTIVITY</h3>
                     </div>
                     <div className="text-center mb-12">
                        <h4 className="text-3xl font-serif font-bold text-[#0A1A3A]">活動報告</h4>
                        <p className="text-gray-500 mt-2">議会外の活動</p>
                     </div>
                  </Reveal>
                  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
                     {activities.map((act, i) => (
                        <Reveal key={act.id} delay={i * 100}>
                           <button
                              onClick={() => setSelectedActivity(act)}
                              className="group relative flex min-h-[220px] w-full flex-col overflow-hidden border border-gray-200 bg-white p-7 text-left shadow-[0_10px_30px_rgba(10,26,58,0.07)] transition-all hover:-translate-y-1 hover:border-[#FF1A1A] hover:shadow-[0_16px_40px_rgba(10,26,58,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1A1A]"
                           >
                              <span data-number={`0${i + 1}`} className="absolute right-5 top-2 text-6xl font-black text-[#0A1A3A]/5 before:content-[attr(data-number)]" aria-hidden="true" />
                              <div className="relative z-10 flex items-center justify-between gap-4 text-xs font-bold tracking-[0.12em]">
                                 <span className="text-[#B5151B]">{act.category}</span>
                                 <time className="text-gray-600">{act.date}</time>
                              </div>
                              <h5 className="jp-heading relative z-10 mt-8 text-xl font-bold leading-8 text-[#0A1A3A] md:text-2xl">{act.title}</h5>
                              <span className="relative z-10 mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-gray-500 transition-colors group-hover:text-[#FF1A1A]">活動内容を読む <ArrowRight size={16} /></span>
                           </button>
                        </Reveal>
                     ))}
                  </div>
               </section>

               {/* PROFILE & STORY */}
               <section id="profile" className="relative scroll-mt-20 border-t border-gray-200 pt-20 lg:scroll-mt-0">
                  <GoldDustAccent />
                  <Reveal>
                     <div className="bg-[#0A1A3A] text-white p-8 md:p-16 rounded-2xl relative overflow-hidden mb-16 shadow-2xl z-10">
                        <Quote className="absolute top-8 left-8 text-white/10 w-32 h-32 rotate-180" />
                        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                           <h3 className="jp-heading text-2xl md:text-3xl 2xl:text-4xl font-serif font-bold leading-relaxed tracking-wider">
                              <span className="block">警察官としての経験を、</span><span className="block">県政に生かす</span>
                           </h3>
                           <div className="w-16 h-[2px] bg-[#FF1A1A] mx-auto"></div>
                           <p className="jp-copy text-base md:text-lg leading-loose font-medium text-gray-300 text-left 2xl:text-center">
                              警察官として、犯罪や事故への対応、地域からの相談に携わりました。被害が起きた後の対応に加え、未然防止と早期支援が必要だと考え、県政に取り組んでいます。<br /><br />
                              子ども、被害者、支援を求めにくい方が相談につながる制度を整えます。現場で得た経験を、具体的な政策と議会での提案に生かします。
                           </p>
                        </div>
                     </div>
                  </Reveal>

                  <Reveal>
                     <div className="flex items-center gap-4 mb-12 relative z-10">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">PROFILE</h3>
                     </div>
                     <div className="flex flex-col 2xl:flex-row gap-12 relative z-10">
                        <div className="w-full 2xl:w-1/2 bg-gray-100 relative aspect-[3/4]">
                           <img src="/images/sidebar_final.jpg" className="absolute inset-0 w-full h-full object-cover object-top" alt="星川大地 プロフィール写真 (元警察官)" />
                        </div>
                        <div className="flex-1 space-y-8">
                           <div>
                              <h4 className="jp-heading text-4xl font-serif font-bold text-[#0A1A3A] mb-2">星川 だいち</h4>
                              <p className="jp-copy text-gray-500">1993年12月16日生まれ（32歳）</p>
                           </div>
                           <p className="jp-copy text-xl font-bold text-[#FF1A1A] border-b border-gray-200 pb-4">奈良県議会議員（奈良市・山辺郡 選出）</p>
                           <dl className="space-y-4 text-gray-700">
                              <div className="grid grid-cols-[80px_1fr]"><dt className="font-bold">経歴</dt><dd className="jp-copy">関西大学 商学部 卒<br />大阪府警 → 千葉県警 → 大阪府警</dd></div>
                              <div className="grid grid-cols-[80px_1fr]"><dt className="font-bold">所属</dt><dd className="jp-copy">経済労働委員会・議会運営委員会</dd></div>
                              <div className="grid grid-cols-[80px_1fr]"><dt className="font-bold">武道</dt><dd className="jp-copy">空手 公認3段（世界大会優勝）</dd></div>
                           </dl>
                           <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row">
                              <a href="/profile" className="inline-flex items-center justify-center gap-2 bg-[#0A1A3A] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#142850]">プロフィールを詳しく見る <ArrowRight size={16} /></a>
                              <a href="/support" className="inline-flex items-center justify-center gap-2 border border-[#008c4b] px-5 py-3 text-sm font-bold text-[#006e3b] transition-colors hover:bg-[#008c4b] hover:text-white">制度ナビを見る <ArrowRight size={16} /></a>
                           </div>
                        </div>
                     </div>
                  </Reveal>
               </section>

            </div>
         </main>

         {/* RIGHT SIDEBAR (PC Only) */}
         <aside className={`hidden lg:flex fixed right-0 top-0 h-screen w-[25%] bg-[#0A1A3A] text-white z-50 flex-col justify-between px-10 py-8 shadow-2xl transition-transform duration-1000 delay-500 ${loadingComplete ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="site-seigaiha absolute inset-0 opacity-5 pointer-events-none"></div>
            <nav className="relative z-10 flex flex-col gap-[clamp(1rem,3vh,2rem)]">
               {navLinks.map((item) => (
                  <a
                     key={item.en}
                     href={item.href}
                     className={`group flex items-center text-base xl:text-lg font-bold tracking-[0.2em] transition-all ${item.en === 'SUPPORT' ? 'text-[#008c4b] hover:text-white' : 'hover:text-[#FF1A1A]'}`}
                  >
                     <span className={`w-0 h-[2px] mr-2 group-hover:w-6 group-hover:mr-4 transition-all duration-300 ${item.en === 'SUPPORT' ? 'bg-[#008c4b]' : 'bg-[#FF1A1A]'}`}></span>
                     <span className="flex flex-col leading-none">
                        <span>{item.en}</span>
                        <span className="text-[10px] font-medium tracking-normal opacity-60 mt-1">{item.ja}</span>
                     </span>
                  </a>
               ))}
            </nav>

            <div className="relative z-10 space-y-4">
               <Magnetic>
                  <a href="https://lin.ee/n4zXBZ7" target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-[#D71920] text-white font-bold text-lg tracking-widest shadow-[0_0_30px_rgba(215,25,32,0.55)] hover:scale-105 active:scale-95 transition-all text-center relative overflow-hidden group rounded-sm">
                     <span className="relative z-10">LINE 登録</span>
                     <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                  </a>
               </Magnetic>
               <div className="flex justify-center gap-6">
                  <Magnetic>
                     <a href="https://twitter.com/daichi_star/" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/60 hover:text-[#FF1A1A] transition-colors p-2 hover:bg-white/5 rounded-full block"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                  </Magnetic>
                  <Magnetic>
                     <a href="https://www.instagram.com/daichi_star12/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-[#FF1A1A] transition-colors p-2 hover:bg-white/5 rounded-full block"><Instagram className="w-6 h-6" /></a>
                  </Magnetic>
                  <Magnetic>
                     <a href="https://www.facebook.com/profile.php?id=100089702911147" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-[#FF1A1A] transition-colors p-2 hover:bg-white/5 rounded-full block"><Facebook className="w-6 h-6" /></a>
                  </Magnetic>
               </div>
               <div className="text-xs text-gray-400 opacity-60 space-y-2 text-center">
                  <p>日本維新の会 奈良県総支部</p>
                  <p>事務所: 奈良市青野町1-4-27</p>
                  <p>© 2026 Daichi Hoshikawa</p>
               </div>
            </div>
         </aside>

         </div>

         {/* POPUP MODAL */}
         {selectedActivity && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby={`activity-title-${selectedActivity.id}`}>
               <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedActivity(null)} aria-hidden="true"></div>
               <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 border-t-4 border-[#FF1A1A]">
                  <button ref={modalCloseRef} onClick={() => setSelectedActivity(null)} className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1A1A]" aria-label="活動内容を閉じる">
                     <X className="w-6 h-6 text-[#0A1A3A]" />
                  </button>
                  <div className="p-8 md:p-12">
                     <span className="text-[#B5151B] font-bold tracking-widest text-sm block mb-2">{selectedActivity.date} | {selectedActivity.category}</span>
                     <h3 id={`activity-title-${selectedActivity.id}`} className="jp-heading text-2xl md:text-3xl font-serif font-bold text-[#0A1A3A] mb-6 pr-10">{selectedActivity.title}</h3>
                     <p className="jp-copy text-gray-700 leading-loose text-lg font-medium whitespace-pre-wrap">{selectedActivity.description}</p>
                  </div>
               </div>
            </div>
         )}

      </div>
   );
}

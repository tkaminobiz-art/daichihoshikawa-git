"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, X, Instagram, Facebook, Menu, ChevronDown, ChevronUp, Quote } from "lucide-react";

// ▼ 1. アニメーション用コンポーネント
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
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
         style={{ transitionDelay: `${delay}ms` }}
         className={`w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
      >
         {children}
      </div>
   );
};

// ▼ 2. データ定義

// 活動報告
interface Activity {
   id: number;
   title: string;
   image: string;
   category: string;
   description: string;
   date: string;
}

const activities: Activity[] = [
   {
      id: 1,
      title: "国際交流：サマルカンドとの架け橋",
      image: "/images/activity_01.jpg",
      category: "Diplomacy",
      description: "ウズベキスタン共和国大使館を訪問。奈良県とサマルカンド州は友好協定を結んでおり、その絆を経済・文化の「実利」に変えるためのトップセールスを行いました。「星川ならでは」のラボイベントも企画中。奈良の伝統工芸や農産物を中央アジア市場へ展開する、自治体外交の新しいモデルケースを作ります。",
      date: "2024.10.15"
   },
   {
      id: 2,
      title: "地域経済：清酒発祥の地・奈良の逆襲",
      image: "/images/activity_02.png",
      category: "Local Economy",
      description: "歴史ある「油長酒造」を視察。独自開発された酒米「奈良露（ならつゆ）」のポテンシャルは、まさに奈良の宝です。目指すは、フランスのワイナリーのような「酒蔵ツーリズム」。ただ飲むだけでなく、その歴史と風土を体験してもらう「コト消費」への転換を、県主導のブランディング戦略として提言していきます。",
      date: "2024.11.02"
   },
   {
      id: 3,
      title: "若者支援：「あらんの家」訪問",
      image: "/images/activity_03.jpg",
      category: "Social Welfare",
      description: "自立援助ホーム・ミモザ「あらんの家」を視察。心の傷や家庭の事情を抱えながらも、自立を目指して生活する若者たちと対話しました。元警察官として多くの少年少女と向き合ってきましたが、必要なのは「指導」ではなく、社会全体で彼らを支える「継続的なサポートの仕組み」です。行政の縦割りを排し、彼らの居場所を守る施策を構築します。",
      date: "2024.12.10"
   },
   {
      id: 4,
      title: "防災視察：UH-2ハヤブサと五條拠点",
      image: "/images/activity_04.jpg",
      category: "Disaster Prevention",
      description: "陸上自衛隊明野駐屯地にて、最新多用途ヘリ「UH-2 ハヤブサ」に体験試乗。さらに五條市の大規模防災拠点予定地を現地視察しました。机上の空論ではなく、「実際の災害時にヘリがどこに着陸し、物資をどうピストン輸送するか」という現場レベルの動線を徹底確認。県民の命を守るための「リアルな備え」を追求し続けています。",
      date: "2025.01.08"
   }
];

// 未来年表
const roadmap = [
   {
      year: "2025.04",
      title: "防災ドローン協定 始動",
      subtitle: "民間団体(JUIDA)・近鉄との連携開始",
      description: "能登半島地震でも実績のある民間団体と連携し、山間部の多い奈良県での孤立地域把握や物資運搬体制を確立。平時の訓練も含めた実効性のある「空の防災網」を敷きます。"
   },
   {
      year: "2025.10",
      title: "日韓音楽交流・文化セミナー",
      subtitle: "「なら100年会館」での国際発信",
      description: "10月24日・25日に日韓の音楽交流イベントおよび文化セミナーを開催。奈良スーパーアプリとも連携し、奈良の文化力を世界へ発信する拠点づくりを進めます。"
   },
   {
      year: "2026.03",
      title: "Vtuber「奈々鹿」1万人計画",
      subtitle: "広報戦略の革新とデータ分析",
      description: "県公認Vtuberのフォロワー1万人達成を目標に、コラボ施策や効果分析を実施。単なるキャラ活用に留まらず、ふるさと納税や観光誘致に直結する「稼ぐ広報」へと進化させます。"
   },
   {
      year: "2027",
      title: "県文化会館 リニューアル",
      subtitle: "「音にこだわる」舞台芸術の殿堂へ",
      description: "民間活力を導入するコンセッション方式を採用し、施設運営権を長期間設定。税金に頼りすぎない運営モデルで、誰もが気軽に音楽に触れられる文化拠点を完成させます。"
   },
   {
      year: "2031",
      title: "奈良国体・障スポ",
      subtitle: "ジュニアアスリート育成の集大成",
      description: "2031年の地元開催を見据え、現在のジュニア世代への育成プログラムや競技力分析を強化。「観る」だけでなく「支える・参加する」スポーツ文化を奈良に根付かせます。"
   }
];

// 【NEW】実績データ（RESULTS）
const results = [
   { label: "ふるさと納税 寄付受入額", before: "35位", after: "19", desc: "返礼品拡充とポータルサイト攻略により、昨年度比1.2倍の2億3700万円を達成。", unit: "位" },
   { label: "県別インターネット利用率", value: "89.7", unit: "%", sub: "全国 第2位", desc: "全国トップクラスのデジタル土壌を活かし、行政手続きのオンライン化やSNS広報を加速させます。" },
   { label: "男性職員 育休取得率", before: "2.5%", after: "39.5", desc: "警察組織の「働き方改革」を断行。制度があっても使えない空気を打破し、現場の士気を向上。", unit: "%" },
];

// 【NEW】議会質疑（ASSEMBLY）
const assemblyQA = [
   {
      q: "若者に県政が届いていない。どう情報を届けるのか？",
      a: "「Vtuber奈々鹿」の本格活用を確約させました。",
      detail: "これまでの堅苦しい広報では若者は振り向きません。県公認Vtuber「奈々鹿」を活用し、コラボ動画やグッズ展開を行うことで、これまで接点のなかった層へのリーチを実現します。現在フォロワー1万人計画を推進中です。"
   },
   {
      q: "過疎地域の「移動の足」がない。高齢者が孤立している。",
      a: "「公共ライドシェア」の積極導入へ、県を動かしました。",
      detail: "バス路線の維持が困難な地域において、自治体やNPOが主体となる「公共ライドシェア」は切り札です。一般ドライバーが有償で運送する仕組みを、宇陀市内の実証運行に向けて具体的に前進させました。"
   },
   {
      q: "災害時、道路が寸断されたらどう命を守るのか？",
      a: "「空の物流網（ドローン）」協定を締結しました。",
      detail: "能登半島地震の教訓から、陸路だけに頼るのは危険です。JUIDA（日本UAS産業振興協議会）や近鉄グループと連携し、孤立集落へドローンで物資を届ける協定を2025年4月から始動させます。"
   }
];

// ▼ 4. デザイン用コンポーネント（金砂子・霞）
const GoldDustAccent = () => (
   <div className="absolute -top-10 -left-10 w-40 h-40 opacity-30 pointer-events-none z-0" style={{
      backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
      backgroundSize: '16px 16px'
   }}></div>
);

const MistSeparator = () => (
   <div className="w-full h-32 bg-gradient-to-b from-[#FAFAF6] via-white to-[#FAFAF6] opacity-80 pointer-events-none"></div>
);

export default function Page() {
   const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [openQA, setOpenQA] = useState<number | null>(null); // QAのアコーディオン開閉

   const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
   const toggleQA = (index: number) => setOpenQA(openQA === index ? null : index);

   // NAV LINKS UPDATED
   const navLinks = ['VISION', 'POLICY', 'RESULTS', 'ASSEMBLY', 'ROADMAP', 'ACTIVITY', 'PROFILE'];

   return (
      <div className="flex min-h-screen text-[#0A1A3A] bg-[#FAFAF6] selection:bg-[#FF1A1A] selection:text-white font-sans relative">

         {/* =================================================================
           【和の仕掛け 1】全体テクスチャ（和紙）
           FIX: z-indexを50にしてコンテンツの上に重ねる
          ================================================================= */}
         <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

         {/* MOBILE HEADER */}
         <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0A1A3A] z-[60] flex items-center justify-between px-6 shadow-md text-white">
            <div className="font-serif font-bold text-lg tracking-widest">星川大地</div>
            <button onClick={toggleMenu} className="p-2">
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         </header>

         {/* MOBILE MENU OVERLAY */}
         {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-[#0A1A3A] z-[55] pt-20 px-8 flex flex-col gap-8 text-white lg:hidden overflow-y-auto">
               <nav className="flex flex-col gap-6">
                  {navLinks.map((item) => (
                     <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={toggleMenu}
                        className="text-2xl font-serif font-bold tracking-widest border-b border-white/20 pb-4 flex justify-between items-center"
                     >
                        {item}
                        <ArrowRight size={20} className="text-[#FF1A1A]" />
                     </a>
                  ))}
               </nav>
               <div className="mt-auto mb-24 space-y-6">
                  <div className="flex justify-center gap-8">
                     <a href="https://twitter.com/daichi_star/" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                     <a href="https://www.instagram.com/daichi_star12/" target="_blank"><Instagram className="w-6 h-6" /></a>
                     <a href="https://www.facebook.com/profile.php?id=100089702911147" target="_blank"><Facebook className="w-6 h-6" /></a>
                  </div>
               </div>
            </div>
         )}

         {/* MOBILE STICKY ACTION BAR */}
         <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] flex flex-col shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
            <div className="bg-white/95 backdrop-blur-sm py-3 flex justify-center gap-10 border-t border-gray-200">
               <a href="https://twitter.com/daichi_star/" target="_blank" className="text-gray-500 hover:text-[#FF1A1A] transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
               <a href="https://www.instagram.com/daichi_star12/" target="_blank" className="text-gray-500 hover:text-[#FF1A1A] transition-colors"><Instagram className="w-6 h-6" /></a>
               <a href="https://www.facebook.com/profile.php?id=100089702911147" target="_blank" className="text-gray-500 hover:text-[#FF1A1A] transition-colors"><Facebook className="w-6 h-6" /></a>
            </div>
            <a
               href="https://lin.ee/n4zXBZ7"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-[#FF1A1A] text-white py-3 px-4 flex flex-col items-center justify-center group active:scale-95 transition-all"
            >
               <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif font-bold text-lg tracking-widest">星川大地 公式LINE</span>
                  <ArrowRight size={18} />
               </div>
               <span className="text-[10px] opacity-90 font-medium tracking-wider">後援会入会・本人直通チャットはこちら</span>
            </a>
         </div>

         {/* LEFT SIDEBAR (PC Only) */}
         <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[25%] bg-[#F9F9F6] border-r border-gray-200 z-50 flex-col justify-between p-8 overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
            <div className="mt-12 relative z-10 writing-vertical-rl text-5xl font-serif tracking-widest font-black text-[#0A1A3A]">
               奈良県議会議員<br /><span className="mt-6 text-6xl">星川 大地</span>
            </div>
            <div className="relative w-full h-[55%] z-10 mt-auto">
               <img src="/images/left-column.png" alt="Portrait" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain object-bottom drop-shadow-2xl" />
            </div>
         </aside>

         {/* CENTER COLUMN (Main Content) */}
         <main className="flex-1 lg:ml-[25%] lg:mr-[25%] bg-[#FAFAF6] relative z-40 shadow-[0_0_60px_rgba(0,0,0,0.2)] min-h-screen pb-40 lg:pb-20 pt-16 lg:pt-0 border-r border-[#000]/5 lg:border-none">

            {/* =================================================================
             【和の仕掛け 2】縦格子（PCのみメインエリア左右に極薄線）
            ================================================================= */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-8 w-[1px] bg-[#0A1A3A]/5 z-0"></div>
            <div className="hidden lg:block absolute top-0 bottom-0 right-8 w-[1px] bg-[#0A1A3A]/5 z-0"></div>

            {/* HERO SECTION */}
            <section className="relative h-[85vh] w-full bg-gray-900 overflow-hidden group">
               <img
                  src="/images/image_11.png"
                  alt="Hero"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110 lg:opacity-90 opacity-40"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A1A3A] lg:bg-gradient-to-t lg:from-[#0A1A3A] lg:via-transparent lg:to-transparent opacity-95"></div>

               <img
                  src="/images/left-column.png"
                  alt="Portrait Mobile"
                  className="lg:hidden absolute bottom-0 right-[-5%] w-[80%] max-w-[350px] object-contain object-bottom z-10 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
               />

               <div className="absolute top-24 left-6 right-6 lg:top-auto lg:bottom-16 lg:left-12 lg:right-12 z-20">
                  <Reveal>
                     <h2 className="text-white text-4xl lg:text-7xl font-serif font-black leading-tight drop-shadow-2xl mb-6 lg:mb-8 tracking-wide">
                        事件が起きてから<br />動くのではなく、<br /><span className="text-[#FF1A1A]">事件が起きない奈良へ。</span>
                     </h2>
                  </Reveal>
                  <Reveal delay={200}>
                     <div className="lg:border-l-4 lg:border-[#FF1A1A] lg:pl-6">
                        <p className="text-white/90 text-sm lg:text-lg leading-loose font-medium drop-shadow-md">
                           元警察官として、現場で守ってきた。<br />
                           次は、制度（しくみ）で守る。<br />
                           それが星川だいちの決意です。
                        </p>
                     </div>
                  </Reveal>
               </div>
            </section>

            {/* CONTENT BODY */}
            <div className="px-6 md:px-12 py-24 space-y-32 relative z-10">

               {/* VISION */}
               <section id="vision" className="relative">
                  <GoldDustAccent /> {/* 【和の仕掛け 3】金砂子アクセント */}
                  <Reveal>
                     <div className="flex items-center gap-4 mb-16 relative z-10">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">VISION</h3>
                     </div>
                     <h4 className="text-3xl md:text-4xl font-serif font-bold mb-20 text-[#0A1A3A] leading-relaxed relative z-10">
                        星川だいちが約束する<br />「3つの奈良」
                     </h4>
                  </Reveal>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                     {[
                        { id: "01", title: "制度の「穴」を、", title2: "埋める。", img: "/images/activity_03.jpg", desc: "子育て・防犯の現場にある「隙間」を、見守りカメラ助成やシッター支援という具体的な「制度」で塞ぎます。" },
                        { id: "02", title: "奈良の「宝」を、", title2: "磨く。", img: "/images/activity_02.png", desc: "日本酒発祥の地、歴史遺産。あるものを活かし、滞在と消費を生む「産業」へと昇華させます。" },
                        { id: "03", title: "命の「砦」を、", title2: "築く。", img: "/images/activity_04.jpg", desc: "五條市を要とした防災拠点と、空飛ぶドローン網。災害時に確実に機能するインフラを整備します。" }
                     ].map((v, i) => (
                        <Reveal key={v.id} delay={(i + 1) * 100}>
                           <div className="group relative h-[400px] border border-gray-200 overflow-hidden bg-white/60 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                              <img src={v.img} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 grayscale" alt="" />
                              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                 <span className="text-6xl font-black text-[#0A1A3A]/10 absolute top-4 right-4">{v.id}</span>
                                 <h5 className="writing-vertical-rl text-3xl font-serif font-bold text-[#0A1A3A] tracking-widest h-2/3 border-r-2 border-[#FF1A1A]/30 pr-4">
                                    {v.title}<br /><span className="text-[#FF1A1A]">{v.title2}</span>
                                 </h5>
                                 <p className="text-sm font-medium text-gray-600 leading-relaxed border-t border-gray-300 pt-4 mt-auto">
                                    {v.desc}
                                 </p>
                              </div>
                           </div>
                        </Reveal>
                     ))}
                  </div>
               </section>

               <MistSeparator /> {/* 【和の仕掛け 4】霞で区切る */}

               {/* POLICY */}
               <section id="policy" className="space-y-24 relative">
                  <GoldDustAccent />
                  <Reveal>
                     <div className="mb-16 relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                           <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                           <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">POLICY</h3>
                        </div>
                        <h4 className="text-2xl lg:text-4xl font-serif font-bold text-[#0A1A3A]">現場の声から生まれた、<br />5つの重点政策。</h4>
                     </div>
                  </Reveal>

                  {/* Policy Items */}
                  {[
                     { id: "01", title: "「守りの穴」を、<br/>仕組みで塞ぐ。", items: ["見守りカメラ設置の助成を確保・拡充", "<span><strong class='text-[#FF1A1A] bg-red-50 px-1'>ベビーシッター助成</strong>の前進</span>", "児相・警察・行政の連携システム提言"] },
                     { id: "02", title: "移動のストレスを減らし、<br/>暮らしを快適に。", items: ["公共ライドシェアの導入（<strong class='text-[#FF1A1A]'>高齢者の足</strong>・交通空白地対策）", "大和西大寺駅の高架化・開かずの踏切解消", "道路環境の改善（ならの道リフレッシュ 198km）", "「あしゆびプロジェクト」で健康寿命を延伸"] },
                     { id: "03", title: "奈良は「来て終わり」じゃなく<br/>「泊まって、食べて、楽しむ」へ。", items: ["平城宮跡南側に<strong class='text-[#FF1A1A] bg-red-50 px-1'>「食のハブ拠点」</strong>を整備", "日本酒発祥の地ブランド戦略（酒米「奈良露」）", "ふるさと納税の「コト消費」化"] },
                     { id: "04", title: "現場で働く人を、<br/>全力で支える。", items: ["介護・保育の処遇改善", "教職員／警察官の採用広報強化"] },
                     { id: "05", title: "備えは“買える”ように、<br/>“見に行ける”ように。", items: ["災害時のドローン隊強化（契約・運用）", "消防学校（五條市）の防災拠点化", "<strong class='text-[#FF1A1A]'>ツキノワグマ対策</strong>（目撃117件への即応体制）"] }
                  ].map((p, i) => (
                     <Reveal key={p.id}>
                        <div className="relative group">
                           {/* 数字を背景に溶け込ませる */}
                           <span className="absolute -top-12 -left-4 lg:-top-16 lg:-left-12 text-[100px] lg:text-[180px] font-black text-[#0A1A3A]/5 select-none z-0 group-hover:text-[#FF1A1A]/10 transition-colors leading-none">{p.id}</span>
                           <div className={`relative z-10 pl-4 lg:pl-8 border-l-4 lg:border-l-8 ${i % 2 === 0 ? 'border-[#FF1A1A]' : 'border-[#0A1A3A]'}`}>
                              <h5 className="text-xl lg:text-3xl font-bold mb-6 text-[#0A1A3A]" dangerouslySetInnerHTML={{ __html: p.title }}></h5>
                              <ul className="space-y-4 text-sm lg:text-lg text-gray-700">
                                 {p.items.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 items-start">
                                       <ArrowRight className="text-[#FF1A1A] shrink-0 mt-1" size={18} />
                                       <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </Reveal>
                  ))}
               </section>

               <MistSeparator />

               {/* 【NEW】RESULTS (実績) */}
               <section id="results" className="relative">
                  <GoldDustAccent />
                  <Reveal>
                     <div className="flex items-center gap-4 mb-16 relative z-10">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">RESULTS</h3>
                     </div>
                     <h4 className="text-3xl md:text-4xl font-serif font-bold mb-20 text-[#0A1A3A] relative z-10">
                        口先だけでなく、<br /><span className="text-[#FF1A1A] border-b-4 border-[#FF1A1A]/20">「結果」</span>で証明する。
                     </h4>
                  </Reveal>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                     {results.map((res, i) => (
                        <Reveal key={i} delay={i * 100}>
                           <div className="bg-white/80 backdrop-blur-sm p-8 border-t-4 border-[#FF1A1A] shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                              <h5 className="text-sm font-bold text-gray-500 tracking-wider mb-4 h-10">{res.label}</h5>
                              <div className="flex items-end gap-2 mb-4">
                                 {res.before && (
                                    <>
                                       <span className="text-2xl font-bold text-gray-300 line-through decoration-2 decoration-gray-300">{res.before}</span>
                                       <ArrowRight className="text-[#FF1A1A] w-6 h-6 mb-2" />
                                    </>
                                 )}
                                 <span className="text-5xl font-black text-[#0A1A3A] tracking-tighter">
                                    {res.after || res.value}
                                    <span className="text-lg font-bold ml-1">{res.unit}</span>
                                 </span>
                              </div>
                              {res.sub && <span className="inline-block bg-[#FF1A1A] text-white text-xs font-bold px-2 py-1 mb-4 rounded w-fit">{res.sub}</span>}
                              <p className="text-sm text-gray-600 leading-relaxed font-medium mt-auto border-t border-gray-100 pt-4">
                                 {res.desc}
                              </p>
                           </div>
                        </Reveal>
                     ))}
                  </div>
               </section>

               <MistSeparator />

               {/* 【NEW】ASSEMBLY (議会活動) */}
               <section id="assembly" className="relative">
                  <GoldDustAccent />
                  <Reveal>
                     <div className="flex items-center gap-4 mb-16 relative z-10">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">ASSEMBLY</h3>
                     </div>
                     <h4 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-[#0A1A3A] relative z-10">
                        県民の声を背負い、<br />議会で<span className="text-[#FF1A1A]">「戦う」</span>。
                     </h4>
                  </Reveal>

                  <div className="space-y-4 relative z-10">
                     {assemblyQA.map((qa, i) => (
                        <Reveal key={i} delay={i * 50}>
                           <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#FF1A1A] transition-colors bg-white/80 backdrop-blur-sm shadow-sm">
                              <button
                                 onClick={() => toggleQA(i)}
                                 className="w-full text-left p-6 md:p-8 flex justify-between items-start gap-4 group bg-gray-50/50"
                              >
                                 <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                       <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">QUESTION</span>
                                       <h5 className="font-bold text-gray-600 text-sm md:text-base">{qa.q}</h5>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2">
                                       <span className="bg-[#FF1A1A] text-white text-xs font-bold px-2 py-1 rounded">ANSWER</span>
                                       <h4 className="font-bold text-[#0A1A3A] text-lg md:text-xl group-hover:text-[#FF1A1A] transition-colors">{qa.a}</h4>
                                    </div>
                                 </div>
                                 {openQA === i ? <ChevronUp className="text-[#FF1A1A] shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
                              </button>
                              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openQA === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                                 <div className="p-6 md:p-8 pt-0 text-gray-600 leading-loose text-sm md:text-base border-t border-gray-100">
                                    <p>{qa.detail}</p>
                                 </div>
                              </div>
                           </div>
                        </Reveal>
                     ))}
                  </div>
               </section>

               <MistSeparator />

               {/* ROADMAP */}
               <section id="roadmap" className="relative">
                  <GoldDustAccent />
                  <Reveal>
                     <div className="flex items-center gap-4 mb-16 relative z-10">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">ROADMAP</h3>
                     </div>
                  </Reveal>

                  <div className="relative max-w-4xl mx-auto pl-8 md:pl-0 z-10">
                     <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2"></div>
                     <div className="space-y-24">
                        {roadmap.map((item, index) => (
                           <Reveal key={index} delay={index * 150}>
                              <div className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                 <div className="absolute left-0 md:left-1/2 top-4 md:top-auto w-6 h-6 bg-[#FF1A1A] rounded-full border-4 border-[#FAFAF6] shadow-md z-10 -translate-x-1/2 transform transition-transform hover:scale-125"></div>
                                 <div className="hidden md:block md:w-1/2"></div>
                                 <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <span className="text-4xl md:text-5xl font-black text-[#0A1A3A]/10 block mb-2">{item.year}</span>
                                    <div className="relative z-10">
                                       <h4 className="text-xl md:text-2xl font-bold text-[#0A1A3A] mb-2">{item.title}</h4>
                                       <p className="text-[#FF1A1A] font-bold text-sm mb-3">{item.subtitle}</p>
                                       <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                 </div>
                              </div>
                           </Reveal>
                        ))}
                     </div>
                  </div>
               </section>

               {/* ACTIVITY REPORT */}
               <section id="activity" className="relative pt-12">
                  <GoldDustAccent />
                  <Reveal>
                     <div className="flex items-center gap-4 mb-12 relative z-10">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">ACTIVITY</h3>
                     </div>
                     <div className="text-center mb-12 relative z-10">
                        <h4 className="text-3xl font-serif font-bold text-[#0A1A3A]">Activity Report</h4>
                        <p className="text-gray-500 mt-2">議会外の活動</p>
                     </div>
                  </Reveal>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                     {activities.map((act, i) => (
                        <Reveal key={act.id} delay={i * 100}>
                           <button
                              onClick={() => setSelectedActivity(act)}
                              className="group w-full relative aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all text-left"
                           >
                              <img src={act.image} alt={act.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                              <div className="absolute bottom-0 left-0 p-4 text-white">
                                 <p className="text-xs font-bold tracking-widest text-[#FF1A1A] mb-1">{act.category}</p>
                                 <h5 className="text-lg font-bold line-clamp-2">{act.title}</h5>
                              </div>
                           </button>
                        </Reveal>
                     ))}
                  </div>
               </section>

               {/* 【NEW】PROFILE & STORY (魂のプロフィール) */}
               <section id="profile" className="pt-20 border-t border-gray-200/50 relative">
                  <GoldDustAccent />

                  {/* STORY SECTION (黒背景で没入感を演出) */}
                  <Reveal>
                     <div className="bg-[#0A1A3A] text-white p-8 md:p-16 rounded-2xl relative overflow-hidden mb-16 shadow-2xl z-10">
                        <Quote className="absolute top-8 left-8 text-white/10 w-32 h-32 rotate-180" />
                        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                           <h3 className="text-2xl md:text-4xl font-serif font-bold leading-relaxed tracking-wider">
                              「SOSを出せない人を、<br />どうすれば守れるのか」
                           </h3>
                           <div className="w-16 h-[2px] bg-[#FF1A1A] mx-auto"></div>
                           <p className="text-base md:text-lg leading-loose font-medium text-gray-300 text-left md:text-center">
                              警察官として、多くの「現場」を見てきました。犯罪や事故が起きてから駆けつける無力感。
                              法や制度の壁に阻まれ、目の前の困っている人に手を差し伸べられない悔しさ。<br /><br />
                              「助けて」と言えない子どもたち、声を上げられない被害者。<br />
                              彼らを守るためには、事件が起きる前に「仕組み」を変えるしかない。<br /><br />
                              それが、私が警察の制服を脱ぎ、政治の世界へ飛び込んだ理由です。<br />
                              <strong>現場を知る私だからこそ、埋められる「穴」がある。</strong>
                           </p>
                        </div>
                     </div>
                  </Reveal>

                  <Reveal>
                     <div className="flex items-center gap-4 mb-12 relative z-10">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">PROFILE</h3>
                     </div>
                     <div className="flex flex-col md:flex-row gap-12 relative z-10">
                        <div className="w-full md:w-1/2 bg-gray-100 relative aspect-[3/4] shadow-lg">
                           <img src="/images/sidebar_final.jpg" className="absolute inset-0 w-full h-full object-cover object-top" alt="Profile" />
                        </div>
                        <div className="flex-1 space-y-8">
                           <div>
                              <h4 className="text-4xl font-serif font-bold text-[#0A1A3A] mb-2">星川 だいち</h4>
                              <p className="text-gray-500">1993年12月16日生まれ（32歳）</p>
                           </div>
                           <p className="text-xl font-bold text-[#FF1A1A] border-b border-gray-200 pb-4">奈良県議会議員（奈良市・山辺郡 選出）</p>
                           <dl className="space-y-4 text-gray-700">
                              <div className="grid grid-cols-[80px_1fr]"><dt className="font-bold">経歴</dt><dd>関西大学 商学部 卒<br />大阪府警 → 千葉県警 → 大阪府警</dd></div>
                              <div className="grid grid-cols-[80px_1fr]"><dt className="font-bold">所属</dt><dd>総務警察委員会 副委員長</dd></div>
                              <div className="grid grid-cols-[80px_1fr]"><dt className="font-bold">武道</dt><dd>空手 公認3段（世界大会優勝）</dd></div>
                           </dl>
                        </div>
                     </div>
                  </Reveal>
               </section>

            </div>
         </main>

         {/* RIGHT SIDEBAR (PC Only) */}
         <aside className="hidden lg:flex fixed right-0 top-0 h-screen w-[25%] bg-[#0A1A3A] text-white z-50 flex-col justify-between p-10 pt-20 shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/seigaiha.png')" }}></div>
            <nav className="relative z-10 flex flex-col gap-8">
               {navLinks.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="group flex items-center text-lg font-bold tracking-[0.2em] transition-all hover:text-[#FF1A1A]">
                     <span className="w-0 h-[2px] bg-[#FF1A1A] mr-0 group-hover:w-6 group-hover:mr-4 transition-all duration-300"></span>
                     {item}
                  </a>
               ))}
            </nav>

            <div className="relative z-10 pb-8 space-y-8">
               <a
                  href="https://lin.ee/n4zXBZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-6 bg-[#FF1A1A] text-white font-bold text-lg tracking-widest shadow-[0_0_30px_rgba(255,26,26,0.6)] hover:scale-105 active:scale-95 transition-all text-center relative overflow-hidden group"
               >
                  <span className="relative z-10">LINE 登録</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
               </a>

               <div className="flex justify-center gap-6">
                  <a href="https://twitter.com/daichi_star/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#FF1A1A] transition-colors p-2 hover:bg-white/5 rounded-full">
                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/daichi_star12/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#FF1A1A] transition-colors p-2 hover:bg-white/5 rounded-full">
                     <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100089702911147" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#FF1A1A] transition-colors p-2 hover:bg-white/5 rounded-full">
                     <Facebook className="w-6 h-6" />
                  </a>
               </div>

               <div className="text-xs text-gray-400 opacity-60 space-y-2 text-center">
                  <p>日本維新の会 奈良県総支部</p>
                  <p>事務所: 奈良市青野町1-4-27</p>
                  <p>© Daichi Hoshikawa</p>
               </div>
            </div>
         </aside>

         {/* POPUP MODAL */}
         {selectedActivity && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedActivity(null)}></div>
               <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
                  <button onClick={() => setSelectedActivity(null)} className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-200 transition-colors">
                     <X className="w-6 h-6 text-[#0A1A3A]" />
                  </button>
                  <div className="w-full h-64 md:h-80 relative">
                     <img src={selectedActivity.image} alt={selectedActivity.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-8 md:p-12">
                     <span className="text-[#FF1A1A] font-bold tracking-widest text-sm block mb-2">{selectedActivity.date} | {selectedActivity.category}</span>
                     <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1A3A] mb-6">{selectedActivity.title}</h3>
                     <p className="text-gray-700 leading-loose text-lg font-medium whitespace-pre-wrap">{selectedActivity.description}</p>
                  </div>
               </div>
            </div>
         )}

      </div>
   );
}

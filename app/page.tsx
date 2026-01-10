"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

// ▼ 活動報告データ（チラシ等の一次情報に基づき強化済み）
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

// ▼ 未来年表データ（ROADMAP）
const roadmap = [
   { year: "2025", title: "大阪・関西万博", subtitle: "奈良への誘致強化・「ALL NARA」での発信" },
   { year: "2026", title: "広報戦略の革新", subtitle: "Vtuber「奈々鹿」活用による県政関心層の拡大" },
   { year: "2028", title: "五條市防災拠点", subtitle: "コアゾーン整備完了・広域防災体制の確立" },
   { year: "2031", title: "奈良国体・障スポ", subtitle: "トップアスリート育成成果とスポーツ文化の継承" },
];

export default function Page() {
   const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

   return (
      <div className="flex min-h-screen text-[#0A1A3A] bg-gray-100 selection:bg-[#FF1A1A] selection:text-white">

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

         {/* CENTER COLUMN */}
         <main className="flex-1 lg:ml-[25%] lg:mr-[25%] bg-white relative z-40 shadow-[0_0_60px_rgba(0,0,0,0.2)] min-h-screen pb-20">

            {/* HERO */}
            <section className="relative h-[85vh] w-full bg-gray-900 overflow-hidden">
               <img src="/images/image_11.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-90" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] via-transparent to-transparent opacity-95"></div>
               <div className="absolute bottom-16 left-8 right-8 md:left-12 md:right-12">
                  <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-tight drop-shadow-2xl mb-8">
                     事件が起きてから<br />動くのではなく、<br /><span className="text-[#FF1A1A]">事件が起きない奈良へ。</span>
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-loose max-w-2xl font-medium border-l-4 border-[#FF1A1A] pl-6">
                     元警察官として、現場の最前線で「目の前の市民を守る」仕事に誇りを持ってきました。しかし同時に、ルールや制度が変わらなければ救えない現実にも、何度も直面しました。<br /><br />
                     だから私は、働き方ではなく、生き方を変えました。<br /><strong>県民の「もっとこうだったら」を、仕組みとして実現する。</strong><br />それが星川だいちの決意です。
                  </p>
               </div>
            </section>

            {/* CONTENT */}
            <div className="px-6 md:px-12 py-24 space-y-32 bg-white">

               {/* VISION */}
               <section id="vision">
                  <div className="flex items-center gap-4 mb-8">
                     <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                     <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">VISION</h3>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-[#0A1A3A]">星川だいちが約束する<br />「3つの奈良」</h4>
                  <div className="grid gap-6">
                     {["子どもと女性が安全・安心に暮らせる奈良", "「お金が落ちる」奈良", "災害でも「守り抜く」奈良"].map((item, i) => (
                        <div key={i} className="group p-8 border border-gray-100 hover:border-[#FF1A1A] transition-all duration-300 shadow-sm hover:shadow-lg bg-gray-50/50">
                           <span className="text-5xl font-black text-gray-200 block mb-2 group-hover:text-[#FF1A1A] transition-colors">0{i + 1}</span>
                           <h5 className="text-xl font-bold">{item}</h5>
                        </div>
                     ))}
                  </div>
               </section>

               {/* POLICY */}
               <section id="policy" className="space-y-24">
                  <div className="mb-16">
                     <div className="flex items-center gap-4 mb-8">
                        <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                        <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">POLICY</h3>
                     </div>
                     <h4 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1A3A]">現場の声から生まれた、<br />5つの重点政策。</h4>
                  </div>

                  {/* Policy 01 */}
                  <div className="relative group">
                     <span className="absolute -top-16 -left-6 md:-left-12 text-[140px] md:text-[180px] font-black text-gray-100 select-none z-0 group-hover:text-red-50 transition-colors leading-none">01</span>
                     <div className="relative z-10 pl-4 md:pl-8 border-l-0 md:border-l-8 border-[#FF1A1A]">
                        <h5 className="text-2xl md:text-3xl font-bold mb-6 text-[#0A1A3A]">「守りの穴」を、<br />仕組みで塞ぐ。</h5>
                        <ul className="space-y-4 text-base md:text-lg text-gray-700">
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 見守りカメラ設置の助成を確保・拡充</li>
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> <span><strong className="text-[#FF1A1A] bg-red-50 px-1">ベビーシッター助成</strong>の前進</span></li>
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 児相・警察・行政の連携システム提言</li>
                        </ul>
                     </div>
                  </div>

                  {/* Policy 02 */}
                  <div className="relative group">
                     <span className="absolute -top-16 -left-6 md:-left-12 text-[140px] md:text-[180px] font-black text-gray-100 select-none z-0 group-hover:text-[#0A1A3A]/5 transition-colors leading-none">02</span>
                     <div className="relative z-10 pl-4 md:pl-8 border-l-0 md:border-l-8 border-[#0A1A3A]">
                        <h5 className="text-2xl md:text-3xl font-bold mb-6 text-[#0A1A3A]">移動のストレスを減らし、<br />暮らしを快適に。</h5>
                        <ul className="space-y-4 text-base md:text-lg text-gray-700">
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 公共ライドシェアの積極導入を提言</li>
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 踏切課題の解消（近鉄・県・市の協議促進）</li>
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 道路環境の改善</li>
                        </ul>
                     </div>
                  </div>

                  {/* Policy 03 */}
                  <div className="relative group">
                     <span className="absolute -top-16 -left-6 md:-left-12 text-[140px] md:text-[180px] font-black text-gray-100 select-none z-0 group-hover:text-red-50 transition-colors leading-none">03</span>
                     <div className="relative z-10 pl-4 md:pl-8 border-l-0 md:border-l-8 border-[#FF1A1A]">
                        <h5 className="text-2xl md:text-3xl font-bold mb-6 text-[#0A1A3A]">奈良は「来て終わり」じゃなく<br />「泊まって、食べて、楽しむ」へ。</h5>
                        <div className="my-6 w-full h-48 md:h-64 overflow-hidden rounded-lg">
                           <img src="/images/activity_02.png" alt="Sake" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                        </div>
                        <ul className="space-y-4 text-base md:text-lg text-gray-700">
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 平城宮跡南側に<strong className="text-[#FF1A1A] bg-red-50 px-1">「食のハブ拠点」</strong>を整備</li>
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 日本酒発祥の地ブランド戦略（酒米「奈良露」）</li>
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> ふるさと納税の「コト消費」化</li>
                        </ul>
                     </div>
                  </div>

                  {/* Policy 04 */}
                  <div className="relative group">
                     <span className="absolute -top-16 -left-6 md:-left-12 text-[140px] md:text-[180px] font-black text-gray-100 select-none z-0 group-hover:text-[#0A1A3A]/5 transition-colors leading-none">04</span>
                     <div className="relative z-10 pl-4 md:pl-8 border-l-0 md:border-l-8 border-[#0A1A3A]">
                        <h5 className="text-2xl md:text-3xl font-bold mb-6 text-[#0A1A3A]">現場で働く人を、<br />全力で支える。</h5>
                        <ul className="space-y-4 text-base md:text-lg text-gray-700">
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 介護・保育の処遇改善</li>
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 教職員／警察官の採用広報強化</li>
                        </ul>
                     </div>
                  </div>

                  {/* Policy 05 */}
                  <div className="relative group">
                     <span className="absolute -top-16 -left-6 md:-left-12 text-[140px] md:text-[180px] font-black text-gray-100 select-none z-0 group-hover:text-red-50 transition-colors leading-none">05</span>
                     <div className="relative z-10 pl-4 md:pl-8 border-l-0 md:border-l-8 border-[#FF1A1A]">
                        <h5 className="text-2xl md:text-3xl font-bold mb-6 text-[#0A1A3A]">備えは“買える”ように、<br />“見に行ける”ように。</h5>
                        <div className="my-6 w-full h-48 md:h-64 overflow-hidden rounded-lg">
                           <img src="/images/activity_04.jpg" alt="Disaster Prevention" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                        </div>
                        <ul className="space-y-4 text-base md:text-lg text-gray-700">
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 災害時のドローン隊強化（契約・運用）</li>
                           <li className="flex gap-3"><ArrowRight className="text-[#FF1A1A] shrink-0" /> 消防学校（五條市）の防災拠点化</li>
                        </ul>
                     </div>
                  </div>
               </section>

               {/* ROADMAP (新セクション) */}
               <section id="roadmap" className="pt-20 border-t border-gray-200">
                  <div className="flex items-center gap-4 mb-16">
                     <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                     <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">ROADMAP</h3>
                  </div>

                  <div className="relative max-w-3xl mx-auto pl-8 md:pl-0">
                     {/* タイムラインの縦線 */}
                     <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2"></div>

                     <div className="space-y-24">
                        {roadmap.map((item, index) => (
                           <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                              {/* 丸ポチ */}
                              <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-[#FF1A1A] rounded-full border-4 border-white shadow-md z-10 -translate-x-1/2 transform transition-transform hover:scale-125"></div>

                              {/* スペーサー */}
                              <div className="hidden md:block md:w-1/2"></div>

                              {/* テキストコンテンツ */}
                              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                 <span className="text-6xl font-black text-gray-200 block -mb-4 relative z-0">{item.year}</span>
                                 <div className="relative z-10">
                                    <h4 className="text-2xl font-bold text-[#0A1A3A] mb-2">{item.title}</h4>
                                    <p className="text-gray-600 font-medium border-l-4 md:border-l-0 border-[#FF1A1A] md:border-none pl-4 md:pl-0">{item.subtitle}</p>
                                 </div>
                              </div>
                           </div>
                        ))}

                        {/* 未来への矢印 */}
                        <div className="absolute left-0 md:left-1/2 bottom-[-40px] -translate-x-1/2 text-gray-300">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ACTIVITY REPORT (ボタン＆ポップアップ) */}
               <section id="activity" className="pt-32 border-t border-gray-200">
                  <div className="flex items-center gap-4 mb-12">
                     <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                     <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">ACTIVITY</h3>
                  </div>
                  <div className="text-center mb-12">
                     <h4 className="text-3xl font-serif font-bold text-[#0A1A3A]">Activity Report</h4>
                     <p className="text-gray-500 mt-2">議会外の活動</p>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                     {activities.map((act) => (
                        <button
                           key={act.id}
                           onClick={() => setSelectedActivity(act)}
                           className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all text-left"
                        >
                           <img src={act.image} alt={act.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                           <div className="absolute bottom-0 left-0 p-4 text-white">
                              <p className="text-xs font-bold tracking-widest text-[#FF1A1A] mb-1">{act.category}</p>
                              <h5 className="text-lg font-bold line-clamp-2">{act.title}</h5>
                           </div>
                        </button>
                     ))}
                  </div>
               </section>

               {/* PROFILE */}
               <section id="profile" className="pt-20 border-t border-gray-200">
                  <div className="flex items-center gap-4 mb-12">
                     <span className="h-[2px] w-12 bg-[#FF1A1A]"></span>
                     <h3 className="text-sm font-bold tracking-widest text-[#FF1A1A]">PROFILE</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-12">
                     <div className="w-full md:w-1/2 bg-gray-100 relative aspect-[3/4]">
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
                        <blockquote className="p-6 bg-gray-50 border-l-4 border-[#0A1A3A] text-lg font-serif font-bold text-[#0A1A3A]">「元警察官として、現場で守ってきた。<br />次は制度で守る。」</blockquote>
                     </div>
                  </div>
               </section>

            </div>
         </main>

         {/* RIGHT SIDEBAR (PC Only) */}
         <aside className="hidden lg:flex fixed right-0 top-0 h-screen w-[25%] bg-[#0A1A3A] text-white z-50 flex-col justify-between p-10 pt-20 shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/seigaiha.png')" }}></div>
            <nav className="relative z-10 flex flex-col gap-8">
               {['VISION', 'POLICY', 'ROADMAP', 'ACTIVITY', 'PROFILE'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="group flex items-center text-lg font-bold tracking-[0.2em] transition-all hover:text-[#FF1A1A]">
                     <span className="w-0 h-[2px] bg-[#FF1A1A] mr-0 group-hover:w-6 group-hover:mr-4 transition-all duration-300"></span>
                     {item}
                  </a>
               ))}
            </nav>
            <div className="relative z-10 pb-8">
               <button className="w-full py-6 bg-[#FF1A1A] text-white font-bold text-lg tracking-widest shadow-[0_0_30px_rgba(255,26,26,0.6)] hover:scale-105 active:scale-95 transition-all mb-6">LINE 登録</button>
               <div className="flex justify-center gap-6 mb-8">
                  <a href="https://twitter.com/daichi_star/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF1A1A] transition-colors">
                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
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
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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

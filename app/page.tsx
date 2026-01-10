'use client'

import PromisesSection from '@/components/dom/PromisesSection'
import FivePillars from '@/components/dom/FivePillars'
import Achievements from '@/components/dom/Achievements'
import ActivitySection from '@/components/dom/ActivitySection'
import { ProfileSection, Footer } from '@/components/dom/ContentSections'
import SidebarLeft from '@/components/layout/SidebarLeft'
import SidebarRight from '@/components/layout/SidebarRight'
import MobileHeader from '@/components/layout/MobileHeader'

export default function Home() {
   return (
      <div className="flex flex-row min-h-screen w-full bg-gray-100 font-sans">

         <MobileHeader />

         {/* --- [LEFT SIDEBAR] FIXED | WIDTH: 25% | LIGHT --- */}
         <SidebarLeft />

         {/* --- [CENTER COLUMN] SCROLLABLE | WIDTH: 50% | WHITE PAPER --- */}
         {/* Margins create space for fixed sidebars. Shadow adds depth. */}
         {/* ml-[25%] and mr-[25%] correspond to the sidebars */}
         <main className="flex-1 lg:ml-[25%] lg:mr-[25%] bg-white relative z-20 shadow-[0_0_60px_rgba(0,0,0,0.3)] min-h-screen">

            {/* HERO SECTION (Must be First Child - NO MARGIN) */}
            <section className="relative w-full h-[85vh] overflow-hidden bg-gray-900">
               {/* METHOD 1: CSS Background Image (Failsafe) */}
               <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: "url('/images/image_11.png')" }}
               ></div>

               {/* METHOD 2: HTML Image Tag (Primary) */}
               <img
                  src="/images/image_11.png"
                  alt="Hero Vision"
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
                  onError={(e) => { console.error("Hero image failed to load") }}
               />

               {/* Gradient Overlay (Must be Z-10 to sit ON TOP of image) */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] via-transparent to-transparent opacity-90 z-10"></div>

               {/* Text Content (Must be Z-20) */}
               <div className="absolute bottom-16 left-12 right-12 z-20">
                  <h2 className="text-white text-5xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-xl">
                     事件が起きてから<br />動くのではなく、<br />
                     <span className="text-[#FF1A1A]">事件が起きない奈良へ。</span>
                  </h2>
               </div>
            </section>

            {/* CONTENT BODY */}
            <div className="px-12 py-24 bg-white">

               {/* Integrated Promises Section */}
               <div className="mb-24">
                  <PromisesSection />
               </div>

               {/* Integrated Policy Section (Five Pillars) */}
               <div id="policy" className="space-y-24">
                  <FivePillars />
               </div>

               {/* Integrated Achievements */}
               <div id="achievements" className="mt-24">
                  <Achievements />
               </div>

               {/* Integrated Activity */}
               <div className="mt-24">
                  <ActivitySection />
               </div>

               {/* Integrated Profile */}
               <ProfileSection />

               <Footer />
            </div>
         </main>

         {/* --- [RIGHT SIDEBAR] FIXED | WIDTH: 25% | DARK NAVY --- */}
         <SidebarRight />

      </div>
   )
}

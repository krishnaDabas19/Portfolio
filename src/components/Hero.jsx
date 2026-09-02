import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react';
import IsometricBlueprintGrid from './IsometricBlueprintGrid';
import { HeroSvgBrackets } from './SvgLineDraw';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 overflow-hidden border-b border-[#E5E2DC]">
      <IsometricBlueprintGrid />

      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Index Section Tag */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#B5654A] font-bold uppercase tracking-widest">
              // 00. index introduction
            </span>
            <div className="h-[1px] flex-1 bg-[#E5E2DC]" />
            <span className="font-mono text-[10px] text-[#7A8B5C] font-semibold">
              SYS: READY
            </span>
          </div>

          {/* Asymmetric Typographic Statement */}
          <div className="relative">
            <HeroSvgBrackets />

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-end">
              {/* Oversized Typographic Name / Monogram Art */}
              <div className="xl:col-span-8 pl-1 sm:pl-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7A8B5C] font-semibold block mb-2">
                  Computer Science (AI & ML)
                </span>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-black tracking-tighter text-[#1A1A1A] leading-[0.95]">
                  KRISHNA <br />
                  <span className="text-[#B5654A] inline-block hover:translate-x-2 transition-transform duration-300">
                    DABAS
                  </span>
                </h1>
              </div>

              {/* Stacked Side Intro Narrative */}
              <div className="xl:col-span-4 space-y-4 pb-2">
                <div className="p-4 rounded-xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#B5654A] mb-1 font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>LPU / B.Tech 2025–2029</span>
                  </div>
                  <p className="font-body text-xs text-[#3F3F3F] leading-relaxed">
                    Merging algorithmic discipline in C++ with modern full-stack web engineering & artificial intelligence.
                  </p>
                </div>

                {/* Micro CTA Navigation */}
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => scrollTo('projects')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#B5654A] hover:bg-[#9E523A] text-white font-mono text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    <span>03 / Selected Works</span>
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => scrollTo('contact')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#B5654A] text-[#1A1A1A] font-mono text-xs font-medium cursor-pointer shadow-2xs transition-all"
                  >
                    <span>Contact</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B5654A]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

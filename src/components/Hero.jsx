import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import IsometricBlueprintGrid from './IsometricBlueprintGrid';
import { HeroSvgBrackets } from './SvgLineDraw';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/assets/profile.jpg');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden min-h-[88vh] flex items-center">
      {/* Signature Isometric Blueprint Schematic Grid */}
      <IsometricBlueprintGrid />

      <div className="editorial-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Monospace Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5E2DC] bg-[#FFFFFF] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C2542D] animate-ping" />
              <span className="font-mono text-xs text-[#8A8A8A]">
                <strong className="text-[#1A1A1A] font-medium">B.Tech CSE (AI & ML)</strong> @ LPU
              </span>
              <span className="text-[#8A8A8A]/40">•</span>
              <span className="font-mono text-xs text-[#C2542D] font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C2542D]" />
                Available for opportunities
              </span>
            </div>

            {/* Main Heading with Space Grotesk */}
            <div className="relative mb-4">
              <HeroSvgBrackets />
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-[#1A1A1A] leading-[1.08] pl-2">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-[#C2542D]">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-xl font-body text-[#3F3F3F] font-normal max-w-xl leading-relaxed mb-3">
              {personalInfo.tagline}
            </p>

            {/* Code-style descriptor */}
            <p className="text-xs sm:text-sm font-mono text-[#8A8A8A] max-w-lg leading-relaxed mb-8">
              // Specializing in full-stack web applications, structured C++ algorithms, and intelligent systems.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C2542D] hover:bg-[#A8421F] text-white font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer shadow-md shadow-[#C2542D]/20 active:scale-95 transition-all"
              >
                <span>View Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#C2542D] text-[#1A1A1A] font-mono text-xs uppercase tracking-wider font-medium transition-all cursor-pointer active:scale-95 shadow-xs"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#C2542D]" />
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#E5E2DC] w-full max-w-md">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A] hover:text-[#C2542D] transition-colors group"
              >
                <GithubIcon className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#C2542D] group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>

              <span className="text-[#8A8A8A]/40">•</span>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A] hover:text-[#C2542D] transition-colors group"
              >
                <LinkedinIcon className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#C2542D] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <span className="text-[#8A8A8A]/40">•</span>

              <a
                href={personalInfo.socials.email}
                className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A] hover:text-[#C2542D] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#C2542D] group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Blueprint Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-md w-full max-w-sm">
              {/* Top Terminal Status Header */}
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#E5E2DC] text-xs font-mono text-[#8A8A8A]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#C2542D]" />
                  <span className="text-[#C2542D] font-semibold">dev_profile.sys</span>
                </div>
                <span className="text-[10px] text-[#8A8A8A] font-mono">ID: KD_2026</span>
              </div>

              {/* Center Profile Avatar Frame */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 group">
                  <div className="relative p-[2px] rounded-full border-2 border-[#C2542D]/30">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-[#FAFAF8]">
                      <img
                        src={imgSrc}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImgSrc('/assets/profile.svg')}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-[#FFFFFF] bg-[#C2542D] shadow-xs" />
                </div>

                <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-0.5">
                  {personalInfo.name}
                </h3>
                <p className="font-mono text-xs text-[#C2542D] mb-4 font-medium">
                  B.Tech CSE (AI & ML)
                </p>

                {/* Micro Specs List */}
                <div className="w-full grid grid-cols-2 gap-2 text-left pt-3 border-t border-[#E5E2DC] font-mono text-[11px]">
                  <div className="p-2 rounded-lg bg-[#FAFAF8] border border-[#E5E2DC]">
                    <span className="text-[#8A8A8A] block text-[10px]">STACK</span>
                    <span className="text-[#1A1A1A] font-medium">React • C++ • Node</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAFAF8] border border-[#E5E2DC]">
                    <span className="text-[#8A8A8A] block text-[10px]">FOCUS</span>
                    <span className="text-[#C2542D] font-medium">Full-Stack & AI</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, FileDown, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import IsometricBlueprintGrid from './IsometricBlueprintGrid';
import { HeroSvgBrackets } from './SvgLineDraw';
import profilePhoto from '../assets/final.png';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(profilePhoto);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-[#E5E2DC]">
      {/* Schematic Background Grid */}
      <IsometricBlueprintGrid />

      <div className="editorial-container relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#E5E2DC] bg-[#FFFFFF] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#BF5B2E] animate-ping" />
            <span className="font-mono text-xs text-[#8A8A8A]">
              <strong className="text-[#1A1A1A] font-medium">B.Tech CSE (AI & ML)</strong> @ Lovely Professional University
            </span>
            <span className="text-[#8A8A8A]/40 hidden sm:inline">•</span>
            <span className="font-mono text-xs text-[#BF5B2E] font-medium hidden sm:inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#BF5B2E]" />
              Open to Opportunities
            </span>
          </div>

          {/* Main Typographic Intro with Integrated Profile Photo */}
          <div className="relative">
            <HeroSvgBrackets />

            <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 pt-2">
              {/* Profile Photo (Enlarged softly-rounded square with Burnt Amber border) */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-3xl border-2 border-[#BF5B2E] overflow-hidden bg-[#FFFFFF] shadow-sm hover:shadow-md transition-all shrink-0">
                <img
                  src={imgSrc}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={() => setImgSrc(profilePhoto)}
                />
              </div>


              {/* Heading */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A8A] block mb-1">
                  // Portfolio & Engineering Index
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-[#1A1A1A] tracking-tight leading-[1.05]">
                  Hi, I'm <br className="hidden sm:inline" />
                  <span className="text-[#BF5B2E]">
                    {personalInfo.name}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Tagline & Short Narrative Bio */}
          <div className="space-y-3 max-w-2xl">
            <p className="text-base sm:text-xl font-body text-[#3F3F3F] leading-relaxed">
              {personalInfo.tagline}
            </p>
            <p className="text-xs sm:text-sm font-mono text-[#8A8A8A] leading-relaxed">
              // Specializing in full-stack web applications, structured C++ algorithms, and intelligent systems.
            </p>
          </div>

          {/* Action CTAs Row */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href={personalInfo.resumeUrl}
              download="Krishna_Dabas_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#BF5B2E] hover:bg-[#A64B23] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-md shadow-[#BF5B2E]/20 transition-all cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#BF5B2E] text-[#1A1A1A] font-mono text-xs uppercase tracking-wider font-medium shadow-2xs transition-all cursor-pointer"
            >
              <span>03 / View Works</span>
              <ArrowDownRight className="w-4 h-4 text-[#BF5B2E]" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#BF5B2E] text-[#1A1A1A] font-mono text-xs uppercase tracking-wider font-medium shadow-2xs transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#BF5B2E]" />
            </button>
          </div>

          {/* Social Channels Row */}
          <div className="flex items-center gap-4 pt-4 border-t border-[#E5E2DC] w-full max-w-md text-xs font-mono text-[#8A8A8A]">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#BF5B2E] transition-colors group"
            >
              <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>

            <span>•</span>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#BF5B2E] transition-colors group"
            >
              <LinkedinIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>

            <span>•</span>

            <a
              href={personalInfo.socials.email}
              className="hover:text-[#BF5B2E] transition-colors"
            >
              Email Direct
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

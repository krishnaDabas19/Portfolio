import React, { useState, useEffect } from 'react';
import { FileDown, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, tableOfContents } from '../data/portfolioData';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');
  const [imgSrc, setImgSrc] = useState('/assets/profile.jpg');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', ...tableOfContents.map((item) => item.id)];
      const scrollPos = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id === 'hero' ? 'about' : id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Sticky Top Header Bar (Photo + Name Side-by-Side, Compact) */}
      <header className="lg:hidden sticky top-0 left-0 right-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E5E2DC] px-4 py-2.5 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left cursor-pointer"
        >
          {/* Compact Mobile Avatar Photo */}
          <div className="w-9 h-9 rounded-xl border border-[#B5654A] overflow-hidden bg-[#FFFFFF] shadow-2xs shrink-0">
            <img
              src={imgSrc}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={() => setImgSrc('/assets/profile.svg')}
            />
          </div>
          <div>
            <span className="font-heading text-sm font-bold text-[#1A1A1A] block leading-tight">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-[#7A8B5C] font-medium block">
              CSE (AI & ML) @ LPU
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-2.5 py-1.5 rounded-lg border border-[#B5654A]/30 bg-[#B5654A]/10 text-[#B5654A] text-xs font-mono font-medium"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="p-2 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] text-[#1A1A1A]"
            aria-label="Toggle Navigation"
          >
            {mobileDrawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer Dropdown */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed top-[54px] left-0 right-0 bottom-0 z-30 bg-[#FAFAF8]/98 backdrop-blur-xl border-b border-[#E5E2DC] p-6 overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A8B5C] font-semibold">
              // Table of Contents
            </span>
            {tableOfContents.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2.5 font-mono text-sm flex items-center justify-between cursor-pointer border-b border-[#E5E2DC]/50 ${
                    isActive ? 'text-[#B5654A] font-bold' : 'text-[#3F3F3F]'
                  }`}
                >
                  <span>
                    {item.index} — {item.label}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#B5654A]" />}
                </button>
              );
            })}

            <div className="pt-6 border-t border-[#E5E2DC] space-y-3">
              <a
                href={personalInfo.resumeUrl}
                download="Krishna_Dabas_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#B5654A]/30 bg-[#B5654A]/10 text-[#B5654A] text-xs font-mono font-semibold"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <div className="flex items-center justify-around pt-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#8A8A8A] hover:text-[#B5654A]"
                >
                  GitHub ↗
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#8A8A8A] hover:text-[#B5654A]"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-xs text-[#8A8A8A] hover:text-[#B5654A]"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Persistent Left Sidebar (~30% width) */}
      <aside className="hidden lg:flex lg:w-[32%] xl:w-[28%] lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:justify-between lg:border-r border-[#E5E2DC] p-8 xl:p-10 bg-[#FAFAF8] select-none z-20 overflow-y-auto">
        {/* Top: Photo → Name → Tagline/Role (Strictly Stacked Vertically) */}
        <div className="space-y-4">
          {/* 1. Modest Softly-Rounded-Square Profile Photo (~112px / 7rem) with Accent Border */}
          <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-2xl border-2 border-[#B5654A] overflow-hidden bg-[#FFFFFF] shadow-xs">
            <img
              src={imgSrc}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={() => setImgSrc('/assets/profile.svg')}
            />
          </div>

          {/* 2. Name (Large, Bold, Space Grotesk) */}
          <div>
            <h1 className="font-heading text-2xl xl:text-3xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
              {personalInfo.name}
            </h1>
            <p className="font-mono text-xs text-[#7A8B5C] font-semibold mt-0.5">
              B.Tech CSE (AI & ML) Student & Developer
            </p>
          </div>

          {/* 3. Tagline / Role Summary */}
          <p className="font-body text-xs text-[#3F3F3F] leading-relaxed max-w-xs">
            {personalInfo.tagline}
          </p>

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5E2DC] bg-[#FFFFFF] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#B5654A] animate-ping" />
            <span className="font-mono text-[11px] text-[#1A1A1A] font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#B5654A]" />
              Open for Opportunities
            </span>
          </div>
        </div>

        {/* Middle: Live Table of Contents Index */}
        <nav className="my-6 space-y-1" aria-label="Table of Contents">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#7A8B5C] font-semibold block mb-2 pl-2">
            // Index Navigation
          </span>
          {tableOfContents.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group w-full flex items-center justify-between px-3 py-2 rounded-lg font-mono text-xs transition-all text-left cursor-pointer ${
                  isActive
                    ? 'text-[#B5654A] font-bold bg-[#B5654A]/8 shadow-2xs'
                    : 'text-[#8A8A8A] hover:text-[#1A1A1A] hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`text-[10px] font-bold ${
                      isActive ? 'text-[#B5654A]' : 'text-[#7A8B5C]/80'
                    }`}
                  >
                    {item.index}
                  </span>
                  <span className="tracking-wide">{item.label}</span>
                </div>

                <span
                  className={`w-1.5 h-1.5 rounded-full transition-transform ${
                    isActive
                      ? 'bg-[#B5654A] scale-100'
                      : 'bg-transparent scale-0 group-hover:scale-75 group-hover:bg-[#8A8A8A]'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Bottom: Actions, Social Icons & Colophon */}
        <div className="space-y-4 pt-4 border-t border-[#E5E2DC]">
          {/* Resume PDF Action */}
          <a
            href={personalInfo.resumeUrl}
            download="Krishna_Dabas_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg border border-[#B5654A]/30 bg-[#B5654A]/10 hover:bg-[#B5654A]/15 text-[#B5654A] font-mono text-xs font-semibold transition-all group shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <FileDown className="w-3.5 h-3.5 text-[#B5654A]" />
              <span>Resume (PDF)</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B5654A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Social Channels */}
          <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8A]">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#B5654A] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <span>•</span>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#B5654A] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <span>•</span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#B5654A] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Small Monospace Colophon */}
          <div className="text-[10px] font-mono text-[#8A8A8A]/70">
            © {new Date().getFullYear()} KD // Phagwara, IN
          </div>
        </div>
      </aside>
    </>
  );
}

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
      {/* Mobile Sticky Header Bar */}
      <header className="lg:hidden sticky top-0 left-0 right-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E5E2DC] px-5 py-3 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full border border-[#E5E2DC] bg-[#FFFFFF] flex items-center justify-center shadow-xs">
            <span className="font-mono text-xs font-bold text-[#C2542D]">
              {personalInfo.initials}
            </span>
          </div>
          <div>
            <span className="font-heading text-sm font-bold text-[#1A1A1A] block leading-none">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-[#8A8A8A] block mt-0.5">
              CSE (AI & ML)
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] text-[#8A8A8A] hover:text-[#C2542D] text-xs font-mono"
            aria-label="Email"
          >
            Contact
          </a>
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
        <div className="lg:hidden fixed top-[57px] left-0 right-0 bottom-0 z-30 bg-[#FAFAF8]/98 backdrop-blur-xl border-b border-[#E5E2DC] p-6 overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8A8A]">
              // Index Table of Contents
            </span>
            {tableOfContents.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 font-mono text-sm flex items-center justify-between cursor-pointer border-b border-[#E5E2DC]/50 ${
                    isActive ? 'text-[#C2542D] font-bold' : 'text-[#3F3F3F]'
                  }`}
                >
                  <span>
                    {item.index} — {item.label}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C2542D]" />}
                </button>
              );
            })}

            <div className="pt-6 border-t border-[#E5E2DC] space-y-3">
              <a
                href={personalInfo.resumeUrl}
                download="Krishna_Dabas_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#C2542D]/30 bg-[#C2542D]/10 text-[#C2542D] text-xs font-mono font-semibold"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <div className="flex items-center justify-around pt-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#8A8A8A] hover:text-[#C2542D]"
                >
                  GitHub ↗
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#8A8A8A] hover:text-[#C2542D]"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-xs text-[#8A8A8A] hover:text-[#C2542D]"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Persistent Left Sidebar (~30% width) */}
      <aside className="hidden lg:flex lg:w-[32%] xl:w-[28%] lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:justify-between lg:border-r border-[#E5E2DC] p-8 xl:p-12 bg-[#FAFAF8] select-none z-20">
        {/* Top: Identity & Status */}
        <div className="space-y-6">
          {/* Avatar Thumbnail & Monogram */}
          <div className="flex items-center gap-3.5">
            <div className="relative group">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E5E2DC] bg-[#FFFFFF] shadow-xs group-hover:border-[#C2542D] transition-colors">
                <img
                  src={imgSrc}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={() => setImgSrc('/assets/profile.svg')}
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#FAFAF8] bg-[#C2542D]" />
            </div>

            <div>
              <h1 className="font-heading text-lg font-bold text-[#1A1A1A] tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="font-mono text-[11px] text-[#8A8A8A]">
                AI & ML Engineering @ LPU
              </p>
            </div>
          </div>

          {/* Quick Bio Tagline */}
          <p className="font-body text-xs text-[#3F3F3F] leading-relaxed">
            Constructing responsive web applications, modular algorithms in C++, and intelligent systems.
          </p>

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2542D] animate-ping" />
            <span className="font-mono text-[11px] text-[#1A1A1A] font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C2542D]" />
              Open for Internships
            </span>
          </div>
        </div>

        {/* Middle: Live Table of Contents Navigation */}
        <nav className="my-8 space-y-1.5" aria-label="Table of Contents">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A8A8A] block mb-3 pl-2">
            // Table of Contents
          </span>
          {tableOfContents.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group w-full flex items-center justify-between px-3 py-2 rounded-lg font-mono text-xs transition-all text-left cursor-pointer ${
                  isActive
                    ? 'text-[#C2542D] font-bold bg-[#C2542D]/8 shadow-xs'
                    : 'text-[#8A8A8A] hover:text-[#1A1A1A] hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`text-[10px] ${isActive ? 'text-[#C2542D]' : 'text-[#8A8A8A]/60'}`}>
                    {item.index}
                  </span>
                  <span className="tracking-wide">{item.label}</span>
                </div>

                <span
                  className={`w-1.5 h-1.5 rounded-full transition-transform ${
                    isActive ? 'bg-[#C2542D] scale-100' : 'bg-transparent scale-0 group-hover:scale-75 group-hover:bg-[#8A8A8A]'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Bottom: Actions & Socials */}
        <div className="space-y-5 pt-6 border-t border-[#E5E2DC]">
          {/* Resume PDF Action */}
          <a
            href={personalInfo.resumeUrl}
            download="Krishna_Dabas_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-[#C2542D]/30 bg-[#C2542D]/10 hover:bg-[#C2542D]/15 text-[#C2542D] font-mono text-xs font-semibold transition-all group shadow-xs"
          >
            <div className="flex items-center gap-2">
              <FileDown className="w-3.5 h-3.5 text-[#C2542D]" />
              <span>Resume (PDF)</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C2542D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Social Channels */}
          <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8A]">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#C2542D] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <span>•</span>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#C2542D] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <span>•</span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#C2542D] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Small Monospace Colophon */}
          <div className="text-[10px] font-mono text-[#8A8A8A]/70 pt-1">
            © {new Date().getFullYear()} KD // Phagwara, IN
          </div>
        </div>
      </aside>
    </>
  );
}

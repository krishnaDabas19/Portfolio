import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = ['hero', ...navLinks.map((link) => link.id)];
      const scrollPos = window.scrollY + 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
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
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-[#0A0A0F]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Monogram Initials Mark KD with gradient border */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Scroll to top"
        >
          <div className="relative p-[1px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-[#12121A] flex items-center justify-center">
              <span className="font-mono text-xs font-bold tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {personalInfo.initials}
              </span>
            </div>
          </div>
          <span className="font-mono text-xs text-[#9CA3AF] group-hover:text-[#FFFFFF] hidden sm:inline-block transition-colors">
            krishna.dev
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 text-xs font-mono uppercase tracking-wider transition-colors duration-200 group ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-[#9CA3AF] hover:text-[#FFFFFF]'
                }`}
              >
                {link.label}
                {/* Glowing gradient underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[1.5px] bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-200 ${
                    isActive ? 'w-full shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Action Button / Status Badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 text-xs font-mono font-medium transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Open to Work</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-white/[0.08] bg-[#12121A] text-[#E5E7EB] hover:border-violet-500/40"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0A0A0F]/95 backdrop-blur-xl px-6 py-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 text-sm font-mono flex items-center justify-between ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-[#9CA3AF]'
                  }`}
                >
                  <span>// {link.label.toLowerCase()}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

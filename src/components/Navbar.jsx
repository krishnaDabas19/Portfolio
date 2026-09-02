import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'py-2.5 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Monogram Initials Mark KD */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-center gap-2.5 focus:outline-none cursor-pointer"
          aria-label="Scroll to top"
        >
          <div className="w-8 h-8 rounded-full border border-white/[0.12] bg-[#12121A] group-hover:border-teal-400/60 flex items-center justify-center transition-all duration-200">
            <span className="font-mono text-xs font-bold tracking-tight text-teal-400 group-hover:text-teal-300">
              {personalInfo.initials}
            </span>
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
                className={`relative py-1 text-xs font-mono uppercase tracking-wider transition-colors duration-200 cursor-pointer group ${
                  isActive
                    ? 'text-teal-400 font-semibold'
                    : 'text-[#9CA3AF] hover:text-[#FFFFFF]'
                }`}
              >
                {link.label}
                {/* Clean Teal Underline on hover and active */}
                <span
                  className={`absolute left-0 bottom-0 h-[1.5px] bg-teal-400 transition-all duration-200 ${
                    isActive ? 'w-full shadow-[0_0_8px_rgba(20,184,166,0.8)]' : 'w-0 group-hover:w-full'
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
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 text-xs font-mono font-medium transition-colors cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>Open to Work</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-white/[0.08] bg-[#12121A] text-[#E5E7EB] hover:border-teal-500/40 cursor-pointer"
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
                  className={`text-left py-2 text-sm font-mono flex items-center justify-between cursor-pointer ${
                    isActive ? 'text-teal-400 font-semibold' : 'text-[#9CA3AF]'
                  }`}
                >
                  <span>// {link.label.toLowerCase()}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(20,184,166,0.8)]" />
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

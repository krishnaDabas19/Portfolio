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
          ? 'py-3 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E5E2DC] shadow-xs'
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
          <div className="w-8 h-8 rounded-full border border-[#E5E2DC] bg-[#FFFFFF] group-hover:border-blue-600 flex items-center justify-center shadow-xs transition-all duration-200">
            <span className="font-mono text-xs font-bold tracking-tight text-blue-600">
              {personalInfo.initials}
            </span>
          </div>
          <span className="font-mono text-xs text-[#8A8A8A] group-hover:text-[#1A1A1A] hidden sm:inline-block transition-colors">
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
                    ? 'text-blue-600 font-semibold'
                    : 'text-[#8A8A8A] hover:text-[#1A1A1A]'
                }`}
              >
                {link.label}
                {/* Active Underline in Cobalt Blue */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-600/30 bg-blue-600/10 hover:bg-blue-600/15 text-blue-700 text-xs font-mono font-medium transition-colors cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Open to Work</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] text-[#1A1A1A] cursor-pointer shadow-xs"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E2DC] bg-[#FAFAF8]/95 backdrop-blur-xl px-6 py-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 text-sm font-mono flex items-center justify-between cursor-pointer ${
                    isActive ? 'text-blue-600 font-semibold' : 'text-[#8A8A8A]'
                  }`}
                >
                  <span>// {link.label.toLowerCase()}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
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

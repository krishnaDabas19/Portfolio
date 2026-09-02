import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-[#E5E2DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A8A8A]">
      <div>
        <span>© {new Date().getFullYear()} {personalInfo.name}</span>
        <span className="mx-2">•</span>
        <span>Space Grotesk & JetBrains Mono</span>
      </div>

      <button
        onClick={scrollToTop}
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#C2542D] hover:text-[#C2542D] transition-colors cursor-pointer shadow-xs"
        title="Scroll to Top"
        aria-label="Back to Top"
      >
        <span>Top of Index</span>
        <ArrowUp className="w-3.5 h-3.5 text-[#C2542D]" />
      </button>
    </footer>
  );
}

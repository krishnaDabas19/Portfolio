import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#0A0A0F] relative z-10">
      <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright & Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-xs font-semibold text-[#FFFFFF]">
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
          <span className="hidden sm:inline-block text-white/20">•</span>
          <span className="text-xs font-mono text-[#9CA3AF]">
            Built with React 19 & Tailwind CSS // Space Grotesk & JetBrains Mono
          </span>
        </div>

        {/* Social Icons + Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#9CA3AF] hover:text-cyan-300 hover:bg-[#12121A] transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#9CA3AF] hover:text-cyan-300 hover:bg-[#12121A] transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.email}
              className="p-2 rounded-lg text-[#9CA3AF] hover:text-cyan-300 hover:bg-[#12121A] transition-colors"
              title="Send Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-[#12121A] text-xs font-mono text-[#9CA3AF] hover:text-cyan-300 hover:border-cyan-500/40 transition-colors cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}

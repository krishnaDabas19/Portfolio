import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E5E2DC] dark:border-[#2A2A2A] bg-[#FAFAF8] dark:bg-[#121212] relative z-10 transition-colors">
      <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright & Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-xs font-semibold text-[#1A1A1A] dark:text-[#FFFFFF]">
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
          <span className="hidden sm:inline-block text-[#8A8A8A]/40">•</span>
          <span className="text-xs font-mono text-[#8A8A8A]">
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
              className="p-2 rounded-lg text-[#8A8A8A] hover:text-blue-600 dark:hover:text-blue-400 hover:bg-[#FFFFFF] dark:hover:bg-[#1A1A1A] transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#8A8A8A] hover:text-blue-600 dark:hover:text-blue-400 hover:bg-[#FFFFFF] dark:hover:bg-[#1A1A1A] transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.email}
              className="p-2 rounded-lg text-[#8A8A8A] hover:text-blue-600 dark:hover:text-blue-400 hover:bg-[#FFFFFF] dark:hover:bg-[#1A1A1A] transition-colors"
              title="Send Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E2DC] dark:border-[#2A2A2A] bg-[#FFFFFF] dark:bg-[#1A1A1A] text-xs font-mono text-[#8A8A8A] hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600/40 transition-colors cursor-pointer shadow-xs"
            title="Scroll to top"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { personalInfo, nowBuilding, softSkills } from '../data/portfolioData';
import TerminalHeading from './TerminalHeading';
import { SchematicDivider } from './SvgLineDraw';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-white/[0.08] relative">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <TerminalHeading
            tag="// about"
            title="Background & Mindset"
            subtitle="Undergraduate engineering student with a focus on web engineering, system logic, and AI."
          />

          {/* Main Bio Paragraphs */}
          <div className="space-y-4 text-[#E5E7EB] text-sm sm:text-base font-body leading-relaxed max-w-3xl">
            <p>
              I am a Computer Science Engineering student specializing in{' '}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold">
                Artificial Intelligence & Machine Learning
              </strong>{' '}
              at Lovely Professional University. My focus lies in constructing robust web architectures, scalable backend services, and clean algorithmic foundations.
            </p>
            <p>
              Whether structuring memory-efficient C++ data structures, developing modular React components, or designing database schemas, I prioritize maintainable, clean code that directly addresses real-world challenges.
            </p>
          </div>

          {/* Currently Learning / Now Building Ticker Card */}
          <div className="my-8 p-5 sm:p-6 rounded-xl border border-white/[0.08] bg-[#12121A] shadow-xl hover:border-violet-500/30 transition-colors">
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                  Now Building & Exploring
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                <Sparkles className="w-3 h-3" />
                Active Focus
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nowBuilding.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-xs font-mono text-[#E5E7EB]"
                >
                  <span className="text-amber-400 font-bold">❯</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Badges */}
          <div className="mb-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#9CA3AF] mb-3">
              // Core Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border border-white/[0.08] bg-[#12121A] text-[#E5E7EB] hover:border-violet-500/50 hover:text-white transition-all hover:scale-105"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume Action */}
          <div className="pt-2">
            <a
              href={personalInfo.resumeUrl}
              download="Krishna_Dabas_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 font-mono text-xs uppercase tracking-wider font-semibold transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

          <SchematicDivider />
        </motion.div>
      </div>
    </section>
  );
}

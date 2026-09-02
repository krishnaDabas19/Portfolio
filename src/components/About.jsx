import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { personalInfo, nowBuilding, softSkills } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 border-b border-[#E5E2DC]">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Monospace Numbered Index Label */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#BF5B2E] font-bold uppercase tracking-widest">
              // 01. narrative
            </span>
            <div className="h-[1px] flex-1 bg-[#E5E2DC]" />
            <span className="font-mono text-xs text-[#8A8A8A]">
              ABOUT ME
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1A1A1A] tracking-tight">
            01 — Background & Mindset
          </h2>

          {/* Editorial Text Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base font-body text-[#3F3F3F] leading-relaxed max-w-3xl">
            <p>
              I am an undergraduate Computer Science Engineering student specializing in{' '}
              <strong className="text-[#BF5B2E] font-semibold">Artificial Intelligence & Machine Learning</strong>{' '}
              at Lovely Professional University. My work focuses on building reliable full-stack applications, designing clean APIs, and structuring memory-efficient algorithms.
            </p>
            <p>
              Whether implementing structured C++ data structures or engineering modular component trees in React, I value clarity, low latency, and maintainable software architecture.
            </p>
          </div>

          {/* Location & University Snapshot Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8A8A8A] pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#BF5B2E]" />
              <span>{personalInfo.location}, India</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-[#BF5B2E]" />
              <span>{personalInfo.university}</span>
            </span>
          </div>

          {/* Currently Building Ticker Card */}
          <div className="p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E2DC]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#BF5B2E]" />
                <span className="font-mono text-xs font-bold text-[#BF5B2E] uppercase tracking-wider">
                  Active Research & Builds
                </span>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#BF5B2E] bg-[#BF5B2E]/10 px-2.5 py-0.5 rounded-full border border-[#BF5B2E]/20 font-semibold">
                <Sparkles className="w-3 h-3" />
                In Progress
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nowBuilding.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-[#3F3F3F]">
                  <span className="text-[#BF5B2E] font-bold">❯</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Soft Skills Badges */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] block mb-3">
              // Working Methodology
            </span>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] text-[#1A1A1A] text-xs font-mono shadow-2xs hover:border-[#BF5B2E] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BF5B2E]" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { personalInfo, nowBuilding, softSkills } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-[#E5E2DC]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Section Header with Monospace Numbered Index */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#B5654A] font-bold uppercase tracking-widest">
            // 01. narrative
          </span>
          <div className="h-[1px] flex-1 bg-[#E5E2DC]" />
          <span className="font-mono text-xs text-[#7A8B5C] font-semibold">
            ABOUT ME
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1A1A1A] tracking-tight">
          01 — Background & Mindset
        </h2>

        {/* Editorial Text Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base font-body text-[#3F3F3F] leading-relaxed max-w-2xl">
          <p>
            I am an undergraduate Computer Science Engineering student specializing in{' '}
            <strong className="text-[#B5654A] font-semibold">Artificial Intelligence & Machine Learning</strong>{' '}
            at Lovely Professional University. My work focuses on building reliable full-stack applications, designing clean APIs, and structuring memory-efficient algorithms.
          </p>
          <p>
            Whether implementing structured C++ data structures or engineering modular component trees in React, I value clarity, low latency, and maintainable software architecture.
          </p>
        </div>

        {/* Location & University Snapshot Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8A8A8A] pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#B5654A]" />
            <span>{personalInfo.location}, India</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-[#7A8B5C]" />
            <span>{personalInfo.university}</span>
          </span>
        </div>

        {/* Currently Building Ticker Card */}
        <div className="p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E2DC]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#B5654A]" />
              <span className="font-mono text-xs font-bold text-[#B5654A] uppercase tracking-wider">
                Active Research & Builds
              </span>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#7A8B5C] bg-[#7A8B5C]/10 px-2.5 py-0.5 rounded-full border border-[#7A8B5C]/20 font-semibold">
              <Sparkles className="w-3 h-3" />
              In Progress
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nowBuilding.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-[#3F3F3F]">
                <span className="text-[#B5654A] font-bold">❯</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Soft Skills Badges */}
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#7A8B5C] font-semibold block mb-3">
            // Working Methodology
          </span>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] text-[#1A1A1A] text-xs font-mono shadow-2xs hover:border-[#B5654A] transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7A8B5C]" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

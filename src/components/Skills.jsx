import React from 'react';
import { motion } from 'framer-motion';
import { toolboxCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-[#E5E2DC]">
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
            // 02. capabilities
          </span>
          <div className="h-[1px] flex-1 bg-[#E5E2DC]" />
          <span className="font-mono text-xs text-[#7A8B5C] font-semibold">
            TECH ARSENAL
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1A1A1A] tracking-tight">
            02 — The Toolbox
          </h2>
          <p className="font-mono text-xs text-[#8A8A8A]">
            * Size denotes core depth & frequency of use
          </p>
        </div>

        {/* Editorial Toolbox Grid */}
        <div className="space-y-8">
          {toolboxCategories.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="p-6 sm:p-8 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs hover:border-[#B5654A] transition-all"
            >
              {/* Category Annotation Header */}
              <div className="pb-4 mb-6 border-b border-[#E5E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-mono text-xs font-bold text-[#B5654A] uppercase tracking-wider">
                  {group.label}
                </span>
                <span className="font-body text-xs text-[#8A8A8A]">
                  {group.description}
                </span>
              </div>

              {/* Varied Text Size / Intentional Editorial Hierarchy Grid */}
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-5">
                {group.skills.map((skill, sIdx) => {
                  if (skill.weight === 'primary') {
                    return (
                      <div
                        key={sIdx}
                        className="group relative cursor-default transition-transform hover:-translate-y-0.5"
                      >
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-heading font-black text-[#1A1A1A] group-hover:text-[#B5654A] transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#B5654A] font-bold px-2 py-0.5 rounded-full bg-[#B5654A]/10">
                            Core
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-[#7A8B5C] font-medium block mt-0.5">
                          {skill.note}
                        </span>
                      </div>
                    );
                  }

                  if (skill.weight === 'secondary') {
                    return (
                      <div
                        key={sIdx}
                        className="group relative cursor-default transition-transform hover:-translate-y-0.5"
                      >
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg sm:text-xl font-heading font-bold text-[#1A1A1A] group-hover:text-[#B5654A] transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#7A8B5C]">
                            // {skill.experience}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-[#8A8A8A] block mt-0.5">
                          {skill.note}
                        </span>
                      </div>
                    );
                  }

                  // Tertiary
                  return (
                    <div
                      key={sIdx}
                      className="group relative cursor-default transition-transform hover:-translate-y-0.5 opacity-80 hover:opacity-100"
                    >
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-heading font-semibold text-[#3F3F3F] group-hover:text-[#B5654A] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#8A8A8A] block">
                        {skill.note}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

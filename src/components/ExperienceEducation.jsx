import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Sparkles, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { achievementsData, educationData } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';

export default function ExperienceEducation() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#BF5B2E]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#BF5B2E]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#BF5B2E]" />;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-[#E5E2DC]">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Monospace Numbered Index Label */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#BF5B2E] font-bold uppercase tracking-widest">
              // 04. records
            </span>
            <div className="h-[1px] flex-1 bg-[#E5E2DC]" />
            <span className="font-mono text-xs text-[#8A8A8A]">
              TRACK RECORD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1A1A1A] tracking-tight">
            04 — Milestones & Academics
          </h2>

          {/* 1. Measurable Milestones Cards */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] font-semibold block">
              // Technical Accomplishments
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievementsData.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs hover:border-[#BF5B2E] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg border border-[#E5E2DC] bg-[#FAFAF8] flex items-center justify-center">
                        {getIcon(item.icon)}
                      </div>
                      <span className="font-mono text-[10px] text-[#BF5B2E] font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-sm font-heading font-bold text-[#1A1A1A] mb-1.5">
                      {item.title}
                    </h3>

                    <p className="text-xs font-body text-[#8A8A8A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E2DC] flex items-baseline justify-between">
                    <span className="font-mono text-[11px] text-[#8A8A8A]">
                      {item.metricLabel}
                    </span>
                    <div className="text-lg font-bold font-mono text-[#BF5B2E]">
                      {item.metric === '50+' ? (
                        <AnimatedCounter target="50" suffix="+" />
                      ) : item.metric === '100%' ? (
                        <AnimatedCounter target="100" suffix="%" />
                      ) : (
                        <span>{item.metric}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Academic Timeline */}
          <div className="space-y-4 pt-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] font-semibold block">
              // Academic Progression
            </span>

            <div className="relative pl-6 border-l border-[#E5E2DC] space-y-6">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative group">
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#FFFFFF] bg-[#BF5B2E] shadow-xs" />

                  <div className="p-5 sm:p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs hover:border-[#BF5B2E] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#BF5B2E] font-semibold">
                        <GraduationCap className="w-4 h-4 text-[#BF5B2E]" />
                        <span>{edu.institution}</span>
                      </div>

                    <span className="flex items-center gap-1.5 text-xs font-mono text-[#8A8A8A]">
                      <Calendar className="w-3.5 h-3.5 text-[#BF5B2E]" />
                      {edu.period}
                    </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-heading font-bold text-[#1A1A1A] mb-2">
                      {edu.degree}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-[#8A8A8A]">
                        <MapPin className="w-3.5 h-3.5 text-[#BF5B2E]" />
                        {edu.location}
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-[#BF5B2E]/10 text-[#BF5B2E] border border-[#BF5B2E]/30">
                        <Award className="w-3.5 h-3.5" />
                        {edu.grade}
                      </span>
                    </div>

                    <p className="text-xs font-body text-[#8A8A8A] leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

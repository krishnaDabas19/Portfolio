import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import TerminalHeading from './TerminalHeading';
import { SchematicDivider } from './SvgLineDraw';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 border-t border-white/[0.08] relative">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <TerminalHeading
            tag="// education"
            title="Academic Background"
            subtitle="Formal coursework, academic records, and foundational milestones."
          />

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-10">
            {educationData.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Node Point with Gradient Glow */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[#12121A] bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)] flex items-center justify-center">
                  {item.status === 'In Progress' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#12121A] hover:border-violet-500/40 transition-all shadow-xl shadow-black/30">
                  {/* Top Row: Institution + Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <GraduationCap className="w-4 h-4 text-violet-400" />
                      <span className="font-semibold">{item.institution}</span>
                    </div>

                    <span className="flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF]">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-base sm:text-xl font-heading font-bold text-[#FFFFFF] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-colors">
                    {item.degree}
                  </h3>

                  {/* Location & Score Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[#9CA3AF]">
                      <MapPin className="w-3.5 h-3.5 text-violet-400" />
                      {item.location}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-violet-500/10 text-cyan-300 border border-violet-500/30">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      {item.grade}
                    </span>
                  </div>

                  {/* Coursework Details */}
                  <p className="text-xs sm:text-sm font-body text-[#9CA3AF] leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <SchematicDivider />
        </motion.div>
      </div>
    </section>
  );
}

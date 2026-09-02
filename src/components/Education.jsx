import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import TerminalHeading from './TerminalHeading';
import { SchematicDivider } from './SvgLineDraw';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 border-t border-[#E5E2DC] relative">
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
          <div className="relative pl-6 sm:pl-8 border-l border-[#E5E2DC] space-y-10">
            {educationData.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Node Point with Cobalt Glow */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[#FFFFFF] bg-blue-600 shadow-xs flex items-center justify-center">
                  {item.status === 'In Progress' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-7 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] hover:border-blue-600 transition-all shadow-xs hover:shadow-md">
                  {/* Top Row: Institution + Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-600">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">{item.institution}</span>
                    </div>

                    <span className="flex items-center gap-1.5 text-xs font-mono text-[#8A8A8A]">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {item.period}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-base sm:text-xl font-heading font-bold text-[#1A1A1A] mb-2 group-hover:text-blue-600 transition-colors">
                    {item.degree}
                  </h3>

                  {/* Location & Score Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[#8A8A8A]">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {item.location}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-blue-600/10 text-blue-700 border border-blue-600/30">
                      <Award className="w-3.5 h-3.5 text-blue-600" />
                      {item.grade}
                    </span>
                  </div>

                  {/* Coursework Details */}
                  <p className="text-xs sm:text-sm font-body text-[#8A8A8A] leading-relaxed">
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

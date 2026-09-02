import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Users } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import TerminalHeading from './TerminalHeading';

export default function Skills() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Code className="w-4 h-4 text-[#C2542D]" />;
      case 'Web Technologies':
        return <Globe className="w-4 h-4 text-[#C2542D]" />;
      case 'Databases & Tools':
        return <Database className="w-4 h-4 text-[#C2542D]" />;
      default:
        return <Users className="w-4 h-4 text-[#C2542D]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-[#E5E2DC] relative">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Monospace Tag & Section Title */}
          <TerminalHeading
            tag="// skills"
            title="Technical Arsenal"
            subtitle="Categorized skill badges with proficiency context. Hover over any tag to view details."
          />

          {/* 4 Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((categoryGroup, groupIdx) => (
              <div
                key={groupIdx}
                className="p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#C2542D] transition-colors shadow-xs hover:shadow-md"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#E5E2DC]">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(categoryGroup.category)}
                    <h3 className="text-sm font-heading font-semibold text-[#1A1A1A]">
                      {categoryGroup.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-[#C2542D] font-medium">
                    {categoryGroup.tag}
                  </span>
                </div>

                {/* Skill Pill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {categoryGroup.items.map((skill, skillIdx) => {
                    const tooltipKey = `${groupIdx}-${skillIdx}`;
                    const isTooltipOpen = activeTooltip === tooltipKey;

                    return (
                      <div
                        key={skillIdx}
                        className="relative"
                        onMouseEnter={() => setActiveTooltip(tooltipKey)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        onFocus={() => setActiveTooltip(tooltipKey)}
                        onBlur={() => setActiveTooltip(null)}
                      >
                        <button
                          type="button"
                          className="px-3.5 py-1.5 rounded-full font-mono text-xs border border-[#E5E2DC] bg-[#FAFAF8] text-[#1A1A1A] hover:border-[#C2542D] hover:text-[#C2542D] hover:bg-[#C2542D]/5 focus:border-[#C2542D] focus:outline-none transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                        >
                          <span>{skill.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C2542D]/60" />
                        </button>

                        {/* Subtle Hover Tooltip */}
                        {isTooltipOpen && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 w-52 p-2.5 rounded-lg bg-[#FFFFFF] border border-[#C2542D]/40 text-[#1A1A1A] shadow-lg pointer-events-none animate-in fade-in-0 zoom-in-95 duration-150">
                            <div className="font-mono text-[11px] text-[#C2542D] font-bold mb-0.5">
                              {skill.level}
                            </div>
                            <div className="text-[11px] font-body text-[#3F3F3F] leading-tight">
                              {skill.tooltip}
                            </div>
                            {/* Arrow Pointer */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#FFFFFF]" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

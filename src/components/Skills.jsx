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
        return <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Web Technologies':
        return <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Databases & Tools':
        return <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      default:
        return <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-[#E5E2DC] dark:border-[#2A2A2A] relative">
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
                className="p-6 rounded-2xl border border-[#E5E2DC] dark:border-[#2A2A2A] bg-[#FFFFFF] dark:bg-[#1A1A1A] hover:border-blue-600 dark:hover:border-blue-400 transition-colors shadow-xs"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#E5E2DC] dark:border-[#2A2A2A]">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(categoryGroup.category)}
                    <h3 className="text-sm font-heading font-semibold text-[#1A1A1A] dark:text-[#FFFFFF]">
                      {categoryGroup.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-medium">
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
                          className="px-3.5 py-1.5 rounded-full font-mono text-xs border border-[#E5E2DC] dark:border-[#2A2A2A] bg-[#FAFAF8] dark:bg-[#222222] text-[#1A1A1A] dark:text-[#FFFFFF] hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-600/5 focus:border-blue-600 focus:outline-none transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                        >
                          <span>{skill.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600/60 dark:bg-blue-400/60" />
                        </button>

                        {/* Subtle Hover Tooltip */}
                        {isTooltipOpen && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 w-52 p-2.5 rounded-lg bg-[#FFFFFF] dark:bg-[#222222] border border-blue-600/40 dark:border-blue-400/40 text-[#1A1A1A] dark:text-[#FFFFFF] shadow-lg pointer-events-none animate-in fade-in-0 zoom-in-95 duration-150">
                            <div className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-bold mb-0.5">
                              {skill.level}
                            </div>
                            <div className="text-[11px] font-body text-[#3F3F3F] dark:text-[#D1D5DB] leading-tight">
                              {skill.tooltip}
                            </div>
                            {/* Arrow Pointer */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#FFFFFF] dark:border-t-[#222222]" />
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

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';
import TerminalHeading from './TerminalHeading';

export default function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="achievements" className="py-20 sm:py-24 border-t border-[#E5E2DC] relative">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <TerminalHeading
            tag="// achievements"
            title="Milestones & Activities"
            subtitle="Measurable progress in algorithmic problem solving and technical community engagement."
          />

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.map((item, index) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl border border-[#E5E2DC] bg-[#FAFAF8] flex items-center justify-center group-hover:border-blue-600/40 transition-all">
                      {getIcon(item.icon)}
                    </div>

                    <span className="font-mono text-[11px] text-blue-600 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-semibold text-[#1A1A1A] mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-body text-[#8A8A8A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Counter / Metric Badge */}
                <div className="mt-6 pt-4 border-t border-[#E5E2DC] flex items-baseline justify-between">
                  <span className="font-mono text-xs text-[#8A8A8A]">
                    {item.metricLabel}
                  </span>
                  <div className="text-xl font-bold font-mono text-blue-600">
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
        </motion.div>
      </div>
    </section>
  );
}

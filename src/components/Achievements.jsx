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
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 sm:py-24 border-t border-white/[0.08] relative">
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
                className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#12121A] hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl border border-white/[0.08] bg-[#161B22] flex items-center justify-center group-hover:border-amber-400/40 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all">
                      {getIcon(item.icon)}
                    </div>

                    <span className="font-mono text-[11px] text-cyan-400/80 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-semibold text-[#FFFFFF] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-body text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Counter / Metric Badge with Gradient */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-baseline justify-between">
                  <span className="font-mono text-xs text-[#9CA3AF]">
                    {item.metricLabel}
                  </span>
                  <div className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
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

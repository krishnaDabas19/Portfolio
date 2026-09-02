import React from 'react';
import { motion } from 'framer-motion';

export default function TerminalHeading({ title, subtitle, tag, className = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      {tag && (
        <div className="flex items-center gap-2 mb-1.5">
          <span className="section-tag">{tag}</span>
          <span className="h-[1px] w-8 bg-gradient-to-r from-blue-600/50 to-transparent" />
        </div>
      )}

      <div className="relative inline-block overflow-hidden">
        <motion.h2
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl font-heading font-bold tracking-tight text-[#1A1A1A] dark:text-[#FFFFFF]"
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <p className="text-xs sm:text-sm font-mono text-[#8A8A8A] dark:text-[#9CA3AF] mt-1.5 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

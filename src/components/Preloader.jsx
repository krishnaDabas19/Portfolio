import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0A0A0F] text-[#FFFFFF]"
        >
          <div className="flex flex-col items-center gap-4">
            {/* KD Monogram Mark with Gradient Glow */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative p-[2px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_25px_rgba(139,92,246,0.5)]"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#12121A]">
                <span className="font-heading text-xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  KD
                </span>
              </div>
            </motion.div>

            {/* Subtle Progress Line */}
            <div className="w-36 h-[2px] bg-white/[0.08] overflow-hidden rounded-full mt-2">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  ease: 'easeInOut',
                }}
                className="w-full h-full bg-gradient-to-r from-violet-500 to-cyan-400"
              />
            </div>

            <p className="font-mono text-xs text-[#9CA3AF] tracking-wider">
              // initializing 3d portfolio...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

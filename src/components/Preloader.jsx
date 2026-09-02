import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0A0A0F] text-[#FFFFFF]"
        >
          <div className="flex flex-col items-center gap-4">
            {/* KD Monogram Mark with Teal Border */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="w-14 h-14 rounded-full border border-teal-500/40 bg-[#12121A] flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.35)]"
            >
              <span className="font-heading text-lg font-bold tracking-tight text-teal-400">
                KD
              </span>
            </motion.div>

            {/* Subtle Progress Line */}
            <div className="w-32 h-[2px] bg-white/[0.08] overflow-hidden rounded-full mt-2">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
                className="w-full h-full bg-teal-400"
              />
            </div>

            <p className="font-mono text-xs text-[#9CA3AF] tracking-wider">
              // initializing...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

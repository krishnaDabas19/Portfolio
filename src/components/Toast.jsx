import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-xl bg-[var(--bg-card)] border-[var(--border)] text-[var(--text-primary)]"
        >
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/20 text-teal-400">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="p-1 ml-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded transition-colors"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

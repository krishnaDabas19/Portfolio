import React from 'react';

export function SchematicDivider({ className = '' }) {
  return (
    <div className={`w-full flex items-center gap-3 my-8 opacity-60 ${className}`}>
      <svg
        className="w-full h-4 overflow-visible"
        viewBox="0 0 600 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated Drawing Path */}
        <path
          d="M 0 8 L 220 8 L 230 2 L 370 2 L 380 8 L 600 8"
          stroke="url(#schematicGrad)"
          strokeWidth="1.2"
          className="animate-draw-line"
        />
        <circle cx="230" cy="2" r="2" fill="#14B8A6" />
        <circle cx="370" cy="2" r="2" fill="#14B8A6" />
        <text
          x="300"
          y="6"
          textAnchor="middle"
          fill="#9CA3AF"
          fontSize="7"
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="0.15em"
        >
          // SEG.0x2A
        </text>

        <defs>
          <linearGradient id="schematicGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function HeroSvgBrackets() {
  return (
    <svg
      className="absolute -top-4 -left-4 w-12 h-12 pointer-events-none opacity-50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 2 25 L 2 2 L 25 2"
        stroke="#14B8A6"
        strokeWidth="1.5"
        className="animate-draw-line"
      />
      <circle cx="2" cy="2" r="2" fill="#14B8A6" />
    </svg>
  );
}

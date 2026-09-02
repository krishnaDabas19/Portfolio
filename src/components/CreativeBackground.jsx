import React, { useEffect, useState, useRef } from 'react';

export default function CreativeBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [smoothMouse, setSmoothMouse] = useState({ x: -500, y: -500 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth lerp for cursor spotlight glow
    const follow = () => {
      setSmoothMouse((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }));
      rafRef.current = requestAnimationFrame(follow);
    };
    rafRef.current = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#FAFAF8]"
      aria-hidden="true"
    >
      {/* 1. Subtle Editorial Paper Grain Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] contrast-150 brightness-95">
        <filter id="editorialNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#editorialNoise)" />
      </svg>

      {/* 2. Ambient Floating Radiant Color Auras */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[#BF5B2E]/7 to-transparent blur-3xl animate-pulse duration-10000" />
      <div className="absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-bl from-[#7A8B5C]/6 via-[#BF5B2E]/4 to-transparent blur-3xl animate-pulse duration-7000 delay-1000" />
      <div className="absolute -bottom-[10%] left-[20%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-tr from-[#BF5B2E]/6 to-transparent blur-3xl animate-pulse duration-8000 delay-2000" />

      {/* 3. Interactive Torchlight Grid Illuminator */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: `${smoothMouse.x}px`,
          top: `${smoothMouse.y}px`,
          background:
            'radial-gradient(circle, rgba(191, 91, 46, 0.07) 0%, rgba(191, 91, 46, 0.02) 45%, transparent 70%)',
        }}
      />

      {/* 4. Precision Technical Drafting Matrix / Coordinate Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-65"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 30px Fine Dot Pattern */}
          <pattern
            id="draftingDots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="16" cy="16" r="0.8" fill="#D6D1C7" />
          </pattern>

          {/* 160px Architectural Grid Lines with Crosshair Intersections */}
          <pattern
            id="architecturalGrid"
            x="0"
            y="0"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <rect width="160" height="160" fill="url(#draftingDots)" />
            {/* Fine border line */}
            <path
              d="M 160 0 L 0 0 0 160"
              fill="none"
              stroke="#E8E4DB"
              strokeWidth="0.8"
            />
            {/* Corner Crosshairs */}
            <path
              d="M 0 6 L 0 -6 M -6 0 L 6 0"
              fill="none"
              stroke="#BF5B2E"
              strokeWidth="1"
              opacity="0.35"
            />
            <path
              d="M 160 154 L 160 166 M 154 160 L 166 160"
              fill="none"
              stroke="#BF5B2E"
              strokeWidth="1"
              opacity="0.35"
            />
            {/* Micro Coordinate Marker */}
            <circle cx="80" cy="80" r="1.2" fill="#BF5B2E" opacity="0.4" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#architecturalGrid)" />
      </svg>

      {/* 5. Decorative Watermark Technical Schematics (Pencil / Blueprint Aesthetic) */}
      <div className="absolute top-[12%] right-[5%] w-72 h-72 opacity-25">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="#BF5B2E"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            stroke="#D6D1C7"
            strokeWidth="0.8"
          />
          <line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            stroke="#D6D1C7"
            strokeWidth="0.8"
            strokeDasharray="6 3"
          />
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="#D6D1C7"
            strokeWidth="0.8"
            strokeDasharray="6 3"
          />
          <text
            x="105"
            y="35"
            fill="#BF5B2E"
            fontSize="6"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.1em"
          >
            SYS.CALIBRATION // 0x2A
          </text>
        </svg>
      </div>

      <div className="absolute top-[55%] -left-10 w-80 h-80 opacity-20">
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
          {/* Isometric Cube Schematic */}
          <path
            d="M 120 40 L 190 80 L 190 160 L 120 200 L 50 160 L 50 80 Z"
            stroke="#BF5B2E"
            strokeWidth="0.8"
            strokeDasharray="5 3"
          />
          <path
            d="M 120 40 L 120 120 L 190 160 M 120 120 L 50 160"
            stroke="#D6D1C7"
            strokeWidth="0.8"
          />
          <text
            x="60"
            y="215"
            fill="#8A8A8A"
            fontSize="6.5"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.1em"
          >
            VECTOR.MATRIX [3D_PROJ]
          </text>
        </svg>
      </div>

      {/* 6. Subtle Floating Engineering Particles */}
      <div className="absolute top-[25%] left-[15%] w-2 h-2 rounded-full bg-[#BF5B2E]/30 animate-pulse duration-3000" />
      <div className="absolute top-[48%] right-[22%] w-1.5 h-1.5 rounded-full bg-[#BF5B2E]/40 animate-pulse duration-4000 delay-1000" />
      <div className="absolute top-[75%] left-[28%] w-2 h-2 rounded-full bg-[#BF5B2E]/25 animate-pulse duration-5000 delay-2000" />
      <div className="absolute top-[88%] right-[12%] w-1.5 h-1.5 rounded-full bg-[#BF5B2E]/35 animate-pulse duration-3500 delay-500" />
    </div>
  );
}

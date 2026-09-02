import React, { useEffect, useState } from 'react';

export default function IsometricBlueprintGrid() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none opacity-50"
      aria-hidden="true"
    >
      {/* 3D Isometric Perspective Blueprint Container */}
      <div
        className="absolute -right-20 -top-10 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] transition-transform duration-700 ease-out origin-center"
        style={{
          transform: `perspective(1200px) rotateX(${56 + mouseOffset.y * 0.25}deg) rotateZ(${-38 + mouseOffset.x * 0.3}deg) translateY(${mouseOffset.y * 1.5}px)`,
        }}
      >
        {/* SVG Isometric Blueprint Matrix */}
        <svg
          className="w-full h-full"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="blueprintGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#E5E2DC"
                strokeWidth="1"
              />
              <circle
                cx="0"
                cy="0"
                r="1"
                fill="#C2542D"
                fillOpacity="0.3"
              />
            </pattern>

            <pattern
              id="subGrid"
              width="150"
              height="150"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="150"
                height="150"
                fill="url(#blueprintGrid)"
              />
              <path
                d="M 150 0 L 0 0 0 150"
                fill="none"
                stroke="#C2542D"
                strokeOpacity="0.2"
                strokeWidth="1.2"
              />
            </pattern>

            <linearGradient id="gridFade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <mask id="gridMask">
              <rect width="800" height="800" fill="url(#gridFade)" />
            </mask>
          </defs>

          {/* Masked Grid Plane */}
          <rect
            width="800"
            height="800"
            fill="url(#subGrid)"
            mask="url(#gridMask)"
          />

          {/* Precision Architectural Axis Vectors */}
          <g opacity="0.6">
            <line
              x1="50"
              y1="400"
              x2="750"
              y2="400"
              stroke="#C2542D"
              strokeOpacity="0.3"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />
            <line
              x1="400"
              y1="50"
              x2="400"
              y2="750"
              stroke="#C2542D"
              strokeOpacity="0.3"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />
          </g>

          {/* Schematic Blueprint Coordinate Labels */}
          <text
            x="410"
            y="70"
            fill="#C2542D"
            fontSize="9"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.1em"
            opacity="0.8"
          >
            SYS.ORIGIN // [0x00, 0xFF]
          </text>

          <text
            x="600"
            y="390"
            fill="#C2542D"
            fontSize="9"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.1em"
            opacity="0.8"
          >
            VEC.X // MATRIX_ALIGN
          </text>

          <text
            x="60"
            y="420"
            fill="#8A8A8A"
            fontSize="8"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.05em"
            opacity="0.7"
          >
            LATENCY: 0.2ms // THREAD: MAIN
          </text>
        </svg>

        {/* Pulsing Connection Nodes */}
        <div className="absolute top-[200px] left-[350px] pulse-node-1 w-2.5 h-2.5 rounded-full bg-[#C2542D]" />
        <div className="absolute top-[350px] left-[500px] pulse-node-2 w-3 h-3 rounded-full bg-[#A8421F]" />
        <div className="absolute top-[500px] left-[300px] pulse-node-3 w-2 h-2 rounded-full bg-[#C2542D]" />
        <div className="absolute top-[250px] left-[600px] pulse-node-4 w-2.5 h-2.5 rounded-full bg-[#A8421F]" />
        <div className="absolute top-[450px] left-[450px] pulse-node-5 w-2 h-2 rounded-full bg-[#C2542D]" />

        {/* Connecting node lines */}
        <div className="absolute top-[204px] left-[354px] w-[150px] h-[150px] border-t border-l border-[#C2542D]/20 pointer-events-none" />
        <div className="absolute top-[354px] left-[304px] w-[200px] h-[150px] border-b border-r border-[#C2542D]/20 pointer-events-none" />
      </div>
    </div>
  );
}

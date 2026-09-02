import React from 'react';

export default function GradientMesh({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Mesh Blob 1: Electric Violet */}
      <div className="absolute top-1/4 left-1/4 w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full bg-violet-600/15 blur-[120px] mix-blend-screen animate-pulse" />

      {/* Mesh Blob 2: Cyan */}
      <div
        className="absolute top-1/3 right-1/4 w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] rounded-full bg-cyan-500/15 blur-[120px] mix-blend-screen animate-pulse"
        style={{ animationDelay: '2s', animationDuration: '6s' }}
      />

      {/* Mesh Blob 3: Warm Coral Accent */}
      <div
        className="absolute bottom-1/4 left-1/3 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] rounded-full bg-rose-500/10 blur-[130px] mix-blend-screen animate-pulse"
        style={{ animationDelay: '4s', animationDuration: '7s' }}
      />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}

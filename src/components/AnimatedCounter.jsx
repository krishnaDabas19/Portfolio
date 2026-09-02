import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ target, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Extract pure number from string if needed (e.g., "50" from "50+")
  const numericTarget = typeof target === 'number' ? target : parseInt(target.replace(/\D/g, ''), 10) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * numericTarget));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericTarget, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="tabular-nums font-mono">
      {count}
      {suffix}
    </span>
  );
}

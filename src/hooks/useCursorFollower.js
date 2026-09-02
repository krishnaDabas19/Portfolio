import { useEffect, useState, useRef } from 'react';

export const useCursorFollower = () => {
  const cursorRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
    };

    // Only enable cursor follower on desktop
    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // Update cursor position
  useEffect(() => {
    if (cursorRef.current && isMouseOver) {
      cursorRef.current.style.left = mousePos.x + 'px';
      cursorRef.current.style.top = mousePos.y + 'px';
    }
  }, [mousePos, isMouseOver]);

  return { cursorRef, isMouseOver };
};

export default useCursorFollower;

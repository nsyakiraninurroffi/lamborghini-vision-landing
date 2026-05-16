import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Trailing circle uses spring physics
  const springX = useSpring(0, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(0, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovering(true);
      }
    };
    const handleHoverEnd = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [springX, springY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot - tracks immediately */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePos.x - (isHovering ? 6 : 4),
          top: mousePos.y - (isHovering ? 6 : 4),
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
          backgroundColor: '#B76E79',
          borderRadius: '50%',
          transition: 'width 0.2s, height 0.2s',
        }}
      />

      {/* Outer trailing ring - spring physics */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          borderRadius: '50%',
          border: `1.5px solid rgba(183, 110, 121, ${isHovering ? 0.6 : 0.35})`,
          backgroundColor: `rgba(183, 110, 121, ${isHovering ? 0.08 : 0.03})`,
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s',
        }}
      />
    </>
  );
}

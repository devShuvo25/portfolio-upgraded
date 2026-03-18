"use client";

import React, { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticProps {
  children: ReactNode;
  strength?: number; // 0.1 (subtle) to 1.0 (aggressive)
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate the center point of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate the distance from the mouse to the center, multiplied by strength
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      // Spring configuration for that "snappy" yet fluid return
      transition={{ 
        type: "spring", 
        stiffness: 180, 
        damping: 15, 
        mass: 0.1,
        restDelta: 0.001 
      }}
      className="inline-block"
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
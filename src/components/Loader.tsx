"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth counter increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15); // Adjust speed to match your 2.5s timer

    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-primary)]"
    >
      <div className="relative flex flex-col items-center">
        
        {/* Progress Counter */}
        
        {/* Animated Rings */}
        <div className="relative w-24 h-24 mb-10">
          <motion.span
            className="absolute inset-0 border-[1px] border-[var(--accent-color)] rounded-full"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="absolute inset-0 border-t-2 border-[var(--accent-color)] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-4 bg-[var(--accent-color)] rounded-full opacity-10 blur-xl animate-pulse" />
        </div>

        {/* Brand Name Animation */}
        <div className="overflow-hidden h-10 flex flex-col items-center">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-2xl font-black tracking-[0.6em] uppercase text-[var(--text-primary)]"
          >
            SHUVO<span className="text-[var(--accent-color)]">.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[8px] font-bold tracking-[0.8em] uppercase mt-2 text-[var(--text-tertiary)]"
          >
            Initializing System
          </motion.p>
        </div>
        
        {/* Loading Bar Container */}
        <div className="w-40 h-[1px] bg-white/5 mt-8 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-[var(--accent-color)]"
          />
        </div>
      </div>

      {/* Background aesthetic noise/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-color)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
    </motion.div>
  );
};

export default Loader;
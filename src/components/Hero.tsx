"use client";

import React from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import Image from 'next/image';

// Replace with your actual asset path
import hero from '../assets/Gemini_Generated_Image_e758fre758fre758-removebg-preview.png';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
  // Use Motion Values and Springs for butter-smooth parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate offset from center (-0.5 to 0.5)
    mouseX.set((clientX - innerWidth / 2) / 25);
    mouseY.set((clientY - innerHeight / 2) / 25);
  };

  const containerVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0 bg-[var(--bg-primary)]"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(var(--text-primary) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-last lg:order-first"
        >
         <motion.span 
  variants={itemVariants} 
  className="inline-flex text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-8 py-2 px-6 rounded-full border border-[var(--accent-color)]/30 bg-[var(--glass-bg)] text-[var(--accent-color)]"
>
  {"Full Stack Web Developer".split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.1,
        // Adjust the multiplier (0.05) to speed up or slow down the writing
        delay: index * 0.05, 
        ease: "linear"
      }}
      // preserve spaces using pre-wrap or checking for space character
      style={{ display: "inline-block", whiteSpace: "pre" }}
    >
      {char}
    </motion.span>
  ))}
</motion.span>
          
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-[var(--text-primary)]">
              SHUVO <br /> 
              <span className="text-outline-thin">MALLIK</span>
              <span className="text-[var(--accent-color)]">.</span>
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base font-bold mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed uppercase tracking-[0.15em] text-[var(--text-tertiary)]"
          >
            Developing high-performance, responsive <br className="hidden md:block" /> 
            MERN stack applications for the global market.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10"
          >
            <Magnetic strength={0.2}>
              <motion.a 
                href="#projects" 
                className="group px-10 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-black text-xs tracking-[0.2em] transition-all flex items-center gap-3 hover:bg-[var(--accent-color)] hover:text-black"
              >
                PROJECTS
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Magnetic>
            
            <div className="flex items-center gap-8">
              <Magnetic strength={0.3}>
                <a 
                  href="https://drive.google.com/file/d/1MAjRBuMfDe5udRvMf0ZuLhBE1ymdnssf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black tracking-[0.3em] uppercase transition-all flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent-color)]"
                >
                  RESUME <Download size={14} />
                </a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <a 
                  href="#contact" 
                  className="text-[10px] font-black tracking-[0.3em] uppercase transition-all flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent-color)]"
                >
                  CONTACT <Mail size={14} />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: dx, y: dy }}
          className="relative w-full flex justify-center lg:justify-end"
        >
          <div 
            className="relative z-10 w-full max-w-[320px] md:max-w-[420px] lg:max-w-[500px] aspect-[4/5] pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            }}
          >
            {/* Background Decorative Circle */}
            
            
            <Image 
              src={hero}
              alt="Shuvo Mallik" 
              fill
              className="object-contain filter hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[var(--accent-color)] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
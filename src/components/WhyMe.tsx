"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, ShieldCheck, Zap } from 'lucide-react';

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: <Code size={32} />,
    title: 'END-TO-END DEVELOPMENT',
    description: 'BUILDING COMPLETE, SCALABLE WEB APPLICATIONS USING MERN & NEXT.JS FROM IDEA TO DEPLOYMENT.',
  },
  {
    icon: <Cloud size={32} />,
    title: 'SEAMLESS COMMUNICATION',
    description: 'CLEAR, RELIABLE COLLABORATION WITH CLIENTS WORLDWIDE USING MODERN REMOTE WORKFLOWS.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'QUALITY CODE STANDARDS',
    description: 'WRITING CLEAN, STRUCTURED, AND MAINTAINABLE CODE THAT ENSURES LONG-TERM PROJECT SUCCESS.',
  },
  {
    icon: <Zap size={32} />,
    title: 'FAST & RELIABLE DELIVERY',
    description: 'DELIVERING HIGH-PERFORMANCE FEATURES QUICKLY WHILE MAINTAINING CODE QUALITY AND UX.',
  },
];

const WhyMe: React.FC = () => {
  return (
    <section 
      id="why-me" 
      className="py-20 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--glass-border)]"
    >
      {/* Section Header */}
      <div className="mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 uppercase tracking-tighter text-[var(--text-primary)]">
            STRATEGY<span className="text-[var(--accent-color)]">.</span>
          </h2>
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[var(--text-tertiary)]">
            WHY I AM THE STRATEGIC FIT FOR YOUR GLOBAL TEAM.
          </p>
        </motion.div>
      </div>

      {/* Strategy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: idx * 0.1,
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            whileHover={{ y: -10 }}
            className="relative p-8 md:p-10 flex flex-col h-full group"
            style={{
              backgroundColor: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '2rem',
            }}
          >
            {/* Icon container with background glow on hover */}
            <div className="relative mb-10 w-fit">
              <div className="absolute inset-0 bg-[var(--accent-color)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              <div className="relative z-10 text-[var(--accent-color)] group-hover:scale-110 transition-transform duration-500">
                {reason.icon}
              </div>
            </div>

            <h3 className="text-xl font-black mb-4 tracking-tighter uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
              {reason.title}
            </h3>
            
            <p className="font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] leading-relaxed text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors">
              {reason.description}
            </p>

            {/* Subtle decorative number */}
            <span className="absolute bottom-6 right-8 text-4xl font-black opacity-[0.03] select-none group-hover:opacity-[0.07] transition-opacity">
              0{idx + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyMe;
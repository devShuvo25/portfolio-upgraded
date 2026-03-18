"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote, ExternalLink } from 'lucide-react';

interface Achievement {
  type: 'CERTIFICATION' | 'RECOMMENDATION';
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const achievements: Achievement[] = [
  {
    type: 'CERTIFICATION',
    title: 'Complete Web Development',
    issuer: 'Programming Hero',
    date: '2025',
    description: 'INTENSIVE SPECIALIZATION IN MERN STACK ARCHITECTURE AND DEPLOYMENT.',
    icon: <Award className="w-8 h-8" />,
    link: 'https://drive.google.com/file/d/1VcWJVcs4lKdbjKlVv7wqGS16E8wsjuYO/view?usp=sharing'
  },
  {
    type: 'RECOMMENDATION',
    title: 'LinkedIn Endorsement',
    issuer: 'Senior Software Engineer',
    date: 'MARCH 2024',
    description: '"AN EXCEPTIONAL PROBLEM SOLVER WHO CONSISTENTLY DELIVERS CLEAN, SCALABLE CODE UNDER TIGHT DEADLINES."',
    icon: <Quote className="w-8 h-8" />,
    link: 'https://www.linkedin.com/in/shuvo-mallik/'
  }
];

const Achievements: React.FC = () => {
  return (
    <section 
      id="achievements" 
      className="py-20 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--glass-border)]"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter text-[var(--text-primary)]">
          RECOGNITION<span className="text-[var(--accent-color)]">.</span>
        </h2>
        <div className="h-1 w-24 bg-[var(--accent-color)]" />
      </motion.div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative p-10 md:p-14 flex flex-col justify-between overflow-hidden group min-h-[400px]"
            style={{
              backgroundColor: 'var(--glass-bg)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '2.5rem'
            }}
          >
            {/* Massive Watermark Icon */}
            <div className="absolute -right-8 -top-8 text-[var(--accent-color)] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 group-hover:rotate-12 transform scale-[3]">
               {item.icon}
            </div>

            <div>
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 rounded-2xl bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 text-[var(--accent-color)]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--accent-color)]">
                    {item.type}
                  </h4>
                  <p className="text-[10px] font-bold uppercase opacity-40 tracking-[0.2em] text-[var(--text-tertiary)]">
                    {item.date}
                  </p>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter text-[var(--text-primary)]">
                {item.title}
              </h3>
              
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] leading-[1.8] text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors">
                {item.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 mt-10 border-t border-white/5 gap-4">
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--text-primary)]">
                {item.issuer}
              </span>
              
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-all"
              >
                <span className="relative">
                  {item.type === 'CERTIFICATION' ? 'VERIFY CREDENTIALS' : 'VIEW ENDORSEMENT'}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[var(--accent-color)] group-hover:w-full transition-all duration-500" />
                </span>

                <div className="relative overflow-hidden w-4 h-4 translate-y-[-1px]">
                  <ExternalLink 
                    size={16} 
                    className="absolute transition-all duration-500 transform group-hover:translate-x-4 group-hover:-translate-y-4" 
                  />
                  <ExternalLink 
                    size={16} 
                    className="absolute -translate-x-4 translate-y-4 transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0 text-[var(--accent-color)]" 
                  />
                </div>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
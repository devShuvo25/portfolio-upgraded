"use client";

import React from 'react';
import { Globe, Lightbulb, Zap, Rocket, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const traits = [
    {
      icon: <Globe size={24} />,
      title: 'FULL STACK EXPERTISE',
      desc: 'Building complete web solutions from frontend to backend'
    },
    {
      icon: <Zap size={24} />,
      title: 'MODERN TECH STACK',
      desc: 'Working with React, Node.js, MongoDB and latest tools'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'LOGIC & PROBLEM SOLVING',
      desc: 'Designing efficient solutions for complex development challenges'
    },
    {
      icon: <Rocket size={24} />,
      title: 'SCALABLE DEVELOPMENT',
      desc: 'Creating fast, optimized, and production-ready applications'
    },
  ];

  return (
    <section id="about" className="section-padding py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-start px-6">
        
        {/* Left Content Side */}
        <div>
          <h2 className="text-xl md:text-2xl lg:text-5xl font-black mb-8 uppercase tracking-tighter text-[var(--text-primary)]">
            ABOUT<span className="text-[var(--accent-color)]">/</span>ME<span className="text-[var(--accent-color)]">.</span>
          </h2>
          
          <div className="space-y-6 md:space-y-10 text-base md:text-md leading-relaxed font-medium uppercase tracking-widest text-[var(--text-tertiary)]">
            <p>
              I am a passionate Full Stack Web Developer focused on building modern, fast, and scalable web applications. I enjoy turning ideas into real-world digital solutions using technologies like React, Node.js, and MongoDB. 
            </p>
            <p>
              I am constantly learning and improving my skills to stay updated with the latest trends in web development. My goal is to create high-quality, user-friendly applications that deliver real value.
            </p>
            <div className="pl-6 md:pl-8 py-3 font-black border-l-4 border-[var(--accent-color)] bg-[var(--glass-bg)] text-[var(--text-primary)] rounded-r-2xl">
              READY TO BUILD SCALABLE WEB SOLUTIONS WITH MODERN TECHNOLOGIES.
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-[var(--border-color)]">
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 flex items-center gap-3 text-[var(--accent-color)]">
              <GraduationCap size={14} /> EDUCATION
            </h4>
            <div className="space-y-3">
              <p className="font-black text-sm md:text-md tracking-tighter uppercase text-[var(--text-primary)]">
                Bachelor of Urban and Regional Planning
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)]">
                  KUET, Khulna, Bangladesh
                </p>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-[var(--border-color)]" />
                <p className="text-[10px] font-black tracking-widest uppercase text-[var(--accent-color)] opacity-60">
                  2024 - PRESENT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {traits.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 md:p-10 flex flex-col items-start text-left group transition-all duration-500 rounded-[2.5rem] 
                         bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)]
                         hover:-translate-y-3 hover:scale-[1.02] relative z-10"
            >
              <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-2xl bg-[var(--glass-bg)] group-hover:bg-[var(--accent-color)] text-[var(--accent-color)] group-hover:text-black transition-colors duration-500 border border-[var(--glass-border)]">
                {item.icon}
              </div>
              <h3 className="font-black text-md mb-3 md:mb-4 tracking-tighter uppercase group-hover:text-[var(--accent-color)] transition-colors text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] leading-loose text-[var(--text-tertiary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../lib/utils';

import Magnetic from './Magnetic';
import { projects } from '@/constant/projects.data';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 md:py-44 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--glass-border)]">
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[var(--accent-color)]" />
            <span className="text-[10px] font-black tracking-[0.5em] text-[var(--accent-color)] uppercase">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-[var(--text-primary)]">
            WORK<span className="text-[var(--accent-color)]">.</span>
          </h2>
          <p className="max-w-md text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] leading-relaxed text-[var(--text-tertiary)]">
            SELECTED PROJECTS ARCHITECTED FOR PERFORMANCE AND SCALE.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden p-5 transition-all duration-500 bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md"
            >
              {/* Image Container - Simplified (No Overlay) */}
              <Link href={`/project/${project.id}`} className="cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] mb-6 border border-white/5">
                  <Image
                    src={project.images[0]} 
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.slice(0, 3).map((t) => (
                    <span 
                      key={t} 
                      className="text-[8px] font-black tracking-widest uppercase px-3 py-1 rounded-sm bg-white/5 border border-white/5 text-[var(--text-tertiary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] leading-relaxed mb-8 line-clamp-2 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5">
                   <Link href={`/project/${project.id}`}>
                    <button className="w-full flex items-center justify-between text-[10px] font-black tracking-[0.3em] uppercase text-white/30 group-hover:text-[var(--accent-color)] transition-all">
                      <span>Explore Architecture</span>
                      <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                    </button>
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* See More Button */}
      {projects.length > 3 && (
        <div className="mt-24 flex justify-center">
          <Magnetic strength={0.2}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex flex-col items-center gap-6 group"
            >
              <div className="px-12 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-[var(--accent-color)] group-hover:text-black group-hover:border-[var(--accent-color)] transition-all duration-500 font-black text-[10px] tracking-[0.4em] uppercase">
                {showAll ? 'Collapse Archive' : 'View Full Archive'}
              </div>
              <motion.div
                animate={{ y: showAll ? 0 : [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={cn("text-[var(--accent-color)]", showAll && "rotate-180")}
              >
                <ChevronDown size={32} strokeWidth={1.5} />
              </motion.div>
            </button>
          </Magnetic>
        </div>
      )}
    </section>
  );
};

export default Projects;
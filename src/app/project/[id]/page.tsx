"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Github, Cpu, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Magnetic from '@/components/Magnetic';
import { projects } from '@/constant/projects.data';
import { useParams } from 'next/navigation';
import { Iproject } from '@/interface/project';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === Number(id)) as Iproject || {};

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Information */}
          <aside className="lg:sticky lg:top-32 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1] mb-8">
                {project.title}<span className="text-[var(--accent-color)]">.</span>
              </h1>
              <p className="text-[var(--text-tertiary)] font-bold uppercase tracking-[0.15em] leading-relaxed max-w-md">
                {project.description}
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-10">
              <div>
                <p className="text-[8px] font-black tracking-widest text-[var(--accent-color)] uppercase mb-2">Role</p>
                <p className="text-xs font-bold uppercase tracking-wider">{project.role}</p>
              </div>
              <div>
                <p className="text-[8px] font-black tracking-widest text-[var(--accent-color)] uppercase mb-2">Year</p>
                <p className="text-xs font-bold uppercase tracking-wider">{project.year}</p>
              </div>
            </div>

            {/* Tech Stack - Architectural Tags */}
            <div>
              <p className="text-[8px] font-black tracking-widest text-[var(--text-tertiary)] uppercase mb-6 flex items-center gap-2">
                <Cpu size={12} /> Engine Room
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-sm bg-white/[0.03] border border-white/5 text-[9px] font-black tracking-widest uppercase hover:bg-[var(--accent-color)] hover:text-black transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Magnetic strength={0.1}>
                <a href={project.liveUrl} target="_blank" className="flex-1 px-8 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-black text-[10px] tracking-[0.3em] uppercase text-center flex items-center justify-center gap-3 hover:bg-[var(--accent-color)] transition-colors">
                  Live Preview <Globe size={14} />
                </a>
              </Magnetic>
              <Magnetic strength={0.1}>
                <a href={project.githubUrl} target="_blank" className="flex-1 px-8 py-5 bg-transparent border border-white/10 rounded-full font-black text-[10px] tracking-[0.3em] uppercase text-center flex items-center justify-center gap-3 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all">
                  Source Code <Github size={14} />
                </a>
              </Magnetic>
            </div>
          </aside>

          {/* Right Column: Immersive Content */}
          <div className="space-y-32">
            
            {/* Main Showcase Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-3xl overflow-hidden group border border-white/5"
            >
              <Image 
                src={project.images?.[0] || ''} 
                alt="Main View" 
                fill 
                className="object-cover transition-all duration-1000" 
              />
            </motion.div>

            {/* Detailed Description */}
            <section className="max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[var(--accent-color)]" />
                <span className="text-[10px] font-black tracking-[0.5em] text-[var(--accent-color)] uppercase">The Architecture</span>
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Problem & Solution</h2>
              <p className="text-[var(--text-tertiary)] text-lg leading-relaxed font-medium mb-12">
                {project.longDescription}
              </p>

              {/* Key Features as Bullet Points */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--accent-color)]">Core Capabilities</h3>
                <ul className="grid grid-cols-1 gap-4">
                  {project.features?.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <CheckCircle2 size={16} className="mt-1 text-[var(--accent-color)] opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[11px] font-black tracking-[0.1em] uppercase leading-relaxed text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Gallery Grid */}
            <section className="grid grid-cols-2 gap-6">
              {project.images?.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square rounded-3xl overflow-hidden border border-white/5">
                   <Image src={img} alt={`Detail ${i}`} fill className="object-cover transition-all duration-700" />
                </div>
              ))}
            </section>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
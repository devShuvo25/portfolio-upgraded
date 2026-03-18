"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";
import Image, { StaticImageData } from "next/image";
import cover from "../assets/experience.png";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
  tech: string[];
  thumbnail?: string | StaticImageData; // Supports both URL and local imports
}

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      company: "Badhon Soft",
      role: "Junior Full Stack Developer",
      period: "2025 — Present",
      points: [
        "Developed multiple MERN and Next.js applications with responsive, user-focused interfaces.",
        "Built secure REST APIs with authentication, role-based access, and optimized database queries.",
        "Implemented global state management using Redux Toolkit and RTK Query for efficient data handling.",
        "Delivered production-ready systems including dashboards, admin panels, and business management tools.",
      ],
      tech: [
        "Next.js",
        "Tailwind",
        "TypeScript",
        "Node",
        "Express",
        "Prisma",
        "PostgreSQL",
      ],
      // Replace with your actual project screenshot or a tech abstract
      thumbnail:cover,
    },
  ];

  useGSAP(
    () => {
      // 1. Kinetic Timeline Line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: 1,
          },
        },
      );

      // 2. Row Entrance
      const rows = gsap.utils.toArray<HTMLElement>(".exp-row");
      rows.forEach((row) => {
        const leftContent = row.querySelector(".left-content");
        const rightContent = row.querySelector(".right-content");
        const leftImage = row.querySelector(".left-image-reveal");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from([leftContent, rightContent], {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
        }).from(
          leftImage,
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.8",
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 md:py-56 px-6 overflow-hidden bg-(--bg-primary)"
    >
     

      <div className="max-w-6xl mx-auto relative" ref={containerRef}>
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block">
          <div
            ref={lineRef}
            className="absolute top-0 left-0 w-full h-full bg-linear-to-b via-(--accent-color) to-transparent origin-top shadow-[0_0_15px_var(--accent-color)]"
          />
        </div>

        <div className="mb-32 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] text-(--text-primary)"
          >
            Experience<span className="text-(--accent-color)">.</span>
          </motion.h2>
          <p className="mt-6 text-[10px] font-black tracking-[0.5em] uppercase text-(--text-tertiary)">
            Career progression & technical impact
          </p>
        </div>

        <div className="space-y-48">
          {experiences?.map((exp, idx) => (
            <div
              key={idx}
              className="exp-row relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start"
            >
              {/* Left Side: Info & Image */}
              <div
                className={`left-content flex flex-col gap-8 ${idx % 2 === 0 ? "" : "md:order-last"}`}
              >
                <div>
                  <span className="text-(--accent-color) font-mono text-xs font-bold tracking-widest mb-4 block uppercase">
                    {exp.period}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black text-[vartext-(--text-primary leading-tight uppercase group-hover:text-group-hover:text-(--accent-color) transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-lg md:text-xl font-bold text-[vartext-(--text-tertiarymt-2 uppercase tracking-tight">
                    {exp.role}
                  </p>
                </div>

                {exp.thumbnail && (
                  <div className="left-image-reveal relative mt-4 group">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 `bg-white/2`">
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 `bg-linear-to-t`from-from-(--bg-primary to-transparent opacity-60 z-10 pointer-events-none" />

                      <Image
                        src={exp?.thumbnail}
                        alt={`${exp.company} Project Snapshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={idx === 0} // Load the first image immediately
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute left-[-1.5px] md:left-1/2 top-2 w-4 h-4 md:w-3 md:h-3 rounded-full bg-[bg-(--bg-primary)] border-2 border-[border-(--accent-color)] -translate-x-1/2 z-20 shadow-[0_0_10px_var(--accent-color)]" />

              {/* Right Side: Details */}
              <div className="right-content flex flex-col gap-10">
                <ul className="space-y-8">
                  {exp.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-5 text-[var-(--text-tertiary)] text-sm md:text-base leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var'(--accent-color)] mt-2.5 shrink-0" />
                      <span className="hover:text-(--text-primary)transition-colors duration-300">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-4">
                  {exp.tech.map((t) => (
                    <Magnetic key={t} strength={0.15}>
                      <span className="tech-tag px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase bg-white/3 border border-white/10 text-(--text-tertiary)] hover:bg-(--accent-color) hover:text-black transition-all">
                        {t}
                      </span>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

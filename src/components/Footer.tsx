"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Globe } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string; // Added for accessibility
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: <Github size={18} />, href: "https://github.com/devShuvo25", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/shuvo-mallik", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "https://x.com/devShuvo25", label: "Twitter" },
    { icon: <Globe size={18} />, href: "https://www.fiverr.com/s/VYEojQ5", label: "Fiverr" },
    { icon: <ExternalLink size={18} />, href: "https://www.upwork.com/freelancers/~019f0781b855f224b3", label: "Upwork" },
    { icon: <Mail size={18} />, href: "mailto:shuvomallik999@gmail.com", label: "Email" },
  ];

  return (
    <footer 
      className="py-12 border-t" 
      style={{ 
        backgroundColor: 'var(--bg-secondary)', 
        borderColor: 'var(--border-color)' 
      }}
    >
      <div className="section-padding flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo Section */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-xl font-black tracking-tighter font-display text-[var(--text-primary)]">
            SHUVO MALLIK<span className="text-[var(--accent-color)]">.</span>
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] mt-1 text-[var(--text-tertiary)]">
            Full Stack Web Developer
          </p>
        </motion.div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a 
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: idx * 0.2 
              }}
              className="transition-colors duration-300 text-[var(--text-tertiary)] hover:text-[var(--accent-color)]"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright Section */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex flex-col items-center md:items-end text-[10px] font-bold uppercase tracking-widest gap-2 text-[var(--text-tertiary)]"
        >
          <span>MADE BY SHUVO</span>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
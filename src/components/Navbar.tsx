"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logo from '@/assets/logo.png';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-[1001] transition-all duration-500 px-6 md:px-12 py-6',
        scrolled ? 'py-4 shadow-2xl' : ''
      )}
      style={{
        backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(32px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          href="/"
          className="text-2xl font-black tracking-tighter flex items-center gap-3 text-[var(--text-primary)]"
        >
          <div className="relative w-8 h-8">
            <Image 
              src={logo} 
              alt="Shuvo Logo" 
              fill
              className="object-contain" 
            />
          </div>
          <span>MALLIK<span className="text-[var(--accent-color)]">.</span></span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest transition-colors text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[var(--text-primary)]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 backdrop-blur-xl z-[-1] md:hidden bg-black/60"
            />
            
            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-[400px] h-screen shadow-2xl md:hidden z-[1002] border-l border-[var(--border-color)] bg-[var(--bg-primary)]"
            >
              <div className="flex flex-col h-full p-12 pt-32">
                <div className="flex flex-col space-y-10">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-black tracking-tighter transition-all hover:translate-x-2 text-[var(--text-primary)] hover:text-[var(--accent-color)]"
                    >
                      <span className="mr-4 text-sm font-sans tracking-widest text-[var(--accent-color)] opacity-30">0{i + 1}</span>
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto pt-20 border-t border-[var(--border-color)]">
                  <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 text-[var(--text-tertiary)]">
                    SOCIALS
                  </p>
                  <div className="flex gap-6">
                    <a 
                      href="https://linkedin.com/in/shuvo-mallik" 
                      target="_blank" 
                      className="text-xs font-bold uppercase tracking-widest transition-colors text-[var(--text-primary)] hover:text-[var(--accent-color)]"
                    >
                      LINKEDIN
                    </a>
                    <a 
                      href="https://github.com/devShuvo25" 
                      target="_blank" 
                      className="text-xs font-bold uppercase tracking-widest transition-colors text-[var(--text-primary)] hover:text-[var(--accent-color)]"
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-2 rounded-full transition-colors text-[var(--text-primary)] hover:bg-[var(--glass-bg)]"
              >
                <X size={32} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
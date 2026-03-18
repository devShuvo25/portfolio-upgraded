"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Magnetic from './Magnetic';

interface ContactInfo {
  label: string;
  value: string;
  icon: React.ReactNode;
  href: string;
}

const contactLinks: ContactInfo[] = [
  { 
    label: 'EMAIL', 
    value: 'shuvomallik999@gmail.com', 
    icon: <Mail size={20} />, 
    href: 'mailto:shuvomallik999@gmail.com' 
  },
  { 
    label: 'LINKEDIN', 
    value: 'linkedin.com/in/shuvo-mallik', 
    icon: <Linkedin size={20} />, 
    href: 'https://www.linkedin.com/in/shuvo-mallik/' 
  },
  { 
    label: 'GITHUB', 
    value: 'github.com/shuvomallik', 
    icon: <Github size={20} />, 
    href: 'https://github.com/devShuvo25' 
  },
];

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your email logic here (e.g., EmailJS or API call)
    setTimeout(() => setIsSubmitting(false), 2000); 
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-40 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden border-t border-[var(--glass-border)]"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
        
        {/* Left Side: Text & Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs md:text-sm font-black mb-4 tracking-[0.4em] uppercase text-[var(--text-tertiary)]">
            LET&apos;S CONNECT
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase tracking-tighter text-[var(--text-primary)]">
            HIRE<span className="text-[var(--accent-color)]">.</span>
          </h2>
          <p className="text-sm md:text-lg font-bold uppercase tracking-widest mb-12 md:mb-20 leading-relaxed max-w-md text-[var(--text-tertiary)]">
            I AM CURRENTLY OPEN TO GLOBAL REMOTE OPPORTUNITIES. LET&apos;S BUILD SOMETHING EXTRAORDINARY.
          </p>

          <div className="space-y-8">
            {contactLinks.map((item, i) => (
              <motion.a 
                key={i} 
                href={item.href}
                target={item.label === 'EMAIL' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-6 group w-fit"
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/5 text-[var(--accent-color)] group-hover:bg-[var(--accent-color)] group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[9px] font-black tracking-[0.3em] mb-1 uppercase text-[var(--text-tertiary)]">
                    {item.label}
                  </p>
                  <p className="text-sm md:text-base font-black tracking-tighter group-hover:text-[var(--accent-color)] transition-colors text-[var(--text-primary)]">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="p-8 md:p-16 relative overflow-hidden"
          style={{
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '2.5rem',
          }}
        >
          {/* Subtle Glow Background */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--accent-color)] opacity-[0.05] blur-[100px] pointer-events-none" />

          <form className="space-y-8 md:space-y-12" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--text-tertiary)]">Your Name</label>
              <input 
                required
                type="text" 
                placeholder="SHUVO MALLIK"
                className="w-full bg-transparent py-4 outline-none border-b border-[var(--glass-border)] focus:border-[var(--accent-color)] transition-colors text-lg font-bold uppercase tracking-tight text-[var(--text-primary)]"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--text-tertiary)]">Your Email</label>
              <input 
                required
                type="email" 
                placeholder="HELLO@DOMAIN.COM"
                className="w-full bg-transparent py-4 outline-none border-b border-[var(--glass-border)] focus:border-[var(--accent-color)] transition-colors text-lg font-bold uppercase tracking-tight text-[var(--text-primary)]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--text-tertiary)]">Message</label>
              <textarea 
                required
                rows={3}
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                className="w-full bg-transparent py-4 outline-none border-b border-[var(--glass-border)] focus:border-[var(--accent-color)] transition-colors text-lg font-bold uppercase tracking-tight resize-none text-[var(--text-primary)]"
              />
            </div>

            <Magnetic strength={0.2}>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer py-5 px-5 rounded-full bg-(--accent-color) text-black font-black text-xs tracking-[0.4em] uppercase hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "TRANSMITTING..." : (
                  <>
                    SEND MESSAGE <Send size={16} />
                  </>
                )}
              </button>
            </Magnetic>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
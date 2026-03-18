"use client";

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '../Loader';
import Navbar from '../Navbar';
import Hero from '../Hero';
import About from '../About';
import Skills from '../Skills';
import Experience from '../Experience';
import Projects from '../Projects';
import Achievements from '../Achivements';
import WhyMe from '../WhyMe';
import Contact from '../Contact';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader onLoadingComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <WhyMe />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}

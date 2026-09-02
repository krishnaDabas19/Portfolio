import React from 'react';
import './App.css';
import Preloader from './components/Preloader';
import ScrollProgressBar from './components/ScrollProgressBar';
import CustomCursor from './components/CustomCursor';
import CreativeBackground from './components/CreativeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app min-h-screen text-[#3F3F3F] font-sans antialiased relative selection:bg-[#BF5B2E]/20 selection:text-[#8C3C19]">
      <CustomCursor />
      <Preloader />
      <ScrollProgressBar />

      {/* Global Creative Background Layer */}
      <CreativeBackground />

      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Single-Column Page Layout */}
      <main className="w-full relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

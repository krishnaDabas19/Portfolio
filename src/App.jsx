import React from 'react';
import './App.css';
import Preloader from './components/Preloader';
import ScrollProgressBar from './components/ScrollProgressBar';
import CustomCursor from './components/CustomCursor';
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
    <div className="app min-h-screen bg-[#FAFAF8] text-[#3F3F3F] font-sans antialiased">
      <CustomCursor />
      <Preloader />
      <ScrollProgressBar />

      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Single-Column Page Layout */}
      <main className="w-full">
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

import React from 'react';
import './App.css';
import Preloader from './components/Preloader';
import ScrollProgressBar from './components/ScrollProgressBar';
import CustomCursor from './components/CustomCursor';
import Sidebar from './components/Sidebar';
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

      {/* Asymmetric 2-Column Editorial Split Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen max-w-[1600px] mx-auto">
        {/* Left Persistent Sidebar (~30% on desktop) */}
        <Sidebar />

        {/* Right Scrollable Editorial Content Area (~70% on desktop) */}
        <main className="w-full lg:w-[68%] xl:w-[72%] p-6 sm:p-10 lg:p-12 xl:p-16 min-h-screen">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ExperienceEducation />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

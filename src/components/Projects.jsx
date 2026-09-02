import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, Calendar } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectCategories, projectsData } from '../data/portfolioData';
import TerminalHeading from './TerminalHeading';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-white/[0.08] relative">
      <div className="editorial-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <TerminalHeading
            tag="// projects"
            title="Things I've Built"
            subtitle="Selected software systems, creative platforms, and engineering explorations."
            className="mb-0"
          />

          {/* Filter Tabs (All / Web Dev / C++/DSA) */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg border border-white/[0.08] bg-[#12121A] self-start sm:self-auto shadow-sm">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white font-semibold shadow-md shadow-teal-500/20'
                    : 'text-[#9CA3AF] hover:text-[#FFFFFF]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards with Scan Line Reveal */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="scan-card group relative p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl shadow-black/40"
              >
                {/* Card Header: Category Badge + Duration */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20 font-medium">
                      <FolderGit2 className="w-3.5 h-3.5 text-teal-400" />
                      {project.categoryBadge}
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF]">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    {project.period}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-3 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#FFFFFF] group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-teal-400/90 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* What & Why Summary */}
                <p className="text-sm font-body text-[#E5E7EB] leading-relaxed mb-4 relative z-10">
                  {project.summary}
                </p>

                {/* Key Highlights Bullet List */}
                <div className="mb-6 space-y-2 pl-1 relative z-10">
                  {project.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[#9CA3AF]"
                    >
                      <span className="text-teal-400 font-mono mt-0.5 font-bold">❯</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer: Tech Stack Pills + Action Links */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#161B22] border border-white/[0.06] text-[#E5E7EB] hover:border-teal-400/40 hover:text-teal-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/[0.1] bg-[#161B22] hover:border-teal-500/50 hover:text-teal-300 text-xs font-mono text-[#FFFFFF] transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Code</span>
                    </a>

                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-mono transition-all font-semibold shadow-md shadow-teal-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

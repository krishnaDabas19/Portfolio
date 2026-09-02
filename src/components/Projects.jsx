import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FolderGit2, Calendar, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(projectsData[0].id);

  const activeProject =
    projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-[#E5E2DC]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Section Header with Monospace Numbered Index */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#C2542D] font-bold uppercase tracking-widest">
            // 03. archive
          </span>
          <div className="h-[1px] flex-1 bg-[#E5E2DC]" />
          <span className="font-mono text-xs text-[#8A8A8A]">
            INDEX CATALOGUE
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1A1A1A] tracking-tight">
            03 — Selected Works
          </h2>
          <p className="font-mono text-xs text-[#8A8A8A]">
            * Click any entry in the index to inspect architecture
          </p>
        </div>

        {/* Magazine Editorial "List + Detail" Layout */}
        <div className="space-y-6">
          {/* Top Index Selector Strip */}
          <div className="flex flex-col gap-2">
            {projectsData.map((project) => {
              const isSelected = project.id === activeProject.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  onMouseEnter={() => setSelectedProjectId(project.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'border-[#C2542D] bg-[#FFFFFF] shadow-sm'
                      : 'border-[#E5E2DC] bg-[#FAFAF8] hover:bg-[#FFFFFF] hover:border-[#8A8A8A]'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-[#C2542D]' : 'text-[#8A8A8A]'
                      }`}
                    >
                      {project.number}
                    </span>
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-heading font-bold transition-colors ${
                          isSelected
                            ? 'text-[#C2542D]'
                            : 'text-[#1A1A1A] group-hover:text-[#C2542D]'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-[#8A8A8A]">
                        {project.subtitle} • {project.category}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs flex items-center gap-1 transition-all ${
                      isSelected
                        ? 'text-[#C2542D] font-bold translate-x-0'
                        : 'text-[#8A8A8A] -translate-x-1 group-hover:translate-x-0'
                    }`}
                  >
                    <span className="hidden sm:inline">Inspect</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Project Detail Dossier Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-sm space-y-6"
            >
              {/* Dossier Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5E2DC]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#C2542D]/10 text-[#C2542D] border border-[#C2542D]/20">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    {activeProject.categoryBadge}
                  </span>
                  <span className="font-mono text-xs text-[#8A8A8A] hidden sm:inline">
                    // DOSSIER_ID: {activeProject.id.toUpperCase()}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8A8A8A]">
                  <Calendar className="w-3.5 h-3.5 text-[#C2542D]" />
                  {activeProject.period}
                </span>
              </div>

              {/* Title & Narrative */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#1A1A1A] mb-1.5">
                  {activeProject.title}
                </h3>
                <p className="font-body text-sm text-[#3F3F3F] leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              {/* Architectural Approach Note */}
              <div className="p-4 rounded-xl border border-[#E5E2DC] bg-[#FAFAF8]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#C2542D] font-bold block mb-1">
                  // Architectural Design
                </span>
                <p className="font-mono text-xs text-[#3F3F3F] leading-relaxed">
                  {activeProject.architecture}
                </p>
              </div>

              {/* Key Implementation Highlights */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] block mb-2.5">
                  // Key Deliverables
                </span>
                <div className="space-y-2">
                  {activeProject.features.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[#3F3F3F]">
                      <CheckCircle className="w-4 h-4 text-[#C2542D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Action Links */}
              <div className="pt-4 border-t border-[#E5E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {activeProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#FAFAF8] border border-[#E5E2DC] text-[#1A1A1A]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={activeProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#C2542D] hover:text-[#C2542D] text-xs font-mono text-[#1A1A1A] transition-all shadow-xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  {activeProject.links.demo !== '#' && (
                    <a
                      href={activeProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#C2542D] hover:bg-[#A8421F] text-white text-xs font-mono transition-all font-semibold shadow-xs"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

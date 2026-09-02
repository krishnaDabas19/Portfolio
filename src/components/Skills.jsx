import React, { useState } from 'react';
import { Sparkles, Terminal } from 'lucide-react';
import TerminalHeading from './TerminalHeading';


export default function Skills() {
  const [activeNode, setActiveNode] = useState(null);

  // Constellation Graph Nodes
  const skillsGraph = [
    // Web Stack Group
    {
      id: 'js',
      name: 'JavaScript',
      category: 'Web',
      level: 'Advanced',
      desc: 'Modern ES6+, Asynchronous runtime, DOM manipulation',
      x: 35,
      y: 30,
      connections: ['react', 'node', 'html'],
      color: 'cyan',
    },
    {
      id: 'react',
      name: 'React.js',
      category: 'Web',
      level: 'Advanced',
      desc: 'Component architecture, Hooks, State management',
      x: 55,
      y: 20,
      connections: ['js', 'css', 'node'],
      color: 'cyan',
    },
    {
      id: 'html',
      name: 'HTML5',
      category: 'Web',
      level: 'Advanced',
      desc: 'Semantic structure, Accessibility standards, SEO',
      x: 18,
      y: 22,
      connections: ['js', 'css'],
      color: 'cyan',
    },
    {
      id: 'css',
      name: 'CSS3 / Tailwind',
      category: 'Web',
      level: 'Advanced',
      desc: 'Responsive design, Grid, Flexbox, Animations',
      x: 38,
      y: 12,
      connections: ['html', 'react'],
      color: 'cyan',
    },
    {
      id: 'node',
      name: 'Node.js',
      category: 'Web',
      level: 'Intermediate',
      desc: 'Express.js backend APIs, RESTful services',
      x: 72,
      y: 32,
      connections: ['react', 'mongo', 'mysql'],
      color: 'cyan',
    },

    // Core Languages / DSA Group
    {
      id: 'cpp',
      name: 'C++',
      category: 'Languages',
      level: 'Proficient',
      desc: 'OOP, STL, Data Structures & Algorithmic Problem Solving',
      x: 30,
      y: 65,
      connections: ['c', 'python', 'dsa'],
      color: 'violet',
    },
    {
      id: 'c',
      name: 'C',
      category: 'Languages',
      level: 'Intermediate',
      desc: 'Pointers, Memory allocation, Low-level primitives',
      x: 15,
      y: 60,
      connections: ['cpp'],
      color: 'violet',
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Languages',
      level: 'Intermediate',
      desc: 'AI/ML scripting, Data pipelines, Automation',
      x: 48,
      y: 75,
      connections: ['cpp', 'ai'],
      color: 'violet',
    },
    {
      id: 'dsa',
      name: 'Data Structures',
      category: 'Languages',
      level: 'Advanced',
      desc: 'Arrays, Trees, Graphs, Dynamic Programming',
      x: 46,
      y: 54,
      connections: ['cpp', 'c'],
      color: 'violet',
    },

    // Databases & Tools
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'Database',
      level: 'Intermediate',
      desc: 'Relational schemas, SQL queries, Indexing',
      x: 75,
      y: 55,
      connections: ['mongo', 'node'],
      color: 'amber',
    },
    {
      id: 'mongo',
      name: 'MongoDB',
      category: 'Database',
      level: 'Intermediate',
      desc: 'NoSQL collections, Document schema design',
      x: 85,
      y: 42,
      connections: ['mysql', 'node'],
      color: 'amber',
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'Tools',
      level: 'Advanced',
      desc: 'Branching, PRs, Version Control, Collaboration',
      x: 82,
      y: 72,
      connections: ['mysql', 'cpp'],
      color: 'rose',
    },
  ];

  // Map of coordinate lookup
  const nodeMap = skillsGraph.reduce((acc, node) => {
    acc[node.id] = node;
    return acc;
  }, {});

  // Generate unique connection lines
  const lines = [];
  const visitedPairs = new Set();

  skillsGraph.forEach((node) => {
    node.connections.forEach((targetId) => {
      const target = nodeMap[targetId];
      if (target) {
        const pairKey = [node.id, target.id].sort().join('--');
        if (!visitedPairs.has(pairKey)) {
          visitedPairs.add(pairKey);
          lines.push({
            id: pairKey,
            from: node,
            to: target,
          });
        }
      }
    });
  });

  const activeSkill = activeNode ? nodeMap[activeNode] : null;

  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-white/[0.08] relative">
      <div className="editorial-container">
        <TerminalHeading
          tag="// skills"
          title="Technical Constellation"
          subtitle="Interactive skill network — hover over any node to trace relationships and view focus topics."
        />

        {/* Interactive Constellation Canvas Container */}
        <div className="relative w-full rounded-2xl border border-white/[0.08] bg-[#12121A] p-4 sm:p-8 overflow-hidden shadow-2xl">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Top Category Legend */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/[0.06] relative z-10">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Web Stack</span>
              </span>
              <span className="flex items-center gap-1.5 text-violet-400">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span>Core Languages / DSA</span>
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Databases</span>
              </span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>Tools & Git</span>
              </span>
            </div>

            <span className="text-[11px] font-mono text-[#9CA3AF] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Network Graph</span>
            </span>
          </div>

          {/* Desktop/Tablet Constellation View */}
          <div className="relative w-full h-[400px] sm:h-[460px] my-2">
            {/* SVG Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {lines.map((line) => {
                const isConnected =
                  activeNode &&
                  (line.from.id === activeNode || line.to.id === activeNode);

                return (
                  <line
                    key={line.id}
                    x1={`${line.from.x}%`}
                    y1={`${line.from.y}%`}
                    x2={`${line.to.x}%`}
                    y2={`${line.to.y}%`}
                    stroke={
                      isConnected
                        ? '#06B6D4'
                        : 'rgba(255, 255, 255, 0.12)'
                    }
                    strokeWidth={isConnected ? '1.8' : '0.8'}
                    strokeDasharray={isConnected ? 'none' : '2 2'}
                    className={isConnected ? 'transition-all duration-300' : 'constellation-line'}
                  />
                );
              })}
            </svg>

            {/* Interactive Node Badges */}
            {skillsGraph.map((node) => {
              const isActive = activeNode === node.id;
              const isLinked =
                activeNode &&
                (node.id === activeNode ||
                  nodeMap[activeNode]?.connections.includes(node.id));

              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                  }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
                >
                  <div
                    className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-200 flex items-center gap-1.5 select-none ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-500/20 text-white shadow-[0_0_20px_rgba(6,182,212,0.6)] scale-110 z-30'
                        : isLinked
                        ? 'border-violet-400/80 bg-violet-500/15 text-white shadow-[0_0_12px_rgba(139,92,246,0.4)] scale-105 z-20'
                        : 'border-white/[0.1] bg-[#161B22]/90 text-[#E5E7EB] hover:border-cyan-400/50 hover:bg-[#1C232E]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        node.color === 'cyan'
                          ? 'bg-cyan-400'
                          : node.color === 'violet'
                          ? 'bg-violet-400'
                          : node.color === 'amber'
                          ? 'bg-amber-400'
                          : 'bg-rose-400'
                      }`}
                    />
                    <span className="font-semibold">{node.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic HUD Inspection Bar */}
          <div className="mt-4 p-4 rounded-xl border border-white/[0.08] bg-[#161B22]/80 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
            {activeSkill ? (
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-sm font-bold text-white">
                    {activeSkill.name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {activeSkill.level}
                  </span>
                </div>
                <span className="text-xs font-body text-[#9CA3AF]">
                  {activeSkill.desc}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
                <span className="text-cyan-400 animate-pulse">❯</span>
                <span>Hover any skill node to inspect proficiency & active linkages</span>
              </div>
            )}

            <div className="text-[11px] font-mono text-violet-400 shrink-0">
              SYS.NODES // 12 LOADED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

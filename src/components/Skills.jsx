import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  Terminal, 
  Layers, 
  Database, 
  Smartphone, 
  Wrench, 
  Code2, 
  CheckCircle2,
  X,
  Info
} from "lucide-react";
import { 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare 
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiFirebase, 
  SiMysql, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiRedux, 
  SiFlutter, 
  SiDart, 
  SiPostman, 
  SiGit, 
  SiVite, 
  SiCplusplus 
} from "react-icons/si";

const statusStyles = {
  "Active Stack": {
    short: "Active",
    badge: "bg-accent-mint/10 text-accent-mint border-accent-mint/30",
    dot: "bg-accent-mint",
    description: "Actively used in daily fullstack web development and core projects.",
  },
  "Project Built": {
    short: "Project",
    badge: "bg-sky-400/10 text-sky-300 border-sky-400/30",
    dot: "bg-sky-400",
    description: "Implemented in specific completed systems (HydraX mobile IoT, W-EBAR 3D menu).",
  },
  "Academic Foundation": {
    short: "Academic",
    badge: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    dot: "bg-amber-400",
    description: "Grounded through university coursework, lab experiments, and algorithmic problem solving.",
  },
  "Exploration": {
    short: "Explore",
    badge: "bg-purple-400/10 text-purple-300 border-purple-400/30",
    dot: "bg-purple-400",
    description: "Actively explored for modern server-side rendering and complex state patterns.",
  },
};

const skillDomains = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Layers,
    description: "Component-driven user interfaces, responsive layout architectures, and client-side state stores.",
    skills: [
      { name: "React.js", category: "Core UI", status: "Active Stack", icon: FaReact, color: "#61DAFB", role: "Component Architecture", usage: "Event System, W-EBAR, SIVA.dev" },
      { name: "JavaScript (ES6+)", category: "Language", status: "Active Stack", icon: FaJsSquare, color: "#F7DF1E", role: "Core Logic & Async Operations", usage: "Universal Client & Server Logic" },
      { name: "Tailwind CSS", category: "Styling", status: "Active Stack", icon: SiTailwindcss, color: "#38BDF8", role: "Design Systems & Responsive UI", usage: "All Modern Web Projects" },
      { name: "Next.js", category: "Framework", status: "Exploration", icon: SiNextdotjs, color: "#FFFFFF", role: "SSR & App Routing", usage: "Modern Web Architecture Exploration" },
      { name: "Redux Toolkit", category: "State", status: "Exploration", icon: SiRedux, color: "#764ABC", role: "Global State Store", usage: "Complex Client State Management" },
      { name: "HTML5 & CSS3", category: "Markup", status: "Academic Foundation", icon: FaHtml5, color: "#E34F26", role: "Semantic Layouts & Styling", usage: "Foundational Web Standards" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: Terminal,
    description: "Server runtimes, RESTful API design, controller patterns, and authentication middleware.",
    skills: [
      { name: "Node.js", category: "Runtime", status: "Active Stack", icon: FaNodeJs, color: "#68A063", role: "Server Runtime Environment", usage: "Event Tracker Backend, REST APIs" },
      { name: "Express.js", category: "Framework", status: "Active Stack", icon: SiExpress, color: "#E0E0E0", role: "RESTful Routing & Middleware", usage: "Backend Services & Controllers" },
      { name: "Python", category: "Language", status: "Academic Foundation", icon: FaPython, color: "#3776AB", role: "Scripting & Algorithmic Logic", usage: "Academic Coursework & Automation" },
      { name: "C / C++", category: "Systems", status: "Academic Foundation", icon: SiCplusplus, color: "#00599C", role: "Algorithms & Data Structures", usage: "Academic Problem Solving & Lab Work" },
    ],
  },
  {
    id: "data-cloud",
    title: "Databases & Cloud",
    icon: Database,
    description: "Document data modeling, cloud hosting, relational query design, and real-time synchronization.",
    skills: [
      { name: "MongoDB", category: "Database", status: "Active Stack", icon: SiMongodb, color: "#47A248", role: "Document Schemas & Mongoose ORM", usage: "Event Management System" },
      { name: "Firebase", category: "Cloud BaaS", status: "Project Built", icon: SiFirebase, color: "#FFCA28", role: "Auth, Firestore & Hosting", usage: "W-EBAR, HydraX, Symposium Web" },
      { name: "MySQL / SQL", category: "Database", status: "Academic Foundation", icon: SiMysql, color: "#4479A1", role: "Relational Queries & Schema Design", usage: "Database Management Coursework" },
    ],
  },
  {
    id: "mobile-3d",
    title: "Mobile & Web 3D / AR",
    icon: Smartphone,
    description: "Cross-platform mobile applications and web-based augmented reality entities.",
    skills: [
      { name: "Flutter", category: "Mobile SDK", status: "Project Built", icon: SiFlutter, color: "#02569B", role: "Cross-Platform Mobile UI", usage: "HydraX Smart Water Bottle App" },
      { name: "Dart", category: "Language", status: "Project Built", icon: SiDart, color: "#0175C2", role: "Client Application Logic", usage: "HydraX Mobile Application" },
      { name: "A-Frame / MindAR", category: "Web 3D / AR", status: "Project Built", icon: Code2, color: "#00F5A0", role: "Entity-Component System", usage: "W-EBAR Augmented Reality Menu" },
    ],
  },
  {
    id: "tools",
    title: "Workflow & Tooling",
    icon: Wrench,
    description: "Version control, API testing, compilation toolchains, and developer environments.",
    skills: [
      { name: "Git & GitHub", category: "VCS", status: "Active Stack", icon: FaGithub, color: "#F0F6FC", role: "Version Control & Collaboration", usage: "Daily Repository & Branch Workflow" },
      { name: "Postman", category: "Testing", status: "Active Stack", icon: SiPostman, color: "#FF6C37", role: "API Testing & Endpoint Docs", usage: "Route Verification & Payload Testing" },
      { name: "Vite", category: "Build Tool", status: "Active Stack", icon: SiVite, color: "#646CFF", role: "Modern Bundler & Dev Server", usage: "SIVA.dev & React Application Toolchains" },
    ],
  },
];

const categoryFilters = [
  { id: "all", label: "All Disciplines" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & Systems" },
  { id: "data-cloud", label: "Databases & Cloud" },
  { id: "mobile-3d", label: "Mobile & 3D" },
  { id: "tools", label: "Workflow Tools" },
];

const Skills = ({ sectionsRef }) => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (sectionsRef && sectionsRef.current) {
      if (!sectionsRef.current.includes(sectionRef.current)) {
        sectionsRef.current.push(sectionRef.current);
      }
    }
  }, [sectionsRef]);

  // Keyboard accessibility: Escape key closes the Quick Inspector
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedSkill(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filterCounts = useMemo(() => {
    const total = skillDomains.reduce((sum, d) => sum + d.skills.length, 0);
    return {
      all: total,
      frontend: skillDomains.find((d) => d.id === "frontend")?.skills.length || 0,
      backend: skillDomains.find((d) => d.id === "backend")?.skills.length || 0,
      "data-cloud": skillDomains.find((d) => d.id === "data-cloud")?.skills.length || 0,
      "mobile-3d": skillDomains.find((d) => d.id === "mobile-3d")?.skills.length || 0,
      tools: skillDomains.find((d) => d.id === "tools")?.skills.length || 0,
    };
  }, []);

  const visibleDomains = activeFilter === "all"
    ? skillDomains
    : skillDomains.filter((d) => d.id === activeFilter);

  return (
    <section
      id="skills"
      ref={sectionRef}
      role="region"
      aria-label="Technical Toolkit & Capability Matrix"
      className="relative py-24 sm:py-32 bg-canvas overflow-hidden border-t border-border-subtle"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div 
        className="absolute top-1/4 left-10 w-[420px] h-[420px] rounded-full bg-accent-mint/5 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle text-xs font-mono text-accent-mint">
              <Terminal size={12} />
              <span>TOOLKIT // CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Core Technologies & Ecosystem.
            </h2>
            <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
              A transparent, structured inventory of the technologies I actively engineer with, clearly categorized by their functional role and real-world project context.
            </p>
          </div>

          {/* Filter Pills with Live Counters */}
          <div 
            role="group" 
            aria-label="Filter skills by discipline"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-surface-card border border-border-subtle backdrop-blur-sm self-start lg:self-end"
          >
            {categoryFilters.map((filter) => {
              const isActive = activeFilter === filter.id;
              const count = filterCounts[filter.id] ?? 0;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${filter.label} (${count} skills)`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint ${
                    isActive
                      ? "bg-accent-mint text-canvas-dark font-semibold shadow-glow-subtle"
                      : "text-content-secondary hover:text-white hover:bg-surface-elevated"
                  }`}
                >
                  <span>{filter.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-canvas-dark/20 text-canvas-dark" : "bg-surface-elevated text-content-muted"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Legend / Status Context Bar */}
        <div className="mb-8 p-3 sm:p-3.5 rounded-xl bg-surface-card/60 border border-border-subtle/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-4 text-content-secondary">
            <span className="text-content-muted flex items-center gap-1">
              <Info size={13} className="text-accent-mint" /> Classification:
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-mint" aria-hidden="true" />
              <span>Active Stack</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true" />
              <span>Project Built</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
              <span>Academic / Foundation</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" aria-hidden="true" />
              <span>Exploration</span>
            </span>
          </div>
          <span className="text-[11px] text-content-muted hidden sm:inline-block">
            Esc or click chip to toggle detail
          </span>
        </div>

        {/* Selected Skill Quick Inspector Bar */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              role="status"
              aria-live="polite"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mb-8 p-4 sm:p-5 rounded-xl bg-surface-elevated border border-accent-mint/40 shadow-glow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <span className="p-2.5 rounded-xl bg-surface-card border border-border-subtle text-accent-mint shrink-0">
                  <selectedSkill.icon size={22} style={{ color: selectedSkill.color }} />
                </span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-white font-mono">{selectedSkill.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-card border border-border-subtle text-content-secondary">
                      {selectedSkill.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${statusStyles[selectedSkill.status].badge}`}>
                      {selectedSkill.status}
                    </span>
                  </div>
                  <p className="text-xs text-content-secondary">
                    <span className="text-white font-medium">{selectedSkill.role}</span> — {statusStyles[selectedSkill.status].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-border-subtle/50 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-content-muted hidden sm:inline">Project context:</span>
                  <span className="text-accent-mint bg-surface-card px-2.5 py-1 rounded-lg border border-border-subtle">
                    {selectedSkill.usage}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  aria-label="Close skill details inspector"
                  className="p-1.5 rounded-lg text-content-muted hover:text-white hover:bg-surface-card border border-transparent hover:border-border-subtle transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                >
                  <X size={15} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Domain Capability Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {visibleDomains.map((domain) => {
            const DomainIcon = domain.icon;
            const isFullWidth = domain.id === "tools" && activeFilter === "all";

            return (
              <div
                key={domain.id}
                className={`rounded-2xl bg-surface-card border border-border-subtle hover:border-accent-mint/30 transition-colors duration-300 p-6 sm:p-7 shadow-card-elevated flex flex-col justify-between ${
                  isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-surface-elevated border border-border-subtle text-accent-mint">
                        <DomainIcon size={16} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {domain.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-surface-elevated border border-border-subtle text-content-muted">
                      {domain.skills.length} Technologies
                    </span>
                  </div>

                  <p className="text-xs text-content-secondary leading-relaxed pt-3">
                    {domain.description}
                  </p>

                  {/* Skills Chip Matrix */}
                  <div className={`pt-4 gap-2.5 grid ${
                    isFullWidth 
                      ? "grid-cols-1 sm:grid-cols-3" 
                      : "grid-cols-1 sm:grid-cols-2"
                  }`}>
                    {domain.skills.map((skill) => {
                      const Icon = skill.icon;
                      const isSelected = selectedSkill?.name === skill.name;
                      const statusConfig = statusStyles[skill.status];

                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() => setSelectedSkill(isSelected ? null : skill)}
                          aria-pressed={isSelected}
                          aria-label={`Inspect ${skill.name} (${skill.status})`}
                          className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint ${
                            isSelected
                              ? "bg-accent-muted/40 border-accent-mint shadow-glow-subtle"
                              : "bg-surface-elevated/70 border-border-subtle/80 hover:border-accent-mint/40 hover:bg-surface-elevated"
                          }`}
                        >
                          <div className="p-2 rounded-lg bg-surface-card border border-border-subtle/60 shrink-0 group-hover:scale-105 transition-transform">
                            <Icon size={18} style={{ color: skill.color }} />
                          </div>
                          <div className="overflow-hidden w-full">
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="text-xs font-semibold text-white truncate group-hover:text-accent-mint transition-colors">
                                {skill.name}
                              </span>
                              <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border shrink-0 ${statusConfig.badge}`}>
                                {statusConfig.short}
                              </span>
                            </div>
                            <div className="text-[10px] font-mono text-content-muted truncate mt-0.5">
                              {skill.role}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 pt-3 text-[10px] font-mono text-content-muted flex items-center justify-between border-t border-border-subtle/40">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-mint/60" aria-hidden="true" />
                    Click chip to inspect usage context
                  </span>
                  <span className="text-accent-mint">✓ Verified Stack</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Execution Pipeline Banner */}
        <div className="mt-14 rounded-2xl bg-surface-card border border-border-subtle p-6 sm:p-7 shadow-card-elevated">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-mint">
              <CheckCircle2 size={15} />
              <span className="uppercase tracking-wider">End-to-End Execution Process</span>
            </div>
            <span className="text-[11px] font-mono text-content-muted">
              From Specification to Production Verification
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-surface-elevated border border-border-subtle space-y-1.5">
              <span className="text-[10px] font-mono text-accent-mint font-semibold">01 // ARCHITECTURE</span>
              <h4 className="text-xs font-bold text-white">System & Data Models</h4>
              <p className="text-[11px] text-content-secondary leading-relaxed">
                Documenting REST contracts, Mongoose document schemas, and component structure prior to implementation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-border-subtle space-y-1.5">
              <span className="text-[10px] font-mono text-accent-mint font-semibold">02 // FRONTEND</span>
              <h4 className="text-xs font-bold text-white">Component Systems</h4>
              <p className="text-[11px] text-content-secondary leading-relaxed">
                Modular React architecture with Tailwind CSS tokens, keyboard-accessible states, and responsive viewports.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-border-subtle space-y-1.5">
              <span className="text-[10px] font-mono text-accent-mint font-semibold">03 // BACKEND</span>
              <h4 className="text-xs font-bold text-white">API & Logic Services</h4>
              <p className="text-[11px] text-content-secondary leading-relaxed">
                Node.js & Express endpoints, controller layers, authentication middleware, and input sanitization.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-border-subtle space-y-1.5">
              <span className="text-[10px] font-mono text-accent-mint font-semibold">04 // DELIVERY</span>
              <h4 className="text-xs font-bold text-white">Testing & Deployment</h4>
              <p className="text-[11px] text-content-secondary leading-relaxed">
                Endpoint verification via Postman, Git release branches, Firebase/Vercel hosting, and build verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

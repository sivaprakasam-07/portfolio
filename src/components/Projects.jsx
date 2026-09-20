import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Terminal, Lock, Sparkles } from "lucide-react";

const rawProjects = [
  {
    id: "we-bar",
    title: "W-EBAR",
    subtitle: "Web-Based Augmented Reality Menu Platform",
    description:
      "A Web-Based Augmented Reality application that enables diners to preview interactive 3D food models directly from digital restaurant menus without installing a native app.",
    image: "https://i.postimg.cc/kXCpThVh/W-EBAR.jpg",
    category: "web3d",
    categoryLabel: "WebAR & 3D Experience",
    featured: true,
    tech: ["React JS", "TailwindCSS", "Firebase Auth & DB", "A-Frame 3D"],
    github: "https://github.com/sivaprakasam-07/W-EBAR",
    live: "https://we-bar-03.web.app/",
  },
  {
    id: "event-tracker",
    title: "Event Management System",
    subtitle: "Fullstack Event Registration & Coordination",
    description:
      "A comprehensive MERN stack platform designed to manage institutional event registrations, attendee tracking, and administrative scheduling workflows.",
    image: "https://i.postimg.cc/MpP10VQF/SJIT-EVENT.jpg",
    category: "fullstack",
    categoryLabel: "Fullstack Web Application",
    featured: false,
    tech: ["React JS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/sivaprakasam-07/Event-Tracker",
    live: null,
  },
  {
    id: "symposium",
    title: "Symposium Website (E-AXION 24)",
    subtitle: "High-Traffic Technical Event Platform",
    description:
      "Production website engineered for a national technical symposium, supporting online participant registration, event schedules, and automated guidelines.",
    image: "https://i.postimg.cc/MG64rjSP/Sympo-ss.png",
    category: "web",
    categoryLabel: "Event Web Platform",
    featured: false,
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase Hosting"],
    github: "https://github.com/sivaprakasam-07/E-AXION-24",
    live: "https://e--axion24.web.app/",
  },
  {
    id: "hydrax-app",
    title: "HydraX Smart App",
    subtitle: "Smart Hydration & Temperature Controller",
    description:
      "Cross-platform mobile application interfacing with smart water bottle hardware for real-time temperature regulation, daily hydration telemetry, and habit tracking.",
    image: "https://i.postimg.cc/MTTTWqJL/HyDraX.jpg",
    category: "mobile",
    categoryLabel: "Mobile & Hardware Interface",
    featured: false,
    tech: ["Flutter", "Dart", "Firebase Database"],
    github: "https://github.com/sivaprakasam-07/hydrax_new",
    live: null,
  },
  {
    id: "hydrax-site",
    title: "HydraX Product Landing",
    subtitle: "Hardware Product Showcase",
    description:
      "Modern product marketing landing page presenting the technical specifications, sensor capabilities, and industrial design of the HydraX ecosystem.",
    image: "https://i.postimg.cc/y8D9sg7Y/Screenshot-2025-10-03-222308.png",
    category: "web",
    categoryLabel: "Product Showcase",
    featured: false,
    tech: ["React JS", "Tailwind CSS", "Firebase Hosting"],
    github: null,
    live: null,
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Fullstack MERN" },
  { id: "web3d", label: "WebAR & 3D" },
  { id: "web", label: "Web Platforms" },
  { id: "mobile", label: "Mobile" },
];

const Projects = ({ sectionsRef }) => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (sectionsRef && sectionsRef.current) {
      if (!sectionsRef.current.includes(sectionRef.current)) {
        sectionsRef.current.push(sectionRef.current);
      }
    }
  }, [sectionsRef]);

  const filteredProjects = activeCategory === "all"
    ? rawProjects
    : rawProjects.filter((p) => p.category === activeCategory);

  const featuredProject = rawProjects.find((p) => p.featured);
  const isFeaturedShown = featuredProject && (activeCategory === "all" || activeCategory === featuredProject.category);

  // Supporting projects: exclude featured project when it is already displayed in the hero showcase
  const supportingProjects = filteredProjects.filter((p) =>
    isFeaturedShown ? p.id !== featuredProject.id : true
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      role="region"
      aria-label="Projects Showcase"
      className="relative py-24 sm:py-32 bg-canvas overflow-hidden border-t border-border-subtle"
    >
      {/* Subtle technical background details */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-accent-mint/5 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle text-xs font-mono text-accent-mint">
              <Terminal size={12} />
              <span>CASE STUDIES // SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Systems & Applications.
            </h2>
            <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
              A curated collection of fullstack web platforms, interactive web experiences, and mobile applications engineered with modern technologies and clean architecture.
            </p>
          </div>

          {/* Category Filter Pills with Accessible Controls & Project Counts */}
          <div 
            role="group" 
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-surface-card border border-border-subtle backdrop-blur-sm self-start md:self-end"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === "all" 
                ? rawProjects.length 
                : rawProjects.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={isActive}
                  aria-label={`Show ${cat.label} projects (${count})`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint flex items-center gap-1.5 ${
                    isActive
                      ? "bg-accent-mint text-canvas-dark font-semibold shadow-glow-subtle"
                      : "text-content-secondary hover:text-white hover:bg-surface-elevated"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded ${
                    isActive ? "bg-canvas-dark/20 text-canvas-dark" : "bg-surface-elevated text-content-muted"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Case Study Hero (Rendered without duplication) */}
        {isFeaturedShown && (
          <div className="mb-12">
            <div className="rounded-2xl bg-surface-card border border-border-subtle hover:border-accent-mint/40 transition-all duration-300 overflow-hidden shadow-card-elevated group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual Viewport with Mock Browser Chrome */}
                <div className="lg:col-span-7 bg-surface-elevated/60 border-b lg:border-b-0 lg:border-r border-border-subtle flex flex-col justify-between overflow-hidden">
                  
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-surface-elevated border-b border-border-subtle text-xs font-mono text-content-muted">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="px-3 py-0.5 rounded bg-surface-card border border-border-subtle text-[11px] truncate max-w-[220px]">
                      we-bar-03.web.app
                    </div>
                    <span className="text-[10px] text-accent-mint font-mono uppercase px-1.5 py-0.5 rounded bg-accent-muted border border-accent-mint/20">
                      Live
                    </span>
                  </div>

                  {/* Image Surface with Zoom Micro-interaction */}
                  <div className="relative aspect-video sm:aspect-[16/10] overflow-hidden bg-canvas">
                    <img
                      src={featuredProject.image}
                      alt={`${featuredProject.title} — ${featuredProject.subtitle}`}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] motion-safe:transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-card/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Content & Case Study Info */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-medium text-accent-mint uppercase tracking-wider px-2.5 py-1 rounded bg-accent-muted border border-accent-mint/25">
                        {featuredProject.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-content-muted flex items-center gap-1">
                        <Sparkles size={11} className="text-accent-mint" />
                        <span>Featured Showcase</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-xs font-mono text-accent-mint">
                      {featuredProject.subtitle}
                    </p>

                    <p className="text-sm text-content-secondary leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-mono text-content-muted">Technologies:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-surface-elevated border border-border-subtle text-xs font-mono text-content-primary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                    {featuredProject.live && (
                      <a
                        href={featuredProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Launch live demo for ${featuredProject.title} (opens in new tab)`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-mint text-canvas-dark font-mono font-semibold text-xs hover:bg-accent-emerald transition-all shadow-glow-subtle cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                        title={`Open live demo for ${featuredProject.title}`}
                      >
                        <ExternalLink size={14} />
                        <span>Launch Demo</span>
                      </a>
                    )}
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${featuredProject.title} source code on GitHub (opens in new tab)`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-card border border-border-subtle hover:border-accent-mint/40 text-content-primary hover:text-accent-mint font-mono text-xs transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                        title={`View source code on GitHub`}
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Supporting Projects Grid (rendered only when there are items) */}
        {supportingProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {supportingProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl bg-surface-card border border-border-subtle hover:border-accent-mint/40 transition-all duration-300 overflow-hidden shadow-card-elevated flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Preview Window Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-surface-elevated border-b border-border-subtle text-xs font-mono text-content-muted">
                      <span className="text-[11px] text-content-secondary truncate max-w-[200px]">
                        {project.title}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-surface-card border border-border-subtle text-accent-mint">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Screenshot Viewport */}
                    <div className="relative aspect-video w-full overflow-hidden bg-canvas border-b border-border-subtle">
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.subtitle}`}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] motion-safe:transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-card/70 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-mint transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-content-muted">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-content-secondary leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[11px] font-mono text-content-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-6 pt-0 border-t border-border-subtle/50 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 pt-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-content-secondary hover:text-accent-mint transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint rounded"
                          title={`View ${project.title} code repository`}
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-content-muted">
                          <Lock size={12} />
                          <span>Internal Project</span>
                        </span>
                      )}

                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live demo for ${project.title} (opens in new tab)`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-mint hover:underline transition-colors cursor-pointer ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint rounded"
                          title={`View live demo of ${project.title}`}
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      ) : null}
                    </div>

                    <span className="text-[11px] font-mono text-content-muted pt-3">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

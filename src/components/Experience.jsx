import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Terminal, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  GitBranch
} from "lucide-react";

const experiences = [
  {
    id: "skill-first-labs",
    title: "MERN Developer",
    roleType: "Internship",
    company: "Skill First Labs",
    period: "Dec 2024 – Jan 2025",
    dateTime: "2024-12/2025-01",
    duration: "2 mos",
    domain: "Fullstack Web Application Engineering",
    status: "Latest Role",
    summary: "Engineered fullstack client and server features for web applications using the MERN stack, participating in testing, debugging, and continuous usability refinements.",
    responsibilities: [
      "Designed and developed responsive web applications with React.js, Node.js, and Tailwind CSS, ensuring smooth cross-device functionality.",
      "Collaborated in cross-functional team environments to implement front-end and back-end features aligned with project specifications.",
      "Identified, debugged, and resolved runtime bottlenecks and component regressions through structured testing cycles.",
      "Refined website usability, interactive states, and component accessibility based on stakeholder and user feedback.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Postman",
      "Git & GitHub",
    ],
  },
  {
    id: "syasans-career-analytics",
    title: "Web Developer",
    roleType: "Internship",
    company: "Syasan’s Career Analytics",
    period: "June 2024 – Sep 2024",
    dateTime: "2024-06/2024-09",
    duration: "4 mos",
    domain: "Client Analytics & Responsive Web Platforms",
    status: "Completed",
    summary: "Built and maintained responsive web platforms for career analytics, optimizing front-end performance, integrating client-facing features, and assisting in deployment workflows.",
    responsibilities: [
      "Developed and maintained responsive web layouts, ensuring fast page load speeds, clean typography, and consistent mobile experiences.",
      "Collaborated with developers and analysts to build dynamic user-facing features and integrate backend services.",
      "Conducted thorough testing and manual QA verification to debug visual defects and ensure cross-browser compatibility.",
      "Contributed to enhancing user experience and platform functionality in alignment with client business objectives.",
    ],
    technologies: [
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Responsive Layouts",
      "API Integration",
      "Testing & Debugging",
      "Git Workflow",
    ],
  },
];

const Experience = ({ sectionsRef }) => {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (sectionsRef && sectionsRef.current) {
      if (!sectionsRef.current.includes(sectionRef.current)) {
        sectionsRef.current.push(sectionRef.current);
      }
    }
  }, [sectionsRef]);

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      role="region"
      aria-label="Professional Experience & Career Timeline"
      className="relative py-24 sm:py-32 bg-canvas overflow-hidden border-t border-border-subtle"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div 
        className="absolute top-1/3 right-10 w-[420px] h-[420px] rounded-full bg-accent-mint/5 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle text-xs font-mono text-accent-mint">
            <Terminal size={12} />
            <span>WORK HISTORY // CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Experience.
          </h2>
          <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
            A chronological timeline of practical engineering internships, fullstack feature deliveries, and collaborative web platform development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Technical Spine - Aligned precisely with timeline nodes */}
          <div 
            className="absolute left-4 sm:left-8 top-6 bottom-6 w-px bg-gradient-to-b from-accent-mint/70 via-border-subtle to-transparent" 
            aria-hidden="true" 
          />

          <motion.div 
            className="space-y-10 sm:space-y-14"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {experiences.map((exp, idx) => {
              const isLatest = idx === 0;

              return (
                <motion.article
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-10 sm:pl-16 md:pl-20 group"
                  aria-labelledby={`exp-title-${exp.id}`}
                >
                  {/* Timeline Node Icon - Accurately centered on spine (left-4 on mobile, left-8 on sm+) */}
                  <div 
                    className="absolute left-4 sm:left-8 top-6 sm:top-7 -translate-x-1/2 flex items-center justify-center z-10"
                    aria-hidden="true"
                  >
                    {isLatest ? (
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-6 h-6 rounded-full bg-accent-mint/20 animate-ping motion-reduce:hidden" />
                        <span className="relative w-4 h-4 rounded-full bg-accent-mint border-2 border-canvas shadow-glow-subtle" />
                      </div>
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full bg-surface-elevated border-2 border-border-subtle group-hover:border-accent-mint/60 transition-colors" />
                    )}
                  </div>

                  {/* Dossier Card */}
                  <div className="rounded-2xl bg-surface-card border border-border-subtle hover:border-accent-mint/30 transition-all duration-300 p-5 sm:p-7 md:p-8 shadow-card-elevated">
                    
                    {/* Header: Title, Company, Date, and Badges */}
                    <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 pb-4 border-b border-border-subtle/80">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 
                            id={`exp-title-${exp.id}`}
                            className="text-lg sm:text-xl font-bold text-white tracking-tight"
                          >
                            {exp.title}
                          </h3>
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-content-secondary">
                            {exp.roleType}
                          </span>
                          {isLatest && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-mint/10 border border-accent-mint/30 text-accent-mint font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-mint" />
                              LATEST
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-mono text-accent-mint">
                          <Briefcase size={14} className="shrink-0" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Period & Duration */}
                      <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-content-secondary">
                        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-surface-elevated border border-border-subtle">
                          <Calendar size={13} className="text-accent-mint shrink-0" />
                          <time dateTime={exp.dateTime}>{exp.period}</time>
                          <span className="text-content-muted">({exp.duration})</span>
                        </div>
                      </div>
                    </header>

                    {/* Domain & Scope Strip */}
                    <div className="pt-3 pb-4 text-xs font-mono text-content-muted flex flex-wrap items-center gap-2">
                      <span className="text-content-secondary font-medium">Domain:</span>
                      <span>{exp.domain}</span>
                    </div>

                    {/* Concise Summary */}
                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed pb-4">
                      {exp.summary}
                    </p>

                    {/* Key Contributions & Deliverables */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-mono text-accent-mint uppercase tracking-wider">
                        Key Responsibilities & Deliveries
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-content-secondary">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 
                              size={15} 
                              className="text-accent-mint/70 shrink-0 mt-0.5" 
                              aria-hidden="true" 
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Verified Tech Stack Chips */}
                    <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-border-subtle/50">
                      <div className="text-[11px] font-mono text-content-muted mb-2.5 flex items-center gap-1.5">
                        <Layers size={13} className="text-accent-mint shrink-0" />
                        <span>VERIFIED TOOLCHAIN & TECHNOLOGIES</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-elevated border border-border-subtle text-content-secondary hover:text-white hover:border-accent-mint/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Engineering Work Standards Banner */}
        <div className="mt-14 sm:mt-18 rounded-2xl bg-surface-card border border-border-subtle p-6 sm:p-7 shadow-card-elevated">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-mint">
              <GitBranch size={14} className="shrink-0" />
              <span className="uppercase tracking-wider">Professional Engineering Practices</span>
            </div>
            <span className="text-[11px] font-mono text-content-muted">
              Established Standards Across Development Roles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-surface-elevated border border-border-subtle space-y-1.5">
              <span className="text-[10px] font-mono text-accent-mint font-semibold">01 // CODE INTEGRITY</span>
              <h4 className="text-xs font-bold text-white">Fullstack Architecture</h4>
              <p className="text-[11px] text-content-secondary leading-relaxed">
                Writing clean, modular React components and secure Node/Express routes with structured error handling.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-border-subtle space-y-1.5">
              <span className="text-[10px] font-mono text-accent-mint font-semibold">02 // VERIFICATION</span>
              <h4 className="text-xs font-bold text-white">Testing & Quality Assurance</h4>
              <p className="text-[11px] text-content-secondary leading-relaxed">
                Postman endpoint validation, cross-browser responsiveness checks, and manual QA before committing code.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-border-subtle space-y-1.5">
              <span className="text-[10px] font-mono text-accent-mint font-semibold">03 // COLLABORATION</span>
              <h4 className="text-xs font-bold text-white">Teamwork & Delivery</h4>
              <p className="text-[11px] text-content-secondary leading-relaxed">
                Clear Git commit hygiene, open pull requests, and adapting promptly to client feedback and specifications.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

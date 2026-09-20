import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Trophy, 
  Terminal, 
  Code2, 
  Layers, 
  Compass, 
  CheckCircle2 
} from "lucide-react";

const engineeringPrinciples = [
  {
    title: "Component-Driven Architecture",
    description: "Building modular, reusable user interfaces with strict separation of concerns, accessible markup, and predictable state management.",
    icon: Code2,
  },
  {
    title: "Robust APIs & Data Integrity",
    description: "Designing structured RESTful services, secure authentication workflows, and scalable database schemas across MongoDB and SQL.",
    icon: Layers,
  },
  {
    title: "Performance & Pragmatism",
    description: "Prioritizing 60fps responsiveness, minimal bundle sizes, and maintainable code over unnecessary complexity or hype.",
    icon: CheckCircle2,
  },
];

const achievements = [
  { event: "CODE-FEST ’25", result: "Winner", type: "International Hackathon" },
  { event: "HACKERA ’25", result: "Winner", type: "National Hackathon" },
  { event: "HACKINDIA ’25", result: "Finalist", type: "National Hackathon" },
  { event: "HACKFEST ’24", result: "Finalist", type: "Hackathon" },
];

const About = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionsRef && sectionsRef.current) {
      if (!sectionsRef.current.includes(sectionRef.current)) {
        sectionsRef.current.push(sectionRef.current);
      }
    }
  }, [sectionsRef]);

  return (
    <section
      id="about"
      ref={sectionRef}
      role="region"
      aria-label="About Sivaprakasam T"
      className="relative py-24 sm:py-32 bg-canvas overflow-hidden border-t border-border-subtle"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div 
        className="absolute top-1/4 right-10 w-[400px] h-[400px] rounded-full bg-accent-mint/5 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle text-xs font-mono text-accent-mint">
            <Terminal size={12} />
            <span>PROFILE // BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Identity & Approach.
          </h2>
          <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
            A background grounded in engineering fundamentals, fullstack web development, and continuous practical delivery through real-world applications.
          </p>
        </div>

        {/* Two-Column Grid: Narrative Dossier & Technical Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Core Bio Panel */}
            <div className="rounded-2xl bg-surface-card border border-border-subtle p-6 sm:p-8 space-y-4 shadow-card-elevated">
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                <span className="text-xs font-mono text-accent-mint uppercase tracking-wider">
                  Personal Overview
                </span>
                <span className="text-[11px] font-mono text-content-muted">
                  Chennai, India
                </span>
              </div>

              <div className="space-y-3 text-content-secondary text-sm sm:text-base leading-relaxed">
                <p>
                  I’m <span className="text-white font-medium">Sivaprakasam T</span>, a Fullstack Developer 
                  pursuing my Bachelor of Engineering in Electronics and Communication Engineering at 
                  <span className="text-white font-medium"> St. Joseph’s Institute of Technology</span> (2022–2026).
                </p>
                <p>
                  My engineering focus centers on building reliable fullstack applications with the MERN stack 
                  (MongoDB, Express.js, React, Node.js). Through hands-on internships at 
                  <span className="text-white font-medium"> Skill First Labs</span> and 
                  <span className="text-white font-medium"> Syasan’s Career Analytics</span>, I have engineered 
                  responsive user interfaces, integrated RESTful APIs, and maintained client-focused production workflows.
                </p>
                <p>
                  I enjoy solving practical engineering challenges—from deploying high-traffic symposium platforms 
                  to building WebAR applications that project interactive 3D models onto restaurant tables.
                </p>
              </div>
            </div>

            {/* Core Principles */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Compass size={18} className="text-accent-mint" />
                <span>Core Engineering Principles</span>
              </h3>

              <div className="grid grid-cols-1 gap-3.5">
                {engineeringPrinciples.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-surface-card border border-border-subtle hover:border-accent-mint/30 transition-colors flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-lg bg-surface-elevated border border-border-subtle text-accent-mint shrink-0 mt-0.5">
                        <Icon size={18} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Structured Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Academic Background */}
            <div className="rounded-2xl bg-surface-card border border-border-subtle p-6 space-y-4 shadow-card-elevated">
              <div className="flex items-center gap-2.5 text-accent-mint pb-3 border-b border-border-subtle">
                <GraduationCap size={18} />
                <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider">
                  Academic Foundation
                </h3>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-accent-mint">
                  B.E. — Electronics & Communication Engineering
                </div>
                <div className="text-sm font-semibold text-white">
                  St. Joseph’s Institute of Technology
                </div>
                <div className="text-xs text-content-secondary/90 font-mono">
                  OMR, Chennai • 2022 – 2026
                </div>
                <p className="text-xs text-content-secondary leading-relaxed pt-2 border-t border-border-subtle/50">
                  Focusing on core engineering fundamentals, software systems, algorithms, and applied web technologies.
                </p>
              </div>
            </div>

            {/* Card 2: Hackathon & Competitive Track Record */}
            <div className="rounded-2xl bg-surface-card border border-border-subtle p-6 space-y-4 shadow-card-elevated">
              <div className="flex items-center gap-2.5 text-accent-mint pb-3 border-b border-border-subtle">
                <Trophy size={18} />
                <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider">
                  Verified Honors & Hackathons
                </h3>
              </div>

              <p className="text-xs text-content-secondary leading-relaxed">
                Tested problem solving, product prototyping, and rapid team delivery:
              </p>

              <div className="space-y-2">
                {achievements.map((a, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-surface-elevated border border-border-subtle text-xs font-mono"
                  >
                    <div>
                      <span className="text-white font-medium">{a.event}</span>
                      <span className="text-content-secondary/80 block text-[11px]">{a.type}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      a.result === "Winner"
                        ? "bg-accent-muted text-accent-mint border border-accent-mint/30"
                        : "bg-surface-card text-content-secondary border border-border-subtle"
                    }`}>
                      {a.result}
                    </span>
                  </div>
                ))}
              </div>

              {/* Verified Patent Publication */}
              <div className="pt-3 border-t border-border-subtle/60 text-xs font-mono">
                <div className="text-[11px] text-accent-mint uppercase tracking-wider mb-1">
                  Patent Publication
                </div>
                <div className="text-content-primary text-xs font-medium">
                  AI-Driven Smart Water Bottle System
                </div>
                <div className="text-[11px] text-content-secondary/80">
                  App No: 202541032502 • Published 2025
                </div>
              </div>
            </div>

            {/* Card 3: Current Technical Direction */}
            <div className="rounded-2xl bg-surface-card border border-border-subtle p-6 space-y-3 shadow-card-elevated">
              <div className="text-xs font-mono text-accent-mint uppercase tracking-wider">
                Current Focus & Availability
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                Building scalable fullstack web systems, integrating cloud backends, and refining component architectures. Actively open to fullstack developer roles and software engineering opportunities.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-content-primary border border-border-subtle">
                  Fullstack MERN
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-content-primary border border-border-subtle">
                  RESTful APIs
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-elevated text-content-primary border border-border-subtle">
                  WebAR / 3D
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
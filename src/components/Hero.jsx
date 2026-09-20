import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  FileText, 
  Terminal, 
  ArrowUpRight,
  Code2
} from "lucide-react";

const Hero = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionsRef && sectionsRef.current) {
      if (!sectionsRef.current.includes(sectionRef.current)) {
        sectionsRef.current.push(sectionRef.current);
      }
    }
  }, [sectionsRef]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen pt-28 pb-16 md:py-32 flex items-center justify-center overflow-hidden bg-canvas"
    >
      {/* Subtle Technical Coordinate Grid Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" aria-hidden="true" />

      {/* Ambient Radial Mint Illumination */}
      <div 
        className="absolute top-1/4 right-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-accent-mint/5 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] rounded-full bg-surface-elevated/40 blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Column: Core Identity & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Verified Engineering Status Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-card border border-border-subtle text-xs font-mono shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-mint opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-mint" />
                </span>
                <span className="text-content-secondary">
                  Fullstack Developer • MERN Stack
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Building scalable web systems with{" "}
                <span className="mint-gradient-text">precision</span> & craft.
              </h1>
            </motion.div>

            {/* Authentic Supporting Narrative */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-content-secondary max-w-xl leading-relaxed"
            >
              Hi, I’m <span className="text-white font-medium">Sivaprakasam T</span>. A Fullstack 
              Developer focused on creating responsive, reliable web applications with React, Node.js, 
              Express, and modern fullstack tooling.
            </motion.p>

            {/* Action Buttons (CTAs) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary CTA: Explore Projects */}
              <button
                type="button"
                onClick={() => handleScrollTo("projects")}
                aria-label="Explore Sivaprakasam's featured projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-mint text-canvas-dark font-mono font-semibold text-sm hover:bg-accent-emerald transition-all duration-200 shadow-glow-subtle hover:shadow-glow-mint transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </button>

              {/* Secondary CTA: Resume */}
              <a
                href="/Sivaprakasam_T.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Open Sivaprakasam T's Resume"
                aria-label="View Sivaprakasam's resume PDF in a new tab"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-card hover:bg-surface-elevated border border-border-subtle hover:border-accent-mint/40 text-content-primary hover:text-accent-mint font-mono text-sm transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
              >
                <FileText size={16} className="text-accent-mint" />
                <span>Resume</span>
                <ArrowUpRight size={14} className="opacity-60" />
              </a>

              {/* Tertiary CTA: Contact */}
              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                aria-label="Navigate to Contact section"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-content-secondary hover:text-white font-mono text-sm hover:bg-surface-card/60 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
              >
                <span>Get in touch</span>
              </button>
            </motion.div>

            {/* Verified Coordinates */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4 border-t border-border-subtle/80 w-full"
            >
              <span className="text-xs font-mono text-content-muted">Coordinates:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/sivaprakasam-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (@sivaprakasam-07)"
                  title="GitHub Profile (@sivaprakasam-07)"
                  className="p-2 rounded-lg bg-surface-card border border-border-subtle text-content-secondary hover:text-white hover:border-accent-mint/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sivaprakasam-coder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (sivaprakasam-coder)"
                  title="LinkedIn Profile (sivaprakasam-coder)"
                  className="p-2 rounded-lg bg-surface-card border border-border-subtle text-content-secondary hover:text-white hover:border-accent-mint/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:tamilmanisivaprakasam5@gmail.com"
                  aria-label="Send email to tamilmanisivaprakasam5@gmail.com"
                  title="Email: tamilmanisivaprakasam5@gmail.com"
                  className="p-2 rounded-lg bg-surface-card border border-border-subtle text-content-secondary hover:text-white hover:border-accent-mint/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Terminal Command Center / System Overview (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative rounded-2xl bg-surface-card/95 border border-border-subtle backdrop-blur-xl shadow-card-elevated overflow-hidden group hover:border-accent-mint/30 transition-colors duration-300">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-surface-elevated/80 border-b border-border-subtle">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-content-muted">
                  <Terminal size={12} className="text-accent-mint" />
                  <span>siva@workspace:~</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-card border border-border-subtle text-accent-mint">
                  git:(main)
                </span>
              </div>

              {/* Terminal Body Content */}
              <div className="p-5 font-mono text-xs space-y-3.5 leading-relaxed break-words">
                {/* Command line */}
                <div className="flex items-center gap-2 text-content-muted pb-2 border-b border-border-subtle/50">
                  <span className="text-accent-mint">$</span>
                  <span className="text-content-primary">cat developer_profile.json</span>
                </div>

                {/* Structured JSON Output */}
                <div className="space-y-1 text-content-secondary pl-1">
                  <div>
                    <span className="text-content-muted">"name":</span>{" "}
                    <span className="text-white">"Sivaprakasam T"</span>,
                  </div>
                  <div>
                    <span className="text-content-muted">"role":</span>{" "}
                    <span className="text-accent-mint font-semibold">"Fullstack Developer"</span>,
                  </div>
                  <div>
                    <span className="text-content-muted">"specialization":</span>{" "}
                    <span className="text-white">"MERN Stack Applications"</span>,
                  </div>
                  <div>
                    <span className="text-content-muted">"core_stack":</span> [
                    <div className="pl-3 text-content-primary flex flex-wrap gap-1.5 py-1.5">
                      <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[11px]">React</span>
                      <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[11px]">Node.js</span>
                      <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[11px]">Express</span>
                      <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[11px]">MongoDB</span>
                      <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[11px]">TailwindCSS</span>
                    </div>
                    ],
                  </div>
                  <div>
                    <span className="text-content-muted">"status":</span>{" "}
                    <span className="text-accent-mint">"Available for Opportunities"</span>
                  </div>
                </div>

                {/* Grounded Engineering Telemetry Snippet */}
                <div className="pt-3 border-t border-border-subtle/60 flex items-center justify-between text-[11px] text-content-muted">
                  <span className="flex items-center gap-1.5 text-content-secondary">
                    <Code2 size={13} className="text-accent-mint" />
                    <span>MERN Ecosystem</span>
                  </span>
                  <span className="text-accent-mint font-mono text-[10px] px-1.5 py-0.5 rounded bg-accent-muted border border-accent-mint/20">
                    READY
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden md:flex justify-center mt-14"
        >
          <button
            type="button"
            onClick={() => handleScrollTo("about")}
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-2 text-content-muted hover:text-accent-mint transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint rounded-lg p-1"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-border-subtle group-hover:border-accent-mint/50 flex items-start justify-center p-1 transition-colors">
              <div className="w-1 h-1.5 rounded-full bg-accent-mint motion-safe:animate-bounce" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

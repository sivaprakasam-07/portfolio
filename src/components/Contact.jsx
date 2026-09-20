import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Terminal, 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  FileText, 
  MapPin, 
  Check, 
  Copy, 
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const EMAIL_ADDRESS = "tamilmanisivaprakasam5@gmail.com";
const GITHUB_URL = "https://github.com/sivaprakasam-07";
const LINKEDIN_URL = "https://www.linkedin.com/in/sivaprakasam-coder/";
const RESUME_URL = "/Sivaprakasam_T.pdf";

const Contact = ({ sectionsRef }) => {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (sectionsRef && sectionsRef.current) {
      if (!sectionsRef.current.includes(sectionRef.current)) {
        sectionsRef.current.push(sectionRef.current);
      }
    }
  }, [sectionsRef]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopiedEmail(true);
      toast.success('Email copied to clipboard!');
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      toast.error('Unable to copy email automatically.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submissionStatus) {
      setSubmissionStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await emailjs.send(
        'service_y1gnv2u',
        'template_jwhy6ns',
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
        'xkgZSVdJepB1yAoap'
      );

      if (response.status === 200 || response.text === 'OK') {
        toast.success('Message transmitted successfully!');
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Unexpected status response from EmailJS');
      }
    } catch (err) {
      console.error('Email transmission error:', err);
      toast.error('Failed to send message. Please try emailing directly.');
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      role="region"
      aria-label="Contact & Collaboration Console"
      className="relative py-24 sm:py-32 bg-canvas overflow-hidden border-t border-border-subtle"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div 
        className="absolute bottom-10 left-1/4 w-[460px] h-[460px] rounded-full bg-accent-mint/5 blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-subtle text-xs font-mono text-accent-mint">
            <Terminal size={12} />
            <span>COMMUNICATION // INITIALIZE CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Together.
          </h2>
          <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
            Whether you are considering me for fullstack engineering roles, technical internships, or project collaborations, my inbox is always open.
          </p>
        </div>

        {/* 2-Column Responsive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Coordinates & Profile Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status & Availability Card */}
            <div className="rounded-2xl bg-surface-card border border-border-subtle p-6 sm:p-7 shadow-card-elevated space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
                <span className="text-xs font-mono text-content-muted uppercase tracking-wider">
                  DISPATCH CONSOLE
                </span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-mint/10 border border-accent-mint/30 text-[11px] font-mono text-accent-mint">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" />
                  AVAILABLE
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Sivaprakasam T
                </h3>
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  Fullstack developer focused on robust MERN web applications, REST APIs, and interactive digital interfaces. Open to full-time engineering roles and collaborative projects.
                </p>
              </div>

              {/* Verified Coordinate Chips */}
              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-border-subtle">
                  <div className="flex items-center gap-2.5 text-content-secondary">
                    <MapPin size={15} className="text-accent-mint shrink-0" />
                    <span>Location</span>
                  </div>
                  <span className="text-white font-medium">Chennai, India</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-border-subtle">
                  <div className="flex items-center gap-2.5 text-content-secondary">
                    <Mail size={15} className="text-accent-mint shrink-0" />
                    <span className="hidden sm:inline">Direct Email</span>
                    <span className="sm:hidden">Email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="text-white hover:text-accent-mint transition-colors truncate max-w-[170px] sm:max-w-none text-right"
                      title={EMAIL_ADDRESS}
                    >
                      {EMAIL_ADDRESS}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address to clipboard"
                      className="p-1 rounded-md text-content-muted hover:text-white hover:bg-surface-card transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                    >
                      {copiedEmail ? <Check size={14} className="text-accent-mint" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* External Professional Channels */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-border-subtle hover:border-accent-mint/40 hover:bg-surface-elevated/80 transition-all text-xs font-mono text-content-secondary hover:text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                >
                  <div className="flex items-center gap-2.5">
                    <Github size={16} className="text-white group-hover:text-accent-mint transition-colors" />
                    <span>github.com/sivaprakasam-07</span>
                  </div>
                  <span className="text-content-muted group-hover:text-accent-mint transition-colors">↗</span>
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-border-subtle hover:border-accent-mint/40 hover:bg-surface-elevated/80 transition-all text-xs font-mono text-content-secondary hover:text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin size={16} className="text-[#0A66C2] group-hover:text-accent-mint transition-colors" />
                    <span>linkedin.com/in/sivaprakasam-coder</span>
                  </div>
                  <span className="text-content-muted group-hover:text-accent-mint transition-colors">↗</span>
                </a>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-accent-muted/20 border border-accent-mint/30 hover:border-accent-mint hover:bg-accent-muted/30 transition-all text-xs font-mono text-accent-mint group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText size={16} />
                    <span className="font-semibold">View Verified Resume (PDF)</span>
                  </div>
                  <span>↓</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-surface-card border border-border-subtle shadow-card-elevated overflow-hidden">
              
              {/* Terminal Window Header Bar */}
              <div className="px-5 sm:px-6 py-3.5 bg-surface-elevated border-b border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" aria-hidden="true" />
                  <span className="ml-2 text-xs font-mono text-content-muted hidden sm:inline">
                    inquiry_console.sh — Secure Transmission Protocol
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-accent-mint">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-mint" />
                  <span>EMAILJS RELAY ACTIVE</span>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8">
                {submissionStatus === 'success' && (
                  <div 
                    role="alert" 
                    className="mb-6 p-4 rounded-xl bg-accent-muted/30 border border-accent-mint/50 flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-accent-mint shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-bold text-accent-mint uppercase">
                        Transmission Acknowledged
                      </h4>
                      <p className="text-xs text-content-secondary leading-relaxed">
                        Your message has been dispatched to my inbox. I will review your inquiry and follow up promptly.
                      </p>
                    </div>
                  </div>
                )}

                {submissionStatus === 'error' && (
                  <div 
                    role="alert" 
                    className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3"
                  >
                    <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-bold text-red-400 uppercase">
                        Transmission Failed
                      </h4>
                      <p className="text-xs text-content-secondary leading-relaxed">
                        An error occurred while sending the message. Please contact me directly at{' '}
                        <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white underline">
                          {EMAIL_ADDRESS}
                        </a>.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-content-secondary"
                      >
                        FULL NAME <span className="text-accent-mint">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                        disabled={isSubmitting}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle text-white text-sm placeholder-content-muted/60 focus:outline-none focus:border-accent-mint focus:ring-1 focus:ring-accent-mint transition-colors disabled:opacity-60"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-content-secondary"
                      >
                        EMAIL ADDRESS <span className="text-accent-mint">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        disabled={isSubmitting}
                        placeholder="ada@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle text-white text-sm placeholder-content-muted/60 focus:outline-none focus:border-accent-mint focus:ring-1 focus:ring-accent-mint transition-colors disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-content-secondary"
                    >
                      MESSAGE SPECIFICATION <span className="text-accent-mint">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Hi Sivaprakasam, I came across your portfolio and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle text-white text-sm placeholder-content-muted/60 focus:outline-none focus:border-accent-mint focus:ring-1 focus:ring-accent-mint transition-colors disabled:opacity-60 resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-[11px] font-mono text-content-muted">
                      Direct EmailJS routing • Zero tracking
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent-mint text-canvas-dark font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-accent-emerald hover:shadow-glow-subtle transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>SEND INQUIRY</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Dark Styled Toaster for Consistent UI */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#11151B',
            color: '#F8FAFC',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
          },
        }}
      />
    </section>
  );
};

export default Contact;

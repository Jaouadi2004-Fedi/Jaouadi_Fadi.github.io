import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaTerminal,
  FaMapMarkerAlt, FaArrowUp, FaCode,
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FaGithub />, href: personalInfo.github, label: 'GitHub', sub: 'See my code', color: '#e2e8f0' },
  { icon: <FaLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn', sub: 'Connect with me', color: '#0a66c2' },
  { icon: <FaEnvelope />, href: `mailto:${personalInfo.email}`, label: 'Email', sub: personalInfo.email, color: '#00f5ff' },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const scrollTo = (href) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative overflow-hidden w-full">

      {/* Top gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/25 to-transparent w-full" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center bottom, rgba(0,245,255,0.04) 0%, transparent 70%)' }}
      />

      {/* ════════════════════════════════════
          CTA HIRING BANNER  (full-width bg)
          ════════════════════════════════════ */}
      <div
        className="w-full border-b border-white/5"
        style={{ background: 'linear-gradient(135deg, rgba(0,245,255,0.05) 0%, rgba(123,47,255,0.05) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14
                        flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-mono-tech text-[10px] text-neon-cyan tracking-[0.25em] mb-2 uppercase">
              Available for opportunities
            </div>
            <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white leading-tight">
              Let's build something <span className="neon-text-cyan">great together</span>
            </h3>
            <p className="font-rajdhani text-slate-400 text-base mt-2.5 max-w-md">
              Open to full-time roles, freelance projects, and exciting collaborations.
              I respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary flex items-center gap-2"
              style={{ fontSize: '0.7rem', letterSpacing: '0.12em', padding: '0.9rem 1.75rem' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaEnvelope />
              HIRE ME
            </motion.a>
            <motion.button
              onClick={copyEmail}
              className="flex items-center gap-2 font-orbitron text-[10px] tracking-widest px-5 py-3.5 rounded-lg border border-neon-cyan/30 text-neon-cyan transition-all duration-300"
              style={{ background: copied ? 'rgba(0,245,255,0.1)' : 'transparent' }}
              whileHover={{ scale: 1.04, background: 'rgba(0,245,255,0.07)' }}
              whileTap={{ scale: 0.97 }}
            >
              {copied ? '✓ COPIED!' : 'COPY EMAIL'}
            </motion.button>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          MAIN 3-COLUMN BODY
          ════════════════════════════════════ */}
      <div className="w-full" style={{ background: 'rgba(5,8,22,0.97)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

            {/* Col 1 — Identity */}
            <div>
              <div className="flex items-center gap-3 mb-8 h-10">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg"
                  style={{ border: '1.5px solid rgba(0,245,255,0.4)', background: 'rgba(0,245,255,0.06)' }}
                >
                  <FaTerminal className="text-neon-cyan text-sm" />
                </div>
                <div>
                  <span className="font-orbitron font-bold text-base neon-text-cyan tracking-widest">JF</span>
                  <p className="font-mono-tech text-[9px] text-slate-500 tracking-[0.25em]">PORTFOLIO</p>
                </div>
              </div>
              <p className="font-rajdhani text-slate-400 text-sm leading-relaxed mb-6">
                Full-Stack Developer passionate about crafting modern, scalable web experiences
                with clean code, pixel-perfect UI, and AI-powered features.
              </p>
              <div className="flex items-center gap-2 mb-2.5 font-mono-tech text-xs text-slate-500">
                <FaMapMarkerAlt className="text-neon-cyan text-xs" />
                Tunisia — Open to Remote
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono-tech text-xs text-green-400">AVAILABLE FOR WORK</span>
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <div className="h-10 flex items-center mb-8">
                <p className="font-mono-tech text-[10px] text-slate-500 tracking-[0.25em] uppercase">Navigation</p>
              </div>
              <nav className="grid grid-cols-2 gap-x-6 gap-y-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="text-left font-rajdhani text-sm text-slate-400 hover:text-neon-cyan transition-colors duration-200 flex items-center gap-2 group"
                    whileHover={{ x: 3 }}
                  >
                    <span className="text-neon-purple text-xs opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Col 3 — Connect */}
            <div>
              <div className="h-10 flex items-center mb-8">
                <p className="font-mono-tech text-[10px] text-slate-500 tracking-[0.25em] uppercase">Connect</p>
              </div>
              <div className="space-y-4">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/5 group transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                    whileHover={{ background: `${s.color}10`, borderColor: `${s.color}35`, x: 4 }}
                  >
                    <span className="text-lg transition-all duration-300" style={{ color: s.color }}>
                      {s.icon}
                    </span>
                    <div>
                      <p className="font-orbitron text-xs text-slate-300 group-hover:text-white transition-colors font-semibold">
                        {s.label}
                      </p>
                      <p className="font-mono-tech text-[10px] text-slate-600 truncate">{s.sub}</p>
                    </div>
                    <span className="ml-auto text-slate-700 group-hover:text-slate-400 transition-colors text-xs">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="font-mono-tech text-xs text-slate-600 flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <FaCode className="text-neon-cyan text-xs" />
              Built with React.js + Firebase + Tailwind CSS
              <span className="text-slate-700 hidden sm:inline">·</span>
              <span>© {new Date().getFullYear()} <span className="text-neon-cyan">Jaouadi Fadi</span></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-[10px] text-slate-700">v1.0.0</span>
              <motion.button
                onClick={scrollTop}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-neon-cyan/20 text-neon-cyan/50 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: '0 0 14px rgba(0,245,255,0.25)' }}
                whileTap={{ scale: 0.95 }}
                title="Back to top"
              >
                <FaArrowUp className="text-xs" />
              </motion.button>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;

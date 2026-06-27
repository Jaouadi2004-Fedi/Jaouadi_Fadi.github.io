import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-dark-bg/95 backdrop-blur-2xl border-b border-neon-cyan/20 shadow-xl shadow-black/40'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo ── */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.04 }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300"
                style={{
                  border: '1.5px solid rgba(0,245,255,0.5)',
                  background: 'rgba(0,245,255,0.06)',
                  boxShadow: 'inset 0 0 12px rgba(0,245,255,0.08)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 18px rgba(0,245,255,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'inset 0 0 12px rgba(0,245,255,0.08)'; }}
              >
                <FaTerminal className="text-neon-cyan text-base" />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-orbitron font-bold text-base neon-text-cyan tracking-widest">JF</span>
                <span className="font-mono-tech text-[9px] text-slate-500 tracking-[0.25em] mt-0.5">PORTFOLIO</span>
              </div>
            </motion.a>

            {/* ── Desktop links ── */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = active === id;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="relative px-4 py-2.5 font-orbitron font-semibold text-[11px] tracking-[0.12em] uppercase transition-colors duration-200"
                    style={{ color: isActive ? '#00f5ff' : '#94a3b8' }}
                    whileHover={{ y: -1 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-md"
                        style={{
                          background: 'rgba(0,245,255,0.07)',
                          border: '1px solid rgba(0,245,255,0.35)',
                          boxShadow: '0 0 12px rgba(0,245,255,0.12)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* ── CTA + Hamburger ── */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="hidden sm:inline-flex items-center gap-2 font-orbitron font-bold text-[10px] tracking-[0.14em] text-neon-cyan uppercase px-5 py-2.5 rounded-lg transition-all duration-300"
                style={{
                  border: '1.5px solid rgba(0,245,255,0.55)',
                  background: 'rgba(0,245,255,0.05)',
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 0 22px rgba(0,245,255,0.35)',
                  background: 'rgba(0,245,255,0.1)',
                }}
                whileTap={{ scale: 0.96 }}
              >
                HIRE ME
              </motion.a>

              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-neon-cyan transition-all duration-300"
                style={{ border: '1.5px solid rgba(0,245,255,0.35)' }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {menuOpen
                    ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><FaTimes /></motion.span>
                    : <motion.span key="bars" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><FaBars /></motion.span>
                  }
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-4/5 max-w-[320px] z-50 md:hidden flex flex-col"
              style={{
                background: 'rgba(5, 8, 22, 0.98)',
                borderLeft: '1px solid rgba(0,245,255,0.2)',
                backdropFilter: 'blur(24px)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <FaTerminal className="text-neon-cyan text-sm" />
                  <span className="font-orbitron font-bold text-sm text-neon-cyan tracking-widest">JF</span>
                </div>
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-neon-cyan/30 text-neon-cyan"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 px-4 pt-6 flex-1 overflow-y-auto">
                <p className="font-mono-tech text-[9px] text-slate-600 tracking-[0.3em] uppercase px-3 mb-2">Navigation</p>
                {navLinks.map((link, i) => {
                  const id = link.href.replace('#', '');
                  const isActive = active === id;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-xl font-orbitron font-semibold text-sm tracking-wider transition-all duration-200"
                      style={{
                        color: isActive ? '#00f5ff' : '#94a3b8',
                        background: isActive ? 'rgba(0,245,255,0.07)' : 'transparent',
                        border: isActive ? '1px solid rgba(0,245,255,0.25)' : '1px solid transparent',
                      }}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <span
                        className="font-mono-tech text-[10px] w-5 text-center"
                        style={{ color: isActive ? '#00f5ff' : '#475569' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="px-6 py-6 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  className="btn-primary block text-center w-full"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}
                >
                  HIRE ME
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

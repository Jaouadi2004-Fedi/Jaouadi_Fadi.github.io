import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolioData';
import profilePhoto from '../assets/Fedi.png';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7b2fff 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="font-mono-tech text-neon-cyan text-sm tracking-widest mb-3">
            &gt; {t('about.terminal')}
          </div><br />
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold section-title text-white">
            {t('about.title')} <span className="neon-text-cyan">{t('about.titleSpan')}</span>
          </h2><br />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Avatar + Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden relative"
                style={{
                  border: '2px solid rgba(0, 245, 255, 0.4)',
                  boxShadow: '0 0 30px rgba(0, 245, 255, 0.2), 0 0 60px rgba(123, 47, 255, 0.1)',
                }}
              >
                {/* Profile photo */}
                <img
                  src={profilePhoto}
                  alt="Jaouadi Fadi"
                  className="w-full h-full object-cover object-top absolute inset-0"
                />
                {/* Fallback avatar - shown only if image fails to load */}
                <div
                  className="w-full h-full items-center justify-center grid-bg"
                  style={{
                    display: 'none',
                    background: 'linear-gradient(135deg, #0d1224 0%, #1a0533 100%)',
                  }}
                >
                  <div className="text-center">
                    <div className="font-orbitron text-6xl font-black neon-text-cyan mb-2">JF</div>
                    <div className="font-mono-tech text-xs text-neon-purple tracking-widest">DEV</div>
                  </div>
                </div>
                {/* Scan effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 0%, rgba(0,245,255,0.05) 50%, transparent 100%)',
                    animation: 'scan 3s linear infinite',
                  }}
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/40 bg-dark-card text-xs font-mono-tech text-green-400 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t('about.openToWork')}
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3 w-full max-w-sm">
              {[
                { icon: <FaMapMarkerAlt />, label: t('about.location'), value: 'Tunisia' },
                { icon: <FaEnvelope />, label: t('about.email'), value: 'jawedifadi@gmail.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-neon-cyan">{item.icon}</span>
                  <span className="text-slate-500 font-orbitron text-xs">{item.label}:</span>
                  <span className="text-slate-300">{item.value}</span>
                </div>
              ))}

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {[
                  { icon: <FaGithub />, href: personalInfo.github, label: 'GitHub' },
                  { icon: <FaLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn' },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-orbitron border border-dark-border rounded text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {s.icon} {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio card */}
            <div className="glass-card corner-bracket relative rounded-xl p-6 space-y-4">
              <div className="font-orbitron text-xs text-neon-purple tracking-widest mb-2"><br />
                {t('about.bioPrefix')}
              </div><br />
              <p className="text-slate-300 leading-relaxed text-base">
                {t('about.bio1')}{' '}
                <span className="text-neon-purple font-semibold">
                  Licence en Technologies Informatiques (Mention Très Bien)
                </span>
                {t('about.bio1End')}{' '}
                <span className="text-neon-cyan">React.js</span>,{' '}
                <span className="text-neon-cyan">Java Spring Boot</span>{t('about.bio1Tail')}
              </p><br />
              <p className="text-slate-400 leading-relaxed text-base">
                {t('about.bio2')}{' '}
                <span className="text-neon-pink">DevNet</span>,{' '}
                <span className="text-neon-pink">S2IT Innovation Service</span>{t('about.bio2Mid')}{' '}
                <span className="text-neon-pink">Radio Nationale Tunisienne</span>.
              </p><br />
            </div><br />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => {
                const statLabel = t('stats.' + stat.id);
                const colorKeys = ['cyan', 'purple', 'pink', 'green'];
                const color = colorKeys[i % colorKeys.length];
                const styles = {
                  cyan: { text: '#00f5ff', border: 'rgba(0,245,255,0.3)', bg: 'rgba(0,245,255,0.05)' },
                  purple: { text: '#7b2fff', border: 'rgba(123,47,255,0.3)', bg: 'rgba(123,47,255,0.05)' },
                  pink: { text: '#ff0080', border: 'rgba(255,0,128,0.3)', bg: 'rgba(255,0,128,0.05)' },
                  green: { text: '#00ff88', border: 'rgba(0,255,136,0.3)', bg: 'rgba(0,255,136,0.05)' },
                };
                const c = styles[color];
                return (
                  <motion.div
                    key={i}
                    className="glass-card rounded-xl p-5 text-center"
                    style={{ border: `1px solid ${c.border}`, background: c.bg }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div
                      className="font-orbitron text-3xl font-black"
                      style={{ color: c.text, textShadow: `0 0 10px ${c.text}` }}
                    >
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="font-rajdhani text-xs text-slate-400 tracking-wider uppercase mt-1">
                      {statLabel}
                    </div>
                  </motion.div>
                );
              })}
            </div><br />

            {/* Degree badge */}
            <motion.div
              className="glass-card rounded-xl p-4 flex items-center gap-4"
              style={{ border: '1px solid rgba(123,47,255,0.3)' }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ background: 'rgba(123,47,255,0.15)', border: '1px solid rgba(123,47,255,0.4)' }}>
                <FaCode className="text-neon-purple text-xl" />
              </div>
              <div>
                <div className="font-orbitron text-sm text-white">Licence en Technologies Informatiques</div>
                <div className="font-rajdhani text-xs text-neon-purple mt-0.5">Mention Très Bien • 2023–2026</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div><br />
    </section>
  );
};

export default AboutSection;

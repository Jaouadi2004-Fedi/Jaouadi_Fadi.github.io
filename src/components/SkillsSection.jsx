import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiSpring, SiMysql, SiGit, SiFigma, SiSymfony, SiPhp
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { skills } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  SiReact: <SiReact />,
  SiJavascript: <SiJavascript />,
  SiHtml5: <SiHtml5 />,
  SiCss: <SiCss />,
  SiTailwindcss: <SiTailwindcss />,
  FaJava: <FaJava />,
  SiSpringboot: <SiSpring />,
  SiSymfony: <SiSymfony />,
  SiMysql: <SiMysql />,
  SiGit: <SiGit />,
  SiFigma: <SiFigma />,
  SiPhp: <SiPhp />,
};

const categoryColors = {
  Frontend: { primary: '#00f5ff', glow: 'rgba(0,245,255,0.25)' },
  Backend: { primary: '#7b2fff', glow: 'rgba(123,47,255,0.25)' },
  Database: { primary: '#ff0080', glow: 'rgba(255,0,128,0.25)' },
  Tools: { primary: '#00ff88', glow: 'rgba(0,255,136,0.25)' },
  Design: { primary: '#ffa500', glow: 'rgba(255,165,0,0.25)' },
};

const categories = ['All', ...Object.keys(categoryColors)];

const SkillCard = ({ skill, index, inView }) => {
  const [hovered, setHovered] = useState(false);
  const color = categoryColors[skill.category] || categoryColors.Frontend;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card rounded-xl p-6 group cursor-default transition-all duration-300"
      style={{
        border: hovered ? `1px solid ${color.primary}` : '1px solid rgba(255,255,255,0.06)',
        boxShadow: hovered ? `0 0 20px ${color.glow}, 0 10px 30px rgba(0,0,0,0.3)` : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}
    >
      {/* Icon + Name row */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-lg text-xl transition-all duration-300"
          style={{
            background: hovered ? `${color.glow}` : 'rgba(255,255,255,0.04)',
            border: `1px solid ${hovered ? color.primary : 'rgba(255,255,255,0.08)'}`,
            color: hovered ? color.primary : '#94a3b8',
          }}
        >
          {iconMap[skill.icon] || <FaJava />}
        </div>
        <div>
          <div className="font-orbitron text-xs text-white">{skill.name}</div>
          <div className="font-mono-tech text-xs mt-0.5" style={{ color: color.primary }}>
            {skill.level}%
          </div>
        </div>
      </div>

      {/* Skill bar */}
      <div className="h-1.5 bg-dark-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.06 + 0.3, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, ${color.primary}99, ${color.primary})`,
            boxShadow: hovered ? `0 0 8px ${color.primary}` : 'none',
          }}
        />
      </div>

      {/* Category badge */}
      <div className="mt-3 flex justify-end">
        <span
          className="font-orbitron text-xs px-2 py-0.5 rounded"
          style={{
            background: `${color.glow}`,
            color: color.primary,
            border: `1px solid ${color.primary}30`,
          }}
        >
          {skill.category}
        </span>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="font-mono-tech text-neon-purple text-sm tracking-widest mb-3">
            &gt; {t('skills.terminal')}
          </div><br /><br />
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold section-title text-white">
            {t('skills.title')} <span className="neon-text-purple">{t('skills.titleSpan')}</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto font-rajdhani text-lg">
            <br />{t('skills.subtitle')}
          </p><br />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded font-orbitron text-xs tracking-wider transition-all duration-300 ${activeCategory === cat
                ? 'bg-neon-cyan text-dark-bg shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                : 'border border-dark-border text-slate-400 hover:border-neon-cyan/50 hover:text-neon-cyan'
                }`}
            >
              {cat === 'All' ? t('skills.all') : cat}
            </button>
          ))}
        </motion.div><br /><br />

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} inView={inView} />
          ))}
        </motion.div><br /><br />

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          {Object.entries(categoryColors).map(([cat, colors]) => (
            <div key={cat} className="flex items-center gap-2 text-xs text-slate-500 font-orbitron">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: colors.primary, boxShadow: `0 0 6px ${colors.primary}` }}
              />
              {cat}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

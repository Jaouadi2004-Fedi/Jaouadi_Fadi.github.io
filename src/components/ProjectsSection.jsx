import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const ProjectModal = ({ project, onClose }) => {
  const { localized, t } = useLanguage();
  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="modal-content"
          style={{ border: `1px solid ${project.color}35` }}
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        >
          {/* Close btn */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-lg border border-dark-border text-slate-400 hover:text-neon-pink hover:border-neon-pink transition-all duration-200"
          >
            <FaTimes />
          </button>

          {/* ── Header ── */}
          <div className="modal-section flex items-start gap-5">
            <div
              className="text-4xl w-16 h-16 flex items-center justify-center rounded-2xl flex-shrink-0"
              style={{ background: `${project.color}12`, border: `1.5px solid ${project.color}40` }}
            >
              {project.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono-tech text-[10px] tracking-[0.2em] mb-1.5" style={{ color: project.color }}>
                {localized(project.category)}
              </div>
              <h3 className="font-orbitron text-xl font-bold text-white leading-tight">{localized(project.title)}</h3>
              <p className="text-slate-400 text-sm mt-1.5 font-rajdhani">{localized(project.subtitle)}</p>
              <div className="flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full w-fit"
                style={{ background: `${project.color}10`, border: `1px solid ${project.color}30` }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-orbitron text-[10px] text-green-400 tracking-wider">{localized(project.status).toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* ── Description ── */}
          <div className="modal-section">
            <div className="modal-label" style={{ color: project.color }}>{t('proj.modalOverview')}</div>
            <p className="text-slate-300 leading-relaxed font-rajdhani text-[15px]">
              {localized(project.longDescription)}
            </p>
          </div>

          {/* ── Features ── */}
          <div className="modal-section">
            <div className="modal-label" style={{ color: project.color }}>{t('proj.modalFeatures')}</div>
            <ul className="space-y-2.5">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-rajdhani">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-xs" style={{ color: project.color }} />
                  <span>{localized(f)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Tech stack ── */}
          <div>
            <div className="modal-label text-slate-500">{t('proj.modalTech')}</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-md font-mono-tech text-xs"
                  style={{
                    background: `${project.color}0d`,
                    border: `1px solid ${project.color}35`,
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


const ProjectCard = ({ project, index, inView }) => {
  const { localized, t } = useLanguage();
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="project-card glass-card rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          border: hovered ? `1px solid ${project.color}60` : '1px solid rgba(255,255,255,0.06)',
          boxShadow: hovered
            ? `0 0 30px ${project.color}20, 0 20px 50px rgba(0,0,0,0.4)`
            : '0 4px 20px rgba(0,0,0,0.2)',
          transform: hovered ? 'translateY(-8px)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
        }}
        onClick={() => setModalOpen(true)}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${project.color}, ${project.color}50)`,
            boxShadow: hovered ? `0 0 10px ${project.color}` : 'none',
            transition: 'box-shadow 0.3s ease',
          }}
        />

        {/* Card header */}
        <div
          className="h-40 flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}08 0%, ${project.color}15 100%)`,
          }}
        >
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(${project.color}20 1px, transparent 1px), linear-gradient(90deg, ${project.color}20 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          <motion.div
            className="text-6xl relative z-10"
            animate={hovered ? { scale: 1.2, rotate: [0, -5, 5, 0] } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {project.icon}
          </motion.div>

          {/* Status chip */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-orbitron"
            style={{ background: `${project.color}15`, border: `1px solid ${project.color}40`, color: project.color }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {localized(project.status)}
          </div>

          {/* Category */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded font-orbitron text-xs text-slate-500 border border-dark-border bg-dark-bg/50">
            {localized(project.category)}
          </div>
        </div>

        {/* Card body */}
        <div className="p-6">
          <h3
            className="font-orbitron text-lg text-white mb-1 transition-colors duration-300"
            style={{ color: hovered ? project.color : '#fff' }}
          >
            {localized(project.title)}
          </h3>
          <div className="font-mono-tech text-xs text-slate-500 mb-3">{localized(project.subtitle)}</div>

          <p className="text-slate-400 text-sm leading-relaxed font-rajdhani mb-5 line-clamp-3">
            {localized(project.description)}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono-tech px-2.5 py-1 rounded transition-all duration-300"
                style={{
                  background: hovered ? `${project.color}15` : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${hovered ? project.color + '40' : 'rgba(255,255,255,0.08)'}`,
                  color: hovered ? project.color : '#94a3b8',
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs font-mono-tech px-2 py-1 text-slate-500">
                +{project.technologies.length - 4} {t('proj.more')}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-dark-border">
            <motion.button
              className="flex items-center gap-2 text-xs font-orbitron tracking-wider transition-all duration-300"
              style={{ color: hovered ? project.color : '#64748b' }}
              whileHover={{ x: 3 }}
            >
              <FaExternalLinkAlt className="text-xs" />
              {t('proj.viewDetails')}
            </motion.button>
            <motion.a
              href="#"
              className="flex items-center gap-1.5 text-xs font-orbitron text-slate-500 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub />
              {t('proj.source')}
            </motion.a>
          </div>
        </div>
      </motion.div>

      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute left-1/2 top-0 w-96 h-96 rounded-full opacity-5 pointer-events-none -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono-tech text-neon-cyan text-sm tracking-widest mb-3">
            &gt; {t('proj.terminal')}
          </div><br /><br />
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold section-title text-white">
            {t('proj.title')} <span className="neon-text-cyan">{t('proj.titleSpan')}</span>
          </h2><br /><br />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto font-rajdhani text-lg">
            {t('proj.subtitle')}
          </p><br /><br />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div><br /><br />

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 font-mono-tech text-xs text-slate-600"
        >
          {t('proj.footer')}
        </motion.div>
      </div><br /><br />
    </section>
  );
};

export default ProjectsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';

const ExperienceCard = ({ exp, index, inView }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="relative"
    >
      {/* Desktop: Alternating layout */}
      <div className={`hidden md:flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Card */}
        <div className="flex-1">
          <motion.div
            className="glass-card rounded-xl p-6 group transition-all duration-300"
            style={{
              border: exp.highlight
                ? '1px solid rgba(0, 245, 255, 0.4)'
                : '1px solid rgba(255,255,255,0.06)',
              boxShadow: exp.highlight ? '0 0 20px rgba(0,245,255,0.1)' : 'none',
            }}
            whileHover={{
              y: -4,
              boxShadow: '0 0 25px rgba(0,245,255,0.2), 0 20px 40px rgba(0,0,0,0.3)',
              borderColor: 'rgba(0,245,255,0.5)',
            }}
          >
            {exp.highlight && (
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-orbitron text-neon-cyan px-2 py-0.5 rounded border border-neon-cyan/30 bg-neon-cyan/5 tracking-widest">
                  ★ FEATURED
                </span>
              </div>
            )}

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-orbitron text-base text-white group-hover:text-neon-cyan transition-colors duration-300">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-neon-purple text-sm font-orbitron">
                  <FaBuilding className="text-xs" />
                  {exp.company}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <div className="flex items-center gap-1.5 text-xs font-mono-tech text-slate-400">
                  <FaCalendarAlt className="text-xs" />
                  {exp.period}
                </div>
                <span className="text-xs font-orbitron px-2 py-0.5 rounded border border-neon-purple/30 text-neon-purple bg-neon-purple/5">
                  {exp.type}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4 font-rajdhani">
              {exp.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono-tech px-2.5 py-1 rounded border border-neon-cyan/20 text-neon-cyan/70 bg-neon-cyan/5 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center flex-shrink-0 relative z-10">
          <motion.div
            className="timeline-dot"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
          />
        </div>

        {/* Empty side */}
        <div className="flex-1" />
      </div>

      {/* Mobile: Single column */}
      <div className="md:hidden flex gap-4">
        {/* Left connector */}
        <div className="flex flex-col items-center">
          <motion.div
            className="timeline-dot mt-1"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
            style={{ width: '14px', height: '14px' }}
          />
          {index < experiences.length - 1 && (
            <div className="w-px flex-1 mt-2 bg-gradient-to-b from-neon-cyan to-transparent opacity-30" />
          )}
        </div>

        {/* Card */}
        <motion.div
          className="flex-1 glass-card rounded-xl p-5 mb-6 group"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
          whileHover={{ borderColor: 'rgba(0,245,255,0.4)', boxShadow: '0 0 20px rgba(0,245,255,0.1)' }}
        >
          <div className="flex items-center gap-2 mb-1 text-neon-purple text-sm font-orbitron">
            <FaBuilding className="text-xs" />
            {exp.company}
          </div>
          <h3 className="font-orbitron text-sm text-white mb-1">{exp.role}</h3>
          <div className="flex items-center gap-1.5 text-xs font-mono-tech text-slate-400 mb-3">
            <FaCalendarAlt className="text-xs" />
            {exp.period} · {exp.type}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-3 font-rajdhani">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span key={tech} className="text-xs font-mono-tech px-2 py-0.5 rounded border border-neon-cyan/20 text-neon-cyan/70">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative section-spacing overflow-hidden">
      <div
        className="absolute right-0 bottom-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff0080 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono-tech text-neon-pink text-sm tracking-widest mb-3">
            &gt; WORK_HISTORY.log
          </div><br /><br />
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold section-title text-white">
            <span className="neon-text-pink">Experience</span>
          </h2><br /><br />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto font-rajdhani text-lg">
            Professional internships and real-world software development experience
          </p><br /><br />
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative">
          {/* Center vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, transparent, #00f5ff50, #7b2fff50, transparent)' }}
          />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} inView={inView} />
            ))}
          </div>
        </div><br /><br />

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full glass-card border border-neon-cyan/20 font-orbitron text-xs text-slate-400 tracking-widest">
            <FaBriefcase className="text-neon-cyan" />
            3 PROFESSIONAL INTERNSHIPS COMPLETED
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

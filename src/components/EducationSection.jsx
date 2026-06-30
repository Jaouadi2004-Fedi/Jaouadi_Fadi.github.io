import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaStar, FaBook, FaMapMarkerAlt, FaCalendarAlt, FaMedal } from 'react-icons/fa';
import { education } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const EducationSection = () => {
  const { t, localized, language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const edu = education[0];

  return (
    <section id="education" className="relative py-28 lg:py-36 overflow-hidden">
      {/* BG ambient glows */}
      <div
        className="absolute right-0 top-1/4 w-96 h-96 rounded-full opacity-4 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7b2fff 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute left-0 bottom-1/4 w-72 h-72 rounded-full opacity-3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* ── Section Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="font-mono-tech text-neon-purple text-sm tracking-[0.25em] mb-4">
            &gt; {t('edu.terminal')}
          </div><br /><br />
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold section-title text-white">
            <span className="neon-text-purple">{t('edu.title')}</span>
          </h2><br />
          <p className="font-rajdhani text-slate-400 mt-5 text-lg max-w-md mx-auto">
            {t('edu.subtitle')}
          </p><br /><br />
        </motion.div>

        {/* ── Main Education Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(13,18,36,0.95) 0%, rgba(20,5,45,0.95) 100%)',
            border: '1px solid rgba(123,47,255,0.35)',
            boxShadow: '0 0 60px rgba(123,47,255,0.1), 0 30px 60px rgba(0,0,0,0.4)',
          }}
        >
          {/* Top rainbow bar */}
          <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #7b2fff, #00f5ff, #ff0080)' }} />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(123,47,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,255,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          /><br />

          <div className="relative p-8 sm:p-12 lg:p-14">
            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* ── Left: Diploma info ── */}
              <div>
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                  style={{ background: 'rgba(123,47,255,0.12)', border: '1.5px solid rgba(123,47,255,0.4)' }}
                  animate={{ boxShadow: ['0 0 12px rgba(123,47,255,0.15)', '0 0 35px rgba(123,47,255,0.45)', '0 0 12px rgba(123,47,255,0.15)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaGraduationCap className="text-4xl text-neon-purple" />
                </motion.div>

                {/* Label */}
                <div className="font-mono-tech text-[10px] text-neon-purple tracking-[0.25em] mb-3 uppercase">
                  {t('edu.academicDegree')}
                </div><br />

                {/* Degree title */}
                <h3 className="font-orbitron text-xl sm:text-2xl text-white font-bold mb-4 leading-snug">
                  {localized(edu.degree)}
                </h3><br />

                {/* Mention badge */}
                <div className="flex items-center gap-2 mb-5">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="font-orbitron text-sm font-semibold text-yellow-400">{edu.mention}</span>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-2.5 mb-3">
                  <FaMapMarkerAlt className="text-neon-purple mt-1 flex-shrink-0 text-xs" />
                  <span className="font-rajdhani text-slate-300 text-base leading-snug">{edu.institution}</span>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2.5 mb-8">
                  <FaCalendarAlt className="text-neon-cyan flex-shrink-0 text-xs" />
                  <span className="font-mono-tech text-sm text-neon-cyan">{edu.period}</span>
                </div><br />

                {/* Achievement badge */}
                <motion.div
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
                  style={{
                    background: 'rgba(255,215,0,0.07)',
                    border: '1px solid rgba(255,215,0,0.25)',
                  }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255,215,0,0.15)' }}
                >
                  <FaMedal className="text-yellow-400 text-lg" />
                  <div>
                    <div className="font-orbitron text-xs text-yellow-300 tracking-wider font-bold">{t('edu.topGraduate')}</div>
                    <div className="font-mono-tech text-[10px] text-yellow-500/70 tracking-widest mt-0.5">{edu.mention}</div>
                  </div>
                </motion.div>
              </div>

              {/* ── Right: Description + Courses ── */}
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <div className="font-mono-tech text-[10px] text-slate-500 tracking-[0.2em] uppercase mb-3">{t('edu.about')}</div><br />
                  <p className="font-rajdhani text-slate-300 text-base leading-[1.85] tracking-wide">
                    {localized(edu.description)}
                  </p>
                </div><br />

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" /><br />

                {/* Courses */}
                <div>
                  <div className="font-mono-tech text-[10px] text-neon-cyan tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                    <FaBook className="text-xs" />
                    {t('edu.keyModules')}
                  </div><br />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.courses.map((course, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.07 }}
                        className="flex items-center gap-3 text-sm font-rajdhani text-slate-300 px-4 py-2.5 rounded-xl"
                        style={{
                          background: 'rgba(0,245,255,0.03)',
                          border: '1px solid rgba(0,245,255,0.1)',
                        }}
                        whileHover={{
                          background: 'rgba(0,245,255,0.07)',
                          borderColor: 'rgba(0,245,255,0.25)',
                          x: 4,
                        }}
                      ><br />
                        <span className="text-neon-cyan text-xs flex-shrink-0">▸</span>
                        <span>{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div><br />

        {/* ── Bottom Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-3 gap-6"
        >
          {[
            { val: language === 'fr' ? '3 Ans' : '3 Years', label: t('edu.duration'), color: '#00f5ff' },
            { val: 'Très Bien', label: t('edu.mention'), color: '#ffd700' },
            { val: '2026', label: t('edu.graduated'), color: '#7b2fff' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="glass-card text-center py-6 rounded-2xl"
              style={{ border: `1px solid ${stat.color}20` }}
              whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${stat.color}18` }}
            >
              <div className="font-orbitron text-xl font-bold" style={{ color: stat.color }}>
                {stat.val}
              </div>
              <div className="font-rajdhani text-xs text-slate-500 uppercase tracking-[0.15em] mt-1.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div><br /><br />
    </section>
  );
};

export default EducationSection;

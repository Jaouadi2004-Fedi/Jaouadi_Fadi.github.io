import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane,
  FaMapMarkerAlt, FaCheckCircle, FaClock, FaBriefcase,
  FaPhone, FaCommentDots,
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

/* ── Input field component ── */
const Field = ({ label, required, children, focused }) => (
  <div>
    <label className="flex items-center gap-1.5 font-orbitron text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-2">
      {label}
      {required && <span className="text-neon-cyan">*</span>}
    </label>
    <div
      className="relative transition-all duration-300"
      style={{
        borderRadius: '10px',
        boxShadow: focused ? '0 0 0 1px rgba(0,245,255,0.35), 0 0 20px rgba(0,245,255,0.08)' : 'none',
      }}
    >
      {children}
    </div>
  </div>
);

const ContactSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const contactCards = [
    {
      icon: <FaEnvelope />,
      label: t('contact.emailLabel'),
      value: personalInfo.email,
      sub: t('contact.emailSub'),
      href: `mailto:${personalInfo.email}`,
      color: '#00f5ff',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'Jaouadi Fadi',
      sub: t('contact.linkedinSub'),
      href: personalInfo.linkedin,
      color: '#0a66c2',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: t('contact.githubSub'),
      sub: t('contact.githubSub'),
      href: personalInfo.github,
      color: '#e2e8f0',
    },
  ];

  const openTo = [
    { icon: <FaBriefcase />, text: t('openTo.fulltime'), color: '#00f5ff' },
    { icon: <FaCommentDots />, text: t('openTo.freelance'), color: '#7b2fff' },
    { icon: <FaPhone />, text: t('openTo.consulting'), color: '#ff0080' },
    { icon: <FaClock />, text: t('openTo.remote'), color: '#00ff88' },
  ];

  const subjectPresets = [
    t('contact.presetJob'),
    t('contact.presetFreelance'),
    t('contact.presetCollaboration'),
    t('contact.presetConsulting'),
    t('contact.presetOther'),
  ];
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFocus = (name) => setFocused(name);
  const handleBlur = () => setFocused('');
  const setSubject = (val) => setFormData({ ...formData, subject: val });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass =
    'form-input w-full px-4 py-3.5 rounded-[10px] text-sm bg-[rgba(5,8,22,0.7)] text-slate-200 placeholder-slate-600 outline-none border border-[rgba(26,32,64,0.8)] transition-all duration-300 focus:border-neon-cyan/40';

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-4"
          style={{ background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-4"
          style={{ background: 'radial-gradient(circle, #7b2fff 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* ── Section Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="font-mono-tech text-neon-cyan text-sm tracking-[0.25em] mb-4">
            &gt; {t('contact.terminal')}
          </div><br /><br />
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold section-title text-white">
            {t('contact.title')} <span className="neon-text-cyan">{t('contact.titleSpan')}</span>
          </h2><br />
          <p className="text-slate-400 mt-5 max-w-lg mx-auto font-rajdhani text-lg leading-relaxed">
            {t('contact.subtitle')}
            {' '}<span className="text-neon-cyan font-semibold">{t('contact.subtitleHighlight')}</span>.
          </p><br />
        </motion.div>

        {/* ── Availability strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {openTo.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full font-rajdhani text-sm"
              style={{
                border: `1px solid ${item.color}25`,
                background: `${item.color}08`,
                color: '#94a3b8',
              }}
            >
              <span style={{ color: item.color }} className="text-xs">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div><br />

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Left column — contact cards + status ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Hiring intent card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.05) 0%, rgba(123,47,255,0.05) 100%)',
                border: '1px solid rgba(0,245,255,0.2)',
              }}
            >
              <div className="font-mono-tech text-[10px] text-neon-cyan tracking-[0.22em] uppercase mb-4">
                {t('contact.quickContact')}
              </div>
              <div className="space-y-3">
                {contactCards.map((card, i) => (
                  <motion.a
                    key={i}
                    href={card.href}
                    target={card.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/5 group transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                    whileHover={{
                      background: `${card.color}0d`,
                      borderColor: `${card.color}35`,
                      x: 4,
                    }}
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{ background: `${card.color}12`, border: `1px solid ${card.color}30`, color: card.color }}
                    >
                      {card.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-orbitron text-xs text-white font-semibold">{card.label}</p>
                      <p className="font-mono-tech text-[10px] text-slate-500 truncate mt-0.5">{card.sub}</p>
                    </div>
                    <span className="text-slate-700 group-hover:text-slate-400 text-xs transition-colors">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{ border: '1px solid rgba(0,255,136,0.2)', background: 'rgba(0,255,136,0.04)' }}
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="font-orbitron text-xs text-green-400 font-bold">{t('contact.available')}</div>
                <div className="font-rajdhani text-xs text-slate-500 mt-0.5">
                  {t('contact.availableSub')}
                </div>
              </div>
            </div>

            {/* Response time */}
            <div
              className="rounded-2xl p-5"
              style={{ border: '1px solid rgba(123,47,255,0.2)', background: 'rgba(123,47,255,0.04)' }}
            >
              <div className="font-mono-tech text-[10px] text-neon-purple tracking-[0.2em] uppercase mb-3">{t('contact.responseTime')}</div>
              <div className="flex items-center gap-3">
                <FaClock className="text-neon-purple text-sm" />
                <div>
                  <p className="font-orbitron text-sm text-white font-bold">{t('contact.responseValue')}</p>
                  <p className="font-rajdhani text-xs text-slate-500">{t('contact.responseSub')}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              className="rounded-2xl p-5"
              style={{ border: '1px solid rgba(0,245,255,0.1)', background: 'rgba(0,245,255,0.03)' }}
            >
              <div className="font-mono-tech text-[10px] text-neon-cyan tracking-[0.2em] uppercase mb-3">{t('contact.location')}</div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-neon-cyan text-sm" />
                <div>
                  <p className="font-orbitron text-sm text-white font-bold">Tunisia</p>
                  <p className="font-rajdhani text-xs text-slate-500">{t('contact.locationSub')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right column — Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                background: 'rgba(10,14,32,0.8)',
                border: '1px solid rgba(0,245,255,0.12)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="font-mono-tech text-[10px] text-neon-cyan tracking-[0.22em] uppercase mb-6">
                {t('contact.formTitle')}
              </div><br />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-16 space-y-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    ><br />
                      <FaCheckCircle className="text-6xl text-neon-cyan mx-auto" />
                    </motion.div>
                    <div className="font-orbitron text-2xl text-white">{t('contact.successTitle')}</div>
                    <p className="text-slate-400 font-rajdhani text-base">
                      {t('contact.successSub')}
                    </p>
                    <motion.button
                      onClick={() => setStatus('idle')}
                      className="btn-outline-cyan mt-4"
                      whileHover={{ scale: 1.04 }}
                    >
                      {t('contact.sendAnother')}
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label={t('contact.nameLabel')} required focused={focused === 'name'}>
                        <input
                          type="text" name="name" value={formData.name}
                          onChange={handleChange} required
                          placeholder={t('contact.namePlaceholder')}
                          className={inputClass}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                        />
                      </Field>
                      <Field label={t('contact.emailLabel')} required focused={focused === 'email'}>
                        <input
                          type="email" name="email" value={formData.email}
                          onChange={handleChange} required
                          placeholder={t('contact.emailPlaceholder')}
                          className={inputClass}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                        />
                      </Field>
                    </div><br />

                    {/* Subject + presets */}
                    <Field label={t('contact.subjectLabel')} required focused={focused === 'subject'}>
                      <input
                        type="text" name="subject" value={formData.subject}
                        onChange={handleChange} required
                        placeholder={t('contact.subjectPlaceholder')}
                        className={inputClass}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                      /><br />
                      {/* Preset chips */}
                      <div className="flex flex-wrap gap-2 mt-1.5"><br />
                        {subjectPresets.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setSubject(p)}
                            className="font-mono-tech text-[10px] px-3 py-1.5 rounded-full border transition-all duration-200"
                            style={{
                              borderColor: formData.subject === p ? 'rgba(0,245,255,0.5)' : 'rgba(255,255,255,0.08)',
                              color: formData.subject === p ? '#00f5ff' : '#475569',
                              background: formData.subject === p ? 'rgba(0,245,255,0.06)' : 'transparent',
                            }}
                          >
                            {p}
                          </button>
                        ))}
                      </div><br />
                    </Field>

                    {/* Message */}
                    <Field label={t('contact.messageLabel')} required focused={focused === 'message'}>
                      <textarea
                        name="message" value={formData.message}
                        onChange={handleChange} required rows={5}
                        placeholder={t('contact.messagePlaceholder')}
                        className={`${inputClass} resize-none`}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                      />
                      <div className="text-right mt-1.5">
                        <span className="font-mono-tech text-[10px] text-slate-600">
                          {formData.message.length} {t('contact.chars')}
                        </span>
                      </div>
                    </Field>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full flex items-center justify-center gap-2.5"
                      style={{ opacity: status === 'sending' ? 0.75 : 1, fontSize: '0.72rem', letterSpacing: '0.14em' }}
                      whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'sending' ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-dark-bg/70 border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                          {t('contact.transmitting')}
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          {t('contact.send')}
                        </>
                      )}
                    </motion.button><br />

                    <p className="font-rajdhani text-xs text-slate-600 text-center">
                      {t('contact.privacy')}
                    </p><br />
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

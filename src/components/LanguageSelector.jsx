import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧', descKey: 'lang.enDesc' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', descKey: 'lang.frDesc' },
];

const LanguageSelector = () => {
  const { changeLanguage, t } = useLanguage();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: 'rgba(5, 8, 22, 0.97)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="scanline" />

      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-neon-cyan opacity-40" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-neon-cyan opacity-40" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-neon-cyan opacity-40" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-neon-cyan opacity-40" />

      <motion.div
        className="text-center px-6 max-w-lg"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="text-6xl mb-6"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          🌐
        </motion.div>

        <div className="font-orbitron text-3xl font-black neon-text-cyan mb-3">
          {t('lang.title')}
        </div>
        <p className="font-rajdhani text-slate-400 text-base mb-10">
          {t('lang.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl transition-all duration-300 min-w-[200px]"
              style={{
                border: '1.5px solid rgba(0,245,255,0.3)',
                background: 'rgba(0,245,255,0.04)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0,245,255,0.2)',
                borderColor: 'rgba(0,245,255,0.6)',
                background: 'rgba(0,245,255,0.08)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-5xl" role="img" aria-label={lang.label}>{lang.flag}</span>
              <span className="font-orbitron text-lg font-bold text-white">{lang.label}</span>
              <span className="font-rajdhani text-xs text-slate-400">{t(lang.descKey)}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LanguageSelector;

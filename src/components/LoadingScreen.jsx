import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LoadingScreen = ({ onComplete }) => {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  const bootLines = [
    t('boot.line1'),
    t('boot.line2'),
    t('boot.line3'),
    t('boot.line4'),
    t('boot.line5'),
    t('boot.line6'),
    t('boot.line7'),
    t('boot.line8'),
    t('boot.line9'),
  ];

  useEffect(() => {
    let lineIndex = 0;
    let progressInterval;

    progressInterval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 8 + 2;
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return next;
      });
    }, 80);

    const lineInterval = setInterval(() => {
      if (lineIndex < bootLines.length) {
        const nextLine = bootLines[lineIndex];
        if (nextLine) {
          setLines(prev => [...prev, nextLine]);
        }
        lineIndex++;
      } else {
        clearInterval(lineInterval);
      }
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(lineInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen grid-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Scanline */}
          <div className="scanline" />

          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-neon-cyan opacity-60" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-neon-cyan opacity-60" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-neon-cyan opacity-60" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-neon-cyan opacity-60" />

          {/* Main Content */}
          <div className="w-full max-w-2xl mx-auto px-6 z-10">
            {/* Logo */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-orbitron text-5xl font-black neon-text-cyan mb-2">
                FJ
              </div>
              <div className="font-orbitron text-xs tracking-[8px] text-slate-400 uppercase">
                {t('loading.portfolio')}
              </div>
            </motion.div>

            {/* Terminal Box */}
            <motion.div
              className="glass-card rounded-lg p-6 mb-6 neon-border-cyan font-mono-tech"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-dark-border">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-slate-500 ml-2 font-mono-tech">{t('loading.terminal')}</span>
              </div>
              <div className="space-y-1.5 min-h-[180px]">
                {lines.map((line, i) => {
                  if (!line) return null;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`text-sm ${line.includes('OK') || line.includes('Welcome')
                          ? 'text-green-400'
                          : line.includes('Error')
                            ? 'text-red-400'
                            : 'text-neon-cyan'
                        }`}
                    >
                      {line}
                      {i === lines.length - 1 && <span className="blink ml-1">_</span>}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-orbitron text-xs text-slate-400">{t('loading.loading')}</span>
                <span className="font-orbitron text-xs neon-text-cyan">{Math.floor(progress)}%</span>
              </div>
              <div className="h-1.5 bg-dark-card rounded-full overflow-hidden border border-dark-border">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #00f5ff, #7b2fff)',
                    boxShadow: '0 0 10px #00f5ff',
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Status */}
            <motion.div
              className="text-center mt-6 font-orbitron text-xs text-slate-500 tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t('loading.status')}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

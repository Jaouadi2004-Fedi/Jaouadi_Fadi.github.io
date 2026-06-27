import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaDownload, FaChevronDown } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolioData';

const CyberpunkGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '#00f5ff' : '#7b2fff',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Draw particles and connections
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        particles.forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <CyberpunkGrid />

      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(123,47,255,0.12) 0%, rgba(0,245,255,0.06) 40%, transparent 70%)',
        }}
      />

      {/* Side decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-neon-cyan opacity-50" />
        <div className="flex flex-col gap-3">
          {[
            { icon: <FaGithub />, href: personalInfo.github },
            { icon: <FaLinkedin />, href: personalInfo.linkedin },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-neon-cyan/20 rounded text-slate-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all duration-300 text-sm"
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-neon-cyan opacity-50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Subtitle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan font-mono-tech text-xs tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          AVAILABLE FOR OPPORTUNITIES
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1
            className="font-orbitron font-black text-5xl sm:text-7xl lg:text-8xl glitch-text tracking-tight"
            data-text="JAOUADI FADI"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #7b2fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Jaouadi Fadi
          </h1>
        </motion.div>

        {/* Role typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 h-12 flex items-center justify-center"
        >
          <span className="font-mono-tech text-xl sm:text-2xl text-neon-cyan">
            &gt;&nbsp;
          </span>
          <TypeAnimation
            sequence={[
              'Full-Stack Developer', 2000,
              'React.js Engineer', 2000,
              'Java & Spring Boot Dev', 2000,
              'Software Architect', 2000,
              'UI/UX Enthusiast', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono-tech text-xl sm:text-2xl text-neon-cyan neon-text-cyan"
          />
          <span className="blink text-neon-cyan ml-1 text-xl sm:text-2xl">_</span>
        </motion.div>

        {/* Bio snippet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-rajdhani leading-relaxed"
        >
          Crafting high-performance web applications with modern stacks.
          <span className="text-neon-purple"> Licence en Technologies Informatiques</span> — Mention Très Bien.
          Turning complex problems into elegant digital solutions.
        </motion.p> <br />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            VIEW PROJECTS
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-outline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaDownload className="text-xs" />
            CONTACT ME
          </motion.a>
        </motion.div><br />

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          {stats.slice(0, 3).map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-orbitron text-2xl sm:text-3xl font-bold neon-text-cyan">
                {stat.value}{stat.suffix}
              </div>
              <div className="font-rajdhani text-xs text-slate-500 tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll down cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-orbitron text-xs tracking-widest">SCROLL</span>
        <FaChevronDown className="text-neon-cyan" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

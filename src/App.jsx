import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LanguageSelector from './components/LanguageSelector';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  const { language, showSelector } = useLanguage();

  // Custom cursor tracking
  useEffect(() => {
    const moveCursor = (e) => setCursor({ x: e.clientX, y: e.clientY });
    const moveFollower = (e) => {
      setTimeout(() => setFollower({ x: e.clientX, y: e.clientY }), 80);
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) {
        setCursorHover(true);
      } else {
        setCursorHover(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', moveFollower);
    window.addEventListener('mouseover', onMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', moveFollower);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Show language selector if no language chosen yet
  if (showSelector) {
    return <LanguageSelector />;
  }

  return (
    <>
      {/* Custom Cursor — desktop only */}
      <div
        className="cursor hidden md:block"
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div
        className={`cursor hidden md:block ${cursorHover ? 'cursor-hover' : ''}`}
        style={{ left: cursor.x, top: cursor.y }}
      />

      {/* Loading Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="min-h-screen bg-dark-bg text-slate-100 overflow-x-hidden">
          <ScrollProgress />
          <Navbar />

          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

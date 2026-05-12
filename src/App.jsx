import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import ScrollToTopButton from './components/ScrollToTopButton';

function AppContent({ darkMode, setDarkMode }) {
  const { language } = useLanguage();
  const Motion = motion;
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      <Motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-400"
      />
      <Header
        toggleDark={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={language}
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <main className="relative">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </Motion.div>
      </AnimatePresence>
      <ScrollToTopButton />
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Opcional: Leer preferencia del usuario desde localStorage
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Aplicar clase al elemento raíz y guardar preferencia
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <LanguageProvider>
      <AppContent darkMode={darkMode} setDarkMode={setDarkMode} />
    </LanguageProvider>
  );
}
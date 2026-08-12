import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { gsap, useGSAP } from './lib/gsapSetup';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import ScrollToTopButton from './components/ScrollToTopButton';
import NewSiteModal from './components/NewSiteModal';

function AppContent({ darkMode, setDarkMode }) {
  const { language } = useLanguage();
  const Motion = motion;
  const appRef = useRef(null);
  const hoverListenersRef = useRef([]);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
          desktop: '(min-width: 768px)',
          finePointer: '(pointer: fine)',
        },
        (context) => {
          const { reduceMotion, desktop, finePointer } = context.conditions;

          if (!reduceMotion) {
            const headings = gsap.utils.toArray('main section h2, main section h3');
            headings.forEach((heading, index) => {
              const offsetX = index % 2 === 0 ? -34 : 34;
              gsap.fromTo(
                heading,
                { autoAlpha: 0, y: desktop ? 28 : 18, x: offsetX, filter: 'blur(8px)' },
                {
                  autoAlpha: 1,
                  y: 0,
                  x: 0,
                  filter: 'blur(0px)',
                  duration: desktop ? 0.75 : 0.52,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: heading,
                    start: 'top 88%',
                    once: true,
                  },
                }
              );
            });

            const cards = gsap.utils.toArray('.glass-card');
            cards.forEach((card, index) => {
              const lateral = index % 2 === 0 ? -26 : 26;
              gsap.fromTo(
                card,
                { autoAlpha: 0, y: 26, x: lateral, scale: 0.97, rotateZ: index % 2 === 0 ? -1 : 1 },
                {
                  autoAlpha: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                  rotateZ: 0,
                  duration: desktop ? 0.68 : 0.46,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    once: true,
                  },
                }
              );
            });
          }

          const controls = gsap.utils
            .toArray('button, a.rounded-xl, a.rounded-lg, .ui-control')
            .filter((element) => !element.classList.contains('gsap-no-magnetic'));

          controls.forEach((element) => {
            const xTo = gsap.quickTo(element, 'x', { duration: 0.28, ease: 'power3.out' });
            const yTo = gsap.quickTo(element, 'y', { duration: 0.28, ease: 'power3.out' });

            const onMove = (event) => {
              if (!finePointer || reduceMotion) return;
              const rect = element.getBoundingClientRect();
              const relX = (event.clientX - rect.left) / rect.width - 0.5;
              const relY = (event.clientY - rect.top) / rect.height - 0.5;
              xTo(relX * 8);
              yTo(relY * 8);
            };

            const onEnter = () => {
              gsap.to(element, {
                scale: 1.05,
                boxShadow: '0 14px 28px rgba(14, 165, 233, 0.24)',
                duration: 0.22,
                ease: 'power2.out',
                overwrite: 'auto',
              });
            };

            const onLeave = () => {
              xTo(0);
              yTo(0);
              gsap.to(element, {
                scale: 1,
                boxShadow: '0 0 0 rgba(0,0,0,0)',
                duration: 0.22,
                ease: 'power2.out',
                overwrite: 'auto',
              });
            };

            element.addEventListener('mousemove', onMove);
            element.addEventListener('mouseenter', onEnter);
            element.addEventListener('mouseleave', onLeave);
            hoverListenersRef.current.push({ element, onMove, onEnter, onLeave });
          });
        }
      );

      return () => {
        hoverListenersRef.current.forEach(({ element, onMove, onEnter, onLeave }) => {
          element.removeEventListener('mousemove', onMove);
          element.removeEventListener('mouseenter', onEnter);
          element.removeEventListener('mouseleave', onLeave);
        });
        hoverListenersRef.current = [];
        mm.revert();
      };
    },
    { scope: appRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <div ref={appRef} className="min-h-screen text-slate-900 dark:text-slate-100">
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
      <NewSiteModal />
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
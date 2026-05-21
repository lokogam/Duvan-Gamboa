import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { gsap, useGSAP } from '../lib/gsapSetup';
const ScrollToTopButton = () => {
  const { language } = useLanguage(); // Si usas el contexto de idioma
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);
  const pulseRef = useRef(null);
  const visibleRef = useRef(false);
  const Motion = motion;

  useEffect(() => {
    let rafId = 0;
    const toggleVisibility = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        const nextVisible = window.pageYOffset > 300;
        if (nextVisible !== visibleRef.current) {
          visibleRef.current = nextVisible;
          setIsVisible(nextVisible);
        }
        rafId = 0;
      });
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useGSAP(
    () => {
      if (!isVisible || !pulseRef.current) {
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(pulseRef.current, { autoAlpha: 0 });
        return;
      }

      gsap.fromTo(
        pulseRef.current,
        { scale: 1, autoAlpha: 0.45 },
        {
          scale: 1.3,
          autoAlpha: 0,
          duration: 1.5,
          ease: 'power1.out',
          repeat: -1,
        }
      );
    },
    { scope: buttonRef, dependencies: [isVisible], revertOnUpdate: true }
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.button
          ref={buttonRef}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.75, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 20 }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-slate-900 p-3 text-white shadow-lg shadow-slate-900/30"
          aria-label={language === "es" ? "Ir arriba" : "Back to top"}
        >
          <Motion.span
            ref={pulseRef}
            className="absolute inset-0 rounded-full border border-white/25"
          />
          <svg
            className="relative h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </Motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NEW_SITE_URL = 'https://duvangamboa.dev/';

export default function NewSiteModal() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const Motion = motion;

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const goToNewSite = () => {
    window.location.href = NEW_SITE_URL;
  };

  const isEs = language === 'es';

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          key="new-site-modal"
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <Motion.div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <Motion.div
            className="glass-card relative w-full max-w-md overflow-hidden rounded-2xl p-6 shadow-2xl"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-400" />

            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xl text-white">
                🚀
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={isEs ? 'Cerrar' : 'Close'}
                className="ui-control ui-control--icon"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              {isEs ? '¡Nuevo sitio web!' : 'New website!'}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {isEs
                ? 'Mi portafolio ahora vive en una nueva dirección:'
                : 'My portfolio now lives at a new address:'}
            </p>

            <button
              type="button"
              onClick={goToNewSite}
              className="mt-2 flex w-full items-center justify-between rounded-xl border-2 border-dashed border-cyan-500/60 bg-cyan-500/10 px-4 py-3 font-bold text-cyan-700 transition-colors hover:bg-cyan-500/20 dark:text-cyan-300"
            >
              <span>duvangamboa.dev</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6v6M10 14l10-10" />
              </svg>
            </button>

            <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              {language === 'es'
                ? 'Nuevo portafolio, más proyectos y contenido actualizado.'
                : 'New portfolio, more projects and updated content.'}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={goToNewSite}
                className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
              >
                {isEs ? 'Ir al nuevo sitio' : 'Go to new site'}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {isEs ? 'Permanecer aquí' : 'Stay here'}
              </button>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
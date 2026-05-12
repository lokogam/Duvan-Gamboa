import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ toggleDark, darkMode }) {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Motion = motion;

  const FlagIcon = ({ code }) => {
    if (code === 'US') {
      return (
        <span className="relative inline-block h-3.5 w-5 overflow-hidden rounded-sm border border-slate-300/80">
          <span
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #b91c1c 0 14%, #ffffff 14% 28%, #b91c1c 28% 42%, #ffffff 42% 56%, #b91c1c 56% 70%, #ffffff 70% 84%, #b91c1c 84% 100%)',
            }}
          />
          <span className="absolute left-0 top-0 h-[55%] w-[45%] bg-blue-900" />
        </span>
      );
    }

    return (
      <span className="relative inline-block h-3.5 w-5 overflow-hidden rounded-sm border border-slate-300/80">
        <span
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #b91c1c 0 25%, #facc15 25% 75%, #b91c1c 75% 100%)',
          }}
        />
      </span>
    );
  };

  const ThemeIcon = ({ enabled }) => {
    if (enabled) {
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2 12h2.5M19.5 12H22M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
        </svg>
      );
    }

    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.2 14.5A8.5 8.5 0 119.5 3.8a7 7 0 0010.7 10.7z" />
      </svg>
    );
  };

  const navLinks = [
    { name: language === 'es' ? 'Inicio' : 'Home', href: '#hero' },
    { name: language === 'es' ? 'Sobre mí' : 'About', href: '#about' },
    // { name: language === 'es' ? 'Proyectos' : 'Projects', href: '#projects' },
    { name: language === 'es' ? 'Habilidades' : 'Skills', href: '#skills' },
    { name: language === 'es' ? 'Contacto' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/40 bg-white/60 backdrop-blur-md dark:border-slate-700/40 dark:bg-slate-900/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-bold text-white dark:bg-slate-100 dark:text-slate-900">
              DG
            </div>
            <div>
              <h1 className="font-bold text-lg">Duvan Gamboa</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {language === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer'}
              </p>
            </div>
          </div>

          {/* Menú Hamburguesa (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ui-control ui-control--icon"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Menú de Navegación (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controles (Idioma + Dark Mode) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="ui-control"
              aria-label="Toggle language"
            >
              <AnimatePresence mode="wait" initial={false}>
                <Motion.span
                  key={language}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <FlagIcon code={language === 'es' ? 'US' : 'ES'} />
                  <span>{language === 'es' ? 'EN' : 'ES'}</span>
                </Motion.span>
              </AnimatePresence>
            </button>
            <button
              onClick={toggleDark}
              className="ui-control ui-control--icon hover:rotate-180 duration-500"
              aria-label="Toggle dark mode"
            >
              <ThemeIcon enabled={darkMode} />
            </button>
          </div>
        </div>

        {/* Menú Mobile (Desplegable) */}
        <div className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 px-4">
            {/* Enlaces */}
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Controles móviles */}
            <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleLanguage}
                className="ui-control"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <Motion.span
                    key={`${language}-mobile`}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <FlagIcon code={language === 'es' ? 'US' : 'ES'} />
                    <span>{language === 'es' ? 'EN' : 'ES'}</span>
                  </Motion.span>
                </AnimatePresence>
              </button>
              <button
                onClick={toggleDark}
                className="ui-control ui-control--icon"
              >
                <ThemeIcon enabled={darkMode} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
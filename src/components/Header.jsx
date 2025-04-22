import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ toggleDark, darkMode }) {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: language === 'es' ? 'Inicio' : 'Home', href: '#hero' },
    { name: language === 'es' ? 'Sobre mí' : 'About', href: '#about' },
    // { name: language === 'es' ? 'Proyectos' : 'Projects', href: '#projects' },
    { name: language === 'es' ? 'Habilidades' : 'Skills', href: '#skills' },
    { name: language === 'es' ? 'Contacto' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              DG
            </div>
            <div>
              <h1 className="font-bold text-lg">Duvan Gamboa</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {language === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer'}
              </p>
            </div>
          </div>

          {/* Menú Hamburguesa (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controles (Idioma + Dark Mode) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle language"
            >
              {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
            </button>
            <button
              onClick={toggleDark}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors hover:rotate-180 transition-transform duration-500"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
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
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {language === 'es' ? '🇺🇸' : '🇪🇸'}
              </button>
              <button
                onClick={toggleDark}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTopButton from './components/ScrollToTopButton';
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
      <div className="min-h-screen font-sans bg-white dark:bg-gray-900">
        <Header 
          toggleDark={() => setDarkMode(!darkMode)} 
          darkMode={darkMode}
        />
        <main>
          <Hero />
          <About />
          {/* <Projects /> */}
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
}
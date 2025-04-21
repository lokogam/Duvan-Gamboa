import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  // Textos traducibles
  const content = {
    title:
      language === "es" ? "Desarrollador Full Stack" : "Full Stack Developer",
    tagline:
      language === "es"
        ? "Transformo ideas en soluciones digitales escalables"
        : "I turn ideas into scalable digital solutions",
    location: language === "es" ? "Ubicación: Colombia" : "Location: Colombia",
    ctaPrimary: language === "es" ? "Descargar CV" : "Download CV",
    ctaSecondary: language === "es" ? "Ver Proyectos" : "View Projects",
  };

  return (
    <section
      id="hero"
      className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Efecto de burbujas decorativas (opcional) */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagen de perfil */}
          {/* Reemplaza profile.jpg con tu imagen (600x600 px para mejor calidad). */}
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <img
              src="/profile.jpg" // Reemplaza con tu imagen
              alt="Duvan Gamboa"
              className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-xl hover:scale-105 transition-transform"
            />
          </div>

          {/* Texto y botones */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Duvan Andrés Gamboa
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-100 dark:text-blue-200 mb-4">
              {content.title}
            </h2>
            <p className="text-lg md:text-xl text-blue-50 dark:text-blue-100 mb-8 max-w-2xl">
              {content.tagline}
            </p>

            {/* Botones principales */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a
                href={language === "es" ? "/cv-duvan-gamboa-ES.pdf" : "/cv-duvan-gamboa-EN.pdf"}
                download
                className="px-6 py-3 bg-white dark:bg-blue-700 text-blue-600 dark:text-white hover:bg-gray-100 dark:hover:bg-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {content.ctaPrimary}
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {content.ctaSecondary}
              </a>
            </div>

            {/* Contacto rápido */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-blue-50 dark:text-blue-100">
              <a
                href="tel:+573156334898"
                className="flex items-center gap-2 hover:text-white"
                target="_blank"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +57 315 633 4898
              </a>
              <a
                href="mailto:duvangamboa8@gmail.com"
                className="flex items-center gap-2 hover:text-white"
                target="_blank"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                duvangamboa8@gmail.com
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/duvan-gamboa-5193951b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Perfil de LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/lokogam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Perfil de GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>

            <p className="mt-4 text-blue-100">{content.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

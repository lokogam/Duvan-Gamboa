import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Contenido traducible
  const content = {
    title: language === "es" ? "Proyectos Destacados" : "Featured Projects",
    filters: {
      all: language === "es" ? "Todos" : "All",
      web: language === "es" ? "Web" : "Web",
      mobile: language === "es" ? "Móvil" : "Mobile",
      api: "API",
      laravel: "Laravel",
      dotnet: ".NET",
      vue: "Vue.js",
      fullstack: "Fullstack"
    },
    ctaDemo: language === "es" ? "Ver Demo" : "View Demo",
    ctaCode: language === "es" ? "Código" : "Code",
  };

  // Proyectos actualizados
  const projects = [
    {
      id: 1,
      title: "Automobiles Concurso",
      description:
        language === "es"
          ? "Aplicación web con Laravel para gestionar concursos de automóviles. Incluye gestión de departamentos, ciudades, participantes y ganadores."
          : "Laravel web application for managing automobile contests. Includes departments, cities, participants and winners management.",
      image: "/projects/automobiles-concurso1.png",
      tags: ["Laravel", "MySQL", "TailwindCSS", "Docker"],
      category: "laravel",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/Automobiles-Concurso",
    },
    {
      id: 2,
      title: "Stripe Wallet",
      description:
        language === "es"
          ? "Sistema de gestión de transacciones con Stripe. Implementa webhooks, simulación de pagos y gestión de saldos."
          : "Stripe transaction management system. Implements webhooks, payment simulation and balance management.",
      image: "/projects/stripe-wallet.png",
      tags: ["Laravel", "Stripe API", "MySQL", "Docker"],
      category: "laravel",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/wallet-app",
    },
    {
      id: 3,
      title: "Gestión de Cócteles",
      description:
        language === "es"
          ? "Aplicación para gestionar cócteles consumiendo TheCocktailDB API. Incluye favoritos y CRUD completo."
          : "Cocktail management app fetching TheCocktailDB API. Includes favorites and full CRUD functionality.",
      image: "/projects/cocktail-app.png",
      tags: ["Laravel", "Vue.js", "MySQL", "TailwindCSS"],
      category: "fullstack",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/gestion-cocktails",
    },
    {
      id: 4,
      title: "Catálogo de Productos",
      description:
        language === "es"
          ? "Sistema CRUD para gestión de catálogo de productos con ASP.NET Core y React."
          : "Product catalog CRUD system with ASP.NET Core and React.",
      image: "/projects/product-catalog.jpg",
      tags: ["ASP.NET Core", "React", "MySQL", "Docker"],
      category: "dotnet",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/backend-catalogoproductos",
    },
    {
      id: 5,
      title: "Rick and Morty App",
      description:
        language === "es"
          ? "Aplicación web con React y Laravel que consume la API de Rick y Morty. Incluye búsqueda, filtros y favoritos."
          : "Web app with React and Laravel fetching Rick and Morty API. Includes search, filters, and favorites.",
      image: "/projects/rick-and-morty.jpg",
      tags: ["React", "Laravel", "API REST", "Docker"],
      category: "fullstack",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/backend-rickandmorty",
    },
    {
      id: 6,
      title: "Reserva de Libros",
      description:
        language === "es"
          ? "Sistema de reserva de libros con autenticación, filtros por categoría y gestión de reservas."
          : "Book reservation system with authentication, category filters and reservation management.",
      image: "/projects/book-reservation.jpg",
      tags: ["Laravel", "Vue.js", "MySQL", "Docker"],
      category: "fullstack",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/backend_igniweb",
    },
    {
      id: 7,
      title: "Konecta Bank App",
      description:
        language === "es"
          ? "Aplicación bancaria para venta de productos financieros con roles de administrador y asesor."
          : "Banking app for financial products sales with admin and advisor roles.",
      image: "/projects/konecta-bank.jpg",
      tags: ["Node.js", "React", "MySQL", "Docker"],
      category: "fullstack",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/Konectta",
    },
    {
      id: 8,
      title: "Decameron Hotel Manager",
      description:
        language === "es"
          ? "Sistema de gestión hotelera para Hoteles Decameron con información de habitaciones y acomodaciones."
          : "Hotel management system for Decameron Hotels with room and accommodation information.",
      image: "/projects/decameron-hotel.jpg",
      tags: ["Laravel", "Vue.js", "PostgreSQL", "Docker"],
      category: "fullstack",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/decameron-hotel-api",
    },
    {
      id: 9,
      title: "EcomCore-API",
      description:
        language === "es"
          ? "Plataforma e-commerce con microservicios en Laravel, AWS y frontend en Vue.js."
          : "E-commerce platform with Laravel microservices, AWS and Vue.js frontend.",
      image: "/projects/ecom-core.jpg",
      tags: ["Laravel", "Vue.js", "AWS", "Microservices"],
      category: "fullstack",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/EcomCore-API",
    },
    {
      id: 10,
      title: "API Gestión Empresas",
      description:
        language === "es"
          ? "API CRUD para gestión de compañías, contactos y notas con autenticación JWT y relaciones polimórficas."
          : "CRUD API for companies, contacts and notes management with JWT auth and polymorphic relations.",
      image: "/projects/companies-api.png",
      tags: ["Laravel", "JWT", "MySQL", "Swagger", "Docker"],
      category: "laravel",
      demoUrl: null,
      codeUrl: "https://github.com/lokogam/api-empresas-contactos",
    }
  ];

  // Filtrar proyectos
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= filteredProjects.length ? 0 : prevIndex + projectsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - projectsPerPage < 0 ? 
        Math.max(0, filteredProjects.length - projectsPerPage) : 
        prevIndex - projectsPerPage
    );
  };

  const visibleProjects = filteredProjects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {content.title}
        </h2>

        {/* Carrusel de Proyectos */}
        <div className="relative">
          {/* Botón anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Contenedor de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                {/* Imagen del proyecto */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botones - siempre al final */}
                  <div className="mt-auto pt-4">
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors flex-grow text-center"
                        >
                          {content.ctaDemo}
                        </a>
                      )}
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md text-sm font-medium transition-colors flex-grow text-center"
                      >
                        {content.ctaCode}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón siguiente */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
// // src/components/Projects.jsx
// const projects = [
//     {
//       title: 'Rick and Morty App',
//       description: 'App con React y Laravel que consume la API pública y permite CRUD de personajes.',
//       link: 'https://bit.ly/Duvan_gamboa'
//     },
//     // Puedes agregar más proyectos
//   ]
  
//   export default function Projects() {
//     return (
//       <section className="px-6 py-16 bg-gray-50 dark:bg-gray-800">
//         <div className="max-w-5xl mx-auto">
//           <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
//             Proyectos
//           </h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {projects.map((proj, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
//                   {proj.title}
//                 </h4>
//                 <p className="text-gray-700 dark:text-gray-300">
//                   {proj.description}
//                 </p>
//                 <a
//                   href={proj.link}
//                   className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
//                 >
//                   Ver proyecto →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }


  import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  // Contenido traducible
  const content = {
    title: language === "es" ? "Proyectos Destacados" : "Featured Projects",
    filters: {
      all: language === "es" ? "Todos" : "All",
      web: language === "es" ? "Web" : "Web",
      mobile: language === "es" ? "Móvil" : "Mobile",
      api: "API",
    },
    ctaDemo: language === "es" ? "Ver Demo" : "View Demo",
    ctaCode: language === "es" ? "Código" : "Code",
  };

  // Proyectos (ejemplo)
  const projects = [
    {
      id: 1,
      title: "Rick and Morty App",
      description:
        language === "es"
          ? "Aplicación web con React y Laravel que consume la API de Rick y Morty. Incluye búsqueda, filtros y favoritos."
          : "Web app with React and Laravel fetching Rick and Morty API. Includes search, filters, and favorites.",
      image: "/projects/rick-and-morty.jpg", // Ruta a la imagen
      tags: ["React", "Laravel", "API REST"],
      category: "web",
      demoUrl: "https://demo-rickandmorty.com",
      codeUrl: "https://github.com/tu-usuario/rickandmorty-app",
    },
    {
      id: 2,
      title: "Task Manager API",
      description:
        language === "es"
          ? "API escalable para gestión de tareas con autenticación JWT y Docker."
          : "Scalable task manager API with JWT auth and Docker.",
      image: "/projects/task-manager.jpg",
      tags: ["Node.js", "Express", "MongoDB"],
      category: "api",
      demoUrl: null, // Si no hay demo
      codeUrl: "https://github.com/tu-usuario/task-manager-api",
    },
    // Agrega más proyectos...
  ];

  // Filtrar proyectos
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {content.title}
        </h2>

        {/* Filtros (opcional) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            {Object.entries(content.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === key
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Imagen del proyecto */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
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

                {/* Botones */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                    >
                      {content.ctaDemo}
                    </a>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md text-sm font-medium transition-colors"
                  >
                    {content.ctaCode}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
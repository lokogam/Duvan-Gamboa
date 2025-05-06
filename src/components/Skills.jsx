// src/components/Skills.jsx



//   const certificaciones = [
//     {
//       institucion: 'SENA',
//       items: [
//         'Variables y Estructuras de Control en Programación Orientada a Objetos: Java',
//         'Desarrollo de Aplicaciones con Interfaz Gráfica, Manejo de Eventos, Clases y Objetos: Java',
//         'Desarrollo de Aplicaciones con Manejo de Datos en Memoria: Java',
//         'Desarrollo de Habilidades Digitales para la Gestión de Información',
//         'Análisis para el Desarrollo Móvil con App Inventor',
//         'Aprendiz Digital',
//         'Habilidades para la Vida',
//         'English Dot Works 2',
//         'Redes y Seguridad'
//       ]
//     },
//     {
//       institucion: 'LinkedIn',
//       items: [
//         'Integración HTML y CSS Esencial',
//         'Fundamentos de Programación: Diseño Orientado a Objetos',
//         'GitHub para Desarrolladores',
//         'HTML Esencial'
//       ]
//     },
//     {
//       institucion: 'Coursera',
//       items: [
//         'Cómo resolver problemas y tomar decisiones con eficacia (University of California, Irvine)',
//         'Data Analysis with Python (IBM)'
//       ]
//     },
//     {
//       institucion: 'Platzi',
//       items: [
//         'Frontend con React.js',
//         'Desarrollo Web Backend con PHP',
//         'JavaScript Práctico',
//         'JavaScript Profesional',
//         'Curso de PHP Laravel',
//         'Introducción a Laravel',
//         'Laravel SPA',
//         'Laravel Avanzado',
//         'PHP Avanzado',
//         'Vue Avanzado',
//         'Vuejs Profesional',
//         'Git y GitHub',
//         'Economía Digital',
//         'Historia del Bitcoin',
//         'Historia de Ethereum',
//         'Blockchain de Bitcoin',
//         'Fundamentos de Arquitectura de Software',
//         'Profesional de Arquitectura de Software',
//         'Prework para Desarrollo de Aplicaciones Blockchain 2021',
//         'Java SE Orientado a Objetos',
//         'Introducción a Solidity',
//         'Introducción a Celo con Solidity',
//         'Curso de Docker',
//         'Angular: Creación de Aplicaciones Web'
//       ]
//     }
//   ];



import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { language } = useLanguage();

  // Contenido traducible
  const content = {
    title: language === "es" ? "Habilidades y Certificaciones" : "Skills & Certifications",
    skillsTitle: language === "es" ? "Habilidades Técnicas" : "Technical Skills",
    certificationsTitle: language === "es" ? "Certificaciones" : "Certifications",
  };


  // Habilidades agrupadas por categoría
  const skills = {
    languages: ["PHP", "JavaScript", , "Java", "SQL",  "TypeScript", "Python"],
    frameworks: ["Laravel", "React", "Node.js",  "Vue.js",  "Next.js"],
    databases: ["MySQL",  "MongoDB", "Redis", ],
    devops: ["Docker",  "Git", "GitHub Actions" ],
    design: [ "Tailwind CSS", "Bootstrap", "jQuery", "HTML", "CSS", ],
    other: ["APIs RESTful", "Linux", 'Scrum',"JSON" ],
  };

  // Certificaciones (ejemplo)
  const certifications = [
    {
      issuer: "Platzi",
      name: language === "es" ? "Frontend con React.js" : "Frontend with React.js",
      year: "2023",
    },
    {
      issuer: "AWS",
      name: language === "es" ? "Fundamentos de AWS" : "AWS Fundamentals",
      year: "2022",
    },
    {
      issuer: "SENA",
      name: language === "es" ? "Desarrollo de APIs RESTful" : "RESTful API Development",
      year: "2021",
    },
    // Agrega más...
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {content.title}
        </h2>

        {/* Habilidades */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
            {content.skillsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        {/* <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
            {content.certificationsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
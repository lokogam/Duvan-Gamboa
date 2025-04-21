// // src/components/About.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  // Contenido traducible
  const content = {
    title: language === "es" ? "Sobre mí" : "About Me",
    profileTitle:
      language === "es" ? "Perfil Profesional" : "Professional Profile",
    profileText:
      language === "es"
        ? `🚀 Tecnólogo en Desarrollo de Software con experiencia en Laravel, Node.js, Vue, React y tecnologías Cloud e Inteligencia Artificial. Transformo ideas en soluciones digitales escalables que impulsan la eficiencia operativa y la innovación.
💡 Desarrollo aplicaciones web optimizadas, automatizo procesos y creo APIs RESTful eficientes para integrar sistemas y mejorar la experiencia de usuario.
🔥 Apasionado por la convergencia entre backend, cloud computing e IA, buscando siempre liderar proyectos transformadores con alto impacto técnico y social.`
        : `🚀 Software Technologist with experience in Laravel, Node.js, Vue, React, and Cloud & AI technologies. I transform ideas into scalable digital solutions that drive operational efficiency and innovation.
💡 I develop optimized web applications, automate processes, and build efficient RESTful APIs to integrate systems and enhance user experience.
🔥 Passionate about the convergence of backend, cloud computing, and AI, always looking to lead high-impact and transformative projects.`,
    experienceTitle:
      language === "es" ? "Experiencia Laboral" : "Work Experience",
    educationTitle: language === "es" ? "Educación" : "Education",
  };

  const experiences = [
    {
      role:
        language === "es"
          ? "Desarrollador Semi-Senior"
          : "Semi-Senior Developer",
      company: "LinkTIC",
      period:
        language === "es"
          ? "Agosto 2024 - Enero 2025 | Remoto"
          : "Aug 2024 - Jan 2025 | Remote",
      highlights:
        language === "es"
          ? [
              "Desarrollé y mantuve aplicaciones con PHP, Java y Docker, trabajando en modalidad remota.",
              "Participé en el desarrollo de apps móviles multiplataforma con Xamarin, agregando nuevas funcionalidades.",
              "Optimicé consultas y realicé mantenimiento de bases de datos SQL y MySQL, mejorando el rendimiento.",
              "Asistí a reuniones clave para definir el alcance y apoyar el diseño técnico de soluciones.",
              "Aseguré el cumplimiento de políticas de seguridad y lineamientos internos.",
            ]
          : [
              "Developed and maintained applications using PHP, Java, and Docker, working remotely.",
              "Participated in cross-platform mobile app development with Xamarin, implementing new features.",
              "Optimized queries and maintained SQL/MySQL databases, improving performance.",
              "Joined key meetings to define scope and support technical solution design.",
              "Ensured compliance with security policies and internal guidelines.",
            ],
    },
    {
      role: language === "es" ? "Desarrollador Web" : "Web Developer",
      company: "Wescreativo",
      period:
        language === "es"
          ? "Julio 2022 - Mayo 2024 | Medellín / Remoto"
          : "Jul 2022 - May 2024 | Medellín / Remote",
      highlights:
        language === "es"
          ? [
              "Desarrollé funcionalidades clave con Laravel y React usando Inertia, mejorando escalabilidad.",
              "Colaboré con diseñadores y desarrolladores para una integración fluida y eficiente.",
              "Implementé pruebas automatizadas y mantuve documentación técnica actualizada.",
              "Participé en proyectos con tecnologías como Node.js, Tailwind, WordPress, Docker y AWS S3.",
              "Utilicé Git y GitHub para control de versiones y resolución de errores en producción.",
            ]
          : [
              "Developed key features with Laravel and React using Inertia, enhancing scalability.",
              "Collaborated with designers and developers for smooth and efficient integration.",
              "Implemented automated tests and maintained updated technical documentation.",
              "Worked on projects using Node.js, Tailwind, WordPress, Docker, and AWS S3.",
              "Used Git and GitHub for version control and resolved production issues.",
            ],
    },
    {
      role:
        language === "es"
          ? "Desarrollador Web (Prácticas)"
          : "Web Developer (Internship)",
      company: "Corporación Educativa Indoamericana",
      period:
        language === "es"
          ? "Noviembre 2021 - Mayo 2022 | Bogotá"
          : "Nov 2021 - May 2022 | Bogotá",
      highlights:
        language === "es"
          ? [
              "Desarrollé y mantuve aplicaciones web con PHP y JavaScript, asegurando escalabilidad.",
              "Colaboré en el desarrollo de nuevas funcionalidades y corrección de errores.",
              "Optimicé rendimiento mediante mejoras en consultas MySQL.",
              "Usé Git y GitHub para mantener un flujo de trabajo colaborativo.",
              "Participé en reuniones técnicas para proponer mejoras en la arquitectura.",
            ]
          : [
              "Developed and maintained web apps using PHP and JavaScript, ensuring scalability.",
              "Collaborated on new features and bug fixing to improve user experience.",
              "Improved performance through MySQL query optimization.",
              "Used Git and GitHub to maintain a collaborative workflow.",
              "Joined technical meetings to propose architectural improvements.",
            ],
    },
  ];

  const education = [
    {
      degree: language === "es" 
        ? "Tecnólogo en Análisis y Desarrollo de Sistemas de Información" 
        : "Technologist in Information Systems Analysis and Development",
      institution: "SENA",
      period: language === "es" ? "Marzo 2020 - Octubre 2022" : "March 2020 - October 2022",
    },
    {
      degree: language === "es" 
        ? "Carreras: Frontend con React.js y Backend con PHP (Platzi)" 
        : "Careers: Frontend with React.js & Backend with PHP (Platzi)",
      institution: "Platzi",
      period: language === "es" ? "Enero 2022 - Febrero 2023" : "January 2022 - February 2023",
    },
    {
      degree: language === "es" 
        ? "Curso de inglés (En curso)" 
        : "English Course (In progress)",
      institution: "Smart Academia de Idiomas",
      period: language === "es" ? "Enero 2024 - Actualidad" : "January 2024 - Present",
    },
    {
      degree: language === "es" 
        ? "Ingeniería de Sistemas (En curso)" 
        : "Systems Engineering (In progress)",
      institution: "Universidad Nacional Abierta y a Distancia - UNAD",
      period: language === "es" ? "Enero 2024 - Actualidad" : "January 2024 - Present",
    },
  ];
  

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {content.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Sección de Perfil */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {content.profileTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {content.profileText}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Laravel",
                "Vue",
                "React",
                "Node.js",
                "Docker",
                "MySQL",
                "AWS",
                "Python",
                "Inteligencia Artificial",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Sección de Experiencia */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              {content.experienceTitle}
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {exp.role} - {exp.company}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {exp.period}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sección de Educación */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              {content.educationTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// // src/components/About.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import {
  SiDocker,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiVuedotjs,
} from "react-icons/si";
import { FaAws, FaBrain } from "react-icons/fa6";

export default function About() {
  const { language } = useLanguage();
  const Motion = motion;

  const technologyBadges = [
    {
      name: "Laravel",
      Icon: SiLaravel,
      iconColor: "text-red-600",
      className: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-100",
    },
    {
      name: "Vue",
      Icon: SiVuedotjs,
      iconColor: "text-emerald-600",
      className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-100",
    },
    {
      name: "React",
      Icon: SiReact,
      iconColor: "text-cyan-500",
      className: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-100",
    },
    {
      name: "Node.js",
      Icon: SiNodedotjs,
      iconColor: "text-lime-600",
      className: "bg-lime-100 text-lime-800 dark:bg-lime-950/60 dark:text-lime-100",
    },
    {
      name: "Docker",
      Icon: SiDocker,
      iconColor: "text-sky-600",
      className: "bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-100",
    },
    {
      name: "MySQL",
      Icon: SiMysql,
      iconColor: "text-amber-700",
      className: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-100",
    },
    {
      name: "AWS",
      Icon: FaAws,
      iconColor: "text-orange-500",
      className: "bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-100",
    },
    {
      name: "Python",
      Icon: SiPython,
      iconColor: "text-violet-700",
      className: "bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-100",
    },
    {
      name: "Inteligencia Artificial",
      Icon: FaBrain,
      iconColor: "text-fuchsia-700",
      className: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950/60 dark:text-fuchsia-100",
    },
  ];

  // Contenido traducible
  const content = {
    title: language === "es" ? "Sobre mí" : "About Me",
    profileTitle:
      language === "es" ? "Perfil Profesional" : "Professional Profile",
    profileText:
      language === "es"
        ? `🚀 Tecnólogo en Desarrollo de Software con más de 4 años de experiencia profesional en Laravel, Node.js, Vue, React y tecnologías Cloud e Inteligencia Artificial. Transformo ideas en soluciones digitales escalables que impulsan la eficiencia operativa y la innovación.
        💡 Desarrollo aplicaciones web optimizadas, automatizo procesos y creo APIs RESTful eficientes para integrar sistemas y mejorar la experiencia de usuario.
        🔥 Apasionado por la convergencia entre backend, cloud computing e IA, buscando siempre liderar proyectos transformadores con alto impacto técnico y social.`
        : `Software Technologist with over 4 years of professional experience in Laravel, Node.js, Vue, React, and Cloud & AI technologies. I transform ideas into scalable digital solutions that drive operational efficiency and innovation.
        💡 I develop optimized web applications, automate processes, and build efficient RESTful APIs to integrate systems and enhance user experience.
        🔥 Passionate about the convergence of backend, cloud computing, and AI, always looking to lead high-impact and transformative projects.`,
    experienceTitle:
      language === "es" ? "Experiencia Laboral" : "Work Experience",
    educationTitle: language === "es" ? "Educación" : "Education",
  };

  const experiences = [
    {
      role: language === "es" ? "Desarrollador Full Stack" : "Full Stack Developer",
      company: "EduLabs",
      period:
        language === "es"
          ? "Nov. 2025 - May. 2026 | Remoto"
          : "Nov. 2025 - May. 2026 | Remote",
      highlights:
        language === "es"
          ? [
              "Participé en el desarrollo de soluciones tecnológicas para el sector educativo, enfocadas en plataformas basadas en Moodle.",
              "Desarrollo, mantenimiento y actualización de plugins personalizados en Moodle utilizando PHP.",
              "Gestión y optimización de bases de datos MySQL y PostgreSQL para mejorar el rendimiento de la plataforma.",
              "Implementación de nuevas funcionalidades y mejoras evolutivas en sistemas educativos existentes.",
              "Participación activa en la planificación, estimación y desarrollo de tareas bajo metodología ágil (Scrum).",
              "Colaboración en un equipo de 6 desarrolladores, trabajando de forma remota y coordinada.",
              "Interacción directa con clientes para levantamiento de requerimientos y validación de soluciones técnicas.",
              "Integración y participación en un proyecto enfocado en soluciones educativas apoyadas con inteligencia artificial.",
              "Resolución de incidencias y soporte técnico en entornos productivos.",
            ]
          : [
              "Participated in developing technological solutions for the education sector, focused on Moodle-based platforms.",
              "Developed, maintained, and updated custom Moodle plugins using PHP.",
              "Managed and optimized MySQL and PostgreSQL databases to improve platform performance.",
              "Implemented new features and evolutionary improvements in existing educational systems.",
              "Actively participated in planning, estimation, and development of tasks under Scrum methodology.",
              "Collaborated in a team of 6 developers, working remotely and coordinately.",
              "Direct interaction with clients for requirements gathering and technical solution validation.",
              "Integration and participation in projects focused on AI-supported educational solutions.",
              "Incident resolution and technical support in production environments.",
            ],
    },
    {
      role: language === "es" ? "Desarrollador Web" : "Web Developer",
      company: "Involve, LLC",
      period:
        language === "es"
          ? "ago. 2025 - oct. 2025 · 3 meses | Argentina · En remoto"
          : "Aug 2025 - Oct 2025 · 3 months | Argentina · Remote",
      highlights:
        language === "es"
          ? [
              "Presté servicios de desarrollo web bajo la modalidad contractor, participando en la construcción, mantenimiento y soporte de sistemas internos y proyectos de clientes.",
              "Desarrollo de módulos administrativos y conexión de APIs RESTful utilizando Laravel y Node.js.",
              "Integración de sistemas y optimización de funcionalidades existentes para mejorar el rendimiento y escalabilidad.",
              "Implementación de validaciones, manejo de errores y autenticación con JWT.",
              "Coordinación con equipos multidisciplinarios mediante Slack y gestión de tareas en Jira.",
              "Refactorización de código y estandarización de controladores y servicios.",
              "Apoyo en procesos de soporte técnico y mantenimiento evolutivo de aplicaciones en producción.",
              "Trabajo colaborativo en proyectos utilizando Docker, GitHub y bases de datos MySQL.",
            ]
          : [
              "Provided web development services as a contractor, participating in the construction, maintenance, and support of internal systems and client projects.",
              "Developed administrative modules and connected RESTful APIs using Laravel and Node.js.",
              "Integrated systems and optimized existing functionalities to improve performance and scalability.",
              "Implemented validations, error handling, and authentication with JWT.",
              "Coordinated with multidisciplinary teams via Slack and managed tasks in Jira.",
              "Refactored code and standardized controllers and services.",
              "Provided technical support and evolutionary maintenance of production applications.",
              "Collaborated on projects using Docker, GitHub, and MySQL databases.",
            ],
    },
    {
      role: language === "es" ? "Desarrollador Backend" : "Backend Developer",
      company: "Grupo Alianza - Gestión Efectiva del Talento Humano",
      period:
        language === "es"
          ? "jun. 2025 - ago. 2025 · 3 meses | Remoto"
          : "Jun 2025 - Aug 2025 · 3 months | Remote",
      highlights:
        language === "es"
          ? [
              "Desarrollador Backend & Fullstack Parcial especializado en Laravel, MySQL y Vue.js.",
              "Diseñé, refactoricé y optimicé módulos internos para plataformas de gestión.",
              "Unifiqué lógicas repetidas para reducir código duplicado y mejorar la escalabilidad.",
              "Optimicé consultas SQL, evitando problemas N+1 y mejorando paginaciones, filtrados y rankings.",
              "Automaticé procesos como importaciones masivas utilizando Laravel Excel.",
              "Documentación técnica y organización de tareas por proyectos y bloques de tiempo.",
            ]
          : [
              "Backend & Partial Fullstack Developer specialized in Laravel, MySQL, and Vue.js.",
              "Designed, refactored, and optimized internal modules for management platforms.",
              "Unified repeated logic to reduce code duplication and improve scalability.",
              "Optimized SQL queries, avoiding N+1 problems and improving pagination, filtering, and rankings.",
              "Automated processes such as bulk imports using Laravel Excel.",
              "Technical documentation and task organization by projects and time blocks.",
            ],
    },
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
      degree:
        language === "es"
          ? "Tecnólogo en Análisis y Desarrollo de Sistemas de Información"
          : "Technologist in Information Systems Analysis and Development",
      institution: "SENA",
      period:
        language === "es"
          ? "Marzo 2020 - Octubre 2022"
          : "March 2020 - October 2022",
    },
    {
      degree:
        language === "es"
          ? "Carreras: Frontend con React.js y Backend con PHP (Platzi)"
          : "Careers: Frontend with React.js & Backend with PHP (Platzi)",
      institution: "Platzi",
      period:
        language === "es"
          ? "Enero 2022 - Febrero 2023"
          : "January 2022 - February 2023",
    },
    {
      degree:
        language === "es"
          ? "Curso de inglés (En curso)"
          : "English Course (In progress)",
      institution: "Smart Academia de Idiomas",
      period:
        language === "es"
          ? "Enero 2024 - Actualidad"
          : "January 2024 - Present",
    },
    {
      degree:
        language === "es"
          ? "Ingeniería de Sistemas (En curso)"
          : "Systems Engineering (In progress)",
      institution: "Universidad Nacional Abierta y a Distancia - UNAD",
      period:
        language === "es"
          ? "Enero 2024 - Actualidad"
          : "January 2024 - Present",
    },
  ];

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
          {content.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Sección de Perfil */}
          <Motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              {content.profileTitle}
            </h3>
            <p className="whitespace-pre-line text-slate-600 dark:text-slate-300">
              {content.profileText}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {technologyBadges.map((tech, index) => (
                <Motion.span
                  key={tech.name}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.28, delay: index * 0.05, type: "spring", stiffness: 260, damping: 20 }}
                  className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium shadow-sm ring-1 ring-black/5 backdrop-blur-sm ${tech.className}`}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/70 shadow-sm dark:bg-black/20">
                    <tech.Icon className={`h-4 w-4 ${tech.iconColor}`} aria-hidden="true" />
                  </span>
                  <span>{tech.name}</span>
                </Motion.span>
              ))}
            </div>
          </Motion.div>

          {/* Sección de Experiencia */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              {content.experienceTitle}
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.32, delay: index * 0.04 }}
                  className="glass-card rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {exp.role} - {exp.company}
                  </h4>
                  <p className="mb-4 text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Sección de Educación */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              {content.educationTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.28, delay: index * 0.06 }}
                  className="glass-card rounded-lg p-6 shadow-md"
                >
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400">
                    {edu.period}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

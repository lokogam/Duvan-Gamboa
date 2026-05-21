// // src/components/About.jsx
import React, { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { gsap, SplitText, useGSAP } from "../lib/gsapSetup";
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
  const sectionRef = useRef(null);
  const isLowPowerDevice =
    typeof window !== "undefined" &&
    (window.matchMedia("(pointer: coarse)").matches ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4));

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

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(q(".gsap-split-text, .gsap-split-button"), { clearProps: "all" });
        return;
      }

      const splitInstances = [];
      q(".gsap-split-text").forEach((target) => {
        const textLength = target.textContent?.trim().length ?? 0;
        const isHeading = /^H[1-6]$/.test(target.tagName);
        const useCharSplit = !isLowPowerDevice && (isHeading || textLength <= 90);
        const split = SplitText.create(target, {
          type: useCharSplit ? "words,chars" : "words",
          mask: useCharSplit ? "chars" : "words",
          charsClass: "gsap-char",
        });
        splitInstances.push(split);

        const units = useCharSplit ? split.chars : split.words;
        gsap.from(units, {
          yPercent: useCharSplit ? 105 : 35,
          autoAlpha: 0,
          ease: "power3.out",
          duration: useCharSplit ? 0.55 : 0.42,
          stagger: useCharSplit ? 0.012 : 0.02,
          scrollTrigger: {
            trigger: target,
            start: "top 88%",
            once: true,
          },
        });
      });

      q(".gsap-split-button").forEach((target) => {
        const split = SplitText.create(target, {
          type: "words",
          wordsClass: "gsap-badge-word++",
          ignore: ".gsap-split-ignore,svg,path",
        });
        splitInstances.push(split);

        gsap.from(split.words, {
          y: isLowPowerDevice ? -14 : -38,
          autoAlpha: 0,
          rotation: isLowPowerDevice ? 0 : "random(-35, 35)",
          transformOrigin: "50% 100%",
          ease: isLowPowerDevice ? "power2.out" : "back.out(1.6)",
          duration: isLowPowerDevice ? 0.45 : 0.78,
          stagger: isLowPowerDevice ? 0.03 : 0.08,
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
            once: true,
          },
        });
      });

      // Match only direct badge items to avoid animating nested elements.
      const techBadges = q(".gsap-about-tech-list > .gsap-about-tech");
      const listeners = [];
      if (!isLowPowerDevice && window.matchMedia("(pointer: fine)").matches) {
        techBadges.forEach((badge) => {
        const rotXTo = gsap.quickTo(badge, "rotationX", { duration: 0.25, ease: "power2.out" });
        const rotYTo = gsap.quickTo(badge, "rotationY", { duration: 0.25, ease: "power2.out" });
        const xTo = gsap.quickTo(badge, "x", { duration: 0.25, ease: "power2.out" });
        const yTo = gsap.quickTo(badge, "y", { duration: 0.25, ease: "power2.out" });

        const onMove = (event) => {
          const rect = badge.getBoundingClientRect();
          const relX = (event.clientX - rect.left) / rect.width - 0.5;
          const relY = (event.clientY - rect.top) / rect.height - 0.5;
          rotXTo(relY * -10);
          rotYTo(relX * 12);
          xTo(relX * 4);
          yTo(relY * 4);
        };

        const onLeave = () => {
          rotXTo(0);
          rotYTo(0);
          xTo(0);
          yTo(0);
        };

          badge.addEventListener("mousemove", onMove);
          badge.addEventListener("mouseleave", onLeave);
          listeners.push({ badge, onMove, onLeave });
        });
      }

      return () => {
        listeners.forEach(({ badge, onMove, onLeave }) => {
          badge.removeEventListener("mousemove", onMove);
          badge.removeEventListener("mouseleave", onLeave);
        });
        splitInstances.forEach((split) => split.revert());
      };
    },
    { scope: sectionRef, dependencies: [language, isLowPowerDevice], revertOnUpdate: true }
  );

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="gsap-split-text mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
          {content.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Sección de Perfil */}
          <Motion.div
            className="gsap-about-block mb-12"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="gsap-split-text mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              {content.profileTitle}
            </h3>
            <p className="gsap-split-text whitespace-pre-line text-slate-600 dark:text-slate-300">
              {content.profileText}
            </p>
            <div className="gsap-about-tech-list mt-6 flex flex-wrap gap-2">
              {technologyBadges.map((tech) => (
                <Motion.span
                  key={tech.name}
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`gsap-about-tech gsap-split-button gsap-ignore-nested flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium shadow-sm ring-1 ring-black/5 backdrop-blur-sm ${tech.className}`}
                >
                  <span className="gsap-split-ignore flex h-6 w-6 items-center justify-center rounded-full bg-white/70 shadow-sm dark:bg-black/20">
                    <tech.Icon className={`h-4 w-4 ${tech.iconColor}`} aria-hidden="true" />
                  </span>
                  <span>{tech.name}</span>
                </Motion.span>
              ))}
            </div>
          </Motion.div>

          {/* Sección de Experiencia */}
          <div className="gsap-about-block mb-12">
            <h3 className="gsap-split-text mb-6 text-xl font-semibold text-slate-900 dark:text-white">
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
                  className="gsap-about-card glass-card rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <h4 className="gsap-split-text text-lg font-semibold text-slate-900 dark:text-white">
                    {exp.role} - {exp.company}
                  </h4>
                  <p className="gsap-split-text mb-4 text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="gsap-split-text">{item}</li>
                    ))}
                  </ul>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Sección de Educación */}
          <div className="gsap-about-block">
            <h3 className="gsap-split-text mb-6 text-xl font-semibold text-slate-900 dark:text-white">
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
                  className="gsap-about-card glass-card rounded-lg p-6 shadow-md"
                >
                  <h4 className="gsap-split-text text-lg font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="gsap-split-text mt-1 text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </p>
                  <p className="gsap-split-text mt-2 text-slate-500 dark:text-slate-400">
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

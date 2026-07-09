import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsapSetup";

export default function Hero() {
  const { language } = useLanguage();
  const Motion = motion;
  const sectionRef = useRef(null);
  const baseUrl = `${import.meta.env.BASE_URL || "/"}`.replace(/\/?$/, "/");
  const isLowPowerDevice =
    typeof window !== "undefined" &&
    (window.matchMedia("(pointer: coarse)").matches ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4));

  // Textos traducibles
  const content = {
    title:
      language === "es" ? "Desarrollador Full Stack" : "Full Stack Developer",
    tagline:
      language === "es"
        ? "Transformo ideas en soluciones digitales escalables"
        : "I turn ideas into scalable digital solutions",
    location: language === "es" ? "Ubicación: Colombia" : "Location: Colombia",
    ctaPrimary: language === "es" ? "Ver CV" : "View Resume",
    ctaSecondary: language === "es" ? "Contáctame" : "Contact Me",
  };

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(q(".gsap-hero-copy > *"), { autoAlpha: 1, y: 0, clearProps: "all" });
        gsap.set(q(".gsap-horizontal-line"), { clearProps: "transform" });
        return;
      }

      gsap.set(q(".gsap-hero-avatar"), { clearProps: "visibility", opacity: 1 });
      gsap.set(q(".gsap-hero-copy > *"), { autoAlpha: 1, y: 0, clearProps: "visibility" });
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        q(".gsap-hero-avatar"),
        {
          opacity: 0,
          y: 30,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
        },
      )
        .from(
          q(".gsap-hero-copy > *"),
          {
            autoAlpha: 0,
            y: 18,
            stagger: 0.08,
            duration: 0.5,
          },
          "-=0.35",
        )
        .from(
          q(".gsap-hero-social"),
          {
            autoAlpha: 0,
            y: 12,
            stagger: 0.05,
            duration: 0.35,
          },
          "-=0.25",
        );

      if (!isLowPowerDevice) {
        gsap.to(q(".gsap-hero-avatar img"), {
          y: -10,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (!isLowPowerDevice) {
        gsap.to(q(".gsap-hero-title"), {
          backgroundPositionX: "200%",
          duration: 4.2,
          repeat: -1,
          ease: "none",
        });
      }

      const horizontalLines = q(".gsap-horizontal-line");
      horizontalLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { xPercent: index % 2 === 0 ? -3 : 3 },
          {
            xPercent: index % 2 === 0 ? 3 : -3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();

      const sparks = q(".gsap-spark");
      if (!isLowPowerDevice && sparks.length) {
        gsap.fromTo(
          sparks,
          { autoAlpha: 0.15, scale: 0.6 },
          {
            autoAlpha: 0.95,
            scale: 1,
            duration: 1.1,
            stagger: 0.16,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        );

        gsap.to(sparks, {
          y: "random(-18, 18)",
          x: "random(-12, 12)",
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.08,
        });
      }

      const canUsePointer = window.matchMedia("(pointer: fine)").matches;
      const heroElement = sectionRef.current;
      const avatarElement = q(".gsap-hero-avatar")[0];
      const copyElement = q(".gsap-hero-copy")[0];
      const leftBlob = q(".gsap-blob-left")[0];
      const rightBlob = q(".gsap-blob-right")[0];

      if (isLowPowerDevice || !canUsePointer || !heroElement || !avatarElement || !copyElement || !leftBlob || !rightBlob) {
        return;
      }

      const avatarXTo = gsap.quickTo(avatarElement, "x", { duration: 0.5, ease: "power3.out" });
      const avatarYTo = gsap.quickTo(avatarElement, "y", { duration: 0.5, ease: "power3.out" });
      const avatarRotXTo = gsap.quickTo(avatarElement, "rotationX", { duration: 0.45, ease: "power3.out" });
      const avatarRotYTo = gsap.quickTo(avatarElement, "rotationY", { duration: 0.45, ease: "power3.out" });
      const copyXTo = gsap.quickTo(copyElement, "x", { duration: 0.7, ease: "power3.out" });
      const copyYTo = gsap.quickTo(copyElement, "y", { duration: 0.7, ease: "power3.out" });
      const leftBlobXTo = gsap.quickTo(leftBlob, "x", { duration: 0.9, ease: "power3.out" });
      const leftBlobYTo = gsap.quickTo(leftBlob, "y", { duration: 0.9, ease: "power3.out" });
      const rightBlobXTo = gsap.quickTo(rightBlob, "x", { duration: 1, ease: "power3.out" });
      const rightBlobYTo = gsap.quickTo(rightBlob, "y", { duration: 1, ease: "power3.out" });

      const onMove = (event) => {
        const rect = heroElement.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
        const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

        avatarXTo(offsetX * 14);
        avatarYTo(offsetY * 14);
        avatarRotXTo(offsetY * -8);
        avatarRotYTo(offsetX * 10);
        copyXTo(offsetX * -8);
        copyYTo(offsetY * -6);
        leftBlobXTo(offsetX * -22);
        leftBlobYTo(offsetY * -18);
        rightBlobXTo(offsetX * 22);
        rightBlobYTo(offsetY * 18);
      };

      const onLeave = () => {
        avatarXTo(0);
        avatarYTo(0);
        avatarRotXTo(0);
        avatarRotYTo(0);
        copyXTo(0);
        copyYTo(0);
        leftBlobXTo(0);
        leftBlobYTo(0);
        rightBlobXTo(0);
        rightBlobYTo(0);
      };

      heroElement.addEventListener("mousemove", onMove);
      heroElement.addEventListener("mouseleave", onLeave);

      return () => {
        heroElement.removeEventListener("mousemove", onMove);
        heroElement.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: sectionRef, dependencies: [language, isLowPowerDevice], revertOnUpdate: true },
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
    >
      {/* Efecto de burbujas decorativas (opcional) */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white"></div>
      </div> */}

      <div className="pointer-events-none absolute inset-0">
        <div className="gsap-blob-left absolute -left-16 top-16 h-52 w-52 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="gsap-blob-right absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        <span className="gsap-spark absolute left-[12%] top-[22%] h-2 w-2 rounded-full bg-cyan-300/80 blur-[1px]" />
        <span className="gsap-spark absolute left-[22%] top-[36%] h-1.5 w-1.5 rounded-full bg-white/80 blur-[1px]" />
        <span className="gsap-spark absolute right-[18%] top-[18%] h-2 w-2 rounded-full bg-amber-300/90 blur-[1px]" />
        <span className="gsap-spark absolute right-[26%] top-[42%] h-1.5 w-1.5 rounded-full bg-cyan-200/90 blur-[1px]" />
        <span className="gsap-spark absolute left-[48%] bottom-[18%] h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagen de perfil */}
          {/* Reemplaza profile.jpg con tu imagen (600x600 px para mejor calidad). */}
          <Motion.div
            className="gsap-hero-avatar h-48 w-48 flex-shrink-0 md:h-64 md:w-64"
          >
            <img
              // src="./profile.jpg"
              // src="Duvan-Gamboa/profile.jpg"
              src={`${import.meta.env.VITE_BASE_URL}/profile.jpg`}
              // Reemplaza con tu imagen
              alt="Duvan Gamboa"
              className="h-full w-full rounded-full border-4 border-white/20 object-cover shadow-2xl shadow-cyan-900/20 transition-transform duration-300 hover:scale-105"
            />
          </Motion.div>

          {/* Texto y botones */}
          <Motion.div
            className="gsap-hero-copy text-left"
          >
            <div className="flex flex-col items-start text-left">
              <h1 className="gsap-hero-title gsap-mask-title mb-2 block text-4xl font-bold leading-none text-slate-900 dark:text-white md:text-6xl">
                <span className="gsap-horizontal-viewport">
                  <span className="gsap-horizontal-line">Duvan Andrés Gamboa</span>
                </span>
              </h1>
              <h2 className="gsap-mask-title mb-4 block text-2xl leading-tight text-slate-700 dark:text-slate-200 md:text-3xl">
                <span className="gsap-horizontal-viewport">
                  <span className="gsap-horizontal-line">{content.title}</span>
                </span>
              </h2>
            </div>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
              {content.tagline}
            </p>

            {/* Botones principales */}
            <div className="flex flex-wrap items-start justify-start gap-4 mb-8">
              <Motion.a
                href={`${baseUrl}cv-nuevo/${language === "es" ? "cv-es.html" : "cv-en.html"}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white shadow-lg shadow-slate-900/20"
              >
                {content.ctaPrimary}
              </Motion.a>
              <Motion.a
                href="#contact"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-slate-300 bg-white/80 px-6 py-3 font-medium text-slate-800 shadow-lg shadow-slate-200/50 backdrop-blur-sm dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-100 dark:shadow-slate-950/30"
              >
                {content.ctaSecondary}
              </Motion.a>
            </div>

            {/* Contacto rápido */}
            <div className="flex flex-wrap items-start justify-start gap-4 text-slate-600 dark:text-slate-300">
              {/* <a
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
              </a> */}
              {/* <a
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
              </a> */}
              {/* LinkedIn */}
              <Motion.a
                href="https://www.linkedin.com/in/duvan-gamboa-5193951b2/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="gsap-hero-social flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2 text-sm backdrop-blur-sm transition-colors hover:text-slate-900 dark:bg-slate-800/60 dark:hover:text-white"
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
              </Motion.a>
              {/* GitHub */}
              <Motion.a
                href="https://github.com/lokogam"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="gsap-hero-social flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2 text-sm backdrop-blur-sm transition-colors hover:text-slate-900 dark:bg-slate-800/60 dark:hover:text-white"
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
              </Motion.a>
            </div>

            <p className="mt-4 text-slate-500 dark:text-slate-400">{content.location}</p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

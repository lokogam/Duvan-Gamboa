// 📁 src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { gsap, useGSAP } from '../lib/gsapSetup';
// https://dashboard.emailjs.com/admin/

export default function Contact() {
  const { language } = useLanguage();
  const Motion = motion;
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Contenido traducible
  const content = {
    title: language === 'es' ? 'Contacto' : 'Contact',
    subtitle: language === 'es' 
      ? '¿Listo para trabajar juntos? Envíame un mensaje.' 
      : 'Ready to work together? Send me a message.',
    form: {
      name: language === 'es' ? 'Nombre' : 'Name',
      email: 'Email',
      message: language === 'es' ? 'Mensaje' : 'Message',
      subject: language === 'es' ? 'Asunto' : 'Subject',
      submit: language === 'es' ? 'Enviar Mensaje' : 'Send Message',
      success: language === 'es' 
        ? '¡Mensaje enviado! Me pondré en contacto pronto.' 
        : 'Message sent! I\'ll get back to you soon.',
      error: language === 'es' 
        ? 'Error al enviar. Por favor inténtalo de nuevo.' 
        : 'Sending error. Please try again.'
    },
    contactInfo: language === 'es' ? 'Información de Contacto' : 'Contact Info',
    availability: language === 'es' ? 'Disponibilidad' : 'Availability',
    workModes: language === 'es' 
      ? ['Remoto', 'Híbrido', 'Presencial', 'Freelance'] 
      : ['Remote', 'Hybrid', 'On-site', 'Freelance'],
    locations: language === 'es' 
      ? ['Medellín', 'Bogotá', 'Bucaramanga', 'Tunja'] 
      : ['Medellín', 'Bogotá', 'Bucaramanga', 'Tunja']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = language === 'es' ? 'Nombre requerido' : 'Name required';
    if (!formData.email.trim()) {
      newErrors.email = language === 'es' ? 'Email requerido' : 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'es' ? 'Email inválido' : 'Invalid email';
    }
    if (!formData.message.trim()) newErrors.message = language === 'es' ? 'Mensaje requerido' : 'Message required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success'); 
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const q = gsap.utils.selector(sectionRef);

      gsap.from(q('.gsap-contact-title, .gsap-contact-subtitle'), {
        autoAlpha: 0,
        y: 16,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      const fields = q('.gsap-contact-field');
      if (fields.length) {
        gsap.from(fields, {
          autoAlpha: 0,
          y: 14,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: fields[0],
            start: 'top 84%',
            once: true,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="gsap-mask-title gsap-contact-title text-3xl font-bold text-slate-900 dark:text-white">
            {content.title}
          </h2>
          <p className="gsap-contact-subtitle mt-2 text-slate-600 dark:text-slate-300">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
          <div className="grid grid-cols-1 gap-8">
            {/* Formulario */}
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="glass-card rounded-2xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="gsap-contact-field">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {content.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 dark:bg-slate-800 dark:border-slate-600 dark:text-white ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="gsap-contact-field">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {content.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 dark:bg-slate-800 dark:border-slate-600 dark:text-white ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* sujeto */}
                  <div className="gsap-contact-field">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {content.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 dark:bg-slate-800 dark:border-slate-600 dark:text-white ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  <div className="gsap-contact-field">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {content.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 dark:bg-slate-800 dark:border-slate-600 dark:text-white ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <div className="gsap-contact-field">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-slate-900 px-6 py-3 font-medium text-white shadow-md shadow-slate-900/20 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        language === 'es' ? 'Enviando...' : 'Sending...'
                      ) : (
                        content.form.submit
                      )}
                    </button>
                  </div>

                  {submitStatus && (
                    <div
                      className={`gsap-contact-field p-4 rounded-lg ${
                        submitStatus === 'success'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'
                          : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'
                      }`}
                    >
                      {submitStatus === 'success'
                        ? content.form.success
                        : content.form.error}
                    </div>
                  )}
                </div>
              </form>
            </Motion.div>

            {/* Información de Contacto */}
            {/* <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                  {content.contactInfo}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <svg
                        className="w-6 h-6 text-blue-600 dark:text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">
                        {language === 'es' ? 'Teléfono' : 'Phone'}
                      </p>
                      <a
                        href="tel:+573156334898"
                        className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        +57 315 633 4898
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <svg
                        className="w-6 h-6 text-blue-600 dark:text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Email</p>
                      <a
                        href="mailto:duvangamboa8@gmail.com"
                        className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        duvangamboa8@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <svg
                        className="w-6 h-6 text-blue-600 dark:text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">
                        {language === 'es' ? 'Ubicación' : 'Location'}
                      </p>
                      <p className="text-gray-800 dark:text-white">
                        Colombia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                  {content.availability}
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === 'es' ? 'Modalidades' : 'Work Modes'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {content.workModes.map((mode) => (
                        <span
                          key={mode}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {mode}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === 'es' ? 'Ubicaciones' : 'Locations'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {content.locations.map((location) => (
                        <span
                          key={location}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import { FaLinkedinIn, FaWhatsapp, FaChevronDown, FaChevronUp, FaGlobe, FaDesktop } from "react-icons/fa";
import { AiOutlineMail, AiOutlineMobile, AiOutlineAppstore, AiOutlineApi, AiOutlineBulb, AiOutlineDesktop } from "react-icons/ai";
import { MdDesignServices, MdSupportAgent } from "react-icons/md";
import { projects } from "../components/data";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const translations = {
  en: {
    metaTitle: "Nicolás Posa - Web & Mobile Development Freelance",
    metaDescription: "Web and mobile development freelance services. React, Next.js, React Native app development.",
    heroTitle: "Web & Mobile Development",
    heroTitleHighlight: "Freelance",
    heroSubtitle: "I help you build fast, scalable web and mobile applications with excellent user experience",
    requestQuote: "Request Quote",
    viewServices: "View Services",
    services: "Services",
    servicesTitle: "What can I do for you?",
    portfolio: "Portfolio",
    portfolioTitle: "Featured Projects",
    viewDetails: "View details →",
    faq: "Frequently Asked Questions",
    faqTitle: "FAQ",
    ctaTitle: "Have a web or app idea?",
    ctaSubtitle: "Let's build it together",
    ctaButton: "Let's talk about your project",
    contact: "Contact",
    contactTitle: "Request Quote",
    nameLabel: "Name",
    emailLabel: "Email",
    projectDescription: "Project Description",
    budgetLabel: "Estimated Budget (Optional)",
    budgetPlaceholder: "E.g: $5000 - $10000",
    sendRequest: "Send Request",
    contactWays: "Ways to contact",
    bottomCTATitle: "Let's talk about your project",
    bottomCTASubtitle: "I'm ready to help you make your idea a reality",
    nameError: "Please enter your name",
    emailError: "Please enter a valid email",
    descriptionError: "Please describe your project",
    successMessage: "Request sent successfully! I'll contact you soon.",
    errorMessage: "Error sending. Please try again.",
    servicesList: [
      {
        icon: <AiOutlineDesktop className="text-4xl" />,
        title: "Web Development",
        description: "Modern web applications using React, Next.js, and TypeScript. Responsive, fast, and SEO-optimized websites"
      },
      {
        icon: <AiOutlineMobile className="text-4xl" />,
        title: "Mobile App Development",
        description: "Cross-platform mobile applications with React Native, optimized for iOS and Android"
      },
      {
        icon: <MdDesignServices className="text-4xl" />,
        title: "Design & Implementation of Intuitive Interfaces",
        description: "Modern and accessible UI/UX design that offers an excellent user experience for web and mobile"
      },
      {
        icon: <AiOutlineAppstore className="text-4xl" />,
        title: "Google Play & App Store Publishing",
        description: "Complete management of the publishing process in official app stores"
      },
      {
        icon: <AiOutlineApi className="text-4xl" />,
        title: "Integration with APIs & External Services",
        description: "Connection and integration with third-party services, REST APIs, and backend systems"
      },
      {
        icon: <MdSupportAgent className="text-4xl" />,
        title: "Maintenance & Improvements of Existing Projects",
        description: "Updates, bug fixes, performance optimization, and new features for web and mobile applications"
      },
      {
        icon: <AiOutlineBulb className="text-4xl" />,
        title: "Technical Consulting",
        description: "Technical advice for architecture, best practices, and technology decisions"
      }
    ],
    faqs: [
      {
        question: "How much does it cost to develop a web or mobile application?",
        answer: "The cost depends on several factors such as complexity, features, design, and timelines. I offer personalized quotes based on the specific needs of each project. You can contact me for a free consultation and receive a detailed quote."
      },
      {
        question: "What is the work process?",
        answer: (
          <>
            My process includes:
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Initial consultation to understand your needs</li>
              <li>Detailed proposal and quote</li>
              <li>Planning and design</li>
              <li>Iterative development with constant feedback</li>
              <li>Testing and optimization</li>
              <li>Publishing and post-launch support</li>
            </ol>
          </>
        )
      },
      {
        question: "What are typical delivery timelines?",
        answer: "Timelines vary according to project complexity. A simple website or app can take 4-6 weeks, while more complex projects may require 2-4 months. I work flexibly to adapt to your needs and priorities, always communicating timelines transparently."
      },
      {
        question: "What guarantees do you offer?",
        answer: "I offer quality guarantee on delivered code, post-launch support for critical bug fixes, complete project documentation, and constant communication throughout the process. My goal is to ensure you receive a solution that meets or exceeds your expectations."
      }
    ],
    whatsappMessage: "Hello! I'm interested in your web and mobile development freelance services. I'd like to discuss my project with you."
  },
  es: {
    metaTitle: "Nicolás Posa - Desarrollo Web & Mobile Freelance",
    metaDescription: "Servicios de desarrollo web y mobile freelance. Desarrollo de aplicaciones con React, Next.js y React Native.",
    heroTitle: "Desarrollo Web & Mobile",
    heroTitleHighlight: "Freelance",
    heroSubtitle: "Te ayudo a construir aplicaciones web y móviles rápidas, escalables y con excelente experiencia de usuario",
    requestQuote: "Solicitar Presupuesto",
    viewServices: "Ver Servicios",
    services: "Servicios",
    servicesTitle: "¿Qué puedo hacer por ti?",
    portfolio: "Portafolio",
    portfolioTitle: "Proyectos Destacados",
    viewDetails: "Ver detalles →",
    faq: "Preguntas Frecuentes",
    faqTitle: "FAQ",
    ctaTitle: "¿Tenés una idea web o app?",
    ctaSubtitle: "Construyámosla juntos",
    ctaButton: "Hablemos de tu proyecto",
    contact: "Contacto",
    contactTitle: "Solicitar Presupuesto",
    nameLabel: "Nombre",
    emailLabel: "Email",
    projectDescription: "Descripción del Proyecto",
    budgetLabel: "Presupuesto Estimado (Opcional)",
    budgetPlaceholder: "Ej: $5000 - $10000",
    sendRequest: "Enviar Solicitud",
    contactWays: "Formas de contacto",
    bottomCTATitle: "Hablemos de tu proyecto",
    bottomCTASubtitle: "Estoy listo para ayudarte a hacer realidad tu idea",
    nameError: "Por favor ingresa tu nombre",
    emailError: "Por favor ingresa un email válido",
    descriptionError: "Por favor describe tu proyecto",
    successMessage: "¡Solicitud enviada con éxito! Te contactaré pronto.",
    errorMessage: "Error al enviar. Por favor intenta nuevamente.",
    servicesList: [
      {
        icon: <AiOutlineDesktop className="text-4xl" />,
        title: "Desarrollo Web",
        description: "Aplicaciones web modernas usando React, Next.js y TypeScript. Sitios web responsivos, rápidos y optimizados para SEO"
      },
      {
        icon: <AiOutlineMobile className="text-4xl" />,
        title: "Desarrollo de apps en React Native",
        description: "Creación de aplicaciones móviles multiplataforma con React Native, optimizadas para iOS y Android"
      },
      {
        icon: <MdDesignServices className="text-4xl" />,
        title: "Diseño e implementación de interfaces intuitivas",
        description: "Diseño de UI/UX modernas y accesibles que ofrecen una excelente experiencia de usuario para web y móvil"
      },
      {
        icon: <AiOutlineAppstore className="text-4xl" />,
        title: "Publicación en Google Play y App Store",
        description: "Gestión completa del proceso de publicación en las tiendas oficiales de aplicaciones"
      },
      {
        icon: <AiOutlineApi className="text-4xl" />,
        title: "Integración con APIs y servicios externos",
        description: "Conexión e integración con servicios de terceros, APIs REST, y sistemas backend"
      },
      {
        icon: <MdSupportAgent className="text-4xl" />,
        title: "Mantenimiento y mejoras de proyectos existentes",
        description: "Actualizaciones, corrección de bugs, optimización de rendimiento y nuevas funcionalidades para aplicaciones web y móviles"
      },
      {
        icon: <AiOutlineBulb className="text-4xl" />,
        title: "Consultoría técnica",
        description: "Asesoramiento técnico para arquitectura, mejores prácticas y decisiones tecnológicas"
      }
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta desarrollar una aplicación web o móvil?",
        answer: "El costo depende de varios factores como la complejidad, funcionalidades, diseño, y plazos. Ofrezco presupuestos personalizados basados en las necesidades específicas de cada proyecto. Puedes contactarme para una consulta gratuita y recibirás una cotización detallada."
      },
      {
        question: "¿Cómo es el proceso de trabajo?",
        answer: (
          <>
            Mi proceso incluye:
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Consulta inicial para entender tus necesidades</li>
              <li>Propuesta y presupuesto detallado</li>
              <li>Planificación y diseño</li>
              <li>Desarrollo iterativo con feedback constante</li>
              <li>Testing y optimización</li>
              <li>Publicación y soporte post-lanzamiento</li>
            </ol>
          </>
        )
      },
      {
        question: "¿En qué plazos suelo trabajar?",
        answer: "Los plazos varían según la complejidad del proyecto. Un sitio web o app simple puede tardar 4-6 semanas, mientras que proyectos más complejos pueden requerir 2-4 meses. Trabajo de manera flexible para ajustarme a tus necesidades y prioridades, siempre comunicando los tiempos de manera transparente."
      },
      {
        question: "¿Qué garantías doy?",
        answer: "Ofrezco garantía de calidad en el código entregado, soporte post-lanzamiento para corrección de bugs críticos, documentación completa del proyecto, y comunicación constante durante todo el proceso. Mi objetivo es asegurar que recibas una solución que cumpla o supere tus expectativas."
      }
    ],
    whatsappMessage: "¡Hola! Estoy interesado en tus servicios de desarrollo web y mobile freelance. Me gustaría conversar sobre mi proyecto contigo."
  }
};

const Freelance = () => {
  const [lang, setLang] = useState("en");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [notName, setNotName] = useState(false);
  const [notEmail, setNotEmail] = useState(false);
  const [notDescription, setNotDescription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // Load language from localStorage or default to 'en'
    const savedLang = localStorage.getItem("freelance-lang");
    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setLang(savedLang);
    }
  }, []);

  const t = translations[lang];
  const featuredProjects = projects.slice(0, 4);

  const whatsappNumber = "542966680502";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.whatsappMessage)}`;

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    
    if (name === "" || email === "" || projectDescription === "") {
      setNotName(name === "");
      setNotEmail(email === "" || !email.includes("@") || !email.includes("."));
      setNotDescription(projectDescription === "");
      setLoading(false);
      return;
    }

    const budgetText = budget || (lang === "en" ? "Not specified" : "No especificado");
    const formData = {
      name,
      email,
      message: lang === "en" 
        ? `Freelance quote request\n\nProject description: ${projectDescription}\nEstimated budget: ${budgetText}`
        : `Solicitud de presupuesto freelance\n\nDescripción del proyecto: ${projectDescription}\nPresupuesto estimado: ${budgetText}`,
      user_email: email
    };

    emailjs
      .send(
        "service_nxlvhta",
        "template_2ttxrjc",
        formData,
        "WhfeZjo7fiHw7MuXC"
      )
      .then(
        function (response) {
          toast.success(t.successMessage);
          setLoading(false);
          setName("");
          setEmail("");
          setProjectDescription("");
          setBudget("");
          setNotName(false);
          setNotEmail(false);
          setNotDescription(false);
        },
        function (error) {
          toast.error(t.errorMessage);
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("freelance-lang", newLang);
    setShowLangMenu(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#ecf0f3]">
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Navbar />
      
      {/* Language Selector - Improved */}
      <div className="fixed top-24 right-4 z-40">
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#5651e5] backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: showLangMenu ? 360 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaGlobe className="text-[#5651e5] text-lg" />
            </motion.div>
            <span className="font-bold text-gray-800 uppercase tracking-wide">{lang === "en" ? "EN" : "ES"}</span>
            <motion.div
              animate={{ rotate: showLangMenu ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-gray-600 text-sm" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {showLangMenu && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowLangMenu(false)}
                  className="fixed inset-0 -z-10"
                />
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="absolute top-full right-0 mt-3 bg-white rounded-xl shadow-2xl border-2 border-gray-100 overflow-hidden min-w-[140px] backdrop-blur-sm"
                >
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`w-full px-5 py-3 text-left font-semibold transition-all duration-300 flex items-center gap-3 ${
                      lang === "en" 
                        ? "bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-lg" 
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span>English</span>
                  </button>
                  <div className="h-px bg-gray-200"></div>
                  <button
                    onClick={() => changeLanguage("es")}
                    className={`w-full px-5 py-3 text-left font-semibold transition-all duration-300 flex items-center gap-3 ${
                      lang === "es" 
                        ? "bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-lg" 
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">🇪🇸</span>
                    <span>Español</span>
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1240px] w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              {t.heroTitle} <span className="text-[#5651e5]">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t.heroSubtitle}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center gap-4 mt-8 flex-wrap"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-xl font-semibold shadow-xl shadow-gray-400 hover:shadow-2xl transition-all duration-300"
              >
                {t.requestQuote}
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#5651e5] border-2 border-[#5651e5] rounded-xl font-semibold shadow-lg hover:bg-[#5651e5] hover:text-white transition-all duration-300"
              >
                {t.viewServices}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
              {t.services}
            </p>
            <h2 className="py-4 text-3xl font-bold text-gray-800">{t.servicesTitle}</h2>
            <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg shadow-gray-200 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#5651e5]/20"
              >
                <div className="text-[#5651e5] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full py-16 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
              {t.portfolio}
            </p>
            <h2 className="py-4 text-3xl font-bold text-gray-800">{t.portfolioTitle}</h2>
            <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg shadow-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-[250px]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.skills}</p>
                  <Link href={`/projects/${project.id}`}>
                    <span className="text-[#5651e5] font-semibold hover:underline">
                      {t.viewDetails}
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xl tracking-widest uppercase text-slate-700 font-semibold mb-4">
              {t.faq}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {t.faqTitle}
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto"></div>
          </motion.div>

          <div className="space-y-6">
            {t.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg  hover:shadow-xl  transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex justify-between items-start text-left p-6 transition-all duration-300 ${
                    openFaq === index 
                      ? "bg-slate-50" 
                      : "hover:bg-gray-50/50"
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 pr-6 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFaq === index 
                      ? "bg-slate-700 text-white rotate-180" 
                      : "bg-gray-100 text-slate-700"
                  }`}>
                    <FaChevronDown className="text-sm" />
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="text-gray-700 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <div className="max-w-[1240px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t.ctaSubtitle}
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-[#5651e5] rounded-xl font-semibold  transition-all duration-300"
            >
              {t.ctaButton}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
              {t.contact}
            </p>
            <h2 className="py-4 text-3xl font-bold text-gray-800">{t.contactTitle}</h2>
            <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4"></div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-3 lg:col-span-2 w-full bg-gray-50 rounded-xl p-8 shadow-lg shadow-gray-200"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#5651e5] mb-2">Nicolás Posa</h2>
                <p className="text-gray-600">
                  {lang === "en" ? "Web & Mobile Development Freelancer" : "Desarrollador Web & Mobile Freelance"}
                </p>
              </div>
              
              <p className="uppercase text-gray-600 font-semibold mb-6">{t.contactWays}</p>

              <div className="space-y-4">
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#5651e5] hover:text-white group"
                  >
                  <FaWhatsapp className="text-2xl text-[#5651e5] group-hover:text-white" />
                  <span className="font-semibold">WhatsApp</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/nicolasposa/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#5651e5] hover:text-white group"
                  >
                  <FaLinkedinIn className="text-2xl text-[#5651e5] group-hover:text-white" />
                  <span className="font-semibold">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="mailto:nicoposa57@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#5651e5] hover:text-white group"
                  >
                  <AiOutlineMail className="text-2xl text-[#5651e5] group-hover:text-white" />
                  <span className="font-semibold">Email</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-3 w-full bg-gray-50 rounded-xl p-8 shadow-lg shadow-gray-200"
            >
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-gray-600 font-semibold">{t.nameLabel}</label>
                  <input
                    className={`border-2 rounded-lg p-3 focus:outline-none focus:border-[#5651e5] transition-colors duration-300 ${
                      notName ? "border-red-500" : "border-gray-200"
                    }`}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {notName && (
                    <p className="text-red-500 text-xs pt-1">{t.nameError}</p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-gray-600 font-semibold">{t.emailLabel}</label>
                  <input
                    className={`border-2 rounded-lg p-3 focus:outline-none focus:border-[#5651e5] transition-colors duration-300 ${
                      notEmail ? "border-red-500" : "border-gray-200"
                    }`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {notEmail && (
                    <p className="text-red-500 text-xs pt-1">{t.emailError}</p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-gray-600 font-semibold">
                    {t.projectDescription}
                  </label>
                  <textarea
                    className={`border-2 rounded-lg p-3 focus:outline-none focus:border-[#5651e5] transition-colors duration-300 ${
                      notDescription ? "border-red-500" : "border-gray-200"
                    }`}
                    rows={6}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  ></textarea>
                  {notDescription && (
                    <p className="text-red-500 text-xs pt-1">{t.descriptionError}</p>
                  )}
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-gray-600 font-semibold">
                    {t.budgetLabel}
                  </label>
                  <input
                    className="border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#5651e5] transition-colors duration-300"
                    type="text"
                    placeholder={t.budgetPlaceholder}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-lg mt-4 font-semibold hover:shadow-xl transition-all duration-300"
                  type="submit"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    </div>
                  ) : (
                    t.sendRequest
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <BackToTop />
      <Toaster position="top-center" />
    </div>
  );
};

export default Freelance;
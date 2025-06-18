import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/nicolasposa/",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Nicoposa1",
      label: "GitHub"
    },
    {
      icon: <AiOutlineMail />,
      href: "mailto:nicoposa57@gmail.com",
      label: "Email"
    },
    {
      icon: <AiFillFilePdf />,
      href: "/CV-Nicolas-Posa-Software-Developer.pdf",
      label: "Resume"
    }
  ];

  return (
    <footer className="w-full bg-gray-800 text-white py-12">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Nicolás Posa</h3>
            <p className="text-gray-300 mb-4">
              Software Developer especializado en React Native y desarrollo móvil. 
              Apasionado por crear experiencias digitales excepcionales.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-[#5651e5] rounded-full flex items-center justify-center hover:bg-[#4a45c4] transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-[#5651e5] transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-[#5651e5] transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#experience" className="text-gray-300 hover:text-[#5651e5] transition-colors duration-300">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-gray-300 hover:text-[#5651e5] transition-colors duration-300">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-[#5651e5] transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 nicoposa57@gmail.com</p>
              <p>📍 Argentina</p>
              <p>💼 Disponible para proyectos</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Nicolás Posa. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desarrollado con ❤️ usando Next.js y React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
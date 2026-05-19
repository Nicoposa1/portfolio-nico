import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/nicolasposa/", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/Nicoposa1", label: "GitHub" },
    { icon: <AiOutlineMail />, href: "mailto:nicoposa57@gmail.com", label: "Email" },
    { icon: <AiFillFilePdf />, href: "/CV-software-developer-Nicolas-Posa.pdf", label: "Resume" },
  ];

  return (
    <div id="main" className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#5651e5]/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#5651e5]/8 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#709dff]/10 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#5651e5]/5 blur-2xl" />
      </div>

      <div className="max-w-[1240px] w-full h-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.3em] text-[#5651e5] font-semibold mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight"
          >
            Hi, I&apos;m <span className="text-[#5651e5]">Nicolás</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600 mb-6"
          >
            Mobile &amp; Web Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 max-w-[600px] mx-auto text-base lg:text-lg leading-relaxed"
          >
            I specialize in building cross-platform mobile apps and web experiences.
            Passionate about AI and shipping fast, intuitive products.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#5651e5] text-white rounded-full font-semibold shadow-lg shadow-[#5651e5]/25 hover:bg-[#4a45c4] transition-colors duration-200"
            >
              View my work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#5651e5] text-[#5651e5] rounded-full font-semibold hover:bg-[#5651e5] hover:text-white transition-all duration-200"
            >
              Get in touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white shadow-md shadow-gray-200 p-3 cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-[#5651e5] hover:text-white text-xl"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Main;

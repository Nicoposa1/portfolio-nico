import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

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
    <div id="home" className="w-full h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1240px] w-full h-full mx-auto px-4 flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I&apos;m <span className="text-[#5651e5]">Nicolás</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
              Software Developer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="py-4 text-gray-600 max-w-[700px] mx-auto text-lg leading-relaxed">
              I specialize in building Web and Mobile Apps. I&apos;m also deeply passionate about artificial intelligence
              and its transformative potential. I thrive on tackling challenging projects and enjoy developing fast and 
              intuitive Apps that are user-friendly and easy to use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-6 py-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="rounded-full bg-white shadow-lg shadow-gray-200 p-4 cursor-pointer 
                              transition-all duration-300 hover:shadow-xl hover:bg-[#5651e5] hover:text-white">
                  <span className="text-2xl">{link.icon}</span>
                </div>
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;

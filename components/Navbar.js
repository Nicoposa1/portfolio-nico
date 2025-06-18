import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/", label: "Home" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" }
  ];

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
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${
        shadow ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              className="cursor-pointer"
              src="/nico.svg"
              alt="Nicolás Posa"
              width="100"
              height="100"
              priority
            />
          </motion.div>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="ml-10 text-sm uppercase"
              >
                <Link href={link.href}>
                  <span className="relative group">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5651e5] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden cursor-pointer"
          onClick={handleNav}
        >
          <FaBars size={25} />
        </motion.div>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10"
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <Link href="/">
                    <Image src="/nico.svg" alt="Nicolás Posa" width="60" height={60} priority />
                  </Link>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 cursor-pointer"
                    onClick={handleNav}
                  >
                    <FaTimes />
                  </motion.div>
                </div>
                <div className="border-b border-gray-200 my-4">
                  <p className="w-[85%] md:w-[95%] py-4 text-gray-600">
                    Let&apos;s build something legendary together
                  </p>
                </div>
              </div>

              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => handleScrollToSection(link.href.substring(1))}
                      className="py-4 text-sm"
                    >
                      <Link href={link.href}>
                        <span className="hover:text-[#5651e5] transition-colors duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-40">
                  <p className="uppercase tracking-widest text-gray-600 mb-4">Let&apos;s connect</p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-full bg-gray-50 p-3 cursor-pointer hover:bg-[#5651e5] hover:text-white transition-all duration-300"
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;

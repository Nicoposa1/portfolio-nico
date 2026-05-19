import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";

const sectionLinks = [
  { href: "/#experience", label: "Experience", section: "experience" },
  { href: "/#skills",     label: "Skills",     section: "skills"     },
  { href: "/#projects",   label: "Projects",   section: "projects"   },
  { href: "/#contact",    label: "Contact",    section: "contact"    },
];

const pageLinks = [
  { href: "/blog",      label: "Blog"      },
  { href: "/freelance", label: "Freelance" },
];

const socialLinks = [
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/nicolasposa/", label: "LinkedIn" },
  { icon: <FaGithub />,     href: "https://github.com/Nicoposa1",             label: "GitHub"   },
  { icon: <AiOutlineMail />,href: "mailto:nicoposa57@gmail.com",              label: "Email"    },
  { icon: <AiFillFilePdf />,href: "/CV-software-developer-Nicolas-Posa.pdf",  label: "Resume"   },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 90);
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const observers = sectionLinks.map(({ section }) => {
      const el = document.getElementById(section);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(section); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const allNavLinks = [...sectionLinks, ...pageLinks];

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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image src="/nico.svg" alt="Nicolás Posa" width={100} height={100} priority />
          </motion.div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {sectionLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="text-sm uppercase"
            >
              <Link href={link.href}>
                <span
                  className={`relative group transition-colors duration-200 ${
                    activeSection === link.section ? "text-[#5651e5]" : "text-gray-700"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#5651e5] transition-all duration-300 ${
                      activeSection === link.section ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              </Link>
            </motion.li>
          ))}
          <div className="w-px h-4 bg-gray-200" />
          {pageLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (sectionLinks.length + i) * 0.1 }}
              className="text-sm uppercase text-gray-400"
            >
              <Link href={link.href}>
                <span className="relative group hover:text-gray-700 transition-colors duration-200">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden cursor-pointer"
          onClick={() => setNav(!nav)}
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
              className="fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-white p-10"
            >
              <div className="flex w-full items-center justify-between mb-6">
                <Link href="/" onClick={() => setNav(false)}>
                  <Image src="/nico.svg" alt="Nicolás Posa" width={60} height={60} priority />
                </Link>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 cursor-pointer"
                  onClick={() => setNav(false)}
                >
                  <FaTimes />
                </motion.div>
              </div>

              <div className="border-b border-gray-100 pb-4 mb-4">
                <p className="text-gray-500 text-sm">Let&apos;s build something legendary together</p>
              </div>

              <ul className="uppercase space-y-1">
                {allNavLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setNav(false)}
                      className={`block py-3 text-sm transition-colors duration-200 hover:text-[#5651e5] ${
                        "section" in link && activeSection === link.section
                          ? "text-[#5651e5] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="absolute bottom-10 left-10 right-10">
                <p className="uppercase tracking-widest text-gray-400 text-xs mb-4">Connect</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-full bg-gray-50 p-3 cursor-pointer hover:bg-[#5651e5] hover:text-white transition-all duration-300"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
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

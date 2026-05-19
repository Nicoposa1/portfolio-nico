import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "./data";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div id="projects" className="w-full bg-white py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
            Projects
          </p>
          <h2 className="py-4 text-3xl font-bold text-gray-800">What I&apos;ve Built</h2>
          <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4" />
        </motion.div>

        {featured.length > 0 && (
          <>
            <p className="text-xs uppercase tracking-widest text-[#5651e5] font-bold mb-6">
              ★ Featured
            </p>
            <FeaturedGrid projects={featured} />
            <div className="w-full h-px bg-gray-100 my-12" />
          </>
        )}

        <ProjectsGrid projects={rest} />
      </div>
    </div>
  );
};

const FeaturedGrid = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid md:grid-cols-2 gap-8"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={item} whileHover={{ y: -6 }}>
          <Link
            href={`/projects/${project.id}`}
            className="group block relative rounded-2xl overflow-hidden shadow-xl shadow-[#5651e5]/10 border-2 border-[#5651e5]/20 hover:border-[#5651e5]/60 transition-all duration-300"
          >
            <div className="relative w-full h-[260px]">
              <Image
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt={project.name}
                src={project.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
                </div>
                {project.liveUrl && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.liveUrl, "_blank", "noreferrer");
                    }}
                    className="flex-shrink-0 flex items-center gap-1.5 bg-white text-[#5651e5] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#5651e5] hover:text-white transition-colors duration-200 shadow-md"
                  >
                    <FiExternalLink className="text-base" />
                    Live
                  </span>
                )}
              </div>
            </div>

            <div className="absolute top-4 left-4">
              <span className="bg-[#5651e5] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase shadow">
                Featured
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ProjectsGrid = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid md:grid-cols-2 gap-8"
    >
      {projects.map((project, id) => (
        <motion.div key={id} variants={item} whileHover={{ y: -5 }} className="group">
          <Link
            href={`/projects/${project.id}`}
            className="flex flex-col w-full shadow-md shadow-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer block"
          >
            {/* Image */}
            <div className="relative w-full h-[220px] overflow-hidden">
              <Image
                className="group-hover:scale-110 transition-transform duration-500 object-cover"
                alt={project.name}
                src={project.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5651e5]/90 to-[#709dff]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <p className="text-white text-center text-sm mb-4">{project.skills}</p>
                <span className="bg-white text-[#5651e5] px-6 py-2 rounded-full font-semibold text-sm">
                  View Details
                </span>
              </div>
            </div>

            {/* Always-visible info bar */}
            <div className="px-4 py-3 bg-white border-t border-gray-100">
              <h3 className="font-bold text-gray-800">{project.name}</h3>
              <p className="text-xs text-gray-400 mt-0.5 truncate">{project.skills}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;

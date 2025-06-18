import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "./data";

const Projects = () => {
  const data = projects;
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div id="projects" className="w-full bg-gray-50 py-16">
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
          <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
            >
              <Link 
                href={`/projects/${project.id}`}
                className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-200 rounded-xl p-4 group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden block"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    className="rounded-xl group-hover:scale-110 transition-transform duration-500 object-cover"
                    alt={project.name}
                    src={project.image}
                    width={500}
                    height={300}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5651e5]/90 to-[#709dff]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.name}
                  </h3>
                  <p className="text-white text-center mb-6">
                    {project.skills}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#5651e5] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
                  >
                    View Details
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

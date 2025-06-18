import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "./data";

const Skills = () => {
  const data = skills;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="skills" className="w-full bg-gray-50 py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
            Skills
          </p>
          <h2 className="py-4 text-3xl font-bold text-gray-800">What I Can Do</h2>
          <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4"></div>
        </motion.div>

        <SkillsGrid skills={data} />
      </div>
    </div>
  );
};

const SkillsGrid = ({ skills }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {skills.map((skill, id) => (
        <motion.div
          key={id}
          variants={item}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.div 
              className="relative w-16 h-16"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;

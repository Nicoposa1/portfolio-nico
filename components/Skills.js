import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {data.map((skill, id) => (
            <motion.div
              key={id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

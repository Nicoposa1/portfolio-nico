import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "./data";

const CATEGORIES = ["All", "Mobile", "Frontend", "Backend", "Languages"];

const Skills = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <div id="skills" className="w-full bg-gray-50 py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
            Skills
          </p>
          <h2 className="py-4 text-3xl font-bold text-gray-800">What I Can Do</h2>
          <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4" />
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-[#5651e5] text-white shadow-md shadow-[#5651e5]/25"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#5651e5] hover:text-[#5651e5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div layout className="flex flex-wrap justify-center gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="w-28 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center gap-3"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700 text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

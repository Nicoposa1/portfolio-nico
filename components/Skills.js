import React from "react";
import Image from "next/image";
import { skills } from "./data";

const Skills = () => {
  const data = skills;
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {data.map((item, id) => {
            return (
              <div
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
                key={id}
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      alt={item.name}
                      src={item.image}
                      width="64"
                      height={64}
                      // layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

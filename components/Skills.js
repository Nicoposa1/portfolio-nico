import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "javascript",
    image: "/javascript.svg",
  },
  {
    id: 2,
    name: "TypeScript",
    image: "/typescript.svg",
  },
  {
    id: 3,
    name: "React",
    image: "/react-2.svg",
  },
  {
    id: 4,
    name: "React Native",
    image: "/react-2.svg",
  },
  {
    id: 5,
    name: "Redux",
    image: "/redux.svg",
  },
  {
    id: 6,
    name: "Next.js",
    image: "/next.svg",
  },
  {
    id: 7,
    name: "Node.js",
    image: "/node3.svg",
  },
  {
    id: 8,
    name: "Express.js",
    image: "/express.svg",
  },
  {
    id: 9,
    name: "Swift",
    image: "/swift.svg",
  },
  {
    id: 10,
    name: "SQLite",
    image: "/sqlite.svg",
  },
  {
    id: 11,
    name: "TailwindCSS",
    image: "/tailwindcss.svg",
  },
  {
    id: 12,
    name: "Firebase",
    image: "/firebase.svg",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Sills
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

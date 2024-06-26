import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data";

const Projects = () => {
  const data = projects;
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project, id) => (
            <div
              className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
              key={id}
            >
              <Image
                className="rounded-xl group-hover:opacity-10 object-contain"
                alt="project image"
                src={project.image}
                width={500}
                height={300}
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] ">
                <h3 className="text-center text-2xl text-white tracking-wider">
                  {project.name}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">
                  {project.skills}
                </p>
                <div className="flex justify-center">
                  <Link href={project.code}>
                    <a target="_blank" rel="noreferrer">
                      <p className="text-white sm:text-xs text-center sm:mr-1 md:mr-10 md:text-base mr-10 hover:underline cursor-pointer">
                        Source Code
                      </p>
                    </a>
                  </Link>
                  <Link href={project.web}>
                    <a target="_blank" rel="noreferrer">
                      <p className="text-white sm:text-xs text-center md:text-base  hover:underline cursor-pointer">
                        App Running
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

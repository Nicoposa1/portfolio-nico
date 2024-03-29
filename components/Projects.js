import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Coinbase Mobile App",
    image: "/coinbase.png",
    skills: "React Native - Redux - expo",
    code: "https://github.com/Nicoposa1/Coinbase-RN",
    web: "https://www.youtube.com/watch?v=p_7WnmO25AQ",
  },
  {
    id: 9,
    name: "AI Project",
    image: "/aiproject.png",
    skills: "React Native - Redux -  Hugging Face API",
    code: "https://github.com/Nicoposa1/AIMobileProject",
    web: "https://www.youtube.com/watch?v=tCdNvqu6VJY",
  },
  {
    id: 2,
    name: "Dolar Arg",
    image: "/dolarArg.png",
    skills: "React Native - Redux",
    code: "https://github.com/Nicoposa1/DolarArgentina",
    web: "https://github.com/Nicoposa1/DolarArgentina",
  },
  {
    id: 3,
    name: "Chat Mobile App",
    image: "/chat-app.png",
    skills: "React Native - Firebase - Gifted Chat",
    code: "https://github.com/Nicoposa1/rn-chat-firebase",
    web: "https://www.youtube.com/shorts/IchDkV6ujsk",
  },
  {
    id: 4,
    name: "Crypto Tracker Mobile App",
    image: "/cryptoTracker.png",
    skills: "React Native - Async Storage - Expo",
    code: "https://github.com/Nicoposa1/CryptoTracker-react-native",
    web: "https://github.com/Nicoposa1/CryptoTracker-react-native",
  },
  {
    id: 5,
    name: "Prokedex Mobile App",
    image: "/mq2.jpeg",
    skills: "React Native - Formik - Async Storage",
    code: "https://github.com/Nicoposa1/Pokedex-React-Native",
    web: "https://www.youtube.com/watch?v=1WTZseOFozs",
  },
  {
    id: 6,
    name: "Fun Punk web3",
    image: "/funpunk.png",
    skills: "React - web3.js - Solidity",
    code: "https://github.com/Nicoposa1/Fun-Punks-Interface",
    web: "https://funpunks.netlify.app/",
  },
  {
    id: 8,
    name: "PetGram",
    image: "/petgram.png",
    skills: "React Native - Redux - Expo",
    code: "https://github.com/Nicoposa1/rn-chat-firebase",
    web: "https://www.youtube.com/watch?v=1WTZseOFozs",
  },
];

const Projects = () => {
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

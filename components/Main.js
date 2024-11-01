import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <h1 className=" text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Nicolás</span>,
          </h1>
          <h2 className="py-2 text-gray-700">
            Software developer
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I specialize in building Web and Mobile
            Apps. I&apos;m also deeply passionate about artificial intelligence
            and its transformative potential. I thrive on tackling challenging
            projects and enjoy developing fast and intuitive Apps that are
            user-friendly and easy to use.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <a
              href="https://www.linkedin.com/in/nicolasposa/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Nicoposa1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:nicoposa57@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="/CV-Software-Developer-NicolasPosa.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillFilePdf />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

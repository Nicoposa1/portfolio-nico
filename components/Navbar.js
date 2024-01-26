import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-10 bg-[#ecf0f3]"
          : "fixed w-full h-20  z-10 bg-[#ecf0f3] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/nico.svg"
            alt="/"
            width="100"
            height="100"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#experience">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Experience
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div
          className="md:hidden"
          style={{ marginRight: "15px" }}
          onClick={handleNav}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src="/nico.svg" alt="/" width="60" height={60} />
              </Link>
              <div className="  p-3 cursor-pointer" onClick={handleNav}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-x-gray-300 my-4">
              <p className="w-[85%] md:w-[95%] py-4 ">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 fle flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#experience">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Experience
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest">Let&apos;s connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://www.linkedin.com/in/nicolasposa/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://github.com/Nicoposa1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="mailto:nicoposa57@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="/cv-frontend-Nicolas-Posa.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFilePdf />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

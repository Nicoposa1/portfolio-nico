import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am passionate about education and technology, which leads me to be
            in constant learning and growth.
          </p>
          <p className="py-2 text-gray-600">
            I love thinking about the impact that technology has on people&apos;s
            lives, it&apos;s incredible to be part of it, I&apos;m always looking for
            professional challenges, I like to gain experience in large-scale
            projects and great growth possibilities.
          </p>
          <Link href="/#projects">
            <p className="py-2 cursor-pointer underline text-gray-600">
              Checkout some of my latest projects
            </p>
          </Link>
          {/* <Link href="/certificates" >
            <p className="py-2 cursor-pointer underline text-gray-600">
              Checkout my approved courses
            </p>
          </Link> */}
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="computer image"
            height={500}
            width={350}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="w-full">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2">
        <div className="space-y-8">
          <h2 className="py-2 text-gray-700">Professional Experience</h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">Software Engineer</h3>
              <p className="text-gray-500">Acme Inc, Jan 2020 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                  Developed and maintained web applications using React.js and
                  Node.js.
                </li>
                <li>Implemented automated testing platforms and unit tests.</li>
                <li>
                  Collaborated with cross-functional teams to define, design,
                  and ship new features.
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">Junior Software Developer</h3>
              <p className="text-gray-500">XYZ Corp, Jun 2018 - Dec 2019</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                  Assisted in the design, development, testing, and maintenance
                  of software systems.
                </li>
                <li>Resolved software defects and implemented enhancements.</li>
                <li>
                  Participated in software design meetings and analyzed user
                  needs to determine technical requirements.
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">Junior Software Developer</h3>
              <p className="text-gray-500">XYZ Corp, Jun 2018 - Dec 2019</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                  Assisted in the design, development, testing, and maintenance
                  of software systems.
                </li>
                <li>Resolved software defects and implemented enhancements.</li>
                <li>
                  Participated in software design meetings and analyzed user
                  needs to determine technical requirements.
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">Tutor in React Native Course</h3>
              <p className="text-gray-500">CoderHouse, ago 2021 - Dec 2019</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                  Assisted in the design, development, testing, and maintenance
                  of software systems.
                </li>
                <li>Resolved software defects and implemented enhancements.</li>
                <li>
                  Participated in software design meetings and analyzed user
                  needs to determine technical requirements.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

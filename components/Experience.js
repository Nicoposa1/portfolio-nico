import React from "react";
import Link from "next/link";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience" className="w-full">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2">
        <div className="space-y-">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-4 text-gray-700">Career Journey</h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">Software Developer</h3>
              <p className="text-gray-500">
                Boreal IT (Client: Banco Comafi), Feb 2025 - Present
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                  Developing and maintaining Banco Comafi’s mobile banking
                  application using React Native.
                </li>
                <li>
                  Improving performance, stability, and user experience for
                  thousands of active users.
                </li>
                <li>
                  Collaborating with cross-functional teams to implement secure
                  and scalable solutions.
                </li>
                <li>
                  Ensuring continuous delivery of new features and enhancements
                  for both Android and iOS platforms. 
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">Software Developer</h3>
              <p className="text-gray-500">Innovasoft, Feb 2023 - Feb 2025</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                  Developed and maintained mobile applications using React
                  Native.
                </li>
                <li>
                  Maintained and updated existing applications using Objective-C
                  and Swift.
                </li>
                <li>
                  Deployed applications to the App Store and Google Play Store.
                </li>
                <li>
                  Collaborated with cross-functional teams to define, design,
                  and ship new features.
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">React Native Developer</h3>
              <p className="text-gray-500">Vippinn, Aug 2022 - Feb 2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                  Assisted in the design, development, testing, and maintenance
                  of React Native apps.
                </li>
                <li>Resolved software defects and implemented enhancements.</li>
                <li>
                  Participated in software design meetings and analyzed user
                  needs to determine technical requirements.
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">
                Tutor and content creator in React Native Course
              </h3>
              <p className="text-gray-500">CoderHouse, Jun 2021 - Jan 2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                  Offered support and guidance to students enrolled in the
                  Mobile Development course
                </li>
                <li>
                  Reviewed and provided feedback on challenges and assignments
                  to aid students in their improvement
                </li>
                <li>Created content for React Native classes.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">Mobile developer</h3>
              <p className="text-gray-500">WeHaus, ago 2021 - Dec 2021</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                  Contributed to the design, development, testing, and
                  maintenance of a React Native app.
                </li>
                <li>
                  Contributed to the ongoing enhancement of the app by
                  optimizing existing functionality and introducing new features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

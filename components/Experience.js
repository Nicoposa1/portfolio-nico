import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="experience" className="w-full py-16 bg-gray-50">
      <div className="max-w-[1240px] w-full h-full mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
              Experience
            </p>
            <h2 className="py-4 text-3xl font-bold text-gray-800">Career Journey</h2>
            <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-8">
            <motion.div 
              {...fadeInUp}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Developer</h3>
              <p className="text-[#5651e5] font-medium mb-4">
                Boreal IT (Client: Banco Comafi), Feb 2025 - Present
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Developing and maintaining Banco Comafi's mobile banking application using React Native.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Improving performance, stability, and user experience for thousands of active users.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Collaborating with cross-functional teams to implement secure and scalable solutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Ensuring continuous delivery of new features and enhancements for both Android and iOS platforms.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Developer</h3>
              <p className="text-[#5651e5] font-medium mb-4">
                Innovasoft, Feb 2023 - Feb 2025
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Developed and maintained mobile applications using React Native.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Maintained and updated existing applications using Objective-C and Swift.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Deployed applications to the App Store and Google Play Store.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Collaborated with cross-functional teams to define, design, and ship new features.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">React Native Developer</h3>
              <p className="text-[#5651e5] font-medium mb-4">
                Vippinn, Aug 2022 - Feb 2023
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Assisted in the design, development, testing, and maintenance of React Native apps.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Resolved software defects and implemented enhancements.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Participated in software design meetings and analyzed user needs to determine technical requirements.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Tutor and Content Creator</h3>
              <p className="text-[#5651e5] font-medium mb-4">
                CoderHouse, Jun 2021 - Jan 2023
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Offered support and guidance to students enrolled in the Mobile Development course.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Reviewed and provided feedback on challenges and assignments to aid students in their improvement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Created content for React Native classes.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Mobile Developer</h3>
              <p className="text-[#5651e5] font-medium mb-4">
                WeHaus, Aug 2021 - Dec 2021
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Contributed to the design, development, testing, and maintenance of a React Native app.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5651e5] mr-2">•</span>
                  <span>Contributed to the ongoing enhancement of the app by optimizing existing functionality and introducing new features.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

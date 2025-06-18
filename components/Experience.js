import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const fadeInFromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
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
            <ExperienceCard 
              animation={fadeInFromRight}
              title="Software Developer"
              company="Boreal IT (Client: Banco Comafi)"
              period="Feb 2025 - Present"
              items={[
                "Developing and maintaining Banco Comafi's mobile banking application using React Native.",
                "Improving performance, stability, and user experience for thousands of active users.",
                "Collaborating with cross-functional teams to implement secure and scalable solutions.",
                "Ensuring continuous delivery of new features and enhancements for both Android and iOS platforms."
              ]}
            />

            <ExperienceCard 
              animation={fadeInFromLeft}
              title="Software Developer"
              company="Innovasoft"
              period="Feb 2023 - Feb 2025"
              items={[
                "Developed and maintained mobile applications using React Native.",
                "Maintained and updated existing applications using Objective-C and Swift.",
                "Deployed applications to the App Store and Google Play Store.",
                "Collaborated with cross-functional teams to define, design, and ship new features."
              ]}
            />

            <ExperienceCard 
              animation={fadeInFromRight}
              title="React Native Developer"
              company="Vippinn"
              period="Aug 2022 - Feb 2023"
              items={[
                "Assisted in the design, development, testing, and maintenance of React Native apps.",
                "Resolved software defects and implemented enhancements.",
                "Participated in software design meetings and analyzed user needs to determine technical requirements."
              ]}
            />

            <ExperienceCard 
              animation={fadeInFromLeft}
              title="Tutor and Content Creator"
              company="CoderHouse"
              period="Jun 2021 - Jan 2023"
              items={[
                "Offered support and guidance to students enrolled in the Mobile Development course.",
                "Reviewed and provided feedback on challenges and assignments to aid students in their improvement.",
                "Created content for React Native classes."
              ]}
            />

            <ExperienceCard 
              animation={fadeInFromRight}
              title="Mobile Developer"
              company="WeHaus"
              period="Aug 2021 - Dec 2021"
              items={[
                "Contributed to the design, development, testing, and maintenance of a React Native app.",
                "Contributed to the ongoing enhancement of the app by optimizing existing functionality and introducing new features."
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ animation, title, company, period, items }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={animation.initial}
      animate={isInView ? animation.animate : animation.initial}
      transition={animation.transition}
      className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-[#5651e5] font-medium mb-4">
        {company}, {period}
      </p>
      <ul className="space-y-3 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#5651e5] mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Experience;

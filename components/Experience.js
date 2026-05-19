import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Fiserv (via BP4)",
    period: "Oct 2025 - Present",
    current: true,
    items: [
      "Developing and maintaining cross-platform mobile applications using React Native.",
      "Implementing and optimizing deployments for web applications.",
      "Performing testing and debugging to ensure product quality and user experience.",
      "Collaborating in defining new technical and functional features.",
      "Integrating APIs and external services into existing products.",
    ],
  },
  {
    title: "Software Developer",
    company: "Boreal IT (Client: Banco Comafi)",
    period: "Feb 2025 - Oct 2025",
    items: [
      "Developed and maintained Banco Comafi's mobile banking application using React Native.",
      "Improved performance, stability, and user experience for thousands of active users.",
      "Collaborated with cross-functional teams to implement secure and scalable solutions.",
      "Ensured continuous delivery of new features and enhancements for both Android and iOS.",
    ],
  },
  {
    title: "Software Developer",
    company: "Innovasoft",
    period: "Feb 2023 - Feb 2025",
    items: [
      "Developed and maintained mobile applications using React Native.",
      "Maintained and updated existing applications using Objective-C and Swift.",
      "Deployed applications to the App Store and Google Play Store.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
    ],
  },
  {
    title: "React Native Developer",
    company: "Vippinn",
    period: "Aug 2022 - Feb 2023",
    items: [
      "Assisted in the design, development, testing, and maintenance of React Native apps.",
      "Resolved software defects and implemented enhancements.",
      "Participated in software design meetings and analyzed user needs to determine technical requirements.",
    ],
  },
  {
    title: "Tutor and Content Creator",
    company: "CoderHouse",
    period: "Jun 2021 - Jan 2023",
    items: [
      "Offered support and guidance to students enrolled in the Mobile Development course.",
      "Reviewed and provided feedback on challenges and assignments.",
      "Created content for React Native classes.",
    ],
  },
  {
    title: "Mobile Developer",
    company: "WeHaus",
    period: "Aug 2021 - Dec 2021",
    items: [
      "Contributed to the design, development, testing, and maintenance of a React Native app.",
      "Optimized existing functionality and introduced new features.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-16 bg-white">
      <div className="max-w-[1240px] w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xl tracking-widest uppercase text-[#5651e5] font-semibold">
            Experience
          </p>
          <h2 className="py-4 text-3xl font-bold text-gray-800">Career Journey</h2>
          <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-4" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#5651e5] via-[#5651e5]/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} {...exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ title, company, period, items, current, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative pl-14"
    >
      {/* Timeline dot */}
      <div className="absolute left-[11px] top-7">
        <div
          className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${
            current ? "bg-[#5651e5]" : "bg-gray-300"
          }`}
        />
        {current && (
          <div className="absolute inset-0 rounded-full bg-[#5651e5] animate-ping opacity-30" />
        )}
      </div>

      {/* Card */}
      <div
        className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${
          current ? "border-2 border-[#5651e5]" : "border border-gray-100"
        }`}
      >
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          {current && (
            <span className="flex-shrink-0 text-xs font-bold uppercase tracking-widest bg-[#5651e5] text-white px-3 py-1 rounded-full">
              Current
            </span>
          )}
        </div>
        <p className="text-[#5651e5] font-medium text-sm mb-4">
          {company} · {period}
        </p>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start text-gray-600 text-sm">
              <span className="text-[#5651e5] mr-2 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;

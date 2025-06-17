import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../components/data';
import { HiOutlineChevronDoubleUp, HiArrowLeft } from 'react-icons/hi';
import { FaGithub, FaYoutube } from 'react-icons/fa';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const project = projects.find(p => p.id === Number(id));
  
  if (!project) {
    return (
      <div className="w-full min-h-screen bg-[#ecf0f3] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">Project Not Found</h1>
          <Link href="/#projects">
            <a className="text-[#5651e5] hover:underline flex items-center justify-center gap-2">
              <HiArrowLeft /> Back to Projects
            </a>
          </Link>
        </div>
      </div>
    );
  }

  // Extract YouTube video ID from the URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(project.web);

  return (
    <div className="w-full min-h-screen bg-[#ecf0f3]">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <Link href="/#projects">
          <a className="inline-flex items-center gap-2 text-[#5651e5] hover:text-[#4a45c4] transition-colors mb-8 group">
            <HiArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </a>
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.name}</h1>
            <div className="flex flex-wrap gap-2">
              {project.skills.split(' - ').map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#5651e5]/10 text-[#5651e5] rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
                quality={100}
                priority
              />
            </div>
            
            {videoId && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl absolute inset-0"
                ></iframe>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5651e5] text-white rounded-lg hover:bg-[#4a45c4] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              <FaGithub className="text-xl" />
              <span>View Source Code</span>
            </a>
            {project.web && (
              <a
                href={project.web}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5651e5] text-white rounded-lg hover:bg-[#4a45c4] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                <FaYoutube className="text-xl" />
                <span>Watch on YouTube</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 
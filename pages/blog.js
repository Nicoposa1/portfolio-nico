import React from "react";
import { motion, useInView } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Correr un LLM local en tu app mobile React Native con Executorch",
      description: "Aprende cómo integrar modelos de lenguaje local en aplicaciones móviles usando Executorch y React Native.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NH-cKnELtrIoua2jJbSmhQ.jpeg",
      url: "https://medium.com/@nicoposa57/correr-un-llm-local-en-tu-app-mobile-react-native-con-executorch-eb1bbce7bd0a",
      date: "2024",
      readTime: "5 min read",
      tags: ["React Native", "AI", "LLM", "Executorch"]
    },
    // Puedes agregar más artículos aquí
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#5651e5] hover:text-[#4a45c4] transition-colors mb-8 group"
        >
          <HiArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Artículos sobre desarrollo móvil, React Native, IA y tecnología
          </p>
          <div className="w-24 h-1 bg-[#5651e5] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {blogPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-600 text-lg">Más artículos próximamente...</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const BlogCard = ({ post, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 bg-gradient-to-br from-[#5651e5] to-[#709dff]">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium">
            {post.readTime}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-[#5651e5]/10 text-[#5651e5] rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.date}</span>
          <motion.a
            href={post.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#5651e5] text-white rounded-lg hover:bg-[#4a45c4] transition-colors text-sm font-medium"
          >
            Leer artículo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog; 
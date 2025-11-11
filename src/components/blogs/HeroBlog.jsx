import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If using React Router
// OR if using Next.js, use: import Link from 'next/link';
import campusImage from "../../assets/images/Rectangle 51.png";

export default function HeroBlog() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  // Blog post data
  const featuredPost = {
    slug: "make-money-online-40-ways",
    title: "How to make money online: 40 ways to generate income",
    excerpt: "Discover smart, creative and beginner-friendly ways to earn real income from anywhere online.",
    category: "Business Strategies",
    readTime: "12 min read"
  };

  return (
    <section className="bg-white pt-30 pb-20 relative">
      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        
        {/* LEFT CONTENT */}
        <motion.div variants={itemVariants}>
          <p className="uppercase text-sm tracking-wide text-gray-700 mb-3">
            {featuredPost.category}
          </p>
          <h2 className="text-2xl md:text-5xl font-semibold leading-tight mb-6">
            {featuredPost.title}
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {featuredPost.excerpt}
          </p>
          
          {/* Meta information */}
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
            <span>{featuredPost.readTime}</span>
            <span>•</span>
            <span>Featured Post</span>
          </div>

          {/* Linked Read More Button */}
          <Link 
            to={`/blog/${featuredPost.slug}`}
            // If using Next.js, use: href={`/blog/${featuredPost.slug}`}
          >
            <motion.button 
              className="text-black font-medium underline underline-offset-4 hover:opacity-80 transition flex items-center gap-2 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Read more
              <svg 
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT IMAGE FRAME - Also make it clickable */}
        <Link 
          to={`/blog/${featuredPost.slug}`}
          // If using Next.js, use: href={`/blog/${featuredPost.slug}`}
          className="block"
        >
          <motion.div 
            className="flex justify-center cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="bg-gradient-to-br from-[#b993ff] to-[#a47cff] rounded-3xl p-6 w-full max-w-lg flex items-center justify-center relative group">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-3xl transition-all duration-300 z-10 flex items-center justify-center">
                <motion.span 
                  className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  Read Article
                </motion.span>
              </div>
              
              {/* Rectangle image ratio */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm w-full aspect-[16/9] flex items-center justify-center">
                <img
                  src={campusImage}
                  alt="Online Income"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </Link>

      </motion.div>
    </section>
  );
}
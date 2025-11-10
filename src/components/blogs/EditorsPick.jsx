import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If using React Router
// OR if using Next.js, use: import Link from 'next/link';

const cards = [
  {
    id: 1,
    title: "I built a Ini website for my mom: here's how it went",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "building-website-for-mom",
    excerpt: "A personal journey of creating a website for my mother and the lessons learned along the way.",
    readTime: "5 min read",
    category: "Web Design"
  },
  {
    id: 2,
    title: "7 things you can do in 30 seconds using Ini's AI image tools",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "ai-image-tools-tips",
    excerpt: "Discover time-saving AI image tools that can transform your creative workflow in seconds.",
    readTime: "4 min read",
    category: "AI Tools"
  },
  {
    id: 3,
    title: "How to handle a creative block like a pro designer",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "creative-block-solutions",
    excerpt: "Professional strategies to overcome creative blocks and reignite your design inspiration.",
    readTime: "6 min read",
    category: "Creativity"
  },
  {
    id: 4,
    title: "Tips for making your online portfolio stand out",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    slug: "portfolio-stand-out-tips",
    excerpt: "Essential tips to create a portfolio that captures attention and lands you dream projects.",
    readTime: "7 min read",
    category: "Portfolio"
  },
];

const EditorsPick = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="px-6 md:px-16 py-12 bg-white relative">
      <motion.div 
        className="max-w-7xl m-auto px-6 md:px-12 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight"
          variants={itemVariants}
        >
          Editor's Pick
        </motion.h2>

        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="flex-shrink-0 w-80 md:w-96 cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <Link 
                to={`/blog/${card.slug}`} 
                // If using Next.js, use: href={`/blog/${card.slug}`}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
                      {card.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                      {card.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#8C52FF] transition-colors duration-300 line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {card.excerpt}
                  </p>
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <span className="group-hover:text-[#FF5757] transition-colors duration-300">
                      Read article →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Blog Posts Link */}
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <Link 
            to="/blog"
            // If using Next.js, use: href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Blog Posts
            <svg 
              className="w-4 h-4 ml-2" 
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
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EditorsPick;
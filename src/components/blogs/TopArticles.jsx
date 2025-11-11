import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If using React Router
// OR if using Next.js, use: import Link from 'next/link';

export default function TopArticles() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.9;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const articles = [
    {
      id: 1,
      category: "Website Essentials",
      title: "What is a domain name and why it matters",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      slug: "domain-name-essentials",
      readTime: "5 min read",
      excerpt: "Understanding the importance of domain names in building your online presence."
    },
    {
      id: 2,
      category: "Blog Like a Pro",
      title: "How to start a blog in 10 steps: a beginner's guide",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      slug: "start-blog-beginners-guide",
      readTime: "8 min read",
      excerpt: "Complete step-by-step guide to launching your first successful blog."
    },
    {
      id: 3,
      category: "Website Design",
      title: "15 creative website design ideas that inspire",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      slug: "creative-website-design-ideas",
      readTime: "6 min read",
      excerpt: "Innovative design concepts to make your website stand out from the crowd."
    },
    {
      id: 4,
      category: "Marketing Insights",
      title: "How to create a landing page in 13 easy steps",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      slug: "landing-page-creation-guide",
      readTime: "7 min read",
      excerpt: "Build high-converting landing pages that drive results and grow your business."
    },
    {
      id: 5,
      category: "AI Knowledge Hub",
      title: "How to create and design a website with AI in 2025",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      slug: "ai-website-design-2025",
      readTime: "10 min read",
      excerpt: "Leverage artificial intelligence to build stunning websites faster than ever."
    },
    {
      id: 6,
      category: "Business Strategies",
      title: "Build your online business from scratch",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      slug: "online-business-from-scratch",
      readTime: "12 min read",
      excerpt: "Comprehensive guide to launching and scaling your digital business venture."
    },
    {
      id: 7,
      category: "E-commerce Tips",
      title: "Top 10 tools to grow your online store",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      slug: "ecommerce-growth-tools",
      readTime: "9 min read",
      excerpt: "Essential tools and platforms to boost your e-commerce store performance."
    },
    {
      id: 8,
      category: "Design Focus",
      title: "How minimalism can boost your brand identity",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      slug: "minimalism-brand-identity",
      readTime: "5 min read",
      excerpt: "Discover how minimalist design principles can strengthen your brand presence."
    },
  ];

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
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#f3f4f6",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="bg-white pb-20 overflow-hidden relative">
      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-12 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* HEADER */}
        <motion.div 
          className="flex justify-between items-center mb-10"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight">Top Articles</h2>
          <div className="flex gap-3">
            <motion.button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* SCROLLABLE GRID */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
        >
          {/* 2 rows grid */}
          <div className="grid grid-rows-2 grid-flow-col gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                className="min-w-[220px] md:min-w-[500px] snap-start transition-transform cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
                custom={index}
              >
                <Link 
                  to={`/blog/${article.slug}`}
                  // If using Next.js, use: href={`/blog/${article.slug}`}
                  className="block group"
                >
                  <motion.div 
                    className="w-full h-[150px] md:h-[350px] rounded-xl overflow-hidden mb-4 relative"
                    variants={cardVariants}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 px-3 py-1 rounded-full">
                        {article.readTime}
                      </span>
                    </div>
                  </motion.div>
                  <p className="uppercase text-xs tracking-wide text-gray-600 mb-1">
                    {article.category}
                  </p>
                  <h3 className="text-lg font-medium text-black leading-snug group-hover:text-[#8C52FF] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-3 flex items-center text-sm text-gray-500 group-hover:text-[#FF5757] transition-colors duration-300">
                    <span>Read article →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Articles Link */}
        {/* <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <Link 
            to="/blog"
            // If using Next.js, use: href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Articles
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
        </motion.div> */}
      </motion.div>

      {/* Gradient Fade on Sides */}
      <div className="absolute top-0 left-0 w-20 h-full  pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full  pointer-events-none"></div>
    </section>
  );
}
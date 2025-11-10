import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const BlogArticle = () => {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });

  // Sample blog data
  const blogData = {
    title: "The Future of STEAM Education: Bridging Creativity and Technology",
    excerpt: "How interdisciplinary learning is shaping the next generation of innovators and problem solvers in an increasingly digital world.",
    author: {
      name: "Dr. Sarah Chen",
      role: "STEAM Education Specialist",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    publishDate: "December 15, 2023",
    readTime: "8 min read",
    category: "Education Technology",
    featuredImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop",
    tags: ["STEAM", "Education", "Technology", "Innovation", "Learning"]
  };

  const relatedArticles = [
    {
      id: 1,
      title: "Integrating AI in Classroom Learning",
      excerpt: "Exploring the benefits and challenges of artificial intelligence in modern education.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
      category: "AI Education",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Project-Based Learning Success Stories",
      excerpt: "Real-world examples of how project-based approaches transform student engagement.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop",
      category: "Teaching Methods",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "The Role of Creativity in STEM Fields",
      excerpt: "Why artistic thinking is becoming essential in scientific and technological innovation.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop",
      category: "Creative Learning",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a>
          <span className="mx-2">/</span>
          <a href="/blog/education" className="hover:text-blue-600 transition-colors">Education</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{blogData.category}</span>
        </nav>

        {/* Article Meta */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            {blogData.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {blogData.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {blogData.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 border-t border-b border-gray-200 py-6">
            <img
              src={blogData.author.avatar}
              alt={blogData.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">{blogData.author.name}</p>
              <p className="text-gray-600 text-sm">{blogData.author.role}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-gray-900 font-medium">{blogData.publishDate}</p>
              <p className="text-gray-500 text-sm">{blogData.readTime}</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img
            src={blogData.featuredImage}
            alt="Featured"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In today's rapidly evolving technological landscape, the integration of Science, Technology, Engineering, Arts, and Mathematics (STEAM) has become more crucial than ever. This interdisciplinary approach is not just about teaching subjects in isolation, but about creating connections that mirror real-world challenges and opportunities.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Evolution from STEM to STEAM
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The inclusion of Arts in STEM represents a significant shift in educational philosophy. While STEM focuses on technical proficiency, STEAM recognizes that creativity, design thinking, and artistic expression are equally important in driving innovation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Research shows that students engaged in STEAM education demonstrate improved problem-solving skills, enhanced creativity, and better preparation for the workforce of tomorrow. The arts component encourages divergent thinking and helps students approach problems from multiple perspectives.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Key Benefits of STEAM Education
              </h2>
              <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700"><strong>Enhanced Critical Thinking:</strong> Students learn to analyze complex problems from multiple angles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700"><strong>Creative Problem Solving:</strong> Arts integration fosters innovative approaches to technical challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700"><strong>Collaboration Skills:</strong> Interdisciplinary projects teach teamwork across different domains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700"><strong>Real-World Relevance:</strong> Learning mirrors how professionals work in modern industries</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Implementing STEAM in Modern Classrooms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Successful STEAM implementation requires more than just adding art projects to science classes. It involves creating authentic learning experiences where students can see the connections between different disciplines.
              </p>
              
              <div className="bg-gray-100 rounded-2xl p-6 my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Example Project: Sustainable City Design</h3>
                <p className="text-gray-700">
                  Students work in teams to design a sustainable city, incorporating engineering principles for infrastructure, scientific knowledge about renewable energy, mathematical calculations for resource allocation, technological tools for modeling, and artistic design for urban planning and architecture.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Future Outlook
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As we look toward the future, STEAM education will continue to evolve with emerging technologies like artificial intelligence, virtual reality, and biotechnology. The ability to think across disciplines and combine technical skills with creative insight will be one of the most valuable assets in the 21st-century workforce.
              </p>
            </section>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
            {blogData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
            <span className="text-gray-700 font-medium">Share this article:</span>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'Facebook', 'Copy Link'].map((platform) => (
                <button
                  key={platform}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </article>

      {/* Author Bio */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="flex items-start gap-6">
            <img
              src={blogData.author.avatar}
              alt={blogData.author.name}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">About the Author</h3>
              <p className="text-gray-700 mb-4">
                Dr. Sarah Chen is a leading expert in STEAM education with over 15 years of experience in curriculum development and educational technology. She has worked with schools and organizations worldwide to implement innovative learning approaches.
              </p>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View all articles
                </button>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Follow author
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedArticles.map((article) => (
            <motion.article
              key={article.id}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{article.readTime}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read more →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles on education technology, STEAM learning, and innovative teaching methods delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
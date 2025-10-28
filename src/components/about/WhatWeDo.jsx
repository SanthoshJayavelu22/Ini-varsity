import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import wedo from "../../assets/images/Rectangle 27.png";

const faqs = [
  {
    title: "Building Bright Futures through education & research.",
    content:
      "Empowering young minds with quality education and innovative research.",
  },
  {
    title: "Forums, webinars",
    content:
      "We organize interactive forums and webinars connecting educators, students, and innovators globally.",
  },
  {
    title: "Engage in research",
    content:
      "Collaborate with institutions and scholars to foster impactful research and academic excellence.",
  },
  {
    title: "Publish scholarly",
    content:
      "Publish your ideas, research findings, and thought leadership through our knowledge-sharing platform.",
  },
  {
    title: "Online Sales",
    content:
      "Access our educational materials, workshops, and online certification programs easily.",
  },
  {
    title: "Event",
    content:
      "Participate in our national and international educational conferences, symposiums, and innovation expos.",
  },
];

const team = [
  {
    name: "Shivaganesh Gunasekaran",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Surendhar Ganesh",
    role: "Co Founder & COO",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Vijay Viswanathan",
    role: "Chief Marketing Officer",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-semibold text-gray-500 mb-2"
            >
              our services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8C52FF] to-[#FF5757]"
            >
              What we do
            </motion.h2>
          </motion.div>
        </div>

        {/* Main Section (FAQ + Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left FAQ */}
          <div className="flex flex-col space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeIndex === i ? "bg-gray-50" : "bg-[#f2f6fa]"
                }`}
                onClick={() => toggleFAQ(i)}
              >
                <motion.div 
                  className="flex justify-between items-center px-6 py-4"
                  whileHover={{ backgroundColor: "rgba(140, 82, 255, 0.05)" }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-[15px] sm:text-base font-semibold text-gray-800 max-w-[90%]">
                    {faq.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeIndex === i ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 pb-4 text-gray-600 text-sm sm:text-base"
                    >
                      {faq.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="rounded-2xl overflow-hidden shadow-md cursor-pointer"
          >
       <motion.img
  src={wedo}
  alt="Education"
  className="w-full h-full object-cover"
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.4 } // put hover transition inside whileHover
  }}
  whileInView={{
    boxShadow: [
      "0 10px 30px rgba(0,0,0,0.1)",
      "0 20px 50px rgba(140, 82, 255, 0.15)",
      "0 10px 30px rgba(0,0,0,0.1)"
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }}
/>

          </motion.div>
        </div>

        {/* Core Crew Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              Core Crew
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8C52FF] to-[#FF5757] mb-12"
            >
              Brains behind the mission
            </motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-[#f2f6fa] rounded-2xl shadow-sm text-center py-8 hover:shadow-md transition-all cursor-pointer"
              >
                <motion.div 
                  className="w-60 h-50 bg-[#f2f6fa] rounded-xl mx-auto mb-4 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
                <motion.h4 
                  className="text-lg font-semibold text-gray-900"
                  whileHover={{ color: "#8C52FF" }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h4>
                <motion.p 
                  className="text-gray-600 text-sm"
                  whileHover={{ color: "#FF5757" }}
                  transition={{ duration: 0.2 }}
                >
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
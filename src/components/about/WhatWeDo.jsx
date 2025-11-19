import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import img1 from "../../assets/images/img-4.jpg";
import img2 from "../../assets/images/img-2.png";
import img3 from "../../assets/images/img-16.jpg";
import shiva from "../../assets/images/shiva.jpg";
import vijay from "../../assets/images/vijay.jpg";
import surendhar from "../../assets/images/Surendhar Ganesh.jpg";


const faqs = [
  {
    title: "Interactive Learning",
    content: "Empowering young minds with quality education and innovative research.",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Engage in research",
    content: "Collaborate with institutions and startups to foster impactful research and academic excellence.",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Blogs/Insights",
    content: "Discover thought-provoking blogs and insights — where ideas meet innovation, and learning transforms into inspiration.",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Publish Scholarly",
    content: "Share your research with the world — publish impactful, peer-reviewed scholarly works that contribute to global knowledge and inspire future innovations.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "ilabs",
    content: "Advanced research hub where educators and innovators come together to explore ideas, conduct experiments, and create breakthrough solutions that shape the future.",
    img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Events",
    content: "We organize interactive forums and webinars connecting educators, students, and innovators globally.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
  },
];
const team = [
  {
    name: "Shivaganesh Gunasekaran",
    role: "Founder & CEO",
    img: shiva,
  },
  {
    name: "Surendhar Ganesh",
    role: "Co Founder",
    img: surendhar,
  },
  {
    name: "Vijay Viswanathan",
    role: "Chief Marketing Officer (CMO)",
    img: vijay,
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-8 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-md font-semibold tracking-wider text-gray-500 mb-3">
              our services
            </p>
            <h2 className="text-4xl md:text-5xl leading-normal font-light text-transparent bg-clip-text bg-gradient-to-r from-[#8C52FF] to-[#FF5757] mb-6">
              What we do
            </h2>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-10 md:gap-16 items-start">
          {/* Left Accordion */}
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
                  transition: { duration: 0.2 },
                }}
                className={`rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeIndex === i ? "bg-gray-50" : "bg-[#f2f6fa]"
                }`}
                onClick={() => toggleFAQ(i)}
              >
                <div className="flex justify-between items-center px-6 py-4">
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
                </div>

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

          {/* Right Image (Dynamic) */}
          <div className="relative w-full h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-md">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex ?? "default"}
                src={faqs[activeIndex ?? 0].img}
                alt="Service Visual"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
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
              className="text-md font-semibold tracking-wider text-gray-500 mb-3"
            >
              Core Crew
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl leading-normal font-light text-transparent bg-clip-text bg-gradient-to-t from-[#8C52FF] to-[#FF5757] mb-6"
            >
              Brains behind the mission
            </motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
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
                  className="w-80 h-90 bg-[#f2f6fa] rounded-xl mx-auto mb-4 overflow-hidden"
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

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import img1 from "../../assets/images/img-4.jpg";
import img2 from "../../assets/images/img-2.png";
import img3 from "../../assets/images/img-16.jpg";

// FAQ Data + matching Unsplash images
const faqs = [
  {
    title: "Building Bright Futures through education & research.",
    content:
      "Empowering young minds with quality education and innovative research.",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Forums, webinars",
    content:
      "We organize interactive forums and webinars connecting educators, students, and innovators globally.",
    img: img1,
  },
  {
    title: "Engage in research",
    content:
      "Collaborate with institutions and scholars to foster impactful research and academic excellence.",
    img: img2,
  },
  {
    title: "Publish scholarly",
    content:
      "Publish your ideas, research findings, and thought leadership through our knowledge-sharing platform.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Online Sales",
    content:
      "Access our educational materials, workshops, and online certification programs easily.",
    img: img3,
  },
  {
    title: "Event",
    content:
      "Participate in our national and international educational conferences, symposiums, and innovation expos.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
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
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-gray-500 mb-2">
              our services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8C52FF] to-[#FF5757]">
              What we do
            </h2>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
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
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-md">
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
      </div>
    </section>
  );
};

export default WhatWeDo;

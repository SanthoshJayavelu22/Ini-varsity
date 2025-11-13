import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import img1 from "../../assets/images/img-15.jpg";

const TeachWithUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Foundational Program",
      content:
        "The Foundational Program empowers young trailblazers to explore cutting-edge STEAM fields like 3D Printing, Aeromodelling, Deep Astronomy and Personal MBA  — building essential future skills and igniting career-ready curiosity.",
    },
    {
      title: "Students Certifications",
      content:
        "We equip students with globally recognized certifications that validate their STEAM skills and innovative thinking, setting them apart in the future workforce.",
    },
    {
      title: "Advanced Program",
      content:
        "dvance your career with confidence — gain hands-on experience, master emerging technologies, and earn credentials that showcase your readiness for the global workforce.",
    },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
    }
  };

  return (
    <section className="w-full bg-white relative">
      <motion.div 
        className="max-w-7xl m-auto py-16 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.h2 
          className="text-4xl md:text-5xl font-light bg-linear-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight md:w-xl"
          variants={itemVariants}
        >
      Building the future with young minds
        </motion.h2>

        {/* Top Section - No gap between boxes */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between mb-20">
          {/* Left box */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-0"
            variants={imageVariants}
          >
            <div className="w-full max-w-[600px] h-[300px] md:h-[450px] rounded-r-none rounded-l-[40px] border-16 border-[#004a4a]">
              <motion.img 
                src={img1} 
                className="w-full h-full rounded-l-[20px]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Accordion Section - Touching the left box */}
          <motion.div 
            className="w-full lg:w-1/2 bg-[#e9f1f9] rounded-l-none rounded-r-3xl p-8 shadow-sm lg:rounded-l-[0px]"
            variants={itemVariants}
          >
            {accordionData.map((item, index) => (
              <motion.div 
                key={index} 
                className="border-b border-gray-300"
                variants={itemVariants}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
                >
                  {item.title}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-700" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden pb-4 text-gray-600 text-[15px]"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <motion.button 
              className="mt-6 px-6 py-2 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition rounded-full"
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Teach with us
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 text-left"
          variants={containerVariants}
        >
          <motion.div 
            className="bg-transparent p-[3px] rounded-2xl border-0 border-transparent bg-gradient-to-r from-[#8C52FF] to-[#FF5757] bg-origin-border"
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="bg-white rounded-xl p-6 h-auto">
              <h3 className="text-2xl font-semibold mb-2">01</h3>
              <h4 className="font-medium mb-2 text-gray-900">
                Industry-Driven Curriculum
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our learning materials follow industry trends, ensuring students
                gain the in-demand skills employers seek.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-transparent p-[3px] rounded-2xl border-0 border-transparent bg-gradient-to-r from-[#8C52FF] to-[#FF5757] bg-origin-border"
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="bg-white rounded-xl p-6 h-auto">
              <h3 className="text-2xl font-semibold mb-2">02</h3>
              <h4 className="font-medium mb-2 text-gray-900">
                Real-World Experience
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Students engage in hands-on projects with practical applications
                that prepare them for real workplace challenges.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-transparent p-[3px] rounded-2xl border-0 border-transparent bg-gradient-to-r from-[#8C52FF] to-[#FF5757] bg-origin-border"
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="bg-white rounded-xl p-6 h-auto">
              <h3 className="text-2xl font-semibold mb-2">03</h3>
              <h4 className="font-medium mb-2 text-gray-900">
                Innovation-First Approach
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our community of future-thinking educators leverages digital
                education to transform the student journey from college to career.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeachWithUs;
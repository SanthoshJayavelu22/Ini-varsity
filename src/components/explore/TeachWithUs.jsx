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
      title: "Curriculum Partnerships",
      content:
        "Our partnerships provide a full-suite of curriculum packages, learning resources, and 1:1 support, giving educators the tools they need to incorporate website creation across courses and disciplines.",
    },
    {
      title: "Student certifications",
      content:
        "We empower students with professional-level certifications that validate their website creation and digital skills, helping them stand out in a competitive job market.",
    },
    {
      title: "Advanced Program",
      content:
        "Our advanced tracks support experienced educators who want to integrate Ini deeper into their teaching through advanced projects and mentorship opportunities.",
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
    <motion.div 
      className="w-full bg-white max-w-7xl m-auto py-16 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.h2 
        className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-left"
        variants={itemVariants}
      >
        Teach future-ready digital <br /> skills with Ini versity.
      </motion.h2>

      {/* Top Section - No gap between boxes */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between mb-20">
        {/* Left box */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-0"
          variants={imageVariants}
        >
          <div className="w-full max-w-[600px] h-[300px] md:h-[400px] rounded-r-none rounded-l-[40px] border-16 border-[#004a4a]">
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
            className="mt-6 px-6 py-2 bg-black text-white text-sm font-medium rounded-full"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#333333"
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
          className="bg-[#fbbf24]/60 p-8 rounded-2xl"
          variants={cardVariants}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <h3 className="text-2xl font-semibold mb-2">01</h3>
          <h4 className="font-medium mb-2 text-gray-900">
            Industry-Driven Curriculum
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our learning materials follow industry trends, ensuring students
            gain the in-demand skills employers seek.
          </p>
        </motion.div>
        <motion.div 
          className="bg-[#bef264]/60 p-8 rounded-2xl"
          variants={cardVariants}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <h3 className="text-2xl font-semibold mb-2">02</h3>
          <h4 className="font-medium mb-2 text-gray-900">
            Real-World Experience
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Students engage in hands-on projects with practical applications
            that prepare them for real workplace challenges.
          </p>
        </motion.div>
        <motion.div 
          className="bg-[#bfdbfe]/60 p-8 rounded-2xl"
          variants={cardVariants}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <h3 className="text-2xl font-semibold mb-2">03</h3>
          <h4 className="font-medium mb-2 text-gray-900">
            Innovation-First Approach
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our community of future-thinking educators leverages digital
            education to transform the student journey from college to career.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TeachWithUs;
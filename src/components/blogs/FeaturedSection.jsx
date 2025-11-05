import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/img-3.jpg";

const FeaturedSection = () => {
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#ffffff",
      color: "#000000",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="bg-black text-white relative">
      <motion.div 
        className="max-w-7xl m-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Left Image */}
        <motion.div 
          className="w-full md:w-1/2"
          variants={imageVariants}
          whileHover="hover"
        >
          <img
            src={img1}
            alt="AI Tools"
            className="w-full rounded-lg"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div 
          className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0"
          variants={itemVariants}
        >
          <p className="uppercase text-sm text-gray-300 tracking-wide mb-2">
            AI Knowledge Hub
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
            Your always up-to-date guide to Ini's AI tools
          </h2>
          <p className="text-gray-400 mb-6">
            View the full menu of Ini's AI tools for web design, site creation,
            marketing and more.
          </p>
          <motion.button 
            className="border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Read more
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedSection;
import React from "react";
import { motion } from "framer-motion";

const SubscribeSection = () => {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      opacity: 0.9,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="bg-black text-white relative">
      <motion.div 
        className="max-w-7xl mx-auto py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Left side heading */}
        <motion.h2 
          className="text-5xl md:text-6xl font-light leading-tight"
          variants={itemVariants}
        >
          Never miss <br /> another article
        </motion.h2>

        {/* Right side form */}
        <motion.div 
          className="w-full max-w-sm"
          variants={itemVariants}
        >
          {/* Email input + button */}
          <motion.div 
            className="flex items-center border-b border-gray-600 pb-2 mb-6"
            whileFocus="focus"
            variants={inputVariants}
          >
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <motion.button 
              className="ml-3 bg-white text-black px-5 py-1.5 rounded-full font-medium hover:opacity-90 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Join
            </motion.button>
          </motion.div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <motion.label 
              className="flex items-start gap-2 cursor-pointer"
              variants={itemVariants}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="checkbox"
                className="mt-1 accent-white border-gray-500 bg-transparent"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="underline hover:text-white">
                  Ini terms of Use
                </a>
              </span>
            </motion.label>

            <motion.label 
              className="flex items-start gap-2 cursor-pointer"
              variants={itemVariants}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="checkbox"
                className="mt-1 accent-white border-gray-500 bg-transparent"
              />
              <span>
                I acknowledge that I've read{" "}
                <a href="#" className="underline hover:text-white">
                  Ini's Privacy Policy
                </a>
              </span>
            </motion.label>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SubscribeSection;
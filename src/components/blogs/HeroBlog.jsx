import React from "react";
import { motion } from "framer-motion";
import campusImage from "../../assets/images/Rectangle 51.png";

export default function HeroBlog() {
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="bg-white pt-30 pb-20 relative">
      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        
        {/* LEFT CONTENT */}
        <motion.div variants={itemVariants}>
          <p className="uppercase text-sm tracking-wide text-gray-700 mb-3">
            Business Strategies
          </p>
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            How to make money online: 
            40 ways to generate income
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Discover smart, creative and beginner-friendly ways to earn real
            income from anywhere online.
          </p>
          <motion.button 
            className="text-black font-medium underline underline-offset-4 hover:opacity-80 transition"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Read more →
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE FRAME */}
        <motion.div 
          className="flex justify-center"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="bg-gradient-to-br from-[#b993ff] to-[#a47cff] rounded-3xl p-6 w-full max-w-lg flex items-center justify-center">
            {/* Rectangle image ratio */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm w-full aspect-[16/9] flex items-center justify-center">
              <img
                src={campusImage}
                alt="Online Income"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
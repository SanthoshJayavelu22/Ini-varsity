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
    <section className="bg-black text-white relative min-h-screen">
      <div className="flex flex-col md:flex-row h-full">
      
        <motion.div 
          className="w-full md:w-1/2 h-screen "
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover="hover"
        >
          <img
            src={img1}
            alt="Space Exploration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content - Space related */}
        <motion.div 
          className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-lg">
            <motion.p 
              className="uppercase text-sm text-gray-300 tracking-wide mb-4"
              variants={itemVariants}
            >
              Space Exploration & Astronomy
            </motion.p>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-semibold mb-6 leading-tight"
              variants={itemVariants}
            >
              Discover the wonders of our universe
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 mb-6 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Explore the latest discoveries in space technology, astronomical phenomena, 
              and cosmic research. From distant galaxies to our own solar system, 
              uncover the mysteries of the cosmos.
            </motion.p>

     

                      <a 
  href="https://www.icosmopedia.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <motion.button
    whileHover={{
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(140, 82, 255, 0.3)",
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white px-10 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
  >
    <motion.span
      animate={{
        scale: [1, 1.02, 1],
        transition: { duration: 2, repeat: Infinity, repeatDelay: 3 },
      }}
    >
     icosmopedia
    </motion.span>
  </motion.button>
</a>


            {/* <motion.div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="border border-white px-8 py-3 rounded-full text-base hover:bg-white hover:text-black transition font-medium"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Explore Space Topics
              </motion.button>
              
              <motion.button 
                className="border border-gray-600 px-8 py-3 rounded-full text-base text-gray-300 hover:bg-gray-800 hover:text-white transition font-medium"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Latest Discoveries
              </motion.button>
            </motion.div> */}


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
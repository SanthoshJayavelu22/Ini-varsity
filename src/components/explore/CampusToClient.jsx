import React from "react";
import { motion } from "framer-motion";
import campusImage from "../../assets/images/Rectangle 51.png"; // replace with your image path

const CampusToClient = () => {
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

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
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
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="bg-[#F5F7FA] relative">
      <div className="py-20 px-6 md:px-16 max-w-7xl m-auto">
        {/* Top Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div 
            className="max-w-xl"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-light bg-linear-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight">
          Smart Incubation Partnership Program
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed text-justify mb-6">
              The Smart Incubation Partnership (SIP) Program aims to empower
              schools with 21st-century learning opportunities through STEAM
              Education, library reinforcement, academic publishing, and
              innovation development. Our mission is to nurture a skilled and
              creative student community capable of contributing to national and
              global innovation platforms. Through this partnership, schools can
              transform their campuses into hubs of creativity, research, and
              academic excellence.
            </p>
            <motion.button 
            className="mt-6 px-6 py-2 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition rounded-full"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#333333"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Join the waitlist
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src={campusImage}
              alt="Students working together"
              className="w-[460px] h-[310px] object-cover rounded-2xl shadow-sm"
            />
          </motion.div>
        </motion.div>

        {/* How to make it work */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-light bg-linear-to-t from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight"
            variants={itemVariants}
          >
            How to make it work
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div 
              className="bg-[#F7931E] text-black p-8 rounded-2xl"
              variants={cardVariants}
              whileHover="hover"
            >
              <h4 className="text-3xl font-medium mb-3">01</h4>
              <h5 className="text-lg font-semibold mb-2">Initiate</h5>
              <p className="text-[15px] leading-relaxed text-black/90">
                Schools can submit their interest through our official
                registration form. Once your application is received, our team
                will reach out to discuss your school's vision and readiness for
                the Smart Incubation Partnership Program (SIPP).
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-[#E8F48C] text-black p-8 rounded-2xl"
              variants={cardVariants}
              whileHover="hover"
            >
              <h4 className="text-3xl font-medium mb-3">02</h4>
              <h5 className="text-lg font-semibold mb-2">Evaluate</h5>
              <p className="text-[15px] leading-relaxed text-black/90">
                Our academic and technical team will conduct a visit to your
                school to understand the current infrastructure, library
                resources, and STEAM learning environment. This helps us design a
                customized implementation plan suited to your school's needs.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-[#003B49] text-white p-8 rounded-2xl"
              variants={cardVariants}
              whileHover="hover"
            >
              <h4 className="text-3xl font-medium mb-3">03</h4>
              <h5 className="text-lg font-semibold mb-2">Collaborate</h5>
              <p className="text-[15px] leading-relaxed text-white/90">
                After evaluation, we'll officially collaborate with your
                institution to launch the Smart Incubation Partnership Program,
                integrating STEAM education, library reinforcement, research
                opportunities, and student participation in national &
                international platforms.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusToClient;
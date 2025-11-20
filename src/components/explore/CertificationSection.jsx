import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/Group.png";
import { Link } from "react-router-dom";
import { Download } from "lucide-react"; 


const certifications = [
  {
    id: 1,
    title: "3D Printing",
    description:
      "Our entry-level certification verifies students' essential digital skills and ability to build basic websites with Ini.",
    image: img1,
  },
  {
    id: 2,
    title: "Unmanned Aerial Vehicle",
    description:
      "Our entry-level certification verifies students' essential digital skills and ability to build basic websites with Ini.",
    image: img1,
  },
  {
    id: 3,
    title: "Deep Astronomy",
    description:
      "Our entry-level certification verifies students' essential digital skills and ability to build basic websites with Ini.",
    image: img1,
  },
  {
    id: 4,
    title: "Rocket  Science",
    description:
      "Our entry-level certification verifies students' essential digital skills and ability to build basic websites with Ini.",
    image: img1,
  },
    {
    id: 5,
    title: "Robotics",
    description:
      "Our entry-level certification verifies students' essential digital skills and ability to build basic websites with Ini.",
    image: img1,
  },
];

export default function CertificationSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.5,
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
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -3,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const arrowVariants = {
    hover: {
      x: 3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-[#E8F0FB] py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-light bg-linear-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight"
            variants={itemVariants}
          >
            Certify your students for success
          </motion.h2>
          <motion.p 
            className="text-gray-700 max-w-sm mt-4 md:mt-0"
            variants={itemVariants}
          >
            The Ini Academic Certification program helps students earn
            industry-recognized credentials and showcase their digital skills as
            they move from college to career.
          </motion.p>
        </motion.div>

        <motion.p 
          className="text-gray-800 mb-6 font-medium text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
       Foundational Programs
        </motion.p>

        {/* Cards */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-white rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm px-6 py-5 hover:shadow-md transition"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Left side */}
              <div className="flex items-center gap-4 w-full md:w-1/2 ">
                {/* <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-20 h-20 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                /> */}
                <h3 className="text-lg font-medium text-gray-900">
                  {cert.title}
                </h3>
              </div>

              {/* Right side */}
              <div className="w-full md:w-1/2">
                <p className="text-gray-700 text-sm mt-3 mb-5 md:mb-0">
                  {cert.description}
                </p>
                <div className="flex gap-3 md:justify-end flex-wrap">
                  <Link to="/threedprinting">  <motion.button 
                    className="bg-[#fff] border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100 transition"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Enroll Now
                  </motion.button>  </Link>
                  <motion.button 
                    className="flex items-center gap-2 text-sm font-medium text-gray-800 underline"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                   Curriculum

                    <motion.span variants={arrowVariants}>
                      <Download className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
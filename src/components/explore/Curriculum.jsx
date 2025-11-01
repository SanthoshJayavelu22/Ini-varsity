import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Curriculum = () => {
  const courses = [
    {
      title: "Digital marketing",
      description:
        "Students design and implement an omnichannel marketing plan for an eCommerce business.",
    },
    {
      title: "Digital marketing",
      description:
        "Students design and implement an omnichannel marketing plan for an eCommerce business.",
    },
    {
      title: "Digital marketing",
      description:
        "Students design and implement an omnichannel marketing plan for an eCommerce business.",
    },
    {
      title: "Digital marketing",
      description:
        "Students design and implement an omnichannel marketing plan for an eCommerce business.",
    },
    {
      title: "Digital marketing",
      description:
        "Students design and implement an omnichannel marketing plan for an eCommerce business.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const courseCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -2,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section className="bg-white relative">
      <motion.div 
        className="max-w-7xl m-auto py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-start md:justify-between mb-12"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#8C52FF] to-[#FF5757] bg-clip-text text-transparent mb-2">
              Ini Versity curriculum
            </h2>
          </motion.div>
          <motion.div 
            className="max-w-xl text-gray-700 text-[15px] leading-relaxed"
            variants={itemVariants}
          >
            <p>
              Our ready-to-use, career-focused curriculum saves faculty time and
              gives students hands-on, cross-disciplinary skill application—across
              any course format.
            </p>
            <p className="mt-3">
              Did not find the topic you are teaching?{" "}
              <motion.a
                href="#"
                className="underline text-gray-900 hover:text-gray-700 font-medium"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Please contact us
              </motion.a>
            </p>
          </motion.div>
        </motion.div>

        {/* Course List */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-0 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-sm transition-shadow duration-300 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] p-0.5"
              variants={courseCardVariants}
              whileHover="hover"
            >
              {/* Content with white background */}
              <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between w-full">
                {/* Left Text */}
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-medium text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 text-[15px] mt-1">
                    {course.description}
                  </p>
                </div>

                {/* Right Buttons - unchanged */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  <motion.button 
                    className="border border-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Download Preview
                  </motion.button>
                  <motion.button 
                    className="text-sm font-medium underline text-gray-900 hover:text-gray-700 flex items-center gap-1"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Request full curriculum
                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Curriculum;
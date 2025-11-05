import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/images/img-4.jpg";
import img2 from "../assets/images/img-15.jpg";
import img3 from "../assets/images/img-16.jpg";
import img4 from "../assets/images/img-17.jpg";
import img5 from "../assets/images/img-2.png";
import img6 from "../assets/images/img-13.jpg";
import img7 from "../assets/images/img-14.jpg";

const classCards = [
  { title: "CLASS 01", color: "#D6EADF", img: img1 },
  { title: "CLASS 02", color: "#3E8067", img: img2 },
  { title: "CLASS 03", color: "#F6823F", img: img3 },
  { title: "CLASS 04", color: "#1E63E9", img: img4 },
];

const blogCards = [
  { title: "Brand design 101: Strategies for building a memorable identity", img: img5 },
  { title: "How to create impactful educational experiences", img: img6 },
  { title: "Future of learning: Blending tech and creativity", img: img7 },
];

// Smoother animations with better easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] // Smooth ease-out
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const EducationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-50px", // Reduced margin for earlier trigger
    amount: 0.3 
  });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-20 bg-white text-gray-900 px-4 sm:px-6 md:px-12 py-20 md:py-28 overflow-hidden rounded-b-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
      style={{ marginTop: "-30vh" }}
    >
      {/* Enhanced floating background dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-full opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🎓 CLASS SCHEDULES SECTION */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10 px-4 sm:px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p
            variants={itemVariants}
            className="uppercase text-sm font-semibold mb-2 tracking-wide text-gray-600"
          >
            UPCOMING
          </motion.p>

          <div className="flex justify-between items-center flex-wrap gap-4 mb-10">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text"
            >
              Class Schedules
            </motion.h2>

            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(140, 82, 255, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 15,
                hover: { duration: 0.2 }
              }}
              className="px-5 py-2 text-white rounded-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-sm sm:text-base hover:opacity-90 transition-all"
            >
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatDelay: 1.5,
                  ease: "easeInOut"
                }}
              >
                Explore →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Class Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {classCards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover="hover"
              className="rounded-3xl overflow-hidden h-64 relative group cursor-pointer shadow-lg"
            >
              <motion.div
                variants={cardHoverVariants}
                className="w-full h-full"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-75 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500"></div>

                <div className="absolute bottom-4 left-4 text-white z-10">
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold mb-1"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm opacity-80"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Ini sites are designed to ensure fast loading times.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✨ BLOG SECTION */}
      <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-light leading-normal bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6"
          >
            Insights, Inspiration, and more
          </motion.h2>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(140, 82, 255, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 15 
            }}
            className="px-6 py-2 text-white rounded-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-sm sm:text-base mb-12 hover:opacity-90 transition-all"
          >
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                repeatDelay: 1.5,
                ease: "easeInOut"
              }}
            >
              Explore Our Blog
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Blog Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogCards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover="hover"
              className="bg-[#DDE6F2] rounded-2xl overflow-hidden group cursor-pointer relative shadow-md"
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-48 sm:h-56 relative overflow-hidden"
              >
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div className="p-5 flex justify-between items-center relative">
                <motion.p
                  className="text-sm sm:text-base font-medium text-left pr-4"
                  whileHover={{ 
                    color: "#8C52FF",
                    x: 3
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {card.title}
                </motion.p>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    rotate: 45,
                    backgroundColor: "#8C52FF",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15 
                  }}
                  className="bg-black text-white rounded-full p-2 hover:opacity-80 transition-all group"
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced connector animation */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-full"
            animate={{
              width: ["80px", "140px", "80px"],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Smooth fade-out gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </motion.section>
  );
};

export default EducationSection;
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

// Smooth fade-up animation with staggered effect
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.4, // smooth sequential delay
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const EducationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-white text-gray-900 px-4 sm:px-6 md:px-12 py-16 md:py-24 overflow-hidden relative"
    >
      {/* Floating background dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🎓 CLASS SCHEDULES SECTION */}
      <div className="max-w-6xl mx-auto mb-20 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase text-sm font-semibold mb-2 tracking-wide"
        >
          UPCOMING
        </motion.p>

        <div className="flex justify-between items-center flex-wrap gap-4 mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text"
          >
            Class Schedules
          </motion.h2>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(140, 82, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="px-5 py-2 text-white rounded-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-sm sm:text-base hover:opacity-90 transition-all"
          >
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              Explore →
            </motion.span>
          </motion.button>
        </div>

        {/* Class Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {classCards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="rounded-3xl overflow-hidden h-64 relative group cursor-pointer shadow-lg"
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  {card.title}
                </h3>
                <p className="text-sm opacity-80">
                  Ini sites are designed to ensure fast loading times.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✨ BLOG SECTION */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6"
        >
          Insights, Inspiration, and more
        </motion.h2>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(140, 82, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="px-6 py-2 text-white rounded-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-sm sm:text-base mb-12 hover:opacity-90 transition-all"
        >
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          >
            Explore Our Blog
          </motion.span>
        </motion.button>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogCards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-[#DDE6F2] rounded-2xl overflow-hidden group cursor-pointer relative shadow-md"
            >
              <motion.div
                className="h-48 sm:h-56 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />
              </motion.div>

              <div className="p-5 flex justify-between items-center relative">
                <motion.p
                  className="text-sm sm:text-base font-medium text-left pr-4"
                  whileHover={{ color: "#8C52FF" }}
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
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
        </div>

        {/* Connector animation */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-full"
            animate={{
              width: ["80px", "120px", "80px"],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

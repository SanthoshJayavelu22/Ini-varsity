import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const classCards = [
  { title: "CLASS 01", color: "#D6EADF" },
  { title: "CLASS 02", color: "#3E8067" },
  { title: "CLASS 03", color: "#F6823F" },
  { title: "CLASS 04", color: "#1E63E9" },
];

const blogCards = [
  { title: "Brand design 101: Strategies for building a memorable identity" },
  { title: "Brand design 101: Strategies for building a memorable identity" },
  { title: "Brand design 101: Strategies for building a memorable identity" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const EducationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="bg-white text-gray-900 px-4 sm:px-6 md:px-12 py-16 md:py-24 overflow-hidden">
      {/* Animated Background Elements */}
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
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* ========================== */}
      {/* 🎓 CLASS SCHEDULES SECTION */}
      {/* ========================== */}
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
              boxShadow: "0 10px 30px rgba(140, 82, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="px-5 py-2 text-white rounded-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-sm sm:text-base hover:opacity-90 transition-all"
          >
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              Explore →
            </motion.span>
          </motion.button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {classCards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="rounded-3xl p-6 h-56 flex flex-col justify-between text-black relative overflow-hidden group cursor-pointer"
              style={{ backgroundColor: card.color }}
            >
              {/* Animated background element */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] opacity-0 rounded-3xl"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />

              <div className="relative z-10">
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base opacity-70 leading-relaxed"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Wix sites are designed to ensure fast loading times.
                </motion.p>
              </div>

              {/* Animated underline */}
              <motion.div
                className="h-0.5 bg-current opacity-0 group-hover:opacity-30 mt-2"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* =============================== */}
      {/* ✨ INSIGHTS & INSPIRATION SECTION */}
      {/* =============================== */}
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
            boxShadow: "0 10px 30px rgba(140, 82, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="px-6 py-2 text-white rounded-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-sm sm:text-base mb-12 hover:opacity-90 transition-all"
        >
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 2
            }}
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
                transition: { duration: 0.3 }
              }}
              className="bg-[#DDE6F2] rounded-2xl overflow-hidden group cursor-pointer relative"
            >
              {/* Image Container with Animation */}
              <motion.div 
                className="h-48 sm:h-56 bg-[#3E8067] relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:to-black/20"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating elements in image */}
                <motion.div
                  className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full opacity-30"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.7
                  }}
                />
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
                    backgroundColor: "#8C52FF"
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

              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                whileHover={{ 
                  borderColor: "rgba(140, 82, 255, 0.3)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Section connector animation */}
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
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
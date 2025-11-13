import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom"; 

const FloatingDot = ({ delay, size, x, y }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757]"
      style={{
        width: size,
        height: size,
        top: `${y}%`,
        left: `${x}%`,
        opacity: 0.15,
      }}
      animate={{
        y: [0, 20, -20, 0],
        x: [0, 15, -10, 0],
        opacity: [0.05, 0.2, 0.1, 0.05],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Generate random positions for floating dots
  const floatingElements = Array.from({ length: 15 }).map((_, i) => ({
    delay: i * 0.5,
    size: `${Math.random() * 8 + 4}px`,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section
      ref={sectionRef}
      className="mt-28 md:mt-45 text-center px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Floating Dots Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((el, index) => (
          <FloatingDot key={index} {...el} />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-[90px] font-light leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text"
          >
            "Connecting dots
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text"
          >
            through education"
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg text-black"
        >
         From creative experiments to groundbreaking innovations — explore ideas that inspire curiosity, spark imagination, and shape the future through STEAM learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
     
          <Link to="/contact">
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
                Get Started
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

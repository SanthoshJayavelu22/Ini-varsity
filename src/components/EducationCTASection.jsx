import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EducationCTASection = () => {
  const words = ["education", "innovation", "knowledge"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="bg-white text-gray-900 pt-24 pb-20 px-4 sm:px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-medium leading-tight mb-8"
        >
          <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
            “Let&apos;s connect the dots, <br /> through{" "}
          </span>
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text"
          >
            {words[index]}
          </motion.span>
          <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
            ”
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationCTASection;

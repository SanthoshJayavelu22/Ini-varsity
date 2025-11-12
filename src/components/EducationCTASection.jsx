import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EducationCTASection = () => {
  const words = ["education", "innovation", "research"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
<section className="relative z-10 -mt-24 bg-[#bdbaf7] text-gray-900 pt-70 pb-40 px-4 sm:px-6 md:px-12">

      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-[90px] font-light leading-tight mb-8"
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
             <Link to="/contact">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started
          </button></Link> 
        </motion.div>
      </div>
    </section>
  );
};

export default EducationCTASection;

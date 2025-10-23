import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EducationCTASection = () => {
  const words = ["education", "knowledge", "innovation"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing animation logic
  useEffect(() => {
    if (index === words.length) setIndex(0);

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, deleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // Handle word transitions
  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
  }, [subIndex, deleting, index, words.length]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <section className="bg-white text-gray-900 pt-24 pb-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8"
        >
          <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
            Let&apos;s connect the dots through{" "}
          </span>
          <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
            {words[index].substring(0, subIndex)}
            <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
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

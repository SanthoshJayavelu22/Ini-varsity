import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import map from "../../assets/images/map.png";

const CountUp = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target.replace(/\D/g, "")); // extract number
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {target.includes("k") && "k"}
      {target.includes("+") && "+"}
    </span>
  );
};

const GlobalPresence = () => {
const stats = [
  {
    number: "1500+",
    title: "Students Trained",
    text: "Building a global community of curious minds equipped with 21st-century skills.",
  },
  {
    number: "25+",
    title: "Research-Based Courses",
    text: "Offering hands-on, inquiry-driven programs designed to inspire innovation.",
  },
  {
    number: "18+",
    title: "Partner Institutions",
    text: "Collaborating with leading schools and universities to expand learning impact.",
  },
  {
    number: "12+",
    title: "International Collaborations",
    text: "Connecting globally to exchange knowledge and foster cross-cultural research.",
  },
];


  return (
    <section className="w-full bg-white py-8 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl leading-normal font-light text-transparent bg-clip-text bg-gradient-to-t from-[#8C52FF] to-[#FF5757] mb-6"
          >
            Our global presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-700 mt-3"
          >
          Empowering learners worldwide through innovation and research-driven education. We have trained 1500+ students across the globe, delivering impactful learning experiences that inspire growth and creativity.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Stats */}
          <div className="space-y-10">
            {stats.map((stat, i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: i * 0.2 }}
  whileHover={{ x: 10, transition: { duration: 0.3 } }}
  className="cursor-pointer"
>
  <motion.h3
    className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-2 flex-wrap"
    whileHover={{
      scale: 1.05,
      background: "linear-gradient(135deg, #8C52FF, #FF5757)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
    transition={{ duration: 0.3 }}
  >
    <CountUp target={stat.number} />{" "}
    <span className="font-semibold text-gray-800 text-xl">
      {stat.title}
    </span>
  </motion.h3>

  <motion.p
    className="text-gray-700  mt-1"
    whileHover={{ color: "#8C52FF" }}
    transition={{ duration: 0.2 }}
  >
    {stat.text}
  </motion.p>
</motion.div>

            ))}
          </div>

          {/* Right Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative w-full flex justify-center"
          >
            <motion.img
              src={map}
              alt="World map"
              className="w-full max-w-[600px] rounded-md opacity-95"
             
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;

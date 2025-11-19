import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
    },
    {
      number: "25+",
      title: "Research-Based Courses",
    },
    {
      number: "18+",
      title: "Partner Institutions",
    },
    {
      number: "12+",
      title: "International Collaborations",
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
            Empowering learners worldwide through innovation and research-driven education. We have trained 1500+ students across the globe, delivering impactful learning experiences that inspire growth and creativity.
          </motion.p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-7xl mx-auto mb-12 md:mb-16"
        >
          <video
            className="w-full h-auto rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/src/assets/images/map animate.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Horizontal Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="mb-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#8C52FF] to-[#FF5757]">
                    <CountUp target={stat.number} duration={2000} />
                  </h3>
                </div>
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  {stat.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalPresence;
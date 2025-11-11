import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/img-4.jpg";
import img2 from "../../assets/images/img-15.jpg";
import img3 from "../../assets/images/img-16.jpg";
import img4 from "../../assets/images/img-17.jpg";
import img5 from "../../assets/images/img-2.png";
import img6 from "../../assets/images/img-13.jpg";
import img7 from "../../assets/images/img-14.jpg";
import img8 from "../../assets/images/img-8.jpg";

const topics = ["education", "knowledge", "innovation"];

// Use the imported local images
const localImages = [img1, img2, img3, img4, img5, img6, img7, img8];

// Animation variants
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-20 md:pt-32 pb-10 md:pb-24 ">
      <motion.div
        className="max-w-5xl mx-auto text-center px-6 py-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Gradient Heading */}
        <motion.h1
          className="text-3xl md:text-[85px] font-light leading-tight"
          variants={fadeInUp}
        >
          <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
            Empower through
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
            Education & Community
          </span>
        </motion.h1>

        {/* Gradient Paragraph */}
        <motion.p
          className="mt-5 text-lg  bg-clip-text"
          variants={fadeInUp}
        >
        Our study programs are ingeniously designed to dissolve the boundaries between academic concepts and practical implementation. We firmly believe in an education that is both actionable and deeply pertinent.

        </motion.p>

        {/* Gradient Button */}
         <Link to="/contact">
        <motion.button
          className="mt-8 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button></Link>  
      </motion.div>

      {/* Top Scrolling Row */}
      <div className="mt-16 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...localImages.slice(0, 4), ...localImages.slice(0, 4)].map(
            (src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden w-80 h-54"
              >
                <img
                  src={src}
                  alt={`${topics[i % topics.length]} image`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* Bottom Scrolling Row */}
      <div className="mt-10 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...localImages.slice(4, 8), ...localImages.slice(4, 8)].map(
            (src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden w-80 h-54"
              >
                <img
                  src={src}
                  alt={`${topics[i % topics.length]} image`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion"; 
import aboutimg from "../assets/images/child-making-robot 1.png";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  // Floating dots animation
  const floatingDots = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  return (
    <section className="-mt-[30vh] relative z-10 bg-white py-28 md:py-36 rounded-t-[100px] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-full opacity-20"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12 relative z-10">
        {/* Text */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -60 }}
          animate={isTextInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-semibold text-gray-700 tracking-wider mb-3"
          >
            STEAM EDUCATION
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-light leading-normal bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6"
          >
            Connecting dots, <br /> through education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isTextInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-gray-600 leading-relaxed mb-8 text-justify">
              We are a research-driven educational Organization committed to nurturing the next generation of STEAM trailblazers. Our groundbreaking learning model doesn't just teach; it transforms, fostering acute critical thinking, inventive creativity, and authentic problem-solving abilities. We bring learning to life through immersive hands-on experiences from vibrant forums and insightful webinars to enriching, expert-led workshops all designed to ignite profound curiosity and empower students to become influential leaders in a perpetually evolving world.
            </p>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(140, 82, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                About us →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 60, rotateY: 10 }}
          animate={isImageInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ 
            duration: 1, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          className="md:w-1/2"
        >
          <motion.div className="relative">
            <motion.img
              src={aboutimg}
              alt="Kids in science lab"
              className="rounded-2xl shadow-md w-full"
              whileInView={{
                boxShadow: [
                  "0 10px 30px rgba(0,0,0,0.1)",
                  "0 20px 50px rgba(140, 82, 255, 0.2)",
                  "0 10px 30px rgba(0,0,0,0.1)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8C52FF] to-[#FF5757] opacity-0 mix-blend-overlay"
              whileInView={{ opacity: 0.1 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
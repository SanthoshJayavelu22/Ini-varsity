import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/images/Rectangle 38.png";
import missionimg from "../../assets/images/Business mission-pana 1.png";

const AboutMission = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16 pt-30 md:pt-40">
      {/* ABOUT US SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-semibold tracking-wider text-gray-500 mb-3"
          >
            ABOUT US
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8C52FF] to-[#FF5757] mb-6 leading-snug"
          >
            Connecting dots, <br /> Through education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-700 leading-relaxed mb-6"
            >
              At INI, we're more than an institute; we're a catalyst for the
              future, dedicated to nurturing the innovators, deep thinkers, and
              influential leaders of tomorrow. Our heartbeat is the holistic
              development of our students and the advancement of STEM excellence
              through an unparalleled, transformative learning experience.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-700 leading-relaxed mb-6"
            >
              Beyond our academic and research endeavors, we are a hub for vibrant
              intellectual exchange, organizing engaging forums, illuminating
              webinars, and significant conferences that foster open dialogue,
              facilitate knowledge transfer, and strengthen a cohesive,
              collaborative community.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-700 leading-relaxed"
            >
              "We wholeheartedly believe that true intellect blossoms when fueled
              by curiosity, integrity, and a profound sense of purpose, and our
              driving force is to awaken that potential within every learner."
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-[#8fa3ff] rounded-3xl p-4 md:p-12 cursor-pointer"
          >
            <motion.img
              src={aboutimg}
              alt="Student Learning"
              className="rounded-2xl w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              whileInView={{
                boxShadow: [
                  "0 10px 30px rgba(0,0,0,0.1)",
                  "0 20px 50px rgba(140, 82, 255, 0.2)",
                  "0 10px 30px rgba(0,0,0,0.1)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* MISSION & VISION SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8C52FF] to-[#FF5757] mb-12"
        >
          Mission & Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5 }}
            className="bg-[#f2f6fa] rounded-2xl shadow-sm p-6 relative cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -top-4 left-6 bg-[#f2f6fa] border border-gray-200 rounded-full px-4 py-1 text-xs font-semibold shadow-sm flex items-center gap-2"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 bg-linear-to-r from-[#8C52FF] to-[#FF5757] rounded-full"
              ></motion.span>
              MISSION
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-700 leading-relaxed mt-6"
            >
              Our core mission is to ignite a lifelong passion for discovery in
              every student, cultivating powerful capabilities that go beyond
              textbooks.
            </motion.p>

            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              whileHover={{ borderColor: "rgba(140, 82, 255, 0.1)" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Mission Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="bg-[#f2f6fa] rounded-2xl shadow-md p-4 flex justify-center cursor-pointer"
          >
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <motion.img
                src={missionimg}
                alt="Mission Vision"
                className="rounded-2xl object-cover"
                whileHover={{ scale: 1.05 }}
                whileInView={{
                  boxShadow: [
                    "0 10px 25px rgba(0,0,0,0.1)",
                    "0 15px 35px rgba(140, 82, 255, 0.15)",
                    "0 10px 25px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-16 h-1 bg-linear-to-r from-[#8C52FF] to-[#FF5757] rounded-full"
            animate={{
              width: ["64px", "100px", "64px"],
              opacity: [0.6, 1, 0.6],
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

export default AboutMission;

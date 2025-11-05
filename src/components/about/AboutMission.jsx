import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/images/Rectangle 38.png";
import missionimg from "../../assets/images/Business mission-pana 1.png";
import visionimg from "../../assets/images/vision.jpg"; 

const AboutMission = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16 pt-30 md:pt-40 relative overflow-hidden">
      {/* ABOUT US SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-stretch gap-12 mb-24">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <motion.p
            className="text-sm font-semibold tracking-wider text-gray-500 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ABOUT US
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl leading-normal font-light text-transparent bg-clip-text bg-gradient-to-r from-[#8C52FF] to-[#FF5757] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Connecting dots, <br /> Through education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              At INI, we’re more than an institute; we’re a catalyst for the future, dedicated to nurturing the innovators, deep thinkers, and influential leaders of tomorrow. Our heartbeat is the holistic development of our students and the advancement of STEM excellence through an unparalleled, transformative learning experience. Our distinctive, research-integrated approach is engineered to cultivate vital 21st-century proficiencies, including sharp critical analysis, inventive creativity, and practical, impactful problem-solving.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Beyond our academic and research endeavors, we are a hub for vibrant intellectual exchange, organizing engaging forums, illuminating webinars, and significant conferences that foster open dialogue, facilitate knowledge transfer, and strengthen a cohesive, collaborative community. Our commitment extends to strategic partnerships with innovative startups and esteemed research institutions, co-leading impactful research initiatives and publishing pivotal insights via our platform.
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              "We wholeheartedly believe that true intellect blossoms when fueled by curiosity, integrity, and a profound sense of purpose, and our driving force is to awaken that potential within every learner.”
            </p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative flex items-center justify-center h-full"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-[#8fa3ff] rounded-3xl p-4 md:p-12 cursor-pointer w-full h-full flex items-center justify-center"
          >
            <motion.img
              src={aboutimg}
              alt="Student Learning"
              className="rounded-2xl w-full h-auto max-h-[600px] object-cover"
              whileHover={{ scale: 1.05 }}
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
  className="text-4xl md:text-5xl leading-normal font-light text-transparent bg-clip-text bg-gradient-to-t from-[#8C52FF] to-[#FF5757] mb-6"
>
  Mission & Vision
</motion.h2>


        

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-[#f2f6fa] rounded-2xl shadow-sm p-6 relative cursor-pointer"
          >
            <div className="absolute -top-4 left-6 bg-[#f2f6fa] border border-gray-200 rounded-full px-4 py-1 text-xs font-semibold shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-linear-to-r from-[#8C52FF] to-[#FF5757] rounded-full"></span>
              MISSION
            </div>

            <p className="text-gray-700 leading-relaxed mt-6 text-justify">
              Our core mission is to ignite a lifelong passion for discovery in
              every student, cultivating powerful capabilities that go beyond
              textbooks. We’re dedicated to nurturing a skilled and responsible
              generation of innovators, ready to engineer brilliant solutions for
              the most pressing national and global challenges through the power
              of science and technology.
            </p>
          </motion.div>

          {/* Mission Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#f2f6fa] rounded-2xl shadow-md p-4 flex justify-center cursor-pointer"
          >
            <motion.img
              src={missionimg}
              alt="Mission Vision"
              className="rounded-2xl object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Vision Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#f2f6fa] rounded-2xl shadow-md p-4 flex justify-center cursor-pointer"
          >
            <motion.img
              src={visionimg}
              alt="Vision"
              className="rounded-2xl object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          {/* Vision Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-[#f2f6fa] rounded-2xl shadow-sm p-6 relative cursor-pointer"
          >
            <div className="absolute -top-4 left-6 bg-[#f2f6fa] border border-gray-200 rounded-full px-4 py-1 text-xs font-semibold shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-linear-to-r from-[#8C52FF] to-[#FF5757] rounded-full"></span>
              VISION
            </div>

            <p className="text-gray-700 leading-relaxed mt-6 text-justify">
              We envision becoming the foremost nexus where bright young minds,
              pioneering researchers, and dynamic startups converge. Our goal is
              to catalyze a thriving, research-driven ecosystem that relentlessly
              propels innovation forward and champions the nation’s ascent as a
              global leader across all frontiers of progress.
            </p>
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
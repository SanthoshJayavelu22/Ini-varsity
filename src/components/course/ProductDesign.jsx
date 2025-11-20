import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Clock, Users, Calendar, Star, ChevronRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Mock images - replace with your actual imports
import courseHero from "../../assets/images/product design.jpg";
import module1 from "../../assets/images/img-4.jpg";
import module2 from "../../assets/images/img-16.jpg";
import module3 from "../../assets/images/child-making-robot 1.png";

const ProductDesign = () => {
  const [activeModule, setActiveModule] = useState(0);

  const courseData = {
    title: "Product Design and Development Program",
    subtitle: "22-day Virtual Bootcamp",
    description: "This 22-days virtual bootcamp offers a hands-on journey into product design and development. Participants will learn how to create a product from scratch, using proven design, fab and research methodologies.",
    duration: "22 days",
    schedule: "07 PM Onwards",
    language: "English + Hindi",
    price: "INR 12,000",
    slots: "20-30 Max/Batch",
    mode: "Online (Microsoft Teams)",
    status: "Active",
    
    highlights: [
      "Design and develop a product from concept to prototype",
      "Apply product development methodologies and design thinking",
      "Conduct user and market research for innovation",
      "Professional presentation of product ideas"
    ],

    modules: [
      {
        id: 1,
        title: "Design Thinking & Concept Development",
        objective: "To develop creative and critical thinking skills by understanding user needs, generating innovative product ideas, and transforming them into well-defined concepts.",
        image: module1,
        highlights: [
          "Apply Design Thinking for user-centric solutions",
          "Master Idea Generation techniques",
          "Learn Drafting & Sketching for visual communication",
          "CAD Modeling for 3D visualization",
          "Conceptual Phase navigation"
        ],
        tools: ["Fusion 360", "Sketching Tools", "Design Thinking Frameworks"]
      },
      {
        id: 2,
        title: "Fabrication & Advanced Manufacturing",
        objective: "To equip learners with hands-on experience in prototyping, understanding traditional and advanced manufacturing processes.",
        image: module2,
        highlights: [
          "Explore Manufacturing Processes",
          "Advanced Manufacturing Techniques",
          "3D Printing workflows",
          "Slicing Software mastery",
          "Smart manufacturing analysis"
        ],
        tools: ["3D Printers", "Cura", "CNC Software", "Prototyping Tools"]
      },
      {
        id: 3,
        title: "Simulation & AI-Assisted Research",
        objective: "To validate product performance through simulation tools and introduce AI-powered research techniques.",
        image: module3,
        highlights: [
          "Product Simulations (structural, thermal, fluid)",
          "AI Tools for Research",
          "Trend analysis and competitor mapping",
          "Data-backed validation",
          "Design optimization"
        ],
        tools: ["Ansys", "Fusion 360", "AI Research Tools", "Simulation Software"]
      }
    ],

    benefits: [
      {
        icon: <Star className="w-6 h-6 text-white" />,
        title: "21st Century Skills & Activities",
        description: "Develop future-ready skills through hands-on projects"
      },
      {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "AI Tools for Research & Development",
        description: "Master AI-powered tools for enhanced research capabilities"
      },
      {
        icon: <Download className="w-6 h-6 text-white" />,
        title: "Course Completion Certificate",
        description: "Earn a recognized certificate upon successful completion"
      },
      {
        icon: <Calendar className="w-6 h-6 text-white" />,
        title: "Letter of Recommendation",
        description: "Eligible students receive recommendation letters"
      },
      {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Welcome Kit",
        description: "Get started with our exclusive welcome package"
      },
      {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Network Building",
        description: "Connect with industry professionals and peers"
      }
    ],

    tools: ["Autodesk Fusion 360", "Ultimaker CURA", "AI Research Tools"]
  };

  // Animation variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const slideIn = {
    initial: { x: -50, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Handle module change
  const handleModuleChange = (index) => {
    setActiveModule(index);
  };

  const nextBatchDate = "2025-11-25T19:00:00";  // <--- CHANGE DATE HERE

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = React.useState(
    countDownDate - new Date().getTime()
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  if (countDown <= 0) {
    return ["0", "0", "0", "0"];
  }

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const [days, hours, minutes, seconds] = useCountdown(nextBatchDate);


  return (
    <div className="min-h-screen bg-white mt-10 md:mt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#8C52FF]/10 via-white to-[#FF5757]/10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Left Content */}
            <motion.div variants={fadeInUp}>
            
              
              <motion.h1 
                className="text-4xl md:text-6xl font-light leading-tight mb-6"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
                  {courseData.title}
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                {courseData.description}
              </motion.p>

              {/* Course Info Grid */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#8C52FF]" />
                  <span className="text-gray-700">{courseData.duration}</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#FF5757]" />
                  <span className="text-gray-700">{courseData.schedule}</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#8C52FF]" />
                  <span className="text-gray-700">{courseData.slots}</span>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <motion.button
                  className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now - {courseData.price}
                </motion.button>
                <motion.button
                  className="border border-gray-300 text-gray-700 font-medium px-8 py-4 rounded-full hover:bg-gray-50 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                 Watch Preview
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              variants={fadeInUp}
            >
              <motion.img
                src={courseHero}
                alt="Course Hero"
                className="w-[350px] md:w-full h-[500px] md:h-[750px]  rounded-3xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-center mb-12"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
                What You'll Achieve
              </span>
            </motion.h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {courseData.highlights.map((highlight, index) => (
    <motion.div
      key={index}
      className="p-[2px] rounded-2xl bg-gradient-to-r from-[#8C52FF] to-[#FF5757]"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        
        {/* Number Badge */}
        <div className="w-12 h-12 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-lg flex items-center justify-center mb-4">
          <span className="text-white text-xl font-semibold">{index + 1}</span>
        </div>

        {/* Text */}
        <p className="text-gray-700 leading-relaxed flex-grow">
          {highlight}
        </p>
      </div>
    </motion.div>
  ))}
</div>


          </motion.div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-center mb-4"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
                Course Curriculum
              </span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Comprehensive modules covering the entire product development lifecycle
            </motion.p>

            {/* Module Navigation */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center mb-12"
              variants={fadeInUp}
            >
              {courseData.modules.map((module, index) => (
                <motion.button
                  key={module.id}
                  onClick={() => handleModuleChange(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeModule === index
                      ? "bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-[#8C52FF] hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Module {module.id}
                </motion.button>
              ))} 
            </motion.div>

            {/* Module Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Module Image */}
                  <motion.div
                    className="relative h-64 lg:h-full min-h-[400px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={courseData.modules[activeModule].image}
                      alt={courseData.modules[activeModule].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </motion.div>

                  {/* Module Details */}
                  <div className="p-8">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-light mb-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
                        {courseData.modules[activeModule].title}
                      </span>
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {courseData.modules[activeModule].objective}
                    </motion.p>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                      <ul className="space-y-2 mb-6">
                        {courseData.modules[activeModule].highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="font-semibold text-gray-900 mb-3">Tools & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {courseData.modules[activeModule].tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-[#8C52FF]/10 to-[#FF5757]/10 text-gray-700 rounded-full text-sm border border-[#8C52FF]/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-center mb-12"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
                Course Benefits
              </span>
            </motion.h2>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {courseData.benefits.map((benefit, index) => (
    
    <motion.div
      key={index}
      className="p-[2px] rounded-2xl bg-gradient-to-r from-[#8C52FF] to-[#FF5757]"
      variants={fadeInUp}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="bg-white rounded-2xl p-6 h-full transition-all duration-300 shadow-sm hover:shadow-md">
        
        {/* Icon */}
        <motion.div
          className="w-12 h-12 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-lg flex items-center justify-center mb-4"
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          {benefit.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {benefit.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {benefit.description}
        </p>

      </div>
    </motion.div>

  ))}
</div>

          </motion.div>
        </div>
      </section>

      {/* Tools & Eligibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tools Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-light mb-6"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
                  Tools You'll Master
                </span>
              </motion.h3>
              
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                {courseData.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-full" />
                    <span className="text-gray-700 font-medium">{tool}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Eligibility Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-light mb-6"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
                  Who Should Enroll?
                </span>
              </motion.h3>
              
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm"
                variants={fadeInUp}
              >
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This program is open to anyone who is curious about innovation and product creation. 
                  Whether you're a school student exploring design, a college student pursuing engineering 
                  or business, or a professional seeking to upskill in product development, this course 
                  is designed to meet your learning needs.
                </p>
                <div className="p-4 bg-gradient-to-r from-[#8C52FF]/10 to-[#FF5757]/10 rounded-lg">
                  <p className="text-gray-700 font-semibold">
                    No prior experience required — just a passion to build and innovate.
                  </p>
                </div>
              </motion.div>

           {/* Final CTA */}
<motion.div className="mt-8 text-center" variants={fadeInUp}>

  {/* Countdown Timer Box */}
  <div className="mb-6 inline-block px-6 py-4 bg-gradient-to-r from-[#8C52FF]/10 to-[#FF5757]/10 rounded-2xl shadow-inner">
    <h4 className="text-lg font-semibold text-gray-800 mb-2">
      Next Batch Starts On:
    </h4>

 <p className="text-[#8C52FF] font-medium mb-3">
  {new Date(nextBatchDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })}
  {" — "}
  {new Date(nextBatchDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
</p>


    {/* Live Countdown */}
    <div className="flex justify-center gap-4 text-center">
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((item, index) => (
        <div key={index} className="w-20">
          <p className="text-2xl font-bold bg-gradient-to-r from-[#8C52FF] to-[#FF5757] bg-clip-text text-transparent">
            {item.value}
          </p>
          <span className="text-gray-600 text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  </div>

  <motion.button
    className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white font-medium px-12 py-4 rounded-full hover:opacity-90 transition text-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Enroll in Program - {courseData.price}
  </motion.button>

  <p className="text-gray-600 mt-4 text-sm">
    Limited to {courseData.slots} participants per batch
  </p>
</motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDesign;
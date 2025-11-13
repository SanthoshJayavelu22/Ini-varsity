import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Download, 
  Clock, 
  Users, 
  Calendar, 
  Star, 
  ChevronRight, 
  PlayCircle,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Globe,
  Award,
  BookOpen,
  Video,
  Code,
  Layout,
  Smartphone,
  BarChart3
} from "lucide-react";
import img1 from "../../assets/images/speak.jpg";

const CoursePage = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  // Unsplash Images - High quality, relevant images
  const images = {
    hero: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    designThinking: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    fabrication: img1,
    simulation: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    benefits: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
  };

  const courseData = {
    title: "Product Design and Development Program",
    subtitle: "22-day Virtual Bootcamp",
    description: "Transform your ideas into market-ready products through our intensive 22-day bootcamp. Master design thinking, advanced fabrication, and AI-powered research methodologies.",
    duration: "22 days",
    schedule: "07 PM Onwards",
    language: "Tamil & English",
    price: "INR 12,000",
    slots: "20-30 Max/Batch",
    mode: "Online (Microsoft Teams)",
    status: "Active",
    rating: "4.9",
    students: "500+",
    
    highlights: [
      "Design and develop a product from concept to prototype",
      "Apply product development methodologies and design thinking",
      "Conduct user and market research for innovation",
      "Professional presentation of product ideas"
    ],

    stats: [
      { number: "98%", label: "Completion Rate", icon: <Target className="w-6 h-6" /> },
      { number: "500+", label: "Students Enrolled", icon: <Users className="w-6 h-6" /> },
      { number: "4.9/5", label: "Student Rating", icon: <Star className="w-6 h-6" /> },
      { number: "50+", label: "Projects Built", icon: <Award className="w-6 h-6" /> }
    ],

    modules: [
      {
        id: 1,
        title: "Design Thinking & Concept Development",
        objective: "Develop creative and critical thinking skills through user-centric design methodologies and advanced visualization techniques.",
        image: images.designThinking,
        duration: "7 days",
        lessons: "12 lessons",
        projects: "3 projects",
        highlights: [
          "Apply Design Thinking for user-centric solutions",
          "Master Idea Generation techniques",
          "Learn Drafting & Sketching for visual communication",
          "CAD Modeling for 3D visualization",
          "Conceptual Phase navigation"
        ],
        tools: ["Fusion 360", "Figma", "Miro", "Design Thinking Frameworks"],
        color: "from-blue-500 to-cyan-400"
      },
      {
        id: 2,
        title: "Fabrication & Advanced Manufacturing",
        objective: "Gain hands-on experience in prototyping and master both traditional and cutting-edge manufacturing processes.",
        image: images.fabrication,
        duration: "8 days",
        lessons: "15 lessons",
        projects: "4 projects",
        highlights: [
          "Explore Manufacturing Processes",
          "Advanced Manufacturing Techniques",
          "3D Printing workflows",
          "Slicing Software mastery",
          "Smart manufacturing analysis"
        ],
        tools: ["3D Printers", "Cura", "CNC Software", "Prototyping Tools"],
        color: "from-purple-500 to-pink-500"
      },
      {
        id: 3,
        title: "Simulation & AI-Assisted Research",
        objective: "Validate product performance through advanced simulation tools and leverage AI for data-driven decision making.",
        image: images.simulation,
        duration: "7 days",
        lessons: "10 lessons",
        projects: "3 projects",
        highlights: [
          "Product Simulations (structural, thermal, fluid)",
          "AI Tools for Research",
          "Trend analysis and competitor mapping",
          "Data-backed validation",
          "Design optimization"
        ],
        tools: ["Ansys", "Fusion 360", "AI Research Tools", "Simulation Software"],
        color: "from-green-500 to-emerald-400"
      }
    ],

    benefits: [
      {
        icon: <Zap className="w-8 h-8" />,
        title: "21st Century Skills",
        description: "Develop future-ready skills through hands-on projects and real-world challenges",
        gradient: "from-yellow-400 to-orange-500"
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "AI-Powered Research",
        description: "Master AI tools for enhanced research, analysis, and innovation capabilities",
        gradient: "from-blue-500 to-cyan-400"
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: "Industry Certificate",
        description: "Earn a recognized certificate that validates your expertise to employers",
        gradient: "from-purple-500 to-pink-500"
      },
      {
        icon: <BookOpen className="w-8 h-8" />,
        title: "Expert Mentorship",
        description: "Learn from industry professionals with years of product development experience",
        gradient: "from-green-500 to-emerald-400"
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Welcome Kit",
        description: "Get started with our exclusive welcome package including resources and tools",
        gradient: "from-red-500 to-pink-500"
      },
      {
        icon: <Layout className="w-8 h-8" />,
        title: "Network Building",
        description: "Connect with industry professionals, mentors, and like-minded peers",
        gradient: "from-indigo-500 to-purple-500"
      }
    ],

    tools: [
      { name: "Autodesk Fusion 360", icon: <Code className="w-6 h-6" />, category: "3D Design" },
      { name: "Ultimaker CURA", icon: <Layout className="w-6 h-6" />, category: "Slicing" },
      { name: "AI Research Tools", icon: <Smartphone className="w-6 h-6" />, category: "AI" },
      { name: "Ansys", icon: <BarChart3 className="w-6 h-6" />, category: "Simulation" }
    ]
  };

  // Enhanced Animation Variants
  const fadeInUp = {
    initial: { y: 80, opacity: 0, scale: 0.95 },
    animate: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  const staggerContainer = {
    animate: {
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const slideIn = {
    initial: { x: -80, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "backOut" 
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden mt-20">
      {/* Enhanced Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Background with Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.img
            src={images.hero}
            alt="Product Design Bootcamp"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-white">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Left Content */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">{courseData.status}</span>
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">{courseData.rating} Rating</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  Product
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  Design Mastery
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                variants={fadeInUp}
              >
                {courseData.description}
              </motion.p>

              {/* Interactive Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {courseData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)"
                    }}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="text-cyan-400">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <motion.button
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    background: "linear-gradient(45deg, #06b6d4, #3b82f6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Enroll Now - {courseData.price}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button
                  className="group bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    <PlayCircle className="w-5 h-5" />
                    Watch Preview
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Course Card */}
            <motion.div
              variants={scaleIn}
              className="relative"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                whileHover={{ rotateY: 5 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Course Details</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: <Clock className="w-5 h-5" />, text: courseData.duration },
                    { icon: <Calendar className="w-5 h-5" />, text: courseData.schedule },
                    { icon: <Globe className="w-5 h-5" />, text: courseData.language },
                    { icon: <Users className="w-5 h-5" />, text: courseData.slots },
                    { icon: <Video className="w-5 h-5" />, text: courseData.mode }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-3 bg-white/5 rounded-xl"
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <div className="text-cyan-400">{item.icon}</div>
                      <span className="text-gray-200">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

             
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
                variants={floatingAnimation}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full shadow-lg"
                variants={floatingAnimation}
                animate={{
                  ...floatingAnimation.animate,
                  transition: { ...floatingAnimation.animate.transition, delay: 1 }
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Curriculum Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #000 2%, transparent 0%), radial-gradient(circle at 75px 75px, #000 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-6"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Curriculum
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Master the complete product development lifecycle through our structured, project-based learning approach
              </motion.p>
            </motion.div>

            {/* Interactive Module Navigation */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center mb-16"
              variants={fadeInUp}
            >
              {courseData.modules.map((module, index) => (
                <motion.button
                  key={module.id}
                  onClick={() => setActiveModule(index)}
                  className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 group overflow-hidden ${
                    activeModule === index
                      ? "text-white shadow-2xl"
                      : "text-gray-700 bg-white shadow-lg hover:shadow-xl"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${module.color} ${
                    activeModule === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-5'
                  } transition-opacity duration-300`} />
                  <span className="relative z-10 flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      activeModule === index ? 'bg-white' : `bg-gradient-to-r ${module.color}`
                    }`} />
                    Module {module.id}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Animated Module Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Module Image with Overlay */}
                  <div className="relative h-96 lg:h-full">
                    <motion.img
                      src={courseData.modules[activeModule].image}
                      alt={courseData.modules[activeModule].title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${courseData.modules[activeModule].color} opacity-20`} />
                    
                    {/* Module Badge */}
                    <motion.div
                      className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${courseData.modules[activeModule].color} text-white font-semibold shadow-lg`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {courseData.modules[activeModule].duration}
                    </motion.div>
                  </div>

                  {/* Module Details */}
                  <div className="p-8 lg:p-12">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${courseData.modules[activeModule].color} flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">{courseData.modules[activeModule].id}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">
                          {courseData.modules[activeModule].title}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {courseData.modules[activeModule].objective}
                      </p>

                      {/* Module Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="text-center p-4 bg-gray-50 rounded-2xl">
                          <div className="text-2xl font-bold text-gray-900">{courseData.modules[activeModule].lessons}</div>
                          <div className="text-sm text-gray-600">Lessons</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-2xl">
                          <div className="text-2xl font-bold text-gray-900">{courseData.modules[activeModule].projects}</div>
                          <div className="text-sm text-gray-600">Projects</div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">What You'll Learn:</h4>
                        <div className="space-y-3">
                          {courseData.modules[activeModule].highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + idx * 0.1 }}
                            >
                              <CheckCircle className={`w-5 h-5 text-gradient-to-r ${courseData.modules[activeModule].color}`} />
                              <span className="text-gray-700">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Tools & Technologies:</h4>
                        <div className="flex flex-wrap gap-3">
                          {courseData.modules[activeModule].tools.map((tool, idx) => (
                            <motion.span
                              key={idx}
                              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium"
                              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900" />
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 5,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-6"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                  Why Choose This Program?
                </span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={fadeInUp}
                  onHoverStart={() => setHoveredBenefit(index)}
                  onHoverEnd={() => setHoveredBenefit(null)}
                >
                  <motion.div
                    className={`relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 ${
                      hoveredBenefit === index ? 'scale-105 bg-white/10' : ''
                    }`}
                    whileHover={{ 
                      y: -10,
                    }}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 relative z-10`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -20 }}
                      animate={{ x: hoveredBenefit === index ? 0 : -20 }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Tools & Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Tools Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 
                className="text-4xl md:text-5xl font-bold mb-8"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Tools You'll Master
                </span>
              </motion.h3>
              
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
              >
                {courseData.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    variants={fadeInUp}
                    whileHover={{ 
                      x: 20,
                      scale: 1.02
                    }}
                  >
                    <div className="flex items-center gap-6">
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                      >
                        {tool.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {tool.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{tool.category}</p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Final CTA Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="sticky top-8"
            >
              <motion.div
                className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
                variants={scaleIn}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, #fff 2%, transparent 0%)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                <div className="relative z-10">
                  <motion.h3 
                    className="text-3xl font-bold mb-4"
                    variants={fadeInUp}
                  >
                    Ready to Start Your Journey?
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed"
                    variants={fadeInUp}
                  >
                    Join {courseData.students} students who have transformed their careers through our product design bootcamp.
                  </motion.p>

                  <motion.div 
                    className="space-y-4 mb-8"
                    variants={staggerContainer}
                  >
                    {[
                      "No prior experience required",
                      "Hands-on project based learning",
                      "Industry expert mentorship",
                      "Lifetime access to resources"
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        variants={fadeInUp}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <motion.button
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
                      whileHover={{ 
                        scale: 1.02,
                        background: "linear-gradient(45deg, #06b6d4, #3b82f6)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-3 text-lg">
                        Enroll Now - {courseData.price}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                    
                    <motion.p 
                      className="text-gray-400 mt-4 text-sm"
                      variants={fadeInUp}
                    >
                      Limited to {courseData.slots} participants per batch
                    </motion.p>

                    {/* Countdown Timer */}
                    <motion.div
                      className="mt-6 p-4 bg-white/10 rounded-2xl"
                      variants={fadeInUp}
                    >
                      <div className="text-center">
                        <div className="text-sm text-gray-300 mb-2">Next batch starts in</div>
                        <div className="flex justify-center gap-2 text-2xl font-bold">
                          <span className="bg-white/20 px-3 py-1 rounded-lg">05</span>
                          <span className="text-cyan-400">:</span>
                          <span className="bg-white/20 px-3 py-1 rounded-lg">18</span>
                          <span className="text-cyan-400">:</span>
                          <span className="bg-white/20 px-3 py-1 rounded-lg">42</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursePage;
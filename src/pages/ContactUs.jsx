import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, User, Briefcase, FileText, Award } from "lucide-react";
import { motion } from "framer-motion";
import EducationCTASection from "../components/EducationCTASection";

const ContactUs = () => {
  const [activeSection, setActiveSection] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [careerFormData, setCareerFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null
  });

  const contactRef = useRef(null);
  const careerRef = useRef(null);

  // Check URL hash on component mount and when location changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#careers') {
      setActiveSection("careers");
      setTimeout(() => {
        careerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (hash === '#contact') {
      setActiveSection("contact");
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCareerChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setCareerFormData({
        ...careerFormData,
        resume: files[0]
      });
    } else {
      setCareerFormData({
        ...careerFormData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form submitted:", formData);
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    console.log("Career Form submitted:", careerFormData);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { y: -5, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.98 }
  };

  const careerPositions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Content Writer",
    "Marketing Specialist",
    "Project Manager",
    "Data Scientist"
  ];

  return (
    <>
      <section className="relative w-full bg-white text-gray-900 py-35 z-20 px-6 md:px-20 overflow-hidden rounded-b-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
        
        {/* Contact Section */}
        <div ref={contactRef}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {/* Header Section */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <motion.h2
                className="text-2xl md:text-7xl font-light leading-normal bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                "Every Great Collaboration
                <br /> Begins with a Conversation."
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Ready to transform your educational journey? Let's start the conversation and explore endless possibilities together.
              </motion.p>
            </motion.div>

            {/* Form and Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left Side - Form */}
              <motion.div className="w-full" variants={itemVariants}>
                <motion.div
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 className="text-2xl font-bold text-gray-900 mb-2" variants={itemVariants}>
                    Send us a Message
                  </motion.h3>
                  <motion.p className="text-gray-600 mb-8" variants={itemVariants}>
                    Fill out the form and our team will get back to you within 24 hours.
                  </motion.p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white"
                        required
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Your Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Tell us about your requirements..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white resize-none"
                        required
                      ></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white font-semibold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>

              {/* Right Side - Info Cards */}
              <motion.div className="w-full space-y-8" variants={containerVariants}>
                <motion.div className="grid grid-cols-1 gap-6" variants={containerVariants}>
                  {/* Phone */}
                  <motion.div
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-lg flex items-start gap-4"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                      <p className="text-gray-600 mt-1">+91 9944840454</p>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-lg flex items-start gap-4"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                      <p className="text-gray-600 mt-1">info@inivarsity.com</p>
                      <p className="text-sm text-gray-500 mt-2">We'll reply within 24 hours</p>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-lg flex items-start gap-4"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Office</h3>
                      <p className="text-gray-600 mt-1">123 Innovation Street, Chennai, India</p>
                      <p className="text-sm text-gray-500 mt-2">Visit our campus anytime</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Additional Info */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                  <motion.div
                    className="bg-gradient-to-br from-[#8C52FF] to-[#FF5757] rounded-2xl p-6 text-white"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <Clock className="w-8 h-8 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                    <p className="text-white/90 text-sm">We guarantee to get back to you within 24 hours of your inquiry.</p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-6 text-white"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <MessageCircle className="w-8 h-8 mb-3" />
                    <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                    <p className="text-white/90 text-sm">Our dedicated team is always ready to assist you with any queries.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Stats */}
            <motion.div
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
              variants={containerVariants}
            >
              {[
                { number: "24h", label: "Avg. Response Time" },
                { number: "500+", label: "Students Helped" },
                { number: "99%", label: "Satisfaction Rate" },
                { number: "50+", label: "Expert Faculty" }
              ].map((stat, index) => (
                <motion.div key={index} className="text-center" variants={itemVariants}>
                  <motion.div
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8C52FF] to-[#FF5757] bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Career Section */}
        <div ref={careerRef} className="mt-20 pt-20 border-t border-gray-200">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {/* Career Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <motion.h2
                className="text-2xl md:text-7xl font-light leading-normal bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                "Join Our Innovative Team"
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Be part of a dynamic team that's transforming education through innovation and technology. 
                Explore exciting career opportunities and grow with us.
              </motion.p>
            </motion.div>

            {/* Career Form and Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              {/* Career Form */}
              <motion.div className="w-full" variants={itemVariants}>
                <motion.div
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 className="text-2xl font-bold text-gray-900 mb-2" variants={itemVariants}>
                    Apply for a Position
                  </motion.h3>
                  <motion.p className="text-gray-600 mb-8" variants={itemVariants}>
                    Fill out the application form and we'll get back to you soon.
                  </motion.p>

                  <form onSubmit={handleCareerSubmit} className="space-y-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="fullName"
                          value={careerFormData.fullName}
                          onChange={handleCareerChange}
                          placeholder="Enter your full name"
                          className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white"
                          required
                        />
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            name="email"
                            value={careerFormData.email}
                            onChange={handleCareerChange}
                            placeholder="your@email.com"
                            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white"
                            required
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            name="phone"
                            value={careerFormData.phone}
                            onChange={handleCareerChange}
                            placeholder="+91 98765 43210"
                            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Position</label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <select
                            name="position"
                            value={careerFormData.position}
                            onChange={handleCareerChange}
                            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white appearance-none"
                            required
                          >
                            <option value="">Select a position</option>
                            {careerPositions.map((position, index) => (
                              <option key={index} value={position}>{position}</option>
                            ))}
                          </select>
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Experience</label>
                        <div className="relative">
                          <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <select
                            name="experience"
                            value={careerFormData.experience}
                            onChange={handleCareerChange}
                            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white appearance-none"
                            required
                          >
                            <option value="">Select experience</option>
                            <option value="0-1">0-1 years</option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5+">5+ years</option>
                          </select>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Cover Letter</label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <textarea
                          name="coverLetter"
                          value={careerFormData.coverLetter}
                          onChange={handleCareerChange}
                          rows="4"
                          placeholder="Tell us why you'd be a great fit..."
                          className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white resize-none"
                          required
                        ></textarea>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Upload Resume</label>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleCareerChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8C52FF] file:text-white hover:file:bg-[#7B45E6]"
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white font-semibold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Send className="w-5 h-5" />
                      Submit Application
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>

              {/* Career Benefits */}
              <motion.div className="w-full space-y-8" variants={containerVariants}>
                <motion.h3 className="text-2xl font-bold text-gray-900 mb-6" variants={itemVariants}>
                  Why Join Our Team?
                </motion.h3>
                
                <motion.div className="grid grid-cols-1 gap-6" variants={containerVariants}>
                  {[
                    {
                      icon: <Award className="w-6 h-6" />,
                      title: "Competitive Salary",
                      description: "We offer industry-competitive compensation packages with performance bonuses."
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Flexible Hours",
                      description: "Work-life balance with flexible working hours and remote work options."
                    },
                    {
                      icon: <Briefcase className="w-6 h-6" />,
                      title: "Career Growth",
                      description: "Continuous learning opportunities and clear career progression paths."
                    },
                    {
                      icon: <MessageCircle className="w-6 h-6" />,
                      title: "Collaborative Culture",
                      description: "Work in a supportive environment that encourages innovation and teamwork."
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-lg flex items-start gap-4"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] p-3 rounded-xl text-white">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Current Openings */}
                <motion.div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-6 text-white" variants={cardVariants}>
                  <h3 className="font-bold text-xl mb-4">Current Open Positions</h3>
                  <div className="space-y-3">
                    {careerPositions.slice(0, 4).map((position, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-600 last:border-b-0">
                        <span>{position}</span>
                        <span className="text-green-400 text-sm font-medium">Hiring</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Smooth fade-out bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      <EducationCTASection />
    </>
  );
};

export default ContactUs;
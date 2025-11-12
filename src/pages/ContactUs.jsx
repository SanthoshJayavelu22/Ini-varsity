import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import EducationCTASection from "../components/EducationCTASection";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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

  return (
    <>
      <section className="relative w-full bg-white text-gray-900 py-35 z-20 px-6 md:px-20 overflow-hidden rounded-b-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
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

        {/* Smooth fade-out bottom gradient (same as EducationSection) */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      <EducationCTASection />
    </>
  );
};

export default ContactUs;

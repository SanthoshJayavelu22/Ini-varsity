import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import logo from "../assets/images/ini varsity logo.png";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        {/* Top Section - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Stay Updated */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Contact Details</h4>

            {/* Newsletter Signup */}
            {/* <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for the latest updates and educational resources.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C52FF] focus:border-transparent text-sm text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                  Subscribe
                </button>
              </div>
            </div> */}

            {/* Contact Info */}
            <div className="space-y-2 ">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <i className="ri-mail-fill text-[#8C52FF]"></i>
                <span>hello@Ini.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <i className="ri-phone-fill text-[#8C52FF]"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <i className="ri-map-pin-fill text-[#8C52FF]"></i>
                <span>123 Education Street, Learn City</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Home
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  About Us
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Explore
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Contact Us
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Courses
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Events
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Resources
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Blog
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* <img src={logo} alt="Ini Logo" className="w-16 h-16 object-contain" /> */}
              <h2 className="text-6xl font-extrabold text-white">ini</h2>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Connecting educators and learners through innovative platforms that transform education 
              and empower knowledge sharing worldwide. Join us in revolutionizing the future of learning.
            </p>

            <div className="flex gap-4 pt-2">
              {["facebook-fill", "instagram-fill", "youtube-fill", "linkedin-fill"].map((icon) => (
                <button
                  key={icon}
                  className="w-10 h-10 rounded-full bg-transparent border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-[#8C52FF] hover:text-white transition-all duration-200"
                >
                  <i className={`ri-${icon} text-lg`}></i>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-700">
          {/* Legal Links first */}
          <div className="flex gap-6 text-sm text-gray-400 mb-4 sm:mb-0">
            <a href="#" className="hover:text-[#8C52FF] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#8C52FF] transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#8C52FF] transition-colors duration-200">
              Cookie Policy
            </a>
          </div>

          {/* Copyright last */}
          <div className="text-sm text-gray-400">
            <p>© 2025 Ini. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{
              scale: 1.1,
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;

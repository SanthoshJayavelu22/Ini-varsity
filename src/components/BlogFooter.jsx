import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

import SubscribeSection from "../components/blogs/SubscribeSection";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Social Media Links
  const socialLinks = [
    {
      icon: "whatsapp-line",
      href: "https://wa.me/919944840454",
      label: "WhatsApp",
    },
    {
      icon: "instagram-line",
      href: "https://www.instagram.com/inivarsity?igsh=b2VuNXlwdHM1cDhu&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: "facebook-fill",
      href: "https://www.facebook.com/share/1BZvGx3XT8/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: "twitter-x-line",
      href: "https://x.com/inivarsity?s=21",
      label: "Twitter / X",
    },
    {
      icon: "youtube-fill",
      href: "https://youtube.com/@inivarsity?si=e0uXdvZYDABDLLwp",
      label: "YouTube",
    },
  ];

  return (
    <>
      <SubscribeSection />

      <footer className="bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
          {/* Top Section - 3 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Column 1: Contact Info */}
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">Contact Details</h4>

              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <i className="ri-mail-fill text-[#8C52FF]"></i>
                  <span>info@inivarsity.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <i className="ri-phone-fill text-[#8C52FF]"></i>
                  <span>+91 99 44 840 454</span>
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
                  <a href="/" className="block text-gray-300 hover:text-[#8C52FF] font-medium transition-colors">
                    Home
                  </a>
                  <a href="/about" className="block text-gray-300 hover:text-[#8C52FF] font-medium transition-colors">
                    About Us
                  </a>
                  <a href="/explore" className="block text-gray-300 hover:text-[#8C52FF] font-medium transition-colors">
                    Explore
                  </a>
                  <a href="/contact" className="block text-gray-300 hover:text-[#8C52FF] font-medium transition-colors">
                    Contact Us
                  </a>
                </div>
                <div className="space-y-3">
                  <a href="/course" className="block text-gray-300 hover:text-[#8C52FF] font-medium transition-colors">
                    Courses
                  </a>
                  <a href="/blogs" className="block text-gray-300 hover:text-[#8C52FF] font-medium transition-colors">
                    Blogs
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-6xl font-extrabold text-white">ini</h2>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm">
                Connecting educators and learners through innovative platforms that transform research worldwide.
                Join us in revolutionizing the future.
              </p>

              {/* ✅ Social Icons with Real Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="relative group w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-[#8C52FF] hover:text-white transition-all duration-200"
                  >
                    <i className={`ri-${icon} text-lg`}></i>
             
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-700">
            <div className="flex gap-6 text-sm text-gray-400 mb-4 sm:mb-0">
              <a href="/privacy" className="hover:text-[#8C52FF] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#8C52FF] transition-colors">
                Terms of Service
              </a>
              <a href="/returns" className="hover:text-[#8C52FF] transition-colors">
                Return Policy
              </a>
            </div>
    <div className="text-sm text-gray-400">
            <p>
              Designed & Developed By:{" "}
              <a href="https://www.swiflare.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C52FF]">
                Swiflare AI Innovations
              </a>
            </p>
          </div>
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
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </footer>
    </>
  );
};

export default Footer;

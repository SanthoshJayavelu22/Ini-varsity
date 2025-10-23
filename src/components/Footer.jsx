import logo from '../assets/images/ini varsity logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        {/* Top Section - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Ini Logo" className="w-16 h-16 object-contain" />
            </div>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">
              Connecting educators and learners through innovative platforms that 
              transform education and empower knowledge sharing worldwide. 
              Join us in revolutionizing the future of learning.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 pt-2">
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#8C52FF] hover:text-white transition-all duration-200 shadow-sm">
                <i className="ri-facebook-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#8C52FF] hover:text-white transition-all duration-200 shadow-sm">
                <i className="ri-instagram-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#8C52FF] hover:text-white transition-all duration-200 shadow-sm">
                <i className="ri-youtube-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#8C52FF] hover:text-white transition-all duration-200 shadow-sm">
                <i className="ri-linkedin-fill text-lg"></i>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Menu */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-800 text-lg">Navigation</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Home
                </a>
                <a href="#" className="block text-gray-600 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  About Us
                </a>
                <a href="#" className="block text-gray-600 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Explore
                </a>
                <a href="#" className="block text-gray-600 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Contact Us
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Courses
                </a>
                <a href="#" className="block text-gray-600 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Events
                </a>
                <a href="#" className="block text-gray-600 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Resources
                </a>
                <a href="#" className="block text-gray-600 hover:text-[#8C52FF] transition-colors duration-200 font-medium">
                  Blog
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-800 text-lg">Stay Updated</h4>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
                Subscribe to our newsletter for the latest updates and educational resources.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C52FF] focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <i className="ri-mail-fill text-[#8C52FF]"></i>
                <span>hello@Ini.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <i className="ri-phone-fill text-[#8C52FF]"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <i className="ri-map-pin-fill text-[#8C52FF]"></i>
                <span>123 Education Street, Learn City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
          {/* Copyright */}
          <div className="text-sm text-gray-500 mb-4 sm:mb-0">
            <p>© 2025 Ini. All rights reserved.</p>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-500">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
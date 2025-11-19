import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/ini varsity logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setOpen(false);

  const isActive = (path) => location.pathname === path;

  const handleCareerClick = () => {
    setOpen(false);
    // Navigate to contact page with careers hash
    window.location.href = '/contact#careers';
  };

  const handleContactClick = () => {
    setOpen(false);
    // Navigate to contact page with contact hash
    window.location.href = '/contact';
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="logo" className="w-16" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link
            to="/"
            className={`hover:text-black ${isActive("/") ? "text-black font-bold" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-black ${isActive("/about") ? "text-black font-bold" : ""}`}
          >
            About us
          </Link>
          <Link
            to="/explore"
            className={`hover:text-black ${isActive("/explore") ? "text-black font-bold" : ""}`}
          >
            Explore
          </Link>
          <Link
            to="/blogs"
            className={`hover:text-black ${isActive("/blogs") ? "text-black font-bold" : ""}`}
          >
            Blogs
          </Link>
          <button
            onClick={handleCareerClick}
            className={`hover:text-black ${location.pathname === "/contact" ? "text-black font-bold" : ""}`}
          >
            Careers
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={handleContactClick} className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white font-medium px-5 py-2 rounded-full hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 font-medium">
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`block ${isActive("/") ? "text-black font-bold" : "text-gray-600"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={`block ${isActive("/about") ? "text-black font-bold" : "text-gray-600"}`}
          >
            About us
          </Link>
          <Link
            to="/explore"
            onClick={handleLinkClick}
            className={`block ${isActive("/explore") ? "text-black font-bold" : "text-gray-600"}`}
          >
            Explore
          </Link>
          <Link
            to="/blogs"
            onClick={handleLinkClick}
            className={`block ${isActive("/blogs") ? "text-black font-bold" : "text-gray-600"}`}
          >
            Blogs
          </Link>
          <button
            onClick={handleCareerClick}
            className={`block w-full text-left ${location.pathname === "/contact" ? "text-black font-bold" : "text-gray-600"}`}
          >
            Careers
          </button>

          <button onClick={handleContactClick} className="w-full bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white py-2 rounded-full hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "../assets/images/ini varsity logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-16" />
        
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About us</a>
          <a href="#" className="hover:text-black">Explore</a>
          <a href="#" className="hover:text-black">Connect</a>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
   
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-full transition">
            Get Started
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
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About us</a>
          <a href="#" className="block">Explore</a>
          <a href="#" className="block">Connect</a>
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

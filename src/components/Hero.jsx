import React, { useState, useEffect } from "react";
import book from "../assets/images/Rectangle 23.png";
const Hero = () => {
  const fullText = "through education";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullText.substring(
        0,
        isDeleting ? typedText.length - 1 : typedText.length + 1
      );
      setTypedText(currentText);

      // Adjust speed dynamically
      if (isDeleting) {
        setSpeed(50);
      } else {
        setSpeed(120);
      }

      // If typing finished
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1200); // pause before deleting
      }

      // If deleting finished
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  return (
    <section className="mt-28 md:mt-50 text-center px-6 md:px-12 max-w-6xl mx-auto relative">
      {/* Left Side Book Images */}
      <div className="hidden lg:block absolute left-0 top-2/3 transform -translate-y-1/2 -translate-x-8 space-y-20">
        <div className="w-36 h-44 overflow-hidden rounded-xl shadow-lg animate-float-slow-1">
          <img
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
            alt="Book collection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-40 h-48 overflow-hidden rounded-xl shadow-lg animate-float-slow-2 ml-16">
          <img
            src={book}
            alt="Reading book"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side Book Images */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 space-y-30">
        <div className="w-36 h-44 overflow-hidden rounded-xl shadow-lg animate-float-slow-3 mr-6">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80"
            alt="Library books"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-40 h-48 overflow-hidden rounded-xl shadow-lg animate-float-slow-4">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
            alt="Book stack"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
            Connecting dots,
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text">
            {typedText}
            <span className="border-r-4 border-[#8C52FF] animate-pulse ml-1"></span>
          </span>
        </h1>

        <p className="mt-6 text-lg text-black">
          From timeless classics to fresh new releases — explore stories that
          inspire, entertain, and stay with you.
        </p>

        <div className="mt-10">
          <button className="bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-white px-10 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            Get Started
          </button>
          <p className="mt-3 text-sm text-gray-500">
            Start for free. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

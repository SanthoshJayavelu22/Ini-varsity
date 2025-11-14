import { motion } from "framer-motion";
import Con1 from "../assets/images/Rectangle 28.png";
import Con2 from "../assets/images/Rectangle 29.png";
import Con3 from "../assets/images/Rectangle 30.png";
import Con4 from "../assets/images/Rectangle 31.png";
import { useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    img: Con1,
    title: "Keynote Talks",
  },
  {
    img: Con2,
    title: "Research Paper Presentation",
  },
  {
    img: Con3,
    title: "Startup Exhibits",
  },
  {
    img: Con4,
    title: "Expert Panels",
  },
];

const ConferenceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative z-10 bg-white -mt-20 overflow-hidden mb-58">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-linear-to-r from-[#8C52FF] to-[#FF5757] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Text & Event Cards */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16 px-4 sm:px-6 md:px-12 py-16 md:py-24 relative z-10">
        {/* Top text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base font-semibold text-gray-700 tracking-wider mb-3"
          >
            JOIN US
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-light bg-linear-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight"
          >
            Annual Education Conference 2025
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-7xl mx-auto md:mx-0 text-justify"
          >
            Imagine a vibrant hub where passionate educators, curious students, insightful researchers, and visionary innovators converge all united by a shared commitment to reimagining the future of learning. This isn't just an event; it's a dynamic crucible for connection and innovation, offering an unparalleled platform for collaborative knowledge-sharing, genuine networking, and the exciting showcase of groundbreaking educational tools and ideas. From captivating keynote addresses to inspiring student-led showcases, you'll delve into inclusive, high-impact, and cutting-edge tech-forward strategies that are truly transforming education. Join us, and become part of a powerful movement that amplifies diverse voices, ignites meaningful change, and fortifies our educational communities for generations to come.
          </motion.p>
        </motion.div>

        {/* Event Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory -mx-4 sm:-mx-6 px-4 sm:px-6"
        >
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="shrink-0 w-40 sm:w-[200px] md:w-[280px] snap-center"
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                whileHover={{ 
                  scale: 1.02,
                  rotateZ: -1
                }}
              >
                <motion.img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  whileInView={{
                    scale: [1, 1.05, 1],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"
                  whileHover={{
                    background: "linear-gradient(45deg, rgba(140, 82, 255, 0.1), rgba(255, 87, 87, 0.1))"
                  }}
                />
                
                {/* Animated border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "rgba(140, 82, 255, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              
              <motion.p 
                className="mt-3 sm:mt-4 text-center text-base sm:text-lg font-semibold text-gray-800"
                whileHover={{ color: "#8C52FF" }}
                transition={{ duration: 0.2 }}
              >
                {event.title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

   
      </div>

    {/* 🎥 Video Section (max-w-7xl, NOT full width) */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
  className="w-full mt-10 md:mt-16 relative z-10"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

    {/* Video Container */}
    <motion.div
      className="relative w-full h-0 pb-[56.25%] bg-black rounded-2xl overflow-hidden"
      whileInView={{ 
        scale: [0.95, 1],
        transition: { duration: 1, ease: "easeOut" }
      }}
    >
    <iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&modestbranding=1&rel=0"
  className="absolute top-0 left-0 w-full h-full rounded-2xl"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
  title="Conference Highlights"
/>


      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0"
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </motion.div>

    {/* ▶ Play Button Over Video — opens YouTube in new tab  */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <motion.div
        onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-4 border-white text-white hover:scale-110 transition cursor-pointer bg-black/40 backdrop-blur-sm"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0 0 rgba(255, 255, 255, 0.3)",
            "0 0 0 10px rgba(255, 255, 255, 0)",
            "0 0 0 0 rgba(255, 255, 255, 0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>
    </motion.div>

    {/* Description below video */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center mt-6 px-4 sm:px-8"
    >
      <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Watch the highlights from our previous conference and see what makes our events unforgettable.
      </p>
    </motion.div>

  </div>
</motion.div>

    </section>
  );
};

export default ConferenceSection;
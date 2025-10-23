import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import book from "../assets/images/Rectangle 23.png";

const VideoCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Cards start from right (100%) and move to left (-35%)
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-75%"]);

  return (
    <section ref={ref} className="relative h-[200vh] bg-transparent z-0 mt-36">
      {/* Fixed container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#ededed]">
        <motion.div
          style={{ x }}
          className="flex gap-8 px-10"
        >
          {[
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
          ].map((src, i) => (
            <div
              key={i}
              className="w-[260px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white flex-shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Education ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoCards;
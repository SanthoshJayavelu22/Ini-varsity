import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/images/img-12.jpg";
import img2 from "../assets/images/img-10.jpg";
import img3 from "../assets/images/img-5.jpg";
import img4 from "../assets/images/img-11.jpg";

const VideoCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });


  const x = useTransform(scrollYProgress, [0, 1], ["-75%", "90%"]);

  const images = [img1, img2, img3, img4];

  return (
    <section ref={ref} className="relative h-[200vh] bg-transparent z-0 mt-36">
      {/* Sticky container stays in viewport while scroll animates */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#ededed]">
        <motion.div style={{ x }} className="flex gap-8 px-10">
          {images.map((src, i) => (
            <div
              key={i}
              className="w-[260px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white shrink-0 hover:scale-105 transition-transform duration-300"
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

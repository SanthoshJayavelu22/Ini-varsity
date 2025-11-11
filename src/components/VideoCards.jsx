import { motion } from "framer-motion";
import img1 from "../assets/images/img-12.jpg";
import img2 from "../assets/images/img-10.jpg";
import img3 from "../assets/images/img-5.jpg";
import img4 from "../assets/images/img-11.jpg";

const VideoCards = () => {
  const images = [img1, img2, img3, img4];

  
  const loopImages = [...images, ...images, ...images];

  return (
    <section className="relative h-screen bg-amber-200 flex items-center justify-center overflow-hidden mt-15 md:mt-36 mb-30 pb-20">
      <motion.div
        className="flex gap-8"
        animate={{
          x: ["0%", "-33.333%"], 
        }}
        transition={{
          ease: "linear",
          duration: 30, 
          repeat: Infinity,
        }}
      >
        {loopImages.map((src, i) => (
          <motion.div
            key={i}
            className="w-[260px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white shrink-0"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <img
              src={src}
              alt={`Education ${(i % images.length) + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VideoCards;
import { motion } from "framer-motion";

const PartnerLogos = () => {
  // Partner logos
  const partnerLogos = [
    "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&h=80&fit=crop&crop=center", // MIT
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=80&fit=crop&crop=center", // Stanford
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=80&fit=crop&crop=center", // Harvard
    "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=200&h=80&fit=crop&crop=center", // Google
    "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=200&h=80&fit=crop&crop=center", // Microsoft
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&crop=center", // Apple
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&crop=center", // NASA
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=80&fit=crop&crop=center", // Tech Company
  ];

  // Duplicate array for infinite scroll
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <div className="mt-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-15">
        <h3 className="text-4xl md:text-5xl leading-normal text-center font-light text-transparent bg-clip-text bg-gradient-to-t from-[#8C52FF] to-[#FF5757] mb-6">
          In Collaboration With
        </h3>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative py-8 overflow-hidden">
            <motion.div
              className="flex items-center space-x-16 px-8"
              animate={{ x: [0, -2400] }}
              transition={{
                x: {
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center"
                  whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                >
                  <img
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerLogos;

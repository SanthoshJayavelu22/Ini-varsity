import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Can I still use Ini in my classroom if I use my own curriculum materials?",
    answer:
      "Yes! You can use Ini alongside your existing curriculum materials. Our tools are flexible and can easily integrate into your existing lesson plans.",
  },
  {
    id: 2,
    question: "Can I still use Ini in my classroom if I use my own curriculum materials?",
    answer:
      "Yes! You can use Ini alongside your existing curriculum materials. Our tools are flexible and can easily integrate into your existing lesson plans.",
  },
  {
    id: 3,
    question: "Can I still use Ini in my classroom if I use my own curriculum materials?",
    answer:
      "Yes! You can use Ini alongside your existing curriculum materials. Our tools are flexible and can easily integrate into your existing lesson plans.",
  },
  {
    id: 4,
    question: "Can I still use Ini in my classroom if I use my own curriculum materials?",
    answer:
      "Yes! You can use Ini alongside your existing curriculum materials. Our tools are flexible and can easily integrate into your existing lesson plans.",
  },
  {
    id: 5,
    question: "Can I still use Ini in my classroom if I use my own curriculum materials?",
    answer:
      "Yes! You can use Ini alongside your existing curriculum materials. Our tools are flexible and can easily integrate into your existing lesson plans.",
  },
];

export default function TestimonialsFAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -3,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const faqVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  // Floating dots animation
  const floatingDots = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  return (
    <motion.section 
      className="relative z-20 bg-white py-20 rounded-b-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-[100px]">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-full opacity-15"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Testimonials */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.p 
            className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2"
            variants={itemVariants}
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight"
            variants={itemVariants}
          >
            Attendee reviews
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-[#A8B7FF] text-white p-8 rounded-2xl relative overflow-hidden group"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Subtle hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] opacity-0 group-hover:opacity-10"
                transition={{ duration: 0.3 }}
              />
              <p className="text-lg font-medium mb-6 leading-relaxed relative z-10">
                "With my Ini website I landed 4 different interviews and was able
                to showcase my creativity and expertise."
              </p>
              <div className="relative z-10">
                <p className="font-semibold text-white">Jessica Hiney</p>
                <p className="text-sm text-white/80">
                  MFA Media Design Full Sail University
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-[#266C50] text-white p-8 rounded-2xl relative overflow-hidden group"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Subtle hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] opacity-0 group-hover:opacity-10"
                transition={{ duration: 0.3 }}
              />
              <p className="text-lg font-medium mb-6 leading-relaxed relative z-10">
                "With my Ini website I landed 4 different interviews and was able
                to showcase my creativity and expertise."
              </p>
              <div className="relative z-10">
                <p className="font-semibold text-white">Jessica Hiney</p>
                <p className="text-sm text-white/80">
                  MFA Media Design Full Sail University
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight"
            variants={itemVariants}
          >
            FAQ
          </motion.h2>

          <motion.div 
            className="divide-y divide-gray-300 border-t border-b border-gray-300"
            variants={containerVariants}
          >
            {faqs.map((faq) => (
              <motion.div 
                key={faq.id} 
                className="py-4 group"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex justify-between items-center w-full text-left hover:text-[#8C52FF] transition-colors duration-200"
                  whileHover="hover"
                >
                  <span className="text-gray-900 text-base font-normal group-hover:text-[#8C52FF] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <motion.div
                    variants={iconVariants}
                    className="flex-shrink-0 ml-4"
                  >
                    {openFAQ === faq.id ? (
                      <Minus className="text-gray-600 group-hover:text-[#8C52FF] transition-colors duration-200" size={20} />
                    ) : (
                      <Plus className="text-gray-600 group-hover:text-[#8C52FF] transition-colors duration-200" size={20} />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={faqVariants}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated connection lines */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] rounded-full"
            animate={{
              width: ["80px", "140px", "80px"],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Smooth fade-out gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none rounded-b-[100px]" />
    </motion.section>
  );
}
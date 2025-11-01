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

  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
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
            className="text-4xl font-semibold mb-10 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Attendee reviews
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-[#A8B7FF] text-white p-8 rounded-2xl"
              variants={cardVariants}
              whileHover="hover"
            >
              <p className="text-lg font-medium mb-6 leading-relaxed">
                “With my Ini website I landed 4 different interviews and was able
                to showcase my creativity and expertise.”
              </p>
              <div>
                <p className="font-semibold text-whitek">Jessica Hiney</p>
                <p className="text-sm text-white/80">
                  MFA Media Design Full Sail University
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-[#266C50] text-white p-8 rounded-2xl"
              variants={cardVariants}
              whileHover="hover"
            >
              <p className="text-lg font-medium mb-6 leading-relaxed">
                “With my Ini website I landed 4 different interviews and was able
                to showcase my creativity and expertise.”
              </p>
              <div>
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
            className="text-3xl font-semibold mb-8 bg-gradient-to-r from-[#8C52FF] to-[#FF5757] bg-clip-text text-transparent"
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
                className="py-4"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex justify-between items-center w-full text-left"
                  whileHover="hover"
                >
                  <span className="text-gray-900 text-base font-normal">
                    {faq.question}
                  </span>
                  <motion.div
                    variants={iconVariants}
                  >
                    {openFAQ === faq.id ? (
                      <Minus className="text-gray-600" size={20} />
                    ) : (
                      <Plus className="text-gray-600" size={20} />
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
      </div>
    </section>
  );
}
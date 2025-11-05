import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "I built a Ini website for my mom: here's how it went",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "7 things you can do in 30 seconds using Ini's AI image tools",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "How to handle a creative block like a pro designer",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Tips for making your online portfolio stand out",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
];

const EditorsPick = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="px-6 md:px-16 py-12 bg-white relative">
      <motion.div 
        className="max-w-7xl m-auto px-6 md:px-12 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-light bg-linear-to-t from-[#8C52FF] to-[#FF5757] text-transparent bg-clip-text mb-6 leading-tight"
          variants={itemVariants}
        >
          Editor's Pick
        </motion.h2>

        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-72 md:w-66 cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="mt-3 text-sm md:text-base text-gray-800">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EditorsPick;
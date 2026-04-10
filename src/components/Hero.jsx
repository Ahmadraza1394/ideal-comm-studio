"use client";

import { motion } from "framer-motion";
import { staggerContainer, wordFadeUp, fadeUpVariant } from "@/lib/motion";

export default function Hero() {
  const headline = "Making it Come True, For You";
  const words = headline.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Glow Blobs - Responsive positioning and sizing */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-brand-pink/10 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-brand-yellow/10 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Side Text - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 rotate-90 origin-left">
        <p className="font-sans uppercase text-xs tracking-widest text-brand-pink">
          Ideal Comm Studio
        </p>
      </div>

      <div className="hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-right">
        <p className="font-sans uppercase text-xs tracking-widest text-brand-pink">
          Est. 2024
        </p>
      </div>

      {/* Main Content - Fully responsive */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl w-full">
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-4 sm:mb-6 leading-tight"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordFadeUp}
              className="inline-block mr-2 sm:mr-3 lg:mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="font-sans text-gray-500 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed"
        >
          We transform ideas into stunning visual narratives that captivate and
          inspire.
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto bg-brand-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all text-sm sm:text-base cursor-pointer"
          >
            View Our Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-black hover:text-white transition-all text-sm sm:text-base cursor-pointer"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Mobile-only side text at bottom */}
        <div className="md:hidden mt-12 flex justify-between items-center text-xs uppercase tracking-widest text-gray-400">
          <p>Ideal Comm Studio</p>
          <p>Est. 2024</p>
        </div>
      </div>
    </section>
  );
}

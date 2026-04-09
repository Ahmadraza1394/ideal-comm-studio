"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      number: "01",
      title: "START",
      description:
        "Initial consultation and discovery phase to align on goals, vision, and project scope.",
    },
    {
      number: "02",
      title: "REVIEW",
      description:
        "Deep dive into research, competitive analysis, and strategic positioning frameworks.",
    },
    {
      number: "03",
      title: "BUILD",
      description:
        "The creative execution where concepts turn into refined visual and verbal assets.",
    },
    {
      number: "04",
      title: "LAUNCH",
      description:
        "Final delivery, implementation support, and ensuring a seamless brand rollout.",
    },
  ];

  const cubicBezier = [0.25, 0.1, 0.25, 1];

  const staggerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: cubicBezier,
      },
    }),
  };

  return (
    <section
      id="process"
      ref={ref}
      className="w-full bg-black"
      style={{ paddingTop: "160px", paddingBottom: "160px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Same as before */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-16">
          <div className="mb-8 lg:mb-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: cubicBezier }}
              className="font-sans text-xs uppercase tracking-wider mb-4"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#444444",
              }}
            >
              PROCESS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: cubicBezier }}
              className="font-serif italic text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ lineHeight: "1.1" }}
            >
              How it works<span className="text-brand-pink">.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: cubicBezier }}
            className="font-sans text-left lg:text-right"
            style={{
              fontSize: "13px",
              color: "#555555",
              maxWidth: "220px",
            }}
          >
            A focused process designed to move fast without losing direction.
          </motion.div>
        </div>

        {/* Horizontal Rule */}
        <div
          className="w-full h-px bg-gray-800 mb-12 lg:mb-16"
          style={{ backgroundColor: "#222222" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: cubicBezier }}
            className="h-full bg-brand-pink"
          />
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={staggerVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-black border border-gray-800 p-6 lg:p-8 hover:border-brand-pink/30 transition-all duration-300"
              style={{ borderColor: "#222222" }}
            >
              {/* Step Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.2,
                  ease: cubicBezier,
                }}
                className="font-serif italic text-brand-pink text-4xl sm:text-5xl lg:text-6xl mb-4 lg:mb-6"
                style={{ lineHeight: "1" }}
              >
                {step.number}
              </motion.div>

              {/* Step Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.6,
                  delay: 1.0 + index * 0.2,
                  ease: cubicBezier,
                }}
                className="font-sans font-bold text-white text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-6"
                style={{ letterSpacing: "1px" }}
              >
                {step.title}
              </motion.h3>

              {/* Step Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.2,
                  ease: cubicBezier,
                }}
                className="font-sans text-gray-400 text-sm sm:text-base"
                style={{
                  lineHeight: "1.6",
                  color: "#888888",
                }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Timeline Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 2.0, ease: cubicBezier }}
          className="text-center mt-12 lg:mt-16"
        >
          <p
            className="font-sans text-xs sm:text-sm"
            style={{
              color: "#333333",
            }}
          >
            Average project timeline: 3 – 6 weeks
          </p>
        </motion.div>
      </div>
    </section>
  );
}

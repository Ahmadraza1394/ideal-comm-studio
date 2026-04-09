"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      number: "01",
      title: "Brand Identity",
      description:
        "Creating cohesive visual systems that define your brand essence and communicate your values effectively.",
    },
    {
      number: "02",
      title: "Digital Design",
      description:
        "Crafting beautiful interfaces and digital experiences that engage users and drive meaningful interactions.",
    },
    {
      number: "03",
      title: "Creative Direction",
      description:
        "Guiding your vision from initial concept to compelling execution with strategic creative leadership.",
    },
    {
      number: "04",
      title: "Content Strategy",
      description:
        "Building narratives and content frameworks that resonate with your audience and amplify your message.",
    },
  ];

  const staggerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="w-full bg-white"
      style={{ paddingTop: "140px", paddingBottom: "140px" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-wider text-gray-400 mb-4"
            style={{ fontSize: "11px", letterSpacing: "4px", color: "#999999" }}
          >
            WHAT WE DO
          </motion.p>

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif italic text-black text-left"
              style={{ fontSize: "56px", lineHeight: "1.1" }}
            >
              Built around your{" "}
              <em className="relative inline-block">
                work
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-0 left-0 h-px bg-black"
                />
              </em>
              .
            </motion.h2>
          </div>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={staggerVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative bg-white border-r border-gray-200 last:border-r-0"
              style={{
                padding: "40px",
                borderColor: "#E8E8E8",
              }}
            >
              {/* Top hover border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-brand-pink transition-all duration-300" />

              {/* Service Number */}
              <div
                className="font-serif italic text-gray-400 mb-6"
                style={{ fontSize: "11px", color: "#999999" }}
              >
                {service.number}
              </div>

              {/* Service Title */}
              <h3
                className="font-serif italic text-black mb-6"
                style={{ fontSize: "26px", lineHeight: "1.2" }}
              >
                {service.title}
              </h3>

              {/* Divider */}
              <hr
                className="border-0 h-px bg-gray-200 mb-6"
                style={{ backgroundColor: "#E8E8E8" }}
              />

              {/* Description */}
              <p
                className="font-sans text-gray-600 mb-6"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#555555",
                }}
              >
                {service.description}
              </p>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-brand-pink font-sans"
                style={{ fontSize: "16px" }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

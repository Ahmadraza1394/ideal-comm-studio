"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      name: "VTMSC",
      category: "Brand + Web",
      url: "https://vtmsc.vercel.app/",
    },
    {
      name: "Voice of Gospel",
      category: "Digital + Strategy",
      url: "https://voice-of-gospel.vercel.app/",
    },
    {
      name: "Alogre Nadye",
      category: "Identity + Web",
      url: "https://alogrenadye.com/",
    },
  ];

  const staggerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="work"
      className="w-full"
      style={{
        backgroundColor: "#F5F5F5",
        paddingTop: "140px",
        paddingBottom: "140px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs uppercase tracking-wider text-gray-400 mb-4"
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#999999",
              }}
            >
              SELECT WORK
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif italic text-black text-left"
              style={{ fontSize: "56px", lineHeight: "1.1" }}
            >
              Work that lands.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-gray-400 text-right"
            style={{ fontSize: "13px", color: "#999999" }}
          >
            03 / Projects
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "24px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={staggerVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => window.open(project.url, "_blank")}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div
                className="relative overflow-hidden border border-transparent group-hover:border-brand-pink transition-all duration-300"
                style={{ aspectRatio: "4/3" }}
              >
                {/* Background Image */}
                <motion.div
                  className="w-full h-full"
                  style={{ backgroundColor: "#111111" }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Category Tag */}
                  <div
                    className="absolute top-0 left-0 font-sans text-white uppercase"
                    style={{
                      fontSize: "10px",
                      padding: "16px",
                      letterSpacing: "1px",
                    }}
                  >
                    {project.category}
                  </div>
                </motion.div>

                {/* Pink Overlay */}
                <div className="absolute inset-0 bg-brand-pink opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
              </div>

              {/* Card Info Row */}
              <div className="flex justify-between items-center mt-6">
                {/* Project Name with Clip Animation */}
                <div className="overflow-hidden">
                  <motion.h3
                    initial={{ y: "100%" }}
                    animate={{ y: hoveredCard === index ? 0 : "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-serif italic text-black"
                    style={{ fontSize: "22px", lineHeight: "1.2" }}
                  >
                    {project.name}
                  </motion.h3>

                  {/* Default state - visible when not hovered */}
                  <motion.h3
                    initial={{ y: 0 }}
                    animate={{ y: hoveredCard === index ? "-100%" : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-serif italic text-black absolute"
                    style={{ fontSize: "22px", lineHeight: "1.2" }}
                  >
                    {project.name}
                  </motion.h3>
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-brand-pink"
                  style={{ fontSize: "18px" }}
                >
                  ↗
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        {/* <div className="flex justify-center mt-20">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group font-sans font-medium text-black relative"
            style={{ fontSize: "13px" }}
          >
            View all projects →
            <motion.span
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 h-px bg-black"
            />
          </motion.a>
        </div> */}
      </div>
    </section>
  );
}

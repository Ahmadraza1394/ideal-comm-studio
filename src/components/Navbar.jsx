"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative backdrop-blur-md bg-white/10 border-b border-white/20 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 flex items-center justify-between">
          <div>
            <img src="/logo.png" alt="IDEAL COMM" className="h-12 sm:h-16" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#work"
              className="text-sm hover:text-brand-pink transition-colors"
            >
              Work
            </a>
            <a
              href="#process"
              className="text-sm hover:text-brand-pink transition-colors"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-brand-pink transition-colors"
            >
              Contact
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-brand-pink text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all cursor-pointer"
            >
              Start a Project
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black block transition-all"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-black block transition-all"
            />
            <motion.span
              animate={
                isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="w-6 h-0.5 bg-black block transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden"
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={toggleMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="flex flex-col p-6 pt-20">
                <a
                  href="#work"
                  onClick={toggleMenu}
                  className="text-lg py-4 border-b border-gray-200 hover:text-brand-pink transition-colors"
                >
                  Work
                </a>
                <a
                  href="#process"
                  onClick={toggleMenu}
                  className="text-lg py-4 border-b border-gray-200 hover:text-brand-pink transition-colors"
                >
                  Process
                </a>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="text-lg py-4 border-b border-gray-200 hover:text-brand-pink transition-colors"
                >
                  Contact
                </a>

                <button
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                  className="bg-brand-pink text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all mt-8 cursor-pointer"
                >
                  Start a Project
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

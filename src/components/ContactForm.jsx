"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer, fadeUpVariant } from "@/lib/motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectStatus: "",
    goals: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          projectStatus: "",
          goals: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
          >
            <h2 className="font-serif italic text-5xl md:text-6xl mb-6">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="font-sans text-gray-600 text-lg leading-relaxed mb-8">
              Ready to elevate your brand? Get in touch and let&apos;s discuss
              how we can bring your vision to life.
            </p>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                <span>Response within 24-48 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                <span>Free consultation included</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                <span>Confirmation email sent to you</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
              >
                ✅ Message sent successfully! Check your email for confirmation.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg"
              >
                ❌ Failed to send message. Please try again.
              </motion.div>
            )}

            <motion.div variants={fadeUpVariant}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
                className="w-full border border-black px-4 py-3 focus:border-brand-pink outline-none transition-colors font-sans"
              />
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="w-full border border-black px-4 py-3 focus:border-brand-pink outline-none transition-colors font-sans"
              />
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (Optional)"
                className="w-full border border-black px-4 py-3 focus:border-brand-pink outline-none transition-colors font-sans"
              />
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <select
                name="projectStatus"
                value={formData.projectStatus}
                onChange={handleChange}
                required
                className="w-full border border-black px-4 py-3 focus:border-brand-pink outline-none transition-colors font-sans bg-white"
              >
                <option value="">
                  Where are you currently with your project/s? *
                </option>
                <option value="just-starting">
                  Just starting - I have an idea
                </option>
                <option value="planning-phase">In planning phase</option>
                <option value="have-some-work">
                  Have some work done already
                </option>
                <option value="ready-to-launch">Ready to launch</option>
                <option value="existing-business">
                  Existing business looking to rebrand
                </option>
              </select>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <select
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                required
                className="w-full border border-black px-4 py-3 focus:border-brand-pink outline-none transition-colors font-sans bg-white"
              >
                <option value="">
                  What are you trying to achieve working with us? *
                </option>
                <option value="brand-identity">
                  Create a complete brand identity
                </option>
                <option value="website-design">
                  Design and develop a website
                </option>
                <option value="marketing-materials">
                  Create marketing materials
                </option>
                <option value="rebrand-existing">
                  Rebrand existing business
                </option>
                <option value="digital-presence">
                  Build strong digital presence
                </option>
                <option value="creative-direction">
                  Get creative direction and strategy
                </option>
                <option value="full-package">
                  Complete brand and digital package
                </option>
              </select>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project *"
                rows="6"
                required
                className="w-full border border-black px-4 py-3 focus:border-brand-pink outline-none transition-colors font-sans resize-none"
              />
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-pink text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-sans flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>→</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

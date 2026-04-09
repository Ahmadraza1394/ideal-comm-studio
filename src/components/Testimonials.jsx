'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/motion';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <div className="font-serif text-8xl md:text-9xl text-brand-pink mb-8 leading-none">
            &ldquo;
          </div>
          
          <blockquote className="font-serif italic text-2xl md:text-3xl mb-8 leading-relaxed">
            Working with this team transformed our brand. Their creative vision and attention to detail exceeded all expectations.
          </blockquote>
          
          <div className="font-sans text-sm text-gray-600">
            <p className="font-semibold">Sarah Johnson</p>
            <p>CEO, Luxe Fashion</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

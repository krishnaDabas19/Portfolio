import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MessageSquare } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';
import TerminalHeading from './TerminalHeading';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 border-t border-[#E5E2DC] relative">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <TerminalHeading
            tag="// testimonials"
            title="Collaborations & Notes"
            subtitle="Feedback and peer notes from team projects and mentorship."
          />

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] hover:border-blue-600 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <Quote className="w-7 h-7 text-blue-600/40 mb-4" />
                  <p className="text-sm font-body text-[#3F3F3F] leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E2DC] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-[#1A1A1A]">
                      {item.name}
                    </h4>
                    <p className="text-xs font-mono text-blue-600">
                      {item.role}
                    </p>
                  </div>
                  <MessageSquare className="w-4 h-4 text-blue-600/60" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

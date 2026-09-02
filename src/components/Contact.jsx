import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Toast from './Toast';
import TerminalHeading from './TerminalHeading';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setToastOpen(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    console.log('📬 Contact Form Submission Payload:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-[#E5E2DC] relative">
      {/* Toast popup */}
      <Toast
        message="Email copied to clipboard!"
        isVisible={toastOpen}
        onClose={() => setToastOpen(false)}
      />

      <div className="editorial-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <TerminalHeading
            tag="// contact"
            title="Get in Touch"
            subtitle="Open to internships, project collaborations, and intelligent full-stack builds."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column: Direct Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] space-y-5 shadow-xs">
                {/* Email Item with Copy */}
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C2542D] block mb-1">
                    // Direct Email
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-[#1A1A1A] hover:text-[#C2542D] break-all transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-md border border-[#E5E2DC] bg-[#FAFAF8] text-[#8A8A8A] hover:text-[#C2542D] hover:border-[#C2542D]/50 transition-colors shrink-0 cursor-pointer shadow-xs"
                      title="Copy Email Address"
                      aria-label="Copy Email Address"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-[#C2542D]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="pt-4 border-t border-[#E5E2DC]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C2542D] block mb-1">
                    // Phone Number
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-mono text-[#1A1A1A] hover:text-[#C2542D] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                {/* Location Item */}
                <div className="pt-4 border-t border-[#E5E2DC]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C2542D] block mb-1">
                    // Current Location
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#8A8A8A]">
                    {personalInfo.location}, India
                  </span>
                </div>
              </div>

              {/* Social Channels Card */}
              <div className="p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8A8A] block mb-3">
                  // Social Profiles
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs font-mono text-[#8A8A8A] hover:text-[#C2542D] transition-colors group"
                  >
                    <GithubIcon className="w-4 h-4 text-[#C2542D] group-hover:scale-110 transition-transform" />
                    <span>github.com/dabaskrishna</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs font-mono text-[#8A8A8A] hover:text-[#C2542D] transition-colors group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#C2542D] group-hover:scale-110 transition-transform" />
                    <span>linkedin.com/in/krishna-dabas</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Working Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] space-y-4 shadow-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-1.5"
                    >
                      Name <span className="text-[#C2542D]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E2DC] bg-[#FAFAF8] text-xs sm:text-sm text-[#1A1A1A] placeholder-[#8A8A8A] focus:border-[#C2542D] focus:outline-none transition-all shadow-xs"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-1.5"
                    >
                      Email <span className="text-[#C2542D]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E2DC] bg-[#FAFAF8] text-xs sm:text-sm text-[#1A1A1A] placeholder-[#8A8A8A] focus:border-[#C2542D] focus:outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Collaboration / Quick hello"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E2DC] bg-[#FAFAF8] text-xs sm:text-sm text-[#1A1A1A] placeholder-[#8A8A8A] focus:border-[#C2542D] focus:outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-1.5"
                  >
                    Message <span className="text-[#C2542D]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or role..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E2DC] bg-[#FAFAF8] text-xs sm:text-sm text-[#1A1A1A] placeholder-[#8A8A8A] focus:border-[#C2542D] focus:outline-none transition-all resize-y shadow-xs"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-rose-500 font-mono">
                    {errorMessage}
                  </p>
                )}

                {/* Submit Action Button */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C2542D] hover:bg-[#A8421F] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-md shadow-[#C2542D]/20 disabled:opacity-50 cursor-pointer active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  {submitted && (
                    <span className="text-xs font-mono text-[#C2542D] flex items-center gap-1.5 font-medium">
                      <Check className="w-4 h-4 text-[#C2542D]" />
                      Message dispatched!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

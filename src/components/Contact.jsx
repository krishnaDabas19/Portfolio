import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Toast from './Toast';

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
    console.log('📬 Contact Form Submission:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Toast
        message="Email copied to clipboard!"
        isVisible={toastOpen}
        onClose={() => setToastOpen(false)}
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Section Header with Monospace Numbered Index */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#C2542D] font-bold uppercase tracking-widest">
            // 05. initiate
          </span>
          <div className="h-[1px] flex-1 bg-[#E5E2DC]" />
          <span className="font-mono text-xs text-[#8A8A8A]">
            DIRECT REACH
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1A1A1A] tracking-tight">
          05 — Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Direct Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs space-y-4">
              {/* Email with Quick Copy */}
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
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#C2542D]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="pt-3 border-t border-[#E5E2DC]">
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

              {/* Location */}
              <div className="pt-3 border-t border-[#E5E2DC]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#C2542D] block mb-1">
                  // Location
                </span>
                <span className="text-xs sm:text-sm font-mono text-[#8A8A8A]">
                  {personalInfo.location}, India
                </span>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="p-6 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8A8A] block">
                // Professional Profiles
              </span>
              <div className="space-y-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A] hover:text-[#C2542D] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#C2542D]" />
                  <span>github.com/dabaskrishna</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A] hover:text-[#C2542D] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#C2542D]" />
                  <span>linkedin.com/in/krishna-dabas</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-7 rounded-2xl border border-[#E5E2DC] bg-[#FFFFFF] shadow-xs space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-1"
                  >
                    Name <span className="text-[#C2542D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E2DC] bg-[#FAFAF8] text-xs font-sans text-[#1A1A1A] placeholder-[#8A8A8A] focus:border-[#C2542D] focus:outline-none transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-1"
                  >
                    Email <span className="text-[#C2542D]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@domain.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E2DC] bg-[#FAFAF8] text-xs font-sans text-[#1A1A1A] placeholder-[#8A8A8A] focus:border-[#C2542D] focus:outline-none transition-all shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E2DC] bg-[#FAFAF8] text-xs font-sans text-[#1A1A1A] placeholder-[#8A8A8A] focus:border-[#C2542D] focus:outline-none transition-all shadow-xs"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-1"
                >
                  Message <span className="text-[#C2542D]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your project or role..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E2DC] bg-[#FAFAF8] text-xs font-sans text-[#1A1A1A] placeholder-[#8A8A8A] focus:border-[#C2542D] focus:outline-none transition-all resize-y shadow-xs"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-rose-500 font-mono">
                  {errorMessage}
                </p>
              )}

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C2542D] hover:bg-[#A8421F] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-md shadow-[#C2542D]/20 disabled:opacity-50 cursor-pointer active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>

                {submitted && (
                  <span className="text-xs font-mono text-[#C2542D] flex items-center gap-1.5 font-semibold">
                    <Check className="w-4 h-4 text-[#C2542D]" />
                    Message sent!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

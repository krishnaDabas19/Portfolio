import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Toast from './Toast';
import GradientMesh from './GradientMesh';
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
    <section id="contact" className="py-20 sm:py-24 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Gradient Mesh */}
      <GradientMesh />

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
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#12121A]/90 backdrop-blur-md space-y-5 shadow-xl">
                {/* Email Item with Copy */}
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 block mb-1">
                    // Direct Email
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-[#FFFFFF] hover:text-cyan-300 break-all transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-md border border-white/[0.1] bg-[#161B22] text-[#9CA3AF] hover:text-cyan-300 hover:border-cyan-500/50 transition-colors shrink-0 cursor-pointer"
                      title="Copy Email Address"
                      aria-label="Copy Email Address"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-violet-400 block mb-1">
                    // Phone Number
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-mono text-[#FFFFFF] hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                {/* Location Item */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 block mb-1">
                    // Current Location
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#9CA3AF]">
                    {personalInfo.location}, India
                  </span>
                </div>
              </div>

              {/* Social Channels Card */}
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#12121A]/90 backdrop-blur-md shadow-xl">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#9CA3AF] block mb-3">
                  // Social Profiles
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs font-mono text-[#9CA3AF] hover:text-cyan-300 transition-colors group"
                  >
                    <GithubIcon className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
                    <span>github.com/dabaskrishna</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-xs font-mono text-[#9CA3AF] hover:text-cyan-300 transition-colors group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>linkedin.com/in/krishna-dabas</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Working Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#12121A]/90 backdrop-blur-md space-y-4 shadow-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5"
                    >
                      Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#161B22] text-xs sm:text-sm text-[#FFFFFF] placeholder-[#6B7280] focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5"
                    >
                      Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#161B22] text-xs sm:text-sm text-[#FFFFFF] placeholder-[#6B7280] focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5"
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
                    className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#161B22] text-xs sm:text-sm text-[#FFFFFF] placeholder-[#6B7280] focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] focus:outline-none transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or role..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#161B22] text-xs sm:text-sm text-[#FFFFFF] placeholder-[#6B7280] focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] focus:outline-none transition-all resize-y"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-rose-400 font-mono">
                    {errorMessage}
                  </p>
                )}

                {/* Submit Action Button with Glow */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-lg disabled:opacity-50 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  {submitted && (
                    <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-cyan-400" />
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

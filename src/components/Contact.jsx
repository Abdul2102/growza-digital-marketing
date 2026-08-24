import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4 leading-tight">
            Let's Talk About Your Business
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Ready to grow your local customer base? Reach out via WhatsApp or submit a quick note, and we'll reply shortly.
          </p>
        </div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto text-left">
          
          {/* Left Column: WhatsApp Card & Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* WhatsApp Block */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col items-start shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20">
                <MessageSquare size={24} className="fill-current" />
              </div>
              <h3 className="text-xl font-extrabold text-primary mb-2">WhatsApp Us Directly</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Skip the forms. Click below to start an instant WhatsApp chat with our account planning team.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm transition-colors cursor-pointer shadow-md shadow-emerald-600/10 focus-visible:outline-2"
              >
                Chat on WhatsApp →
              </button>
            </div>

            {/* General details list */}
            <div className="bg-bg-light border border-border-subtle rounded-2xl p-6 md:p-8 space-y-5">
              <h4 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-2">Office Details</h4>
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-muted block">Call or Whatsapp</span>
                  <span className="text-sm font-extrabold text-primary block mt-0.5">{contactInfo.phone}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-muted block">Email Address</span>
                  <span className="text-sm font-extrabold text-primary block mt-0.5">{contactInfo.email}</span>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-muted block">Service Area</span>
                  <span className="text-sm font-extrabold text-primary block mt-0.5">{contactInfo.serviceArea}</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-muted block">Business Hours</span>
                  <span className="text-sm font-extrabold text-primary block mt-0.5">{contactInfo.hours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-bg-light border border-border-subtle rounded-2xl p-6 md:p-10 shadow-premium h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-primary mb-2">Send Us a Message</h3>
                    <p className="text-xs text-muted mb-6">
                      Fill out the fields below, and we'll reply within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="text-xs font-bold text-muted-dark block mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          placeholder="e.g. Ramesh Patel"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-primary focus:outline-none transition-colors ${
                            errors.name ? 'border-red-500 bg-red-50/20' : 'border-border-subtle focus:border-accent'
                          }`}
                        />
                        {errors.name && (
                          <span className="text-xs font-semibold text-red-500 mt-1 block">{errors.name}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="contact-phone" className="text-xs font-bold text-muted-dark block mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-primary focus:outline-none transition-colors ${
                            errors.phone ? 'border-red-500 bg-red-50/20' : 'border-border-subtle focus:border-accent'
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-xs font-semibold text-red-500 mt-1 block">{errors.phone}</span>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" className="text-xs font-bold text-muted-dark block mb-1.5">
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          placeholder="Tell us a little bit about your business and goals..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-primary focus:outline-none transition-colors resize-none ${
                            errors.message ? 'border-red-500 bg-red-50/20' : 'border-border-subtle focus:border-accent'
                          }`}
                        />
                        {errors.message && (
                          <span className="text-xs font-semibold text-red-500 mt-1 block">{errors.message}</span>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-extrabold text-sm transition-colors shadow-md shadow-accent/20 cursor-pointer disabled:opacity-75 focus-visible:outline-2 flex items-center justify-center gap-2 group"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-accent-green mb-6 shadow-sm">
                      <CheckCircle2 size={36} />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-primary mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-sm">
                      Thank you, <span className="font-bold text-primary">{formData.name}</span>. Your message has been sent successfully.
                    </p>
                    <p className="text-xs text-muted mt-4 leading-relaxed bg-white border border-border-subtle p-4 rounded-xl max-w-xs mx-auto">
                      Our account managers will reach out to you via call or WhatsApp at <span className="font-semibold text-primary">{formData.phone}</span> within 24 hours.
                    </p>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', phone: '', message: '' });
                      }}
                      className="mt-8 text-xs font-bold text-accent hover:underline cursor-pointer"
                    >
                      ← Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

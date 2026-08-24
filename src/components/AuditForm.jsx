import React, { useState } from 'react';
import { Check, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuditForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    link: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checklistItems = [
    { title: "Ads Checkup", desc: "Identify wasted budget and poor local targeting locations." },
    { title: "Website & Landing Page", desc: "Find why visitors leave without calling or booking." },
    { title: "Google Business Profile", desc: "Audit search keywords and local map pack rankings." },
    { title: "Lead Follow-up System", desc: "Verify response speed and missed inquiry leaks." },
    { title: "Customer Conversion Gaps", desc: "Spot checkout friction or booking failures." }
  ];

  const benefits = [
    "Identify wasted ad spend",
    "Find conversion leaks",
    "Discover missed local search opportunities",
    "Get practical, jargon-free next steps"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.businessName.trim()) newErrors.businessName = "Please enter your business name";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your WhatsApp/Phone number";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
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
    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="audit" className="py-20 md:py-28 bg-white border-b border-border-subtle relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-accent/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Checklist & Benefits (6 cols) */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full self-start mb-4">
              Free Assessment
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
              Find Out What's Costing You Customers — Free
            </h2>
            <p className="text-muted text-base md:text-lg mb-8 leading-relaxed">
              Takes 2 minutes to request. We'll manually review your local ads, website, and Google pack presence and send you a custom PDF summary — absolutely no obligation.
            </p>

            {/* Checklist */}
            <h3 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-4">What we audit:</h3>
            <ul className="space-y-4 mb-8">
              {checklistItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-accent-green shrink-0 mt-0.5">
                    <Check size={12} className="stroke-[3px]" />
                  </div>
                  <div>
                    <span className="font-extrabold text-sm text-primary block leading-tight">{item.title}</span>
                    <span className="text-xs text-muted block mt-0.5">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Key benefits list */}
            <h3 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-4">Why request this?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span className="text-sm font-semibold text-muted-dark">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form Container (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-bg-light border border-border-subtle rounded-2xl p-6 md:p-10 shadow-premium relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-primary mb-2 text-left">
                      Request Free Audit
                    </h3>
                    <p className="text-xs text-muted text-left mb-6">
                      Enter details below. We review every request manually.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name field */}
                      <div className="text-left">
                        <label htmlFor="audit-name" className="text-xs font-bold text-muted-dark block mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="audit-name"
                          type="text"
                          name="name"
                          placeholder="e.g. Amit Sharma"
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

                      {/* Business Name field */}
                      <div className="text-left">
                        <label htmlFor="audit-business" className="text-xs font-bold text-muted-dark block mb-1.5">
                          Business Name *
                        </label>
                        <input
                          id="audit-business"
                          type="text"
                          name="businessName"
                          placeholder="e.g. Apex Dental Clinic"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-primary focus:outline-none transition-colors ${
                            errors.businessName ? 'border-red-500 bg-red-50/20' : 'border-border-subtle focus:border-accent'
                          }`}
                        />
                        {errors.businessName && (
                          <span className="text-xs font-semibold text-red-500 mt-1 block">{errors.businessName}</span>
                        )}
                      </div>

                      {/* WhatsApp / Phone field */}
                      <div className="text-left">
                        <label htmlFor="audit-phone" className="text-xs font-bold text-muted-dark block mb-1.5">
                          WhatsApp / Phone *
                        </label>
                        <input
                          id="audit-phone"
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

                      {/* Website link (optional) */}
                      <div className="text-left">
                        <label htmlFor="audit-link" className="text-xs font-bold text-muted-dark block mb-1.5">
                          Website or Social Link <span className="text-muted-light font-normal">(Optional)</span>
                        </label>
                        <input
                          id="audit-link"
                          type="text"
                          name="link"
                          placeholder="e.g. www.mybusiness.com"
                          value={formData.link}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-sm text-primary focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-extrabold text-sm transition-colors shadow-md shadow-accent/20 cursor-pointer disabled:opacity-75 focus-visible:outline-2 flex items-center justify-center"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        ) : (
                          "Get My Free Audit"
                        )}
                      </button>
                    </form>

                    <div className="flex items-center gap-1.5 justify-center mt-4 text-[10px] text-muted font-semibold">
                      <ShieldCheck size={13} className="text-accent" />
                      <span>No spam. No sales calls unless you explicitly ask for one.</span>
                    </div>
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
                      Audit Request Received!
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-sm">
                      Thank you, <span className="font-bold text-primary">{formData.name}</span>. We've queued the audit for <span className="font-bold text-primary">{formData.businessName}</span>.
                    </p>
                    <p className="text-xs text-muted mt-4 leading-relaxed bg-white border border-border-subtle p-4 rounded-xl max-w-xs mx-auto">
                      We will review your Google listing and current ads, then email you a summary report within 24 hours.
                    </p>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', businessName: '', phone: '', link: '' });
                      }}
                      className="mt-8 text-xs font-bold text-accent hover:underline cursor-pointer"
                    >
                      ← Submit another request
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

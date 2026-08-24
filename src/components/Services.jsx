import React, { useState } from 'react';
import { Megaphone, Users, MapPin, Layout, MessageSquareCode, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/content';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Megaphone':
        return <Megaphone size={20} className="text-accent" />;
      case 'Users':
        return <Users size={20} className="text-accent" />;
      case 'MapPin':
        return <MapPin size={20} className="text-accent" />;
      case 'Layout':
        return <Layout size={20} className="text-accent" />;
      case 'MessageSquareCode':
        return <MessageSquareCode size={20} className="text-accent" />;
      default:
        return <Megaphone size={20} className="text-accent" />;
    }
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-bg-light border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Column: Text Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent bg-accent-light px-3.5 py-1.5 rounded-full inline-block mb-4">
              Our Capabilities
            </span>
            <h2 className="text-clamp-section font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
              Measurable local marketing. <br />
              No fluff.
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-md">
              We skip the generic agencies' bloated retainers. We focus purely on the digital systems that find, convince, and book customers for local services and shops.
            </p>
            
            {/* Call to Action card */}
            <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm relative overflow-hidden hidden lg:block">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
              <h3 className="font-bold text-slate-800 mb-2">Need a custom strategy?</h3>
              <p className="text-xs text-muted leading-relaxed mb-4">
                We'll identify where you are losing leads to competitors nearby in 24 hours.
              </p>
              <a
                href="#audit"
                onClick={(e) => handleScrollTo(e, '#audit')}
                className="inline-flex items-center text-xs font-bold text-accent hover:text-accent-hover transition-colors group"
              >
                Claim Free Marketing Audit
                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Numbered List stack */}
          <div className="lg:col-span-7 flex flex-col w-full text-left">
            <div className="border-t border-border-subtle divide-y divide-border-subtle">
              {servicesData.map((service, index) => {
                const isHovered = hoveredIndex === index;
                const paddedNumber = String(index + 1).padStart(2, '0');
                
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveModal(service)}
                    className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group transition-all duration-300 relative px-2 hover:px-4 rounded-lg hover:bg-white hover:shadow-premium border-b border-transparent"
                  >
                    
                    {/* Number and Title Info */}
                    <div className="flex items-start gap-6 md:gap-8 flex-1">
                      {/* Elegant large numbers */}
                      <span className="text-2xl md:text-3xl font-black text-muted-light group-hover:text-accent transition-colors duration-300">
                        {paddedNumber}
                      </span>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                            {service.title}
                          </h3>
                          {/* Mini icon on hover */}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 bg-accent-light rounded-md border border-accent/10">
                            {getIcon(service.icon)}
                          </span>
                        </div>
                        <p className="text-accent text-xs font-bold mt-1 tracking-wide leading-tight">
                          {service.benefit}
                        </p>
                        <p className="text-muted text-sm leading-relaxed mt-2.5 max-w-xl group-hover:text-slate-700 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Arrow */}
                    <div className="flex items-center gap-2 self-end md:self-center">
                      <span className="text-xs font-extrabold text-muted-dark group-hover:text-accent transition-colors duration-300 md:opacity-0 group-hover:opacity-100">
                        Details
                      </span>
                      <div className="p-2 rounded-full border border-border-subtle bg-white text-muted-dark group-hover:text-white group-hover:bg-accent group-hover:border-accent transition-all duration-300 transform group-hover:translate-x-1 shadow-sm">
                        <ArrowRight size={16} />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
            
            {/* Mobile Quote CTA trigger */}
            <div className="mt-8 p-6 bg-white rounded-2xl border border-border-subtle shadow-sm relative overflow-hidden block lg:hidden">
              <h3 className="font-bold text-slate-800 mb-2">Need a custom strategy?</h3>
              <p className="text-xs text-muted leading-relaxed mb-4">
                We'll identify where you are losing leads to competitors nearby in 24 hours.
              </p>
              <a
                href="#audit"
                onClick={(e) => handleScrollTo(e, '#audit')}
                className="inline-flex items-center text-xs font-bold text-accent hover:text-accent-hover transition-colors group"
              >
                Claim Free Marketing Audit
                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Details Modal (Overlay) */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-primary"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-border-subtle z-10 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-1.5 text-muted hover:text-primary hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              <div className="inline-flex p-3 rounded-xl bg-accent-light border border-accent/10 mb-6">
                {getIcon(activeModal.icon)}
              </div>

              <h3 className="text-2xl font-bold text-primary mb-2">
                {activeModal.title}
              </h3>
              <p className="text-sm font-semibold text-accent mb-4">
                {activeModal.benefit}
              </p>
              
              <hr className="border-border-subtle my-4" />
              
              <h4 className="text-sm font-bold text-primary mb-2">What we handle:</h4>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {activeModal.description}
                {" "}Our expert team sets up complete reporting, handles copywriting, creative assets, and schedules optimization reviews every fortnight to ensure you get consistent leads and traffic.
              </p>

              <div className="flex gap-4">
                <a
                  href="#audit"
                  onClick={(e) => {
                    setActiveModal(null);
                    handleScrollTo(e, '#audit');
                  }}
                  className="flex-1 text-center py-3 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent-hover transition-colors"
                >
                  Request Free Audit
                </a>
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-3 rounded-xl bg-bg-light border border-border-subtle text-primary font-bold text-sm hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

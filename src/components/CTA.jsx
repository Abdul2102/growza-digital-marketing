import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
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
    <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden z-10">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative text-center">
        <div className="max-w-3xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent bg-accent/15 px-3.5 py-1.5 rounded-full inline-block mb-6 border border-accent/10">
              Get Started
            </span>
            
            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white">
              Ready to Turn Traffic Into Growth?
            </h2>
            
            {/* Supporting text */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's identify where your digital marketing is losing opportunities and build a strategy around measurable results. Takes less than 2 minutes.
            </p>

            {/* Primary CTA button */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="#audit"
                onClick={(e) => handleScrollTo(e, '#audit')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-extrabold text-base transition-all duration-200 shadow-lg shadow-accent/25 group focus-visible:outline-2"
              >
                Get Your Free Audit
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mini Trust Row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs text-slate-400 font-semibold">
              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-accent-green" />
                No obligations
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-accent-green" />
                Manually audited by experts
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-accent-green" />
                Report sent within 24 hours
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}

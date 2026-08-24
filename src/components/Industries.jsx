import React from 'react';
import { ShoppingBag, Utensils, Stethoscope, Sparkles, Home, Wrench, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { industriesData } from '../data/content';

export default function Industries() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag size={18} className="text-accent" />;
      case 'Utensils':
        return <Utensils size={18} className="text-accent" />;
      case 'Stethoscope':
        return <Stethoscope size={18} className="text-accent" />;
      case 'Sparkles':
        return <Sparkles size={18} className="text-accent" />;
      case 'Home':
        return <Home size={18} className="text-accent" />;
      case 'Wrench':
        return <Wrench size={18} className="text-accent" />;
      default:
        return <Wrench size={18} className="text-accent" />;
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
    <section id="industries" className="py-20 md:py-28 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full">
            Who We Serve
          </span>
          <h2 className="text-clamp-section font-extrabold text-primary tracking-tight mt-4 leading-tight">
            We Understand Businesses Like Yours
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Every business type has different customers. We adapt our strategies to fit the exact buyer habits of your industry.
          </p>
        </div>

        {/* 6 Grid Lists (2 columns on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {industriesData.map((industry, index) => {
            const paddedIndex = String(index + 1).padStart(2, '0');
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-5 rounded-xl border border-border-subtle bg-bg-light/40 hover:bg-white hover:border-accent/20 hover:shadow-premium transition-all duration-300 text-left flex items-start gap-4"
              >
                {/* Index Number */}
                <span className="text-xs font-black text-muted-light group-hover:text-accent transition-colors duration-300 mt-1">
                  {paddedIndex}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-accent group-hover:scale-105 transition-transform duration-300">
                      {getIcon(industry.icon)}
                    </span>
                    <h3 className="font-bold text-slate-800 text-base group-hover:text-accent transition-colors duration-300">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mt-2 group-hover:text-slate-600 transition-colors duration-300">
                    {industry.benefit}
                  </p>
                  
                  {/* Small Action link */}
                  <a
                    href="#audit"
                    onClick={(e) => handleScrollTo(e, '#audit')}
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-light group-hover:text-accent transition-colors duration-300 mt-4 group/btn"
                  >
                    View audit roadmap
                    <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

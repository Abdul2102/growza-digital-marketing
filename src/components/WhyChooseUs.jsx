import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { whyChooseUsData } from '../data/content';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-white border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto text-left">
          
          {/* Left Column: Large Statement */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent bg-accent-light px-3.5 py-1.5 rounded-full self-start mb-4">
              Our Philosophy
            </span>
            <h2 className="text-clamp-section font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
              Marketing built around measurable outcomes.
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6">
              Most digital agencies sell fixed packages. We focus on finding your specific business growth blocks and solving them first.
            </p>
            <div className="mt-2">
              <a
                href="#audit"
                className="inline-flex items-center text-sm font-extrabold text-accent hover:text-accent-hover transition-colors group"
              >
                Learn how we identify marketing gaps
                <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Supporting Points Stack (No Card Containers) */}
          <div className="lg:col-span-7 flex flex-col w-full divide-y divide-border-subtle/80">
            {whyChooseUsData.map((card, index) => {
              const paddedNumber = String(index + 1).padStart(2, '0');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="py-6 first:pt-0 last:pb-0 flex items-start gap-6 md:gap-8 group"
                >
                  {/* Padded elegant number */}
                  <span className="text-xl md:text-2xl font-black text-accent-green group-hover:text-accent transition-colors duration-300">
                    {paddedNumber}
                  </span>

                  {/* Text details */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-accent transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-xl group-hover:text-slate-600 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Audit -> Plan -> Results Timeline Indicator (Refined spacing) */}
        <div className="rounded-2xl bg-bg-light border border-border-subtle p-6 md:p-8 max-w-4xl mx-auto mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <div className="text-left max-w-xs">
              <span className="text-xs font-bold text-accent uppercase tracking-wide">Methodology</span>
              <h4 className="text-base font-extrabold text-primary mt-1">Our Proven Loop</h4>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-10 w-full md:w-auto">
              <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-border-subtle shadow-sm w-full sm:w-auto justify-center">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs">1</span>
                <span className="font-extrabold text-sm text-primary tracking-wide">AUDIT</span>
              </div>
              
              <ChevronRight size={18} className="text-muted-light hidden sm:block rotate-90 sm:rotate-0" />
              
              <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-border-subtle shadow-sm w-full sm:w-auto justify-center">
                <span className="w-6 h-6 rounded-full bg-accent-green text-white flex items-center justify-center font-bold text-xs">2</span>
                <span className="font-extrabold text-sm text-primary tracking-wide">PLAN</span>
              </div>
              
              <ChevronRight size={18} className="text-muted-light hidden sm:block rotate-90 sm:rotate-0" />
              
              <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-border-subtle shadow-sm w-full sm:w-auto justify-center">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs">3</span>
                <span className="font-extrabold text-sm text-primary tracking-wide">RESULTS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

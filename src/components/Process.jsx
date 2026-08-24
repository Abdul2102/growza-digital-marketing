import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-bg-light border-b border-border-subtle relative overflow-hidden">
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full">
            Our Method
          </span>
          <h2 className="text-clamp-section font-extrabold text-primary tracking-tight mt-4 leading-tight">
            How We Turn Your Marketing Around
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            From finding issues to optimization, here is what working with us looks like. Simple, plain-English, and performance-first.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-13 left-[10%] right-[10%] h-0.5 bg-border-subtle z-0" />
          
          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6.75 w-0.5 bg-border-subtle z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {processSteps.map((step, index) => {
              // Custom delay for sequential animations
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-row lg:flex-col items-start gap-6 lg:gap-0 lg:text-center text-left group"
                >
                  
                  {/* Step Bubble Indicator */}
                  <div className="shrink-0 lg:mx-auto mb-6 relative">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-border-subtle flex items-center justify-center font-extrabold text-sm text-muted group-hover:border-accent group-hover:text-accent transition-all duration-300 shadow-sm relative z-10">
                      {step.number}
                    </div>
                    {/* Ring glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-accent/10 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 z-0" />
                  </div>

                  {/* Step Text Info */}
                  <div className="flex-1 lg:mt-2">
                    {/* Step Phase Label */}
                    <span className="text-[10px] font-extrabold text-accent uppercase tracking-widest bg-accent-light px-2.5 py-1 rounded-md mb-2.5 inline-block lg:mx-auto">
                      {step.phase}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-muted text-sm md:text-base leading-relaxed max-w-xs lg:mx-auto">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Visual AUDIT -> PLAN -> EXECUTE -> RESULTS Flow text indicator */}
        <div className="hidden lg:flex items-center justify-center gap-2 mt-16 text-[10px] font-extrabold tracking-widest text-muted-light">
          <span>AUDIT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border-subtle mx-2" />
          <span>PLAN</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border-subtle mx-2" />
          <span>EXECUTE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-border-subtle mx-2" />
          <span className="text-accent-green">RESULTS</span>
        </div>

      </div>
    </section>
  );
}

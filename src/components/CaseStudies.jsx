import React from 'react';
import { ArrowRight, HelpCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { caseStudiesData } from '../data/content';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-bg-light border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full">
            Detailed Results
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4 leading-tight">
            From Struggling to Fully Booked
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Deep-dives into how we identified leaks in our clients' sales funnels and structured systems to fix them.
          </p>
        </div>

        {/* Case Studies Container (Alternating stack or large cards) */}
        <div className="flex flex-col gap-12 lg:gap-16 max-w-5xl mx-auto">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-border-subtle rounded-2xl p-8 md:p-12 shadow-premium hover:shadow-premium-hover hover:border-accent/20 transition-all duration-300 relative overflow-hidden text-left"
            >
              {/* Category Indicator Tag */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3.5 py-1.5 rounded-md">
                  {study.category}
                </span>
                <span className="text-xs font-bold text-muted-light">
                  Case Study {index + 1}
                </span>
              </div>

              {/* Study Title */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-8 tracking-tight">
                {study.title}
              </h3>

              {/* Problem, What We Did, Result Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-y border-border-subtle py-8">
                {/* Problem */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                    <HelpCircle size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-2">The Problem</h4>
                    <p className="text-muted text-sm leading-relaxed">{study.problem}</p>
                  </div>
                </div>

                {/* What We Did */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-accent-light border border-accent/15 flex items-center justify-center text-accent">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-2">What We Did</h4>
                    <p className="text-muted text-sm leading-relaxed">{study.whatWeDid}</p>
                  </div>
                </div>

                {/* The Result */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-accent-green">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-2">The Result</h4>
                    <p className="text-primary font-bold text-sm leading-relaxed">{study.result}</p>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-extrabold text-primary hover:text-accent inline-flex items-center gap-1 group/btn cursor-pointer transition-colors">
                  {study.cta}
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-accent-green font-bold bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                  ✓ Demonstrated Result
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

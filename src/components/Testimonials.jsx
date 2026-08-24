import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full">
            Client Reviews
          </span>
          <h2 className="text-clamp-section font-extrabold text-primary tracking-tight mt-4 leading-tight">
            What Business Owners Say
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Read experience logs from local business owners who partnered with us to fix their online customer acquisition.
          </p>
        </div>

        {/* Clean Editorial Testimonials Stack (Grid with minimal borders, no heavy cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto divide-y md:divide-y-0 md:divide-x divide-border-subtle/80">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between text-left pt-8 md:pt-0 md:px-8 first:pt-0 first:pl-0 last:pr-0"
            >
              <div>
                {/* Clean Star Ratings */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Large Testimonial Quote */}
                <blockquote className="text-slate-800 text-base md:text-lg leading-relaxed font-medium mb-6 relative">
                  <span className="text-2xl text-accent font-black leading-none absolute -left-4 -top-2">“</span>
                  {item.text}
                  <span className="text-2xl text-accent font-black leading-none">”</span>
                </blockquote>
              </div>

              {/* Client Profile details */}
              <div className="flex items-center gap-3.5 mt-auto pt-4">
                {/* Initials Avatar */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center font-extrabold text-xs border border-accent/15">
                  {item.avatar}
                </div>
                
                <div>
                  <h4 className="font-extrabold text-sm text-slate-800 leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted leading-tight mt-0.5">
                    {item.role}
                  </p>
                  <span className="text-[10px] font-extrabold text-accent-green uppercase tracking-wide mt-1.5 block">
                    {item.outcome}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Notice Disclaimer */}
        <div className="text-center mt-16">
          <p className="text-xs text-muted-light">
            * All testimonials above represent simulated outcome logs demonstrating layout placement.
          </p>
        </div>

      </div>
    </section>
  );
}

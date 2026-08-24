import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../data/content';

// Import local assets
import imgDental from '../assets/portfolio_dental_website.png';
import imgBistro from '../assets/portfolio_bistro_ads.png';
import imgPlumbing from '../assets/portfolio_plumbing_seo.png';
import imgSpa from '../assets/portfolio_spa_landing.png';

export default function Portfolio() {
  const images = {
    portfolio_dental_website: imgDental,
    portfolio_bistro_ads: imgBistro,
    portfolio_plumbing_seo: imgPlumbing,
    portfolio_spa_landing: imgSpa,
  };

  // Specific stat numbers and labels to display in the editorial layout
  const stats = [
    { number: "+64%", label: "Appointment Bookings" },
    { number: "-42%", label: "Cost Per Reservation" },
    { number: "Top 3", label: "Google Maps Rankings" },
    { number: "8.7%", label: "Page Conversion Rate" }
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full">
            Case Studies
          </span>
          <h2 className="text-clamp-section font-extrabold text-primary tracking-tight mt-4 leading-tight">
            Real Work, Measurable Growth
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            A look at how we audit local platforms, rewrite messaging, and optimize local ads to generate revenue.
          </p>
        </div>

        {/* Alternating Editorial Case-Studies */}
        <div className="flex flex-col gap-24 md:gap-36 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => {
            const paddedIndex = String(index + 1).padStart(2, '0');
            const isEven = index % 2 === 0;
            const stat = stats[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center text-left"
              >
                {/* Left/Right Text Column (5 cols) */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  {/* Padded Number & Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-black text-accent-green">
                      {paddedIndex}
                    </span>
                    <span className="text-xs font-extrabold text-muted uppercase tracking-widest">
                      {item.type}
                    </span>
                  </div>

                  {/* Client Business Name */}
                  <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                    {item.business}
                  </span>
                  
                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Campaign Outcome Statistics block (Visually dominating metric callout) */}
                  <div className="my-6 p-5 rounded-2xl bg-bg-light border border-border-subtle/80 flex items-center gap-5">
                    <span className="text-4xl md:text-5xl font-black text-accent-green tracking-tight leading-none">
                      {stat.number}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                        Campaign Outcome
                      </span>
                      <span className="text-xs font-bold text-slate-800 leading-tight mt-1">
                        {stat.label}
                      </span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Outcome disclaimer row */}
                  <div className="flex items-center gap-2 mb-6 text-xs text-muted-dark">
                    <CheckCircle2 size={14} className="text-accent-green" />
                    <span>{item.result}</span>
                  </div>

                  {/* Read Case Study link */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-accent cursor-pointer transition-colors group/btn">
                      View Case Study
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Left/Right Large Graphic Image Column (7 cols) */}
                <div className={`lg:col-span-7 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="overflow-hidden rounded-2xl border border-border-subtle bg-bg-light shadow-premium group hover:shadow-premium-hover transition-all duration-300 relative aspect-video">
                    {/* Zoomable Image */}
                    <img
                      src={images[item.imageName]}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    {/* Visual Overlay glow */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

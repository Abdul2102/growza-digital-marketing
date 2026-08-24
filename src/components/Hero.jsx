import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Clock, CheckCircle2, MessageSquare, AlertCircle, Search, BarChart3, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
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

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.25 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.4 + i * 0.08 }
    })
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] lg:min-h-[92vh] pt-24 pb-12 flex items-center overflow-hidden bg-white"
    >
      {/* Background Radial Glow & Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,15,25,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,15,25,0.01)_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 right-0 w-137.5 h-137.5 bg-accent/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-87.5 h-87.5 bg-accent-green/3 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Content & CTAs (col-span-5 on desktop for ~45% ratio) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants} className="mb-5 self-start">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-light text-accent text-[10px] font-extrabold uppercase tracking-widest border border-accent/10">
                <Sparkles size={11} className="text-accent animate-pulse" />
                Built for Local Business Growth
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-clamp-hero font-extrabold tracking-tight text-primary leading-[1.08] mb-6"
            >
              Turn Digital Attention <br />
              Into <span className="text-accent">Real Business Growth.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-muted leading-relaxed max-w-140 mb-6"
            >
              We help ambitious businesses generate qualified leads, increase visibility and turn digital marketing into measurable growth. We audit your ads, website and local presence to customize a strategy for your business.
            </motion.p>

            {/* Metadata Tags */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-8 text-[10px] font-bold text-accent uppercase tracking-widest"
            >
              <span>Performance Marketing</span>
              <span className="text-muted-light">•</span>
              <span>SEO</span>
              <span className="text-muted-light">•</span>
              <span>Paid Ads</span>
              <span className="text-muted-light">•</span>
              <span>Web Development</span>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <a
                href="#audit"
                onClick={(e) => handleScrollTo(e, '#audit')}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-extrabold text-sm transition-all duration-200 shadow-md shadow-accent/20 group focus-visible:outline-2"
              >
                Get a Free Marketing Audit
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#portfolio"
                onClick={(e) => handleScrollTo(e, '#portfolio')}
                className="inline-flex items-center justify-center px-4 py-4 text-muted-dark hover:text-accent font-extrabold text-sm transition-colors group focus-visible:outline-2"
              >
                View Our Work
                <ArrowRight size={14} className="ml-1.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </motion.div>

            {/* Trust Indicators Row */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-6 border-t border-border-subtle"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-muted-dark">
                <CheckCircle2 size={14} className="text-accent" />
                50+ Businesses
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-muted-dark">
                <ShieldCheck size={14} className="text-accent-green" />
                No Long-Term Lock-In
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-muted-dark">
                <Clock size={14} className="text-accent" />
                24hr Response
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Layered Interactive Marketing Visual (col-span-7 for ~55% ratio) */}
          <div className="lg:col-span-7 relative w-full flex justify-center">
            {/* Custom Glow Backdrop */}
            <div className="absolute inset-x-8 -inset-y-4 rounded-3xl bg-linear-to-tr from-accent to-accent-green opacity-5 blur-2xl -z-10" />

            {/* Main Dashboard Canvas Wrapper */}
            <motion.div
              variants={dashboardVariants}
              initial="hidden"
              animate="visible"
              className="w-full max-w-145 bg-[#0A0F1D] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-premium flex flex-col gap-6 text-left relative overflow-hidden"
            >
              {/* Inner Decorative Grid Line */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.06),transparent_60%)] pointer-events-none" />

              {/* Dashboard Header Bar */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-800 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest ml-2">
                    Growzo Core Intelligence
                  </span>
                </div>
                <span className="text-[10px] font-extrabold text-accent bg-accent/15 px-2.5 py-1 rounded-md border border-accent/10 uppercase tracking-wider">
                  Active Audit Mode
                </span>
              </div>

              {/* Top Row Grid: Marketing Health Card (col 1) + Qualified Leads Card (col 2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                
                {/* 1. Marketing Health Card */}
                <motion.div
                  custom={0}
                  variants={cardVariants}
                  className="bg-white p-4.5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
                >
                  {/* Radial Progress Circle SVG */}
                  <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="24" cy="24" r="20" className="stroke-slate-100 stroke-[4px] fill-transparent" />
                      <circle 
                        cx="24" 
                        cy="24" 
                        r="20" 
                        className="stroke-accent stroke-[4.5px] fill-transparent"
                        strokeDasharray="125.6"
                        strokeDashoffset="27.6" // 78% progress (125.6 * (1 - 0.78))
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-xs font-black text-slate-800">78</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Marketing Health</h3>
                    <p className="text-lg font-black text-slate-800 mt-0.5">78/100</p>
                    <span className="inline-flex items-center text-[10px] font-extrabold text-red-500 mt-1">
                      <AlertCircle size={10} className="mr-0.5" />
                      3 Gaps Found
                    </span>
                  </div>
                </motion.div>

                {/* 2. Qualified Leads Card */}
                <motion.div
                  custom={1}
                  variants={cardVariants}
                  className="bg-white p-4.5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Qualified Leads</h3>
                      <p className="text-lg font-black text-slate-800 mt-0.5">+38%</p>
                    </div>
                    <span className="text-[10px] font-extrabold text-accent-green bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 flex items-center">
                      <TrendingUp size={10} className="mr-0.5" />
                      Scale
                    </span>
                  </div>
                  {/* Small upward Sparkline SVG */}
                  <div className="h-6 mt-3 w-full">
                    <svg className="w-full h-full" viewBox="0 0 100 30">
                      <defs>
                        <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0 25 Q15 18, 30 22 T60 12 T90 5 L100 2" 
                        fill="none" 
                        stroke="#2563EB" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                      />
                      <path 
                        d="M0 25 Q15 18, 30 22 T60 12 T90 5 L100 2 L100 30 L0 30 Z" 
                        fill="url(#sparklineGrad)" 
                      />
                    </svg>
                  </div>
                </motion.div>

              </div>

              {/* Middle Row Grid: Ad Spend (col 1) + Google Visibility & Enquiries (col 2 stacked) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 relative z-10">
                
                {/* 3. Ad Performance Card (col-span-7) */}
                <motion.div
                  custom={2}
                  variants={cardVariants}
                  className="sm:col-span-7 bg-white p-4.5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Ad Performance</span>
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                  
                  <div className="flex justify-between items-baseline mb-3">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase block font-bold">Monthly Spend</span>
                      <span className="text-xl font-black text-slate-800">₹42,500</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 uppercase block font-bold">Cost Per Lead</span>
                      <span className="text-sm font-extrabold text-accent-green flex items-center justify-end">
                        ↓ 18%
                      </span>
                    </div>
                  </div>

                  <div className="text-[10px] font-bold text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between">
                    <span>Targeting Zip Codes: 4/4 Correct</span>
                    <span className="text-accent-green">Optimized</span>
                  </div>
                </motion.div>

                {/* Stacked Side Metrics (col-span-5) */}
                <div className="sm:col-span-5 flex flex-col gap-4">
                  {/* 4. Google Visibility Card */}
                  <motion.div
                    custom={3}
                    variants={cardVariants}
                    className="bg-white p-4.5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div>
                      <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Map Visibility</h3>
                      <p className="text-base font-black text-slate-800 mt-0.5">+27%</p>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-accent-light border border-accent/10 flex items-center justify-center text-accent">
                      <Search size={14} className="stroke-[2.5px]" />
                    </div>
                  </motion.div>

                  {/* 5. Customer Enquiry Card */}
                  <motion.div
                    custom={4}
                    variants={cardVariants}
                    className="bg-white p-4.5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div>
                      <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">New Enquiries</h3>
                      <p className="text-base font-black text-slate-800 mt-0.5">126</p>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-accent-green">
                      <MessageSquare size={14} className="fill-current" />
                    </div>
                  </motion.div>
                </div>

              </div>

              {/* Bottom Section: Strategic Growth Graph (col-span-12) */}
              <motion.div
                custom={5}
                variants={cardVariants}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col text-left hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative z-10"
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Strategic Growth Model</h3>
                    <p className="text-[10px] text-muted font-bold mt-0.5">Performance tracking pre-audit versus fixes implementation</p>
                  </div>
                  <span className="text-[10px] font-extrabold text-accent bg-accent-light px-2.5 py-1 rounded-md">
                    Audit Mapping
                  </span>
                </div>

                {/* Growth Curve Chart SVG */}
                <div className="h-28 w-full mt-2">
                  <svg className="w-full h-full" viewBox="0 0 320 100">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Gridlines */}
                    <line x1="10" y1="80" x2="310" y2="80" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3" />
                    <line x1="10" y1="50" x2="310" y2="50" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3" />
                    <line x1="10" y1="20" x2="310" y2="20" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3" />
                    
                    {/* Vertical marker grid points */}
                    <line x1="10" y1="10" x2="10" y2="90" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="160" y1="10" x2="160" y2="90" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="310" y1="10" x2="310" y2="90" stroke="#F1F5F9" strokeWidth="1" />

                    {/* Area fill */}
                    <path 
                      d="M10 82 C80 82, 120 75, 160 52 C200 30, 260 15, 310 12 L310 90 L10 90 Z" 
                      fill="url(#chartGrad)" 
                    />

                    {/* Plot Line */}
                    <path 
                      d="M10 82 C80 82, 120 75, 160 52 C200 30, 260 15, 310 12" 
                      fill="none" 
                      stroke="url(#lineGrad)" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                    />
                    
                    {/* Redefine line color gradient */}
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="50%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>

                    {/* Plot Points circles */}
                    <circle cx="10" cy="82" r="4" className="fill-red-500 stroke-white stroke-[2px]" />
                    <circle cx="160" cy="52" r="4" className="fill-accent stroke-white stroke-[2px]" />
                    <circle cx="310" cy="12" r="4" className="fill-accent-green stroke-white stroke-[2px]" />

                    {/* Curve Labels */}
                    <text x="15" y="86" className="text-[8px] font-black fill-red-500">Before Audit</text>
                    <text x="135" y="44" className="text-[8px] font-black fill-accent">Fixes Applied</text>
                    <text x="260" y="24" className="text-[8px] font-black fill-accent-green">Local Growth</text>
                  </svg>
                </div>
              </motion.div>

              {/* Central flow label: Find -> Fix -> Grow */}
              <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 shadow-md">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Find</span>
                <ArrowRight size={8} className="text-slate-500" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Fix</span>
                <ArrowRight size={8} className="text-slate-500" />
                <span className="text-[9px] font-black text-accent-green uppercase tracking-widest">Grow</span>
              </div>
            </motion.div>

            {/* Optional Floating Visual Label 1 (Overlapping dashboard container) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -right-2 bg-white border border-border-subtle px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 z-20 hover:scale-105 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-[10px] font-extrabold text-primary">3 Gaps Identified</span>
            </motion.div>

            {/* Optional Floating Visual Label 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-16 -left-6 bg-white border border-border-subtle px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-2 z-20 hover:scale-105 transition-transform"
            >
              <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[8px]">✓</div>
              <span className="text-[10px] font-extrabold text-primary">Opportunity Found</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

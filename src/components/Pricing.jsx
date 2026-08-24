import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, BadgeAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [budget, setBudget] = useState(25000);

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

  // Determine channels included based on budget slider
  const getRecommendedScope = (val) => {
    if (val < 20000) {
      return {
        tier: "Local Starter",
        channels: ["Local SEO / Google Maps", "Weekly Social Media Updates", "Basic WhatsApp Follow-up"],
        focusName: "Local Search Optimization"
      };
    } else if (val < 40000) {
      return {
        tier: "Growth System",
        channels: ["Google Local Search Ads", "Local SEO Maps Domination", "Bi-Weekly Social Posting", "WhatsApp Automated Replies"],
        focusName: "Lead Generation & Maps Optimization"
      };
    } else {
      return {
        tier: "Premium Dominator",
        channels: ["Full Google & Meta Ads", "Comprehensive SEO Audit", "High-Converting Landing Pages", "Social Media Posting (3x/week)", "WhatsApp Lead Tracking System"],
        focusName: "Omnichannel Local Dominance"
      };
    }
  };

  const scope = getRecommendedScope(budget);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-bg-light border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4 leading-tight">
            Every Business Is Different — So Is Your Plan
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            No rigid plans. We structure pricing to fit your precise customer acquisition targets and local marketing capacity.
          </p>
        </div>

        {/* Premium Single Card Wrapper */}
        <div className="max-w-4xl mx-auto bg-white border border-border-subtle rounded-2xl shadow-premium overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Interactive Estimator (7 cols) */}
          <div className="p-8 md:p-12 md:col-span-7 flex flex-col text-left justify-between border-b md:border-b-0 md:border-r border-border-subtle bg-white">
            <div>
              <span className="text-[10px] font-extrabold text-accent uppercase tracking-widest bg-accent-light px-2.5 py-1 rounded-md mb-4 inline-block">
                No Fixed Packages. No Hidden Fees.
              </span>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Estimate Your Starter Budget
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Move the slider to estimate your monthly budget. We build a plan around your goals after understanding your business in the free audit.
              </p>

              {/* Slider Input */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-muted-dark">Monthly Ad & Management Budget</span>
                  <span className="text-xs font-bold text-accent">Adjust Slider</span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="80000"
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent border border-border-subtle"
                />
                <div className="flex justify-between text-[10px] font-bold text-muted-light mt-2">
                  <span>₹15,000/mo</span>
                  <span>₹45,000/mo</span>
                  <span>₹80,000/mo</span>
                </div>
              </div>
            </div>

            {/* Quote details */}
            <div className="bg-bg-light border border-border-subtle p-5 rounded-xl">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-extrabold text-muted">Estimated Starting Plan:</span>
                <span className="text-2xl font-extrabold text-primary">₹{budget.toLocaleString('en-IN')}<span className="text-xs font-semibold text-muted">/mo</span></span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                *Most local business plans start from ₹14,999/month. Get an exact, firm quote for your business in 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Suggested Channels & CTA (5 cols) */}
          <div className="p-8 md:p-12 md:col-span-5 bg-bg-light flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
                Suggested Setup:
              </span>
              <h4 className="text-lg font-bold text-primary mb-6 flex items-center justify-between">
                <span>{scope.tier}</span>
                <span className="text-xs font-bold text-accent bg-accent-light px-2.5 py-1 rounded-md">{scope.focusName}</span>
              </h4>

              {/* Channels List */}
              <ul className="space-y-4 mb-8">
                {scope.channels.map((channel, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={16} className="text-accent-green shrink-0 mt-0.5" />
                    <span className="text-primary font-semibold leading-tight">{channel}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a
                href="#audit"
                onClick={(e) => handleScrollTo(e, '#audit')}
                className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-accent text-white font-bold text-base hover:bg-accent-hover transition-colors shadow-md shadow-accent/20 group focus-visible:outline-2"
              >
                Get My Custom Quote
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-[10px] text-muted-light block text-center mt-3 font-semibold">
                No long-term commitments. Cancel anytime.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

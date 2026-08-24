import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-bg-light border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full">
            Help Center
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4 leading-tight">
            Common Questions
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Everything you need to know about how we operate, pricing transparency, and how the audit process works.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-border-subtle rounded-2xl overflow-hidden transition-colors duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-primary hover:text-accent transition-colors focus:outline-none focus-visible:bg-gray-50 focus-visible:outline-2 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg leading-snug pr-4">
                    {item.question}
                  </span>
                  
                  {/* Plus / Minus Indicator Icon */}
                  <span className={`shrink-0 p-1.5 rounded-lg border border-border-subtle bg-bg-light text-muted transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-accent border-accent/20 bg-accent-light' : ''
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {/* Collapsible Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-muted text-sm md:text-base leading-relaxed border-t border-border-subtle/50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

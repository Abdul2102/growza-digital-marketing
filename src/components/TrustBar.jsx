import React from 'react';
import { Users, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Users className="text-accent" size={20} />,
      text: "Trusted by 50+ local businesses",
      description: "Proven results across industries"
    },
    {
      icon: <Shield className="text-accent-green" size={20} />,
      text: "No long-term lock-in",
      description: "Simple month-to-month contracts"
    },
    {
      icon: <Clock className="text-accent" size={20} />,
      text: "Response within 24 hrs",
      description: "Quick updates and direct WhatsApp support"
    }
  ];

  return (
    <section className="border-y border-border-subtle bg-bg-light py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center gap-4 py-2 md:py-0 md:px-6"
            >
              <div className="shrink-0 p-2.5 rounded-xl bg-white border border-border-subtle shadow-premium">
                {item.icon}
              </div>
              <div className="text-left">
                <p className="font-extrabold text-sm md:text-base text-primary leading-tight">
                  {item.text}
                </p>
                <p className="text-xs text-muted mt-0.5">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

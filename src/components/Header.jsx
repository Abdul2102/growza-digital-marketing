import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background opacity transition on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.replace('#', ''));
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = ''; // Unblock scroll synchronously
    
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const offset = 80; // height of header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50); // Slight delay for smooth animation after menu close animation starts
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-border-subtle shadow-premiumpy-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 focus-visible:outline-2"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-lg shadow-sm">
            G
          </div>
          <span className="text-xl font-extrabold tracking-tight text-primary">
            Growza<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-semibold transition-colors py-1.5 border-b-2 ${
                  isActive
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#audit"
            onClick={(e) => handleNavClick(e, '#audit')}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent text-white font-bold text-sm hover:bg-accent-hover transition-all duration-200 shadow-sm shadow-accent/20 focus-visible:outline-2"
          >
            Get My Free Quote
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors focus-visible:outline-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-border-subtle overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-base font-bold transition-colors py-2 px-3 rounded-lg ${
                        isActive
                          ? 'bg-accent-light text-accent'
                          : 'text-muted hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </nav>
              <hr className="border-border-subtle" />
              <a
                href="#audit"
                onClick={(e) => handleNavClick(e, '#audit')}
                className="w-full text-center py-3.5 rounded-lg bg-accent text-white font-bold text-base hover:bg-accent-hover transition-all duration-200 shadow-md shadow-accent/20"
              >
                Get My Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import React from 'react';
// import { Facebook, Instagram, Linkedin, Twitter, Globe, ArrowUp } from 'lucide-react';
import { FaFacebook,FaInstagram,FaLinkedin, FaTwitter, FaGlobe, FaArrowUp } from "react-icons/fa";
import { contactInfo } from '../data/content';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
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

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5 relative z-10">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10 text-left">
        
        {/* Column 1: Logo & Tagline (4 cols) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-lg shadow-sm">
              G
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              Growza<span className="text-accent">.</span>
            </span>
          </div>
          <p className="text-muted-light text-xs md:text-sm leading-relaxed max-w-sm">
            We find the exact gaps costing you customers — then fix them with a marketing plan built for your local business, not a generic package.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#facebook" aria-label="Facebook" className="p-2 bg-white/5 hover:bg-accent rounded-lg transition-colors text-white/80 hover:text-white">
              <FaFacebook size={16} />
            </a>
            <a href="#instagram" aria-label="Instagram" className="p-2 bg-white/5 hover:bg-accent rounded-lg transition-colors text-white/80 hover:text-white">
              <FaInstagram size={16} />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="p-2 bg-white/5 hover:bg-accent rounded-lg transition-colors text-white/80 hover:text-white">
              <FaLinkedin size={16} />
            </a>
            <a href="#twitter" aria-label="Twitter" className="p-2 bg-white/5 hover:bg-accent rounded-lg transition-colors text-white/80 hover:text-white">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Services (2 cols) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Services</h4>
          <ul className="space-y-2.5 text-sm text-muted-light">
            <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent transition-colors">Google & Meta Ads</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent transition-colors">Social Management</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent transition-colors">Local SEO & Maps</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent transition-colors">Websites & Landers</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent transition-colors">Lead Follow-ups</a></li>
          </ul>
        </div>

        {/* Column 3: Industries (2 cols) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Industries</h4>
          <ul className="space-y-2.5 text-sm text-muted-light">
            <li><a href="#industries" onClick={(e) => handleNavClick(e, '#industries')} className="hover:text-accent transition-colors">Retail & Shops</a></li>
            <li><a href="#industries" onClick={(e) => handleNavClick(e, '#industries')} className="hover:text-accent transition-colors">Restaurants & Cafes</a></li>
            <li><a href="#industries" onClick={(e) => handleNavClick(e, '#industries')} className="hover:text-accent transition-colors">Clinics & Health</a></li>
            <li><a href="#industries" onClick={(e) => handleNavClick(e, '#industries')} className="hover:text-accent transition-colors">Salons & Spas</a></li>
            <li><a href="#industries" onClick={(e) => handleNavClick(e, '#industries')} className="hover:text-accent transition-colors">Real Estate</a></li>
          </ul>
        </div>

        {/* Column 4: Company (2 cols) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Company</h4>
          <ul className="space-y-2.5 text-sm text-muted-light">
            <li><a href="#why-choose-us" onClick={(e) => handleNavClick(e, '#why-choose-us')} className="hover:text-accent transition-colors">Why Choose Us</a></li>
            <li><a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:text-accent transition-colors">Our Process</a></li>
            <li><a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-accent transition-colors">Our Portfolio</a></li>
            <li><a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-accent transition-colors">Testimonials</a></li>
            <li><a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-accent transition-colors">Pricing Options</a></li>
          </ul>
        </div>

        {/* Column 5: Contact Details (2 cols) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Location</h4>
          <p className="text-sm text-muted-light leading-relaxed">
            {contactInfo.address}
          </p>
          <p className="text-xs text-accent font-bold">
            Service Area: <span className="text-muted-light block font-normal">{contactInfo.serviceArea}</span>
          </p>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <span className="text-xs text-muted-light text-center sm:text-left">
          © 2026 Growza Marketing Agency. All rights reserved.
        </span>

        {/* Legal links & Scroll to Top */}
        <div className="flex items-center gap-6">
          <a href="#privacy" className="text-xs text-muted-light hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="text-xs text-muted-light hover:text-white transition-colors">Terms of Service</a>
          
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top of page"
            className="p-2.5 rounded-lg bg-white/5 hover:bg-accent text-white/80 hover:text-white transition-colors cursor-pointer focus-visible:outline-2"
          >
            <FaArrowUp size={16} />
          </button>
        </div>

      </div>

    </footer>
  );
}

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import AuditForm from './components/AuditForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-primary selection:bg-accent selection:text-white antialiased">
      {/* 1. Header (Sticky navigation bar) */}
      <Header />
      
      <main>
        {/* 2. Hero Section */}
        <Hero />
        
        {/* 3. Trust Bar Fold */}
        <TrustBar />
        
        {/* 4. Why Choose Us Philosophy */}
        <WhyChooseUs />
        
        {/* 5. Services Grid */}
        <Services />
        
        {/* 6. Industries Grid */}
        <Industries />
        
        {/* 7. Process Steps Timeline */}
        <Process />
        
        {/* 8. Portfolio Grid */}
        <Portfolio />
        
        {/* 9. Case Studies Deep Dives */}
        <CaseStudies />
        
        {/* 10. Testimonials Quotes */}
        <Testimonials />
        
        {/* 11. Custom Pricing Range Slider */}
        <Pricing />
        
        {/* 12. Free Marketing Audit Form */}
        <AuditForm />
        
        {/* 13. FAQ Accordion Grid */}
        <FAQ />
        
        {/* 14. Contact Options (WhatsApp + Email Form) */}
        <Contact />
        
        {/* 15. Call to Action Banner */}
        <CTA />
      </main>
      
      {/* 16. Footer links & metadata */}
      <Footer />
    </div>
  );
}

export default App;

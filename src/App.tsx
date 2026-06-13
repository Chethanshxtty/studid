import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { DealsGrid } from './components/DealsGrid';
import { StatsBanner } from './components/StatsBanner';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const items = document.querySelectorAll('.reveal-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [activeCategory]);

  const handleViewDeals = (categoryLabel: string) => {
    let categoryValue = 'all';
    if (categoryLabel === 'Mall & Retail') categoryValue = 'retail';
    else if (categoryLabel === 'Food & Cafes') categoryValue = 'food';
    else if (categoryLabel === 'Online Deals') categoryValue = 'online';
    else if (categoryLabel === 'Travel & Stay') categoryValue = 'travel';

    setActiveCategory(categoryValue);
    
    // Smooth scroll to the deals section
    const el = document.getElementById('deals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreAll = () => {
    setActiveCategory('all');
    
    // Smooth scroll to the deals section
    const el = document.getElementById('deals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden selection:bg-brand-primary selection:text-white font-inter">
      {/* SECTION 1: HERO */}
      <Hero onViewDeals={handleViewDeals} onExploreAll={handleExploreAll} />

      {/* SECTION 2: HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 3: DEALS GRID */}
      <DealsGrid activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* SECTION 4: STATS BANNER */}
      <StatsBanner />

      {/* SECTION 5: CTA / SIGNUP */}
      <CTA />

      {/* SECTION 6: FOOTER */}
      <Footer />
    </div>
  );
}

export default App;

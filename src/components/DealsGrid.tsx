import React, { useState } from 'react';
import type { Deal } from '../types';
import { DEALS } from '../data';

interface DealsGridProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  const [copied, setCopied] = useState(false);

  const fallbackCopy = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Fallback copy failed", err);
    }
  };

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(deal.code)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch(() => {
          fallbackCopy(deal.code);
        });
    } else {
      fallbackCopy(deal.code);
    }
  };

  const isActionLabel = deal.code === "Show ID" || deal.code === "EDU email";
  const brandInitial = deal.brand.charAt(0);

  return (
    <div className="relative group w-full h-full flex">
      {/* GLOW BEHIND CARD */}
      <div
        className="absolute inset-0 rounded-[28px] blur-[50px] opacity-[0.25] group-hover:opacity-[0.55] transition-opacity duration-300 pointer-events-none z-0"
        style={{ background: deal.gradient }}
      />

      {/* CARD BODY WITH NO BORDER */}
      <div
        style={{
          backgroundColor: '#1A1A1C',
          transition: 'transform 250ms ease, box-shadow 250ms ease',
          minHeight: '240px',
          height: 'auto',
        }}
        className="relative w-full rounded-[28px] p-[28px] flex flex-col items-center justify-between gap-[16px] overflow-hidden z-10 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      >
        {/* Top Row (Centered Avatar + Badge Column) */}
        <div className="flex flex-col items-center gap-2 w-full select-none">
          {/* Avatar (rounded-2xl) */}
          <div
            style={{ background: deal.gradient }}
            className="w-11 h-11 rounded-2xl flex items-center justify-center font-anton font-bold text-white text-base shadow-md shadow-black/25 shrink-0"
          >
            {brandInitial}
          </div>

          {/* New Badge */}
          {deal.isNew && (
            <span className="bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full font-inter shrink-0 mt-1">
              NEW
            </span>
          )}
        </div>

        {/* Discount & Brand */}
        <div className="text-center w-full mt-2 select-none">
          <h4
            className="font-anton text-[40px] text-white uppercase tracking-tight text-center w-full"
            style={{ overflowWrap: 'break-word', letterSpacing: '-0.02em', lineHeight: 1 }}
          >
            {deal.discount}
          </h4>
          <p 
            style={{ fontSize: '15px', marginTop: '4px', color: 'rgba(255,255,255,0.65)' }}
            className="font-inter font-semibold text-center w-full"
          >
            {deal.brand}
          </p>
        </div>

        {/* Divider */}
        <div 
          style={{ opacity: 0.08 }}
          className="border-t border-white w-full my-1" 
        />

        {/* Description */}
        <p 
          style={{ 
            fontSize: '13px', 
            lineHeight: '1.6', 
            color: 'rgba(255,255,255,0.38)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
          className="font-inter text-center w-full min-h-[40px]"
        >
          {deal.desc}
        </p>

        {/* Bottom Row (Centered Badges/Button) */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mt-auto pt-2"
        >
          {/* Type Badge */}
          <span className="rounded-full bg-white/5 border border-white/8 text-white/40 text-xs px-3 py-1.5 font-inter select-none">
            {deal.type}
          </span>

          {/* CTA action */}
          {isActionLabel ? (
            <span className="rounded-full bg-white/5 border border-white/10 text-white/50 text-xs px-4 py-1.5 font-inter select-none">
              {deal.code}
            </span>
          ) : (
            <button
              onClick={handleCopy}
              className={`rounded-full border text-xs px-4 py-1.5 transition-all duration-200 cursor-pointer font-inter font-bold ${
                copied
                  ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10"
                  : "border-violet-400/40 text-violet-300 hover:bg-violet-500/10"
              }`}
            >
              {copied ? "Copied! ✓" : "Copy Code"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const DealsGrid: React.FC<DealsGridProps> = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { label: "All", value: "all" },
    { label: "Retail", value: "retail" },
    { label: "Food", value: "food" },
    { label: "Online", value: "online" },
    { label: "Travel", value: "travel" },
    { label: "Entertainment", value: "entertainment" },
  ];

  const filteredDeals = activeCategory === "all"
    ? DEALS
    : DEALS.filter(deal => deal.category === activeCategory);

  return (
    <section id="deals" className="bg-[#0D0D0F] pt-24 pb-6 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-[1080px] mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center w-full">
          <h2 className="font-anton text-[56px] text-white uppercase tracking-tight leading-none text-center w-full">
            FEATURED DEALS
          </h2>
          <p className="font-inter text-white/40 text-base mt-3 mb-12 text-center w-full block">
            Verified student offers, updated weekly
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-[10px] mb-[48px] w-full">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-2.5 text-sm font-semibold rounded-full cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-brand-primary text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                    : "border border-white/10 text-gray-400 hover:border-brand-primary/60 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Deals Cards Grid */}
        {filteredDeals.length > 0 ? (
          <div className="deal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredDeals.map((deal, index) => (
              <div
                key={`${deal.brand}-${index}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                className="reveal-item w-full"
              >
                <DealCard deal={deal} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 w-full">
            <p className="text-gray-400 text-lg font-inter">No deals found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

// DealsGrid Component: Categorized grid displays

// Verified grid component imports

// Borderless layout specifications

// Cards use flat solid bg colors

// Styled surface colors to #1A1A1C

// Centered brand initials avatar container

// Centered new tags below avatar column

// Centered text tags for discount values

// Centered text labels for brand names

// Centered descriptions and multiline text clips

// Centered badges and code action triggers

// Adjusted hover border transitions

// Shadow properties updated on card select

// Reduced hover translateY spacing

// Clipboard checks updated

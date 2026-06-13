import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data';

interface HeroProps {
  onViewDeals: (categoryLabel: string) => void;
  onExploreAll: () => void;
}

const BLOBS = [
  "radial-gradient(ellipse 80% 60% at 50% 40%, #7C3AED55 0%, transparent 70%)",
  "radial-gradient(ellipse 80% 60% at 50% 40%, #F59E0B44 0%, transparent 70%)",
  "radial-gradient(ellipse 80% 60% at 50% 40%, #06B6D444 0%, transparent 70%)",
  "radial-gradient(ellipse 80% 60% at 50% 40%, #10B98144 0%, transparent 70%)",
];

const GLOW_COLORS = ["#7C3AED", "#F59E0B", "#06B6D4", "#10B981"];

export const Hero: React.FC<HeroProps> = ({ onViewDeals, onExploreAll }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % 4);
    setTimeout(() => setIsAnimating(false), 650);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 3) % 4);
    setTimeout(() => setIsAnimating(false), 650);
  };

  // Helper to get role for each card index
  const getRole = (index: number) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 3) % 4) return 'left';
    if (index === (activeIndex + 1) % 4) return 'right';
    return 'back';
  };

  const getStyleForRole = (role: 'center' | 'left' | 'right' | 'back') => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      transition: 'transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms, opacity 650ms, left 650ms, top 650ms, width 650ms, padding 650ms',
      willChange: 'transform, filter, opacity',
      borderRadius: '36px',
    };

    switch (role) {
      case 'center':
        return {
          ...baseStyle,
          width: 'var(--center-width, 300px)',
          left: '50%',
          top: '8%',
          zIndex: 20,
          opacity: 1,
          filter: 'none',
          padding: '40px 32px',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(255,255,255,0.15)',
        };
      case 'left':
        return {
          ...baseStyle,
          width: 'var(--side-width, 200px)',
          left: 'var(--left-pos, 16%)',
          top: '20%',
          transform: 'translateX(-50%) scale(0.75)',
          zIndex: 10,
          opacity: 0.7,
          filter: 'blur(1px)',
          padding: '24px 20px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
        };
      case 'right':
        return {
          ...baseStyle,
          width: 'var(--side-width, 200px)',
          left: 'var(--right-pos, 84%)',
          top: '20%',
          transform: 'translateX(-50%) scale(0.75)',
          zIndex: 10,
          opacity: 0.7,
          filter: 'blur(1px)',
          padding: '24px 20px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
        };
      case 'back':
        return {
          ...baseStyle,
          width: '160px',
          left: '50%',
          top: '12%',
          transform: 'translateX(-50%) scale(0.55)',
          zIndex: 5,
          opacity: 0.25,
          filter: 'blur(6px)',
          padding: '16px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.03)',
        };
    }
  };

  return (
    <div className="relative w-full overflow-hidden h-screen bg-[#0A0A0B] select-none">
      {/* BACKGROUND RADIAL GLOW BLOB */}
      <div
        className="absolute inset-0 transition-all duration-[800ms] ease-in-out pointer-events-none"
        style={{ backgroundImage: BLOBS[activeIndex] }}
      />

      {/* GRAIN OVERLAY */}
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeFractalNoise type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* GHOST TEXT */}
      <div className="absolute z-2 top-[45%] -translate-y-1/2 inset-x-0 flex justify-center items-center pointer-events-none">
        <span
          className="font-anton text-white opacity-[0.04] uppercase tracking-[-0.03em] whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(120px, 32vw, 480px)' }}
        >
          PERKS
        </span>
      </div>

      {/* TOP-LEFT BRAND */}
      <div className="absolute top-6 left-6 z-60 flex items-center gap-2">
        <span className="font-bold text-sm uppercase tracking-widest text-white/90 font-inter">
          STUDID
        </span>
        <span className="bg-brand-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-full font-inter uppercase">
          BETA
        </span>
      </div>

      {/* TOP-RIGHT BUTTON */}
      <div className="absolute top-6 right-6 z-60">
        <button
          onClick={() => {
            const el = document.getElementById('signup');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="rounded-full border border-white/20 text-white text-xs px-4 py-2 hover:bg-white/10 transition-all font-inter font-medium cursor-pointer"
        >
          Get Student Access &rarr;
        </button>
      </div>

      {/* CENTER CAROUSEL PANEL */}
      <div className="absolute inset-0 z-3">
        {CATEGORIES.map((cat, i) => {
          const role = getRole(i);
          const style = getStyleForRole(role);
          const isCenter = role === 'center';
          const isSide = role === 'left' || role === 'right';
          const isBack = role === 'back';

          if (isCenter) {
            return (
              <div
                key={cat.label}
                style={style}
                className={`glass-card-center flex flex-col items-center justify-between select-none ${
                  !isAnimating ? 'animate-float-card' : ''
                }`}
              >
                {/* Glow underneath center card */}
                <div
                  className="absolute w-[280px] h-[280px] rounded-full bottom-[-60px] left-1/2 -translate-x-1/2 z-[-1] blur-[70px] opacity-50 animate-pulse-glow pointer-events-none"
                  style={{ backgroundColor: GLOW_COLORS[i] }}
                />

                {/* Card Content */}
                <div className="flex flex-col items-center w-full text-center">
                  <span className="block text-center w-full text-[72px] leading-none mb-4 select-none">{cat.emoji}</span>
                  <h3 className="font-anton text-white text-[32px] uppercase text-center tracking-tight leading-none mb-6 w-full">
                    {cat.label}
                  </h3>
                  <div 
                    style={{ display: 'flex', width: 'fit-content', margin: '0 auto' }}
                    className="rounded-full bg-white/10 border border-white/25 px-5 py-2 text-sm text-white font-semibold mb-2 font-inter"
                  >
                    {cat.stat}
                  </div>
                  <p className="font-inter text-white/50 text-xs text-center mb-8 w-full">
                    {cat.sub}
                  </p>
                  <button
                    onClick={() => onViewDeals(cat.label)}
                    style={{ display: 'block', width: 'fit-content', margin: '0 auto' }}
                    className="rounded-full bg-white text-[#0A0A0B] font-semibold text-sm px-7 py-3 hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer shadow-lg shadow-black/30 font-inter"
                  >
                    View deals &rarr;
                  </button>
                </div>
              </div>
            );
          }

          if (isSide) {
            return (
              <div
                key={cat.label}
                style={style}
                className="glass-card-side flex flex-col items-center justify-center gap-2 select-none"
              >
                <div className="text-5xl">{cat.emoji}</div>
                <h3 className="font-anton text-lg text-white uppercase text-center tracking-tight leading-none mt-2">
                  {cat.label}
                </h3>
                <span className="font-inter text-[12px] text-white/50 font-medium mt-1">
                  {cat.stat}
                </span>
              </div>
            );
          }

          if (isBack) {
            return (
              <div
                key={cat.label}
                style={style}
                className="flex items-center justify-center select-none"
              >
                <div className="text-6xl">{cat.emoji}</div>
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* BOTTOM-LEFT CONTROLS */}
      <div className="absolute bottom-[10%] left-6 sm:left-16 z-60 flex flex-col items-start">
        <h2
          className="font-anton uppercase tracking-[-0.02em] leading-[1.1]"
          style={{
            fontSize: 'clamp(24px, 4vw, 56px)',
            background: 'linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SHOW YOUR STUDENT ID.
        </h2>
        <p className="font-inter text-sm text-white/40 mt-3 mb-8 hidden sm:block max-w-[280px] leading-relaxed">
          Unlock real discounts at 500+ brands across India.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous category"
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/5 border border-white/12 hover:bg-white/12 hover:border-white/30 transition-all duration-200 text-white cursor-pointer active:scale-95"
          >
            <ArrowLeft size={22} strokeWidth={2} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next category"
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/5 border border-white/12 hover:bg-white/12 hover:border-white/30 transition-all duration-200 text-white cursor-pointer active:scale-95"
          >
            <ArrowRight size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* BOTTOM-RIGHT CONTROLS */}
      <div className="absolute bottom-[10%] right-6 sm:right-16 z-60">
        <div
          onClick={onExploreAll}
          className="font-anton text-white uppercase tracking-[-0.02em] select-none cursor-pointer flex items-center gap-2 hover:scale-105 transition-all duration-300 shimmer-text"
          style={{
            fontSize: 'clamp(20px, 3vw, 48px)',
            backgroundImage: 'linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 50%, #ffffff 100%)',
          }}
        >
          EXPLORE ALL <ArrowRight className="inline-block text-white" size={28} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};

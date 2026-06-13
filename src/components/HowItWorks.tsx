import React from 'react';
import { GraduationCap, Search, Tag } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: GraduationCap,
      gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
      title: "Sign Up as a Student",
      desc: "Create your free account and verify your student status with your college ID or email.",
    },
    {
      number: "02",
      icon: Search,
      gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
      title: "Browse Deals",
      desc: "Explore 500+ curated discounts across malls, food, online stores, travel and more.",
    },
    {
      number: "03",
      icon: Tag,
      gradient: "linear-gradient(135deg, #06B6D4, #6366F1)",
      title: "Show & Save",
      desc: "Flash your digital student card at the store or copy the promo code for online orders.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#0A0A0B] py-24 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-[1080px] mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-anton text-[48px] text-white uppercase tracking-tight mb-4">
            HOW IT WORKS
          </h2>
          <p className="font-inter text-gray-400 text-base text-center w-full block mb-[56px]">
            Three steps to unlock your student discounts
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                style={{ transitionDelay: `${index * 80}ms` }}
                className="reveal-item bg-[#1A1A1C] border border-white/8 rounded-[32px] p-10 hover:border-brand-primary/30 hover:-translate-y-1.5 transition-all duration-[250ms] flex flex-col items-start relative overflow-visible min-h-[220px] group"
              >
                {/* Step number background texture */}
                <div className="absolute top-[16px] right-[20px] font-anton text-[80px] text-white select-none leading-none opacity-[0.05] z-0">
                  {step.number}
                </div>

                {/* Icon circle */}
                <div
                  style={{ background: step.gradient }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-black/30 mb-[20px] z-10 shrink-0"
                >
                  <IconComponent className="text-white" size={22} />
                </div>

                {/* Title */}
                <h3 className="font-inter font-bold text-[18px] text-white mb-[10px] z-10">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-white/45 text-[14px] leading-[1.65] z-10">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

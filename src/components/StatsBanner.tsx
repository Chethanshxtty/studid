import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1500 }) => {
  const [count, setCount] = useState('');
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  const animateCount = () => {
    // Matches "₹" prefix, digits, and a suffix like "K+", "Cr+", "+"
    const match = end.match(/^(₹)?(\d+)(K\+|Cr\+|\+)?$/);
    if (!match) {
      setCount(end);
      return;
    }

    const prefix = match[1] || '';
    const targetNumber = parseInt(match[2], 10);
    const suffix = match[3] || '';

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentVal = Math.floor(progress * targetNumber);

      setCount(`${prefix}${currentVal}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  };

  return <span ref={elementRef}>{count || "0"}</span>;
};

export const StatsBanner: React.FC = () => {
  const stats = [
    { 
      number: "500+", 
      label: "Verified Deals", 
      gradient: "linear-gradient(135deg, #7C3AED, #EC4899)" 
    },
    { 
      number: "50K+", 
      label: "Students Saved", 
      gradient: "linear-gradient(135deg, #F59E0B, #EF4444)" 
    },
    { 
      number: "200+", 
      label: "Partner Brands", 
      gradient: "linear-gradient(135deg, #06B6D4, #6366F1)" 
    },
    { 
      number: "₹2Cr+", 
      label: "Total Savings", 
      gradient: "linear-gradient(135deg, #10B981, #3B82F6)" 
    },
  ];

  return (
    <section className="bg-[#1A1A1C] border-y border-white/5 py-20 px-6 relative z-10">
      <div className="max-w-[1080px] mx-auto px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center justify-center items-center w-full">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 80}ms` }}
              className="reveal-item flex flex-col items-center justify-center text-center w-full"
            >
              <span
                className="font-anton text-[64px] leading-none uppercase tracking-tight select-none text-center block w-full"
                style={{
                  background: stat.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <CountUp end={stat.number} />
              </span>
              <span className="font-inter text-white/40 text-[15px] mt-2 font-medium text-center block w-full">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// StatsBanner Component: Stats indicators

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 py-10 px-6 relative z-10">
      <div className="max-w-[1080px] mx-auto px-6 w-full flex flex-wrap items-center justify-between gap-6">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <span className="text-white font-bold text-lg font-inter">
            STUDID.
          </span>
          <span className="text-gray-600 text-xs mt-1 font-inter">
            &copy; 2026 All rights reserved.
          </span>
        </div>

        {/* Right Column */}
        <div className="flex gap-6 text-gray-500 text-sm font-inter">
          <a
            href="#how-it-works"
            className="hover:text-brand-primary transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#signup"
            className="hover:text-brand-primary transition-colors duration-200"
          >
            Partner with us
          </a>
          <a
            href="#"
            className="hover:text-brand-primary transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            Privacy
          </a>
          <a
            href="#signup"
            className="hover:text-brand-primary transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

// Footer Component: Branding and links

import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    
    setStatus('success');
    setMessage('Access Granted! Check your inbox to verify your student status.');
    setEmail('');
  };

  return (
    <section id="signup" className="bg-[#0A0A0B] py-32 px-6 text-center relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{
          background: "linear-gradient(137deg, #7C3AED, #FF6B6B)",
        }}
      />

      <div className="reveal-item relative z-10 max-w-[1080px] mx-auto px-6 w-full flex flex-col items-center">
        {/* Main Title Split in Two Lines */}
        <h2
          className="font-anton text-white uppercase tracking-[-0.02em] leading-[1.05] mb-6 max-w-[800px]"
          style={{ fontSize: 'clamp(28px, 5vw, 72px)' }}
        >
          YOUR STUDENT ID IS YOUR <br />
          <span
            style={{
              background: "linear-gradient(90deg, #7C3AED, #FF6B6B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SUPERPOWER.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="font-inter text-gray-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
          Join 50,000+ students saving money every day. Free forever. No credit card needed.
        </p>

        {status === 'success' ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 max-w-[480px] w-full mb-4">
            <GraduationCap className="text-emerald-400 mx-auto mb-2" size={32} />
            <h4 className="text-white font-bold text-lg font-inter">Check your email!</h4>
            <p className="text-gray-300 text-sm mt-1 font-inter">{message}</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 text-xs font-semibold text-brand-secondary hover:underline cursor-pointer font-inter"
            >
              Sign up with another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-[480px]">
            {/* Input Row */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your college email"
                className="bg-[#1A1A1C] border border-white/10 text-white rounded-2xl px-5 py-4 text-sm flex-1 outline-none focus:border-brand-primary transition-all placeholder-gray-600 font-inter"
              />

              <button
                type="submit"
                className="rounded-full bg-brand-primary hover:bg-violet-500 text-white font-semibold px-8 py-4 transition-all hover:scale-105 active:scale-95 cursor-pointer border-none text-base font-inter"
              >
                Get Free Access &rarr;
              </button>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <p className="text-brand-secondary text-xs mt-3 font-semibold font-inter">
                {message}
              </p>
            )}
          </form>
        )}

        {/* Trust Line */}
        <div className="flex items-center gap-2 justify-center mt-4">
          <GraduationCap className="text-gray-500" size={14} />
          <span className="text-gray-500 text-xs font-inter font-medium">
            Verify with your college email or student ID
          </span>
        </div>
      </div>
    </section>
  );
};

// CTA Component: Student access newsletter sign-up

// Cleaned email input imports

// Borderless design settings

// Centered headers and forms

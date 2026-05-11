'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="pt-24 pb-16 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4 block">
          Executive Synthesis Engine
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tight mb-6">
          Reading Digest
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans font-light italic">
          Surface the consensus. Identify the friction. 
          <span className="block mt-1 font-normal text-slate-400 not-italic">
            Turn information overload into high-signal intelligence.
          </span>
        </p>
      </motion.div>
    </div>
  );
}

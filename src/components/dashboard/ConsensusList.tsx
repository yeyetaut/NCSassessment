'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';

interface ConsensusListProps {
  consensus: string[];
}

export function ConsensusList({ consensus }: ConsensusListProps) {
  if (!consensus || consensus.length === 0) return null;

  return (
    <div className="h-full bg-slate-50/50 rounded-xl border border-[#EAEAEA] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-emerald-100 p-1.5 rounded-full">
          <CircleCheck className="w-4 h-4 text-emerald-600" />
        </div>
        <h3 className="font-semibold text-slate-900 tracking-tight">Consensus</h3>
      </div>
      <ul className="space-y-4">
        {consensus.map((item, i) => (
          <motion.li 
            key={i}
            className="flex items-start gap-3 group"
          >
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform shrink-0" />
            <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

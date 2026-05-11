import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ConsensusListProps {
  items: string[];
}

export function ConsensusList({ items }: ConsensusListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="p-6 border border-[#EAEAEA] rounded-[8px] bg-white h-full">
      <h3 className="text-lg font-semibold mb-4 text-slate-800">Agreed Facts</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
            <span className="text-slate-600 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

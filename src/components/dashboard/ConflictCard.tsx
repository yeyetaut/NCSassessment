import React from 'react';
import { AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { Synthesis } from '@/lib/schema/data-model';

type Conflict = Synthesis['conflicts'][0];

interface ConflictCardProps {
  conflict: Conflict;
}

const badgeColors = {
  low: 'bg-slate-100 text-slate-700 border-slate-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  high: 'bg-rose-50 text-rose-700 border-rose-200'
};

export function ConflictCard({ conflict }: ConflictCardProps) {
  return (
    <div className="p-6 border border-[#EAEAEA] rounded-[8px] bg-white h-full flex flex-col">
      <div className="flex items-start justify-between mb-6 gap-4">
        <h4 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          {conflict.subject}
        </h4>
        <span className={clsx('text-[11px] px-2.5 py-1 rounded-full border uppercase tracking-widest font-bold shrink-0', badgeColors[conflict.significance])}>
          {conflict.significance}
        </span>
      </div>
      
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-md bg-slate-50 border border-[#EAEAEA]">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Source A</span>
          <p className="text-slate-900 font-medium text-[15px] leading-snug">{conflict.sourceA_claim}</p>
        </div>
        <div className="p-5 rounded-md bg-slate-50 border border-[#EAEAEA]">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Source B</span>
          <p className="text-slate-900 font-medium text-[15px] leading-snug">{conflict.sourceB_claim}</p>
        </div>
      </div>
    </div>
  );
}

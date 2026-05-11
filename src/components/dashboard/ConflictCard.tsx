'use client';

import React from 'react';
import { Synthesis } from '@/lib/schema/data-model';
import { Badge } from '@/components/ui/badge';
import { AlertCircle } from 'lucide-react';

type Conflict = Synthesis['conflicts'][number];

interface ConflictCardProps {
  conflict: Conflict;
  index: number;
}

export function ConflictCard({ conflict, index }: ConflictCardProps) {
  const getSignificanceStyles = (sig: string) => {
    switch (sig.toLowerCase()) {
      case 'high': return 'bg-rose-50 text-rose-700 border-rose-100';
      case 'medium': return 'bg-amber-50 text-amber-700 border-amber-100';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#EAEAEA] overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="px-6 py-4 border-b border-[#EAEAEA] bg-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-1 h-6 rounded-full ${conflict.significance === 'high' ? 'bg-rose-500' : 'bg-amber-400'}`} />
          <h4 className="font-bold text-slate-900 tracking-tight">{conflict.subject}</h4>
        </div>
        <Badge variant="outline" className={`px-2 py-0 text-[10px] uppercase tracking-wider font-bold rounded-full ${getSignificanceStyles(conflict.significance)}`}>
          {conflict.significance} Impact
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#EAEAEA]">
        <div className="p-6 space-y-3">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Source A</p>
          <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-100 italic text-slate-700 text-sm leading-relaxed">
            "{conflict.sourceA_claim}"
          </div>
        </div>
        <div className="p-6 space-y-3">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Source B</p>
          <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-100 italic text-slate-700 text-sm leading-relaxed">
            "{conflict.sourceB_claim}"
          </div>
        </div>
      </div>
    </div>
  );
}

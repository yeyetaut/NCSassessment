import React from 'react';
import { motion } from 'framer-motion';
import { Synthesis } from '@/lib/schema/data-model';
import { ConsensusList } from './ConsensusList';
import { ConflictCard } from './ConflictCard';
import { CheckCircle2 } from 'lucide-react';

interface ConflictMatrixProps {
  data: Synthesis;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export function ConflictMatrix({ data }: ConflictMatrixProps) {
  return (
    <div className="space-y-10 w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{data.topic}</h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">{data.summary}</p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-6 grid-flow-dense"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="md:col-span-1 md:row-span-2" variants={itemVariants}>
          <ConsensusList items={data.consensus} />
        </motion.div>

        {!data.conflicts || data.conflicts.length === 0 ? (
          <motion.div 
            className="md:col-span-3 p-8 border border-[#EAEAEA] rounded-[8px] bg-slate-50 flex flex-col items-center justify-center text-center h-full min-h-[300px]"
            variants={itemVariants}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">All Consensus</h3>
            <p className="text-slate-500 mt-2 text-md max-w-md">No major friction points detected across the analyzed sources. The reports align on key metrics and conclusions.</p>
          </motion.div>
        ) : (
          data.conflicts.map((conflict, idx) => (
            <motion.div key={idx} className="md:col-span-3" variants={itemVariants}>
              <ConflictCard conflict={conflict} />
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}

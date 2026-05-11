'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '@/components/dashboard/Hero';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { processInput } from '@/app/actions';
import { Synthesis } from '@/lib/schema/data-model';
import { ConflictMatrix } from '@/components/dashboard/ConflictMatrix';
import { Loader2, Link as LinkIcon, AlignLeft, ArrowLeft, Plus } from 'lucide-react';
import { clsx } from 'clsx';

interface SourceCardProps {
  label: string;
  input: string;
  setInput: (v: string) => void;
  type: 'url' | 'text';
  setType: (v: 'url' | 'text') => void;
  urlPlaceholder: string;
  textPlaceholder: string;
}

function SourceCard({ label, input, setInput, type, setType, urlPlaceholder, textPlaceholder }: SourceCardProps) {
  return (
    <Card className="p-6 border-[#EAEAEA] shadow-sm rounded-xl flex flex-col gap-4 bg-white transition-all hover:border-slate-300">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</h2>
        <div className="flex bg-slate-50 border border-slate-100 p-1 rounded-lg">
          <button
            onClick={() => setType('url')}
            className={clsx(
              "flex items-center gap-2 px-3 py-1.5 text-xs rounded-md transition-all font-medium",
              type === 'url' ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"
            )}
          >
            <LinkIcon className="w-3 h-3" /> Link
          </button>
          <button
            onClick={() => setType('text')}
            className={clsx(
              "flex items-center gap-2 px-3 py-1.5 text-xs rounded-md transition-all font-medium",
              type === 'text' ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"
            )}
          >
            <AlignLeft className="w-3 h-3" /> Paste
          </button>
        </div>
      </div>
      
      {type === 'url' ? (
        <Input
          placeholder={urlPlaceholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-[#EAEAEA] focus-visible:ring-slate-200 bg-slate-50 text-sm font-sans"
        />
      ) : (
        <Textarea
          placeholder={textPlaceholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-[200px] border-[#EAEAEA] focus-visible:ring-slate-200 resize-none bg-slate-50 text-sm leading-relaxed"
        />
      )}
    </Card>
  );
}

export default function Page() {
  const [inputA, setInputA] = useState('');
  const [typeA, setTypeA] = useState<'url' | 'text'>('url');
  const [inputB, setInputB] = useState('');
  const [typeB, setTypeB] = useState<'url' | 'text'>('url');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<Synthesis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!inputA.trim() || !inputB.trim()) return;
    setIsProcessing(true);
    setError(null);
    try {
      const res = await processInput({ inputA, typeA, inputB, typeB });
      if (res.success && res.data) {
        setResult(res.data as Synthesis);
      } else {
        setError(res.error || 'Failed to generate synthesis.');
      }
    } catch {
      setError('An unexpected error occurred.');
    } finally {
      setIsProcessing(false);
    }
  };

  const resetForm = () => {
    setResult(null);
    setInputA('');
    setInputB('');
    setError(null);
  };

  return (
    <main className="min-h-screen bg-[#F7F6F3]">
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key="input-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="pb-24"
          >
            <Hero />
            
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <SourceCard
                  label="Source A"
                  input={inputA}
                  setInput={setInputA}
                  type={typeA}
                  setType={setTypeA}
                  urlPlaceholder="https://example.com/article-a"
                  textPlaceholder="Paste text content from Source A..."
                />
                <SourceCard
                  label="Source B"
                  input={inputB}
                  setInput={setInputB}
                  type={typeB}
                  setType={setTypeB}
                  urlPlaceholder="https://example.com/article-b"
                  textPlaceholder="Paste text content from Source B..."
                />
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-4 bg-rose-50 text-rose-600 rounded-xl text-center border border-rose-100 font-medium text-sm"
                >
                  {error}
                </motion.div>
              )}

              <div className="mt-12 flex flex-col items-center gap-4">
                <Button 
                  size="lg" 
                  onClick={handleGenerate} 
                  disabled={isProcessing || !inputA.trim() || !inputB.trim()}
                  className="bg-slate-900 text-white hover:bg-slate-800 px-10 py-7 text-lg rounded-full shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 font-semibold"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Synthesizing Insights...
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5 mr-2" />
                      Generate Synthesis
                    </>
                  )}
                </Button>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                  Powered by Gemini 1.5 Flash
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pt-12 pb-24"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex justify-start">
              <Button 
                variant="ghost" 
                onClick={resetForm}
                className="text-slate-400 hover:text-slate-900 font-bold text-xs uppercase tracking-widest transition-all"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> New Synthesis
              </Button>
            </div>
            <ConflictMatrix data={result} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

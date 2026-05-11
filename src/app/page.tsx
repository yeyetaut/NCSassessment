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
import { Loader2, Link as LinkIcon, AlignLeft } from 'lucide-react';

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
        setResult(res.data);
      } else {
        setError(res.error || 'Failed to generate synthesis.');
      }
    } catch (err) {
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
    <main className="min-h-screen bg-white">
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
            
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Source A */}
                <Card className="p-6 border-[#EAEAEA] shadow-sm rounded-xl flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-medium text-slate-900">Source A</h2>
                    <div className="flex bg-slate-100 p-1 rounded-lg">
                      <button
                        onClick={() => setTypeA('url')}
                        className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${
                          typeA === 'url' ? 'bg-white shadow-sm text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        <LinkIcon className="w-4 h-4" /> Link
                      </button>
                      <button
                        onClick={() => setTypeA('text')}
                        className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${
                          typeA === 'text' ? 'bg-white shadow-sm text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        <AlignLeft className="w-4 h-4" /> Paste
                      </button>
                    </div>
                  </div>
                  
                  {typeA === 'url' ? (
                    <Input
                      placeholder="https://example.com/article-a"
                      value={inputA}
                      onChange={(e) => setInputA(e.target.value)}
                      className="border-[#EAEAEA] focus-visible:ring-slate-300 bg-slate-50"
                    />
                  ) : (
                    <Textarea
                      placeholder="Paste text content from Source A..."
                      value={inputA}
                      onChange={(e) => setInputA(e.target.value)}
                      className="min-h-[200px] border-[#EAEAEA] focus-visible:ring-slate-300 resize-none bg-slate-50"
                    />
                  )}
                </Card>

                {/* Source B */}
                <Card className="p-6 border-[#EAEAEA] shadow-sm rounded-xl flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-medium text-slate-900">Source B</h2>
                    <div className="flex bg-slate-100 p-1 rounded-lg">
                      <button
                        onClick={() => setTypeB('url')}
                        className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${
                          typeB === 'url' ? 'bg-white shadow-sm text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        <LinkIcon className="w-4 h-4" /> Link
                      </button>
                      <button
                        onClick={() => setTypeB('text')}
                        className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${
                          typeB === 'text' ? 'bg-white shadow-sm text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        <AlignLeft className="w-4 h-4" /> Paste
                      </button>
                    </div>
                  </div>
                  
                  {typeB === 'url' ? (
                    <Input
                      placeholder="https://example.com/article-b"
                      value={inputB}
                      onChange={(e) => setInputB(e.target.value)}
                      className="border-[#EAEAEA] focus-visible:ring-slate-300 bg-slate-50"
                    />
                  ) : (
                    <Textarea
                      placeholder="Paste text content from Source B..."
                      value={inputB}
                      onChange={(e) => setInputB(e.target.value)}
                      className="min-h-[200px] border-[#EAEAEA] focus-visible:ring-slate-300 resize-none bg-slate-50"
                    />
                  )}
                </Card>
              </div>

              {error && (
                <div className="mt-8 p-4 bg-red-50 text-red-600 rounded-lg text-center border border-red-100 font-medium">
                  {error}
                </div>
              )}

              <div className="mt-12 flex justify-center">
                <Button 
                  size="lg" 
                  onClick={handleGenerate} 
                  disabled={isProcessing || !inputA.trim() || !inputB.trim()}
                  className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-xl shadow-lg transition-all disabled:opacity-70 font-medium"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Synthesizing insights...
                    </>
                  ) : (
                    "Generate Synthesis"
                  )}
                </Button>
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
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 flex justify-start">
              <Button 
                variant="outline" 
                onClick={resetForm}
                className="border-[#EAEAEA] text-slate-600 hover:bg-slate-50 font-medium"
              >
                ← New Synthesis
              </Button>
            </div>
            <ConflictMatrix data={result} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

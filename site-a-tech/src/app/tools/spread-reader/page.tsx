'use client';

import { useState } from 'react';
import { tarotCards, TarotCard } from '@/data/tarot-cards';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ["latin"] });

export default function SpreadReaderPage() {
    const [draws, setDraws] = useState<{ card: TarotCard, isReversed: boolean }[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);

    const runAnalysis = () => {
        setIsProcessing(true);
        setDraws([]);

        setTimeout(() => {
            const results: { card: TarotCard, isReversed: boolean }[] = [];
            const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
            for (let i = 0; i < 3; i++) {
                results.push({ card: shuffled[i], isReversed: Math.random() > 0.5 });
            }
            setDraws(results);
            setIsProcessing(false);
        }, 2000);
    };

    const labels = ["T-Minus (Past)", "T-Now (Present)", "T-Plus (Future)"];

    return (
        <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
            <h1 className={`${orbitron.className} text-4xl font-bold mb-4 text-center tracking-tighter`}>SYSTEM.ARRAY / 解析矩陣</h1>
            <p className="text-zinc-500 text-center mb-16 font-mono text-xs tracking-widest">[ TEMPORAL_SEQUENCE_ANALYSIS ]</p>

            <div className="flex justify-center mb-20">
                {!draws.length && !isProcessing && (
                    <button
                        onClick={runAnalysis}
                        className="px-12 py-5 border border-cyan-500 text-cyan-400 font-bold bg-cyan-500/5 hover:bg-cyan-500 hover:text-black transition-all font-mono tracking-widest"
                    >
                        RUN_ALL_VECTORS();
                    </button>
                )}
            </div>

            {isProcessing && (
                <div className="flex flex-col items-center gap-4 py-20">
                    <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                    <div className="text-cyan-500 font-mono text-[10px] tracking-[0.5em] animate-pulse">SYNCING_DATA_STREAMS...</div>
                </div>
            )}

            <div className="grid md:grid-cols-3 gap-8 mb-24">
                <AnimatePresence>
                    {draws.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.4 }}
                            className="bg-zinc-950 border border-zinc-900 p-8 relative overflow-hidden group"
                        >
                            <div className="text-[10px] font-mono text-zinc-700 mb-6">{labels[i]}</div>
                            <div className="aspect-[2/3] border-2 border-zinc-800 rounded-lg flex flex-col items-center justify-center p-4 mb-6 bg-black relative group-hover:border-cyan-500/50 transition-colors">
                                <div className={`text-4xl mb-4 text-cyan-500 drop-shadow-[0_0_10px_cyan] ${d.isReversed ? 'rotate-180' : ''}`}>⚙️</div>
                                <h3 className={`${orbitron.className} text-lg text-white text-center ${d.isReversed ? 'rotate-180' : ''}`}>{d.card.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {draws.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid gap-8 max-w-5xl mx-auto"
                >
                    {draws.map((d, i) => (
                        <div key={i} className="p-10 border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
                            <div className="flex justify-between items-baseline mb-6 border-b border-zinc-900 pb-4">
                                <h4 className={`${orbitron.className} text-cyan-500 text-xl`}>{labels[i]}</h4>
                                <span className="text-zinc-600 font-mono text-[10px] uppercase">{d.card.nameEn} {d.isReversed ? '[REVERSED]' : '[UPRIGHT]'}</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                {d.isReversed ? d.card.meaningReversed : d.card.meaningUpright}
                            </p>
                        </div>
                    ))}
                    <div className="text-center pt-10">
                        <button onClick={() => setDraws([])} className="text-zinc-700 font-mono text-[10px] hover:text-cyan-500 tracking-widest">CLEAR_SYSTEM_CACHE &gt;</button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

'use client';

import { useState } from 'react';
import { tarotCards, TarotCard } from '@/data/tarot-cards';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ["latin"] });

export default function DailyDrawPage() {
    const [card, setCard] = useState<TarotCard | null>(null);
    const [isReversed, setIsReversed] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);

    const drawCard = () => {
        if (isFlipping) return;
        setIsFlipping(true);
        setCard(null);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * tarotCards.length);
            const selected = tarotCards[randomIndex];
            setCard(selected);
            setIsReversed(Math.random() > 0.5);
            setIsFlipping(false);
        }, 1200);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-24 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <h1 className={`${orbitron.className} text-4xl font-bold mb-4 tracking-tighter text-white z-10`}>
                PROTO_CORE / 每日數據同步
            </h1>
            <p className="text-zinc-500 mb-16 font-mono text-[10px] tracking-[0.3em] uppercase z-10">
                [ Awaiting Input: Pulse_Trigger ]
            </p>

            <div className="relative z-10 mb-16 group">
                <AnimatePresence mode="wait">
                    {!card ? (
                        <motion.div
                            key="back"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)' }}
                            onClick={drawCard}
                            className="w-56 h-80 border-2 border-zinc-800 bg-zinc-950/80 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        >
                            <div className="w-48 h-72 border border-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(34,211,238,0.02)_20px,rgba(34,211,238,0.02)_40px)]" />
                                <div className={`${orbitron.className} text-[10px] text-zinc-800 tracking-[0.5em] rotate-90 font-black`}>
                                    TECH_SYSTEM_BACK
                                </div>
                                <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-zinc-800" />
                                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-zinc-800" />
                                <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-zinc-800" />
                                <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-zinc-800" />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="front"
                            initial={{ rotateY: 180, opacity: 0, scale: 0.8 }}
                            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                            className="w-56 h-80 border-2 border-cyan-500/50 bg-black rounded-xl flex flex-col items-center p-6 shadow-[0_0_60px_rgba(34,211,238,0.2)]"
                        >
                            <div className="flex-1 w-full border border-cyan-500/20 rounded-lg flex flex-col items-center justify-center p-4 relative">
                                <div className={`text-4xl mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] ${isReversed ? 'rotate-180' : ''}`}>⚡</div>
                                <h2 className={`${orbitron.className} text-xl font-bold text-white text-center leading-tight ${isReversed ? 'rotate-180' : ''}`}>
                                    {card.name}<br />
                                    <span className="text-[10px] text-cyan-500/60 block mt-2 tracking-widest">{isReversed ? 'REVERSED_MODE' : 'UPRIGHT_MODE'}</span>
                                </h2>
                                <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-700">VAL_ID: {card.id.split('-')[0]}</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {card && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-md p-10 rounded-sm z-10"
                >
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {card.keywords.map((kw, i) => (
                            <span key={i} className="text-[8px] font-bold border border-cyan-500/20 text-cyan-500 px-3 py-1 font-mono uppercase tracking-tighter bg-cyan-500/5">
                                [ {kw} ]
                            </span>
                        ))}
                    </div>
                    <div className="text-zinc-500 text-[10px] font-mono mb-4 tracking-widest uppercase">System.Analysis:</div>
                    <p className="text-zinc-300 leading-relaxed font-light text-sm">
                        {isReversed ? card.meaningReversed : card.meaningUpright}
                    </p>
                    <button
                        onClick={() => setCard(null)}
                        className={`${orbitron.className} mt-12 text-cyan-400 text-[10px] font-bold tracking-[0.3em] hover:text-white transition-all uppercase flex items-center gap-2 mx-auto`}
                    >
                        <span className="w-10 h-px bg-cyan-400/30" />
                        REBOOT_PROCESS
                        <span className="w-10 h-px bg-cyan-400/30" />
                    </button>
                </motion.div>
            )}
        </div>
    );
}

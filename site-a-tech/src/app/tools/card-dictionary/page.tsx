'use client';

import { useState } from 'react';
import { tarotCards, TarotCard } from '@/data/tarot-cards';
import { motion } from 'framer-motion';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ["latin"] });

export default function CardDictionaryPage() {
    const [search, setSearch] = useState('');

    const filteredCards = tarotCards.filter(card =>
        card.name.includes(search) ||
        card.nameEn.toLowerCase().includes(search.toLowerCase()) ||
        card.keywords.some(kw => kw.includes(search))
    );

    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <h1 className={`${orbitron.className} text-4xl font-bold mb-4 tracking-tighter`}>DATA.LIBRARY / 牌義代碼</h1>
            <p className="text-zinc-500 mb-16 font-mono text-[10px] tracking-widest uppercase">
                [ INDEX_VERSION: 1.0.4 | ENCRYPTED_ACCESS ]
            </p>

            <div className="max-w-2xl mb-20">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="INPUT_QUERY_HERE_ (SEARCH NAME OR KEYWORD)"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 p-5 font-mono text-sm text-cyan-400 outline-none focus:border-cyan-500/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-cyan-500 font-mono text-[10px] opacity-50">QUERY_</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCards.map((card) => (
                    <motion.div
                        key={card.id}
                        layout
                        className="border border-zinc-900 bg-zinc-950/30 p-8 hover:bg-zinc-900/50 transition-all group overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-zinc-800 group-hover:border-cyan-500/30 transition-colors" />
                        <div className="flex justify-between items-start mb-8">
                            <div className="text-[10px] font-mono text-zinc-700">NO_{card.number.toString().padStart(2, '0')}</div>
                            <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-zinc-500 text-[10px] font-bold group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all">
                                {card.element}
                            </div>
                        </div>
                        <h3 className={`${orbitron.className} text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors`}>{card.name}</h3>
                        <p className="text-[10px] text-zinc-500 mb-6 font-medium tracking-widest">{card.nameEn.toUpperCase()}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {card.keywords.map((kw, i) => (
                                <span key={i} className="text-[8px] border border-zinc-800 px-2 py-1 text-zinc-600 font-mono">#{kw}</span>
                            ))}
                        </div>
                        <div className="h-px bg-zinc-900 w-full mb-6" />
                        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                            {card.meaningUpright}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

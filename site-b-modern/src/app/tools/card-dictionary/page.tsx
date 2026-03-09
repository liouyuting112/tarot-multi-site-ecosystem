'use client';

import { useState } from 'react';
import { tarotCards, TarotCard } from '@/data/tarot-cards';
import { motion } from 'framer-motion';

export default function CardDictionaryPage() {
    const [search, setSearch] = useState('');

    const filteredCards = tarotCards.filter(card =>
        card.name.includes(search) ||
        card.nameEn.toLowerCase().includes(search.toLowerCase()) ||
        card.keywords.some(kw => kw.includes(search))
    );

    return (
        <div className="py-12">
            <h1 className="text-4xl font-black mb-4 text-center">現代塔羅牌義庫</h1>
            <p className="text-gray-500 text-center mb-12">探索 78 張牌卡的現代心理學詮釋與生活指引</p>

            <div className="max-w-xl mx-auto mb-16">
                <input
                    type="text"
                    placeholder="搜尋牌名、關鍵字 (例如：死神、改變、愚者...)"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-8 py-5 rounded-full border-2 border-gray-100 focus:border-pink-200 focus:outline-none shadow-sm transition-all text-lg"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredCards.map((card) => (
                    <motion.div
                        key={card.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-6 rounded-3xl modern-border hover:shadow-xl transition-shadow group cursor-pointer"
                    >
                        <div className="aspect-[2/3] bg-pink-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                            <span className="text-pink-200 font-bold text-4xl group-hover:scale-110 transition-transform">
                                {card.number}
                            </span>
                        </div>
                        <h3 className="text-xl font-black mb-1">{card.name}</h3>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-4">{card.nameEn}</p>
                        <div className="flex flex-wrap gap-1">
                            {card.keywords.slice(0, 3).map((kw, i) => (
                                <span key={i} className="text-[9px] bg-gray-50 text-gray-500 px-2 py-1 rounded-md">{kw}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {filteredCards.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                    找不到相關牌卡數據，請嘗試其他關鍵字。
                </div>
            )}
        </div>
    );
}

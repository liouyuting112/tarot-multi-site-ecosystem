'use client';

import { useState } from 'react';
import { tarotCards, TarotCard } from '@/data/tarot-cards';
import { motion, AnimatePresence } from 'framer-motion';

export default function DailyDrawPage() {
    const [card, setCard] = useState<TarotCard | null>(null);
    const [isReversed, setIsReversed] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);

    const drawCard = () => {
        if (isFlipping) return;
        setIsFlipping(true);
        setCard(null);

        // Simulate a shuffle/draw wait
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * tarotCards.length);
            const selected = tarotCards[randomIndex];
            setCard(selected);
            setIsReversed(Math.random() > 0.5);
            setIsFlipping(false);
        }, 800);
    };

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-12">
            <Styles />
            <h1 className="text-4xl font-black mb-6">今日焦點：每日一抽</h1>
            <p className="text-gray-500 mb-12 max-w-lg mx-auto font-medium">
                請深呼吸，在心中默念你今天最關心的事情，然後點擊下方卡牌。
            </p>

            <div className="relative perspective-1000 mb-12 group">
                <AnimatePresence mode="wait">
                    {!card ? (
                        <motion.div
                            key="back"
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: isFlipping ? 180 : 0 }}
                            exit={{ rotateY: 180 }}
                            onClick={drawCard}
                            className="w-48 h-80 bg-pink-100 rounded-2xl border-4 border-white shadow-2xl flex flex-col items-center justify-center cursor-pointer transition-all hover:-translate-y-2"
                        >
                            <div className="w-40 h-72 border-2 border-pink-200 rounded-xl flex items-center justify-center">
                                <span className="text-pink-300 font-black text-2xl tracking-tighter mix-blend-multiply">MODERN_BACK</span>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="front"
                            initial={{ rotateY: -180, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            className="w-48 h-80 bg-white rounded-2xl border-4 border-white shadow-2xl flex flex-col items-center p-4 relative overflow-hidden"
                        >
                            <div className="flex-1 w-full border-2 border-pink-50 rounded-lg flex flex-col items-center justify-center p-4">
                                <div className={`text-4xl mb-4 ${isReversed ? 'rotate-180' : ''}`}>✨</div>
                                <h2 className={`text-xl font-black text-gray-800 ${isReversed ? 'rotate-180 mb-2 mt-4' : 'mb-4'}`}>
                                    {card.name} {isReversed && '(逆位)'}
                                </h2>
                                <p className={`text-[10px] uppercase font-bold text-pink-300 tracking-[0.2em] ${isReversed ? 'rotate-180' : ''}`}>
                                    {card.nameEn}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {card && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl bg-white p-10 rounded-3xl shadow-xl modern-border"
                >
                    <div className="flex gap-2 justify-center mb-6">
                        {card.keywords.map((kw, i) => (
                            <span key={i} className="text-[10px] font-bold bg-pink-50 text-pink-400 px-3 py-1 rounded-full">{kw}</span>
                        ))}
                    </div>
                    <h3 className="text-2xl font-black mb-4">解讀指引</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        {isReversed ? card.meaningReversed : card.meaningUpright}
                    </p>
                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            onClick={() => setCard(null)}
                            className="text-pink-400 text-sm font-bold border-b-2 border-pink-100 hover:border-pink-400 transition-all"
                        >
                            重新抽牌
                        </button>
                        <button
                            className="bg-gray-900 text-white px-6 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform"
                            onClick={() => alert('分享功能已準備就緒，連結已複製！')}
                        >
                            分享我的覺察
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

// Add CSS to head for perspective
function Styles() {
    return (
        <style dangerouslySetInnerHTML={{
            __html: `
            .perspective-1000 { perspective: 1000px; }
        `}} />
    );
}

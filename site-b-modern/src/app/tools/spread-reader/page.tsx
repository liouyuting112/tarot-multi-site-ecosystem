'use client';

import { useState } from 'react';
import { tarotCards, TarotCard } from '@/data/tarot-cards';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpreadReaderPage() {
    const [draws, setDraws] = useState<{ card: TarotCard, isReversed: boolean }[]>([]);
    const [isShuffling, setIsShuffling] = useState(false);

    const drawThree = () => {
        setIsShuffling(true);
        setDraws([]);

        setTimeout(() => {
            const results: { card: TarotCard, isReversed: boolean }[] = [];
            const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());

            for (let i = 0; i < 3; i++) {
                results.push({
                    card: shuffled[i],
                    isReversed: Math.random() > 0.5
                });
            }

            setDraws(results);
            setIsShuffling(false);
        }, 1500);
    };

    const labels = ["過去 (Past)", "現在 (Present)", "未來 (Future)"];

    return (
        <div className="py-12 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-black mb-6">時間流：三張牌解析</h1>
            <p className="text-gray-500 mb-12">這是一個最經典的牌陣，幫助你釐清事情的脈絡與趨勢。</p>

            {!draws.length && !isShuffling && (
                <button
                    onClick={drawThree}
                    className="bg-gray-900 text-white px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all font-bold text-lg"
                >
                    洗牌並展開牌陣
                </button>
            )}

            {isShuffling && (
                <div className="animate-pulse text-pink-400 font-bold text-xl py-20">
                    正在感應能量場中...
                </div>
            )}

            <div className="grid md:grid-cols-3 gap-8 mt-12 mb-20">
                <AnimatePresence>
                    {draws.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.3 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-xs font-black uppercase tracking-[0.2em] text-pink-400 mb-6">{labels[i]}</div>
                            <div className="w-44 h-72 bg-white rounded-2xl border-4 border-white shadow-xl flex flex-col items-center p-4 relative overflow-hidden modern-border">
                                <div className="flex-1 w-full border border-gray-100 rounded-lg flex flex-col items-center justify-center p-4">
                                    <div className={`text-3xl mb-4 ${d.isReversed ? 'rotate-180' : ''}`}>🎴</div>
                                    <p className={`text-sm font-black ${d.isReversed ? 'rotate-180' : ''}`}>{d.card.name}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {draws.length > 0 && (
                <div className="space-y-8 text-left max-w-4xl mx-auto bg-white p-12 rounded-[40px] shadow-sm border border-gray-50">
                    {draws.map((d, i) => (
                        <div key={i} className="border-l-4 border-pink-100 pl-8">
                            <h4 className="font-black text-lg mb-2 text-gray-900">{labels[i]} - {d.card.name} {d.isReversed && '(逆位)'}</h4>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {d.isReversed ? d.card.meaningReversed : d.card.meaningUpright}
                            </p>
                        </div>
                    ))}
                    <div className="pt-8 text-center">
                        <button onClick={() => setDraws([])} className="text-gray-400 font-bold hover:text-gray-900 transition-colors">清除並重新開始</button>
                    </div>
                </div>
            )}
        </div>
    );
}

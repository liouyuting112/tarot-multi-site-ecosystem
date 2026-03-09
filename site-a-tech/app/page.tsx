'use client';

import { motion } from 'framer-motion';
import { Compass, BookOpen, Star, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Home() {
    const tarotArticles = [
        { title: '2025 塔羅大趨勢：如何在變革中找到穩定力量', img: 'https://images.unsplash.com/photo-1544022613-e87f17a784d2?q=80&w=800', cat: '年度導引' },
        { title: '聖杯二的靈魂私語：談一段健康的關係對等性', img: 'https://images.unsplash.com/photo-1581235720704-06d3acfcba60?q=80&w=800', cat: '情感占卜' },
        { title: '當命運之輪逆位：是停滯還是轉彎的契機？', img: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800', cat: '牌意進階' }
    ];

    return (
        <div className="container mx-auto px-6 py-12 space-y-32">
            {/* RICH HERO SECTION */}
            <section className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <div className="bg-gold-500/10 text-gold-500 w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">頂級靈性導師指定平台</div>
                    <h1 className="text-6xl lg:text-8xl font-serif font-black mb-8 leading-[1.1] gold-text">
                        命運之鏡 <br /><span className="text-white">啟發靈魂</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed font-sans max-w-xl">
                        不僅僅是預測，更是一場關於自我的深度對話。我們利用古老塔羅智慧，協助您在複雜的現代生活中找回內在秩序。
                    </p>
                    <div className="flex gap-4">
                        <button className="px-10 py-4 bg-gold-500 text-black font-black uppercase tracking-tighter hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            展開今日占卜
                        </button>
                        <button className="px-10 py-4 border border-gold-500/30 text-gold-500 font-bold hover:bg-gold-500/10 transition-all">
                            查看牌意百科
                        </button>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
                    <div className="absolute -inset-4 border border-gold-500/20 rotate-3 rounded-[3rem]"></div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border-2 border-gold-500/30 shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1590422443841-7abd5866123e?q=80&w=1200" className="w-full h-full object-cover" alt="Mystic Tarot Card Focus" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent"></div>
                    </div>
                </motion.div>
            </section>

            {/* MULTI-COLUMN CONTENT HUB */}
            <section className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-4xl font-serif font-black gold-text">深邃啟示錄</h2>
                        <div className="h-[2px] flex-1 bg-gold-500/10"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        {tarotArticles.map((art, i) => (
                            <motion.div key={i} whileHover={{ y: -10 }} className="mystic-card rounded-3xl overflow-hidden flex flex-col group">
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur px-3 py-1 text-[10px] font-bold text-gold-500 uppercase tracking-widest">{art.cat}</div>
                                    <img src={art.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={art.title} />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-500 transition-colors leading-snug">{art.title}</h3>
                                    <p className="text-slate-400 text-sm mb-8 line-clamp-2">在這篇深度專欄中，我們將探討...</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-xs text-slate-500 font-sans">2024-05-15</span>
                                        <ArrowRight className="text-gold-500" size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* SIDEBAR COLUMNS */}
                <aside className="lg:col-span-4 space-y-12">
                    <div className="mystic-card p-10 rounded-3xl border-2 border-gold-500/50 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl group-hover:bg-gold-500/40 transition-all"></div>
                        <h3 className="text-2xl font-serif font-black gold-text mb-6">靈知社群服務</h3>
                        <p className="text-sm text-slate-400 mb-8 leading-relaxed">加入我們的私密塔羅沙龍，獲取每週限定的星象預警與牌卡教輔資料。</p>
                        <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gold-500 transition-all flex items-center justify-center gap-2">
                            <Star size={16} fill="currentColor" /> 立即加入會員
                        </button>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg font-bold gold-text flex items-center gap-2"><BookOpen size={20} /> 智慧解答 FAQ</h3>
                        <div className="space-y-4">
                            {[
                                { q: '占卜前需要準備什麼？', a: '深呼吸三次，確保心境平和且問題意圖明確。' },
                                { q: '牌面重複出現代表什麼？', a: '這通常是宇宙在強調某個被您忽略的核心議題。' }
                            ].map((faq, i) => (
                                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <p className="font-bold text-sm mb-2">{faq.q}</p>
                                    <p className="text-xs text-slate-500 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>

            {/* FOOTER WIDGETS */}
            <section className="grid md:grid-cols-4 gap-8">
                <div className="mystic-card p-8 rounded-2xl flex flex-col items-center text-center">
                    <Compass className="text-gold-500 mb-4" size={32} />
                    <h4 className="font-bold mb-2">牌意查詢</h4>
                    <p className="text-xs text-slate-500">78 張牌完整解析庫</p>
                </div>
                <div className="mystic-card p-8 rounded-2xl flex flex-col items-center text-center">
                    <ShieldCheck className="text-gold-500 mb-4" size={32} />
                    <h4 className="font-bold mb-2">隱私保障</h4>
                    <p className="text-xs text-slate-500">100% 匿名占卜環境</p>
                </div>
                <div className="mystic-card p-8 rounded-2xl flex flex-col items-center text-center">
                    <MessageSquare className="text-gold-500 mb-4" size={32} />
                    <h4 className="font-bold mb-2">導師解讀</h4>
                    <p className="text-xs text-slate-500">24H 專業導師在線</p>
                </div>
                <div className="mystic-card p-8 rounded-2xl flex flex-col items-center text-center border-gold-500/40 border">
                    <h4 className="font-bold mb-2 gold-text">ADVERTISEMENT</h4>
                    <div className="bg-slate-800 w-full h-24 rounded flex items-center justify-center text-[10px] text-slate-600">橫幅空間 300x120</div>
                </div>
            </section>
        </div>
    );
}

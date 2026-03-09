'use client';

import { useState } from 'react';
import { tarotCards, TarotCard } from '@/data/tarot-cards';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles.module.css';

export default function SpreadReaderPage() {
    const [draws, setDraws] = useState<{ card: TarotCard, isReversed: boolean }[]>([]);
    const [isConsulting, setIsConsulting] = useState(false);

    const consultOracle = () => {
        setIsConsulting(true);
        setDraws([]);

        setTimeout(() => {
            const results: { card: TarotCard, isReversed: boolean }[] = [];
            const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
            for (let i = 0; i < 3; i++) {
                results.push({ card: shuffled[i], isReversed: Math.random() > 0.5 });
            }
            setDraws(results);
            setIsConsulting(false);
        }, 2000);
    };

    const labels = ["昨日所跡 (Yesterday)", "今日所立 (Today)", "明日所契 (Tomorrow)"];

    return (
        <div className={styles.container} style={{ paddingTop: '5rem', paddingBottom: '12rem', textAlign: 'center' }}>
            <h1 className={styles.title}>三相時間儀軌</h1>
            <p style={{ color: '#8b7355', fontStyle: 'italic', marginBottom: '6rem' }}>
                過往、當下與即將到來的影跡在此交匯，映照出命運的絲線。
            </p>

            <div style={{ marginBottom: '8rem' }}>
                {!draws.length && !isConsulting && (
                    <button
                        onClick={consultOracle}
                        style={{
                            background: '#121212',
                            color: '#d1b894',
                            border: '1px solid #4a3f2f',
                            padding: '1.5rem 4rem',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            letterSpacing: '0.2em'
                        }}
                    >
                        [ 啟動命運齒輪 ]
                    </button>
                )}
            </div>

            {isConsulting && (
                <div style={{ color: '#8b7355', fontStyle: 'italic', fontSize: '1.5rem', py: '5rem' }}>
                    正在翻閱阿卡西紀錄...
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', marginBottom: '10rem' }}>
                <AnimatePresence>
                    {draws.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.5 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <span style={{ fontSize: '0.9rem', color: '#4a3f2f', marginBottom: '3rem', letterSpacing: '0.2em' }}>{labels[i]}</span>
                            <div style={{
                                width: '100%',
                                maxWidth: '180px',
                                height: '300px',
                                border: '2px solid #2a2216',
                                background: '#0a0a0a',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '80%',
                                    height: '90%',
                                    border: '1px double #2a2216',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#e0cca7',
                                    color: '#1a1815'
                                }}>
                                    <span style={{ fontSize: '2.5rem', transform: d.isReversed ? 'rotate(180deg)' : 'none' }}>🕯️</span>
                                    <h4 style={{ fontSize: '1.2rem', marginTop: '1rem', fontWeight: 'bold' }}>{d.card.name}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {draws.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', borderTop: '2px solid #1a1a1a', paddingTop: '6rem' }}
                >
                    {draws.map((d, i) => (
                        <div key={i} style={{ marginBottom: '6rem' }}>
                            <h4 style={{ color: '#e0cca7', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ width: '30px', height: '1px', background: '#8b7355' }} />
                                {labels[i]} : {d.card.name} {d.isReversed && '(逆位)'}
                            </h4>
                            <p style={{ color: '#8c7a65', fontSize: '1.2rem', lineHeight: '1.8', paddingLeft: '3rem' }}>
                                {d.isReversed ? d.card.meaningReversed : d.card.meaningUpright}
                            </p>
                        </div>
                    ))}
                    <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                        <button onClick={() => setDraws([])} style={{ background: 'none', border: 'none', color: '#4a3f2f', cursor: 'pointer', textDecoration: 'underline' }}>消逝幻象</button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

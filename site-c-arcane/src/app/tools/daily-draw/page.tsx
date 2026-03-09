'use client';

import { useState } from 'react';
import { tarotCards, TarotCard } from '@/data/tarot-cards';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles.module.css';

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
        }, 1500);
    };

    return (
        <div className={styles.container} style={{ paddingTop: '5rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className={styles.title} style={{ marginBottom: '1rem' }}>每日啟示</h1>
            <p style={{ color: '#8c7a65', fontStyle: 'italic', marginBottom: '5rem', textAlign: 'center' }}>
                靜默你的思緒，讓靈魂的目光穿透塵世的迷霧。
            </p>

            <div className="relative mb-20">
                <AnimatePresence mode="wait">
                    {!card ? (
                        <motion.div
                            key="back"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={drawCard}
                            style={{
                                width: '200px',
                                height: '340px',
                                border: '3px solid #2a2216',
                                background: '#121212',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'crosshair',
                                boxShadow: '0 0 40px rgba(0,0,0,0.8)',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                width: '170px',
                                height: '310px',
                                border: '1px double #4a3f2f',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #161616 0%, #0a0a0a 100%)'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    border: '1px solid #4a3f2f',
                                    transform: 'rotate(45deg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        border: '1px solid #4a3f2f',
                                        transform: 'rotate(-45deg)',
                                        textAlign: 'center',
                                        fontSize: '0.6rem',
                                        color: '#4a3f2f'
                                    }}>
                                        ARCANE
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="front"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{
                                width: '200px',
                                height: '340px',
                                border: '3px solid #664d2b',
                                background: '#e0cca7',
                                color: '#1a1815',
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                boxShadow: '0 0 50px rgba(102, 77, 43, 0.3)',
                                filter: 'sepia(30%)'
                            }}
                        >
                            <div style={{ flex: 1, width: '100%', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem', transform: isReversed ? 'rotate(180deg)' : 'none' }}>🕯️</div>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', textAlign: 'center', transform: isReversed ? 'rotate(180deg)' : 'none' }}>
                                    {card.name}
                                </h2>
                                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.5rem', transform: isReversed ? 'rotate(180deg)' : 'none' }}>
                                    {isReversed ? card.nameEn + ' (REVERSED)' : card.nameEn}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {card && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                        maxWidth: '650px',
                        padding: '3rem',
                        borderTop: '1px solid #2a2216',
                        textAlign: 'center'
                    }}
                >
                    <div style={{ marginBottom: '2rem' }}>
                        {card.keywords.map((kw, i) => (
                            <span key={i} style={{
                                display: 'inline-block',
                                color: '#8b7355',
                                fontSize: '0.8rem',
                                margin: '0 0.5rem',
                                fontStyle: 'italic'
                            }}>
                                [ {kw} ]
                            </span>
                        ))}
                    </div>
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#d1b894' }}>
                        {isReversed ? card.meaningReversed : card.meaningUpright}
                    </p>
                    <button
                        onClick={() => setCard(null)}
                        style={{
                            marginTop: '4rem',
                            background: 'none',
                            border: 'none',
                            color: '#8b7355',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                        }}
                    >
                        重新啟扉
                    </button>
                </motion.div>
            )}
        </div>
    );
}

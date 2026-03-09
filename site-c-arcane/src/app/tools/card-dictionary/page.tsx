'use client';

import { useState } from 'react';
import { tarotCards, TarotCard } from '@/data/tarot-cards';
import { motion } from 'framer-motion';
import styles from '../../styles.module.css';

export default function CardDictionaryPage() {
    const [search, setSearch] = useState('');

    const filteredCards = tarotCards.filter(card =>
        card.name.includes(search) ||
        card.nameEn.toLowerCase().includes(search.toLowerCase()) ||
        card.keywords.some(kw => kw.includes(search))
    );

    return (
        <div className={styles.container} style={{ paddingTop: '5rem', paddingBottom: '10rem' }}>
            <h1 className={styles.title}>符號解構辭典</h1>
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#8b7355', marginBottom: '4rem' }}>
                追尋大阿爾克那的足跡，解開每一枚符號背後隱藏的千年奧義。
            </p>

            <div style={{ maxWidth: '600px', margin: '0 auto 6rem', position: 'relative' }}>
                <input
                    type="text"
                    placeholder="輸入秘文關鍵字 (例如：死神、命運、愚者)..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: '100%',
                        background: '#0a0a0a',
                        borderBottom: '1px solid #4a3f2f',
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        padding: '1.5rem',
                        color: '#d1b894',
                        outline: 'none',
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        fontFamily: 'serif'
                    }}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
                {filteredCards.map((card) => (
                    <motion.div
                        key={card.id}
                        layout
                        style={{
                            borderBottom: '1px solid #1a1a1a',
                            paddingBottom: '4rem',
                            display: 'grid',
                            gridTemplateColumns: '200px 1fr',
                            gap: '3rem'
                        }}
                    >
                        <div style={{
                            height: '300px',
                            border: '1px solid #2a2216',
                            background: '#121212',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}>
                            <div style={{ width: '100%', height: '100%', border: '1px double #4a3f2f', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '1.5rem', color: '#8b7355' }}>IX_{card.number}</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '2.5rem', color: '#e0cca7', fontWeight: 'bold' }}>{card.name}</h2>
                                <span style={{ color: '#4a3f2f', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>{card.nameEn}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                {card.keywords.map((kw, i) => (
                                    <span key={i} style={{ color: '#8b7355', fontSize: '0.8rem', fontStyle: 'italic' }}># {kw}</span>
                                ))}
                            </div>
                            <p style={{ color: '#8c7a65', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                                {card.meaningUpright}
                            </p>
                            <div style={{ color: '#5d4a33', fontSize: '1rem', fontStyle: 'italic', borderLeft: '2px solid #2a2216', paddingLeft: '1.5rem' }}>
                                逆位：{card.meaningReversed}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {filteredCards.length === 0 && (
                <p style={{ textAlign: 'center', color: '#4a3f2f', marginTop: '10rem' }}>未能在檔案館中尋獲匹配的紀錄。</p>
            )}
        </div>
    );
}

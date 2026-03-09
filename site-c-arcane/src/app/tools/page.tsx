import styles from '../styles.module.css';

export default function ToolsPage() {
    return (
        <div className={styles.container} style={{ paddingTop: '5rem' }}>
            <h1 className={styles.title}>秘術實踐工具</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <a href="/tools/daily-draw" className={styles.link} style={{ padding: '2rem', border: '1px solid #2a2216', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#e0cca7' }}>[ 每日啟示抽牌 ]</h2>
                </a>
                <a href="/tools/card-dictionary" className={styles.link} style={{ padding: '2rem', border: '1px solid #2a2216', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#e0cca7' }}>[ 符號解構辭典 ]</h2>
                </a>
                <a href="/tools/spread-reader" className={styles.link} style={{ padding: '2rem', border: '1px solid #2a2216', textAlign: 'center', gridColumn: 'span 2' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#e0cca7' }}>[ 複雜牌陣儀軌 ]</h2>
                </a>
            </div>
        </div>
    );
}

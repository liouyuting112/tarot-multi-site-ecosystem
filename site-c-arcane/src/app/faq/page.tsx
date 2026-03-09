import styles from '../styles.module.css';

export default function FAQPage() {
    return (
        <div className={styles.container} style={{ paddingTop: '5rem' }}>
            <h1 className={styles.title}>鑑定指引與常見答問</h1>
            <div className={styles.mainContent} style={{ margin: '0 auto', maxWidth: '700px' }}>
                <section style={{ background: '#121212', padding: '3rem', border: '1px solid #2a2216' }}>
                    {/* FAQ Items Placeholder */}
                    <p style={{ textAlign: 'center', color: '#6d5a44' }}>正在整理學者們的解答...</p>
                </section>
            </div>
        </div>
    );
}

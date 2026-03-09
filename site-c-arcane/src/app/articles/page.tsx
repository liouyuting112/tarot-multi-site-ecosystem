import styles from '../styles.module.css';

export default function ArticlesPage() {
    return (
        <div className={styles.container} style={{ paddingTop: '5rem' }}>
            <h1 className={styles.title}>秘傳卷軸目錄</h1>
            <div className={styles.mainContent} style={{ margin: '0 auto', maxWidth: '800px' }}>
                <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '4rem' }}>
                    這裡記載著穿越世紀的智慧，每一份文件都經過嚴格的考據與鑑定。
                </p>
                {/* Future Article List */}
                <div style={{ display: 'grid', gap: '3rem' }}>
                    {/* Article items will go here */}
                </div>
            </div>
        </div>
    );
}

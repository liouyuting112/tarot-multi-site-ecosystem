import styles from './styles.module.css';
import { getArticles, getSiteConfig } from "@/lib/strapi";
import Link from "next/link";

export default async function Home() {
    const articles = await getArticles('SiteC');
    const config = await getSiteConfig('SiteC');

    return (
        <div className={styles.container} style={{ paddingTop: '5rem' }}>
            <h1 className={styles.title}>{config?.seo_default_title || '秘傳塔羅庫'}</h1>
            <p style={{ color: '#8c7a65', textAlign: 'center', fontStyle: 'italic', marginBottom: '4rem' }}>
                {config?.seo_default_desc || '提供塔羅與神祕學深度研究文獻的數位圖書館。'}
            </p>

            <main className={styles.grid}>
                <div className={styles.mainContent}>
                    {articles.map((article: any, i: number) => (
                        <article key={article.id} className={styles.article}>
                            <img src={`https://images.unsplash.com/photo-${1534447677768 + i}-be436bb09401?q=80&w=800`} className={styles.articleImage} alt={article.title} />
                            <h2 className={styles.articleTitle}>{article.title}</h2>
                            <p style={{ color: '#8c7a65', fontSize: '1.2rem', lineHeight: '1.8' }}>
                                {article.excerpt || article.content?.slice(0, 150) + '...'}
                            </p>
                            <Link href={`/articles/${article.slug}`} className={styles.link} style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>探尋古籍細節 →</Link>
                        </article>
                    ))}
                </div>

                <aside className={styles.sidebar}>
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 className={styles.sidebarTitle}>秘教卷軸分類</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link href="#" className={styles.link}>[ 煉金術與塔羅 ]</Link>
                            <Link href="#" className={styles.link}>[ 希伯來字母對應 ]</Link>
                            <Link href="#" className={styles.link}>[ 黃金黎明協會文獻 ]</Link>
                            <Link href="#" className={styles.link}>[ 埃及起源說考據 ]</Link>
                        </div>
                    </section>

                    <section style={{ background: '#121212', padding: '2rem', borderLeft: '3px solid #664d2b' }}>
                        <h3 className={styles.sidebarTitle} style={{ fontSize: '1rem' }}>鑑定指引 FAQ</h3>
                        <div style={{ fontSize: '0.9rem', color: '#6d5a44' }}>
                            <p style={{ marginBottom: '1rem' }}><strong>問：</strong> 如何確保卷軸的真實性？</p>
                            <p>答：我們透過碳14鑑定與符號學交叉比對，確保每一份文件都具備正統傳承背景。</p>
                        </div>
                    </section>
                </aside>
            </main>
        </div>
    );
}

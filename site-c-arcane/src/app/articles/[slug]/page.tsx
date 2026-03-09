import styles from '../styles.module.css';
import { getArticleBySlug } from "@/lib/strapi";
import { notFound } from "next/navigation";

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <div className={styles.container} style={{ paddingTop: '4rem', maxWidth: '900px', margin: '0 auto' }}>
            <article className={styles.article} style={{ borderBottom: '1px double #664d2b', paddingBottom: '5rem', marginBottom: '5rem' }}>
                <span style={{ color: '#664d2b', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '0.3em' }}>
                    [ 秘傳卷軸編號: {article.documentId?.slice(0, 8).toUpperCase()} ]
                </span>
                <h1 className={styles.articleTitle} style={{ fontSize: '3.5rem', textAlign: 'center', margin: '3rem 0', color: '#664d2b' }}>
                    {article.title}
                </h1>
                <div style={{ color: '#8c7a65', fontSize: '1.25rem', lineHeight: '2.2', textAlign: 'justify' }}>
                    <p className="whitespace-pre-wrap">{article.content}</p>
                </div>
            </article>

            {/* AI-SEO Optimized FAQ Section */}
            {article.faq_schema && article.faq_schema.length > 0 && (
                <section style={{ background: '#121212', padding: '4rem', border: '1px solid #2a2216', position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#0a0a0a',
                        padding: '0 2rem',
                        color: '#664d2b',
                        fontWeight: 'bold',
                        letterSpacing: '0.2em'
                    }}>
                        秘教鑑定 FAQ
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {article.faq_schema.map((faq: any, index: number) => (
                            <div key={index}>
                                <h3 style={{ color: '#d1b894', fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: '#664d2b' }}>◈</span>
                                    {faq.q}
                                </h3>
                                <p style={{ color: '#8c7a65', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '2.5rem', fontStyle: 'italic' }}>
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

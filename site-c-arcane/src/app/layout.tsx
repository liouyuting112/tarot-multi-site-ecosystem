import styles from './styles.module.css';
import { Cinzel, Crimson_Text } from 'next/font/google';
import { getSiteConfig } from '@/lib/strapi';
import Script from 'next/script';

const cinzel = Cinzel({ subsets: ['latin'] });
const crimson = Crimson_Text({ subsets: ['latin'], weight: ['400', '700'] });

export async function generateMetadata() {
    const config = await getSiteConfig('SiteC');
    return {
        title: config?.seo_default_title || 'Arcane Library | 秘經塔羅館',
        description: config?.seo_default_desc || '深入探討塔羅、煉金術與密契主義的歷史淵源。古老智慧的數位檔案館。',
    };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const config = await getSiteConfig('SiteC');
    return (
        <html lang="zh-TW">
            <body className={`${styles.body} ${crimson.className}`}>
                <Script id="ga-init-c" strategy="afterInteractive">
                    {`
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                        ga('create', '${config?.google_analytics_id || 'UA-XXXXX-Y'}', 'auto');
                        ga('send', 'pageview');
                    `}
                </Script>
                <header style={{ borderBottom: '1px solid #2a2216', padding: '2rem 0' }}>
                    <div className={styles.container}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className={cinzel.className} style={{ fontSize: '1.5rem', letterSpacing: '0.2em' }}>ARCANE ARCHIVE</div>
                            <nav style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                                <a href="/" className={styles.link} style={{ display: 'inline', margin: '0 1rem' }}>圖書館首頁</a>
                                <a href="/articles" className={styles.link} style={{ display: 'inline', margin: '0 1rem' }}>秘術文典</a>
                                <a href="/tools" className={styles.link} style={{ display: 'inline', margin: '0 1rem' }}>實踐工具</a>
                                <a href="/faq" className={styles.link} style={{ display: 'inline', margin: '0 1rem' }}>關於/FAQ</a>
                            </nav>
                        </div>
                    </div>
                </header>
                {children}
                <footer style={{ background: '#080808', borderTop: '1px solid #2a2216', padding: '4rem 0', marginTop: '6rem' }}>
                    <div className={styles.container} style={{ textAlign: 'center', color: '#4a3f2f' }}>
                        <p>知識即是力量。© {new Date().getFullYear()} ARCANE ARCHIVE</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}

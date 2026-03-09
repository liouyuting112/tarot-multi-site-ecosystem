import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import { getSiteConfig } from '@/lib/strapi';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['800'] });

export async function generateMetadata() {
    const config = await getSiteConfig('SiteB');
    return {
        title: config?.seo_default_title || 'Modern Tarot | 現代生活的心靈導航',
        description: config?.seo_default_desc || '用最簡約、理性的方式理解塔羅。每日生活指引與情緒覺察。',
    };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const config = await getSiteConfig('SiteB');
    return (
        <html lang="zh-TW">
            <body className={inter.className}>
                <Script id="ga-init-b" strategy="afterInteractive">
                    {`
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                        ga('create', '${config?.google_analytics_id || 'UA-XXXXX-Y'}', 'auto');
                        ga('send', 'pageview');
                    `}
                </Script>
                <header className="bg-white border-b border-gray-100 py-6 sticky top-0 z-50">
                    <div className="container mx-auto px-6 flex justify-between items-center">
                        <h1 className={`${montserrat.className} text-xl tracking-tighter`}>MODERN<span className="text-pink-400">TAROT</span></h1>
                        <nav className="flex space-x-10 text-xs font-bold uppercase tracking-widest text-gray-400">
                            <a href="/" className="text-gray-900">首頁</a>
                            <a href="/tools/daily-draw" className="hover:text-gray-900 transition-colors">每日一抽</a>
                            <a href="/articles" className="hover:text-gray-900 transition-colors">專欄報導</a>
                            <a href="/faq" className="hover:text-gray-900 transition-colors">關於/FAQ</a>
                        </nav>
                    </div>
                </header>
                <main className="container mx-auto px-6 py-12">
                    {children}
                </main>
                <footer className="bg-gray-100 py-12 mt-20 text-center text-xs text-gray-500 font-medium">
                    <p>© {new Date().getFullYear()} MODERN TAROT. ALL RIGHTS RESERVED.</p>
                </footer>
            </body>
        </html>
    );
}

import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    title: '靈啟塔羅 (Oracle Tarot) | 探索靈魂的深度指引',
    description: '專業塔羅占卜、牌陣解析與每日運勢指引。結合古老智慧與現代心靈成長，為您揭開命運的紗幕。',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-TW" className={`${playfair.variable} ${inter.variable}`}>
            <body className="font-serif">
                <header className="fixed w-full top-0 z-50 mystic-card border-b border-gold-500/20">
                    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                        <div className="text-3xl font-bold gold-text tracking-widest">靈啟塔羅</div>
                        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-sans">
                            <a href="#" className="hover:text-gold-500 transition-colors">每日占卜</a>
                            <a href="#" className="hover:text-gold-500 transition-colors">牌意百科</a>
                            <a href="#" className="hover:text-gold-500 transition-colors">專欄文章</a>
                            <a href="#" className="hover:text-gold-500 transition-colors">FAQ</a>
                        </nav>
                    </div>
                </header>
                <main className="pt-24 min-h-screen">
                    {children}
                </main>
                <footer className="mystic-card py-12 border-t border-gold-500/20 mt-20">
                    <div className="container mx-auto px-6 text-center">
                        <p className="gold-text mb-4 tracking-widest text-lg">探尋未知，啟迪心靈</p>
                        <p className="text-slate-400 text-xs font-sans">© {new Date().getFullYear()} Oracle Tarot. All Rights Reserved.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}

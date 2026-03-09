import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/strapi";
import Script from "next/script";

const orbitron = Orbitron({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig('SiteA');
  return {
    title: config?.seo_default_title || "Tech Tarot | 數據驅動的命運邏輯",
    description: config?.seo_default_desc || "當古老智慧遇上量子機率。利用數據分析與現代視覺重新定義塔東牌面。",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig('SiteA');
  return (
    <html lang="zh-TW" className="dark">
      <body className={`${inter.className} bg-black text-zinc-100 antialiased`}>
        {/* Dynamic GA Script */}
        <Script id="ga-init" strategy="afterInteractive">
          {`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', '${config?.google_analytics_id || 'UA-XXXXX-Y'}', 'auto');
            ga('send', 'pageview');
          `}
        </Script>
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className={`${orbitron.className} text-2xl font-black tracking-widest text-cyan-400`}>
              TECH<span className="text-white">TAROT_</span>
            </div>
            <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em]">
              <a href="/" className="hover:text-cyan-400 transition-colors">System.Main</a>
              <a href="/tools" className="hover:text-cyan-400 transition-colors">Logic.Tools</a>
              <a href="/articles" className="hover:text-cyan-400 transition-colors">Data.Articles</a>
              <a href="/faq" className="hover:text-cyan-400 transition-colors">Core.FAQ</a>
            </nav>
          </div>
        </header>
        <main className="pt-20">
          {children}
        </main>
        <footer className="py-20 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 text-xs tracking-widest">
            <p>© {new Date().getFullYear()} TECH TAROT SYSTEM. QUANTUM ENCRYPTED.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

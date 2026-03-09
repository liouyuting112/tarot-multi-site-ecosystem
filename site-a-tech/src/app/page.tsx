import { Orbitron } from "next/font/google";
import { getArticles, getSiteConfig } from "@/lib/strapi";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"] });

export default async function Home() {
  const articles = await getArticles('SiteA');
  const config = await getSiteConfig('SiteA');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent)]" />
        <div className="relative z-10 text-center px-6">
          <div className="inline-block px-3 py-1 mb-6 border border-cyan-500/30 bg-cyan-500/10 rounded-full text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase">
            {config?.google_analytics_id ? `Active_Sensor: ${config.google_analytics_id}` : 'Protocol: Vision 2.0'}
          </div>
          <h1 className={`${orbitron.className} text-5xl md:text-8xl font-black mb-6 tracking-tighter`}>
            {config?.seo_default_title?.split(' - ')[0] || '命中註定的'}<br />
            <span className="text-cyan-400">{config?.seo_default_title?.split(' - ')[1] || '數據邏輯'}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg mb-12">
            {config?.seo_default_desc || '我們將傳統牌義轉化為高維度機率模型。不只是佔卜，而是對生命流向進行全方位的系統模擬。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/daily-draw" className="px-10 py-4 bg-cyan-500 text-black font-black text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all rounded-sm">
              即刻運算今日運勢
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Data */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className={`${orbitron.className} text-3xl font-bold mb-2`}>近期日誌_</h2>
            <p className="text-zinc-500">最新的跨度分析與符號解碼記事</p>
          </div>
          <Link href="/articles" className="text-xs font-bold text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 pb-1">VIEW_ALL_LOGS</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article: any) => (
            <Link key={article.id} href={`/articles/${article.slug}`} className="group cursor-pointer border border-zinc-800 p-8 hover:bg-zinc-900/50 transition-all hover:border-cyan-500/50">
              <div className="text-[10px] text-zinc-500 mb-4 tracking-widest">LOG_ID: {article.documentId?.slice(0, 8).toUpperCase()}_TECH</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{article.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {article.excerpt || article.content?.slice(0, 100) + '...'}
              </p>
              <div className="text-cyan-400 text-xs font-bold tracking-tighter">READ_MORE +</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

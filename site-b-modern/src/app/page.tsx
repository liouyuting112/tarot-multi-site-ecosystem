import { getArticles, getSiteConfig } from "@/lib/strapi";
import Link from "next/link";

export default async function Home() {
    const articles = await getArticles('SiteB');
    const config = await getSiteConfig('SiteB');

    return (
        <div className="space-y-24">
            {/* Search Ranking Section (H1) */}
            <section className="max-w-4xl mx-auto text-center py-20">
                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                    {config?.seo_default_title?.split(' - ')[0] || '生活不需要預知'}<br />
                    但需要 <span className="text-pink-400 underline decoration-pink-100 underline-offset-8">
                        {config?.seo_default_title?.split(' - ')[1] || '被覺察'}
                    </span>
                </h1>
                <p className="text-lg text-gray-500 mb-12 font-medium">
                    {config?.seo_default_desc || '我們不談怪力亂神。透過塔羅牌圖象，我們引導您對話內在狀態，重新定義每日的生活重心。'}
                </p>
                <div className="flex justify-center gap-6 text-sm font-bold">
                    <Link href="/tools/daily-draw" className="bg-gray-900 text-white px-8 py-4 rounded-full shadow-xl shadow-gray-200 hover:-translate-y-1 transition-all">
                        開始今日覺察
                    </Link>
                </div>
            </section>

            {/* Featured Articles with Images */}
            <section>
                <div className="flex justify-between items-end mb-8 border-b-2 border-gray-50 pb-4">
                    <h2 className="text-sm font-black uppercase tracking-widest text-pink-400">精選專欄 Articles</h2>
                    <Link href="/articles" className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors">查看全部報導</Link>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {articles.map((article: any, i: number) => (
                        <Link key={article.id} href={`/articles/${article.slug}`} className="card-hover group cursor-pointer block">
                            <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-sm bg-pink-50 flex items-center justify-center">
                                {/* Using a placeholder or generated image if article.image is missing */}
                                <img src={`https://images.unsplash.com/photo-${1506126613408 + i}-eca07ce68773?q=80&w=800&auto=format&fit=crop`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={article.title} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-pink-400 transition-colors">{article.title}</h3>
                            <p className="text-sm text-gray-400 line-clamp-2">
                                {article.excerpt || article.content?.slice(0, 100) + '...'}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Authority Section with dynamic FAQ could be added here if globally relevant */}
        </div>
    );
}

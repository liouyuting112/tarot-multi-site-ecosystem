import { Orbitron } from "next/font/google";
import { getArticleBySlug } from "@/lib/strapi";
import { notFound } from "next/navigation";

const orbitron = Orbitron({ subsets: ["latin"] });

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-24">
            <div className="text-cyan-500 text-[10px] font-bold mb-4 tracking-[0.2em] uppercase">
                Log.Entry: {article.slug} / ID: {article.documentId?.slice(0, 8)}
            </div>
            <h1 className={`${orbitron.className} text-3xl md:text-5xl font-bold mb-12 leading-tight uppercase`}>
                {article.title}
            </h1>
            <div className="prose prose-invert prose-cyan mb-24 max-w-none">
                <p className="text-zinc-300 leading-loose whitespace-pre-wrap">
                    {article.content}
                </p>
            </div>

            {/* AI-SEO Optimized FAQ Section */}
            {article.faq_schema && article.faq_schema.length > 0 && (
                <section className="mt-20 border-t border-zinc-800 pt-20">
                    <h2 className={`${orbitron.className} text-2xl font-bold mb-10 text-cyan-400`}>
                        SYSTEM_FAQ // 常見問題
                    </h2>
                    <div className="space-y-8">
                        {article.faq_schema.map((faq: any, index: number) => (
                            <div key={index} className="border border-zinc-900 p-6 bg-zinc-950/50">
                                <h3 className="text-white font-bold mb-4 flex gap-4">
                                    <span className="text-cyan-500 font-mono">Q{index + 1}.</span>
                                    {faq.q}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed pl-10 border-l border-zinc-800">
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

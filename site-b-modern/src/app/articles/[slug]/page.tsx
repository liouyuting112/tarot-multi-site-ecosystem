import { getArticleBySlug } from "@/lib/strapi";
import { notFound } from "next/navigation";

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <div className="mb-12">
                <span className="text-pink-400 font-bold uppercase tracking-widest text-xs">Lifestyle Archive</span>
                <h1 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">{article.title}</h1>
                <p className="text-gray-400 font-medium">發布於 {new Date(article.publishedAt).toLocaleDateString('zh-TW')}</p>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none mb-20 leading-loose">
                <p className="whitespace-pre-wrap">{article.content}</p>
            </div>

            {/* AI-Optimized FAQ Section */}
            {article.faq_schema && article.faq_schema.length > 0 && (
                <section className="bg-pink-50 rounded-3xl p-10 md:p-16">
                    <h2 className="text-2xl font-black mb-10 text-gray-900 border-b-2 border-pink-100 pb-4 inline-block">
                        常見問題解答 FAQ
                    </h2>
                    <div className="space-y-12">
                        {article.faq_schema.map((faq: any, index: number) => (
                            <div key={index} className="group">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex gap-3">
                                    <span className="text-pink-400">Q.</span>
                                    {faq.q}
                                </h3>
                                <p className="text-gray-500 font-medium leading-relaxed pl-7">
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

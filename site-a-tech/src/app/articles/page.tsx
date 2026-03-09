import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function ArticlesPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <h1 className={`${orbitron.className} text-4xl font-bold mb-12`}>DATA.STORAGE / 文章存檔</h1>
            <div className="grid md:grid-cols-2 gap-12">
                {/* List items */}
                <div className="p-8 border border-zinc-800 text-center text-zinc-600">
                    等待數據庫同步中...
                </div>
            </div>
        </div>
    );
}

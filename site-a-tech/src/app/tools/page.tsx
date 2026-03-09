import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function ToolsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <h1 className={`${orbitron.className} text-4xl font-bold mb-16 text-center`}>LOGIC.TOOLS / 實踐模組</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="/tools/daily-draw" className="group p-8 border border-zinc-800 hover:border-cyan-500/50 bg-zinc-900/20 transition-all">
                    <div className="text-cyan-500 mb-4 font-mono text-xs">MOD_01</div>
                    <h2 className={`${orbitron.className} text-xl font-bold mb-2`}>每日一抽</h2>
                    <p className="text-zinc-500 text-sm">執行今日機率矩陣分析。</p>
                </a>
                <a href="/tools/card-dictionary" className="group p-8 border border-zinc-800 hover:border-cyan-500/50 bg-zinc-900/20 transition-all">
                    <div className="text-cyan-500 mb-4 font-mono text-xs">MOD_02</div>
                    <h2 className={`${orbitron.className} text-xl font-bold mb-2`}>牌義庫</h2>
                    <p className="text-zinc-500 text-sm">檢索 78 組維度數據標籤。</p>
                </a>
                <a href="/tools/spread-reader" className="group p-8 border border-zinc-800 hover:border-cyan-500/50 bg-zinc-900/20 transition-all">
                    <div className="text-cyan-500 mb-4 font-mono text-xs">MOD_03</div>
                    <h2 className={`${orbitron.className} text-xl font-bold mb-2`}>牌陣解析</h2>
                    <p className="text-zinc-500 text-sm">高階多維度聯集系統預測。</p>
                </a>
            </div>
        </div>
    );
}

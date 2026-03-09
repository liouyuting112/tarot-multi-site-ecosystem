export default function ToolsPage() {
    return (
        <div className="py-12">
            <h1 className="text-4xl font-black mb-12 text-center">探索自我工具</h1>
            <div className="grid md:grid-cols-3 gap-8">
                <a href="/tools/daily-draw" className="block p-8 bg-pink-50 rounded-2xl hover:bg-pink-100 transition">
                    <h2 className="text-2xl font-bold mb-2">每日一抽</h2>
                    <p className="text-gray-600">透過單張牌卡釐清今日重心。</p>
                </a>
                <a href="/tools/card-dictionary" className="block p-8 bg-pink-50 rounded-2xl hover:bg-pink-100 transition">
                    <h2 className="text-2xl font-bold mb-2">塔羅牌義庫</h2>
                    <p className="text-gray-600">78 張牌卡的現代心理學詮釋。</p>
                </a>
                <a href="/tools/spread-reader" className="block p-8 bg-pink-50 rounded-2xl hover:bg-pink-100 transition">
                    <h2 className="text-2xl font-bold mb-2">牌陣解讀</h2>
                    <p className="text-gray-600">深入問題核心的多維度分析。</p>
                </a>
            </div>
        </div>
    );
}

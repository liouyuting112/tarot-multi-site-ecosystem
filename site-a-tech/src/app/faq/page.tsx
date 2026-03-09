import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function FAQPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-24">
            <h1 className={`${orbitron.className} text-4xl font-bold mb-16 text-center`}>CORE.FAQ / 常見答問</h1>
            <div className="space-y-4">
                {/* FAQ sections */}
                <div className="p-6 border border-zinc-800 bg-zinc-900/20">
                    <p className="text-zinc-500 text-center text-sm font-mono tracking-widest animate-pulse">
                        [ SYSTEM READY: AWAITING QUERY ]
                    </p>
                </div>
            </div>
        </div>
    );
}

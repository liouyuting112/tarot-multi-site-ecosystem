import React from 'react';

type AdBannerProps = {
    position: 'Top' | 'Sidebar' | 'Bottom' | 'ArticleMiddle';
    adData?: {
        image_url: string;
        link_url: string;
        ad_name: string;
    };
};

export default function AdBanner({ position, adData }: AdBannerProps) {
    if (!adData) return null; // 未傳入廣告資料則不顯示

    const layoutStyles = {
        Top: 'w-full max-w-[728px] h-[90px] mx-auto my-6',
        Bottom: 'w-full max-w-[728px] h-[90px] mx-auto my-8',
        Sidebar: 'w-[300px] h-[600px] my-4 sticky top-24',
        ArticleMiddle: 'w-full max-w-[600px] h-[250px] mx-auto my-10'
    };

    return (
        <div className={`${layoutStyles[position]} bg-slate-800/50 border border-slate-700/50 rounded flex items-center justify-center overflow-hidden transition-all hover:border-slate-500`}>
            <a href={adData.link_url} target="_blank" rel="noopener nofollow noreferrer" className="w-full h-full block">
                <img
                    src={adData.image_url}
                    alt={adData.ad_name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </a>
            {/* Fallback 若圖片載入失敗，我們可以在這裡顯示贊助文字或是骨架屏 */}
        </div>
    );
}

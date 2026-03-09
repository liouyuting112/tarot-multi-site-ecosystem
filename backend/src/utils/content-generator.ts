
export const tarotTemplates = {
    SiteA: {
        titles: [
            "量子糾纏與{card}的機率分佈分析",
            "數據核心報告：{card}在模擬環境下的非線性表現",
            "系統解碼：當{card}出現於核心運算迴路",
            "機率拓撲學：{card}對未來趨勢的數值投影"
        ],
        intros: [
            "根據最新的系統監測，{card} 展現出了一種強大的同步性擾動。透過粒子過濾算法，我們觀察到...",
            "在執行大阿爾克那機率模型測試時，{card} 的數據特徵超出了標準差範圍...",
            "本報告旨在重構 {card} 在數位命運矩陣中的邏輯鏈接。數據顯示其能量特徵正在與目前的 CPU 時鐘同步。"
        ],
        faq_questions: [
            "這項數據分析的置信區間是多少？",
            "如何處理 {card} 產出的異常數值？",
            "該模型是否支持多維度併發運算？",
            "為什麼系統會將 {card} 識別為關鍵斷點？"
        ]
    },
    SiteB: {
        titles: [
            "當你感到迷惘時：與{card}的一場溫暖對話",
            "每日覺察：{card}帶給你的微光啟示",
            "情緒微排毒：{card}教你放下執著",
            "簡單生活：從{card}中找回內心的平靜"
        ],
        intros: [
            "今天，讓我們一起靜下心來，感受 {card} 帶來的溫柔力量。有時候，最細微的變化就是最大的療癒...",
            "深呼吸，看著這張 {card}。現在的你，是否感覺到心跳與呼吸正漸漸平穩？這張牌想對你說...",
            "在忙碌的工作間隙，抽到 {card} 是一個讓我們重新對準內心頻率的絕佳契機。"
        ],
        faq_questions: [
            "如何將 {card} 的能量帶入今日的冥想？",
            "這張牌對我今天的人際關係有什麼建議？",
            "如果我對 {card} 感到不安，該怎麼辦？",
            "新手適合從 {card} 開始練習覺察嗎？"
        ]
    },
    SiteC: {
        titles: [
            "赫米斯秘典：論{card}與卡巴拉生命之樹的對應",
            "古籍考據：{card}在煉金術符號學中的隱喻",
            "透特之眼：深入解構{card}的密契主義背景",
            "神聖幾何：{card}牌陣中的黃金分割點探析"
        ],
        intros: [
            "在克勞利的密典記載中，{card} 不僅是視覺的投影，更是通往深淵邊緣的門戶。其對應的希伯來字母為...",
            "研究者普遍認為，{card} 的構圖深受 17 世紀玫瑰十字會教義的影響。當我們審視其細節...",
            "本研究旨在揭示 {card} 背後的煉金過程。從鉛到金的轉化，正如同該牌面所揭示的靈魂昇華。"
        ],
        faq_questions: [
            "這與黃金黎明協會的傳統解讀有何出入？",
            "{card} 對應的元素屬性如何影響儀式魔法？",
            "在塔羅占星術中，{card} 被賦予哪種行星能量？",
            "如何辨別不同版本古籍中對 {card} 的記錄差異？"
        ]
    }
};

export async function generateRandomArticle(siteId: 'SiteA' | 'SiteB' | 'SiteC', tarotCards: any[]) {
    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    const template = tarotTemplates[siteId];

    const title = template.titles[Math.floor(Math.random() * template.titles.length)].replace('{card}', card.name);
    const intro = template.intros[Math.floor(Math.random() * template.intros.length)].replace('{card}', card.name);

    // Simulating deep content generation
    const content = `${intro}\n\n這張牌在這一刻的出現，代表著一種深層的聯繫。透過對其牌面符號的進一步剖析，我們可以看到：\n\n1. 基於其「${card.keywords[0]}」的特性，這是一個轉變的起點。\n2. 在目前的大環境下，${card.name} 提醒我們注意內在的平衡。\n3. 最重要的是，其對應的${card.meaningUpright?.slice(0, 50)}... 為我們提供了具體的行動指引。\n\n不論您目前的處境如何，請記住命運始終握在您的覺察之中。`;

    const faq = template.faq_questions.slice(0, 5).map(q => ({
        q: q.replace('{card}', card.name),
        a: `基於 ${card.name} 的能量與「${card.keywords.join('、')}」的屬性，我們建議您... (自動生成的深度解答)。`
    }));

    return {
        title,
        slug: `${siteId.toLowerCase()}-${card.nameEn.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
        content,
        excerpt: `${card.name} 的深度解析日誌。`,
        target_site: siteId,
        faq_schema: faq,
        publishedAt: new Date()
    };
}

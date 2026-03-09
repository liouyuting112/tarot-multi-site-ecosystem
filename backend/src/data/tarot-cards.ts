export interface TarotCard {
    id: string;
    name: string;
    nameEn: string;
    arcana: 'major' | 'minor';
    suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
    number: number;
    keywords: string[];
    meaningUpright: string;
    meaningReversed: string;
    element?: string;
}

export const tarotCards: TarotCard[] = [
    {
        id: '0-fool',
        name: '愚者',
        nameEn: 'The Fool',
        arcana: 'major',
        number: 0,
        keywords: ['新開始', '自發性', '信仰', '冒險', '純真'],
        meaningUpright: '代表勇氣、全新的開始以及潛能。這是一個提醒你跟隨直覺，開啟生命新篇章的時刻。',
        meaningReversed: '警示過於鲁莽、不負責任。可能存在還沒準備好就盲目衝動的情況。',
        element: '風'
    },
    {
        id: '1-magician',
        name: '魔術師',
        nameEn: 'The Magician',
        arcana: 'major',
        number: 1,
        keywords: ['展現', '資源', '能力', '意志力', '啟發'],
        meaningUpright: '你擁有所需的一切工具來實現你的目標。這是行動與創造力的展現時期。',
        meaningReversed: '代表被操縱、未開發的潛能或計畫的停滯。小心虛假的信息。',
        element: '風'
    },
    {
        id: '2-high-priestess',
        name: '女祭司',
        nameEn: 'The High Priestess',
        arcana: 'major',
        number: 2,
        keywords: ['直覺', '神聖女性', '潛意識', '神秘', '內在智慧'],
        meaningUpright: '向內看，信任你的直覺。有些事情隱藏在表面之下，需要冷靜觀察。',
        meaningReversed: '代表與直覺斷開、秘密洩露或沈溺於幻想。',
        element: '水'
    },
    {
        id: '3-empress',
        name: '皇后',
        nameEn: 'The Empress',
        arcana: 'major',
        number: 3,
        keywords: ['豐足', '母性', '自然', '滋養', '創造力'],
        meaningUpright: '象徵繁榮、和諧與美。這是一個孕育與生長的階段，不論是物質還是精神層面。',
        meaningReversed: '代表創造力受阻、過度依賴或忽視自我照料。',
        element: '土'
    },
    {
        id: '4-emperor',
        name: '皇帝',
        nameEn: 'The Emperor',
        arcana: 'major',
        number: 4,
        keywords: ['權威', '結構', '穩定', '父親形象', '保護'],
        meaningUpright: '代表秩序、紀律與堅定的領導。建立明確的界限與結構。',
        meaningReversed: '警示過度的控制、暴政或缺乏組織能力。',
        element: '火'
    },
    {
        id: '5-hierophant',
        name: '教皇',
        nameEn: 'The Hierophant',
        arcana: 'major',
        number: 5,
        keywords: ['傳統', '精神信仰', '教育', '符合社會規範', '指導'],
        meaningUpright: '追尋既有的路徑或導師的引導。代表體制內的智慧與傳統價值。',
        meaningReversed: '象徵叛逆、打破傳統或建立自己的信仰體系。',
        element: '土'
    },
    {
        id: '6-lovers',
        name: '戀人',
        nameEn: 'The Lovers',
        arcana: 'major',
        number: 6,
        keywords: ['愛', '和諧', '關係', '抉擇', '價值觀一致'],
        meaningUpright: '不僅是浪漫連結，更代表在重要路口做出的價值選擇。',
        meaningReversed: '代表失衡、價值衝突或關係中的不合。',
        element: '風'
    },
    {
        id: '7-chariot',
        name: '戰車',
        nameEn: 'The Chariot',
        arcana: 'major',
        number: 7,
        keywords: ['意志', '成功', '決斷力', '控制', '行動力'],
        meaningUpright: '憑藉堅強的意志力戰勝挑戰，向目標全速前進。',
        meaningReversed: '警示失去控制、動力不足或障礙難以克服。',
        element: '水'
    },
    {
        id: '8-strength',
        name: '力量',
        nameEn: 'Strength',
        arcana: 'major',
        number: 8,
        keywords: ['勇氣', '內在力量', '耐心', '同情心', '自控'],
        meaningUpright: '優雅地處理困難，用內在的柔韌而非暴力去征服。',
        meaningReversed: '代表軟弱、過度情緒化或對自我的懷疑。',
        element: '火'
    },
    {
        id: '9-hermit',
        name: '隱士',
        nameEn: 'The Hermit',
        arcana: 'major',
        number: 9,
        keywords: ['省思', '孤獨', '尋求真理', '引導', '內省'],
        meaningUpright: '退後一步，尋求獨處以獲得清晰的思緒。聽從內心的聲音。',
        meaningReversed: '警示過度孤立、固執或逃避現實。',
        element: '土'
    },
    {
        id: '10-wheel-of-fortune',
        name: '命運之輪',
        nameEn: 'Wheel of Fortune',
        arcana: 'major',
        number: 10,
        keywords: ['轉變', '週期', '命運', '決策點', '業力'],
        meaningUpright: '生命在循環，好運即將到來。接受你無法控制的改變。',
        meaningReversed: '代表倒楣、抵抗改變或感到生命停滯。',
        element: '火'
    },
    {
        id: '11-justice',
        name: '正義',
        nameEn: 'Justice',
        arcana: 'major',
        number: 11,
        keywords: ['正義', '公平', '真理', '因果規律', '法律'],
        meaningUpright: '真相大白，公正的裁決。你需要承擔自己的選擇帶來的後果。',
        meaningReversed: '代表不公、法律糾紛或拒絕承擔責任。',
        element: '風'
    },
    {
        id: '12-hanged-man',
        name: '倒吊人',
        nameEn: 'The Hanged Man',
        arcana: 'major',
        number: 12,
        keywords: ['暫停', '犧牲', '新視角', '放手', '等待'],
        meaningUpright: '這是一個停頓期，迫使你從不同角度看世界。暫時的犧牲將換來智慧。',
        meaningReversed: '代表拖延、掙扎或不必要的犧牲。',
        element: '水'
    },
    {
        id: '13-death',
        name: '死神',
        nameEn: 'Death',
        arcana: 'major',
        number: 13,
        keywords: ['終結', '轉化', '過渡', '放下', '重生'],
        meaningUpright: '舊事物的必然結束，為新生命讓路。這是一個深刻的轉型期。',
        meaningReversed: '代表恐懼改變、困在前進不得的局面中。',
        element: '水'
    },
    {
        id: '14-temperance',
        name: '節制',
        nameEn: 'Temperance',
        arcana: 'major',
        number: 14,
        keywords: ['平衡', '適度', '耐心', '融合', '目的'],
        meaningUpright: '尋求中庸之道，將對立的力量和諧融合。耐心是成功的關鍵。',
        meaningReversed: '代表失衡、過度、缺乏遠見。',
        element: '火'
    },
    {
        id: '15-devil',
        name: '惡魔',
        nameEn: 'The Devil',
        arcana: 'major',
        number: 15,
        keywords: ['束縛', '物質主義', '沈溺', '影子自我', '限制'],
        meaningUpright: '你對物質、欲望或恐懼感到束縛。意識到是你自己拿著鑰匙。',
        meaningReversed: '代表在打破連鎖、釋放沈溺、找回自由。',
        element: '土'
    },
    {
        id: '16-tower',
        name: '高塔',
        nameEn: 'The Tower',
        arcana: 'major',
        number: 16,
        keywords: ['突發變故', '災難', '劇變', '啟示', '覺醒'],
        meaningUpright: '根基不穩的事物會崩塌。雖然痛苦，但這破碎是為了重建真實。',
        meaningReversed: '代表避開災難、延遲必然的變更。',
        element: '火'
    },
    {
        id: '17-star',
        name: '星星',
        nameEn: 'The Star',
        arcana: 'major',
        number: 17,
        keywords: ['希望', '信心', '靈感', '療癒', '更新'],
        meaningUpright: '在黑暗之後看見希望的光芒。這是一個療癒與重新連結靈魂的時刻。',
        meaningReversed: '代表失望、失去信心、感到迷失。',
        element: '風'
    },
    {
        id: '18-moon',
        name: '月亮',
        nameEn: 'The Moon',
        arcana: 'major',
        number: 18,
        keywords: ['幻象', '恐懼', '焦慮', '潛意識', '直覺'],
        meaningUpright: '事情並非如表面所見。在迷霧中前行，信任感官以外的直覺。',
        meaningReversed: '代表真相大白、恐懼消失、內在混亂平息。',
        element: '水'
    },
    {
        id: '19-sun',
        name: '太陽',
        nameEn: 'The Sun',
        arcana: 'major',
        number: 19,
        keywords: ['成功', '溫暖', '喜悅', '活力', '信賴'],
        meaningUpright: '充滿能量與正向力。成就與快樂伴隨而來。',
        meaningReversed: '代表挫折、悲觀，但陽光依然在雲層後。',
        element: '火'
    },
    {
        id: '20-judgement',
        name: '審判',
        nameEn: 'Judgement',
        arcana: 'major',
        number: 20,
        keywords: ['呼喚', '覺醒', '再生', '反省', '寬恕'],
        meaningUpright: '聽從靈魂的召喚，對過去進行結算並邁向新的高度。',
        meaningReversed: '代表自我懷疑、忽視呼鳴、遲疑不決。',
        element: '火'
    },
    {
        id: '21-world',
        name: '世界',
        nameEn: 'The World',
        arcana: 'major',
        number: 21,
        keywords: ['完成', '整合', '成就', '旅行', '圓滿'],
        meaningUpright: '一個周期的完美結束。你已經達到了和諧與成功的頂峰。',
        meaningReversed: '代表缺乏圓滿、捷徑失敗、停在終點前。',
        element: '土'
    }
];

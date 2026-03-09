import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const token = request.headers.get('Authorization');

        // N8N 必須在 Header 傳送我們設定的 Secret Token
        if (token !== `Bearer ${process.env.REVALIDATE_SECRET}`) {
            return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
        }

        // 檢查 N8N 傳來的 Payload (如：Strapi webhook 的 model name)
        const { model, entry } = data;

        if (model === 'article') {
            // 若文章更新，清除首頁或特定文章頁的快取
            if (entry?.slug) {
                revalidatePath(`/article/${entry.slug}`);
            }
            revalidatePath('/'); // 同時重新生成首頁
            return NextResponse.json({ revalidated: true, now: Date.now() });
        }

        if (model === 'ad-banner') {
            // 廣告更新，清除所有文章與首頁
            revalidateTag('ads');
            revalidatePath('/', 'layout');
            return NextResponse.json({ revalidated: true, message: 'Ads updated', now: Date.now() });
        }

        return NextResponse.json({ revalidated: false, message: 'Unknown model' });
    } catch (err) {
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}

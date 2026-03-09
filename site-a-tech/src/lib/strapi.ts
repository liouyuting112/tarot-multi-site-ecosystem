export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchStrapi(endpoint: string, query?: Record<string, any>) {
    const queryString = query ? '?' + new URLSearchParams(query).toString() : '';
    const res = await fetch(`${STRAPI_URL}/api/${endpoint}${queryString}`, {
        next: { revalidate: 3600 } // Default revalidate 1 hour
    });
    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    return res.json();
}

export async function getArticles(siteId: string) {
    const data = await fetchStrapi('articles', {
        'filters[target_site][$eq]': siteId,
        'populate': '*'
    });
    return data.data;
}

export async function getArticleBySlug(slug: string) {
    const data = await fetchStrapi('articles', {
        'filters[slug][$eq]': slug,
        'populate': '*'
    });
    return data.data?.[0];
}

export async function getSiteConfig(siteId: string) {
    const data = await fetchStrapi('site-configs', {
        'filters[site_id][$eq]': siteId
    });
    return data.data?.[0];
}

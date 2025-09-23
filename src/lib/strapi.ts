import type { BlogPost, BlogResponse } from '@/types/blog';
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337' ;
const API_TOKEN = process.env.STRAPI_API_TOKEN || '8e7dda09c7d5d99c2f05438be1954f8f889eae9fd677f6b8c48870e0b784f10dfa064dc93f343d01aa4077558596064b7e9d99012ac7292aea4af998d98c9d59b442b204f867cab9a35531ce138a1e5dbf6e9929207789f8690016dfe9a35a5e1de6dfc8aebd3ae7c3ea3c774c07fb0f81eee95b0b3de94ec22966c0a8977bab';
if (!API_TOKEN) {
    console.warn('⚠️ STRAPI_API_TOKEN is not set; Strapi calls may fail at build/revalidate.');
}
export async function sFetch<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(`${STRAPI_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
            ...(options?.headers || {}),
        },
        ...options,
        cache: 'no-store',

    });

    if (!res.ok) {
        throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
    }

    return res.json();
}
export async function getBlogs(page = 1, pageSize = 10): Promise<BlogResponse> {
    return sFetch<BlogResponse>(
        `/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
    );
}
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const q = new URLSearchParams();
    q.set('filters[slug][$eq]', slug);
    q.set('populate', '*');

    const data = await sFetch<BlogResponse>(`/api/blogs?${q.toString()}`);
    return (data.data?.[0] as BlogPost) ?? null;
}
export async function getLatestSlugs(limit = 50): Promise<string[]> {
    const data = await sFetch<any>(
        `/api/blogs?fields=slug&pagination[page]=1&pagination[pageSize]=${limit}&sort=publishedAt:desc`
    );
    return (data.data ?? []).map((x: any) => x?.attributes?.slug ?? x?.slug).filter(Boolean);
}
export async function fetchBlogs(page = 1, pageSize = 10): Promise<{ data: BlogResponse['data']; pagination: BlogResponse['meta']['pagination'] }> {
    if (!STRAPI_URL || !API_TOKEN) {
        console.error('Missing environment variables for Strapi');
        return {
            data: [],
            pagination: { page: 1, pageSize, pageCount: 0, total: 0 },
        };
    }
    const apiUrl = `${STRAPI_URL}/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;

    try {
        const res = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            console.error('Failed to fetch blogs:', res.status);
            return {
                data: [],
                pagination: { page, pageSize, pageCount: 0, total: 0 },
            };
        }

        const data: BlogResponse = await res.json();

        return {
            data: data.data || [],
            pagination: data.meta?.pagination || { page, pageSize, pageCount: 0, total: 0 },
        };
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return {
            data: [],
            pagination: { page, pageSize, pageCount: 0, total: 0 },
        };
    }
}
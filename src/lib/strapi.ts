import type { BlogPost, BlogResponse } from '@/types/blog';
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337' ;
const API_TOKEN = process.env.STRAPI_API_TOKEN;
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
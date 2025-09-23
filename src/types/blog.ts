export interface MediaFormat {
    url: string;
    width: number;
    height: number;
}

export interface Media {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    width: number;
    height: number;
    formats: {
        thumbnail?: MediaFormat;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    provider: string;
    provider_metadata: any;
    previewUrl: string | null;
}

export interface BlogPost {
    id: number;
    documentId: string;
    attributes: {
        title: string;
        slug: string;
        author: string;
        date: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        media: {
            data: Array<{
                id: number;
                attributes: {
                    name: string;
                    url: string;
                    mime: string;
                    size: number;
                };
            }>;
        };
        excerpt: Array<{
            type: string;
            children: Array<{ text: string; type?: string }>;
        }>;
        tags: string[];
        content: Array<{
            type: string;
            children: Array<{ text: string; type?: string }>;
        }>;
    };
}

export interface BlogResponse {
    data: BlogPost[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
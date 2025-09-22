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
    title: string;
    slug: string;
    author: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    media: Media[];
    excerpt: {
        children: { text: string }[];
    }[];
    tags: string[];
    content:{
        children: { text: string; }[]
        type:string;
    }[];
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

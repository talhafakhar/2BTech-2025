export interface FeaturedImage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: string;
    created_at: string;
    updated_at: string;
    published_at: string;
}

export interface Formats {
    thumbnail: Format;
    small: Format;
    medium: Format;
    large: Format;
}

export interface Format {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}
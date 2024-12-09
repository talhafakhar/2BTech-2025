import {Formats} from "@/interfaces/featuredImage";

export const getFullImageUrl = (path: string): string => {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || '';
    return `${baseUrl}${path}`;
};

export const getImageUrlWithPriority = (formats: Formats): string => {
    if (!formats) return '';

    const priorityOrder: (keyof Formats)[] = ['small', 'medium', 'large', 'thumbnail'];

    for (const key of priorityOrder) {
        if (formats[key]?.url) {
            return formats[key].url;
        }
    }

    return '';
};


export const getFullImageUrl = (path: string): string => {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || '';
    return `${baseUrl}${path}`;
};

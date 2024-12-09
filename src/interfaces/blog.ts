import {FeaturedImage} from "@/interfaces/featuredImage";
import {Category} from "@/interfaces/category"
import {Tag} from "@/interfaces/tag";
import {DynamicContent} from "@/interfaces/dynamicContent";

export interface Blog {
    id: number;
    documentId: string;
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    featured_image: FeaturedImage[],
    categories: Category[],
    tags: Tag[],
    dynamic_content: DynamicContent[],
}
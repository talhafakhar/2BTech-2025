import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from "@/types/blog";
import { ArrowRight, Calendar, Eye } from "lucide-react";

interface BlogCardProps {
    blog: BlogPost;
    id: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, id }) => {
    const imageUrl = blog.attributes.media?.data?.[0]?.attributes?.url;
    const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}` : null;
    const imageAlt = blog.attributes.title;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2"
            style={{ animation: `fadeInUp 0.6s ease-out ${id * 0.1}s both` }}
        >
            <div>
                {fullImageUrl && (
                    <div className="relative overflow-hidden rounded-lg h-64">
                        <div
                            className="absolute inset-0 bg-cover bg-center filter blur-[4px] scale-105"
                            style={{ backgroundImage: `url(${fullImageUrl})` }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/30 to-gray-900/40 z-10" />

                        <div className="relative h-full z-20">
                            <Image
                                src={fullImageUrl}
                                alt={imageAlt}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105 rounded-lg"
                            />
                        </div>

                        <div className="absolute top-4 right-4 z-30">
                            <Link
                                href={`/blogs/${blog.attributes.slug}`}
                                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <Eye size={16} className="text-white" />
                            </Link>
                        </div>
                    </div>
                )}

                <div className="p-4 space-y-2">
                    <div className="flex flex-wrap gap-2">
                        {blog.attributes.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="border border-black px-3 py-0.5 rounded text-xs font-semibold"
                            >
                                #{tag.trim()}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold text-secondary leading-tight line-clamp-2">
                        {blog.attributes.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {blog.attributes.excerpt
                            .map((block) => block.children.map((child) => child.text).join(" "))
                            .join(" ")}
                    </p>
                </div>

                <div className="px-4 pb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span className="font-medium">{formatDate(blog.attributes.date)}</span>
                    </div>

                    <Link
                        href={`/blogs/${blog.attributes.slug}`}
                        className="group/btn flex items-center gap-2 text-sm font-semibold text-black hover:text-primary transition-colors duration-300"
                    >
                        <span>Read More</span>
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover/btn:bg-primary transition-all duration-300 group-hover/btn:scale-110">
                            <ArrowRight
                                size={14}
                                className="text-white group-hover/btn:translate-x-0.5 transition-transform duration-300"
                            />
                        </div>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default BlogCard;

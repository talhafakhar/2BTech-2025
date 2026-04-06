import type { GetStaticProps } from 'next';
import Footer from '@/components/Footer/footer';
import BlogList from '@/components/Blog/BlogList';
import { getBlogs } from '@/lib/strapi';
import type { BlogResponse } from '@/types/blog';
import React from "react";
import BlogNavbar from "@/components/Blog/BlogHeader";
import { BreadcrumbJsonLd, NextSeo, WebPageJsonLd } from "next-seo";

type Props = {
    initialBlogs: BlogResponse['data'];
    pagination: BlogResponse['meta']['pagination'];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const page = 1;
    const pageSize = 10;
    const data = await getBlogs(page, pageSize);

    return {
        props: {
            initialBlogs: data.data,
            pagination: data.meta.pagination,
        },
        revalidate: 300,
    };
};

export default function BlogsIndex({ initialBlogs, pagination }: Props) {
    return (
        <>
            <NextSeo
                title="Blogs | 2BTech"
                description="Explore the latest blogs, insights, and expert articles from 2BTech on software development, AI agents, SaaS, product engineering, and digital transformation."
                canonical="https://2btechinc.com/blogs"
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "2BTech blogs, software development blog, AI agent blog, SaaS insights, product engineering articles, tech blog",
                    },
                    { property: "dc:creator", content: "2BTech" },
                    { name: "author", content: "2BTech" },
                    { name: "robots", content: "index, follow" },
                ]}
                openGraph={{
                    type: "website",
                    url: "https://2btechinc.com/blogs",
                    title: "Blogs | 2BTech",
                    description:
                        "Explore the latest blogs, insights, and expert articles from 2BTech on software development, AI agents, SaaS, product engineering, and digital transformation.",
                    images: [
                        {
                            url: "https://2btechinc.com/images/og-image.jpg",
                            width: 1200,
                            height: 630,
                            alt: "Blogs | 2BTech",
                        },
                    ],
                    site_name: "2BTech",
                }}
                twitter={{
                    handle: "@2btech",
                    site: "@2btech",
                    cardType: "summary_large_image",
                }}
            />

            <WebPageJsonLd
                id="https://2btechinc.com/blogs#webpage"
                url="https://2btechinc.com/blogs"
                name="Blogs | 2BTech"
                description="Explore the latest blogs, insights, and expert articles from 2BTech on software development, AI agents, SaaS, product engineering, and digital transformation."
            />

            <BreadcrumbJsonLd
                itemListElements={[
                    {
                        position: 1,
                        name: "Home",
                        item: "https://2btechinc.com/",
                    },
                    {
                        position: 2,
                        name: "Blogs",
                        item: "https://2btechinc.com/blogs",
                    },
                ]}
            />

            <BlogNavbar />

            <main className="min-h-screen pt-24 relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <BlogList
                        initialBlogs={initialBlogs}
                        pagination={pagination}
                        currentPage={1}
                    />
                </div>
            </main>

            <Footer />
        </>
    );
}
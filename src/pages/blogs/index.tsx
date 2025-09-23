import type { GetStaticProps } from 'next';
import Footer from '@/components/Footer/footer';
import BlogList from '@/components/Blog/BlogList';
import { getBlogs } from '@/lib/strapi';
import type { BlogResponse } from '@/types/blog';
import React from "react";
import BlogNavbar from "@/components/Blog/BlogHeader";
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
            <BlogNavbar/>
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

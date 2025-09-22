import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {BlogPost} from '@/types/blog';
import BlogNavbar from "@/components/Blog/BlogHeader";
import {ArrowLeft} from "lucide-react";

interface BlogDetailProps {
    blog: BlogPost;
}

const BlogDetail: React.FC<BlogDetailProps> = ({blog}) => {
    const imageUrl = blog.media?.[0]?.url;
    const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}` : null;

    const formatDate = (iso: string) =>
        new Date(iso).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});

    const fadeInUp = {
        initial: {opacity: 0, y: 60},
        animate: {opacity: 1, y: 0},
        transition: {duration: 0.6, ease: 'easeOut'}
    };
    const staggerContainer = {animate: {transition: {staggerChildren: 0.1}}};

    if (!blog) {
        return (
            <div className="min-h-screen">
                <BlogNavbar/>
                <motion.div className="container mx-auto px-4 py-32 text-center" initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}>
                    <div className="max-w-md mx-auto">
                        <div
                            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold  mb-4">Blog Not Found</h1>
                        <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist or
                            may have been moved.</p>
                        <Link href="/blogs"
                              className="group relative inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-secondary text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                        >
                                 <span
                                     className="mr-4 inline-flex w-8 h-8 rounded-full bg-white text-primary items-center justify-center transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12"
                                 >
    <ArrowLeft className="w-4 h-4"/>
  </span>
                            Back to List


                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }
    return (
        <div className="min-h-screen font-syne">
            <BlogNavbar/>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div
                    className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <motion.main className="relative z-10 pt-20 md:pt-32" variants={staggerContainer} initial="initial"
                         animate="animate">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <motion.header className="mb-12" variants={fadeInUp}>
                        <motion.div className="flex flex-wrap gap-3 mb-6" variants={fadeInUp}>
                            {blog.tags.map((tag, index) => (
                                <motion.span key={index}
                                             className="px-4 py-2 bg-white/80 backdrop-blur-sm border text-sm font-medium text-gray-700 rounded shadow-sm"
                                             whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                                    #{tag.trim()}
                                </motion.span>
                            ))}
                        </motion.div>
                        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                                   variants={fadeInUp}>
                            {blog.title}
                        </motion.h1>
                        <motion.div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
                                    variants={fadeInUp}>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm font-medium">Published {formatDate(blog.publishedAt)}</span>
                            </div>
                            {blog.updatedAt && blog.updatedAt !== blog.publishedAt && (
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-medium">Updated {formatDate(blog.updatedAt)}</span>
                                </div>
                            )}
                        </motion.div>
                        {blog.excerpt && (
                            <motion.p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl"
                                      variants={fadeInUp}>
                                {blog.excerpt.map((block) => block.children.map((child) => child.text).join(" ")).join(" ")}
                            </motion.p>
                        )}
                    </motion.header>
                    {fullImageUrl && (
                        <motion.div className="mb-16 group" variants={fadeInUp}>
                            <div
                                className="relative overflow-hidden rounded-3xl  shadow-2xl bg-white group h-[300px] md:h-[400px] lg:h-[500px]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center filter blur-[4px] scale-105"
                                    style={{backgroundImage: `url(${fullImageUrl})`}}
                                />
                                <div className="relative overflow-hidden rounded-2xl w-full h-full">
                                    <Image
                                        src={fullImageUrl}
                                        alt={blog.title}
                                        fill
                                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                        priority
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    <motion.article
                        className="max-w-none mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                <div className="mb-6 text-lg leading-relaxed">
                                    {blog.content.map((block: any, index: number) => {
                                        if (block.type === "paragraph") {
                                            return (
                                                <p key={index}>
                                                    {block.children.map((child: any, i: number) => {
                                                        if (child.type === "text") {
                                                            return <span key={i}>{child.text}</span>;
                                                        }
                                                        return null;
                                                    })}
                                                </p>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>

                            </motion.div>
                    </motion.article>

                    <motion.footer className="py-8 border-t border-gray-200/50" variants={fadeInUp}>
                        <div className="flex  items-center justify-between gap-6">
                            <Link href="/blogs"
                                  className="group relative inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-secondary text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                            >
                                 <span
                                     className="mr-4 inline-flex w-8 h-8 rounded-full bg-white text-primary items-center justify-center transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12"
                                 >
    <ArrowLeft className="w-4 h-4"/>
  </span>
                                Back to List


                            </Link>
                        </div>
                    </motion.footer>
                </div>
            </motion.main>
        </div>
    );
};

export default BlogDetail;

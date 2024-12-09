import {GetStaticProps} from 'next';
import Link from 'next/link';
import {Blog} from "@/interfaces/blog";
import {NextSeo} from "next-seo";
import Image from "next/image";
import {getFullImageUrl} from "@/helpers/helpers";

const BlogList = ({blogs}: { blogs: Blog[] }) => {
    return (
        <div>
            <NextSeo
                title="2BTech Blog - Insights on Software, Marketing, and SEO"
                description="Explore our blog for the latest insights, tips, and strategies in software development, marketing, and SEO."
                canonical="https://2btechinc.com/blog"
                openGraph={{
                    url: 'https://2btechinc.com/blog',
                    title: '2BTech Blog - Insights on Software, Marketing, and SEO',
                    description:
                        'Explore our blog for the latest insights, tips, and strategies in software development, marketing, and SEO.',
                    images: [
                        {
                            url: 'https://2btechinc.com/images/blog-og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: '2BTech Blog',
                        },
                    ],
                }}
                twitter={{
                    handle: '@2btechinc',
                    site: '@2btechinc',
                    cardType: 'summary_large_image',
                }}
            />
            <h1>Blog Listing</h1>
            <ul className="text-white">
                {blogs.map((blog, index) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.slug}`}>
                            <span>{blog.title}</span>
                            <Image
                                loading={index < 7 ? 'eager' : 'lazy'}
                                src={getFullImageUrl(blog.featured_image[0].formats.small.url)}
                                alt={blog.featured_image[0].alternativeText}
                                width={200}
                                height={200}
                            />
                            {/*image caption*/}
                            <span>{blog.featured_image[0].caption}</span>
                            <span>
                            Published on: {new Date(blog.publishedAt).toDateString()}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    // Fetch blogs from the Strapi API
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
        }
    });
    const data = await res.json();

    return {
        props: {
            blogs: data.data.map((item: Blog) => item),
        },
        revalidate: 60, // Revalidate every 60 seconds
    };
};

export default BlogList;

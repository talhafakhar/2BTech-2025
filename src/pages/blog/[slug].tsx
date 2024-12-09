import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {Blog} from "@/interfaces/blog";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import {ArticleJsonLd, NextSeo} from "next-seo";

const BlogDetail = ({blog}: { blog: Blog }) => {
    const router = useRouter();
    console.log(blog)
    const seoData = blog.dynamic_content?.find((content) => content.__component === 'shared.seo');
    const thumbnail = blog.featured_image?.find((image) => image.formats.thumbnail.url);
    // Fallback page handling
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className="text-white">
            {/* SEO Meta Tags */}
            <NextSeo
                title={`${blog.title} - 2BTech Blog`}
                description={seoData?.metaDescription}
                canonical={`https://2btechinc.com/blog/${blog.slug}`}
                openGraph={{
                    url: `https://2btechinc.com/blog/${blog.slug}`,
                    title: blog.title,
                    description: seoData?.metaDescription,
                    images: [
                        {
                            url: thumbnail?.url as string,
                            width: thumbnail?.width as number,
                            height: thumbnail?.height as number,
                            alt: blog.featured_image?.[0]?.alternativeText,
                        },
                    ],
                    article: {
                        publishedTime: blog.publishedAt,
                        modifiedTime: blog.updatedAt,
                        authors: ['https://2btechinc.com'],
                        tags: blog.tags?.map((tag) => tag.name),
                    },
                }}
                twitter={{
                    handle: '@2btechinc',
                    site: '@2btechinc',
                    cardType: 'summary_large_image',
                }}
            />

            {/* Structured Data */}
            <ArticleJsonLd
                url={`https://2btechinc.com/blog/${blog.slug}`}
                title={blog.title}
                images={[thumbnail?.url as string]}
                datePublished={blog.publishedAt}
                dateModified={blog.updatedAt}
                authorName={'2BTech Inc.'}
                publisherName="2BTech Inc."
                publisherLogo="https://2btechinc.com/assets/2btech_logo.svg"
                description={seoData?.metaDescription as string}
            />

            <h1>{blog.title}</h1>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]} // Allow raw HTML in Markdown
                className="prose prose-invert prose-lg max-w-none"
            >
                {blog.content}
            </ReactMarkdown>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    // Fetch slugs from the Strapi API
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
        }
    });
    const data = await res.json();

    const paths = data.data.map((blog: Blog) => ({
        params: {slug: blog.slug},
    }));

    return {
        paths, // Pre-render only these paths at build time
        fallback: 'blocking', // Other pages will be rendered on-demand
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug = params?.slug;

    // Fetch blog details from the Strapi API
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
        }
    });
    const data = await res.json();
    if (!data.data.length) {
        return {notFound: true}; // Return 404 if the blog doesn't exist
    }

    const blog = data.data[0];

    return {
        props: {
            blog: blog,
        },
        revalidate: 60, // Revalidate every 60 seconds
    };
};

export default BlogDetail;

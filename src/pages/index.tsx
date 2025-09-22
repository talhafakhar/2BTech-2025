import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/Home/heroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import WorkInNumbers from '@/components/Home/WorkInNumberSection';
import WorkFlow from '@/components/Home/OurWorkingProcessSection';
import Banner from "@/components/Home/bannerSection";
import IndustrySectors from "@/components/Home/IndustrySection";
import CTASection from "@/components/Home/CTASection";
import ClutchReviews from "@/components/Home/TestimonialSection";
import type {BlogResponse} from "@/types/blog";
import BlogCard from "@/components/Blog/BlogCard";
import React from "react";
import {motion} from "framer-motion";
import {GetStaticProps} from 'next';
import GrowthTeamSection from "@/components/Home/GrowthTeamSection";
import FaqSection from "@/components/Home/FaqSection";
import {fetchBlogs} from "@/lib/strapi";
import {FAQPageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd} from "next-seo";

type Props = {
    initialBlogs: BlogResponse['data'];
    pagination: BlogResponse['meta']['pagination'];
};
export const getStaticProps: GetStaticProps<Props> = async () => {
    const {data, pagination} = await fetchBlogs(1, 10);
    return {
        props: {
            initialBlogs: data,
            pagination,
        },
        revalidate: 3600,
    };
};
export default function Home({initialBlogs}: Props) {
    const blogs = initialBlogs;
    const faqs = [
        {
            id: 1,
            question: "How does 2BTech guarantee protection from cyber threats?",
            answer:
                "With our tried and tested cybersecurity solutions, 2BTech prides itself in being an ideal business IT solutions company to brand owners who want to expand their companies while prioritizing the safety of their data. Our system security experts are here to assist you around the clock."
        },
        {
            id: 2,
            question: "When can I expect a response to my query from the 2BTech team?",
            answer:
                "Our help desk is open for clients 24/7, 365 days a year. Call us directly at our number or write to us. You can expect a fast response from us within 24 hours of query submission."
        },
        {
            id: 3,
            question: "Are the experts at 2BTech familiar with AI?",
            answer:
                "Absolutely. We at 2BTech recognize the importance and usefulness of artificial intelligence in the tech industry. Our professionals know how to use it to your company’s advantage."
        },
        {
            id: 4,
            question: "Are the 2BTech professionals certified?",
            answer:
                "Yes! Our software experts hold certifications in providing cloud services and are able to successfully operate Java, Microsoft Office 365, Linux, Azure, VMware, AWS, and various MSP systems."
        },
        {
            id: 5,
            question: "What is the purpose of booking a short call with 2BTech?",
            answer:
                "A brief 15-minute discovery call with you will help us identify your organization’s requirements and goals. This essential step enables us to devise practical, custom-made services that fit your brand in the best possible way."
        }
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="2btech"
                description="2btech helps startups and enterprises turn bold ideas into scalable digital products — from strategy and design to full-stack development."
                canonical="https://2btech.com/"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    {name: 'keywords', content: ''},
                    {property: 'dc:creator', content: '2btech'},
                    {name: 'author', content: '2btech'},
                    {name: 'robots', content: 'index, follow'},
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://2btech.com/',
                    title: '2btech',
                    description: '2btech helps startups and enterprises turn bold ideas into scalable digital products — from strategy and design to full-stack development.',
                    images: [
                        {
                            url: 'https://2btech.com/images/og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: '2btech – ',
                        },
                    ],
                    site_name: '2btech',
                }}
                twitter={{
                    handle: '@2btech',
                    site: '@2btech',
                    cardType: 'summary_large_image',
                }}
            />
            <OrganizationJsonLd
                type="Organization"
                id="https://2btech.com/#organization"
                name="2btech"
                url="https://2btech.com/"
                logo="https://2btech.com/images/logo.png"
                sameAs={[
                    'https://www.facebook.com/2btech',
                    'https://twitter.com/2btech',
                    'https://www.linkedin.com/company/2btech/',
                ]}
                contactPoints={[
                    {
                        telephone: '+1-234-567-890',
                        contactType: 'Customer Service',
                        areaServed: 'US',
                        availableLanguage: ['English'],
                    },
                ]}
                address={{
                    streetAddress: '456 Strategy Avenue',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    postalCode: '10001',
                    addressCountry: 'US',
                }}
            />

            <WebPageJsonLd
                id="https://2btech.com/#webpage"
                url="https://2btech.com/"
                name="2btech – CMO, CTO & Sales Experts"
                description=" Access C-level marketing, sales, and tech leaders to scale faster, cut costs, and implement proven growth systems."
                potentialAction={{
                    target: 'https://2btech.com/?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <FAQPageJsonLd
                mainEntity={[
                    {
                        id: 1,
                        question: "What is your return policy?",
                        answer: "We offer a 30-day return policy for all unused items in their original packaging. Return shipping costs may apply for items returned without defect."
                    },
                    {
                        id: 2,
                        question: "How long does shipping take?",
                        answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 day delivery."
                    },
                    {
                        id: 3,
                        question: "Do you offer international shipping?",
                        answer: "Yes, we ship to most countries worldwide. International shipping times vary by location, typically 7-14 business days. Additional customs fees may apply."
                    },
                ]}
            />
            <HeroSection
                title="Transforming Ideas Into Tomorrow’s Solutions!"
            />
            <ServicesSection/>
            <WorkInNumbers/>
            <WorkFlow/>
            <Banner
                title="Ready to Elevate Your Brand? Let's Talk!"
                description="Schedule a free discovery call today and take the first step towards transforming your brand with us."
                src="/assets/Home/banner-bg.svg"
            />
            <ClutchReviews/>
            <IndustrySectors/>
            <GrowthTeamSection/>
            <FaqSection Faq={faqs} />
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
                            Our Latest
                            <span className="text-primary">
                                {" "}Insights{" "}
                            </span>
                        </h2>
                        <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
                            We Love Sharing Information.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs && blogs.length > 0 ? (
                            blogs.slice(0, 3).map((blog, index) => (
                                <BlogCard key={blog.id} blog={blog} id={index}/>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500">
                                No blogs available at the moment.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <CTASection/>
            <Footer/>
        </div>
    );
}
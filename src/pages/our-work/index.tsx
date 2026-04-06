import Footer from '@/components/Footer/footer';
import React from "react";
import HeroSection from "@/components/OurWork/HeroSection";
import Portfolio from "@/components/OurWork/OurWorkSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from "next-seo";

export default function OurWork() {
    return (
        <div className="font-syne">
            <NextSeo
                title="Our Work | 2BTech Portfolio of AI & Software Projects"
                description="Explore 2BTech’s portfolio of custom software, AI solutions, MVPs, SaaS products, and digital transformation projects for startups and growing businesses."
                canonical="https://2btechinc.com/our-work"
                additionalMetaTags={[
                    { name: "keywords", content: "2BTech portfolio, our work, case studies, software development projects, AI solutions, MVP development, SaaS development" },
                    { property: "dc:creator", content: "2BTech" },
                    { name: "author", content: "2BTech" },
                    { name: "robots", content: "index, follow" },
                ]}
                openGraph={{
                    type: "website",
                    url: "https://2btechinc.com/our-work",
                    title: "Our Work | 2BTech",
                    description:
                        "Explore 2BTech's portfolio of custom software, AI solutions, MVPs, SaaS products, and digital transformation projects built for startups and growing businesses.",
                    images: [
                        {
                            url: "https://2btechinc.com/images/og-image.jpg",
                            width: 1200,
                            height: 630,
                            alt: "Our Work | 2BTech",
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
                id="https://2btechinc.com/our-work#webpage"
                url="https://2btechinc.com/our-work"
                name="Our Work | 2BTech"
                description="Explore 2BTech's portfolio of custom software, AI solutions, MVPs, SaaS products, and digital transformation projects built for startups and growing businesses."
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
                        name: "Our Work",
                        item: "https://2btechinc.com/our-work",
                    },
                ]}
            />

            <HeroSection />
            <Portfolio />
            <TestimonialSection />
            <Footer />
        </div>
    );
}
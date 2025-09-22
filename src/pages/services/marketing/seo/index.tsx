import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/marketing/HeroSection';
import React from "react";
import ExpertServices from "@/components/services/web-development/ExpertSection";
import WebServicesGrid from "@/components/services/web-development/ServicesSection";
import AreYouReady from "@/components/services/productEngineering/AreYouReadySection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import Banner from "@/components/Home/bannerSection";
import FaqSection from "@/components/Home/FaqSection";
import ContactFormUI from "@/components/About/ContactFormSection";
import Why2btech from "@/components/services/marketing/Why2btechSection";
import { NextSeo, WebPageJsonLd, FAQPageJsonLd } from 'next-seo';
export default function SEO() {
    const faqs = [
        {
            id: 1,
            question: "What is SEO and why is it important?",
            answer:
                "SEO (Search Engine Optimization) is the process of improving your website’s visibility on search engines like Google. It helps drive organic traffic, increase brand awareness, and boost conversions."
        },
        {
            id: 2,
            question: "How long does it take to see SEO results?",
            answer:
                "SEO is a long-term strategy. Most websites begin to see noticeable improvements within 3 to 6 months, depending on competition, website health, and content quality."
        },
        {
            id: 3,
            question: "Do you offer local SEO services?",
            answer:
                "Yes, we specialize in local SEO to help your business rank higher in local searches, appear on Google Maps, and attract nearby customers."
        },
        {
            id: 4,
            question: "What is included in your SEO services?",
            answer:
                "Our SEO services include keyword research, on-page optimization, technical SEO, content creation, link building, and monthly performance reporting."
        },
        {
            id: 5,
            question: "Can you guarantee #1 rankings on Google?",
            answer:
                "No ethical SEO provider can guarantee #1 rankings. However, we follow proven strategies and Google-approved practices to maximize your chances of ranking high and driving qualified traffic."
        }
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="Result-Driven SEO Services | 2BTech"
                description="Boost your online visibility and drive organic growth with 2BTech’s expert SEO services. Tailored strategies to enhance rankings, attract quality traffic, and increase conversions."
                canonical="https://2btech.com/services/marketing/seo"
                openGraph={{
                    url: "https://2btech.com/services/marketing/seo",
                    title: "Result-Driven SEO Services | 2BTech",
                    description:
                        "Boost your online visibility and drive organic growth with 2BTech’s expert SEO services.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/seo.webp",
                            width: 1200,
                            height: 630,
                            alt: "SEO Services 2BTech",
                        },
                    ],
                    siteName: "2BTech",
                }}
                twitter={{
                    handle: "@2btech",
                    site: "@2btech",
                    cardType: "summary_large_image",
                }}
            />

            <WebPageJsonLd
                id="https://2btech.com/services/marketing/seo"
                description="Boost your online visibility and drive organic growth with 2BTech’s expert SEO services."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="RESULT-DRIVEN SEO SERVICES"
                description="Boost your online visibility and drive organic growth with our expert SEO services. We specialize in tailored strategies that enhance search rankings, attract quality traffic, and increase conversions."
                buttonText="Get a Free Consultation"
                path="/assets/services/hero/seo.webp"
            />
            <ExpertServices
                title="Expert SEO Services to Elevate Your Online Presence"
                description="At 2BTech, we deliver result-driven SEO solutions to help your business rank higher, attract quality traffic, and boost conversions. Our customized strategies are designed to improve online visibility, reduce marketing costs, and achieve sustainable growth with confidence."
                src="/assets/services/Our-International-SEO.webp"
                width={500}
            />
            <WebServicesGrid
                heading="TYPES OF SEO SERVICES"
                subHeading="From Visibility to Sustainable Growth"
                description="Enhance your online presence and attract the right audience with 2BTech’s SEO Services. Our expert team helps businesses improve rankings, drive organic traffic, and achieve measurable results that build a strong foundation for long-term digital success."
                arrowImage="/assets/services/down-arrow.webp"
                services={[
                    {
                        id: 1,
                        title: "SEO Site Audits",
                        description: "Identify strengths, fix issues, and optimize your website with a complete SEO audit.",
                    },
                    {
                        id: 2,
                        title: "Off-Page SEO",
                        description: "Boost rankings with backlinks, social media, and content promotion.",
                    },
                    {
                        id: 3,
                        title: "Technical SEO",
                        description: "Improve site speed, crawlability, and indexing for better search visibility.",
                        highlightImage: "/assets/services/otherImages/technical.svg",
                    },
                    {
                        id: 4,
                        title: "On-Page SEO",
                        description: "Optimize content, titles, and meta tags to rank higher in search results.",
                    },
                    {
                        id: 5,
                        title: "Keyword Research & Mapping",
                        description: "Find and target high-value keywords tailored to your industry and audience.",
                    },
                    {
                        id: 6,
                        title: "Ecommerce SEO",
                        description: "Optimize product pages and categories to drive more online sales.",
                        smallImage: "/assets/services/otherImages/ecommerceSeo.webp",
                    },
                    {
                        id: 7,
                        title: "Competitive Analysis",
                        description: "Analyze competitors to uncover opportunities and build winning SEO strategies.",
                    },
                    {
                        id: 8,
                        title: "YouTube SEO",
                        description: "Optimize videos for higher rankings, more views, and greater engagement.",
                    },
                ]}
            />
            <Why2btech
                title="Why 2BTech For"
                titleTwo="SEO?"
                titleThree="International SEO Experts"
                descriptionOne="Our Team consists of some of the best international SEO Services experts across the country. Our SEO specialists are well equipped with modern SEO trends and techniques so that your keyword ranking produces specific and recurring customers for your business"
                path="/assets/services/Why-2btech-for-SEO.webp"
                description="2btech international SEO services are tailor made for your business requirements and we not only focus on ranking your website but also to get you organic traffic that is relevant to your business, so you are not only ranking but rolling in clients as well."
            />
            <Banner
                title="Contact Us now For Best SEO Services"
                src="/assets/services/seo-bg.webp"
            />
            <TestimonialSection />
            <FaqSection Faq={faqs} />
            <AreYouReady
                buttonText="Get a Free SEO Audit"
                srcOne="/assets/services/errorSEO.svg"
                srcTwo="/assets/services/bestSEO.webp"
            />
            <ContactFormUI />
            <Footer />
        </div>
    );
}

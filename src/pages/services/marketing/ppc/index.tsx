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

export default function PPC() {
    const faqs = [
        {
            id: 1,
            question: "What is PPC advertising?",
            answer:
                "PPC (Pay-Per-Click) is a digital advertising model where you pay only when users click your ads. It’s an effective way to quickly drive targeted traffic to your website."
        },
        {
            id: 2,
            question: "How does PPC help businesses?",
            answer:
                "PPC provides instant visibility, drives qualified traffic, increases leads, and improves sales by targeting the right audience with measurable results."
        },
        {
            id: 3,
            question: "Which platforms do you manage for PPC?",
            answer:
                "We manage PPC campaigns across Google Ads, Bing Ads, Facebook Ads, Instagram, LinkedIn, and YouTube to maximize your business reach."
        },
        {
            id: 4,
            question: "What is included in your PPC management services?",
            answer:
                "Our PPC services include campaign setup, keyword research, ad copywriting, audience targeting, bid management, performance tracking, and monthly reporting."
        },
        {
            id: 5,
            question: "How soon can I see results from PPC campaigns?",
            answer:
                "Unlike SEO, PPC delivers immediate visibility and results as soon as your campaign goes live. However, optimization over time ensures better ROI."
        }
    ];

    return (
        <div className="font-syne">
            <NextSeo
                title="Result-Driven PPC Services | 2BTech"
                description="Maximize your ROI with 2BTech’s PPC services. Our expert team creates and manages tailored pay-per-click campaigns to boost traffic, generate leads, and drive conversions."
                canonical="https://2btech.com/services/marketing/ppc"
                openGraph={{
                    url: "https://2btech.com/services/marketing/ppc",
                    title: "Result-Driven PPC Services | 2BTech",
                    description:
                        "Maximize your ROI with 2BTech’s PPC services. Expert campaign management for Google Ads, Bing, Facebook, Instagram, and more.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/ppc.webp",
                            width: 1200,
                            height: 630,
                            alt: "PPC Services 2BTech",
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
                id="https://2btech.com/services/marketing/ppc"
                description="Maximize your ROI with 2BTech’s PPC services. Expert campaign management for Google Ads, Bing, Facebook, Instagram, and more."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="RESULT-DRIVEN PPC SERVICES"
                description="Maximize your ROI with powerful PPC campaigns designed to capture attention, drive traffic, and generate leads. At 2BTech, we create data-driven advertising strategies that deliver measurable results."
                buttonText="Start Your Campaign"
                path="/assets/services/hero/ppc.webp"
            />
            <ExpertServices
                title="Expert PPC Management for Maximum ROI"
                description="At 2BTech, our PPC experts design and manage high-performing ad campaigns tailored to your business goals. We focus on optimizing ad spend, increasing clicks, and generating conversions that matter."
                src="/assets/services/otherImages/Our-PPC-Experts.webp"
                width={500}
            />
            <WebServicesGrid
                heading="TYPES OF PPC SERVICES"
                subHeading="Smart Campaigns. Better Results."
                description="Our PPC services cover everything from keyword targeting to audience segmentation, ensuring your ads reach the right people at the right time."
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "Google Ads Management",
                        description: "Reach potential customers instantly with search and display campaigns."
                    },
                    {
                        id: 2,
                        title: "Social Media Ads",
                        description: "Target users on Facebook, Instagram, and LinkedIn with highly engaging ads."
                    },
                    {
                        id: 3,
                        title: "Remarketing Campaigns",
                        description: "Re-engage past visitors and turn them into loyal customers.",
                        highlightImage: "/assets/services/otherImages/remarketing.webp",
                    },
                    {
                        id: 4,
                        title: "Ecommerce PPC",
                        description: "Drive more sales with Google Shopping and product ads."
                    },
                    {
                        id: 5,
                        title: "Bing Ads",
                        description: "Expand your reach with cost-effective campaigns on Bing’s ad network."
                    },
                ]}
            />
            <Why2btech
                title="Why 2BTech For"
                titleTwo="PPC?"
                titleThree="Your ROI-Focused PPC Partner"
                descriptionOne="Our PPC experts bring years of experience running successful ad campaigns across multiple industries. We ensure every click counts by targeting the right audience and minimizing wasted ad spend."
                path="/assets/services/otherImages/whyPPC.webp"
                description="2BTech’s PPC services are designed to maximize ROI, increase conversions, and help your business grow faster with measurable results."
            />
            <Banner
                title="Launch Your PPC Campaign with 2BTech"
                src="/assets/services/otherImages/ppcBanner.webp"
            />
            <TestimonialSection />
            <FaqSection Faq={faqs} />
            <AreYouReady
                buttonText="Get a Free PPC Audit"
                srcOne="/assets/services/otherImages/beforePPC.webp"
                srcTwo="/assets/services/otherImages/afterPPC.webp"
            />
            <ContactFormUI />
            <Footer />
        </div>
    );
}

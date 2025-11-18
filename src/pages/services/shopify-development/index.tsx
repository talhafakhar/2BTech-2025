import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/HeroSection';
import React from "react";
import AboutSection from "@/components/services/AboutSection";
import Banner from "@/components/Home/bannerSection";
import FaqSection from "@/components/Home/FaqSection";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
import FinalCTASection from "@/components/services/FinalCTASection";
import ServiceSection from "@/components/services/ServicesSection";
import OurFlowSection from "@/components/services/OurFlowSection";
import OurModals from "@/components/services/ModalSection";
import WhatIsSection from "@/components/services/WhatIsSection";

export default function ShopifyDevelopment() {
    const faqs = [
        {
            id: 1,
            question: "What services does your Shopify development company provide?",
            answer:
                "2BTech offers comprehensive Shopify services including custom Shopify store development, Shopify theme development, Shopify app development, Shopify Plus implementation, store migrations, SEO optimization, conversion rate optimization, and ongoing support. As a full-service Shopify development company, we handle everything from strategy and design through development, launch, and long-term growth optimization for businesses of all sizes.",
        },
        {
            id: 2,
            question: "How long does it take to build a custom Shopify store?",
            answer:
                "Project timelines vary based on complexity and requirements. A standard Shopify store development project typically takes 6–8 weeks, while custom Shopify theme development requires 8–10 weeks. Complex Shopify Plus implementations with custom Shopify app development may need 12–16 weeks. During our initial consultation, our Shopify developer team provides a detailed timeline tailored to your project scope and business objectives.",
        },
        {
            id: 3,
            question: "Can you migrate my existing ecommerce store to Shopify?",
            answer:
                "Absolutely! Our Shopify store development services include comprehensive migration from any platform including WooCommerce, Magento, BigCommerce, Volusion, and custom-built solutions. We preserve your SEO rankings, migrate all product data, customer information, order history, and reviews while improving site structure and performance. Our systematic migration process ensures minimal downtime and zero data loss throughout the transition.",
        },
        {
            id: 4,
            question: "Do you provide ongoing support after the store launches?",
            answer:
                "Yes! We offer flexible maintenance and support packages for all clients. When you hire Shopify expert services from 2BTech, you gain access to ongoing support including technical troubleshooting, security updates, feature enhancements, theme modifications, app integrations, performance monitoring, and strategic consultation. Our pay-as-you-go model ensures you only pay for the services you actually need and use.",
        },
        {
            id: 5,
            question: "What makes 2BTech different from other Shopify developers?",
            answer:
                "2BTech combines deep technical expertise with ecommerce strategy and proven results. Unlike generalist developers, our team specializes exclusively in Shopify with over 8 years of platform experience. We've generated over $100M in revenue for clients through strategic custom Shopify development, conversion optimization, and growth-focused solutions. Our Shopify development approach focuses on measurable outcomes—not just delivering code—ensuring your store becomes a powerful revenue-generating asset.",
        },
    ];
    const definitionOne = [
        {
            title: "Proven Revenue Growth",
            description:
                "Our Shopify store development projects consistently deliver measurable results, with clients experiencing average revenue increases of 156% within the first year through optimized design, strategic enhancements, and conversion-focused development.",
        },
        {
            title: "Deep Platform Expertise",
            description:
                "With over 8 years of exclusive Shopify experience, our Shopify developer team has mastered every aspect of the platform, from Liquid templating to complex API integrations, ensuring efficient solutions to any challenge.",
        },
        {
            title: "Full-Service Ecommerce Agency",
            description:
                "Beyond development, we provide SEO, conversion optimization, marketing strategy, and ongoing support, functioning as your complete ecommerce partner invested in your long-term success.",
        },
        {
            title: "Enterprise-Grade Solutions",
            description:
                "Whether you're a startup or Fortune 500 company, our custom Shopify development services scale to meet your needs—handling high-volume transactions, complex integrations, and advanced business requirements with proven reliability.",
        },
    ];
    const platforms = [
        {
            icon: (  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 0 48 48" className="w-14 h-14">
                <g id="SVGRepo_iconCarrier">
                    <g
                        id="Icons"
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                    >
                        <g id="Color-" fill="#81BF37" transform="translate(-203 -660)">
                            <path
                                id="Shopify"
                                d="m233.847 666.995 1.678 1.673s3.67.274 3.843.288a.46.46 0 0 1 .418.39c.033.242 5.214 35.446 5.214 35.446l-12.713 2.763zm-1.95-1.334a2 2 0 0 0-.24.05l-1.428.442c-.852-2.463-2.355-4.726-4.998-4.726q-.111 0-.224.007c-.753-.999-1.684-1.434-2.488-1.434-6.16 0-9.104 7.74-10.026 11.672-2.394.745-4.094 1.274-4.31 1.343-1.338.422-1.38.464-1.555 1.729-.132.958-3.628 28.127-3.628 28.127L230.24 708l.029-.006zm-7.092 1.911-.001.269-4.762 1.481c.917-3.554 2.635-5.272 4.138-5.92.377.954.625 2.323.625 4.17m-2.457-5.912c.268 0 .535.092.792.269-1.975.933-4.09 3.285-4.984 7.98l-3.763 1.172c1.046-3.582 3.531-9.42 7.955-9.42m1.062 20.933s-1.594-.855-3.548-.855c-2.866 0-3.01 1.807-3.01 2.262 0 2.486 6.444 3.438 6.444 9.258 0 4.578-2.89 7.527-6.787 7.527-4.676 0-7.067-2.925-7.067-2.925l1.252-4.157s2.459 2.121 4.533 2.121c1.354 0 1.906-1.072 1.906-1.855 0-3.242-5.288-3.387-5.288-8.714 0-4.481 3.202-8.82 9.665-8.82 2.49 0 3.72.718 3.72.718zm3.009-15.255.001-.5c0-1.53-.212-2.762-.55-3.739 1.362.171 2.27 1.73 2.853 3.522z"
                            ></path>
                        </g>
                    </g>
                </g>
            </svg>),
        },
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="Expert Shopify Developer | Shopify Development Company | 2BTech"
                description="2BTech is a leading shopify development company. Hire shopify expert developers for custom shopify store development, theme development, app development, and migrations. Proven revenue results"
                canonical="https://2btech.com/services/shopify-development"
                openGraph={{
                    url: "https://2btech.com/services/shopify-development",
                    title: "Expert Shopify Developer | Shopify Development Company | 2BTech",
                    description: "2BTech is a leading shopify development company. Hire shopify expert developers for custom shopify store development, theme development, app development, and migrations. Proven revenue results",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/shopify-development.webp",
                            width: 1200,
                            height: 630,
                            alt: "Expert Shopify Developer | Shopify Development Company | 2BTech",
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
                id="https://2btech.com/services/shopify-development"
                title="Expert Shopify Developer | Shopify Development Company | 2BTech"
                description="2BTech is a leading shopify development company. Hire shopify expert developers for custom shopify store development, theme development, app development, and migrations. Proven revenue results"
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="Expert Shopify Developer for Revenue"
                description="Transform your online store with a trusted shopify development company driving measurable results"
                formLabel="Get Free Shopify development Consultation"
                platforms={platforms}
                TrustBar={() => (
                    <div></div>
                )}
            />
            <AboutSection
                title="Partner With a Shopify Development Company That Delivers Exceptional Results"
                description="At 2BTech, we specialize in building high-converting Shopify stores that drive revenue growth and customer satisfaction. As a leading shopify development company, we combine technical expertise with ecommerce strategy to create custom solutions that scale with your business. When you hire shopify expert talent from our team, you're gaining access to seasoned professionals who understand every aspect of the platform. From custom shopify development to complex integrations and performance optimization, our shopify developer team delivers solutions that transform your online presence into a powerful revenue-generating machine"
                src="/assets/services/shopify/onlineStore.svg"
                width={430}
            />
            <ServiceSection
                heading="Comprehensive Services"
                subHeading="Our Shopify Development Services"
                description="2BTech offers end-to-end Shopify services tailored to your ecommerce goals. Our shopify store development expertise spans from simple storefronts to complex enterprise platforms, ensuring exceptional quality and performance every time."
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "Custom Shopify Store Development",
                        description:
                            "We build stunning, high-performance Shopify stores with custom designs, advanced features, optimized checkout flows, and seamless user experiences that maximize conversions across all devices.",
                    },
                    {
                        id: 2,
                        title: "Shopify Theme Development",
                        description:
                            "Our Shopify developer team crafts bespoke themes tailored to your brand, featuring unique layouts, responsive design, and optimized code that make your store stand out from competitors.",
                    },
                    {
                        id: 3,
                        title: "Shopify App Development",
                        highlightImage: "/assets/services/shopify/shopifyApp.svg",
                        description:
                            "We create custom Shopify apps and integrations that extend functionality, automate workflows, and solve unique business challenges with scalable, maintainable solutions built for growth.",
                    },
                    {
                        id: 4,
                        title: "Shopify Plus Enterprise Solutions",
                        description:
                            "Scale effortlessly with Shopify Plus—wholesale channels, custom checkout experiences, advanced automation, and multi-store management built for high-volume enterprises.",
                    },
                    {
                        id: 5,
                        title: "Shopify Store Migration",
                        description:
                            "Seamlessly migrate your store from WooCommerce, Magento, or BigCommerce to Shopify while preserving SEO rankings, customer data, and improving site performance.",
                    },
                    {
                        id: 6,
                        title: "SEO & Performance Optimization",
                        smallImage: "/assets/services/shopify/ecommerceSeo.svg",
                        description:
                            "Boost visibility and speed with technical SEO, schema markup, image optimization, and page performance",
                    },
                    {
                        id: 7,
                        title: "Shopify Conversion Rate Optimization",
                        description:
                            "Maximize revenue with checkout optimization, A/B testing, trust-building elements, and data-driven design improvements that convert more visitors into loyal customers.",
                    },
                    {
                        id: 8,
                        title: "Ongoing Shopify Support & Maintenance",
                        description:
                            "Ensure continuous peak performance with proactive maintenance, updates, feature enhancements, and strategic consultation for long-term success and growth.",
                    },
                ]}

            />
            <WhatIsSection
                heading="Why Work With 2BTech as"
                highlight="Your Shopify  Expert"
                description=""
                definitionOne={definitionOne}
                imageOne="/assets/services/shopify/store.svg"
            />
            <OurModals
                headingHighlight="Flexible Engagement Models"
                heading="Designed for Your Ecommerce Goals"
                src="/assets/services/shopify/shopifyModal.svg"
                description=" At 2BTech, we understand every Shopify project has unique requirements, timelines, and budgets. Choose the engagement model that best fits your business needs and growth stage"
                subheading="Fixed-Price Model"
                subDescription="Perfect for well-defined Shopify projects with clear scope and deliverables. You receive a comprehensive fixed quote upfront with defined milestones, timelines, and outcomes, ensuring complete budget predictability and transparency"
                subheadingTwo="Dedicated Team Model"
                subDescriptionTwo="Ideal for ongoing development requiring continuous collaboration and flexibility. You get dedicated shopify expert developers working exclusively on your store, functioning as an integrated extension of your internal ecommerce team"
            />
            <Banner
                title="Empower Your Brand with Shopify expert"
                description="Design, build, and launch stunning websites faster."
                src="/assets/services/shopify/ecommerceBg.webp"
            />
            <OurFlowSection
                heading="Essential Features Limiting"
                headingHighlight="Shopify Growth"
                description="Many Shopify stores lack these crucial elements that impact conversions, retention, visibility, and overall revenue performance."
                services={[
                    {
                        title: "Mobile-Optimized Checkout Experience",
                        duration: "",
                        description:
                            "Generic checkouts lose sales on mobile—where 70% of shopping happens. We craft mobile-first checkout flows with trust badges and one-click payments to boost completion rates.",
                    },
                    {
                        title: "Advanced Product Filtering & Search",
                        duration: "",
                        description:
                            "Basic navigation frustrates large catalogs. Intelligent filters, predictive search, and visual sorting enhance product discovery, satisfaction, and conversions.",
                    },
                    {
                        title: "Strategic Trust-Building Elements",
                        duration: "",
                        description:
                            "Without trust, customers hesitate to buy. Reviews, security badges, guarantees, and social proof strengthen credibility and reduce cart abandonment.",
                    },
                    {
                        title: "Performance & Speed Optimization",
                        duration: "",
                        description:
                            "Slow stores lose shoppers instantly. Image compression, lazy loading, and code optimization ensure lightning-fast load times that retain customers.",
                    },
                    {
                        title: "Email Capture & Abandonment Recovery",
                        duration: "",
                        description:
                            "Recover lost visitors with smart popups, exit-intent offers, and automated cart recovery flows that convert traffic into loyal customers.",
                    },
                    {
                        title: "Analytics & Conversion Tracking",
                        duration: "",
                        description:
                            "Data drives growth. We implement GA4, enhanced ecommerce tracking, and custom dashboards to measure, optimize, and scale your revenue effectively.",
                    },
                ]}
            />
            <FaqSection
                Faq={faqs}
            />
            <FinalCTASection
                heading="Ready to Build a High-Converting Shopify Store?"
                description="When you hire shopify expert developers from 2BTech, you're choosing a shopify development company committed to your revenue growth. Our comprehensive services including shopify store development, shopify theme development, shopify app development, and custom shopify development solutions combine technical excellence with ecommerce strategy. Whether you're launching your first store or scaling to Shopify Plus, we have the expertise and dedication to exceed your expectations and drive measurable results"
            />
            <Footer/>
        </div>
    );
}
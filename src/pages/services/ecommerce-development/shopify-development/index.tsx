import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/web-development/HeroSection';
import React from "react";
import ExpertServices from "@/components/services/web-development/ExpertSection";
import AreYouReady from "@/components/services/productEngineering/AreYouReadySection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import Banner from "@/components/Home/bannerSection";
import FaqSection from "@/components/Home/FaqSection";
import ContactFormUI from "@/components/About/ContactFormSection";
import ShopifyExpertise from "@/components/services/ecommerce/ServicesSection";
import OurProcess from "@/components/services/ecommerce/ProccessSection";
import storeAnimation from "@/assets/animations/store.json";
import {ArrowUpDown, Cloud, Code2, Gauge, Monitor, Server, Smartphone,} from "lucide-react";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";

export default function ShopifyDevelopment() {
    const faqs = [
        {
            id: 1,
            question: "How long does it take to develop a custom Shopify store?",
            answer:
                "The timeline depends on your project’s complexity and requirements. A basic Shopify store can be launched within 2–4 weeks, while fully customized solutions with advanced integrations may take 6–10 weeks."
        },
        {
            id: 2,
            question: "Can you migrate my existing store to Shopify without losing data?",
            answer:
                "Yes, we provide seamless Shopify migration services. Your products, customers, orders, and SEO settings will be transferred safely to Shopify without downtime or data loss."
        },
        {
            id: 3,
            question: "Do you offer Shopify theme customization?",
            answer:
                "Absolutely. We can customize any Shopify theme to align with your brand identity, improve user experience, and optimize conversions."
        },
        {
            id: 4,
            question: "Will my Shopify store be mobile-friendly?",
            answer:
                "Yes! All Shopify stores we develop are fully responsive and optimized for mobile devices to ensure an excellent shopping experience on any screen size."
        },
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="Shopify Development Services | 2BTech"
                description="Transform your e-commerce vision into reality with our expert Shopify development services. We specialize in creating stunning, high-performing online stores that drive sales and enhance customer experiences."
                canonical="https://2btech.com/services/ecommerce-development/shopify-development"
                openGraph={{
                    url: "https://2btech.com/services/ecommerce-development/shopify-development",
                    title: "Result-Driven SEO Services | 2BTech",
                    description:
                        "Boost your online visibility and drive organic growth with 2BTech’s expert SEO services.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/shopify.webp",
                            width: 1200,
                            height: 630,
                            alt: "Shopify Development Services 2BTech",
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
                id="https://2btech.com/services/ecommerce-development/shopify-development"
                description="Transform your e-commerce vision into reality with our expert Shopify development services. We specialize in creating stunning, high-performing online stores that drive sales and enhance customer experiences."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="SHOPIFY DEVELOPMENT SERVICES"
                description="Transform your e-commerce vision into reality with our expert Shopify development services. We specialize in creating stunning, high-performing online stores that drive sales and enhance customer experiences."
                buttonText="Get a Free Consultation"
                animationData={storeAnimation}
            />
            <ExpertServices
                title="Launch Your Store with Expert Shopify Development Services"
                description="Our Shopify development services focus on building fully functional, scalable online stores tailored to your brand. At 2BTech, we create custom Shopify solutions that help businesses launch faster, optimize performance, and grow sales with confidence."
                src="/assets/services/onlineStore.webp"
                width={400}
            />
 w           <ShopifyExpertise
                title="Shopify Development"
                titleTwo="Services to Elevate Your E-commerce Business"
                description="Our comprehensive Shopify development services cover everything from custom store builds to theme customization, app integrations, and performance optimization. Whether you’re launching a new store or enhancing an existing one, our team has the expertise to deliver results."

                expertiseItems={
                    [
                        {
                            id: 1,
                            title: "Custom Shopify Store Development",
                            description:
                                "Build fully customized Shopify stores tailored to your brand, with seamless UX, optimized performance, and scalable architecture.",
                            icon: <Code2 className="w-6 h-6 text-white"/>,
                        },
                        {
                            id: 2,
                            title: "Shopify Theme Customization",
                            description:
                                "Enhance your store’s design and functionality by customizing themes to match your brand and improve user engagement.",
                            icon: <Monitor className="w-6 h-6 text-white"/>,
                        },
                        {
                            id: 3,
                            title: "Shopify App Integration",
                            description:
                                "Integrate third-party apps and APIs to extend your store’s capabilities, including payments, shipping, analytics, and marketing tools.",
                            icon: <ArrowUpDown className="w-6 h-6 text-white"/>,
                        },
                        {
                            id: 4,
                            title: "Performance Optimization",
                            description:
                                "Boost your Shopify store speed, reliability, and conversion rates with advanced optimization techniques and best practices.",
                            icon: <Gauge className="w-6 h-6 text-white"/>,
                        },
                        {
                            id: 5,
                            title: "Shopify Mobile App Development",
                            description:
                                "Create cross-platform mobile apps or PWA experiences to engage customers on iOS and Android, increasing sales and retention.",
                            icon: <Smartphone className="w-6 h-6 text-white"/>,
                        },
                        {
                            id: 6,
                            title: "Shopify Migration Services",
                            description:
                                "Seamlessly migrate your existing store from other platforms to Shopify without losing data, SEO rankings, or functionality.",
                            icon: <Cloud className="w-6 h-6 text-white"/>,
                        },
                        {
                            id: 7,
                            title: "Shopify Maintenance & Support",
                            description:
                                "Ensure your Shopify store runs smoothly with ongoing maintenance, updates, and support services for long-term success.",
                            icon: <Server className="w-6 h-6 text-white"/>,
                        },
                    ]
                }
            />
            <OurProcess
                title="Shopify Development"
                description="At 2BTech, we follow a structured process to ensure successful Shopify development projects. Our approach includes"
            />
            <Banner
                title="Eveluate Your Business with Shopify Growth Specialists"
                description="Unlock your store's full potential and revenue"
                src="/assets/services/ecommerceBg.webp"
            />
            <TestimonialSection/>
            <FaqSection Faq={faqs}/>
            <AreYouReady
                buttonText="Let's Connect"
                srcOne="/assets/services/purchase.svg"
                srcTwo="/assets/services/store.svg"
            />
            <ContactFormUI/>
            <Footer/>
        </div>
    );
}
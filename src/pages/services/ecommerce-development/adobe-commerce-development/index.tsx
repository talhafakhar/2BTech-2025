import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/web-development/HeroSection';
import React from "react";
import ExpertServices from "@/components/services/web-development/ExpertSection";
import AreYouReady from "@/components/services/productEngineering/AreYouReadySection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import Banner from "@/components/Home/bannerSection";
import FaqSection from "@/components/Home/FaqSection";
import ContactFormUI from "@/components/About/ContactFormSection";
import ShopifyExpertise from "@/components/services/ecommerce/ServicesSection"; // reuse as Expertise grid
import OurProcess from "@/components/services/ecommerce/ProccessSection";
import adobeAnimation from "@/assets/animations/adobe.json"; // <- replace with Adobe Commerce Lottie if available
import {
    ArrowUpDown,
    Cloud,
    Code2,
    Gauge,
    Monitor,
    Server,
    Smartphone,
} from "lucide-react";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";

export default function AdobeCommerceDevelopment() {
    const faqs = [
        {
            id: 1,
            question: "What is Adobe Commerce and how is it different from Magento Open Source?",
            answer:
                "Adobe Commerce (formerly Magento Commerce) is an enterprise-level eCommerce platform built on Magento with advanced features, scalability, and cloud hosting options, while Magento Open Source offers basic functionality without premium tools."
        },
        {
            id: 2,
            question: "Can you migrate my existing store to Adobe Commerce?",
            answer:
                "Yes, we specialize in seamless Adobe Commerce migrations from platforms like Shopify, WooCommerce, or Magento Open Source. We ensure no data loss and preserve your SEO rankings."
        },
        {
            id: 3,
            question: "Is Adobe Commerce suitable for large businesses?",
            answer:
                "Absolutely. Adobe Commerce is designed for mid-to-enterprise level businesses, offering scalability, personalization, B2B features, and robust integrations."
        },
        {
            id: 4,
            question: "Do you provide ongoing Adobe Commerce maintenance and support?",
            answer:
                "Yes, we provide 24/7 monitoring, performance optimization, regular updates, and technical support to ensure your Adobe Commerce store runs smoothly."
        },
    ];

    return (
        <div className="font-syne">
            <NextSeo
                title="Adobe Commerce Development Services | 2BTech"
                description="Unlock enterprise-level eCommerce with Adobe Commerce development services by 2BTech. We build scalable, feature-rich online stores tailored to your business needs."
                canonical="https://2btech.com/services/ecommerce-development/adobe-commerce-development"
                openGraph={{
                    url: "https://2btech.com/services/ecommerce-development/adobe-commerce-development",
                    title: "Adobe Commerce Development Services | 2BTech",
                    description:
                        "Scale your eCommerce business with Adobe Commerce. Our certified experts deliver custom development, migration, integration, and support services.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/adobe-commerce.webp",
                            width: 1200,
                            height: 630,
                            alt: "Adobe Commerce Development Services 2BTech",
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
                id="https://2btech.com/services/ecommerce-development/adobe-commerce-development"
                description="Unlock enterprise-level eCommerce with Adobe Commerce development services by 2BTech. We build scalable, feature-rich online stores tailored to your business needs."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />

            <HeroSection
                title="ADOBE COMMERCE DEVELOPMENT SERVICES"
                description="Empower your enterprise eCommerce with Adobe Commerce. Our team builds feature-rich, scalable, and secure online stores designed for growth and performance."
                buttonText="Get a Free Consultation"
                animationData={adobeAnimation}
            />

            <ExpertServices
                title="Enterprise-Level eCommerce with Adobe Commerce"
                description="We deliver custom Adobe Commerce development services, including migration, theme customization, B2B solutions, and integrations to accelerate your business growth."
                src="/assets/services/otherImages/adobe.webp"
                width={400}
            />

            <ShopifyExpertise
                title="Adobe Commerce Development"
                titleTwo="Services to Elevate Your  Business"
                description="Our Adobe Commerce development services focus on building robust, scalable online stores tailored to your enterprise needs. At 2BTech, we create custom Adobe Commerce solutions that help businesses launch faster, optimize performance, and grow sales with confidence."
                expertiseItems={[
                    {
                        id: 1,
                        title: "Custom Adobe Commerce Development",
                        description:
                            "We build fully tailored Adobe Commerce stores with custom functionality and integrations to meet your unique business needs.",
                        icon: <Code2 className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 2,
                        title: "Adobe Commerce Theme Development",
                        description:
                            "Design and customize Adobe Commerce themes to create engaging and user-friendly storefronts aligned with your brand identity.",
                        icon: <Monitor className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 3,
                        title: "Adobe Commerce Integrations",
                        description:
                            "Integrate ERP, CRM, and third-party applications with Adobe Commerce for a seamless workflow and enhanced functionality.",
                        icon: <ArrowUpDown className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 4,
                        title: "Performance & Security Optimization",
                        description:
                            "Optimize your Adobe Commerce store for speed, security, and scalability with advanced monitoring and best practices.",
                        icon: <Gauge className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 5,
                        title: "Adobe Commerce Mobile Solutions",
                        description:
                            "Deliver mobile-friendly and PWA-based shopping experiences with Adobe Commerce to engage customers on the go.",
                        icon: <Smartphone className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 6,
                        title: "Adobe Commerce Migration",
                        description:
                            "Migrate from Magento Open Source or other platforms to Adobe Commerce with zero downtime and no data loss.",
                        icon: <Cloud className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 7,
                        title: "Adobe Commerce Support & Maintenance",
                        description:
                            "Get 24/7 monitoring, regular updates, and long-term support to keep your Adobe Commerce store running smoothly.",
                        icon: <Server className="w-6 h-6 text-white" />,
                    },
                ]}
            />
            <OurProcess
                title="Adobe Commerce Development"
                description="At 2BTech, our Adobe Commerce development process is designed to deliver high-quality, scalable eCommerce solutions."
            />
            <Banner
                title="Scale Your Business with Adobe Commerce Experts"
                description="Future-proof your eCommerce store with enterprise-level solutions."
                src="/assets/services/otherImages/adobeBanner.webp"
            />

            <TestimonialSection />

            <FaqSection Faq={faqs} />

            <AreYouReady
                buttonText="Let's Connect"
                srcOne="/assets/services/purchase.webp"
                srcTwo="/assets/services/website.webp"
            />

            <ContactFormUI />
            <Footer />
        </div>
    );
}

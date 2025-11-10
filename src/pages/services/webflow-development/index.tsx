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
import AIStackSection from "@/components/services/AIStackSection";
export default function WebFlowDevelopment() {
    const faqs = [
        {
            id: 1,
            question: "What makes 2BTech different from other Webflow developers?",
            answer:
                "2BTech combines deep technical expertise with strategic business thinking. As a specialized Webflow development agency, we don't just build beautiful websites—we create high-performing digital assets that drive measurable results. Our Webflow experts follow the Client-First methodology, maintain clean code standards, and deliver projects faster than traditional agencies while ensuring exceptional quality and long-term maintainability.",
        },
        {
            id: 2,
            question: "Can you migrate my existing website to Webflow?",
            answer:
                "Absolutely! Our custom Webflow development services include comprehensive migration from any platform including WordPress, Wix, Squarespace, Shopify, and custom-built sites. We preserve your SEO rankings, maintain content integrity, improve site structure, and enhance performance. The migration process is seamless, with minimal downtime and thorough testing before launch.",
        },
        {
            id: 3,
            question: "Do you offer ongoing support after the website launches?",
            answer:
                "Yes! We provide flexible maintenance and support packages for all clients. When you hire Webflow developer services from 2BTech, you gain access to ongoing support including content updates, technical fixes, performance optimization, security monitoring, and feature additions. Our pay-as-you-go model ensures you only pay for the hours you actually use.",
        },
        {
            id: 4,
            question: "How long does a typical Webflow development project take?",
            answer:
                "Project timelines vary based on complexity and scope. A simple landing page takes 1–2 weeks, a standard business website requires 4–6 weeks, while complex enterprise projects may take 8–12 weeks. Our Webflow development agency is known for lightning-fast delivery—typically 40% faster than traditional agencies—without compromising quality or attention to detail.",
        },
        {
            id: 5,
            question: "Can you integrate third-party tools with my Webflow website?",
            answer:
                "Definitely! Our Webflow design services include seamless integration with CRMs, marketing automation platforms, payment processors, analytics tools, and virtually any third-party service. We specialize in custom JavaScript development, API integrations, Zapier automation, and advanced functionality that extends Webflow’s native capabilities to meet your specific business requirements perfectly.",
        },
    ];
    const definitionOne = [
        {
            title: "Lightning-Fast Delivery",
            description:
                "Our streamlined processes and expert Webflow team deliver projects 40% faster than traditional agencies—launching your site quickly without sacrificing quality.",
        },
        {
            title: "Technical Excellence Guaranteed",
            description:
                "We use advanced Webflow features, clean code, Client-First methodology, and best practices to ensure scalable, high-performance websites across all devices.",
        },
        {
            title: "Transparent Communication Always",
            description:
                "With daily updates, shared boards, and responsive support, you stay informed every step of the way for a smooth, transparent collaboration.",
        },
        {
            title: "Results-Driven Approach",
            description:
                "Beyond design, we focus on conversions, SEO, speed, UX, and analytics to ensure your website drives measurable business growth and ROI.",
        },
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="Expert Webflow Developer | Webflow Development Agency | 2BTech"
                description="2BTech is a leading webflow development agency. Hire webflow developer experts for custom webflow development, design services, and migrations. Fast delivery, exceptional results"
                canonical="https://2btech.com/services/webflow-development"
                openGraph={{
                    url: "https://2btech.com/services/webflow-development",
                    title: "Expert Webflow Developer | Webflow Development Agency | 2BTech",
                    description: "2BTech is a leading webflow development agency. Hire webflow developer experts for custom webflow development, design services, and migrations. Fast delivery, exceptional results",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/webflow-development.webp",
                            width: 1200,
                            height: 630,
                            alt: "Expert Webflow Developer | Webflow Development Agency | 2BTech",
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
                id="https://2btech.com/services/webflow-development"
                title="Expert Webflow Developer | Webflow Development Agency | 2BTech"
                description="2BTech is a leading webflow development agency. Hire webflow developer experts for custom webflow development, design services, and migrations. Fast delivery, exceptional results"
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="Expert Webflow Developer for Growth"
                description="Scale your business with a trusted webflow development agency delivering exceptional results fast"
                formLabel="Get Free Webflow development Consultation"
                buttonText="Get a Free Consultation"
                TrustBar={() => (
                    <div></div>
                )}
            />
            <AboutSection
                title="Partner With Our Agency That Delivers Excellence"
                description="At 2BTech, we specialize in transforming your vision into powerful Webflow websites that drive results. As a leading webflow development agency, we combine technical expertise with strategic thinking to deliver custom solutions that scale with your business. When you hire webflow developer talent from our team, you're gaining access to specialists who understand the platform inside and out. From complex animations to advanced CMS implementations, our webflow expert team handles projects of any complexity with precision and speed, ensuring your website becomes your most valuable marketing asset"
                src="/assets/services/webflow/aboutWebflow.svg"
                width={430}
            />
            <ServiceSection
                heading="Comprehensive Services"
                subHeading="Our Webflow Development Services"
                description="2BTech offers end-to-end webflow design services tailored to your business needs. Our custom webflow development expertise covers everything from simple landing pages to complex enterprise platforms, ensuring exceptional quality every time"
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "Custom Webflow Development",
                        description:
                            "We build pixel-perfect, high-performance Webflow websites using custom code and advanced animations that captivate users while ensuring seamless responsiveness and fast load times.",
                    },
                    {
                        id: 2,
                        title: "Webflow CMS Implementation",
                        description:
                            "Our team creates scalable CMS structures with intuitive interfaces and automated workflows, empowering your team to manage and update content effortlessly without technical skills.",
                    },
                    {
                        id: 3,
                        title: "Webflow Migration Services",
                        highlightImage: "/assets/services/webflow/webflowMigration.svg",
                        description:
                            "We migrate websites from WordPress, Wix, Shopify, or other platforms to Webflow—preserving SEO, maintaining content integrity, and enhancing site performance throughout the process.",
                    },
                    {
                        id: 4,
                        title: "Figma to Webflow Conversion",
                        description:
                            "Transform your Figma designs into fully functional Webflow websites with pixel-perfect precision, responsive layouts, and engaging interactions that bring your vision to life.",
                    },
                    {
                        id: 5,
                        title: "Webflow E-commerce Solutions",
                        description:
                            "We develop conversion-optimized online stores with secure payments, inventory management, and smooth checkout experiences that boost sales and customer satisfaction.",
                    },
                    {
                        id: 6,
                        title: "Custom JavaScript & Integrations",
                        smallImage: "/assets/services/webflow/jsIntegration.svg",
                        description:
                            "Extend Webflow’s power with custom JavaScript, API integrations, Zapier automations, and advanced functionality",
                    },
                    {
                        id: 7,
                        title: "Webflow Maintenance & Support",
                        description:
                            "Keep your site performing flawlessly with ongoing maintenance, content updates, speed optimization, and proactive technical support for long-term reliability.",
                    },
                    {
                        id: 8,
                        title: "Webflow Training & Consulting",
                        description:
                            "We provide hands-on Webflow training, documentation, and strategic consulting to empower your team to manage and scale your website confidently.",
                    },
                ]}
            />
            <WhatIsSection
                heading="Why Work With 2BTech as"
                highlight="Your Webflow Expert"
                description="Choosing 2BTech as your Webflow development agency means partnering with a team dedicated to excellence, innovation, and your success. Here’s why we stand out:"
                definitionOne={definitionOne}
                imageOne="/assets/services/webflow/experts.svg"
            />
            <OurModals
                headingHighlight="Flexible Engagement Models"
                heading="Designed for Your Project Success"
                src="/assets/services/webflow/webflowModal.webp"
                description=" At 2BTech, we understand every project has unique requirements and budgets. Choose the engagement model that best fits your timeline, scope, and collaboration preferences"
                subheading="Fixed-Price Model"
                subDescription="Perfect for well-defined projects with clear deliverables and timelines. You receive a comprehensive fixed quote upfront with defined milestones, ensuring complete budget predictability and peace of mind throughout development"
                subheadingTwo="Dedicated Team Model"
                subDescriptionTwo="Ideal for ongoing projects requiring continuous collaboration and flexibility. You get a dedicated webflow expert working exclusively on your projects, functioning as an integrated extension of your internal team"
            />
            <AIStackSection/>

            <Banner
                title="Empower Your Brand with Webflow"
                description="Design, build, and launch stunning websites faster."
                src="/assets/services/webflow/webflowBanner.webp"
            />
            <OurFlowSection
                heading="Critical Elements Missing"
                headingHighlight="Webflow Sites"
                description="Many Webflow websites miss these crucial features that impact performance, user experience, conversions, and long-term scalability."
                services={[
                    {
                        title: "Optimized CMS Structure",
                        duration: "",
                        description:
                            "Poorly planned CMS architecture limits scalability. Strategic collection planning with proper relationships and filters ensures effortless content management and sustainable growth.",
                    },
                    {
                        title: "Advanced Interactions & Animations",
                        duration: "",
                        description:
                            "Static sites fail to engage users. Thoughtful micro-interactions, scroll-triggered animations, and dynamic elements create memorable, conversion-driven experiences.",
                    },
                    {
                        title: "Mobile-First Responsive Design",
                        duration: "",
                        description:
                            "Desktop-first design creates poor mobile UX. True mobile-first development ensures flawless performance across devices, improving engagement and rankings.",
                    },
                    {
                        title: "SEO & Performance Optimization",
                        duration: "",
                        description:
                            "A beautiful site means little without visibility. Proper SEO setup, image optimization, and lazy loading boost ranking and load speed.",
                    },
                    {
                        title: "Accessibility Standards Compliance",
                        duration: "",
                        description:
                            "Inaccessible sites exclude users and risk penalties. WCAG-compliant builds with semantic HTML and screen reader support expand your reach responsibly.",
                    },
                    {
                        title: "Clean & Maintainable Code",
                        duration: "",
                        description:
                            "Messy code causes maintenance issues. Following Client-First methodology ensures your Webflow site stays scalable, organized, and easy to update.",
                    },
                ]}
            />

            <FaqSection
                Faq={faqs}
            />
            <FinalCTASection
                heading="Ready to Build a High-Performing Webflow Website?"
                description="When you hire webflow developer talent from 2BTech, you're choosing a webflow development agency committed to your success. Our webflow expert team delivers custom webflow development solutions that combine stunning design with flawless functionality. Whether you need webflow design services for a simple landing page or complex enterprise platform, we have the expertise and dedication to exceed your expectations"
            />
            <Footer/>
        </div>
    );
}
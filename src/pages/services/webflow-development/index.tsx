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
    const platforms = [
        {
            icon: (  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-16 h-16">
                <g id="SVGRepo_iconCarrier">
                    <circle cx="512" cy="512" r="512" fill="#4353ff"></circle>
                    <path
                        fill="#fff"
                        d="M399.57 494.6c0-11.39-11.07-23.48-30.24-23.48-21.52 0-45.16 15.79-48.77 47.28-3.69 31.81 16.1 45.95 36 45.95s30.39-7.78 41.08-18.14c-9.19-11.55-21-6.2-23.33-5a23.9 23.9 0 0 1-12.33 3c-7.7 0-15.55-3.46-15.55-17.83 49.37-4.92 53.14-20.38 53.14-31.78m-24.43 1.88c-.31 3.53-1.73 9.58-26.7 13 5.26-18.69 15.32-20.11 19.95-20.11a6.52 6.52 0 0 1 6.76 7.12zm-83.57 3.06s-10.6 33.3-11.47 36c-.3-2.77-8.1-62.54-8.1-62.54-18.06 0-27.72 12.88-32.83 26.47 0 0-12.88 33.38-14 36.21-.08-2.59-2-35.81-2-35.81-1.1-16.65-16.34-26.78-28.67-26.78l14.92 90.56c18.93-.08 29.14-12.88 34.48-26.47 0 0 11.39-29.45 11.86-30.79.08 1.26 8.17 57.26 8.17 57.26 19 0 29.22-12 34.71-25.13l26.62-65.42c-18.68-.02-28.58 12.79-33.68 26.45zM469.31 471c-11.7 0-20.66 6.36-28.2 15.71v-.08l6.75-54.43c-15.55 0-28.2 13.51-30.63 33.61l-11.78 97.15c9 0 18.46-2.59 23.56-9.19a26.09 26.09 0 0 0 21.52 10.6c26.23 0 44.22-30.47 44.22-59.06C494.6 479.21 482 471 469.31 471m-2.43 46.73c-2.75 15.94-11.62 26.78-20.18 26.78s-12.33-3.85-12.33-3.85c1.65-14 2.67-22.54 5.81-29.92s10.6-19.16 18.38-19.16c7.61-.04 11.07 10.09 8.32 26.11zm93.38-44.61H542l.08-.94c1.26-11.94 4.08-18.22 13.43-19.24 6.36-.63 9.19-3.93 9.9-7.54.55-2.83 2.28-12.64 2.28-12.64-36.76-.24-48.3 15.63-51.29 39.82l-.08.55h-.39c-6 0-12.57 6.75-13.67 15.32l-.39 3.14h12.25l-10.29 85-3.14 15.24c.39 0 .86.08 1.26.08 17.2-.63 28.2-14.22 30.63-33.93l8-66.37h5.73c5.65 0 12.25-5.65 13.43-15.08zm95.19-1.57c-21.13 0-41.08 15.55-47.2 40s3.14 53.33 34.24 53.33 48.93-30.08 48.93-55.13c0-24.96-16.88-38.24-35.97-38.24zm8.56 45.4c-1.1 11.07-6 27.88-19.32 27.88s-11.55-19.63-10.21-29c1.41-10 7-24.19 19-24.19 10.77-.02 11.79 12.78 10.52 25.27zm131.79-17.4s-10.6 33.3-11.47 36c-.31-2.83-8.09-62.6-8.09-62.6-18.06 0-27.72 12.88-32.83 26.47 0 0-12.88 33.38-14 36.21-.08-2.59-2-35.81-2-35.81-1.1-16.65-16.34-26.78-28.67-26.78l14.84 90.56c18.93-.08 29.14-12.88 34.48-26.47 0 0 11.39-29.45 11.78-30.79.16 1.26 8.17 57.26 8.17 57.26 19 0 29.22-12 34.71-25.13l26.62-65.42c-18.62.03-28.51 12.84-33.54 26.5m-218.26-66.84-15.39 124.18L559 572.2c.39 0 .86.08 1.26.08 16.57-.24 28.35-14.77 30.55-33.07l8.88-71.21c2.67-21.78-10.29-35.29-22.15-35.29"
                    ></path>
                </g>
            </svg>),
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
                platforms={platforms}
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
                src="/assets/services/webflow/webflowModal.svg"
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
                src="/assets/services/webflow/webflowBanner.jpg"
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
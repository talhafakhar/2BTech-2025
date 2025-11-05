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
import TestimonialSection from "@/components/Home/TestimonialSection";
export default function productDesign() {
    const faqs = [
        {
            id: 1,
            question: "What services does your user experience design agency provide?",
            answer:
                "2BTech offers comprehensive UI/UX design services including user research, mobile app and web app design, interface design, prototyping, usability testing, design system development, and product redesigns. We handle everything from strategy to implementation.",
        },
        {
            id: 2,
            question: "How long does a typical UI/UX design project take?",
            answer:
                "Timelines vary by project scope. A mobile app design typically takes 8–12 weeks, while larger web applications may take 12–16 weeks. We provide a detailed timeline during the initial consultation.",
        },
        {
            id: 3,
            question: "What industries does your product design company serve?",
            answer:
                "Our product design expertise spans healthcare, fintech, e-commerce, SaaS, education, real estate, logistics, and entertainment. We adapt our approach to fit the unique needs of each sector.",
        },
        {
            id: 4,
            question: "Do you provide ongoing support after the design is complete?",
            answer:
                "Yes. We offer post-launch support including usability monitoring, iterative improvements, design system maintenance, and optimization. Our goal is long-term success and continuous evolution with your users’ needs.",
        },
        {
            id: 5,
            question: "What makes 2BTech different from other UI/UX design services?",
            answer:
                "2BTech stands out through strategic thinking, expert execution, transparent collaboration, and measurable results. We create not just beautiful designs, but meaningful experiences that solve real business problems.",
        },
    ];
    const definitionOne = [
        {
            title: "Proven Track Record",
            description:
                "We've delivered 200+ successful projects across industries, consistently exceeding client expectations with innovative solutions that drive measurable results and transform businesses through exceptional user experience design.",
        },
        {
            title: "Expert Design Team",
            description:
                "Our multidisciplinary team includes seasoned UX researchers, UI designers, interaction specialists, and strategists who bring decades of combined expertise to every project we undertake.",
        },
        {
            title: "Data-Driven Approach",
            description:
                "Every design decision is backed by thorough research, analytics, and user testing, ensuring solutions are grounded in evidence rather than assumptions for higher success rates.",
        },
        {
            title: "Agile & Collaborative Process",
            description:
                "We work closely with your team through transparent, iterative sprints that encourage feedback, foster innovation, and ensure alignment throughout the entire design and development journey.",
        },
    ];

    return (
        <div className="font-syne">
            <NextSeo
                title="Top User Experience Design Agency | UI UX Design Services | 2BTech"
                description="2BTech is a leading user experience design agency offering expert UI UX design services, mobile app design, and digital product design. Transform your digital presence today"
                canonical="https://2btech.com/services/product-design"
                openGraph={{
                    url: "https://2btech.com/services/product-design",
                    title: "Top User Experience Design Agency | UI UX Design Services | 2BTech",
                    description:"2BTech is a leading user experience design agency offering expert UI UX design services, mobile app design, and digital product design. Transform your digital presence today",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/product-design.webp",
                            width: 1200,
                            height: 630,
                            alt: "Top User Experience Design Agency | UI UX Design Services | 2BTech",
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
                id="https://2btech.com/services/product-design"
                title="Top User Experience Design Agency | UI UX Design Services | 2BTech"
                description="2BTech is a leading user experience design agency offering expert UI UX design services, mobile app design, and digital product design. Transform your digital presence today"
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="Exceptional User Experience Design Agency"
                description="Transform your digital presence with award-winning UI UX design services that drive engagement and conversions"
                formLabel="Get Free Product Design Consultation"
                TrustBar={() => (
                    <div></div>
                )}
            />
            <AboutSection
                title="Partner Leading Product Design Agency That Delivers Results"
                description="At 2BTech, we specialize in creating exceptional digital experiences that captivate users and drive measurable business outcomes. As a trusted user experience design agency, we combine strategic thinking with innovative design to transform your vision into powerful digital products. Our comprehensive approach to digital product design ensures every touchpoint is optimized for engagement, retention, and conversion. From initial research to final implementation, we craft solutions that resonate with your audience and align perfectly with your business objectives, delivering interfaces that users love and results that matter"
                src="/assets/services/product/about.webp"
                width={500}
            />
            <ServiceSection
                heading="Comprehensive Services"
                subHeading="Our UI UX Design Services"
                description="2BTech offers end-to-end UI UX design services tailored to your unique business needs. Our product design company combines strategic insights with cutting-edge design methodologies to deliver solutions that exceed expectations and drive business growth"
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "User Research & Strategy",
                        description: "We conduct comprehensive user research, competitive analysis, and stakeholder interviews to craft data-driven strategies that guide every design decision and ensure alignment with target audiences.",
                    },
                    {
                        id: 2,
                        title: "Mobile App Design Services",
                        description: "Our mobile app design services create intuitive, engaging experiences for iOS and Android, delivering seamless navigation, stunning visuals, and high user retention.",
                    },
                    {
                        id: 3,
                        title: "Web App Design Services",
                        highlightImage: "/assets/services/product/websiteDesign.svg",
                        description: "We design responsive, conversion-focused web applications that blend elegant aesthetics with flawless functionality across all devices and browsers.",
                    },
                    {
                        id: 4,
                        title: "UI Design & Visual Identity",
                        description:
                            "Our designers build pixel-perfect interfaces and cohesive visual systems that enhance brand identity, capture attention, and elevate user engagement.",
                    },
                    {
                        id: 5,
                        title: "UX Design & Prototyping",
                        description:
                            "We create wireframes, user flows, and interactive prototypes to validate concepts early, minimize risk, and ensure seamless, intuitive user experiences.",
                    },
                    {
                        id: 6,
                        title: "Usability Testing & Optimization",
                        smallImage: "/assets/services/product/UsabilityTestingOptimization.svg",
                        description:
                            "Through real-user testing and analytics, we identify friction points, refine interactions, and continuously optimize usability for peak performance.",
                    },
                    {
                        id: 7,
                        title: "Design System Development",
                        description:
                            "We build scalable design systems with reusable components, detailed style guides, and documentation to ensure visual consistency and faster development.",
                    },
                    {
                        id: 8,
                        title: "Product Redesign & Modernization",
                        description:
                            "We revitalize legacy products with strategic redesigns that improve usability, refresh visuals, and enhance performance while preserving core user value.",
                    },
                ]}

            />
            <WhatIsSection
                heading="Why Partner With 2BTech as"
                highlight="Your Product Design Company"
                description="Choosing 2BTech as your user experience design agency means gaining a strategic partner dedicated to your success. Here's why businesses trust us for their UI UX design services:"
                definitionOne={definitionOne}
                imageOne="/assets/services/product/expert.webp"
            />
            <OurModals
                headingHighlight="Flexible Engagement Models"
                heading="Tailored to Your Business Needs"
                src="/assets/services/product/modal.webp"
                description="t 2BTech, we understand that every project is unique. That's why we offer flexible hiring models designed to fit your timeline, budget, and specific requirements"
                subheading="Fixed Model"
                subDescription="Perfect for well-defined projects with clear scope and timelines. You receive a fixed quote upfront with defined deliverables, milestones, and deadlines, ensuring complete budget predictability and peace of mind"
                subheadingTwo="Dedicated Team"
                subDescriptionTwo="Ideal for ongoing projects requiring continuous collaboration. You get a dedicated team of designers who work exclusively on your project, functioning as an extension of your in-house team"
            />
            <AIStackSection
                heading={
                    <>
                        <span className="text-primary">Stack</span> we use
                    </>
                }
                stackLogos={[
                    { src: "/assets/services/product/stack/stack-1.svg", alt: "Logo 1" },
                    { src: "/assets/services/product/stack/stack-2.svg", alt: "Logo 2" },
                    { src: "/assets/services/product/stack/stack-3.svg", alt: "Logo 3" },
                    { src: "/assets/services/product/stack/stack-4.svg", alt: "Logo 4" },
                    { src: "/assets/services/product/stack/stack-5.svg", alt: "Logo 5" },
                    { src: "/assets/services/product/stack/stack-6.svg", alt: "Logo 6" },
                    { src: "/assets/services/product/stack/stack-7.svg", alt: "Logo 7" },
                    { src: "/assets/services/product/stack/stack-8.svg", alt: "Logo 8" },
                    { src: "/assets/services/product/stack/stack-9.svg", alt: "Logo 9" },
                    { src: "/assets/services/product/stack/stack-10.svg", alt: "Logo 10" },
                    { src: "/assets/services/product/stack/stack-11.svg", alt: "Logo 10" },
                    { src: "/assets/services/product/stack/stack-12.svg", alt: "Logo 10" },
                    { src: "/assets/services/product/stack/stack-13.svg", alt: "Logo 10" },
                ]}
            />
            <OurFlowSection
                heading="Growth-Driving"
                headingHighlight="Design Elements"
                description="Many websites and applications miss these critical elements that directly impact user engagement, retention, and business growth."
                services={[
                    {
                        title: "Intuitive Navigation Architecture",
                        duration: "",
                        description:
                            "Complex or confusing navigation frustrates users and increases bounce rates. Clear, logical navigation ensures users find what they need instantly, improving satisfaction and conversions.",
                    },
                    {
                        title: "Mobile-First Responsive Design",
                        duration: "",
                        description:
                            "With over 60% of traffic from mobile devices, responsive design is essential. Mobile-optimized experiences capture and retain the growing mobile audience effectively.",
                    },
                    {
                        title: "Accessibility Compliance Standards",
                        duration: "",
                        description:
                            "Accessible design expands audience reach and shows social responsibility. Meeting WCAG guidelines ensures everyone can use your product regardless of ability or device.",
                    },
                    {
                        title: "Performance Optimization Strategies",
                        duration: "",
                        description:
                            "Slow-loading interfaces drive users away. Optimized performance through efficient code and compressed assets keeps users engaged and boosts SEO rankings.",
                    },
                    {
                        title: "Strategic Conversion Funnels",
                        duration: "",
                        description:
                            "Random layouts don’t convert. Purposeful user journeys guide visitors toward desired actions, maximizing conversions and ROI throughout the experience.",
                    },
                    {
                        title: "Consistent Brand Experience",
                        duration: "",
                        description:
                            "Inconsistent design erodes trust. A cohesive visual language, tone, and interaction style across all touchpoints strengthen brand recognition and user confidence.",
                    },
                ]}
            />
            <Banner
                title="Innovative Product Design Services"
                description="Designing intuitive digital products that drive growth"
                src="/assets/services/product/bannerBg.jpg"
            />
         <TestimonialSection/>
            <FaqSection
                Faq={faqs}
            />
            <FinalCTASection
                heading="Ready to Transform Your Digital Experience?"
                description="Our user experience design agency is ready to bring your vision to life. Whether you need mobile app design services, web app design services, or comprehensive digital product design, our product design company has the expertise and dedication to exceed your expectations"
            />
            <Footer/>
        </div>
    );
}
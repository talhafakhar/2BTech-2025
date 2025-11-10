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
import CustomTestimonials from "@/components/services/TestimonialSection";
import AIStackSection from "@/components/services/AIStackSection";
export default function aiDigitalTransformationService() {
    const faqs = [
        {
            id: 1,
            question: "What are AI digital transformation services?",
            answer:
                "AI digital transformation services involve integrating artificial intelligence technologies into your business operations to enhance efficiency, automate processes, improve decision-making, and create competitive advantages. At 2BTech, we provide end-to-end AI solutions including custom development, strategy consulting, machine learning integration, and intelligent automation tailored to your specific business needs.",
        },
        {
            id: 2,
            question: "How long does an AI transformation project take?",
            answer:
                "Project timelines vary based on scope and complexity. Simple AI integrations can be completed in 4-6 weeks, while comprehensive transformation initiatives typically take 3-6 months. Our component-based approach significantly reduces development time compared to building from scratch. During our discovery phase, we provide accurate timeline estimates based on your specific requirements.",
        },
        {
            id: 3,
            question: "Do I need existing AI infrastructure to start?",
            answer:
                "No. 2BTech works with businesses at any stage of their AI journey. Whether you're starting from zero or enhancing existing systems, we meet you where you are. Our component-based approach leverages established AI models and technologies, eliminating the need for extensive infrastructure investment. We handle everything from assessment to deployment.",
        },
        {
            id: 4,
            question: "Which industries can benefit from AI digital transformation services?",
            answer:
                "Virtually every industry benefits from AI transformation. We specialize in financial services, healthcare, retail, manufacturing, education, logistics, and more. Each industry has unique challenges and opportunities for AI application—from fraud detection in finance to predictive maintenance in manufacturing to personalized learning in education.",
        },
        {
            id: 5,
            question: "How do you ensure AI solutions align with our business goals?",
            answer:
                "We begin every project with comprehensive discovery and consultation. Our team analyzes your business processes, challenges, objectives, and existing systems. We then develop a strategic roadmap that aligns AI initiatives directly with your business goals, ensuring measurable ROI and sustainable competitive advantage throughout implementation.",
        },
        {
            id: 6,
            question: "What is a component-based AI development approach?",
            answer:
                "Component-based development means we leverage proven, established AI models and ready-to-deploy components rather than building from scratch. This approach reduces development time by 60%, minimizes costs, ensures reliability, and allows rapid deployment. We customize these components to your exact requirements while maintaining quality and performance.",
        },
        {
            id: 7,
            question: "Will AI replace our existing workforce?",
            answer:
                "No. AI augments and empowers your workforce rather than replacing it. Our solutions automate repetitive, time-consuming tasks, allowing your team to focus on strategic, creative, and high-value activities. Most clients report improved employee satisfaction as team members shift from mundane tasks to more meaningful work.",
        },
        {
            id: 8,
            question: "How do you handle data security and privacy?",
            answer:
                "Data security is paramount. We implement industry-leading security measures including encryption, secure data transmission, access controls, and compliance with regulations like GDPR, HIPAA, and industry-specific standards. All AI models can be deployed according to your security requirements, including on-premise or private cloud solutions.",
        },
        {
            id: 9,
            question: "What support do you provide after AI solution deployment?",
            answer:
                "2BTech provides comprehensive post-deployment support including monitoring, maintenance, optimization, and updates. We offer flexible support packages ensuring your AI solutions continue delivering value as your business evolves. Our team remains available for enhancements, scaling, and addressing any challenges that arise.",
        },
    ];
    const definitionOne = [
        {
            title: "Massive Cost Savings",
            description:
                "Reduce mobile app development cost by 40–60% with a single codebase serving both platforms. Invest savings in features, marketing, or other business priorities instead of duplicate development.",
        },
        {
            title: "Launch on Both Platforms Simultaneously",
            description:
                "Reach iOS and Android users on day one without waiting for separate builds. Capture maximum market opportunity immediately with a unified launch strategy.",
        },
        {
            title: "Single Development Team",
            description:
                "One team, one codebase, one timeline. No coordination between separate iOS and Android teams. Streamlined communication and consistent quality across platforms.",
        },
        {
            title: "Faster Time to Market",
            description:
                "Ship features 50% faster than native development. Perfect for startups needing quick validation or enterprises maintaining competitive advantage through speed.",
        },
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="AI Digital Transformation Services | Custom AI Solutions - 2BTech"
                description="Transform your business with 2BTech's AI digital transformation services. Custom AI solutions, machine learning integration, and intelligent automation for measurable results. Schedule your consultation today"
                canonical="https://2btech.com/services/ai-digital-transformation-service"
                openGraph={{
                    url: "https://2btech.com/services/ai-digital-transformation-service",
                    title: "AI Digital Transformation Services | Custom AI Solutions - 2BTech",
                    description:"Transform your business with 2BTech's AI digital transformation services. Custom AI solutions, machine learning integration, and intelligent automation for measurable results. Schedule your consultation today",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/ai-digital-transformation-service.webp",
                            width: 1200,
                            height: 630,
                            alt: "AI Digital Transformation Services | Custom AI Solutions - 2BTech",
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
                id="https://2btech.com/services/ai-digital-transformation-service"
                title="AI Digital Transformation Services | Custom AI Solutions - 2BTech"
                description="Transform your business with 2BTech's AI digital transformation services. Custom AI solutions, machine learning integration, and intelligent automation for measurable results. Schedule your consultation today"
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="AI Digital Transformation Services That Scale"
                description="Transform your business with intelligent AI solutions designed to drive innovation, efficiency, and sustainable growth"
                formLabel="Get Free AI Digital Transformation Consultation"
                buttonText="Get started Today"
                TrustBar={() => (
                    <div></div>
                )}
            />
            <AboutSection
                title="Comprehensive AI Digital Transformation Services"
                description="Most companies know AI matters while few know where to start. That's where we come in. At 2BTech, we help businesses cut through the AI hype and build solutions that actually work. No buzzwords, no one-size-fits-all packages. We assess where you are, figure out what'll move the needle for your business, and build it. Whether you're automating repetitive tasks, improving how customers interact with your brand, or finding patterns in your data you didn't know existed, we focus on outcomes that impact your bottom line"
                src="/assets/services/aiDigital/aiDigitalTrasnformation.webp"
                width={500}
            />
            <ServiceSection
                heading="AI Digital Transformation Services"
                subHeading="Our AI Digital Transformation Expertise"
                description="2BTech delivers comprehensive AI digital transformation services designed to revolutionize your business operations. From intelligent automation to predictive analytics, we create custom AI solutions that drive measurable results and accelerate your digital transformation journey"
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "Custom AI Solution Development",
                        description:
                            "We build tailored AI solutions that solve real business challenges, integrate seamlessly with your systems, and deliver immediate, scalable value.",
                    },
                    {
                        id: 2,
                        title: "AI Strategy & Consulting",
                        description:
                            "Our experts assess your processes, identify AI opportunities, and create clear strategies that maximize ROI and long-term growth.",
                    },
                    {
                        id: 3,
                        title: "Intelligent Process Automation",
                        highlightImage: "/assets/services/aiDigital/intelligentProcessAutomation.webp",
                        description:
                            "Automate repetitive tasks with AI to reduce costs, improve accuracy, and free your team for higher-value work.",
                    },
                    {
                        id: 4,
                        title: "Machine Learning Integration",
                        description:
                            "Use predictive analytics and ML models to gain insights, forecast trends, and make smarter business decisions.",
                    },
                    {
                        id: 5,
                        title: "AI-Powered Chatbots & Virtual Assistants",
                        description:
                            "Deliver 24/7 customer support with intelligent chatbots that handle complex queries and improve user satisfaction.",
                    },
                    {
                        id: 6,
                        title: "Computer Vision & Image Recognition",
                        smallImage: "/assets/services/aiDigital/Vision.svg",
                        description:
                            "Leverage computer vision to automate quality checks, enhance security, and extract insights from visual data.",
                    },
                    {
                        id: 7,
                        title: "Natural Language Processing (NLP)",
                        description:
                            "Unlock meaning from text data using NLP for sentiment analysis, smart search, and automated content understanding.",
                    },
                    {
                        id: 8,
                        title: "AI Discovery & Technical Audit",
                        description:
                            "Identify the best AI use cases for your business and audit existing systems for performance, security, and scalability.",
                    },
                ]}
            />
            <WhatIsSection
                heading="Why 2BTech Leads in"
                highlight="AI Digital Transformation"
                description="As a premier AI digital transformation service provider, 2BTech combines deep technical expertise with a results-driven approach to help businesses harness the power of AI. Our team of seasoned data scientists, AI engineers, and industry experts work closely with you to understand your unique challenges and goals. We prioritize transparency, collaboration, and measurable outcomes in every project. From initial strategy to deployment and ongoing support, we ensure your AI initiatives deliver real business value and position you for future success in an increasingly digital world."
                definitionOne={definitionOne}
                imageOne="/assets/services/aiDigital/whyAiDigital.jpeg"
            />
            <OurModals
                headingHighlight="Flexible Engagement Models "
                heading="Tailored to Your Business Needs"
                src="/assets/services/aiDigital/AiDigitalModal.webp"
                description="2BTech offers flexible engagement models designed to match your project scope, budget, and timeline. Choose the approach that best aligns with your AI transformation objectives"
                subheading="Fixed Price Model"
                subDescription=" Ideal for well-defined projects with clear requirements and scope. You receive a fixed quote upfront with guaranteed deliverables, timelines, and costs—perfect for predictable budgeting"
                subheadingTwo="Dedicated Team Model"
                subDescriptionTwo="Scale your capabilities with dedicated AI specialists who integrate seamlessly with your team. Full control over resources, flexible scaling, and direct communication ensure alignment with evolving needs"
            />
            <AIStackSection
                heading={
                    <>
                        <span className="text-primary">Stack</span> we use
                    </>
                }
                stackLogos={[
                    { src: "/assets/services/aiDigital/stack/stack-1.svg", alt: "Logo 1" },
                    { src: "/assets/services/aiDigital/stack/stack-2.svg", alt: "Logo 2" },
                    { src: "/assets/services/aiDigital/stack/stack-3.svg", alt: "Logo 3" },
                    { src: "/assets/services/aiDigital/stack/stack-4.svg", alt: "Logo 4" },
                    { src: "/assets/services/aiDigital/stack/stack-5.svg", alt: "Logo 5" },
                    { src: "/assets/services/aiDigital/stack/stack-6.svg", alt: "Logo 6" },
                    { src: "/assets/services/aiDigital/stack/stack-7.svg", alt: "Logo 7" },
                    { src: "/assets/services/aiDigital/stack/stack-8.svg", alt: "Logo 8" },
                    { src: "/assets/services/aiDigital/stack/stack-9.svg", alt: "Logo 9" },
                    { src: "/assets/services/aiDigital/stack/stack-10.svg", alt: "Logo 10" },
                ]}
            />

            <OurFlowSection
                heading="Transform Your Business"
                headingHighlight="Operations with AI"
                description="Many businesses miss critical opportunities for growth and efficiency by not leveraging AI's transformative potential."
                services={[
                    {
                        title: "Enhanced Operational Efficiency",
                        duration: "",
                        description:
                            "Automate repetitive tasks and streamline workflows. AI reduces costs by up to 40% while boosting accuracy and productivity.",
                    },
                    {
                        title: "Data-Driven Decision Making",
                        duration: "",
                        description:
                            "Turn raw data into insights. Predictive analytics and ML empower smarter, faster decisions that drive revenue and growth.",
                    },
                    {
                        title: "Superior Customer Experience",
                        duration: "",
                        description:
                            "Deliver 24/7 personalized engagement through AI chatbots and recommendation engines, improving satisfaction and reducing support costs.",
                    },
                    {
                        title: "Accelerated Innovation",
                        duration: "",
                        description:
                            "Use AI-powered testing and optimization to speed up product development, enabling faster iteration and market advantage.",
                    },
                    {
                        title: "Scalable Growth Solutions",
                        duration: "",
                        description:
                            "Build AI infrastructure that scales effortlessly with business expansion, new markets, and evolving operational demands.",
                    },
                    {
                        title: "Risk Mitigation & Security",
                        duration: "",
                        description:
                            "Enhance protection with AI-driven threat detection that prevents fraud, ensures compliance, and secures critical data assets.",
                    },
                ]}
            />

            <Banner
                title="Unlock Your Potential with AI Digital Transformation"
                description="Leverage our expertise to implement AI solutions that drive growth across your organization."
                src="/assets/services/aiDigital/aiBanner.webp"
            />
            <CustomTestimonials/>
            <FaqSection
                Faq={faqs}
            />
            <FinalCTASection
                heading="Ready to Transform Your Business with AI?"
                description="Don't let your competitors gain the AI advantage. Partner with 2BTech today and unlock the transformative power of artificial intelligence. Our expert team is ready to guide you through every step of your AI digital transformation journey—from strategy and development to deployment and beyond"
            />
            <Footer/>
        </div>
    );
}
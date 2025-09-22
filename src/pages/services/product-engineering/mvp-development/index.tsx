import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/web-development/HeroSection';
import React from "react";
import ExpertServices from "@/components/services/web-development/ExpertSection";
import WebServicesGrid from "@/components/services/web-development/ServicesSection";
import AreYouReady from "@/components/services/productEngineering/AreYouReadySection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import Banner from "@/components/Home/bannerSection";
import WhyTeamsChoose from "@/components/services/productEngineering/WhyWeChooseSection";
import WhoWeBuildMVPsFor from "@/components/services/productEngineering/ForWhooseSection";
import FaqSection from "@/components/Home/FaqSection";
import ContactFormUI from "@/components/About/ContactFormSection";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";

export default function MvpDevelopment() {
    const faqs = [
        {
            id: 1,
            question: "What is Bubble and why should I use it for development?",
            answer:
                "Bubble is a powerful no-code platform that enables you to build web applications quickly without traditional coding. It offers flexibility, scalability, and rapid development for startups and enterprises.",
        },
        {
            id: 2,
            question: "Can you help migrate my existing app to Bubble?",
            answer:
                "Yes, we provide seamless migration services from legacy systems or other platforms to Bubble while preserving your app’s core functionality and user experience.",
        },
        {
            id: 3,
            question: "Is Bubble scalable for growing businesses?",
            answer:
                "Absolutely. Bubble apps can handle scaling with plugins, APIs, and integrations, making it suitable for startups and businesses preparing for growth.",
        },
        {
            id: 4,
            question: "Do you provide post-launch support for Bubble applications?",
            answer:
                "Yes, we offer ongoing support, maintenance, and optimization services to keep your Bubble app running smoothly after launch.",
        },
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="MVP Development Services - Build, Launch, Scale | 2BTech"
                description="Transform your idea into a market-ready product with our expert MVP development services. We help startups and businesses validate concepts, engage users, and accelerate growth through lean, efficient solutions."
                canonical="https://2btech.com/services/product-engineering/mvp-development"
                openGraph={{
                    url: "https://2btech.com/services/product-engineering/mvp-development",
                    title: "MVP Development Services - Build, Launch, Scale | 2BTech",
                    description: "Transform your idea into a market-ready product with our expert MVP development services. We help startups and businesses validate concepts, engage users, and accelerate growth through lean, efficient solutions.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/mvp-development.webp",
                            width: 1200,
                            height: 630,
                            alt: "MVP Development Services - Build, Launch, Scale | 2BTech",
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
                id="https://2btech.com/services/product-engineering/mvp-development"
                description="Transform your idea into a market-ready product with our expert MVP development services. We help startups and businesses validate concepts, engage users, and accelerate growth through lean, efficient solutions."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="BUILD, LAUNCH, SCALE MVP DEVELOPMENT"
                description="Transform your idea into a market-ready product with our expert MVP development services. We help startups and businesses validate concepts, engage users, and accelerate growth through lean, efficient solutions."
                buttonText="Get a Free Consultation"
                formLabel="Free MVP Development Services Consultation?"
            />
            <ExpertServices
                title="Validate Your Idea with Expert MVP Development Services"
                description="MVP development focuses on building a lean, functional product with core features to test your idea in real markets. At 2BTech, we specialize in delivering custom MVP solutions that help startups and businesses launch faster, reduce risk, and scale with confidence."
                src="/assets/services/MVP.webp"
                width={400}
            />
            <WebServicesGrid
                heading="TYPES OF MVP DEVELOPMENT SERVICES"
                subHeading="From Idea to Scalable Product"
                description="Validate your idea and bring it to market faster with 2BTech’s MVP Development Services. Our expert team helps startups and businesses design, build, and launch minimum viable products that reduce risks and pave the way for scalable digital growth."
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "MVP Strategy & Consulting",
                        description: "Define your vision, validate ideas, and craft a clear roadmap to launch a successful MVP.",
                    },
                    {
                        id: 2,
                        title: "UI/UX Prototyping",
                        description: "Design intuitive wireframes and clickable prototypes to visualize your product before development.",
                    },
                    {
                        id: 3,
                        title: "Lean MVP Development",
                        description: "Build functional MVPs with only the core features needed to test market viability.",
                        highlightImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center",
                    },
                    {
                        id: 4,
                        title: "Mobile MVP Development",
                        description: "Deliver cross-platform mobile MVPs that give users seamless app experiences on iOS and Android.",
                    },
                    {
                        id: 5,
                        title: "Web App MVP Development",
                        description: "Launch scalable web-based MVPs quickly to validate your product in real-world scenarios.",
                    },
                    {
                        id: 6,
                        title: "MVP Testing & Validation",
                        description: "Run user testing and feedback loops to refine your MVP and guide future product iterations.",
                        smallImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    },
                    {
                        id: 7,
                        title: "Scaling & Product Engineering",
                        description: "Transform your MVP into a full-featured product with advanced engineering and integrations.",
                    },
                    {
                        id: 8,
                        title: "MVP Maintenance & Support",
                        description: "Ensure continuous improvement, stability, and feature updates for your MVP post-launch.",
                    },
                ]}
            />
            <WhyTeamsChoose
                title="Why Teams Choose"
                titleTwo="2BTech"
                description="Expert MVP Development to Validate Ideas and Accelerate Growth"
                services={
                    [
                        {
                            title: "Launch in Under 30 Days",
                            description: "Agile sprints with focused teams deliver working MVPs quickly.",
                            color: "blue"
                        },
                        {
                            title: "Validate with Real Users",
                            description: "Test features, UX, and demand with real customer feedback.",
                            color: "red"
                        },
                        {
                            title: "Build for Future Growth",
                            description: "Solid architecture built to support scaling or pivoting.",
                            color: "blue"
                        }
                    ]
                }
            />
            <Banner
                title="Kickstart Your MVP Project Today"
                description="From idea to launch, we build custom MVPs quickly and efficiently"
                src="/assets/services/mvp-bg.webp"
            />
            <WhoWeBuildMVPsFor
                audiences={
                    [
                        {
                            title: "Startup Founders",
                            description: "Go from pitch to product with a high-speed dev team.",
                            icon: "🚀",
                            color: "blue",
                            accent: "from-primary to-primary",
                            src: "/assets/services/startup-founders.svg",
                        },
                        {
                            title: "VC-Backed Startups",
                            description: "Validate market demand before scaling your platform.",
                            icon: "💰",
                            color: "red",
                            accent: "from-secondary to-red-600",
                            src: "/assets/services/VCBackedStartups.svg",
                        },
                        {
                            title: "Innovation Teams",
                            description: "Test new ideas with minimal risk and rapid delivery.",
                            icon: "💡",
                            color: "blue",
                            accent: "from-blue-500 to-secondary",
                            src: "/assets/services/InnovationTeams.svg",
                        },
                    ]
                }
                title="MVPs For"
                description="Empowering Visionaries with Tailored MVP Solutions"
            />
            <TestimonialSection/>
            <FaqSection
                Faq={faqs}
            />
            <AreYouReady
                buttonText="Kick off now"
                srcOne="/assets/services/Image1.webp"
                srcTwo="/assets/services/Phone.webp"
            />
            <ContactFormUI/>
            <Footer/>
        </div>
    );
}
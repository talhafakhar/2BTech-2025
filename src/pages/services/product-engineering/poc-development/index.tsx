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

export default function PocDevelopment() {
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
                title="POC Development Services - Validate, Test, Innovate | 2BTech"
                description="Turn your vision into a validated proof of concept with our expert POC development services. We help businesses and startups test ideas, validate feasibility, and accelerate innovation with lean, functional prototypes."
                canonical="https://2btech.com/services/product-engineering/poc-development"
                openGraph={{
                    url: "https://2btech.com/services/product-engineering/poc-development",
                    title: "POC Development Services - Validate, Test, Innovate | 2BTech",
                    description: "Turn your vision into a validated proof of concept with our expert POC development services. We help businesses and startups test ideas, validate feasibility, and accelerate innovation with lean, functional prototypes.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/poc-development.webp",
                            width: 1200,
                            height: 630,
                            alt: "POC Development Services - Validate, Test, Innovate | 2BTech",
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
                id="https://2btech.com/services/product-engineering/poc-development"
                description="Turn your vision into a validated proof of concept with our expert POC development services. We help businesses and startups test ideas, validate feasibility, and accelerate innovation with lean, functional prototypes."
                lastReviewed={new Date().toISOString()}
            />

            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />

            <HeroSection
                title="VALIDATE, TEST, INNOVATE POC DEVELOPMENT"
                description="Turn your concept into a validated proof of concept with our expert POC development services. We help businesses and startups test feasibility, gather feedback, and accelerate innovation before investing in full-scale development."
                buttonText="Get a Free Consultation"
                formLabel="Free POC Development Services Consultation?"
            />

            <ExpertServices
                title="Validate Your Idea with Expert POC Development"
                description="POC development helps organizations and startups validate ideas, test assumptions, and determine feasibility before scaling. At 2BTech, we deliver rapid, cost-effective POC solutions that reduce risks and accelerate innovation."
                src="/assets/services/POC.webp"
                width={400}
            />

            <WebServicesGrid
                heading="TYPES OF POC DEVELOPMENT SERVICES"
                subHeading="From Concept to Validation"
                description="Accelerate innovation and validate your ideas with 2BTech’s POC Development Services. Our expert team helps startups and enterprises design, build, and test proof of concepts to reduce risks and set the stage for future growth."
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "POC Strategy & Consulting",
                        description: "Define your goals, validate assumptions, and create a roadmap for successful proof of concept execution.",
                    },
                    {
                        id: 2,
                        title: "Rapid Prototyping",
                        description: "Build interactive prototypes to quickly test your ideas with stakeholders and users.",
                    },
                    {
                        id: 3,
                        title: "Technology Feasibility Analysis",
                        description: "Validate the technical feasibility of your solution with focused experiments and lean builds.",
                        highlightImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center",
                    },
                    {
                        id: 4,
                        title: "Mobile POC Development",
                        description: "Test mobile-first ideas with rapid cross-platform proof of concepts for iOS and Android.",
                    },
                    {
                        id: 5,
                        title: "Web App POC Development",
                        description: "Quickly validate web-based solutions by building lightweight proof of concepts.",
                    },
                    {
                        id: 6,
                        title: "User Testing & Feedback",
                        description: "Engage early users and stakeholders to refine ideas and validate demand.",
                        smallImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    },
                    {
                        id: 7,
                        title: "Scaling from POC to MVP",
                        description: "Evolve your validated POC into a functional MVP with advanced features and integrations.",
                    },
                    {
                        id: 8,
                        title: "POC Maintenance & Support",
                        description: "Ensure your proof of concept stays relevant and adaptable during its evaluation phase.",
                    },
                ]}
            />

            <WhyTeamsChoose
                title="Why Teams Choose"
                titleTwo="2BTech"
                description="Expert POC Development to Validate Ideas and Accelerate Innovation"
                services={
                    [
                        {
                            title: "Rapid Validation",
                            description: "Quickly test and validate ideas before investing in full development.",
                            color: "blue"
                        },
                        {
                            title: "Feasibility & Risk Reduction",
                            description: "Identify technical and business challenges early to minimize risks.",
                            color: "red"
                        },
                        {
                            title: "Foundation for Growth",
                            description: "Create a solid foundation for MVPs and future products.",
                            color: "blue"
                        }
                    ]
                }
            />

            <Banner
                title="Kickstart Your POC Project Today"
                description="From idea validation to technical feasibility, we build proof of concepts that accelerate innovation"
                src="/assets/services/poc-bg.webp"
            />

            <WhoWeBuildMVPsFor
                audiences={
                    [
                        {
                            title: "Startup Founders",
                            description: "Validate your innovative ideas before pitching or scaling.",
                            icon: "🚀",
                            color: "blue",
                            accent: "from-primary to-primary",
                            src: "/assets/services/startup-founders.svg",
                        },
                        {
                            title: "Enterprises & Innovation Teams",
                            description: "Test new concepts with minimal risk and fast turnaround.",
                            icon: "💡",
                            color: "red",
                            accent: "from-secondary to-red-600",
                            src: "/assets/services/InnovationTeams.svg",
                        },
                        {
                            title: "VC-Backed Startups",
                            description: "Demonstrate proof of feasibility to secure investments.",
                            icon: "💰",
                            color: "blue",
                            accent: "from-blue-500 to-secondary",
                            src: "/assets/services/VCBackedStartups.svg",
                        },
                    ]
                }
                title="POCs For"
                description="Helping Innovators Validate Ideas with Tailored POC Solutions"
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
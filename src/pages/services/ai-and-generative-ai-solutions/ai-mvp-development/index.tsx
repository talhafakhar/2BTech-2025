import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/Ai/HeroSection';
import React from "react";
import TestimonialSection from "@/components/Home/TestimonialSection";
import ExpertServices from "@/components/services/web-development/ExpertSection";
import AiServiceIntro from '@/components/services/Ai/AiServiceSection';
import WebServicesGrid from "@/components/services/web-development/ServicesSection";
import AiFlow from "@/components/services/Ai/FlowSection";
import Banner from "@/components/Home/bannerSection";
import CTASection from "@/components/Home/CTASection";
import FaqSection from "@/components/Home/FaqSection";
import DeployAISection from "@/components/services/Ai/PreferedPlatfromSection";
import GenerativeAITrust from "@/components/services/Ai/GenerativeAiTrustSection";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";

export default function AiMvpDevelopment() {
    const faqs = [
        {
            id: 1,
            question: "What is an AI MVP?",
            answer:
                "An AI MVP (Minimum Viable Product) is a lightweight version of an AI-powered product that includes only the core features necessary to validate the concept, test with users, and gather feedback before scaling."
        },
        {
            id: 2,
            question: "Why should I start with an AI MVP?",
            answer:
                "Starting with an AI MVP reduces risk, lowers costs, and speeds up time-to-market. It allows you to test your idea with real users and make data-driven decisions before committing to full-scale development."
        },
        {
            id: 3,
            question: "How long does it take to build an AI MVP?",
            answer:
                "Most AI MVPs can be developed within 8–12 weeks, depending on the complexity of the idea, data availability, and desired features."
        },
        {
            id: 4,
            question: "What technologies do you use for AI MVP development?",
            answer:
                "We leverage leading AI platforms such as OpenAI, Google Cloud AI, AWS, and Azure along with custom machine learning models, ensuring scalability and performance."
        },
        {
            id: 5,
            question: "Can my AI MVP later evolve into a full product?",
            answer:
                "Yes. Our AI MVPs are designed with scalability in mind, allowing you to expand features, integrate with other systems, and move toward a full-fledged product seamlessly."
        }
    ];

    return (
        <div className="font-syne">
            <NextSeo
                title="AI MVP Development Services | 2BTech"
                description="Validate your AI ideas faster with our AI MVP development services. We help you design, build, and launch a scalable AI prototype tailored to your business needs."
                canonical="https://2btech.com/services/ai-and-generative-ai-solutions/ai-mvp-development"
                openGraph={{
                    url: "https://2btech.com/services/ai-and-generative-ai-solutions/ai-mvp-development",
                    title: "AI MVP Development Services | 2BTech",
                    description: "Validate your AI ideas faster with our AI MVP development services. We help you design, build, and launch a scalable AI prototype tailored to your business needs.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/ai-mvp-development.webp",
                            width: 1200,
                            height: 630,
                            alt: "AI MVP Development Services 2BTech",
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
                id="https://2btech.com/services/ai-and-generative-ai-solutions/ai-mvp-development"
                description="Validate your AI ideas faster with our AI MVP development services. We help you design, build, and launch a scalable AI prototype tailored to your business needs."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />

            <HeroSection
                title="AI-Powered MVPs (Minimum Viable Product)"
                description="Transform your AI idea into a working prototype in weeks, not months. Build smarter, launch faster, and scale with confidence."
                path="/assets/services/otherImages/aiMvp.webp"
                buttonText="Start Your AI MVP Today"
            />
            <AiServiceIntro
                title="AI MVP Development"
                description="Our AI MVP development services help you transform innovative ideas into functional prototypes quickly and cost-effectively. We guide you through ideation, design, and deployment, ensuring your MVP is scalable, user-friendly, and ready for real-world validation."
                path="/assets/services/otherImages/aiMvp.svg"
            />

            <ExpertServices
                title="Why Build an AI MVP?"
                description="An AI MVP allows you to validate your concept quickly and cost-effectively. By focusing on core features, you can launch a functional product that proves value, gathers user feedback, and attracts early investors — all while minimizing risk."
                src="/assets/services/otherImages/ai-mvp.svg"
                width={400}
            />

            <WebServicesGrid
                heading="OUR AI MVP DEVELOPMENT SERVICES"
                subHeading="From Idea to Prototype, Fast"
                description="Our AI MVP services are designed to bring your concepts to life quickly, with a focus on usability, scalability, and validation."
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "AI Product Strategy",
                        description: "Define your AI product vision, roadmap, and success metrics with our expert guidance.",
                    },
                    {
                        id: 2,
                        title: "Rapid Prototyping",
                        description: "Quickly design and deploy functional AI prototypes for early testing and validation.",
                    },
                    {
                        id: 3,
                        title: "Custom AI Model Development",
                        description: "Develop tailored machine learning models to power your MVP and deliver real business value.",
                        highlightImage: "/assets/services/otherImages/customAiModal.webp",
                    },
                    {
                        id: 4,
                        title: "Data Preparation & Training",
                        description: "Clean, structure, and train datasets to ensure accurate and reliable AI performance.",
                    },
                    {
                        id: 5,
                        title: "Integration with Applications",
                        description: "Embed your MVP into mobile apps, web apps, or business workflows for real-world use.",
                    },
                    {
                        id: 6,
                        title: "AI-Powered Analytics",
                        description: "Get actionable insights from your MVP with AI-driven dashboards and analytics.",
                        smallImage: "/assets/services/otherImages/aiAnalysis.webp",
                    },
                    {
                        id: 7,
                        title: "User Testing & Feedback",
                        description: "Test your AI MVP with real users, collect insights, and refine before scaling.",
                    },
                    {
                        id: 8,
                        title: "Scalability Planning",
                        description: "Prepare your MVP for the next stage by designing a roadmap for feature expansion and scaling.",
                    },
                ]}
            />
            <AiFlow
                title="From Idea"
                titleHighlight="to Working MVP"
                description="We streamline the entire process — from ideation to deployment — ensuring your AI MVP is functional, user-friendly, and scalable."
                imageSrc="/assets/services/otherImages/aiMvpFlow.svg"
                marginLeft="mx-auto"
            />
            <Banner
                title="Launch Your AI MVP in Just Weeks"
                src="/assets/services/otherImages/aiMvpBanner.svg"
            />

            <GenerativeAITrust
                title="85%"
                titleTwo="of startups succeed faster"
                titleThree="with MVP-first approach"
                titleFour="by reducing risks and validating ideas"
                titleFive="before full investment"
                imageSrc="/assets/services/otherImages/aiMvpTrust.webp"
            />

            <DeployAISection
                titleOne="We help you launch"
                titleTwo="AI MVPs"
                titleThree="on your preferred platform"
                cardOneTitle="AI MVP on AWS"
                cardOneDescription="Leverage the scalability and flexibility of AWS to deploy and test your AI MVP securely."
                cardOneSrc="/assets/services/aws.svg"
                cardTwoTitle="AI MVP on Azure"
                cardTwoDescription="Integrate your MVP with Azure AI services for secure and enterprise-ready deployments."
                cardTwoSrc="/assets/services/azure.svg"
            />

            <FaqSection Faq={faqs}/>
            <TestimonialSection/>
            <CTASection/>
            <Footer/>
        </div>
    );
}

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
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
import KeyAndStackSection from "@/components/services/Ai/KeyAndStackSection";

export default function AiAsAService() {
    const faqs = [
        {
            id: 1,
            question: "What is AI as a Service (AIaaS)?",
            answer:
                "AI as a Service (AIaaS) provides businesses with on-demand access to powerful AI tools, frameworks, and infrastructure without the need for building in-house systems. It enables organizations to integrate AI capabilities into their products and workflows easily."
        },
        {
            id: 2,
            question: "Why choose AI as a Service?",
            answer:
                "AIaaS reduces development costs, speeds up deployment, and allows companies to scale AI solutions flexibly. It removes the complexity of managing infrastructure and provides access to enterprise-grade AI models."
        },
        {
            id: 3,
            question: "What are common use cases of AIaaS?",
            answer:
                "Popular use cases include natural language processing, computer vision, chatbots, predictive analytics, recommendation engines, and workflow automation — all delivered as cloud-based AI solutions."
        },
        {
            id: 4,
            question: "Which platforms do you support for AIaaS?",
            answer:
                "We support leading platforms like AWS AI, Microsoft Azure AI, Google Cloud AI, and OpenAI, as well as custom AI deployments tailored to your business needs."
        },
        {
            id: 5,
            question: "Can AIaaS solutions be customized for my business?",
            answer:
                "Yes, our AIaaS offerings are highly customizable. We design and deploy solutions that align with your industry, data, and workflows while ensuring security and scalability."
        }
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="AI as a Service (AIaaS) Solutions | 2BTech"
                description="Unlock the power of artificial intelligence without building from scratch. Our AI as a Service solutions let you integrate scalable AI into your business processes seamlessly."
                canonical="https://2btech.com/services/ai-and-generative-ai-solutions/ai-as-a-service"
                openGraph={{
                    url: "https://2btech.com/services/ai-and-generative-ai-solutions/ai-as-a-service",
                    title: "AI as a Service (AIaaS) Solutions | 2BTech",
                    description: "Unlock the power of artificial intelligence without building from scratch. Our AI as a Service solutions let you integrate scalable AI into your business processes seamlessly.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/ai-as-a-service.webp",
                            width: 1200,
                            height: 630,
                            alt: "AI as a Service Solutions 2BTech",
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
                id="https://2btech.com/services/ai-and-generative-ai-solutions/ai-as-a-service"
                description="Unlock the power of artificial intelligence without building from scratch. Our AI as a Service solutions let you integrate scalable AI into your business processes seamlessly."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd mainEntity={faqs.map((faq) => ({
                questionName: faq.question,
                acceptedAnswerText: faq.answer,
            }))}/>

            <HeroSection
                title="AI as a Service (AIaaS)"
                description="Integrate enterprise-grade AI into your business workflows without building from scratch. Access powerful AI tools, models, and infrastructure on demand."
                path="/assets/services/otherImages/aiAgent.webp"
                buttonText="Get Started with AIaaS"
            />

            <AiServiceIntro
                title="AI as a Service Solutions"
                description="Our AIaaS solutions empower businesses to adopt AI faster and smarter. From natural language processing to predictive analytics, we deliver AI capabilities that integrate seamlessly into your processes — without the complexity of building infrastructure."
                path="/assets/services/otherImages/whyAi.svg"
            />

            <ExpertServices
                title="Why Choose AI as a Service?"
                description="AIaaS enables you to access cutting-edge AI without heavy upfront investments. Reduce time-to-market, lower infrastructure costs, and scale effortlessly with secure cloud-based AI services."
                src="/assets/services/otherImages/aiAgent.svg"
                width={320}
            />

            <WebServicesGrid
                heading="OUR AIaaS OFFERINGS"
                subHeading="Scalable AI Solutions for Every Business"
                description="Our AIaaS services provide businesses with flexible, on-demand AI solutions that accelerate innovation and digital transformation."
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "Natural Language Processing (NLP)",
                        description: "Enhance communication with AI-powered chatbots, sentiment analysis, and language understanding.",
                    },
                    {
                        id: 2,
                        title: "Computer Vision",
                        description: "Leverage AI to recognize, classify, and analyze images and video for real-world applications.",
                    },
                    {
                        id: 3,
                        title: "Predictive Analytics",
                        description: "Forecast trends and behaviors with AI-driven data modeling and predictive insights.",
                        highlightImage: "/assets/services/otherImages/prediction.webp",
                    },
                    {
                        id: 4,
                        title: "Recommendation Engines",
                        description: "Deliver personalized user experiences with AI-powered recommendation systems.",
                    },
                    {
                        id: 5,
                        title: "Workflow Automation",
                        description: "Automate repetitive tasks and optimize business operations with AI-driven automation.",
                    },
                    {
                        id: 6,
                        title: "AI-Powered Analytics",
                        description: "Unlock real-time insights with AI-driven dashboards and business intelligence tools.",
                        smallImage: "/assets/services/otherImages/aiAnalysis.webp",
                    },
                    {
                        id: 7,
                        title: "Custom AI Integrations",
                        description: "Integrate AI seamlessly into your apps, platforms, and business systems.",
                    },
                    {
                        id: 8,
                        title: "Scalable Cloud Deployment",
                        description: "Deploy AI models securely on AWS, Azure, Google Cloud, or custom environments.",
                    },
                ]}
            />

            <AiFlow
                title="From Concept"
                titleHighlight="to AI-Powered Business"
                description="We simplify AI adoption by delivering ready-to-use, scalable AI solutions tailored to your workflows and industry needs."
                imageSrc="/assets/services/otherImages/aiFlow.svg"
                marginLeft="mx-auto"
            />

            <Banner
                title="Adopt AI Without the Hassle"
                description="Our AI as a Service solutions integrate powerful AI  into your business"
                src="/assets/services/otherImages/aiAgentBanner.svg"

            />

            <KeyAndStackSection/>
            <DeployAISection
                titleOne="We help you deploy"
                titleTwo="AIaaS Solutions"
                titleThree="on your preferred platform"
                cardOneTitle="AIaaS on AWS"
                cardOneDescription="Harness the scalability and AI tools of AWS to power your business applications securely."
                cardOneSrc="/assets/services/aws.svg"
                cardTwoTitle="AIaaS on Azure"
                cardTwoDescription="Leverage Microsoft Azure AI services for enterprise-ready, cloud-based AI deployments."
                cardTwoSrc="/assets/services/azure.svg"
            />

            <FaqSection Faq={faqs}/>
            <TestimonialSection/>
            <CTASection/>
            <Footer/>
        </div>
    );
}

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
export default function generativeAi() {
    const faqs = [
        {
            id: 1,
            question: "What is SEO and why is it important?",
            answer:
                "SEO (Search Engine Optimization) is the process of improving your website’s visibility on search engines like Google. It helps drive organic traffic, increase brand awareness, and boost conversions."
        },
        {
            id: 2,
            question: "How long does it take to see SEO results?",
            answer:
                "SEO is a long-term strategy. Most websites begin to see noticeable improvements within 3 to 6 months, depending on competition, website health, and content quality."
        },
        {
            id: 3,
            question: "Do you offer local SEO services?",
            answer:
                "Yes, we specialize in local SEO to help your business rank higher in local searches, appear on Google Maps, and attract nearby customers."
        },
        {
            id: 4,
            question: "What is included in your SEO services?",
            answer:
                "Our SEO services include keyword research, on-page optimization, technical SEO, content creation, link building, and monthly performance reporting."
        },
        {
            id: 5,
            question: "Can you guarantee #1 rankings on Google?",
            answer:
                "No ethical SEO provider can guarantee #1 rankings. However, we follow proven strategies and Google-approved practices to maximize your chances of ranking high and driving qualified traffic."
        }
    ];

    return (
        <div className="font-syne">
            <NextSeo
                title="Generative AI Services | 2BTech"
                description="Unlock innovation and efficiency with our cutting-edge generative AI solutions tailored for your business needs."
                canonical="https://2btech.com/services/ai-and-generative-ai-solutions/generative-ai"
                openGraph={{
                    url: "https://2btech.com/services/ai-and-generative-ai-solutions/generative-ai",
                    title: "Generative AI Services | 2BTech",
                    description: "Unlock innovation and efficiency with our cutting-edge generative AI solutions tailored for your business needs.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/generative-ai.webp",
                            width: 1200,
                            height: 630,
                            alt: "Generative Ai Services 2BTech",
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
                id="https://2btech.com/services/ai-and-generative-ai-solutions/generative-ai"
                description="Unlock innovation and efficiency with our cutting-edge generative AI solutions tailored for your business needs."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="ENTERPRISE-READY GENERATIVE AI SERVICES"
                description="Unlock innovation and efficiency with our cutting-edge generative AI solutions tailored for your business needs."
                path="/assets/services/hero/agentic.webp"
                buttonText="Get a Free Consultation"
            />
            <AiServiceIntro
                title=" Generative AI Services"
                description="Our generative AI services harness advanced ML technologies, providing customized solutions through a user-friendly interface.We support clients in adopting and simplifying the process through interactive workshops, aiding in solution design, implementation, and seamless integration."
                path="/assets/services/growth.webp"
            />
            <ExpertServices
                title="What is generative AI?"
                description="Generative AI refers to advanced algorithms that can create new content and solutions by learning from vast datasets. It goes beyond traditional analytical capabilities, enabling machines to generate original ideas, designs, and answers — mimicking human creativity and problem-solving skills. This technology is rapidly transforming industries by providing innovative approaches to data utilization and content creation."
                src="/assets/services/robot.webp"
                width={400}
            />
            <WebServicesGrid
                heading="TYPES OF GENERATIVE AI SERVICES"
                subHeading="AI-powered business transformation"
                description="Unlock the power of Generative AI with Playno's services. Our expert team delivers innovative AI solutions that automate, accelerate, and enhance your business processes."
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "AI-Powered Chatbots",
                        description:
                            "Build intelligent conversational agents that provide 24/7 customer support and personalized interactions.",
                    },
                    {
                        id: 2,
                        title: "Content Generation",
                        description:
                            "Automate the creation of blogs, articles, marketing copy, and product descriptions using cutting-edge AI models.",
                    },
                    {
                        id: 3,
                        title: "Custom AI Model Development",
                        description:
                            "Train and deploy bespoke AI models tailored to your industry challenges and data needs.",
                        highlightImage:
                            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
                    },
                    {
                        id: 4,
                        title: "AI-Powered Search & Recommendations",
                        description:
                            "Deliver smarter product recommendations, search results, and personalized experiences with AI algorithms.",
                    },
                    {
                        id: 5,
                        title: "Generative Design Solutions",
                        description:
                            "Use AI to create innovative designs, prototypes, and product concepts quickly and efficiently.",
                    },
                    {
                        id: 6,
                        title: "AI Security & Risk Management",
                        description:
                            "Implement AI-driven security systems to detect anomalies, prevent fraud, and safeguard your business.",
                        smallImage:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=150&fit=crop&crop=center"

                    },
                    {
                        id: 7,
                        title: "AI Data Analytics",
                        description:
                            "Transform raw data into actionable insights with AI-powered predictive and prescriptive analytics.",
                    },
                    {
                        id: 8,
                        title: "AI Integration Services",
                        description:
                            "Seamlessly integrate generative AI tools into your existing business applications and workflows.",
                    },
                ]}
            />
            <AiFlow
                    title="Model"
                    titleHighlight="Orchestration and Deployment"
                    description="We dynamically route requests from devices to the optimal AI model - OpenAI, Anthropic, Google, and more."
                    imageSrc="/assets/services/aiFlow.svg"
            />
            <Banner
                title="Ready to Harness the Power of Generative AI?"
                description="Book call today and take the first step towards transforming your business with AI."
                src="/assets/services/aiBanner.webp"
            />
            <GenerativeAITrust
                title="98%"
                titleTwo="of global executives trust"
                titleThree="Generative AI models"
                titleFour="to design their business strategies for the next"
                titleFive="3-5 years"
                imageSrc="/assets/services/chip.webp"
            />
            <DeployAISection
                titleOne="Let us help you deploy"
                titleTwo="Generative AI"
                titleThree="securely on your preferred platform"
                cardOneTitle="Generative AI on AWS"
                cardOneDescription="Unlock the full potential of generative AI on the scalable and secure AWS platform."
                cardOneSrc="/assets/services/aws.svg"
                cardTwoTitle="Azure OpenAI Services"
                cardTwoDescription="Protect your internal and proprietary data from external exposure by deploying a private instance of ChatGPT within your Azure tenant."
                cardTwoSrc="/assets/services/azure.svg"
            />
            <FaqSection Faq={faqs} />
            <TestimonialSection/>
            <CTASection/>
            <Footer/>
        </div>
    );
}
import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/web-development/HeroSection';
import React from "react";
import ExpertServices from "@/components/services/web-development/ExpertSection";
import AreYouReady from "@/components/services/productEngineering/AreYouReadySection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import Banner from "@/components/Home/bannerSection";
import FaqSection from "@/components/Home/FaqSection";
import ContactFormUI from "@/components/About/ContactFormSection";
import ShopifyExpertise from "@/components/services/ecommerce/ServicesSection"; // reused as expertise grid
import OurProcess from "@/components/services/ecommerce/ProccessSection";
import {
    ArrowUpDown,
    Cloud,
    Code2,
    Monitor,
    Smartphone,
} from "lucide-react";
import { FAQPageJsonLd, NextSeo, WebPageJsonLd } from "next-seo";

export default function BubbleDevelopment() {
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
                title="Bubble Development Services | 2BTech"
                description="Accelerate your digital presence with Bubble development services from 2BTech. We build scalable, no-code web applications tailored to your business needs."
                canonical="https://2btech.com/services/ecommerce-development/bubble-development"
                openGraph={{
                    url: "https://2btech.com/services/ecommerce-development/bubble-development",
                    title: "Bubble Development Services | 2BTech",
                    description:
                        "Launch faster with Bubble. Our expert team delivers custom no-code app development, migration, and support services.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/bubble.webp",
                            width: 1200,
                            height: 630,
                            alt: "Bubble Development Services 2BTech",
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
                id="https://2btech.com/services/ecommerce-development/bubble-development"
                description="Accelerate your digital presence with Bubble development services from 2BTech. We build scalable, no-code web applications tailored to your business needs."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />

            <HeroSection
                title="BUBBLE DEVELOPMENT SERVICES"
                description="Build powerful, scalable, and secure web applications faster with Bubble. Our no-code experts design and launch apps tailored to your business goals."
                buttonText="Get a Free Consultation"
                formLabel="Free Bubble Development Services Consultation?"
            />

            <ExpertServices
                title="No-Code Innovation with Bubble"
                description="We provide end-to-end Bubble development services, from app design to custom integrations, helping businesses launch faster without compromising quality."
                src="/assets/services/otherImages/bubble.svg"
                width={400}
            />

            <ShopifyExpertise
                title="Bubble Development"
                titleTwo="Services to Empower Your Business"
                description="Our Bubble development services focus on speed, scalability, and flexibility. At 2BTech, we create custom no-code solutions that accelerate your digital transformation."
                expertiseItems={[
                    {
                        id: 1,
                        title: "Custom Bubble App Development",
                        description:
                            "We design and build tailor-made Bubble applications to match your business needs.",
                        icon: <Code2 className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 2,
                        title: "UI/UX Design for Bubble",
                        description:
                            "Craft intuitive and engaging user experiences with modern UI/UX for Bubble apps.",
                        icon: <Monitor className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 3,
                        title: "Bubble API & Plugin Integrations",
                        description:
                            "Seamlessly integrate APIs, third-party tools, and plugins to enhance functionality.",
                        icon: <ArrowUpDown className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 5,
                        title: "Responsive Mobile Solutions",
                        description:
                            "Ensure your Bubble applications are fully responsive and optimized for mobile devices.",
                        icon: <Smartphone className="w-6 h-6 text-white" />,
                    },
                    {
                        id: 6,
                        title: "Bubble Migration",
                        description:
                            "Migrate from traditional platforms to Bubble with zero downtime and no data loss.",
                        icon: <Cloud className="w-6 h-6 text-white" />,
                    },
                ]}
            />

            <OurProcess
                title="Our Bubble Development Process"
                description="At 2BTech, our Bubble development process ensures quick turnarounds, high-quality results, and scalable applications that empower businesses to grow."
            />

            <Banner
                title="Your Idea Faster with Bubble Experts"
                description="Transform your vision into reality with our no-code development expertise."
                src="/assets/services/otherImages/bubbleBanner.svg"
            />

            <TestimonialSection />

            <FaqSection Faq={faqs} />

            <AreYouReady
                buttonText="Let's Connect"
                srcOne="/assets/services/otherImages/ideabubble.webp"
                srcTwo="/assets/services/otherImages/afterBubble.webp"
            />

            <ContactFormUI />
            <Footer />
        </div>
    );
}

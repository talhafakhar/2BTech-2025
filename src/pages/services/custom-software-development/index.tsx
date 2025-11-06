import React from "react";
import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/HeroSection';
import AboutSection from "@/components/services/AboutSection";
import OurFlowSection from "@/components/services/OurFlowSection";
import CustomSoftwareServicesSection from "@/components/services/CustomSoftwareServicesSection";
import Banner from "@/components/Home/bannerSection";
import {NextSeo, WebPageJsonLd} from "next-seo";
import CustomSoftwareSection from "@/components/services/WhySection";
import FaqSection from "@/components/Home/FaqSection";
import FinalCTASection from "@/components/services/FinalCTASection";
import ServicesIndustrySection from "@/components/services/IndustorySection";
import TechStackServices from "@/components/services/ServicesStackSection";

export default function CustomSoftwareDevelopment() {
    const faqs = [
        {
            id: 1,
            question: "How long does custom software development take?",
            answer:
                "Small projects: 8-12 weeks. Complex enterprise solutions: 4-9 months. We provide exact timelines after requirements analysis.",
        },
        {
            id: 2,
            question: "What's included in the cost?",
            answer:
                "Design, development, testing, deployment, training, and initial support. No hidden fees.",
        },
        {
            id: 3,
            question: "Do we own the source code?",
            answer:
                "Yes. All code and intellectual property transfers to you upon project completion.",
        },
        {
            id: 4,
            question: "Can you integrate with our existing systems?",
            answer:
                "Absolutely. We specialize in integrating custom software with legacy systems, databases, and third-party APIs.",
        },
        {
            id: 5,
            question: "What about ongoing maintenance?",
            answer:
                "We offer flexible support plans for updates, security patches, and new feature development.",
        },
        {
            id: 6,
            question: "Is custom software better than off-the-shelf?",
            answer:
                "For unique business needs, yes. You get exactly what you need, better integration, and long-term cost savings.",
        },
    ];
    const servicesData = [
        {
            id: 1,
            title: "Enterprise Custom Software Development",
            description:
                "Robust solutions for complex business environments that handle high volumes, integrate with legacy systems, and support thousands of users.",
            keyFeatures: [
                "ERP and CRM systems",
                "Supply chain management",
                "Business intelligence platforms",
                "Workforce management tools",
                "Document management systems",
            ],
            benefits: [
                "Scalable architecture for growth",
                "Advanced security and compliance",
                "Seamless system integration",
                "Real-time analytics and reporting",
            ],
        },
        {
            id: 2,
            title: "Custom Software Development for Healthcare",
            description:
                "HIPAA-compliant healthcare solutions that improve patient outcomes and streamline operations.",
            keyFeatures: [
                "Electronic health records (EHR)",
                "Telemedicine platforms",
                "Patient portals",
                "Medical billing systems",
                "Healthcare analytics",
            ],
            benefits: [
                "HIPAA/HITECH certified",
                "HL7 and FHIR standards",
                "End-to-end encryption",
                "Complete audit trails",
            ],
        },
        {
            id: 3,
            title: "Small Business Custom Software Development",
            description:
                "Affordable solutions that give small businesses enterprise capabilities without enterprise costs.",
            keyFeatures: [
                "Custom CRM systems",
                "Inventory management",
                "Point of sale (POS)",
                "Workflow automation",
                "Customer portals",
            ],
            benefits: [
                "Quick deployment (8–12 weeks)",
                "No licensing fees",
                "Easy to use and maintain",
                "Scales as you grow",
            ],
        },
        {
            id: 4,
            title: "Custom Business Software Development",
            description:
                "Optimize operations with software built around your workflows, improving efficiency and visibility.",
            keyFeatures: [
                "Project management systems",
                "Contract management",
                "Resource planning",
                "Custom dashboards",
                "Automated workflows",
            ],
            benefits: [
                "40% reduction in manual tasks",
                "60% faster approval processes",
                "Real-time business visibility",
                "Better data-driven decisions",
            ],
        },
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="Custom Software Development Company USA | Bespoke Solutions | 2BTech"
                description="Expert custom software development services for enterprise, healthcare, and small businesses. Bespoke software solutions built for your unique needs. Free consultation"
                canonical="https://2btech.com/services/custom-software-development"
                openGraph={{
                    url: "https://2btech.com/services/custom-software-development",
                    title: "Custom Software Development Company USA | Bespoke Solutions | 2BTech",
                    description: "Expert custom software development services for enterprise, healthcare, and small businesses. Bespoke software solutions built for your unique needs. Free consultation",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/custom-software-development.webp",
                            width: 1200,
                            height: 630,
                            alt: "Custom Software Development Company USA | Bespoke Solutions | 2BTech",
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
                id="https://2btech.com/services/custom-software-development"
                url="https://2btech.com/services/custom-software-development"
                name="Custom Software Development Company USA | Bespoke Solutions | 2BTech"
                description="Expert custom software development services for enterprise, healthcare, and small businesses. Bespoke software solutions built for your unique needs. Free consultation"
                lastReviewed={new Date().toISOString()}
            />
            <HeroSection
                title="Build Software That Fits Your Business Perfectly"
                description="Transform your unique challenges into competitive advantages with bespoke software development services. We create tailored solutions that scale with your growth"
                formLabel="Custom Software Development Services Consultation?"
            />
            <AboutSection
                title="Tailored Software Solutions for Your Unique Business Needs"
                description="2BTech delivers custom software solutions that transform how businesses operate across America, combining innovation, scalability, and security to create high-performance systems tailored to each client’s unique goals and workflows."
                descriptionTwo="Our bespoke software development process covers discovery to deployment, ensuring every workflow, feature, and integration is designed precisely for your business — no templates, only purpose-built solutions that evolve with you."
                descriptionThree="From healthcare to finance and startups, we craft secure, compliant, and scalable software that enhances productivity, drives growth, and gives your business a lasting competitive advantage in today’s digital landscape."
                src="/assets/services/customSoftware/coding.webp"
                width={600}
            />

            <CustomSoftwareServicesSection
                heading="Custom Software Solutions for Every Industry"
                headingHighlight="WHAT WE BUILD"
                subtitle="From startups to enterprises, we deliver scalable, secure, and high-performance systems that empower your business to grow."
                services={servicesData}
            />
            <CustomSoftwareSection/>
            <OurFlowSection
                headingHighlight="Our"
                heading="Process"
                description="A streamlined workflow that delivers results every time."
                services={[
                    {
                        title: "Discovery",
                        duration: "1-2 Weeks",
                        description:
                            "We analyze your requirements, existing systems, and business goals to create a detailed roadmap.",
                    },
                    {
                        title: "Design",
                        duration: "2-3 Weeks",
                        description:
                            "Our team creates intuitive interfaces and interactive prototypes for your approval before coding begins.",
                    },
                    {
                        title: "Development",
                        duration: "8-16 Weeks",
                        description:
                            "Agile sprints with demos every two weeks. You see continuous progress and provide feedback.",
                    },
                    {
                        title: "Testing & Launch",
                        duration: "1-2 Weeks",
                        description:
                            "Rigorous testing, data migration, and go-live support ensure a smooth deployment.",
                    },
                    {
                        title: "Support",
                        duration: "Ongoing",
                        description:
                            "Maintenance, updates, and enhancements keep your software performing optimally.",
                    },
                ]}
            />
            <ServicesIndustrySection/>
            <Banner
                title="Ready to Elevate Your Online Presence?"
                src="/assets/services/customSoftware/webDevBanner.svg"
            />
            <TechStackServices/>
            <FinalCTASection
                heading="Ready to Build Your Custom Solution?"
                description="Schedule a free 60-minute consultation. We'll discuss your needs, provide technical recommendations, and create a detailed project proposal."
                features={[
                    "Requirements analysis",
                    "Technical feasibility assessment",
                    "Project timeline and cost estimate",
                    "No-obligation proposal"
                ]}
            />
            <FaqSection Faq={faqs}/>
            <Footer/>
        </div>
    );
}
import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/HeroSection';
import React from "react";
import AboutSection from "@/components/services/AboutSection";
import Banner from "@/components/Home/bannerSection";
import FaqSection from "@/components/Home/FaqSection";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
import OurFlowSection from "@/components/services/OurFlowSection";
import WhatIsSection from "@/components/services/WhatIsSection";
import { Rocket, Star} from "lucide-react";
import {easeInOut, motion} from "framer-motion";
import SubServicesSection from "@/components/services/CustomSoftwareServicesSection";
import IndustriesSection from "@/components/services/SalesindustorySection";
export default function SalesforceConsulting() {
    const faqs = [
        {
            id: 1,
            question: "What are Salesforce consulting services?",
            answer:
                "Salesforce consulting services provide expert guidance for adopting and optimizing Salesforce CRM. As a Salesforce development company, we help with strategy, implementation, customization, integration, and ongoing support.",
        },
        {
            id: 2,
            question: "How long does Salesforce implementation take?",
            answer:
                "Simple implementations: 4–6 weeks. Standard implementations: 8–12 weeks. Complex enterprise implementations: 12–24 weeks. Timeline depends on scope, customization, and integrations.",
        },
        {
            id: 3,
            question: "How much do Salesforce implementation services cost?",
            answer:
                "Costs range from $15,000 for quick start packages to $250,000+ for enterprise implementations. Factors include users, products, customization, integrations, and data migration.",
        },
        {
            id: 4,
            question: "What's included in Salesforce integration services?",
            answer:
                "Salesforce integration services connect your CRM with ERP, marketing, e-commerce, and business systems. Includes API development, data mapping, sync configuration, and testing.",
        },
        {
            id: 5,
            question: "Should I hire Salesforce developers or use contractors?",
            answer:
                "Hire Salesforce developers when you need ongoing development and customization. Contractors work well for defined projects. We offer flexible engagement models including dedicated teams, fixed-price projects, and staff augmentation.",
        },
    ];
    const itemVariants: any = {
        hidden: {opacity: 0, y: 40, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9,
            transition: {duration: 0.5, ease: easeInOut},
        },
    };
    const definitionOne = [
        {
            title: "Complete CRM Platform",
            description:
                "Unified platform for sales, service, marketing, and commerce. Manage entire customer lifecycle in one system.",
        },
        {
            title: "Scalable & Flexible",
            description:
                "Grows with your business from startup to enterprise. Highly customizable to fit any industry or process.",
        },
        {
            title: "Cloud-Based Access",
            description:
                "Access your data anywhere, anytime. Mobile apps keep teams connected on the go.",
        },
    ];
    const definitionTwo = [
        {
            title: "AI-Powered Insights",
            description:
                "Einstein AI delivers predictive analytics, lead scoring, and intelligent recommendations.",
        },
        {
            title: "Extensive Ecosystem",
            description:
                "AppExchange offers 5,000+ pre-built apps and integrations. Large community of developers and consultants.",
        },
        {
            title: "Proven ROI",
            description:
                "Average 25% increase in revenue, 35% improvement in customer satisfaction, 37% faster sales cycles.",
        },
    ];
    const servicesData = [
        {
            title: "Salesforce Consulting Services",
            description:
                "Strategic Salesforce consulting that aligns CRM capabilities with your business goals — from strategy and process design to change management and ROI tracking.",
            keyFeatures: [
                "CRM Strategy & Planning",
                "Business Process Analysis",
                "Solution Architecture",
                "Change Management",
                "ROI Assessment",
                "Vendor Selection",
            ],
        },
        {
            title: "Salesforce Implementation Services",
            description:
                "End-to-end Salesforce implementation — from discovery to deployment. We follow Salesforce best practices for seamless rollouts.",
            keyFeatures: [
                "Discovery & Design Phases",
                "Configuration & Customization",
                "Integration Development",
                "Testing & Deployment",
                "Training & Documentation",
            ],
        },
        {
            title: "Salesforce Development Company",
            description:
                "Custom Salesforce app development using Lightning Web Components, Apex, and API integrations. Extend functionality to match your needs.",
            keyFeatures: [
                "Custom Lightning Components",
                "Apex & Visualforce Development",
                "API & Integration Development",
                "AppExchange Packages",
                "Mobile & Heroku Solutions",
            ],
        },
        {
            title: "Salesforce Integration Services",
            description:
                "Seamless integrations connecting Salesforce with ERP, Marketing, and Financial systems to unify customer data and automate workflows.",
            keyFeatures: [
                "ERP & Marketing Automation",
                "E-commerce & Financial Systems",
                "Communication Tools (Slack, Teams)",
                "Data Warehouses & BI Tools",
                "ETL & Middleware Integration",
            ],
        },
        {
            title: "Hire Salesforce Developers",
            description:
                "Hire certified Salesforce developers, architects, admins, and consultants on-demand. Flexible engagement models to fit your goals.",
            keyFeatures: [
                "Certified Experts (PD1, PD2)",
                "Dedicated & Flexible Teams",
                "Rapid Onboarding (1-2 weeks)",
                "Cost-Effective Staffing",
                "Ongoing Expert Support",
            ],
        },
        {
            title: "Salesforce App Development",
            description:
                "Custom Salesforce app development — internal, mobile, or AppExchange apps designed for scalability, user experience, and performance.",
            keyFeatures: [
                "Internal Custom Apps",
                "AppExchange Apps",
                "Mobile & Portal Apps",
                "Industry-Specific Solutions",
                "Project & Contract Management",
            ],
        },
        {
            title: "Salesforce Optimization & Support",
            description:
                "Ongoing optimization, support, and managed services to ensure your Salesforce runs efficiently and evolves with your business.",
            keyFeatures: [
                "Performance Tuning",
                "User Adoption Programs",
                "Data Quality Management",
                "Security & Compliance Audits",
                "24/7 Managed Services",
            ],
        },
    ];
    const industriesData = [
        {
            icon: Heart,
            title: "Healthcare & Life Sciences",
            description: "HIPAA-compliant patient management and care coordination",
            color: "from-blue-50 to-blue-100"
        },
        {
            icon: TrendingUp,
            title: "Financial Services",
            description: "Wealth management, banking, insurance CRM solutions",
            color: "from-blue-100 to-blue-50"
        },
        {
            icon: Factory,
            title: "Manufacturing",
            description: "Sales force automation, channel management, service optimization",
            color: "from-blue-50 to-blue-100"
        },
        {
            icon: ShoppingCart,
            title: "Retail & E-commerce",
            description: "Customer engagement, loyalty programs, unified commerce",
            color: "from-blue-100 to-blue-50"
        },
        {
            icon: Briefcase,
            title: "Professional Services",
            description: "Project management, resource planning, client portals",
            color: "from-blue-50 to-blue-100"
        },
        {
            icon: Cpu,
            title: "Technology & SaaS",
            description: "Subscription management, usage tracking, customer success",
            color: "from-blue-100 to-blue-50"
        },
        {
            icon: GraduationCap,
            title: "Education",
            description: "Student recruitment, alumni management, fundraising",
            color: "from-blue-50 to-blue-100"
        },
        {
            icon: Building2,
            title: "Nonprofit",
            description: "Donor management, grant tracking, volunteer coordination",
            color: "from-blue-100 to-blue-50"
        }
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="Salesforce Consulting Services | Implementation & Development | 2BTech"
                description=" Expert salesforce consulting services with certified developers. Trusted salesforce development company for implementation, integration, and custom app development. Get a free assessment"
                canonical="https://2btech.com/services/salesforce-consulting"
                openGraph={{
                    url: "https://2btech.com/services/salesforce-consulting",
                    title: "Salesforce Consulting Services | Implementation & Development | 2BTech",
                    description: " Expert salesforce consulting services with certified developers. Trusted salesforce development company for implementation, integration, and custom app development. Get a free assessment",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/salesforce-consulting.webp",
                            width: 1200,
                            height: 630,
                            alt: "Salesforce Consulting Services | Implementation & Development | 2BTech",
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
                id="https://2btech.com/services/salesforce-consulting"
                name="Salesforce Consulting Services | Implementation & Development | 2BTech"
                description=" Expert salesforce consulting services with certified developers. Trusted salesforce development company for implementation, integration, and custom app development. Get a free assessment"
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="Maximize Your CRM Investment With Expert Guidance"
                description="Transform your customer relationships with professional salesforce consulting services. Our certified team delivers salesforce implementation services, custom development, and strategic guidance that drives revenue growth and operational efficiency"
                formLabel="Free CRM Assessment Consultation?"
                buttonText="Get Free CRM Assessment"
                TrustBar={() => (
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex flex-col sm:flex-row  items-center gap-6 text-sm sm:text-base text-gray-700 font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <Rocket className="w-5 h-5 text-blue-600"/>
                            <span>10+ Salesforce Projects</span>
                        </div>
                        <div className="hidden sm:block w-[1px] h-6 bg-black"></div>
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500"/>
                            <span>35% Average Revenue Increase</span>
                        </div>
                    </motion.div>
                )}
            />
            <AboutSection
                title="Complete Salesforce Consulting Services for Business Growth"
                description="2BTech Inc is a trusted salesforce development company delivering end-to-end Salesforce solutions that transform how you engage with customers. Our salesforce consulting services combine strategic planning, technical implementation, and ongoing optimization to maximize your Salesforce investment"
                descriptionTwo="We provide comprehensive salesforce implementation services covering Sales Cloud, Service Cloud, Marketing Cloud, and custom applications. Our team of certified developers handles salesforce integration services, connecting your CRM with ERP systems, marketing platforms, and third-party applications for seamless data flow"
                descriptionThree="When you hire salesforce developers from 2BTech, you gain access to experts with proven experience across industries. We specialize in salesforce app development, building custom Lightning components, AppExchange apps, and mobile solutions that extend Salesforce capabilities to meet your unique business requirement"
                src="/assets/services/salesForce/salesForce.webp"
                width={600}
            />
            <SubServicesSection
                heading="OUR SALESFORCE SERVICES"
                headingHighlight="Our Expertise"
                services={servicesData}
            />
            <WhatIsSection
                heading="what are"
                highlight="Salesforce consulting services?"
                description="Salesforce consulting services provide expert guidance and implementation support for businesses adopting or optimizing Salesforce CRM. As a specialized salesforce development company, we help organizations leverage Salesforce to improve sales productivity, enhance customer service, automate marketing, and drive data-driven decision-making"
                definitionOne={definitionOne}
                definitionTwo={definitionTwo}
                imageOne="/assets/services/salesForce/crm.svg"
                imageTwo="/assets/services/salesForce/security.svg"
            />
            <OurFlowSection
                heading="for Saleforce?"
                headingHighlight="Why Choose 2BTech"
                services={[
                    {
                        title: "Certified Salesforce Experts",
                        duration: "",
                        description:
                            "Team of certified Salesforce Administrators, Developers, Architects, and Consultants.",
                    },
                    {
                        title: "Industry Experience",
                        duration: "",
                        description:
                            "10+ Salesforce projects across healthcare, financial services, manufacturing, retail, and technology. We understand your industry challenges.",
                    },
                    {
                        title: "Full-Service Partner",
                        duration: "",
                        description:
                            "End-to-end services from strategy through implementation, integration, and ongoing support. One partner for complete Salesforce journey.",
                    },
                    {
                        title: "Proven Methodology",
                        duration: "",
                        description:
                            "Follow Salesforce implementation best practices and Agile methodology. Predictable, on-time delivery with quality assurance.",
                    },
                    {
                        title: "Custom Development Excellence",
                        duration: "",
                        description:
                            "Expert developers building Lightning components, Apex code, and AppExchange apps. Extend Salesforce to meet any requirement.",
                    },
                    {
                        title: "Integration Specialists",
                        duration: "",
                        description:
                            "Deep expertise connecting Salesforce with ERP, marketing, e-commerce, and business systems. Seamless data flow across platforms.",
                    },
                    {
                        title: "Post-Implementation Support",
                        duration: "",
                        description:
                            "We don't disappear after go-live. Managed services, optimization, and strategic guidance to maximize long-term value.",
                    },
                ]}

            />
            <IndustriesSection industries={industriesData} />
            <Banner
                title="Transform Relationships with Expert Salesforce Consulting"
                description="Leverage our certified Salesforce developers"
                src="/assets/services/salesForce/salesForceBanner.webp"
            />
            <FaqSection
                Faq={faqs}
            />
            <Footer/>
        </div>
    );
}
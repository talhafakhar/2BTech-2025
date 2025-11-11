import React from "react";
import {
    Code2,
    Brain,
    Palette,
    Layers,
    CheckCircle2,
} from "lucide-react";

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    items: string[];
}

interface ServiceCardProps {
    service: Service;
}

const HomeServicesSection: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            title: "Custom Software Development",
            description:
                "Build tailored software solutions that solve real business problems. From web applications to enterprise systems, we create scalable products designed for growth.",
            icon: <Code2 className="w-8 h-8" />,
            items: [
                "SaaS platforms with multi-tenant architecture",
                "MVP development (8–12 week delivery)",
                "Enterprise applications",
                "API development and integrations",
                "Legacy system modernization",
            ],
        },
        {
            id: 2,
            title: "Artificial Intelligence",
            description:
                "Deploy AI solutions that automate operations, enhance decision-making, and create competitive advantages. From strategy to deployment, we deliver AI that drives measurable ROI.",
            icon: <Brain className="w-8 h-8" />,
            items: [
                "AI agent development and deployment",
                "Generative AI applications",
                "Machine learning models",
                "Natural language processing",
                "AI proof of concept and validation",
                "Computer vision solutions",
            ],
        },
        {
            id: 3,
            title: "Product Design",
            description:
                "Create exceptional user experiences that convert. Our design team crafts intuitive interfaces backed by user research, bringing your vision to life with pixel-perfect execution.",
            icon: <Palette className="w-8 h-8" />,
            items: [
                "UX/UI design",
                "User research and testing",
                "Prototyping and wireframing",
                "Design systems",
                "Brand identity",
                "Mobile-first design",
            ],
        },
        {
            id: 4,
            title: "Specialized Development",
            description:
                "Expert development across platforms and ecosystems. We build where your customers are, with technologies that deliver results.",
            icon: <Layers className="w-8 h-8" />,
            items: [
                "Mobile apps (iOS, Android, React Native, Flutter)",
                "Cloud engineering (AWS, Azure, Google Cloud)",
                "E-commerce (Shopify custom development)",
                "Web platforms (Webflow, custom CMS)",
                "Salesforce customization",
                "DevOps and CI/CD",
            ],
        },
    ];

    const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
        <div className="group relative bg-white rounded p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                <div className="absolute inset-0 rounded bg-gradient-to-r from-primary to-secondary p-0.5">
                    <div className="w-full h-full bg-white rounded" />
                </div>
            </div>

            <div className="relative z-10 flex flex-col flex-grow">
           <div>
               <div className="inline-flex p-3 rounded-xl bg-primary text-white mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                   {service.icon}
               </div>
           </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                    {service.description}
                </p>
                <ul className="space-y-2 mt-auto">
                    {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <section className="py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[400px] h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[400px] h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className=" text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
                        End-to-end product development — from discovery and design to AI-powered solutions and enterprise-grade systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="h-full">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button    onClick={() =>
                        window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                    } className="inline-flex items-center border-black px-8 py-3 rounded border font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Get Started Today
                        <svg
                            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeServicesSection;

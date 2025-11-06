import React from 'react';
import {
    Code2,
    Rocket,
    Cloud,
    Settings,
    Smartphone,
    Brain,
    Cpu,
    Bot,
    Palette,
    Globe,
    ShoppingCart,
    Network
} from 'lucide-react';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface ServiceCardProps {
    service: Service;
    index: number;
}

const ServicesSection: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            title: "Custom Software Development",
            description:
                "We craft tailored apps that fit your workflows and scale with your business.",
            icon: <Code2 className="w-8 h-8" />,
        },
        {
            id: 2,
            title: "MVP Development",
            description:
                "Quickly validate your idea with lean, fast MVPs that attract real users.",
            icon: <Rocket className="w-8 h-8" />,
        },
        {
            id: 3,
            title: "Cloud Engineering",
            description:
                "We design secure, scalable, and cost-efficient cloud architectures.",
            icon: <Cloud className="w-8 h-8" />,
        },
        {
            id: 4,
            title: "Salesforce Development",
            description:
                "Custom Salesforce setups that streamline workflows and integrations.",
            icon: <Settings className="w-8 h-8" />,
        },
        {
            id: 5,
            title: "Mobile Development",
            description:
                "High-performance mobile apps for seamless cross-platform experiences.",
            icon: <Smartphone className="w-8 h-8" />,
        },
        {
            id: 6,
            title: "AI & Generative AI",
            description:
                "Build intelligent systems that automate, analyze, and enhance operations.",
            icon: <Brain className="w-8 h-8" />,
        },
        {
            id: 7,
            title: "AI Software Solutions",
            description:
                "We infuse AI into products — from chatbots to predictive analytics.",
            icon: <Cpu className="w-8 h-8" />,
        },
        {
            id: 8,
            title: "AI Agents as a Service",
            description:
                "Deploy AI agents for content, support, data, and research — on demand.",
            icon: <Bot className="w-8 h-8" />,
        },
        {
            id: 9,
            title: "Product Design",
            description:
                "Intuitive, beautiful UX/UI that enhances usability and brand feel.",
            icon: <Palette className="w-8 h-8" />,
        },
        {
            id: 10,
            title: "Webflow Development",
            description:
                "Pixel-perfect, fast Webflow sites for marketing and content teams.",
            icon: <Globe className="w-8 h-8" />,
        },
        {
            id: 11,
            title: "Shopify Development",
            description:
                "Custom Shopify stores that boost sales and reflect your brand.",
            icon: <ShoppingCart className="w-8 h-8" />,
        },
        {
            id: 12,
            title: "AI Digital Transformation",
            description: "Transform your business with AI-driven processes and insights.",
            icon: <Network  className="w-8 h-8" />,
        },
    ];

    const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
        <div className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border  overflow-hidden h-full flex flex-col justify-between">
            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5">
                    <div className="w-full h-full bg-white rounded-2xl" />
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
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-grow">
                    {service.description}
                </p>
            </div>
        </div>
    );

    return (
        <section className="py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[400px] h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[400px] h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4  relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
                        We deliver full-stack custom software and AI solutions that drive growth and innovation.
                    </p>
                </div>

                {/* Equal-height grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div key={service.id} className="h-full">
                            <ServiceCard service={service} index={index} />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <button className="inline-flex items-center border-black px-8 py-3 rounded border font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
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

export default ServicesSection;

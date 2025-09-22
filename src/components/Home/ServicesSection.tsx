import React from 'react';
import { Cpu, Rocket, Cloud, Smartphone, Layout, ShoppingCart, Users } from 'lucide-react';
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
            title: "AI & GenAI Development",
            description: "Build intelligent systems, automation workflows, and LLM-powered tools.",
            icon: <Cpu className="w-8 h-8" />,
        },
        {
            id: 2,
            title: "MVP & Product Development",
            description: "Validate your idea, launch quickly, and scale with confidence.",
            icon: <Rocket className="w-8 h-8" />,
        },
        {
            id: 3,
            title: "Cloud & DevOps Engineering",
            description: "Deploy scalable infrastructure with AWS, Azure, and modern DevOps.",
            icon: <Cloud className="w-8 h-8" />,
        },
        {
            id: 4,
            title: "Salesforce & App Development",
            description: "Power customer journeys with CRM integrations and hybrid mobile apps.",
            icon: <Smartphone className="w-8 h-8" />,
        },
        {
            id: 5,
            title: "UI UX Design & Product Strategy",
            description: "Deliver delightful user experiences with purpose-driven design.",
            icon: <Layout className="w-8 h-8" />,
        },
        {
            id: 6,
            title: "Ecommerce & No Code Development",
            description: "Launch high-performing stores on Shopify, Adobe, and Bubble.",
            icon: <ShoppingCart className="w-8 h-8" />,
        },
        {
            id: 7,
            title: "Dedicated Teams & Offshore Talent",
            description: "Extend your team with vetted engineers aligned to your timezone.",
            icon: <Users className="w-8 h-8 " />,
        },
    ];
    const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
        return (
            <div className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary p-0.5">
                        <div className="w-full h-full bg-white rounded-2xl" />
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary to-secondary opacity-10 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32 z-0" />

                <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-xl bg-primary text-white mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {service.icon}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        {service.description}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <section className="py-16  relative overflow-hidden ">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0  w-[400px] h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[400px] h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Our
                        <span className="text-primary ">
                {" "}Services
              </span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
                        We deliver cutting-edge technology solutions that drive innovation and accelerate your business growth
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`${
                                index === services.length - 1 ? 'lg:col-span-3 md:flex md:justify-center' : ''
                            }`}
                        >
                            <ServiceCard service={service} index={index} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="inline-flex items-center border-black px-8 py-3 rounded border font-semibold   transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Get Started Today
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

            <style
                jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes scale-in {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default ServicesSection;
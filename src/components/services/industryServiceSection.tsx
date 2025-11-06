import React from 'react';
import { TrendingUp, ShoppingCart, Package, Radio, Stethoscope } from 'lucide-react';

interface Industry {
    icon: React.ElementType;
    title: string;
    description: string;
    applications: string[];
}

const IndustryServiceSection: React.FC = () => {
    const industries: Industry[] = [
        {
            icon: Stethoscope,
            title: "Healthcare & Life Sciences",
            description: "AI-powered diagnostics, personalized treatment plans, drug discovery acceleration, and operational efficiency improvements through predictive analytics and automation.",
            applications: [
                "Medical image analysis and diagnostics",
                "Patient risk prediction and monitoring",
                "Clinical trial optimization",
                "Drug discovery and development",
                "Healthcare operations automation"
            ]
        },
        {
            icon: TrendingUp,
            title: "Financial Services & Banking",
            description: "Fraud detection, risk assessment, algorithmic trading, customer service automation, and personalized financial recommendations powered by AI.",
            applications: [
                "Fraud detection and prevention",
                "Credit risk assessment",
                "Automated trading systems",
                "Customer service chatbots",
                "Regulatory compliance automation"
            ]
        },
        {
            icon: ShoppingCart,
            title: "Retail & E-Commerce",
            description: "Product recommendations, inventory optimization, dynamic pricing, customer behavior analysis, and visual search capabilities.",
            applications: [
                "Personalized recommendation engines",
                "Demand forecasting and inventory optimization",
                "Dynamic pricing strategies",
                "Visual search and product discovery",
                "Customer sentiment analysis"
            ]
        },
        {
            icon: Package,
            title: "Manufacturing & Supply Chain",
            description: "Predictive maintenance, quality control automation, supply chain optimization, demand forecasting, and production planning.",
            applications: [
                "Predictive maintenance systems",
                "Quality inspection automation",
                "Supply chain optimization",
                "Production planning and scheduling",
                "Energy consumption optimization"
            ]
        },
        {
            icon: Radio,
            title: "Telecommunications",
            description: "Network optimization, predictive maintenance, customer churn prediction, service personalization, and automated customer support.",
            applications: [
                "Network performance optimization",
                "Fault prediction and prevention",
                "Customer churn prediction",
                "Intelligent routing systems",
                "Automated technical support"
            ]
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold  mb-4">
                        <span className="text-primary">AI Solutions</span> Across Industries
                    </h2>
                </div>
                <div className="space-y-10">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 shadow-xl items-center border py-10 px-4 rounded-xl`}
                            >
                                <div className="w-full lg:w-1/3 flex justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl"></div>
                                        <div className="relative bg-white border-4 border-secondary rounded-full p-12 shadow-lg">
                                            <Icon className="w-24 h-24 text-primary" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-2/3">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                                {industry.title}
                                            </h3>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                {industry.description}
                                            </p>
                                        </div>

                                        {/* Applications */}
                                        <div className="pt-4">
                                            <h4 className="text-lg font-bold text-primary mb-3">
                                                Applications:
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {industry.applications.map((app, appIndex) => (
                                                    <div
                                                        key={appIndex}
                                                        className="flex items-start gap-2 group"
                                                    >
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                                        <span className="text-gray-700 text-sm leading-relaxed group-hover:text-primary transition-colors">
                              {app}
                            </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustryServiceSection;
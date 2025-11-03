import React from 'react';
import { CheckCircle, TrendingUp, DollarSign, Puzzle } from 'lucide-react';

export default function CustomSoftwareSection() {
    const benefits = [
        {
            icon: CheckCircle,
            title: "Perfect Fit",
            description: "Built specifically for your processes, not generic solutions. Every feature aligns with your workflows, eliminating workarounds and maximizing efficiency from day one."
        },
        {
            icon: TrendingUp,
            title: "Competitive Advantage",
            description: "Unique features and capabilities your competitors can't replicate. True ownership with complete control over features, updates, and direction without vendor lock-in."
        },
        {
            icon: DollarSign,
            title: "Long-Term Value",
            description: "No recurring license fees or per-user charges. Better ROI over time with unlimited scalability that grows with your business without limitations or upgrade costs."
        },
        {
            icon: Puzzle,
            title: "Seamless Integration",
            description: "Connects perfectly with your existing systems, databases, and third-party tools. Works harmoniously with legacy systems while enabling modern functionality and data flow."
        }
    ];

    return (
        <div className="py-16 relative overflow-hidden px-4">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-10 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto  relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold  mb-4 max-w-4xl mx-auto">
                        Why Custom Software Beats <span  className="text-primary"> Off-the-Shelf Solutions</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="border rounded-lg bg-white p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <button   onClick={() =>
                        window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')
                    } className="border border-black font-semibold px-8 py-3 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
                        Discuss Your Project
                    </button>
                </div>
            </div>
        </div>
    );
}
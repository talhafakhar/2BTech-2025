import React from 'react';
import { CheckCircle, Handshake, Lightbulb, Scale } from 'lucide-react';

const AdvantagesSection = () => {
    const advantages = [
        {
            icon: <Scale className="w-8 h-8 text-white" />,
            title: "Quality Over Speed",
            description: "Fast and broken isn't impressive. We move quickly, but never at the expense of doing things right. Technical debt costs more than patience.",
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-white" />,
            title: "Honesty Over Sales",
            description: "We'll tell you if your idea needs rethinking or if a cheaper solution exists. Our reputation matters more than any single deal.",
        },
        {
            icon: <Handshake className="w-8 h-8 text-white" />,
            title: "Partnership Over Transactions",
            description: "We're not a vendor you hire and forget. We're a partner invested in your success, available when you need us, committed for the long haul.",
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-white" />,
            title: "Results Over Activity",
            description: "Hours worked and features built don't matter, outcomes do. We focus on what moves your business forward, not what looks impressive on a status report.",
        },
    ];

    return (
        <div className="py-10 px-6 relative overflow-hidden">
            {/* Background Decorative Blur */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute bottom-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-1 flex flex-col justify-start">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            What We<span className="text-primary"> Believe</span>
                        </h2>
                        <p className="text-base lg:text-lg leading-relaxed">
                            At 2BTech, our values shape every decision, interaction, and solution we deliver. We focus on integrity, partnership, and meaningful outcomes that drive long-term success.
                        </p>
                    </div>

                    {/* Right Column - Cards */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {advantages.map((advantage, index) => (
                                <div
                                    key={index}
                                    className="bg-white border rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                                        {advantage.icon}
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold mb-4">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                                        {advantage.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantagesSection;

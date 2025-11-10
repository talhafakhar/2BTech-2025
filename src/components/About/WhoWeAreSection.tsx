import React from 'react';
import { ArrowRight, Brain, Code2, Eye, Heart } from 'lucide-react';

const GetToKnowUs = () => {
    const reasons = [
        {
            icon: <Brain className="w-8 h-8 text-primary" />,
            title: "We're Technical and Strategic",
            description:
                "We don't just write code, we solve business problems. Every technical decision we make is grounded in understanding what you're trying to accomplish. We'll tell you when a simpler solution makes more sense than a complex one, even if it means less billable hours for us.",
        },
        {
            icon: <Code2 className="w-8 h-8 text-primary" />,
            title: "We've Done This Before",
            description:
                "Our team has built hundreds of applications across dozens of industries. That experience means we spot potential issues early, suggest better approaches, and avoid the rookie mistakes that derail projects. You benefit from lessons we've already learned.",
        },
        {
            icon: <Eye className="w-8 h-8 text-primary" />,
            title: "We're Transparent",
            description:
                "You'll never wonder what's happening with your project. Clear proposals. Regular updates. Honest assessments when things need to change. If we hit a problem, you'll know about it immediately, along with our plan to fix it.",
        },
        {
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "We Care About Outcomes",
            description:
                "We measure success by results, not features shipped. Did we solve the problem? Are users happier? Is the business performing better? Those are the questions that matter. We're not satisfied until you see measurable improvement.",
        },
    ];

    return (
        <div className="bg-gray-50 px-4 py-16 ">
            <div className="max-w-7xl mx-auto">
                <div className="border-b-2 pb-6 mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
                        Why Work With <span className="text-primary">2BTech</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <p className="text-gray-600  max-w-md leading-relaxed">
                        At 2BTech, we combine deep technical expertise with strategic thinking to deliver software that actually drives results.
                    </p>
                    <button
                        onClick={() =>
                            window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                        }
                        className="group relative inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-secondary text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                    >
                        Let&#39;s Connect!
                        <span
                            className="ml-3 inline-flex w-8 h-8 rounded-full bg-white text-primary items-center justify-center transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </button>
                </div>

                {/* Reasons Grid */}
                <div className="relative">
                    <div
                        className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-8 relative bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/assets/About/numbers-bg.webp)',
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className="bg-white backdrop-blur-sm rounded-xl p-6 text-start transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {reason.icon}
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {reason.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {reason.description}
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

export default GetToKnowUs;

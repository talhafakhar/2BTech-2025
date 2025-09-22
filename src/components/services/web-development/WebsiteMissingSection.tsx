import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

const WebsiteMissingSection = () => {
    const missingElementsOne = [
        {
            title: "Speed That Converts",
            problem: "Your visitors leave in 3 seconds",
            solution: "Lightning-fast performance that keeps them engaged",
            color: "text-yellow-500",
            gradient: "from-yellow-400/20 to-orange-400/20"
        },
        {
            title: "Mobile Excellence",
            problem: "60% of traffic sees a broken site",
            solution: "Flawless experience on every device",
            color: "text-blue-500",
            gradient: "from-blue-400/20 to-purple-400/20"
        },
        {
            title: "Search Visibility",
            problem: "Hidden from potential customers",
            solution: "Top rankings that drive organic traffic",
            color: "text-green-500",
            gradient: "from-green-400/20 to-teal-400/20"
        },
    ];
    const missingElementsTwo = [
        {
            title: "User Connection",
            problem: "Visitors don't engage or convert",
            solution: "Intuitive design that guides to action",
            color: "text-pink-500",
            gradient: "from-pink-400/20 to-rose-400/20"
        },
        {
            title: "Trust & Security",
            problem: "Customers doubt your credibility",
            solution: "Professional presence that builds confidence",
            color: "text-red-500",
            gradient: "from-red-400/20 to-pink-400/20"
        },
        {
            title: "Growth Engine",
            problem: "Website doesn't generate business",
            solution: "Strategic design that converts visitors to customers",
            color: "text-purple-500",
            gradient: "from-purple-400/20 to-indigo-400/20"
        }
    ];

    return (
        <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-14">
                    <h3 className="text-2xl md:text-5xl">
                        What's Missing
                        <span className="text-primary">
              {" "}From Your Site?
            </span>
                    </h3>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Many websites miss critical elements that drive traffic, engage visitors, and convert leads.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="mb-8 md:mb-0 md:block hidden">
                        <div className="w-full max-w-md mx-auto">
                            <Image
                                src="/assets/services/missing.svg"
                                alt="Missing Elements"
                                width={500}
                                height={500}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    <div className="space-y-8">
                        {missingElementsOne.map((element, index) => (
                            <div key={index}
                                 className="group flex items-start gap-6 p-3 rounded border border-black shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {element.title}
                                    </h3>
                                    <div className="space-y-2">
                                        <p className="text-gray-600 flex items-start gap-2">
                                            <span className="text-red-500 font-semibold mt-0.5">✗</span>
                                            <span><strong>Problem:</strong> {element.problem}</span>
                                        </p>

                                        <p className="text-gray-600 flex items-start gap-2">
                                            <span className="text-green-500 font-semibold mt-0.5">✓</span>
                                            <span><strong>Solution:</strong> {element.solution}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-8">
                        {missingElementsTwo.map((element, index) => (
                            <div key={index}
                                 className="group flex items-start gap-6 p-3 rounded border border-black shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {element.title}
                                    </h3>
                                    <div className="space-y-2">
                                        <p className="text-gray-600 flex items-start gap-2">
                                            <span className="text-red-500 font-semibold mt-0.5">✗</span>
                                            <span><strong>Problem:</strong> {element.problem}</span>
                                        </p>

                                        <p className="text-gray-600 flex items-start gap-2">
                                            <span className="text-green-500 font-semibold mt-0.5">✓</span>
                                            <span><strong>Solution:</strong> {element.solution}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mb-8 md:mb-0 md:block hidden">
                        <div className="w-full max-w-sm mx-auto">
                            <Image
                                src="/assets/services/bug.svg"
                                alt="Missing Elements"
                                width={400}
                                height={400}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <motion.button
                                className=" px-6 sm:px-8 py-2 border flex items-center border-black rounded"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.97}}
                            >
                                FIX MY WEBSITE NOW <svg
                                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                            </motion.button>
                        </div>
                        <p className="text-gray-500">
                            <span className="text-primary font-semibold">Free consultation</span> -
                            <span className="text-secondary font-semibold"> 24hr response</span> -
                            <span className="text-black font-semibold"> No commitment</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteMissingSection;
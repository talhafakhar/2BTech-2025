import React from 'react';
import {Clock, Layers, Package, Repeat, Target, Users} from 'lucide-react';
import {motion} from "framer-motion";

export default function MVPComparison() {
    const comparisonData = [
        {
            icon: Clock,
            aspect: 'Timeline',
            mvp: '8-12 weeks',
            full: '6-12 months'
        },
        {
            icon: Package,
            aspect: 'Features',
            mvp: 'Core only (5-10)',
            full: 'Complete (50+)'
        },
        {
            icon: Target,
            aspect: 'Purpose',
            mvp: 'Validate & learn',
            full: 'Scale & monetize'
        },
        {
            icon: Users,
            aspect: 'Users',
            mvp: 'Early adopters',
            full: 'Mass market'
        },
        {
            icon: Repeat,
            aspect: 'Changes',
            mvp: 'Frequent pivots',
            full: 'Stable roadmap'
        }
    ];

    return (
        <div className="py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div
                    className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Layers className="w-6 h-6 text-primary"/>
                        <p className="text-secondary  font-bold">Tech Stack Selection</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        We choose based on your specific needs, team skills, scaling plans, and budget. No
                        one-size-fits-all.
                    </p>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold  mb-8">
                    MVP VS FULL PRODUCT
                </h3>
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border-separate border border-gray-400 border-spacing-0 shadow-md rounded-xl overflow-hidden">
                        <thead>
                        <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 ">
                            <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide border-b">
                                Aspect
                            </th>
                            <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide border-b">
                                MVP
                            </th>
                            <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide border-b">
                                Full Product
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {comparisonData.map((row, index) => {
                            const Icon = row.icon;
                            return (
                                <tr
                                    key={index}
                                    className={`transition-all duration-300 hover:bg-blue-50 ${
                                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    }`}
                                >
                                    <td className="px-6 py-4 border-b">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium text-gray-900">{row.aspect}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-b text-gray-700 leading-relaxed">
                                        {row.mvp}
                                    </td>
                                    <td className="px-6 py-4 border-b text-gray-700 leading-relaxed">
                                        {row.full}
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>

                <div className="md:hidden space-y-5">
                    {comparisonData.map((row, index) => {
                        const Icon = row.icon;
                        return (
                            <div
                                key={index}
                                className=" border border-gray-400 rounded-xl p-5 bg-gradient-to-br from-white to-blue-50 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-base">
                                        {row.aspect}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white p-3 rounded-lg shadow-inner border">
                                        <p className="text-xs font-medium text-blue-600 mb-1 uppercase">
                                            MVP
                                        </p>
                                        <p className="text-gray-700 leading-snug">{row.mvp}</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg shadow-inner border">
                                        <p className="text-xs font-medium text-green-600 mb-1 uppercase">
                                            Full Product
                                        </p>
                                        <p className="text-gray-700 leading-snug">{row.full}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-8">
                    <motion.button
                        onClick={() =>
                            window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                        }
                        className="px-6  py-2 border flex items-center justify-center border-black rounded mx-auto"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.97}}
                    >
                        Get Free Consultation
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
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
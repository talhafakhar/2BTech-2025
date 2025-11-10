"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
const MobileServicesSection = () => {
    const services = [
        {
            title: "Cross Platform App Development",
            description:
                "Efficient cross-platform app development for iOS and Android from a single codebase. Get to market faster and reduce costs by 40–60% without sacrificing quality.",
            image: "/assets/services/cross-platform.svg",
            keyFeatures: [
                "Cost Effective – One codebase means 40–60% cost savings.",
                "Faster Development – Launch on both stores simultaneously.",
                "Easier Maintenance – Update once, deploy everywhere.",
                "Shared Business Logic – Core written once, only UI differs.",
                "Code Reusability – 70–90% reuse across iOS & Android.",
                "Native Performance – Compiles to native code.",
                "Platform-Specific Customization – Native look & feel.",
            ],
            benefits: [
                "Budget-conscious projects",
                "Faster time to market",
                "Similar experience across platforms",
                "Limited technical resources",
                "MVP or startup launches",
            ],
        },
        {
            title: "React Native Development Company",
            description:
                "We build high-performance cross-platform apps using Facebook's React Native framework. Trusted by Instagram, Tesla, and Shopify.",
            image: "/assets/services/react-native.svg",
            keyFeatures: [
                "JavaScript/TypeScript with React paradigm.",
                "Native UI components (no web views).",
                "Hot Reload for instant updates.",
                "Huge npm ecosystem and libraries.",
                "Bridge to Native – access iOS/Android APIs.",
            ],
            benefits: [
                "Large developer community",
                "Proven performance at scale",
                "Fast refresh & debugging",
                "Over-the-air updates",
                "Reusable React skills",
            ],
        },
        {
            title: "Flutter App Development",
            description:
                "Modern Flutter app development for beautiful, natively compiled apps from a single codebase. Powered by Google.",
            image: "/assets/services/flutter.svg",
            keyFeatures: [
                "Dart + Flutter framework compiled to native ARM code.",
                "Hot Reload & Hot Restart for rapid dev cycles.",
                "Beautiful UI with 60/120 FPS animations.",
                "Single codebase for mobile, web & desktop.",
                "Rich widget library (Material & Cupertino).",
            ],
            benefits: [
                "Truly native performance",
                "Pixel-perfect UI",
                "Great animation & graphics support",
                "Strong Google ecosystem",
                "Excellent documentation",
            ],
        },
        {
            title: "React Native vs Flutter Comparison",
            description:
                "Compare React Native and Flutter to choose the best framework for your app.",
            image: "/assets/services/comparison.svg",
            keyFeatures: [
                "React Native → JavaScript/TypeScript | Flutter → Dart",
                "Performance → Near-native vs Native ARM compiled",
                "UI → Native components vs Skia custom engine",
                "Code Reuse → 70–90% vs 90–95%",
                "Community → Huge (React) vs Growing fast (Flutter)",
            ],
            benefits: [
                "React Native – best for data/content-driven apps",
                "Flutter – best for animation-heavy, design-focused apps",
                "Both production-ready & enterprise proven",
            ],
        },
        {
            title: "Mobile App Design",
            description:
                "User-centered mobile app design creating intuitive, engaging experiences.",
            image: "/assets/services/mobile-design.svg",
            keyFeatures: [
                "User Research – interviews & analysis.",
                "Information Architecture – logical flow mapping.",
                "Wireframing – low-fidelity prototypes.",
                "UI Design – pixel-perfect mockups for iOS/Android.",
                "Prototyping – interactive Figma or XD flows.",
                "Design Systems – reusable, scalable styles.",
            ],
            benefits: [
                "Mobile-first & thumb-friendly design",
                "Clear hierarchy & minimal cognitive load",
                "Delightful animations",
                "Accessibility for all users",
                "Platform consistency (HIG & Material)",
            ],
        },
    ];

    return (
        <section className="bg-gray-50 py-16 ">
            <div className="max-w-7xl mx-auto  px-4 mb-14 flex gap-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold max-w-4xl"
                >
                    Our Mobile App Development Services
                </motion.h2>
                <div className="hidden lg:block mt-3">
                    <Image
                        src="/assets/services/down-arrow.svg"
                        alt="arrow"
                        priority
                        width={200}
                        height={200}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 max-w-7xl px-4 mx-auto gap-8">
                {services.map((service, index) => {
                    const isLastOdd =
                        services.length % 2 !== 0 && index === services.length - 1;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className={`bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group ${
                                isLastOdd ? "md:col-span-2" : ""
                            }`}
                        >
                            <div className="relative bg-primary/10 p-4">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>

                            <div className="p-6 grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-primary font-bold text-sm uppercase mb-3">
                                        Key Features
                                    </h4>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        {service.keyFeatures.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckCircle
                                                    size={18}
                                                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {service.benefits && (
                                    <div>
                                        <h4 className="text-primary font-bold text-sm uppercase mb-3">
                                            Benefits
                                        </h4>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            {service.benefits.map((b, i) => (
                                                <li key={i} className="flex items-start">
                                                    <ArrowRight
                                                        size={18}
                                                        className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                                                    />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
export default MobileServicesSection;

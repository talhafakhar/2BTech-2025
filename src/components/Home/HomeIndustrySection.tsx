import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Sector {
    id: string;
    title: string;
    imageUrl: string;
}

const sectors: Sector[] = [
    { id: "fintech", title: "FinTech", imageUrl: "/assets/Home/slide-9.svg" },
    { id: "healthtech", title: "HealthTech", imageUrl: "/assets/Home/slide-10.svg" },
    { id: "saas", title: "SaaS Platforms", imageUrl: "/assets/Home/slide-11.svg" },
    { id: "edtech", title: "EdTech", imageUrl: "/assets/Home/slide-12.svg" },
    { id: "proptech", title: "PropTech", imageUrl: "/assets/Home/slide-13.svg" },
    { id: "ai-automation", title: "AI & Automation", imageUrl: "/assets/Home/slide-14.svg" },
    { id: "hrtech", title: "HRTech", imageUrl: "/assets/Home/slide-15.svg" },
    { id: "traveltech", title: "TravelTech", imageUrl: "/assets/Home/slide-16.svg" },
    { id: "retailtech", title: "RetailTech", imageUrl: "/assets/Home/slide-17.svg" },
    { id: "logistics-supplychain", title: "Logistics & Supply Chain", imageUrl: "/assets/Home/slide-18.svg" },
    { id: "wellness-fitness", title: "Wellness & Fitness", imageUrl: "/assets/Home/slide-19.svg" },
];

// Duplicate the logos to make the scroll loop seamless
const duplicatedLogos = [...sectors, ...sectors, ...sectors];

const HomeIndustrySection: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-10 pl-2 md:px-4">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 relative z-10"
                >
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight text-black">
                        Industry <span className="text-primary">We Serve</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-black/70">
                        Tailored Solutions for High-Growth Sectors
                    </p>
                </motion.div>

                <div className="relative flex items-center z-10 overflow-hidden">
                    <div className="flex gap-4 sm:gap-6 w-max animate-infinite-scroll">
                        {duplicatedLogos.map((sector, index) => (
                            <div
                                key={`${sector.id}-${index}`}
                                className="flex flex-col transition-all duration-500 h-[400px] md:h-80"
                            >
                                <div className="relative overflow-hidden rounded-2xl  w-64 sm:w-72 md:w-80 lg:w-96 h-64 md:h-80 flex-shrink-0">
                                    <Image
                                        src={sector.imageUrl}
                                        alt={sector.title}
                                        width={400}
                                        height={300}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                                        <h3 className="text-lg sm:text-xl md:text-2xl text-center font-bold tracking-wide">
                                            {sector.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <button
                        onClick={() =>
                            window.open("https://calendly.com/talhafakhar/discoverycall", "_blank")
                        }
                        className="inline-flex items-center border-black px-8 py-3 rounded border font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Explore Our Services
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

            {/* Custom animation */}
            <style jsx>{`
                @keyframes infinite-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-infinite-scroll {
                    display: flex;
                    animation: infinite-scroll 300s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default HomeIndustrySection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Industry {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
}

interface IndustriesSectionProps {
    industries: Industry[];
}

export default function IndustriesSection({ industries }: IndustriesSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsPerView(1);
            else if (window.innerWidth < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev + itemsPerView >= industries.length ? 0 : prev + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, itemsPerView, industries.length]);

    const visibleIndustries = industries.slice(currentIndex, currentIndex + itemsPerView);
    if (visibleIndustries.length < itemsPerView) {
        visibleIndustries.push(...industries.slice(0, itemsPerView - visibleIndustries.length));
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } }
    };

    return (
        <div className="py-16 relative overflow-hidden">
            {/* Background Blurs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
                        <span className="text-primary">Industry </span> We Serve
                    </h2>
                    <p className="text-xl text-primary max-w-2xl mx-auto">
                        Tailored solutions for every sector
                    </p>
                </motion.div>

                <div className="relative">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {visibleIndustries.map((industry, idx) => {
                                const Icon = industry.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        whileHover={{ scale: 1.04 }}
                                        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform"
                                        onMouseEnter={() => setIsAutoPlaying(false)}
                                        onMouseLeave={() => setIsAutoPlaying(true)}
                                    >
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                        />
                                        <div className="relative p-8 space-y-4">
                                            <motion.div
                                                whileHover={{ rotate: 8, scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                                className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center"
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </motion.div>
                                            <h3 className="text-2xl font-bold text-black group-hover:text-blue-700 transition-colors duration-300">
                                                {industry.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                                {industry.description}
                                            </p>
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full opacity-5 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                    <div className="flex justify-center gap-2 mt-12">
                        {Array.from({ length: Math.ceil(industries.length / itemsPerView) }).map((_, idx) => (
                            <motion.button
                                key={idx}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    setCurrentIndex(idx * itemsPerView);
                                    setIsAutoPlaying(false);
                                }}
                                className={`transition-all duration-300 rounded-full ${
                                    Math.floor(currentIndex / itemsPerView) === idx
                                        ? "w-8 h-3 bg-primary"
                                        : "w-3 h-3 bg-gray-300 hover:bg-blue-400"
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

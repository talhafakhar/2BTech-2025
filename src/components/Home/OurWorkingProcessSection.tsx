import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface Step {
    id: number;
    title: string;
    description: string;
    position: { x: number; y: number };
}

const steps: Step[] = [
    {
        id: 1,
        title: "Discovery",
        description:
            "We align on goals, requirements, and success metrics. Define scope, timeline, and team structure.",
        position: { x: 5, y: 10 },
    },
    {
        id: 2,
        title: "Design & Validation",
        description:
            "Create prototypes and validate with user testing. Refine before a single line of code is written.",
        position: { x: 70, y: 30 },
    },
    {
        id: 3,
        title: "Development",
        description:
            "Build in 2-week sprints with continuous testing. You see progress weekly, not monthly.",
        position: { x: 5, y: 50 },
    },
    {
        id: 4,
        title: "Launch & Support",
        description:
            "Deploy with monitoring and support. Iterate based on real user feedback.",
        position: { x: 70, y: 70 },
    },
];


const Workflow = () => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsNarrowScreen(window.innerWidth < 900);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getCardCenter = (step: Step) => {
        const x = (step.position.x / 100) * 900 + 160;
        const y = (step.position.y / 100) * 600 + 80;
        return { x, y };
    };

    const createCurvedPath = (from: Step, to: Step) => {
        const start = getCardCenter(from);
        const end = getCardCenter(to);
        const midX = (start.x + end.x) / 2;
        const cp1x = start.x + (midX - start.x) * 0.5;
        const cp1y = start.y;
        const cp2x = end.x - (end.x - midX) * 0.98;
        const cp2y = end.y;
        return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    };

    const createVerticalPath = (index: number) => {
        const cardHeight = 160;
        const x = 200;
        const startY = index * cardHeight + cardHeight;
        const endY = (index + 1) * cardHeight;
        return `M ${x} ${startY} L ${x} ${endY}`;
    };

    return (
        <section className="bg-gray-50 py-10 ">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-4   max-w-7xl mx-auto px-4"
            >
                <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight text-black">
                    How
                    <span className="text-primary"> We Work </span>
                </h2>
                <p className=" text-black/70 ">
                    How We Turn Ideas Into Scalable Products
                </p>
            </motion.div>

            <div className="relative max-w-7xl mx-auto px-4">
                <div
                    className={`relative w-full ${
                        isNarrowScreen ? "flex flex-col items-center space-y-10" : "h-[550px]"
                    }`}
                >

                <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox={isNarrowScreen ? "0 0 400 600" : "0 0 1000 600"}
                        style={{ zIndex: 1 }}
                    >
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                        {isNarrowScreen
                            ? steps.slice(0, -1).map((_, idx) => (
                                <motion.path
                                    key={`line-vertical-${idx}`}
                                    d={createVerticalPath(idx)}
                                    stroke="url(#lineGradient)"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeInOut" }}
                                />
                            ))
                            : steps.slice(0, -1).map((step, index) => {
                                const nextStep = steps[index + 1];
                                const path = createCurvedPath(step, nextStep);
                                return (
                                    <motion.path
                                        key={`line-${step.id}`}
                                        d={path}
                                        stroke="url(#lineGradient)"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.2, delay: index * 0.2, ease: "easeInOut" }}
                                    />
                                );
                            })}
                    </svg>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={`bg-white border border-black/50 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                                isNarrowScreen ? "relative  w-72" : "absolute w-64 md:w-80 lg:w-72 xl:w-96"
                            }`}

                            style={
                                isNarrowScreen
                                    ? {}
                                    : {
                                        left: `${step.position.x}%`,
                                        top: `${step.position.y}%`,
                                        zIndex: 50,
                                    }
                            }
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                                {step.id}
                            </div>
                            <div className="pt-4">
                                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center mt-5 relative z-10"
            >
                <motion.button
                    onClick={() =>
                        window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                    }
                    className="px-8 py-3 border mt-10 border-black font-semibold rounded shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                >
                    Start Your Project Today
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Workflow;

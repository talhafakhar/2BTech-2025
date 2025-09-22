"use client";
import {easeOut, motion} from "framer-motion";
import React, {FC} from "react";

interface WhyTeamsChooseProps {
    title?: string;
    titleTwo?: string;
    description?: string;
    services?: Array<any>;
}

// Variants for animation
const containerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.2, delayChildren: 0.2},
    },
};

const itemVariants = {
    hidden: {opacity: 0, y: 60, scale: 0.95},
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {duration: 0.7, ease: easeOut},
    },
};

const WhyTeamsChoose: FC<WhyTeamsChooseProps> = ({
                                                     title,
                                                     titleTwo,
                                                     description,
                                                     services,
                                                 }) => {
    return (
        <div className="relative overflow-hidden py-16 px-8">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1, ease: "easeOut"}}
                    viewport={{once: true}}
                    className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1, ease: "easeOut", delay: 0.2}}
                    viewport={{once: true}}
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        {title}
                        <span className="text-primary"> {titleTwo}</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">{description}</p>
                </motion.div>

                <motion.div
                    className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    {services?.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative ${
                                index === 1 ? "lg:mt-16" : ""
                            }  transition-shadow duration-300 `}
                            whileHover={{scale: 1.05}}
                        >
                            <div
                                className={`absolute -top-6 -left-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 ${
                                    feature.color === "blue" ? "bg-primary" : "bg-secondary"
                                }`}
                            >
                                {index + 1}
                            </div>

                            <div className="relative overflow-hidden ">
                                <div className={`absolute top-0 left-0 w-1 h-full ${
                                    feature.color === 'blue' ? 'bg-primary' : 'bg-secondary'
                                } transform origin-top`}></div>

                                <div className="pl-8 pr-4 py-8">
                                    <h3
                                        className={`text-2xl sm:text-3xl font-bold mb-4 ${
                                            feature.color === "blue"
                                                ? "text-primary"
                                                : "text-secondary"
                                        }`}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <div className={`mt-6 w-0 h-0.5 ${feature.color === 'blue' ? 'bg-primary' : 'bg-secondary'} w-24 transition-all duration-500`}></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <button className="relative bg-white border border-black rounded px-6 py-3 shadow-md hover:shadow-xl transition">

                        Ready to accelerate your project?

                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyTeamsChoose;

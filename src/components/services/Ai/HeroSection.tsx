'use client';
import * as React from "react";
import {easeInOut, motion} from "framer-motion";
import Navbar from "@/components/Blog/BlogHeader";
import Image from "next/image";

interface ServiceHeroProps {
    title?: string;
    description?: string;
    path: string;
    buttonText?: string;
}

const HeroSection: React.FC<ServiceHeroProps> = ({title, description, path, buttonText}) => {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.8,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.6, ease: easeInOut },
        },
    };
    const itemVariants: any = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9,
            transition: { duration: 0.5, ease: easeInOut },
        },
    };
    return (
        <div className="min-h-screen bg-center bg-cover"
             style={{backgroundImage: 'url("/assets/services/hero/hero-service-bg.svg")'}}>
            <Navbar/>
            <div className="inset-0 bg-white/60 absolute z-0"></div>
            <div className="min-h-[100dvh] px-4 flex items-center relative z-10">
                <div className="container mx-auto">
                    <div className="mt-32 md:mt-0 flex flex-col md:flex-row justify-between items-center gap-10">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="w-full md:w-1/2"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-3xl sm:text-6xl md:text-8xl font-bold max-w-4xl"
                            >
                                {title}
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl text-gray-700"
                            >
                                {description}
                            </motion.p>
                            <motion.div variants={itemVariants} className="mt-4 sm:mt-8">
                                <motion.button
                                    className="group relative px-6 sm:px-8 py-2.5 border border-black bg-white rounded backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out hover:text-black"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.97}}
                                >
                                        <span className="relative z-10">
                                            {buttonText}
                                        </span>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                        <motion.div variants={itemVariants} initial="hidden" animate="visible"          className="w-full md:w-1/2">
                            <Image
                                src={path}
                                alt="Hero Image"
                                width={900}
                                height={700}
                                priority
                                loading="eager"
                                className="w-full h-auto object-contain max-w-[900px] md:h-[38rem]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
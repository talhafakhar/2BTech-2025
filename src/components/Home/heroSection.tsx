'use client';
import * as React from "react";
import Navbar from "../Header/Navbar";
import {easeInOut, motion} from "framer-motion";
import {Code, Globe, Zap} from "lucide-react";
import Image from "next/image";
interface HeroSectionProps {
    title?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({title}) => {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                duration: 0.6
            }
        }
    };
    const itemVariants = {
        hidden: {opacity: 0, y: 60},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.9, ease: easeInOut}
        }
    };
    const floatingVariants = {
        initial: {y: 0, rotate: 0},
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: easeInOut,
            }
        }
    };
    return (
        <div className="relative min-h-screen overflow-hidden"
             style={{
                 background: 'linear-gradient(140deg, rgba(255, 255, 255, 1) 0%, rgba(15, 87, 188, 1) 24%, rgba(191, 30, 46, 1) 100%)'
             }}>
            <Navbar/>
            <motion.div
                className="absolute top-20 right-20 text-purple-400 hidden md:block"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
            >
                <Code size={40}/>
            </motion.div>
            <motion.div
                className="absolute bottom-32 left-20 text-cyan-400 hidden md:block"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                style={{animationDelay: '2s'}}
            >
                <Zap size={32}/>
            </motion.div>
            <motion.div
                className="absolute top-1/2 right-16 text-emerald-400 hidden md:block"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                style={{animationDelay: '4s'}}
            >
                <Globe size={28}/>
            </motion.div>

            <div className="relative z-10 min-h-[100dvh] px-4 flex items-center justify-center">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="flex flex-col mt-32 md:mt-0 items-center justify-center gap-6 mb-10 px-2 text-center">
                        <motion.div variants={containerVariants} initial="hidden" animate="visible">
                            <motion.h1
                                variants={itemVariants}
                                className="text-[28px] sm:text-[40px] lg:text-[64px] text-white font-semibold leading-tight sm:leading-[60px] lg:leading-[77px] max-w-3xl mx-auto"
                            >
                                {title}
                            </motion.h1>

                            <motion.div variants={itemVariants} className="mt-4 sm:mt-6 flex justify-center">
                                <motion.button
                                    className="group relative px-6 sm:px-8 py-3 border border-white rounded text-white backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out hover:text-black"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10">Get an Estimate</span>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div
                        className={`
        w-full max-w-7xl gap-6 md:gap-10 px-4
        flex flex-col-reverse md:flex-row justify-center md:justify-between items-center
        ${`static md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2`}
        pb-6 mt-6 sm:mt-10
      `}
                    >
                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-white text-[16px] sm:text-[18px] mb-2">
                                Trusted by Visionaries Across Industries
                            </h3>
                            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 flex-wrap">
                                <Image
                                    src="/assets/services/hero/body-factory.webp"
                                    alt="Body Factory"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="filter invert brightness-0 max-w-[100px] h-auto"
                                />
                                <Image
                                    src="/assets/services/hero/dapp.webp"
                                    alt="DApp"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    className="filter invert brightness-0 max-w-[100px] h-auto"
                                />
                                <Image
                                    src="/assets/services/hero/lotte-kolson.webp"
                                    alt="Lotte Kolson"
                                    width={110}
                                    height={110}
                                    loading="lazy"
                                    className="filter invert brightness-0 max-w-[110px] h-auto"
                                />
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-white mb-2 sm:mb-4 text-[16px] sm:text-[18px]">
                                Awards and Recognition
                            </h3>
                            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 flex-wrap">
                                <Image
                                    src="/assets/Home/clutch-logo.svg"
                                    alt="Clutch"
                                    width={70}
                                    height={70}
                                    loading="lazy"
                                    className="max-w-[70px] h-auto"
                                />
                                <Image
                                    src="/assets/Home/top-website-development-companies.svg"
                                    alt="Top Website Development Companies"
                                    width={70}
                                    height={70}
                                    loading="lazy"
                                    className="max-w-[70px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default HeroSection;
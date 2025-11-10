'use client';
import * as React from "react";
import {useEffect, useState} from "react";
import {easeInOut, motion} from "framer-motion";
import {Code, Globe, Zap} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Header/Navbar";

const HeroSection: React.FC = () => {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };
    const itemVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6, ease: easeInOut}
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
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    useEffect(() => {
        const increment1 = setInterval(() => {
            setCount1(prev => {
                if (prev >= 150) {
                    clearInterval(increment1);
                    return 150;
                }
                return prev + 5;
            });
        }, 150);
        const increment2 = setInterval(() => {
            setCount2(prev => {
                if (prev >= 200) {
                    clearInterval(increment2);
                    return 200;
                }
                return prev + 10;
            });
        }, 200);
        const increment3 = setInterval(() => {
            setCount3(prev => {
                if (prev >= 10) {
                    clearInterval(increment3);
                    return 10;
                }
                return prev + 1;
            });
        }, 30);
        return () => {
            clearInterval(increment1);
            clearInterval(increment2);
            clearInterval(increment3);
        };
    }, []);
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
                    <div
                        className="flex flex-col mt-32 md:mt-0 items-center justify-center gap-6 mb-10 px-2 text-center">
                        <motion.div variants={containerVariants} initial="hidden" animate="visible">
                            <motion.h1
                                variants={itemVariants}
                                className="text-[28px] md:text-[40px] font-bold leading-tight sm:leading-[60px] max-w-4xl mx-auto text-white"
                            >
                                Remarkable Outcomes <br/> Achieved
                            </motion.h1>

                            <motion.div variants={itemVariants} className="mt-4 sm:mt-6 flex justify-center">
                                <motion.button
                                    onClick={() =>
                                        window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                                    }
                                    className="group relative px-6 sm:px-8 py-3 border border-white rounded text-white backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out hover:text-black"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.97}}
                                >
                                    <span
                                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
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
                            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 flex-wrap">
                                <div className="border border-white rounded px-4 py-2 text-white">
                                    <div className="text-5xl font-bold  mb-1 font-clash">
                                        {count1}+
                                    </div>
                                    <div className="text-sm">HAPPY CUSTOMERS</div>
                                </div>
                                <div className="border border-white rounded px-4 py-2 text-white">
                                    <div className="text-5xl font-bold   mb-1 font-clash">
                                        {count2}+
                                    </div>
                                    <div className="text-sm">PROJECTS DONE</div>
                                </div>
                                <div className="border border-white text-white rounded px-4 py-2">
                                    <div className="text-5xl font-bold  mb-1 font-clash">
                                        {count3}+
                                    </div>
                                    <div className="text-sm">DIFFERENT INDUSTRIES</div>
                                </div>
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
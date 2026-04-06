'use client';
import * as React from "react";
import Navbar from "../Header/Navbar";
import {easeInOut, motion} from "framer-motion";
import {Code, Globe, Zap} from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
}

const clientLogos = [
    {src: "/assets/services/hero/abacus.webp", alt: "Abacus"},
    {src: "/assets/services/hero/aq.webp", alt: "AQ"},
    {src: "/assets/services/hero/body-factory.webp", alt: "Body Factory"},
    {src: "/assets/services/hero/book-bite.webp", alt: "Book Bite"},
    {src: "/assets/services/hero/dapp.webp", alt: "DApp"},
    {src: "/assets/services/hero/forland.webp", alt: "Forland"},
    {src: "/assets/services/hero/grit-coaches.webp", alt: "Grit Coaches"},
    {src: "/assets/services/hero/italianmoda.webp", alt: "Italian Moda"},
    {src: "/assets/services/hero/lotte-kolson.webp", alt: "Lotte Kolson"},
    {src: "/assets/services/hero/maxima.webp", alt: "Maxima"},
    {src: "/assets/services/hero/meplanet.webp", alt: "Meplanet"},
    {src: "/assets/services/hero/mesha.webp", alt: "Mesha"},
    {src: "/assets/services/hero/pac.webp", alt: "PAC"},
    {src: "/assets/services/hero/pandora.webp", alt: "Pandora"},
    {src: "/assets/services/hero/realtime.webp", alt: "Realtime"},
    {src: "/assets/services/hero/redfluffy.webp", alt: "Redfluffy"},
    {src: "/assets/services/hero/relevic.webp", alt: "Relevic"},
    {src: "/assets/services/hero/roundd.webp", alt: "Roundd"},
    {src: "/assets/services/hero/tribe-35.webp", alt: "Tribe 35"},
    {src: "/assets/services/hero/vasl.webp", alt: "Vasl"},
    {src: "/assets/services/hero/ways-tax.webp", alt: "Ways Tax"},
    {src: "/assets/services/hero/xa-studios.webp", alt: "XA Studios"},
];
const HeroSection: React.FC<HeroSectionProps> = ({title, subtitle, buttonText}) => {
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
                    <div
                        className="flex flex-col mt-32 md:mt-0 items-center justify-center gap-6 mb-10 px-2 text-center">
                        <motion.div variants={containerVariants} initial="hidden" animate="visible">
                            <motion.h1
                                variants={itemVariants}
                                className="text-[28px] sm:text-[40px] lg:text-[64px] text-white font-semibold leading-tight sm:leading-[60px] lg:leading-[77px] max-w-3xl mx-auto"
                            >
                                {title}
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="text-lg text-white/80 leading-tight py-2 max-w-3xl mx-auto"
                            >{subtitle}
                            </motion.p>


                            <motion.div variants={itemVariants} className="mt-4 sm:mt-6 flex justify-center">
                                <motion.button
                                    onClick={() =>
                                        window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                                    }
                                    className="group relative px-6 py-2 border border-white rounded text-white backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out hover:text-black"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.97}}
                                >
                                    <span
                                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    <span
                                        className="relative z-10">{buttonText ? buttonText : "Get an Estimate"} </span>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div
                        className="
        w-full container gap-6 md:gap-10 px-4
        flex flex-col-reverse md:flex-row justify-center md:justify-between items-center static md:absolute md:bottom-2 md:left-1/2 md:-translate-x-1/2
        pb-6 mt-6 sm:mt-10
      "
                    >

                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-white text-[16px] sm:text-[18px] mb-3">
                                Trusted by Visionaries Across Industries
                            </h3>

                            <div className="relative overflow-hidden max-w-[520px] md:max-w-[580px]">
                                <div className="flex items-center w-max animate-logoSlide">
                                    {[...clientLogos, ...clientLogos].map((logo, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-center min-w-[110px] h-[50px] mr-8 shrink-0"
                                        >
                                            <Image
                                                src={logo.src}
                                                alt={logo.alt}
                                                width={100}
                                                height={100}
                                                loading="lazy"
                                                className="max-w-[100px] h-auto"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-white mb-2 sm:mb-4 text-[16px] sm:text-[18px]">
                                Awards and Recognition
                            </h3>
                            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 flex-wrap">

                                <a
                                    href="https://clutch.co/2btech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-105"
                                >
                                    <Image
                                        src="/assets/Home/clutch-logo.svg"
                                        alt="Clutch"
                                        width={70}
                                        height={70}
                                        loading="lazy"
                                        className="max-w-[70px] h-auto"
                                    />
                                </a>

                                <a
                                    href="https://www.goodfirms.co/company/2btech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-105"
                                >
                                    <Image
                                        src="/assets/Home/top-website-development-companies.svg"
                                        alt="Top Website Development Companies"
                                        width={70}
                                        height={70}
                                        loading="lazy"
                                        className="max-w-[70px] h-auto"
                                    />
                                </a>

                                <a
                                    href="https://www.trustpilot.com/review/2btechinc.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-105"
                                >
                                    <Image
                                        src="/assets/Home/trustpilot.svg"
                                        alt="Trust pilot logo"
                                        width={60}
                                        height={60}
                                        loading="lazy"
                                        className="max-w-[60px] h-auto"
                                    />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;
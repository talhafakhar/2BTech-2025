'use client';
import * as React from "react";
import Navbar from "../Header/Navbar";
import {motion} from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    buttonText?: string;
}

const clientLogos = [
    { src: "/assets/services/hero/abacus.webp", alt: "Abacus" },
    { src: "/assets/services/hero/aq.webp", alt: "AQ" },
    { src: "/assets/services/hero/body-factory.webp", alt: "Body Factory" },
    { src: "/assets/services/hero/book-bite.webp", alt: "Book Bite" },
    { src: "/assets/services/hero/dapp.webp", alt: "DApp" },
    { src: "/assets/services/hero/forland.webp", alt: "Forland" },
    { src: "/assets/services/hero/grit-coaches.webp", alt: "Grit Coaches" },
    { src: "/assets/services/hero/italianmoda.webp", alt: "Italian Moda" },
    { src: "/assets/services/hero/lotte-kolson.webp", alt: "Lotte Kolson" },
    { src: "/assets/services/hero/maxima.webp", alt: "Maxima" },
    { src: "/assets/services/hero/meplanet.webp", alt: "Meplanet" },
    { src: "/assets/services/hero/mesha.webp", alt: "Mesha" },
    { src: "/assets/services/hero/pac.webp", alt: "PAC" },
    { src: "/assets/services/hero/pandora.webp", alt: "Pandora" },
    { src: "/assets/services/hero/realtime.webp", alt: "Realtime" },
    { src: "/assets/services/hero/redfluffy.webp", alt: "Redfluffy" },
    { src: "/assets/services/hero/relevic.webp", alt: "Relevic" },
    { src: "/assets/services/hero/roundd.webp", alt: "Roundd" },
    { src: "/assets/services/hero/tribe-35.webp", alt: "Tribe 35" },
    { src: "/assets/services/hero/vasl.webp", alt: "Vasl" },
    { src: "/assets/services/hero/ways-tax.webp", alt: "Ways Tax" },
    { src: "/assets/services/hero/xa-studios.webp", alt: "XA Studios" },
];

const awardLogos = [
    { url: "https://clutch.co/2btech", img: "/assets/Home/clutch-logo.svg", alt: "Clutch" },
    { url: "https://www.goodfirms.co/company/2btech", img: "/assets/Home/top-website-development-companies.svg", alt: "GoodFirms" },
    { url: "https://www.trustpilot.com/review/2btechinc.com", img: "/assets/Home/trustpilot.svg", alt: "Trustpilot" }
];

const HeroSection: React.FC<HeroSectionProps> = ({
                                                     title,
                                                     subtitle,

                                                 }) => {
    return (
        <div className="relative w-full min-h-screen  overflow-hidden border-b ">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[400px] h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-60 right-0 w-[400px] h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>


            <Navbar />
            <div className="relative z-10 w-full h-screen flex flex-col items-center justify-between px-4 pt-0 md:pt-0">
                <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-black"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap px-4">
                                {awardLogos.map((award, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={award.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + idx * 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <Image
                                            src={award.img}
                                            alt={award.alt}
                                            width={80}
                                            height={80}
                                            loading="lazy"
                                            className="max-w-[70px] md:max-w-[80px] h-auto"
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full pb-12 flex justify-center"
                >
                    <div className="flex flex-col gap-8 w-full container px-4">
                        <div className="flex items-center gap-6 md:gap-12">
                            <h3 className="text-2xl md:text-3xl font-semibold text-black whitespace-nowrap">
                                Trusted By
                            </h3>
                            <div className="h-10 md:h-16 w-[2px] bg-black"></div>
                            <div className="relative overflow-hidden flex-1">
                                <motion.div
                                    className="flex items-center gap-8 md:gap-12 w-max py-8"
                                    animate={{ x: [0, -2000] }}
                                    transition={{
                                        duration: 50,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    {[...clientLogos, ...clientLogos].map((logo, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-center min-w-[110px] md:min-w-[140px] h-12 md:h-16  shrink-0"
                                        >
                                            <Image
                                                src={logo.src}
                                                alt={logo.alt}
                                                width={110}
                                                height={50}
                                                loading="lazy"
                                                className="max-w-[100px] md:max-w-[130px] h-auto"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
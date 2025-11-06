'use client';
import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';

type AboutSectionProps = {
    title: string;
    description: string;
    descriptionTwo?:string;
    descriptionThree?:string;
    src: string;
    width?: number;
};

const AboutSection: React.FC<AboutSectionProps> = ({title, description,descriptionTwo,descriptionThree, src, width}) => {
    return (
        <section className={`${width === 500 ? "py-5" : "py-20"} px-6 relative overflow-hidden`}>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div
                    className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div
                className="max-w-7xl mx-auto flex md:flex-row flex-col justify-center md:justify-between gap-5 w-full items-center relative z-10">
                <motion.div
                    className="md:w-1/2 w-full"
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, ease: "easeInOut"}}
                    viewport={{once: true, amount: 0.3}}
                >
                    <Image
                        src={src}
                        alt="3d"
                        width={width}
                        loading="lazy"
                        className={`${width === 450 ? "rounded-2xl" : ""}`}
                        height={400}
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full"
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, ease: "easeInOut", delay: 0.2}}
                    viewport={{once: true, amount: 0.3}}
                >
                    <h2 className={`${width === 450 ? "text-4xl md:text-5xl " : "text-2xl md:text-3xl"}  font-bold leading-tight mb-2`}>
                        {title}
                    </h2>
                    <p className={`${width === 450 ? "mt-6" : "mb-2"}`}>{description}</p>
                    <p className="mb-2">{descriptionTwo}</p>
                    <p>{descriptionThree}</p>
                    <div>
                        <div
                            className={`${width === 450 ? "mt-8" : "mt-2"} flex gap-2 sm:gap-6 justify-center md:justify-start items-center `}>
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                onClick={() =>
                                    window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')
                                }
                                className="flex items-center  border-black px-6 py-3 rounded border font-semibold transform transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Schedule Free Consultation
                                <svg
                                    className="ml-2 w-5 h-5 transform transition-transform duration-300"
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
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;

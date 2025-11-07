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
        <section className={`py-16 px-6 relative overflow-hidden`}>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-center md:justify-between gap-5 w-full items-center relative z-10">
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
                    <p className={`${width === 450 ? "mt-6" : "mb-2"} text-black/60`}>{description}</p>
                    <p className="mb-2 text-black/60">{descriptionTwo}</p>
                    <p className="text-black/60">{descriptionThree}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;

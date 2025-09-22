'use client';
import { motion } from "framer-motion";
import Image from 'next/image';
import React from 'react';
interface ServiceIntroProps {
    title?: string;
    description?: string;
    path: string;
}
const AiServiceIntro: React.FC<ServiceIntroProps> = ({title,description,path}) => {
    return (
        <section className="pt-20 pb-5 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto  flex md:flex-row flex-col-reverse justify-center md:justify-between gap-5 w-full items-center relative z-10">
                <motion.div
                    className="md:w-1/2 w-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                        {title}
                    </h2>
                    <p className="text-lg mb-6">
                        {description}
                    </p>
                    <div>
                        <div className="flex  gap-2 sm:gap-6 justify-center md:justify-start items-center mt-8">

                            <button   onClick={() => window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')} className="inline-flex items-center border-black px-8 py-3 rounded border font-semibold   transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                               Let's Talk
                                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 w-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image
                        src={path}
                        alt="3d"
                        width={380}
                        loading="lazy"
                        height={380}
                        className="md:ml-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default AiServiceIntro;

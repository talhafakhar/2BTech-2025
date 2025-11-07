'use client';
import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

interface DefinitionItem {
    title: string;
    description: string;
}

interface WhatIsSectionProps {
    heading: string;
    highlight: string;
    description?: string;
    definitionOne: DefinitionItem[];
    definitionTwo?: DefinitionItem[];
    imageOne: string;
    imageTwo?: string;
}

const WhatIsSection: React.FC<WhatIsSectionProps> = ({
                                                         heading,
                                                         highlight,
                                                         description,
                                                         definitionOne,
                                                         definitionTwo,
                                                         imageOne,
                                                         imageTwo,
                                                     }) => {
    return (
        <div className="relative overflow-hidden py-16">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div
                    className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 ">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-5xl font-bold max-w-4xl mx-auto">
                        {heading}{' '}
                        <span className="text-primary">
              {highlight}
            </span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-4xl mx-auto">{description}</p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    viewport={{once: true, amount: 0.3}}
                >
                    <div className="mb-8 md:mb-0 md:block hidden">
                        <div>
                            <Image
                                src={imageOne}
                                alt="Section illustration 1"
                                width={500}
                                height={500}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {definitionOne.map((item, index) => (
                            <motion.div
                                key={index}
                                className="group flex items-start gap-6 p-3 rounded border border-black shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                whileHover={{scale: 1.02}}
                            >
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {definitionTwo && (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-5"
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                        viewport={{once: true, amount: 0.3}}
                    >
                        <div className="space-y-4">
                            {definitionTwo?.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="group flex items-start gap-6 p-3 rounded border border-black shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mb-8 md:mb-0 md:block hidden">
                            <div className="flex justify-center">
                                <Image
                                    src={imageTwo || ''}
                                    alt="Section illustration 2"
                                    width={400}
                                    height={400}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                <div className="text-center mt-8">
                    <motion.button
                        onClick={() =>
                            window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                        }
                        className="px-6  py-2 border flex items-center justify-center border-black rounded mx-auto"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.97}}
                    >
                        Get Free Consultation
                        <svg
                            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
        </div>
    );
};

export default WhatIsSection;

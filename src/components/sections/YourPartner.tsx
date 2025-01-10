import React from 'react';
import Image from "next/image";
import {motion} from 'framer-motion';
import Link from "next/link";

export function YourPartner() {
    const heroFromRight = {
        hidden: {opacity: 0, x: 100},
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
            },
        }),
    };
    const heroFromLeft = {
        hidden: {opacity: 0, x: -100},
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
            },
        })
    };
    return (
        <div className='m-5'>
            <div className="container mx-auto border rounded-2xl px-4 sm:px-6 lg:px-10"
                 data-track-name='your_partner_section'
                 data-track-hover="true"
            >
                <div
                    className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 lg:p-10 relative z-10 gap-6">
                    <div className="w-full md:w-2/3 text-center md:text-left uppercase">
                        <motion.div
                            variants={heroFromLeft}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{once: false}}
                        >
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light stroke-text mb-2">
                                    Your partner <span className="font-bold text-white">for</span>
                                </h2>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                                    Reliable IT Solutions
                                </h3>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                                    and Services to Grow
                                </h3>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold stroke-text">
                                    Your Business
                                </h3>
                            </div>
                            <div className="mt-4 flex justify-center md:justify-start">
                                <Link
                                    href="#"
                                    data-track-name='your_partner_free_consultation'
                                    data-track-hover="true"
                                    data-track-click="true"
                                    className="group bg-black flex gap-2 items-center text-white border border-white px-4 py-2 rounded-lg uppercase font-bold transition-all duration-300 hover:bg-white hover:text-black"
                                >
                                    Free Consultation
                                    <Image
                                        src="/assets/svg/consultation.svg"
                                        width={20}
                                        height={20}
                                        alt="arrow to button"
                                        className="group-hover:filter group-hover:invert transition duration-300"
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/3 flex justify-center">
                        <motion.div
                            variants={heroFromRight}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{once: false}}
                        >
                            <Image
                                src="/assets/svg/manUsingLaptop.svg"
                                width={300}
                                height={200}
                                alt="man using laptop"

                            />

                        </motion.div>
                    </div>
                </div>
            </div>


        </div>
    );
}

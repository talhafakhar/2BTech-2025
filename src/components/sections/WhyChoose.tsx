import React from 'react';
import {motion} from 'framer-motion';
import Image from "next/image";
import {Pane} from "@/components/general/Pane";

export function WhyChoose() {
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
        <div className='m-2'>
            <div className="container mx-auto mt-20 mb-20">
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='w-full md:w-1/2 uppercase mb-6 md:mb-0'>
                        <motion.div
                            variants={heroFromLeft}
                            whileInView="visible"
                            initial='hidden'
                            viewport={{once: false}}
                            className='mx-auto text-center'
                        >
                            <h2 className='text-4xl md:text-5xl font-bold text-white mb-3'>
                                Why <span
                                className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Choose</span> 2btech
                            </h2>
                            <Image
                                src="/assets/svg/why.svg"
                                width={250}
                                height={250}
                                alt="man showing 2btech logo"
                                className='mx-auto'
                            />
                        </motion.div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <Pane/>
                    </div>
                </div>
            </div>
        </div>

    );
}

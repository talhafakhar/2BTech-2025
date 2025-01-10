import React, {useState} from 'react';
import Image from "next/image";
import {AnimatePresence, motion} from 'framer-motion';

export function WhoWeAre() {
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
    const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

    return (
        <div className='m-3'>
            <div className="container mx-auto py-5 border-t border-b  px-4 sm:px-6 lg:px-10"
                 data-track-name='who_we_are_section'
                 data-track-hover="true"
            >
                <div className="flex flex-col md:flex-row justify-between  p-5 relative z-10 gap-6">
                    <div className="w-full md:w-2/3 text-center md:text-left uppercase">
                        <motion.div
                            variants={heroFromLeft}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{once: false}}
                        >
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-2">
                                    <span
                                        className='bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>who</span> we
                                    are ?</h2>
                                <p className="text-white text-lg sm:text-xl md:text-1xl lg:text-2xl italic">2BTech Inc
                                    is a global IT solutions company dedicated to delivering top-quality software
                                    development, marketing, design, and SEO services. We specialize in helping
                                    businesses achieve their goals through innovative technology and tailored solutions.
                                    At 2BTech, we prioritize collaboration, trust, and exceptional results to empower
                                    our clients and drive success.</p>
                            </div>
                            <div className='mt-5'>
                                <div className="flex border-b">
                                    <button
                                        className={`px-4 py-2 text-sm  text-white font-medium ${
                                            activeTab === "mission"
                                                ? "border rounded-t-md "
                                                : " hover:text-blue-500"
                                        }`}
                                        onClick={() => setActiveTab("mission")}
                                        data-track-name='who_we_are_section_our_mission'
                                        data-track-hover="true"
                                        data-track-click="true"
                                    >
                                        Our Mission
                                    </button>
                                    <button className={`px-4 py-2 text-sm text-white font-medium ${
                                        activeTab === "vision"
                                            ? "border rounded-t-md "
                                            : "hover:text-blue-500"
                                    }`}
                                            onClick={() => setActiveTab("vision")}
                                            data-track-name='who_we_are_section_our_vision'
                                            data-track-hover="true"
                                            data-track-click="true"
                                    >
                                        Our Vision
                                    </button>
                                </div>
                                <div className="p-4 border rounded-t-none">
                                    <AnimatePresence mode="wait">
                                        {activeTab === "mission" && (
                                            <motion.div
                                                key="mission"
                                                initial={{opacity: 0, y: 10}}
                                                animate={{opacity: 1, y: 0}}
                                                exit={{opacity: 0, y: -10}}
                                                transition={{duration: 0.3}}
                                            >
                                                <p className="text-white text-sm">
                                                    Our mission at 2BTech is to make excellent IT services easily
                                                    accessible to B2B and B2C businesses on a worldwide scale. Our goal
                                                    is to facilitate maximum business success for all our clients and
                                                    do so while keeping our rates affordable and competitive.
                                                </p>
                                            </motion.div>
                                        )}
                                        {activeTab === "vision" && (
                                            <motion.div
                                                key="vision"
                                                initial={{opacity: 0, y: 10}}
                                                animate={{opacity: 1, y: 0}}
                                                exit={{opacity: 0, y: -10}}
                                                transition={{duration: 0.3}}
                                            >
                                                <p className="text-white text-sm">
                                                    Our vision is to become a global leader in IT solutions by fostering
                                                    innovation, building trust, and delivering unmatched quality to help
                                                    businesses thrive in the digital age.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
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
                                src="/assets/about/who.png"
                                width={400}
                                height={500}
                                alt="man thinking"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>


        </div>
    );
}

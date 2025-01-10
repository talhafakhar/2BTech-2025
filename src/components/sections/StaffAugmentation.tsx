import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function StaffAugmentation() {
    const svgFromLeft = {
        hidden: {opacity: 0, x: -100},
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
            },
        }),
    };
    const contentFromRight = {
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
    return (
        <div className='m-2'>
            <div className="container mx-auto pt-10 mt-10 border-t-2 px-4" data-track-name="staff_augmentation_section"
                 data-track-hover="true">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Hire As You Please Using{" "}
                        <span
                            className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Our Engagement Models
            </span>
                    </h2>
                    <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg">
                        2BTech is your IT services partner in third-party outsourcing and IT staff augmentation
                        services. We are one of the rare Business IT solutions company that is currently offering 2
                        hiring models for you to choose from:
                    </p>
                </div>
                <div className="flex flex-col gap-10 lg:flex-row justify-between items-center mt-10">
                    <motion.div
                        variants={svgFromLeft}
                        whileInView="visible"
                        initial='hidden'
                        viewport={{once: false}}
                        className='mx-auto'
                    >
                        <div className="mb-8 lg:mb-0">
                            <Image
                                src="/assets/svg/staffAugmentation.svg"
                                alt="staff augmentation"
                                width={400}
                                height={100}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={contentFromRight}
                        whileInView="visible"
                        initial='hidden'
                        viewport={{once: false}}
                        className='mx-auto'
                    >
                        <div className='flex flex-col gap-3'>
                            <div
                                className="flex flex-col text-center md:text-start md:flex-row gap-5 items-center border sm:max-w-sm md:max-w-md lg:max-w-lg  border-gray-700 p-4 max-w-lg rounded-lg ">
                                <div
                                    className="bg-[#93cc65] rounded-full flex justify-center px-[10px] py-1 items-center">
                                    <Image
                                        src={"/assets/svg/modal.svg"}
                                        alt="contract"
                                        width={10}
                                        height={10}
                                        style={{objectFit: "contain"}}
                                        className='w-[50px] md:w-[150px]'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-white text-xl sm:text-2xl font-bold">Fixed Model</h3>
                                    <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-md">
                                        Hire 2BTech&#39;s talent on-demand and set up a timeline and price according to
                                        your needs. Best suited for business owners who want the top IT personnel on
                                        their team without a long-term commitment.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col md:flex-row text-center md:text-start gap-5 md:ml-10 items-center border border-gray-700  max-w-lg sm:max-w-sm md:max-w-md lg:max-w-lg  p-4 rounded-lg">
                                <div className="bg-[#ff9d5b] rounded-full flex justify-center px-2 py-4 items-center">
                                    <Image
                                        src={"/assets/svg/team.svg"}
                                        alt="team"
                                        width={10}
                                        height={10}
                                        style={{objectFit: "contain"}}
                                        className='w-[50px]  md:w-[150px]'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-white text-xl sm:text-2xl font-bold">Dedicated Team</h3>
                                    <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-md">
                                        Receive the highest level of focus from our talented team by opting for this
                                        model. Best suited for every business looking to score a long list of goals
                                        within a specific time frame and an already set budget. </p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 flex justify-center md:justify-start'>
                            <Link
                                className="text-white bg-black flex gap-1 rounded-md border p-2 uppercase font-bold group duration-300 hover:bg-white hover:text-black transition-all "
                                href="#"
                            >
                                Get in Touch
                                <Image
                                    src={'/assets/svg/contact.svg'}
                                    width={25}
                                    height={25}
                                    className='transition-all duration-300 group-hover:filter group-hover:invert'
                                    alt='arrow to button'
                                />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    );
}

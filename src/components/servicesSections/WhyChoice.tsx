import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faComments, faDollarSign, faHeadset, faRocket, faUsers,} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

export function WhyChoice() {
    const items = [
        {
            icon: faDollarSign,
            text: "Market Competitive Prices",
        },
        {
            icon: faUsers,
            text: "Talented Developers Team",
        },
        {
            icon: faRocket,
            text: "Speedy Project Delivery",
        },
        {
            icon: faComments,
            text: "Transparent Client Communication",
        },
        {
            icon: faHeadset,
            text: "24/7 Availability Of Support Team",
        },
        {
            icon: faCode,
            text: "Comprehensive Web Development Services",
        },
    ];
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
    const btnFromRight = {
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
        <div className="m-2">
            <div className="container mx-auto pt-10 mt-5 px-4">
                <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
                    {/* Left Section */}
                    <div className="w-full md:flex-1">
                        <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-white"
                            style={{lineHeight: '1.2'}}>
    <span className="bg-gradient-to-r font-bold from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
      Why Is 2BTech Top
    </span>{" "}
                            Choice For Website Development?
                        </h2>
                        <div className='flex my-4 justify-center'>
                            <motion.div
                                variants={svgFromLeft}
                                whileInView="visible"
                                initial='hidden'
                                viewport={{once: false}}
                            >
                                <Image
                                    src={"/assets/svg/service/choice.svg"}
                                    alt="team"
                                    width={10}
                                    height={10}
                                    style={{objectFit: "contain"}}
                                    className='w-[80px] mt-5  md:w-[250px]'
                                />
                            </motion.div>
                            <motion.div
                                variants={btnFromRight}
                                whileInView="visible"
                                initial='hidden'
                                viewport={{once: false}}
                            >
                                <Link
                                    className="text-white items-center bg-black flex gap-2 rounded-md border p-2 uppercase font-bold group duration-300 hover:bg-white hover:text-black transition-all "
                                    href="#"
                                >
                                    Contact Us
                                    <Image
                                        src={'/assets/svg/contact.svg'}
                                        width={25}
                                        height={25}
                                        className='transition-all duration-300 group-hover:filter group-hover:invert'
                                        alt='arrow to button'
                                    />
                                </Link>
                            </motion.div>
                        </div>

                    </div>
                    {/* Right Section */}
                    <div className="flex items-center justify-center py-2 md:flex-1">
                        <div
                            className="bg-white bg-opacity-5 border rounded-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-2lg">
                            <ul className="space-y-6">
                                {items.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 text-blue-700">
                                        <div
                                            className="flex items-center justify-center w-10 h-10 bg-white border-[3px] border-primary rounded-full relative">
                                            <FontAwesomeIcon icon={item.icon} className="text-blue-600"/>
                                            {index < items.length - 1 && (
                                                <div
                                                    className="absolute left-1/2 -translate-x-1/2 top-full w-px h-8 bg-white"></div>
                                            )}
                                        </div>
                                        <span className="font-medium text-white">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

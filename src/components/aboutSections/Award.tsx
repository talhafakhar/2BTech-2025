import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

export function AwardSection() {
    const contentFromDown = {
        hidden: {opacity: 0, y: 100},
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
            },
        }),
    };
    const images = [
        {src: "/assets/svg/about/award_1.svg", alt: "Top web development company"},
        {src: "/assets/svg/about/award_2.svg", alt: "Clutch"},
        {src: "/assets/svg/about/award_3.svg", alt: "Top Developers"},
    ];
    return (
        <div className='m-2'>
            <div className="container mx-auto pt-10 mt-10 border-t-2 px-4">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        <span
                            className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                               Awards
                        </span>{" "}
                        and {" "}
                        <span
                            className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Honors
                        </span>
                    </h2>
                    <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg">
                        As a bespoke Business IT Solutions company, we are proud to be recognized for our contributions
                        to technological advancements by the following:
                    </p>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-10 sm-16 md:gap-20 p-3 md:p-10">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={contentFromDown}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{once: false}}
                            className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 flex justify-center items-center"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={170}
                                height={170}
                                className="rounded-lg object-contain"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>

    );
}

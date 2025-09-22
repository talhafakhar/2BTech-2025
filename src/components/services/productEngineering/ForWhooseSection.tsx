"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeBuildMVPsFor({audiences,title,description}:any) {
    return (
        <div className="py-16 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold ">
                        Who We Build <span className="text-primary"> {title}</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {audiences.map((audience:any, index:any) => (
                        <motion.div
                            key={index}
                            className="relative flex justify-between items-center gap-5 md:flex-row flex-col rounded-2xl border p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div
                                className={`absolute top-0 left-0 right-0 h-1 rounded-2xl transition-all duration-300 ${
                                    audience.color === "blue" ? "bg-primary" : "bg-secondary"
                                }`}
                            ></div>

                            <div>
                                <div className="mb-6">
                                    <div
                                        className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl bg-white transition-all duration-300 ${
                                            audience.color === "blue"
                                                ? " border-2 border-primary"
                                                : "border-2 border-secondary"
                                        }`}
                                    >
                                        {audience.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3
                                        className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                                            audience.color === "blue"
                                                ? "text-primary"
                                                : "text-secondary"
                                        }`}
                                    >
                                        {audience.title}
                                    </h3>

                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {audience.description}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <Image
                                    src={audience.src}
                                    alt=""
                                    width={200}
                                    height={100}
                                    className=""
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="relative bg-white border border-black rounded px-8 py-3">
                        <span className="text-lg font-medium">Describes your project</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

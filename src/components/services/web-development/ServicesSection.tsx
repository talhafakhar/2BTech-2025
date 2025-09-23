import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Service = {
    id: number;
    title: string;
    description: string;
    image?: string;
    smallImage?: string;
    highlightImage?: string;

};

type WebServicesGridProps = {
    heading: string;
    subHeading: string;
    description: string;
    arrowImage?: string;
    services: Service[];
};

const WebServicesGrid: React.FC<WebServicesGridProps> = ({
                                                             heading,
                                                             subHeading,
                                                             description,
                                                             arrowImage,

                                                             services,
                                                         }) => {
    return (
        <div className="bg-gray-50 px-4 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 flex gap-2 items-center">
                    <div>
                        <p className="text-primary text-sm font-bold tracking-wider uppercase mb-4">
                            {heading}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {subHeading}
                        </h1>
                        <p className="text-gray-600 max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    </div>
                    {arrowImage && (
                        <div>
                            <Image
                                src={arrowImage}
                                alt="arrow"
                                className=""
                                width={250}
                                height={250}
                            />
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`lg:col-span-4 bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg ${
                                index === 2 ? "lg:row-span-2" : ""
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {service.highlightImage && (
                                <div className="mb-6">
                                    <img
                                        src={service.highlightImage}
                                        alt={service.title}
                                        className="w-full h-48 lg:h-56 object-cover rounded-xl shadow-md"
                                    />
                                </div>
                            )}
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                                {service.title}
                            </h3>
                            <div className="flex  gap-2">
                                {service?.smallImage && (
                                    <div className="mb-6 md:block hidden">
                                        <img
                                            src={service?.smallImage}
                                            alt={service.title}
                                            className="w-full lg:w-80 h-24 object-cover rounded-xl shadow-md"
                                        />
                                    </div>
                                )}
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebServicesGrid;

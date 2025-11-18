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

const ServiceSection: React.FC<WebServicesGridProps> = ({
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
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {subHeading}
                        </h2>
                        <p className="text-gray-600 max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    </div>
                    {arrowImage && (
                        <div className="hidden lg:block">
                            <Image
                                src={arrowImage}
                                alt="arrow"
                                width={250}
                                height={250}
                            />
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {services.map((service, index) => {
                        const isFourServices = services.length === 4;
                        return (
                            <motion.div
                                key={service.id}
                                className={`
                    bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg
                    ${index === 2 ? "lg:row-span-2" : ""}
                    ${
                                    isFourServices
                                        ? index === 3
                                            ? "col-span-1 lg:col-span-8"
                                            : "col-span-1 lg:col-span-4"
                                        : "lg:col-span-4"
                                }
                `}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut",
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {service.highlightImage && (
                                    <div className="mb-2 hidden lg:block">
                                        <Image
                                            width={200}
                                            height={100}
                                            src={service.highlightImage}
                                            alt={service.title}
                                            className="w-full object-cover rounded-xl border shadow-md"
                                        />
                                    </div>
                                )}

                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>

                                <div className="flex flex-col md:flex-row gap-2 w-full">
                                    {service.smallImage && (
                                        <div className="hidden lg:block w-96 h-24">
                                            <Image
                                                width={100}
                                                height={100}
                                                src={service.smallImage}
                                                alt={service.title}
                                                className="p-2 w-96 h-24 border object-cover rounded shadow"
                                            />
                                        </div>
                                    )}
                                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>


            </div>
        </div>
    );
};

export default ServiceSection;

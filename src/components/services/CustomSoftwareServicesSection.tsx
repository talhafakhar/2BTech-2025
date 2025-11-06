import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

interface Service {
    id: number;
    title: string;
    description: string;
    keyFeatures: string[];
    benefits?: string[];
}

interface CustomSoftwareServicesSectionProps {
    heading?: string;
    headingHighlight?: string;
    subtitle?: string;
    services: Service[];
}

const CustomSoftwareServicesSection: React.FC<CustomSoftwareServicesSectionProps> = ({
                                                                                         heading ,
                                                                                         headingHighlight,
                                                                                         subtitle,
                                                                                         services,
                                                                                     }) => {
    return (
        <div className="bg-gray-50 px-4 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <p className="text-primary text-sm font-bold tracking-wider uppercase mb-4">
                        {headingHighlight}
                    </p>
                    <div className="flex gap-4 items-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {heading}
                        </h2>
                        <div className="hidden lg:block">
                            <Image
                                src="/assets/services/down-arrow.svg"
                                alt="arrow"
                                width={250}
                                height={250}
                            />
                        </div>
                    </div>
                    {subtitle && (
                        <p className="text-gray-600 text-lg max-w-3xl">{subtitle}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border shadow-md hover:shadow-lg transition-all duration-300 text-left"
                        >
                            <div className="bg-primary/10 rounded-t-2xl p-6">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                                <div>
                                    <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                                        Key Features
                                    </h4>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        {service.keyFeatures.map((f, i) => (
                                            <li key={i} className={`flex items-start ${heading === "Our Comprehensive AI & Generative AI Solutions" && "md:text-nowrap"}`}>
                                                <CheckCircle
                                                    size={18}
                                                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                                />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {service.benefits && service.benefits.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                                            Additional Benefits
                                        </h4>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            {service.benefits.map((b, i) => (
                                                <li key={i} className="flex items-start">
                                                    <ArrowRight
                                                        size={18}
                                                        className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                                                    />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSoftwareServicesSection;

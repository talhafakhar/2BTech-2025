import React from "react";
import { easeOut, motion } from "framer-motion";

interface FlowStep {
    title: string;
    duration: string;
    description?: string;
    keyActivities?: string[];
}

interface OurFlowSectionProps {
    heading: string;
    headingHighlight: string;
    description: string;
    services: FlowStep[];
}

const OurFlowSection: React.FC<OurFlowSectionProps> = ({
                                                           heading,
                                                           headingHighlight,
                                                           description,
                                                           services,
                                                       }) => {
    const isFiveItems = services.length === 5;
    const firstRow = isFiveItems ? services.slice(0, 3) : services;
    const secondRow = isFiveItems ? services.slice(3) : [];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, ease: easeOut },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, ease: easeOut },
        },
    };

    const Card = (service: FlowStep, index: number) => (
        <motion.div
            key={index}
            variants={cardVariants}
            className="group bg-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            style={{
                clipPath:
                    "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
            }}
        >
            <div className="p-8 h-full flex flex-col">
                <div>
                    <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                        <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-primary transition-colors duration-300">
                    {service.title}
                </h3>
                <h4>
                    <span className="font-medium mt-2">{service.duration}</span>
                </h4>

                {service.description && (
                    <p className="text-gray-600 leading-relaxed mt-6">
                        {service.description}
                    </p>
                )}

                {service.keyActivities && service.keyActivities.length > 0 && (
                    <div className="mt-5 text-gray-700">
                        <h5 className="font-bold text-secondary mb-2">Key Activities:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            {service.keyActivities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.div>
    );

    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        <span className="text-primary">{headingHighlight} </span>
                        {heading}
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl">{description}</p>
                </div>

                <motion.div
                    className={`grid gap-6 lg:gap-8 ${
                        isFiveItems
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {firstRow.map((service, index) => Card(service, index))}
                </motion.div>

                {isFiveItems && (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-8 max-w-4xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {secondRow.map((service, index) =>
                            Card(service, index + firstRow.length)
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default OurFlowSection;

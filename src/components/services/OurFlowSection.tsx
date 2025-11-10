import React from "react";
import { easeOut, motion } from "framer-motion";

interface ActivityItem {
    title?: string;
    detail?: string;
}

interface FlowStep {
    title: string;
    duration?: string;
    description?: string;
    keyPoints?: { title: string; detail: string }[];
    keyActivities?: (string | ActivityItem)[];
}

interface OurFlowSectionProps {
    heading: string;
    headingHighlight: string;
    description?: string;
    services: FlowStep[];
}

const OurFlowSection: React.FC<OurFlowSectionProps> = ({
                                                           heading,
                                                           headingHighlight,
                                                           description,
                                                           services,
                                                       }) => {
    const isFiveItems = services.length === 5;
    const isSevenItems = services.length === 7;

    const firstRow = isFiveItems
        ? services.slice(0, 3)
        : isSevenItems
            ? services.slice(0, 6)
            : services;
    const secondRow = isFiveItems
        ? services.slice(3)
        : isSevenItems
            ? services.slice(6)
            : [];

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
            transition: { ease: easeOut },
        },
    };

    const renderCard = (service: FlowStep, index: number) => {
        const activities = service.keyActivities ?? service.keyPoints ?? [];

        return (
            <motion.div
                key={index}
                variants={cardVariants}
                style={{
                    clipPath:
                        "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                }}
                className="group bg-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
                <div className="p-8">
                    <div className="flex flex-col mb-4">
                        <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                        {service.duration && (
                            <span className="text-sm font-semibold text-gray-500">
                ({service.duration})
              </span>
                        )}
                    </div>
                    {service.description && (
                        <p className="text-gray-600 leading-relaxed mb-5">
                            {service.description}
                        </p>
                    )}
                    {activities.length > 0 && (
                        <div className="space-y-3">
                            <ul className="list-disc space-y-2 text-gray-700">
                                {activities.map((activity, i) => {
                                    if (typeof activity === "string") {
                                        return <li key={i}>{activity}</li>;
                                    } else {
                                        return (
                                            <li key={i}>
                                                {activity.title && (
                                                    <span className="font-semibold text-secondary">
                            {activity.title}:
                          </span>
                                                )}{" "}
                                                {activity.detail}
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </motion.div>
        );
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold max-w-3xl mx-auto">
                        <span className="text-primary">{headingHighlight} </span>
                        {heading}
                    </h2>
                    {description && (
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                <motion.div
                    className={`grid gap-6 md:gap-8 ${
                        isFiveItems || isSevenItems
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {firstRow.map((service, index) => renderCard(service, index))}
                </motion.div>

                {(isFiveItems || isSevenItems) && (
                    <motion.div
                        className={`mt-8 ${
                            isFiveItems
                                ? "grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
                                : "flex justify-center"
                        }`}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {secondRow.map((service, index) =>
                            isSevenItems ? (
                                <div key={index} className="max-w-[400px] w-full">
                                    {renderCard(service, index + firstRow.length)}
                                </div>
                            ) : (

                                renderCard(service, index + firstRow.length)
                            )
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default OurFlowSection;

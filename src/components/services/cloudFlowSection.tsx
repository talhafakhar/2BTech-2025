import { motion } from "framer-motion";
import React from "react";

interface ProcessPoint {
    title: string;
    detail: string;
}

interface ProcessStep {
    title: string;
    duration: string;
    points: ProcessPoint[];
    deliverables: string;
}

interface CloudMigrationProcessProps {
    heading?: string;
    highlight?: string;
    description?: string;
    steps: ProcessStep[];
}

const CloudMigrationProcess: React.FC<CloudMigrationProcessProps> = ({
                                                                         heading ,
                                                                         highlight ,
                                                                         description,
                                                                         steps,
                                                                     }) => {
    return (
        <section className="relative overflow-hidden py-20">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-4 max-w-3xl mx-auto"
                >
                    {heading} <span className="text-primary">{highlight}</span>
                </motion.h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    {description}
                </p>

                {/* Steps */}
                <div className="space-y-20">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-start gap-8 ${
                                idx % 2 === 0 ? "" : "md:flex-row-reverse"
                            }`}
                        >
                            {/* Left side */}
                            <div className="md:w-1/2 space-y-4">
                                <h3 className="text-2xl font-semibold">
                                    {step.title}{" "}
                                    <span className="text-primary">
                                        ({step.duration})
                                    </span>
                                </h3>

                                <ul className="space-y-3">
                                    {step.points.map((p, i) => (
                                        <li key={i}>
                                            <p className="font-medium text-secondary">{p.title}</p>
                                            <p className="text-gray-600 text-sm">{p.detail}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right side */}
                            <div className="md:w-1/2 bg-blue-50 rounded p-6 border border-blue-100 shadow-sm">
                                <h4 className="font-semibold text-primary mb-2">
                                    Deliverables
                                </h4>
                                <p className="text-gray-700 text-sm">{step.deliverables}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CloudMigrationProcess;

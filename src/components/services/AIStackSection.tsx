"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface AIStackSectionProps {
    heading?: any;
    stackLogos?: {
        src: string;
        alt: string;
    }[];
}

const AIStackSection: React.FC<AIStackSectionProps> = ({
                                                           heading = "Stack we use",
                                                           stackLogos = Array.from({ length: 10 }, (_, i) => ({
                                                               src: `/assets/services/aiDigital/stack/stack-${i + 1}.svg`,
                                                               alt: `Logo ${i + 1}`,
                                                           })),
                                                       }) => {
    return (
        <section className="py-16 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold mt-10 text-center md:text-left"
                >
                    {heading}
                </motion.h2>

                {/* Stack Logos */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {stackLogos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex justify-center items-center bg-primary/10 py-4 rounded"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={50}
                                height={50}
                                style={{ objectFit: "contain" }}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-14 flex justify-center"
                >
                    <button
                        onClick={() =>
                            window.open(
                                "https://calendly.com/2btechinc/discoverywith2btech",
                                "_blank"
                            )
                        }
                        className="px-6 py-3 border border-black rounded flex items-center justify-center gap-2"
                    >
                        Connect with an  Expert
                        <ArrowRight />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default AIStackSection;

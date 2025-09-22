import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface WhyTeamsChooseProps {
    title: string;
    titleTwo?: string;
    titleThree?: string;
    descriptionOne?: string;
    path: string;
    description?: string;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Why2btech: FC<WhyTeamsChooseProps> = ({
                                                title,
                                                titleTwo,
                                                description,
                                                titleThree,
                                                descriptionOne,
                                                path,
                                            }) => {
    return (
        <div className="relative overflow-hidden py-16 px-4">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex md:flex-row flex-col justify-between gap-5 w-full items-center">
                    {/* Text Section */}
                    <motion.div
                        className="md:w-1/2 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
                            {title}
                            <span className="text-primary"> {titleTwo}</span>
                        </h2>
                        <p className="mb-14">{description}</p>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                            {titleThree}
                        </h3>
                        <p>{descriptionOne}</p>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="md:w-1/2 w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={path}
                            alt={title}
                            width={500}
                            height={400}
                            loading="lazy"
                            className="md:ml-auto"
                        />
                    </motion.div>
                </div>
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <button
                        onClick={() =>
                            window.open(
                                "https://calendly.com/talhafakhar/discoverycall",
                                "_blank"
                            )
                        }
                        className="relative bg-white border border-black rounded px-8 py-3 transition-transform duration-300 hover:scale-105"
                    >
            <span className="text-lg font-medium">
              Ready to accelerate your project?
            </span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Why2btech;

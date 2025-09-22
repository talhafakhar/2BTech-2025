import React from 'react';
import {easeOut, motion} from 'framer-motion';
import {ArrowRight, Brain, Globe, Rocket, Settings, Star} from 'lucide-react';

const GrowthTeamSection = () => {
    const features = [
        {
            icon: <Star className="w-8 h-8"/>,
            title: "Top 3% Engineers & Product Talent",
            description: "Vetted developers, designers, and PMs who hit the ground running.",
        },
        {
            icon: <Rocket className="w-8 h-8"/>,
            title: "MVPs in Under 30 Days",
            description: "Rapid launches without sacrificing quality or UX.",
        },
        {
            icon: <Brain className="w-8 h-8"/>,
            title: "AI & GenAI Experts",
            description: "From OpenAI to open source — we build AI that works.",
        },
        {
            icon: <Globe className="w-8 h-8"/>,
            title: "Global Delivery Models",
            description: "Flexible teams onshore, offshore, or hybrid as you scale.",
        },
        {
            icon: <Settings className="w-8 h-8"/>,
            title: "Flexible Engagements",
            description: "Choose fixed scope, dedicated resources, or full offshore centers.",
        }
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            }
        }
    };

    const cardVariants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: easeOut
            }
        },
        hover: {
            scale: 1.05,
            y: -8,
            transition: {
                duration: 0.3,
                ease: easeOut
            }
        }
    };

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4 ">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-4xl  text-center font-bold  mb-6 leading-tight"
                    >
                        Built for{" "}
                        <span className="text-primary">
              Growth
            </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg  text-black/70 text-center  mb-8"
                    >
                        Why Fast-Growing Teams Choose 2BTech
                    </motion.p>
                </motion.div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-50px"}}
                    variants={containerVariants}
                    className="mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6">
                        {features.slice(0, 3).map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover="hover"
                                className="group relative"
                            >
                                <div className="relative bg-white border border-gray-300 rounded-2xl p-6 lg:p-8 h-full hover:border-secondary transition-all duration-300">
                                    <div className="inline-flex items-center justify-center w-16 h-16 border rounded-xl mb-6 shadow-lg bg-gradient-to-r from-secondary to-primary text-white">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight">
                                        {feature.title}
                                    </h3>

                                    <p className="text-black/70 leading-relaxed">{feature.description}</p>

                                    <div
                                        className="absolute top-4 right-4 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                            <ArrowRight className="w-5 h-5 text-secondary"/>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 justify-center">
                        {features.slice(3).map((feature, index) => (
                            <motion.div
                                key={index + 3}
                                variants={cardVariants}
                                whileHover="hover"
                                className="group relative"
                            >
                                <div
                                    className="relative bg-white  border border-gray-300 rounded-2xl p-6 lg:p-8 h-full hover:border-secondary transition-all duration-300">
                                    <div className="inline-flex items-center justify-center w-16 h-16 border rounded-xl mb-6 shadow-lg bg-gradient-to-r from-secondary to-primary text-white">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight">
                                        {feature.title}
                                    </h3>

                                    <p className="text-black/70 leading-relaxed">{feature.description}</p>

                                    <div
                                        className="absolute top-4 right-4 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                            <ArrowRight className="w-5 h-5 text-secondary"/>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.3}}
                    className="text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center mt-10"
                    >
                        <motion.button
                            className="group relative bg-white px-[32px] py-3  border border-black  rounded  transition-all duration-300 ease-in-out hover:text-black"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.97}}
                        >
                          Talk to a Product Expert
                        </motion.button>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default GrowthTeamSection;
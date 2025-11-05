'use client';
import * as React from "react";
import {easeInOut, motion} from "framer-motion";
import {ArrowDown, Code, Globe, User, Zap} from "lucide-react";
const AboutCTASection: React.FC = () => {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };
    const itemVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6, ease: easeInOut}
        }
    };
    const floatingVariants = {
        initial: {y: 0, rotate: 0},
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: easeInOut,
            }
        }
    };
    return (
        <div className="relative  overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div
                    className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <motion.div
                className="absolute top-20 right-40 text-secondary hidden md:block"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
            >
                <Code size={40}/>
            </motion.div>
            <motion.div
                className="absolute bottom-32 left-40 text-primary hidden md:block"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                style={{animationDelay: '2s'}}
            >
                <Zap size={32}/>
            </motion.div>
            <motion.div
                className="absolute bottom-24 right-16 text-primary hidden md:block"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                style={{animationDelay: '4s'}}
            >
                <Globe size={28}/>
            </motion.div>
            <motion.div
                className="absolute top-10 left-60 text-secondary hidden md:block"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                style={{animationDelay: '4s'}}
            >
                <User size={28}/>
            </motion.div>
            <div className="relative z-10  px-4 py-20">
                <div className="max-w-7xl mx-auto flex  items-center justify-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-2xl sm:text-4xl  font-bold mb-4 leading-tight max-w-3xl mx-auto text-center">
                            Let’s Build Something
                            <span className="text-primary">
                            {" "}Brilliant Together{" "}
                        </span>
                        </h2>
                        <p className="text-lg  text-black/70 text-center max-w-4xl mb-8">
                            Have a project in mind? Facing a technical challenge? Not sure where to start? Let&#39;s talk.
                            We offer free consultations where we&#39;ll discuss your needs, explore potential solutions, and give you an honest assessment of what&#39;s possible. No sales pressure, no obligations, just a conversation about how we might help

                        </p>
                        <motion.span
                            className="flex justify-center mb-2"
                            animate={{y: [0, 10, 0]}}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        ><ArrowDown/></motion.span>
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center mt-10"
                        >
                            <motion.button
                                className="group  px-[32px] bg-white py-3  border border-black  rounded      ease-in-out "
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.97}}
                            >
                                Schedule a Free Consultation

                            </motion.button>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutCTASection;
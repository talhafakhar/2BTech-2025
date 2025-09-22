import {easeOut, motion} from "framer-motion";
import { Target, Eye } from "lucide-react";
import React from "react";

const MissionVision = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease:easeOut,
            },
        }),
    };
    return (
        <section className="py-10 px-4 bg-gray-50 border-t">
            <div className="mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl  font-bold mb-4">
                       Our<span className="text-primary">{" "}Purpose</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-lg">
                        From firsthand pain to powerful purpose — why TF Business Solutions was born.
                    </p>
                </motion.div>

                <div className="flex justify-center  md:flex-row flex-col w-full gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        className="group relative bg-white  p-10 rounded-3xl border border-black shadow-xl md:w-1/2 w-full"
                    >
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-8 shadow-lg">
                            <Target className="w-8 h-8 text-white" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-4xl font-bold  mb-4 text-primary ">
                                Our Mission
                            </h3>
                            <p className="leading-relaxed font-medium">
                                Get you the senior talent and trained teams you need to{" "}
                                <span className="text-primary font-bold">actually make money</span>.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        className="group relative  bg-white p-10 rounded-3xl border hover:border-secondary shadow-xl md:w-1/2 w-full"
                    >
                        <div className="inline-flex p-4 rounded-2xl border border-black mb-8 shadow-lg">
                            <Eye className="w-8 h-8" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-4xl font-bold  mb-4 ">
                                Our Vision
                            </h3>
                            <p className="leading-relaxed font-medium">
                                Build you{" "}
                                <span className="text-primary font-bold">profitable systems</span>{" "}
                                so you can grow{" "}
                                <span className="text-primary font-bold">without relying on us
                                </span>.
                            </p>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
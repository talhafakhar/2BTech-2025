import { motion } from "framer-motion";
import React from "react";

const processSteps = [
    {
        id: 1,
        title: "We Listen Before We Build",
        description:
            "Most problems aren't what they seem at first. We start every engagement by understanding your business, not just your requirements. What are you actually trying to achieve? Who are your users? What constraints are you working within? This discovery phase saves months of building the wrong thing.",
    },
    {
        id: 2,
        title: "We Plan, Then Execute",
        description:
            "No surprises, no scope creep, no mystery timelines. Once we understand your needs, we create a clear roadmap: what we're building, when you'll see it, what it'll cost. We break projects into phases with concrete milestones so you always know where things stand.",
    },
    {
        id: 3,
        title: "We Build With Your Team",
        description:
            "You're not outsourcing to a black box. We work collaboratively with regular check-ins, shared tools, and open communication. You see progress as it happens. Questions get answered quickly. Changes get incorporated early when they're cheap, not late when they're expensive.",
    },
    {
        id: 4,
        title: "We Test Everything",
        description:
            "Code that works on a developer's laptop doesn't always work in the real world. We test rigorously: automated tests, manual QA, performance testing, security audits. We catch issues before your users do.",
    },
    {
        id: 5,
        title: "We Stick Around",
        description:
            "Launch isn't the end, it's the beginning. We provide ongoing support, monitor performance, fix bugs, and build new features as your needs evolve. Many of our client relationships span years because we're invested in their long-term success, not just project completion.",
    },
];

const HowWeWork = () => {
    return (
        <section className="py-16 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Our<span className="text-primary"> Approach</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Every project is different, but our process stays consistent
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex justify-between items-start gap-5 flex-col rounded-2xl border p-8 hover:shadow-xl transition-all duration-300 bg-white cursor-pointer 
              ${
                                index >= 3
                                    ? "lg:col-span-1 sm:col-span-1 col-span-1 last:lg:col-span-2"
                                    : ""
                            }`}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 rounded-2xl bg-primary"></div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-secondary">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() =>
                            window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                        }
                        className="relative bg-white border border-black rounded px-6 py-2"
                    >
                        <span className="text-lg font-medium">Describe your project</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;

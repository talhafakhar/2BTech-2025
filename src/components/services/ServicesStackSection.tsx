import React from "react";
import { easeOut, motion } from "framer-motion";

interface TechItem {
    name: string;
    icon?: React.ReactNode;
}

interface TechCategory {
    name: string;
    technologies: TechItem[];
}

interface BusinessCategory {
    name: string;
    tools: string[];
}

interface TechStackServicesProps {
    techCategories: TechCategory[];
    categories?: BusinessCategory[];
}

const TechStackServices: React.FC<TechStackServicesProps> = ({
                                                                 techCategories,
                                                                 categories,
                                                             }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: easeOut },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    };

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Technologies <span className="text-primary">We Work With</span>
                    </motion.h2>

                    <motion.p
                        className="mt-4 text-gray-500 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        We’re platform-agnostic. We choose technologies based on what’s best
                        for your project, not just what we happen to know.
                    </motion.p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {techCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            variants={categoryVariants}
                            className="relative"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="h-1 w-16 bg-primary rounded-full origin-left md:block hidden"
                                />
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-2xl text-secondary font-semibold"
                                >
                                    {category.name}
                                </motion.h3>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="flex-1 h-1 bg-primary rounded-full origin-left md:block hidden"
                                />
                            </div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: { staggerChildren: 0.05 },
                                    },
                                }}
                                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6"
                            >
                                {category.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={techIndex}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                                    >
                                        <div className="rounded border bg-white  transition-all duration-300 shadow-md hover:shadow-lg p-2 flex items-center justify-center aspect-square max-w-[80px] mx-auto">
                                            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                                                {tech.icon}
                                            </div>
                                        </div>
                                        <span className="mt-2 text-sm text-center  block">
                                            {tech.name}
                                        </span>
                                    </motion.div>

                                ))}
                            </motion.div>


                        </motion.div>
                    ))}
                </motion.div>
                {categories && categories.length > 0 && (
                        <div className="w-full mt-20">
                            <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
                                Integrations & APIs
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categories?.slice(0, 6).map((category, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={cardVariants}
                                        whileHover={{ scale: 1.02, y: -3 }}
                                        className="p-6 rounded-2xl border bg-white shadow-lg"
                                    >
                                        <h3 className="text-lg font-semibold text-primary mb-4">
                                            {category?.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {category?.tools.map((tool, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-900 hover:text-white text-secondary transition-all duration-300 text-sm font-medium"
                                                >
                                                    {tool}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3">
                                {categories?.slice(6).map((category, idx) => (
                                    <motion.div
                                        key={idx + 6}
                                        variants={cardVariants}
                                        whileHover={{ scale: 1.02, y: -3 }}
                                        className="p-6 rounded-2xl border bg-white shadow-lg"
                                    >
                                        <h3 className="text-lg font-semibold text-primary mb-4">
                                            {category?.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {category?.tools.map((tool, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-900 hover:text-white text-secondary transition-all duration-300 text-sm font-medium"
                                                >
                                                    {tool}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TechStackServices;

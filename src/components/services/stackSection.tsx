'use client';
import * as React from 'react';
import {motion} from 'framer-motion';


interface OurStackProps {
    heading: string;
    highlightHeading:string;
    description: string;
    stackIcons: any;
    techCategories: any[]
}

const OurStack: React.FC<OurStackProps> = ({
                                               heading,
                                               highlightHeading,
                                               description,
                                               stackIcons,
                                               techCategories,
                                           }) => {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div
                    className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/10 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/10 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {heading}<span className="text-blue-600">{" "}{highlightHeading}</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        {description}
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                        hidden: {},
                    }}
                >
                    {Array.isArray(techCategories) &&
                        techCategories.map((category, i) => {
                            const total = techCategories.length;
                            let customClass = "";

                            // 💡 If total = 5 → last 2 cards centered below 3 cards
                            if (total === 5 && i >= 3) {
                                customClass = "lg:col-span-1 md:col-span-1 justify-self-center";
                            }

                            // 💡 If total = 7 → last card centered
                            if (total === 7 && i === total - 1) {
                                customClass = "lg:col-span-3 justify-self-center";
                            }

                            return (
                                <motion.div
                                    key={i}
                                    className={`
                        ${customClass}
                        w-full max-w-sm bg-white border border-gray-100
                        rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300
                        p-8 flex flex-col items-center text-center
                    `}
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                        {category.title}
                                    </h3>

                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 place-items-center">
                                        {category.icons.map((key: string) => {
                                            const IconComp = stackIcons[key.trim()];
                                            return (
                                                <div
                                                    key={key}
                                                    className="flex flex-col items-center gap-2 group"
                                                >
                                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-all duration-300">
                                                        {IconComp ? (
                                                            <IconComp className="w-7 h-7 text-gray-800" />
                                                        ) : (
                                                            <div className="w-7 h-7 bg-gray-200 rounded" />
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-gray-600 group-hover:text-gray-900 transition">
                                        {key.trim()}
                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            );
                        })}
                </motion.div>


            </div>
        </section>
    )
}
export default OurStack;

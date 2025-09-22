"use client";
import React, { useState } from "react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ShopifyExpertise({expertiseItems,title,titleTwo,description}:any) {
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([1]));


    const setExpanded = (id: number, expanded: boolean) => {
        setExpandedItems((prev) => {
            const newSet = new Set(prev);
            if (expanded) {
                newSet.add(id);
            } else {
                newSet.delete(id);
            }
            return newSet;
        });
    };

    return (
        <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                <span className="text-primary">{title}</span>{" "}
                                {titleTwo}
                            </h2>
                            <p className="text-gray-600 text-lg">{description}</p>


                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-3">
                            {expertiseItems.map((item:any, index:any) => {
                                const isActive = expandedItems.has(item.id);

                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer"
                                        onMouseEnter={() => setExpanded(item.id, true)}
                                        onMouseLeave={() => setExpanded(item.id, false)}
                                    >
                                        <motion.div
                                            className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                                                isActive
                                                    ? "bg-white shadow-md"
                                                    : "hover:bg-white hover:shadow-sm"
                                            }`}
                                            layout
                                        >
                                            <motion.div
                                                animate={{
                                                    backgroundColor: isActive ? "#0F57BC" : "#9ca3af",
                                                    scale: isActive ? 1.1 : 1,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                                            >
                                                {item.icon}
                                            </motion.div>

                                            <div className="flex-1 min-w-0">
                                                <h3
                                                    className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${
                                                        isActive
                                                            ? "text-secondary"
                                                            : "text-gray-900 group-hover:text-secondary"
                                                    }`}
                                                >
                                                    {index + 1}. {item.title}
                                                </h3>

                                                {/* Animated description */}
                                                <AnimatePresence>
                                                    {isActive && item.description && (
                                                        <motion.div
                                                            key="desc"
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.4 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="border-t border-gray-200 pt-3 mt-3">
                                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

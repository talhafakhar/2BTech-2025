'use client';
import * as React from "react";
import {AnimatePresence, motion } from "framer-motion";

const svgIcons = {
    question: (
        <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 2">
                <g data-name="menu-arrow">
                    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                    <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                    <circle cx="12" cy="19" r="1"></circle>
                </g>
            </g>
        </svg>
    ),
    answer: (
        <svg height="25px" fill="white" version="1.1" viewBox="0 0 295.238 295.238" xmlns="http://www.w3.org/2000/svg">
            <g>
                <g>
                    <g>
                        <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
              h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
              l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
              c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
              l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
              c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
              M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
              l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
              L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
              c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
              c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
              c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
              c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
              c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
              M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
              v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
              h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
              V25.714z"></path>
                        <path d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
              c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"></path>
                    </g>
                </g>
            </g>
        </svg>
    )
};

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

interface FAQSectionProps {
    Faq: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ Faq }) => {
    const [showAll, setShowAll] = React.useState(false);

    const displayedFaqs = showAll ? Faq : Faq.slice(0, 4);

    return (
        <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 px-4 py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" animate="visible">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight max-w-3xl mx-auto text-center">
                            Frequently
                            <span className="text-primary"> Asked Questions </span>
                        </h2>
                        <p className="text-lg text-black/70 text-center mb-8">
                            Your doubts, cleared in seconds
                        </p>
                    </motion.div>

                    <div className="space-y-8 max-w-4xl mx-auto md:space-y-10">
                        <AnimatePresence>
                            {displayedFaqs.map((faq) => (
                                <motion.div
                                    key={faq.id}
                                    className="text-left"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Question */}
                                    <motion.div
                                        className="flex flex-col sm:flex-row items-start mb-4 md:mb-5"
                                        initial={{ opacity: 0, x: -80 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center justify-center p-2 mb-3 sm:mb-0 sm:mr-4 rounded-full bg-secondary text-white border-4 border-white flex-shrink-0">
                                            {svgIcons.question}
                                        </div>
                                        <div className="bg-gray-200 p-4 md:p-3 px-6 w-full flex items-center rounded-md">
                                            <h3 className="text-base md:text-lg leading-6 font-semibold">
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </motion.div>

                                    {/* Answer */}
                                    <motion.div
                                        className="flex flex-col sm:flex-row items-start"
                                        initial={{ opacity: 0, x: 80 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="bg-primary/20 p-4 md:p-5 px-6 md:px-10 w-full flex items-center rounded-md order-2 sm:order-1">
                                            <p className="text-sm md:text-base leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center p-3 mb-3 sm:mb-0 sm:ml-4 rounded-full bg-primary text-white border-4 border-white flex-shrink-0 order-1 sm:order-2">
                                            {svgIcons.answer}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {Faq.length > 4 && (
                        <div className="text-center mt-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowAll(!showAll)}
                                className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg transition-all duration-300"
                            >
                                {showAll ? "Show Less" : "Show More"}
                            </motion.button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
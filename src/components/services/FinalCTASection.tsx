import { motion } from "framer-motion";
import React from "react";
import {CheckCircle, LucideMail, Phone} from "lucide-react";

interface FinalCTASectionProps {
    heading: string;
    description: string;
    subHeading?: string;
    features?: string[];
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
                                                             heading ,
                                                             description,
                                                             features,
                                                             subHeading

                                                         }) => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12 border border-primary"
                >
                    <div className="text-center mb-4">
                        <h2 className="text-3xl lg:text-[45px] font-bold mb-6 max-w-3xl mx-auto">
                            {heading}
                        </h2>
                        <p className="text-gray-600 max-w-4xl mx-auto">
                            {description}
                        </p>
                    </div>
                    {features &&(
                        <div className="rounded-2xl p-6 mb-8 flex justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {features?.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {subHeading && (
                        <div className="text-center mb-4 text-secondary font-bold text-xl">
                            Get Started Today!
                        </div>
                    )}
                    <div className="text-center mb-8 max-w-2xl mx-auto">
                        <p>
                            {subHeading}
                        </p>
                    </div>


                    <div className="text-center space-y-4">
                        <motion.button
                            onClick={() =>
                                window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                            }
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-6 py-3 bg-secondary text-white rounded-lg font-bold text-lg  transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Schedule Free Consultation
                        </motion.button>
                        {subHeading && (   <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
                            <a href={`mailto:hello@2btech.com`} className="flex items-center gap-2 hover:text-primary transition-colors">
                                <span className="text-xl"><LucideMail/></span>
                                <div className="flex flex-col gap-1">
                                    <span className="font-medium">info@2btechinc.com</span>
                                    <span className="font-medium">business@2btechinc.com</span>
                                </div>
                            </a>
                            <span className="hidden sm:block text-gray-300">|</span>
                            <p className="flex items-center gap-2 hover:text-primary transition-colors">
                                <span className="text-xl"><Phone/></span>
                                <div className="flex flex-col gap-1">
                                    <span className="font-medium">737 299 0421</span>
                                    <span className="font-medium">856 386 7630</span>
                                </div>
                            </p>
                        </div>)}

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTASection;
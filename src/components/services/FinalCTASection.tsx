import { motion } from "framer-motion";
import React from "react";
import {CheckCircle, LucideMail, Phone} from "lucide-react";

interface FinalCTASectionProps {
    heading: string;
    description: string;
    features?: string[];
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
                                                             heading ,
                                                             description,
                                                             features,

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
                    <div className="text-center mb-8">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                            {heading}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
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


                    <div className="text-center space-y-4">
                        <motion.button
                            onClick={() =>
                                window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')
                            }
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Schedule Free Consultation
                        </motion.button>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
                            <a href={`mailto:hello@2btech.com`} className="flex items-center gap-2 hover:text-primary transition-colors">
                                <span className="text-xl"><LucideMail/></span>
                                <span className="font-medium">hello@2btech.com</span>
                            </a>
                            <span className="hidden sm:block text-gray-300">|</span>
                            <p className="flex items-center gap-2 hover:text-primary transition-colors">
                                <span className="text-xl"><Phone/></span>
                                <span className="font-medium">+1 (234) 567-890</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTASection;
'use client';
import * as React from "react";
import {easeInOut, motion} from "framer-motion";
import Navbar from "@/components/Blog/BlogHeader";
import InfiniteLogoSlider from "@/components/Common/LogoSlider";
import dynamic from "next/dynamic";
import {Globe, Rocket, Star} from "lucide-react";
import {ReactNode} from "react";
const Lottie = dynamic(() => import("lottie-react"), {ssr: false});
interface ServiceHeroProps {
    title?: string;
    description?: string;
    buttonText?: string;
    formLabel?: string;
    TrustBar?: ReactNode | (() => ReactNode);
    animationData?: any;
}
const HeroSection: React.FC<ServiceHeroProps> = ({title, description, TrustBar, formLabel, animationData}) => {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.8,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            transition: {duration: 0.6, ease: easeInOut},
        },
    };
    const itemVariants: any = {
        hidden: {opacity: 0, y: 40, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9,
            transition: {duration: 0.5, ease: easeInOut},
        },
    };
    const memoizedAnimation = React.useMemo(() => animationData, [animationData]);
    return (
        <div
            className="min-h-screen  relative overflow-hidden"
            style={{backgroundImage: 'url("/assets/services/hero/hero-service-bg.svg")'}}
        >
            <Navbar/>
            <div className="inset-0 bg-white/60 absolute z-0"></div>
            <div className="min-h-screen px-4 flex items-center relative z-10">
                <div className="max-w-8xl mx-auto">
                    <div className="mt-32 md:mt-0 flex md:flex-row flex-col justify-between items-center gap-6 mb-10 px-2">
                        <motion.div variants={containerVariants} initial="hidden" animate="visible">
                            <motion.h1
                                variants={itemVariants}
                                className="text-2xl sm:text-4xl md:text-6xl font-bold  max-w-4xl"
                            >
                                {title}
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl text-gray-700"
                            >
                                {description}
                            </motion.p>
                            {TrustBar ? (
                                typeof TrustBar === "function" ? (
                                    <TrustBar />
                                ) : (
                                    TrustBar
                                )
                            ) : (
                                <motion.div
                                    variants={itemVariants}
                                    className="mt-12 flex flex-col sm:flex-row items-center gap-6 text-sm sm:text-base text-gray-700 font-medium"
                                >
                                    <div className="flex items-center gap-2">
                                        <Rocket className="w-5 h-5 text-blue-600" />
                                        <span>500+ Solutions Delivered</span>
                                    </div>
                                    <div className="hidden sm:block w-[1px] h-6 bg-black"></div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-yellow-500" />
                                        <span>98% Client Satisfaction</span>
                                    </div>
                                    <div className="hidden sm:block w-[1px] h-6 bg-black"></div>
                                    <div className="flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-green-600" />
                                        <span>15+ Industries</span>
                                    </div>
                                </motion.div>
                            )}


                        </motion.div>
                        <motion.div variants={itemVariants} initial="hidden" animate="visible">
                            {animationData ? (
                                <>
                                    <Lottie
                                        animationData={memoizedAnimation}
                                        loop

                                        style={{height: 500, width: 500, margin: '0 auto'}}
                                    />
                                </>
                            ) : (
                                <div
                                    className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                                    <h2 className=" text-xl sm:text-2xl font-bold text-gray-900">
                                        {formLabel}
                                    </h2>
                                    <form className="mt-6 space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Business Name"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Phone Number"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <select
                                                className="w-full border text-gray-400 border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                                            >
                                                <option value="">Sign NDA?</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>

                                            <select
                                                className="w-full border text-gray-400 border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                                            >
                                                <option value="">Select Service</option>
                                                <option value="custom-software">Custom Software</option>
                                                <option value="ai-generative">AI & Generative AI Solutions</option>
                                                <option value="cloud-engineering">Cloud Engineering</option>
                                                <option value="salesforce">Salesforce</option>
                                            </select>
                                        </div>
                                        <textarea
                                            placeholder="What Do You Want To Achieve?"
                                            rows={3}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-primary/90 transition-colors"
                                        >
                                            GET A FREE ESTIMATE
                                        </button>
                                    </form>
                                </div>
                            )}
                        </motion.div>

                    </div>
                </div>
                <motion.div className="absolute bottom-20 left-0 w-full" variants={itemVariants} initial="hidden"
                            animate="visible">
                    <InfiniteLogoSlider/>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
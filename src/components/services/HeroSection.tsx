'use client';
import * as React from "react";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import Navbar from "@/components/Blog/BlogHeader";
import InfiniteLogoSlider from "@/components/Common/LogoSlider";
import { Globe, Rocket, Star } from "lucide-react";
import { ReactNode } from "react";

interface ServiceHeroProps {
    title?: string;
    description?: string;
    buttonText?: string;
    formLabel?: string;
    platforms?: {icon: React.ReactNode }[];
    TrustBar?: ReactNode | (() => ReactNode);
}

const HeroSection: React.FC<ServiceHeroProps> = ({ title, description, TrustBar, formLabel, buttonText ,platforms}) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        businessName: '',
        phone: '',
        signNDA: '',
        ticketSize: '',
        goals: '',
    });
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMsg, setModalMsg] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!formData.fullName || !formData.email || !formData.phone || !formData.ticketSize) {
            setModalMsg('⚠️ Please fill in all required fields.');
            setIsSuccess(false);
            setShowModal(true);
            setLoading(false);
            return;
        }
        try {
            const res = await fetch('/api/hero/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.ok) {
                setModalMsg(data.message || '✅ Form submitted successfully!');
                setIsSuccess(true);
                setShowModal(true);
            } else {
                setModalMsg(data.message || '❌ Something went wrong.');
                setIsSuccess(false);
                setShowModal(true);
            }
        } catch (err) {
            console.error(err);
            setModalMsg('❌ Failed to submit the form.');
            setIsSuccess(false);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };
    const handleModalClose = () => {
        setShowModal(false);
        if (isSuccess) {
            setFormData({
                fullName: '',
                email: '',
                businessName: '',
                phone: '',
                signNDA: '',
                ticketSize: '',
                goals: '',
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
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
            transition: { duration: 0.6, ease: easeInOut },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
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
            transition: { duration: 0.5, ease: easeInOut },
        },
    };

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundImage: 'url("/assets/services/hero/hero-service-bg.svg")' }}>
            <Navbar />
            <div className="inset-0 bg-white/60 absolute z-0"></div>
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999999]">
                    <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
                        <p className="text-lg text-green-500 mb-4">{modalMsg}</p>
                        <button
                            onClick={handleModalClose}
                            className="w-full bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary/90"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="min-h-screen px-4 flex flex-col justify-between items-center relative z-10 py-8">
                <div className="w-full max-w-8xl mx-auto flex-1 flex items-center px-4">
                    <div className="mt-32 md:mt-20 flex md:flex-row flex-col justify-between items-center gap-6 w-full">
                        <motion.div variants={containerVariants} className="w-full md:w-1/2" initial="hidden" animate="visible">
                            <motion.h1
                                variants={itemVariants}
                                className="text-3xl sm:text-4xl md:text-6xl font-bold"
                            >
                                {title}
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl text-gray-700"
                            >
                                {description}
                            </motion.p>
                            {platforms && (
                                <div className="flex flex-wrap gap-8 mt-6">
                                    {platforms.map((platform, index) => {
                                        const TabIcon = platform.icon;
                                        return (
                                            <motion.button
                                                key={index}
                                            >
                                                {TabIcon}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            )}
                            {TrustBar ? (
                                typeof TrustBar === "function" ? (
                                    <TrustBar />
                                ) : (
                                    TrustBar
                                )
                            ) : (
                                <motion.div
                                    variants={itemVariants}
                                    className="mt-6 flex flex-col sm:flex-row items-center gap-6 text-sm sm:text-base text-gray-700 font-medium"
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

                            {buttonText && (
                                <div className="flex gap-2 sm:gap-6 justify-center md:justify-start items-center mt-8">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() =>
                                            window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                                        }
                                        className="flex items-center border-black px-4 py-2.5 rounded border font-semibold transform transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        {buttonText}
                                        <svg
                                            className="ml-2 w-5 h-5 transform transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </motion.button>
                                </div>
                            )}
                        </motion.div>

                        <motion.div variants={itemVariants} initial="hidden" className="w-full md:w-1/3" animate="visible">
                            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                                <h2 className="text-xl font-bold text-secondary">
                                    {formLabel}
                                </h2>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Full Name*"
                                            required
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email Address*"
                                            required
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleInputChange}
                                            placeholder="Business Name"
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number*"
                                            required
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <select
                                            name="signNDA"
                                            value={formData.signNDA}
                                            onChange={handleInputChange}
                                            className="w-full border text-gray-400 border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                                        >
                                            <option className="text-black" value="">Sign NDA?</option>
                                            <option className="text-black" value="yes">Yes</option>
                                            <option className="text-black" value="no">No</option>
                                        </select>
                                        <select
                                            name="ticketSize"
                                            value={formData.ticketSize}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border text-gray-400 border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                                        >
                                            <option className="text-black" value="">Select Ticket Size*</option>
                                            <option className="text-black" value="custom-software">$2500</option>
                                            <option className="text-black" value="ai-generative">$5000</option>
                                            <option className="text-black" value="cloud-engineering">$10000</option>
                                            <option className="text-black" value="salesforce">$20000+</option>
                                        </select>
                                    </div>
                                    <textarea
                                        name="goals"
                                        value={formData.goals}
                                        onChange={handleInputChange}
                                        placeholder="What Do You Want To Achieve?"
                                        rows={3}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? 'SUBMITTING...' : 'GET A FREE ESTIMATE'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="w-full mt-8 md:mt-12"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <InfiniteLogoSlider />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
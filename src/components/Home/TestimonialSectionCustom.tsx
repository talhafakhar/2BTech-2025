import React from "react";
import { motion } from "framer-motion";
const reviews = [
    {
        id: 1,
        rating: 5,
        content: "Great work, fast delivery, patient and very reliable.definitely would reccomend. Worked with them for more than 6 months. alot of initiative used when objectives set not clear. amazing stuff.",
        reviewer: "Mr Bilal Butt",
        company: "CTO, SaaS Platform",
        verified: true
    },
    {
        id: 2,
        rating: 5,
        content: "One of the most impressive things about Talha and Aqsa was their responsiveness. They were always available to answer questions, provide updates, and address any concerns that arose throughout the development process. They worked closely with me and the 3d party booking application company we hired, to ensure that every requirement was met and that the final product exceeded all expectations",
        reviewer: "Daniel Montelogo",
        company: "CEO, Marketing Agency",
        verified: true
    },
    {
        id: 3,
        rating: 5,
        content: "Great, hard-working team. Dedicated to delivering a project just as we envisioned. Recommend them",
        reviewer: "Erin J. Watson",
        company: "CEO, Bookeeping firm",
        verified: true
    }
];
const CustomTestimonialSection: React.FC = () => {
    const StarRating = ({ rating }: { rating: number }) => {
        return (
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        className={`w-4 h-4 ${
                            star <= rating ? 'text-orange-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-gray-700">{rating}.0</span>
            </div>
        );
    };

    return (
        <div className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight text-black">
                        Client Stories That Speak for <span className="text-primary">Themselves</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-black/70">
                        Real Results From Real Teams
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {reviews.map((review) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: review.id * 0.1 }}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="mb-4">
                                    <StarRating rating={review.rating} />
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                                    &#34;{review.content}&#34;
                                </p>
                                <div className="border-t border-gray-100 pt-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm">
                                                {review.reviewer}
                                            </p>
                                            <p className="text-xs text-gray-500">{review.company}</p>
                                        </div>
                                        {review.verified && (
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-xs text-green-600 font-medium">Verified</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                <div className="text-center mt-8">
                    <motion.button
                        onClick={() => {
                            window.open('https://clutch.co/profile/2btech', '_blank');
                        }}
                        className="group bg-white px-8 py-3 border border-black rounded transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <span className="relative z-10">
                            View More Reviews on Clutch
                        </span>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default CustomTestimonialSection;
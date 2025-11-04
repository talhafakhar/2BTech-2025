"use client";
import {useEffect, useRef, useState} from "react";
import {Star} from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Robert Anderson (Operations Manager)",
        company: "PrecisionTech Manufacturing",
        review:
            "2BTech delivered a computer vision quality control system that exceeded all expectations. We've achieved 99.8% defect detection accuracy and reduced quality control costs by 45%. Their component-based approach ensured rapid deployment",
        rating: 5,
    },
    {
        id: 2,
        name: "Robert Anderson (VP of Digital Strategy)",
        company: "RetailMax",
        review:
            "Working with 2BTech on our AI transformation was game-changing. Their predictive analytics platform increased our inventory efficiency by 38% and boosted sales through personalized recommendations. Outstanding technical execution and business insight",
        rating: 5,
    },
    {
        id: 3,
        name: "Dr. Michael Chen (Director of Operations)",
        company: "MediCare Plus",
        review:
            "The AI-powered diagnostic assistance system 2BTech developed transformed our workflow efficiency. We've reduced analysis time by 50% while maintaining 99.2% accuracy. Their team's expertise and support have been exceptional throughout",
        rating: 5,
    },
    {
        id: 4,
        name: "Sarah Martinez (CTO)",
        company: "FinServe Global",
        review:
            "2BTech's AI digital transformation services revolutionized our customer service operations. Their custom chatbot solution reduced response times by 65% and improved customer satisfaction scores by 42%. The ROI exceeded our expectations within six months.",
        rating: 5,
    },
];

export default function CustomTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const containerRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setCardsToShow(3);
            else if (window.innerWidth >= 768) setCardsToShow(2);
            else setCardsToShow(1);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4  text-center">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider ">
                    Client Success Stories
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-12">
                    What Our Clients Say
                </h2>
                <div className="flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="bg-white py-1 px-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                    >
                        &#8592;
                    </button>
                    <div className="relative overflow-hidden ">
                        <div
                            ref={containerRef}
                            className="flex gap-3 transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${(100 / cardsToShow) * currentIndex}%)`,
                                width: `${(testimonials.length * 100) / cardsToShow}%`,
                            }}
                        >
                            {testimonials.map((t) => (
                                <div
                                    key={t.id}
                                    className="bg-white border border-gray-200 rounded-2xl p-6  flex-none"
                                    style={{width: `${100 / testimonials.length}%`}}
                                >
                                    <div className="flex justify-center mb-4">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic mb-6">&#34;{t.review}&#34;</p>
                                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.company}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={nextSlide}
                        className="bg-white py-1 px-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                    >
                        &#8594;
                    </button>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full ${
                                idx === currentIndex ? "bg-primary" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

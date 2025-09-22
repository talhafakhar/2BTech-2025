import React, {useEffect, useRef, useState} from 'react';
import {ArrowRight} from "lucide-react";

const GetToKnowUs = () => {
    const [isCounterVisible, setIsCounterVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsCounterVisible(true),
            { threshold: 0.5 }
        );
        if (counterRef.current) observer.observe(counterRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isCounterVisible) return;
        const targets = [20, 30, 500, 100];
        const steps = [1, 1, 10, 1];
        const speeds = [100, 100, 10, 10];
        const intervals = targets.map((target, i) =>
            setInterval(() => {
                setCounts(prev => {
                    const updated = [...prev];
                    if (updated[i] >= target) {
                        clearInterval(intervals[i]);
                        updated[i] = target;
                    } else {
                        updated[i] += steps[i];
                    }
                    return updated;
                });
            }, speeds[i])
        );
        return () => intervals.forEach(clearInterval);
    }, [isCounterVisible]);
    return (
        <div className="relative overflow-hidden px-4 py-16 z-10">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="border-b-2  pb-6 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold  mb-4 md:mb-0">
                        Get to <span className="text-primary">Know us</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <p className="text-gray-600 text-lg  max-w-md leading-relaxed">
                    Aldoric is a design and development company with an adaptive approach to challenges & problem solvings
                </p>
                    <a
                        href="https://calendly.com/talhafakhar/discoverycall"
                        target="_blank"
                        className="group relative inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-secondary text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                    >
                        Let's Connect!
                        <span
                            className="ml-3 inline-flex w-8 h-8 rounded-full bg-white text-primary items-center justify-center transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>

                    </a>
                </div>

                <div className="relative"      ref={counterRef}>
                    <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-8 relative  bg-cover bg-center bg-no-repeat" style={{
                        backgroundImage: 'url(/assets/About/numbers-bg.webp)',
                    }}>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                            <div className="bg-white backdrop-blur-sm rounded-xl p-6 text-start  transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{counts[0]}</div>
                                <div className="text-gray-600 font-medium">Expert Professionals</div>
                            </div>
                            <div className="bg-white backdrop-blur-sm rounded-xl p-6 text-start  transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{counts[1]}</div>
                                <div className="text-gray-600 font-medium">Glorious Years</div>
                            </div>

                            <div className="bg-white backdrop-blur-sm rounded-xl p-6 text-start  transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{counts[2]}+</div>
                                <div className="text-gray-600 font-medium">Successful Projects</div>
                            </div>
                            <div className="bg-white backdrop-blur-sm rounded-xl p-6 text-start transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{counts[3]}%</div>
                                <div className="text-gray-600 font-medium">Customer Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetToKnowUs;
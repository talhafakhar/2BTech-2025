import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';
interface Sector {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}
const sectors: Sector[] = [
    {
        id: 'fintech',
        title: 'Fintech',
        description: 'Build secure, compliant financial applications that evolve with market trends, integrate with modern banking APIs, ensure seamless transactions, and offer predictive insights for smarter financial decisions.',
        imageUrl: '/assets/Home/slide-1.webp',
    },
    {
        id: 'healthtech',
        title: 'Healthtech',
        description: 'Deliver patient-centric healthcare platforms leveraging AI and advanced data insights, enabling personalized treatment plans, remote monitoring, telemedicine, and seamless integration with hospital systems.',
        imageUrl: '/assets/Home/slide-2.webp',
    },
    {
        id: 'saas',
        title: 'SaaS',
        description: 'Develop subscription-first software solutions with scalable backend architecture, real-time analytics, cloud infrastructure, and intuitive user interfaces designed to enhance productivity and customer retention.',
        imageUrl: '/assets/Home/slide-3.webp',
    },
    {
        id: 'retail-tech',
        title: 'Retail Tech',
        description: 'Enhance omnichannel digital experiences with intelligent inventory management, AI-driven personalization, seamless checkout flows, and analytics-driven marketing strategies for a smarter retail ecosystem.',
        imageUrl: '/assets/Home/slide-4.webp',
    },
    {
        id: 'ecommerce',
        title: 'Ecommerce',
        description: 'Create high-performance ecommerce platforms optimized for conversions, fast load times, secure payments, scalable architecture, and AI-powered product recommendations that drive revenue growth and customer engagement.',
        imageUrl: '/assets/Home/slide-5.webp',
    },
    {
        id: 'edtech',
        title: 'Edtech',
        description: 'Build engaging, AI-enhanced learning platforms with interactive lessons, personalized learning paths, gamification, and analytics-driven insights to boost knowledge retention and learner engagement.',
        imageUrl: '/assets/Home/slide-6.webp',
    },
    {
        id: 'agritech',
        title: 'Agritech',
        description: 'Digitize farm-to-fork operations using cloud, IoT, and mobile solutions, enabling real-time monitoring, predictive crop analytics, supply chain optimization, and improved agricultural efficiency.',
        imageUrl: '/assets/Home/slide-7.webp',
    },
    {
        id: 'ai-as-a-service',
        title: 'AI as a Service',
        description: 'Productize AI capabilities with robust APIs, scalable infrastructure, automated workflows, and advanced machine learning models to integrate intelligent solutions into enterprise systems seamlessly.',
        imageUrl: '/assets/Home/slide-8.webp',
    },
];

const IndustrySectors: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<string | null>(sectors[0].id);
    const scrollRef = useRef<HTMLDivElement>(null);
    const toggleCard = (sectorId: string) => {
        setExpandedCard(sectorId === expandedCard ? null : sectorId);
    };
    const scrollLeft = () => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
    const scrollRight = () => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
    return (
        <section className="relative overflow-hidden py-10 pl-2 md:px-4">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 relative z-10"
                >
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight text-black">
                        Industry <span className="text-primary">We Serve</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-black/70">
                        Tailored Solutions for High-Growth Sectors
                    </p>
                </motion.div>

                <div className="relative flex items-center z-10">
                    <div ref={scrollRef} className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 scrollbar-hide w-full items-start">
                        {sectors.map((sector) => (
                            <div
                                key={sector.id}
                                className="flex flex-col md:flex-row transition-all duration-500 h-[500px] md:h-80"
                            >
                                <div
                                    onMouseEnter={() => toggleCard(sector.id)}
                                    className={`relative overflow-hidden cursor-pointer ${expandedCard === sector.id     ? "rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none md:rounded-br-none"
                                        : "rounded-2xl"} w-64 sm:w-72 md:w-80 lg:w-96 h-64 md:h-80 flex-shrink-0`}
                                >
                                    <Image
                                        src={sector.imageUrl}
                                        alt={sector.title}
                                        width={400}
                                        height={300}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">{sector.title}</h3>
                                            {expandedCard === sector.id ? (
                                                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 rotate-90 md:rotate-0" />
                                            ) : (
                                                <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 rotate-90 md:rotate-0" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`overflow-hidden bg-white transition-all duration-500 border shadow
    ${expandedCard === sector.id
                                        ? "w-64 sm:w-72 md:w-96 p-4 sm:p-6 rounded-b-2xl md:rounded-r-2xl md:rounded-tl-none md:rounded-bl-none opacity-100"
                                        : "w-0 p-0 opacity-0"}`}
                                >

                                <h4 className="text-base sm:text-lg md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Detailed Solutions</h4>
                                    <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed">{sector.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex justify-end gap-2 items-center z-10 mt-4 md:mr-0 mr-2">
                    <button onClick={scrollLeft} className="z-20 p-2 sm:p-3 bg-white border rounded-full shadow-lg">
                        <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
                    </button>
                    <button onClick={scrollRight} className="z-20 p-2 sm:p-3 bg-white border rounded-full shadow-lg">
                        <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                    </button>
                </div>
                <div className="text-center mt-16">
                    <button className="inline-flex items-center border-black px-8 py-3 rounded border font-semibold   transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Explore Industry Use Cases
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>


            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default IndustrySectors;

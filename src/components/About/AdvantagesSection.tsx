import React from 'react';

const AdvantagesSection = () => {
    const advantages = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
            ),
            title: "Proven Record",
            description: "No two businesses are the same, and neither are our solutions. We tailor our services to meet your unique needs, ensuring that every project is a perfect fit."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            ),
            title: "Tailored Solutions",
            description: "No two businesses are the same, and neither are our solutions. We tailor our services to meet your unique needs, ensuring that every project is a perfect fit."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
            ),
            title: "Innovation at Its Core",
            description: "No two businesses are the same, and neither are our solutions. We tailor our services to meet your unique needs, ensuring that every project is a perfect fit."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            ),
            title: "User-Centric Approach",
            description: "No two businesses are the same, and neither are our solutions. We tailor our services to meet your unique needs, ensuring that every project is a perfect fit."
        }
    ];

    return (
        <div className="py-10 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-1 flex flex-col justify-start">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            2BTech’s<span className="text-primary">{" "}4 Core Values</span>
                        </h2>
                        <p className=" text-base lg:text-lg leading-relaxed">
                            At Aldoric, we're not just a company, we're your dedicated partner in success. Our unwavering commitment sets us apart. Discover what makes us the right choice for your next project.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {advantages.map((advantage, index) => (
                                <div
                                    key={index}
                                    className="bg-white border rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                                        {advantage.icon}
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold  mb-4">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                                        {advantage.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantagesSection;
import React from 'react';

const VitalElementSection = () => {
    const services = [
        {
            title: "SEO Friendliness",
            description: "Enhance your website’s search engine visibility with optimized content, fast loading, responsive design, and best practices for higher rankings."
        },
        {
            title: "Branding",
            description: "Build a strong brand identity online with engaging visuals, consistent messaging, interactive design, and memorable user experiences."
        },
        {
            title: "Navigation",
            description: "Provide intuitive, user-friendly website navigation with clear menus, organized content, fast access, and seamless browsing across devices."
        },
        {
            title: "Conversion",
            description: "Boost website conversions with optimized call-to-actions, persuasive content, smooth user journey, and effective lead generation strategies."
        }
    ];
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl sm:text-5xl  font-bold  ">
                        <span className="text-primary">Vital Elements</span> to Consider in<br />Web Development
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-gray-200
                             hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                            style={{
                                clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)'
                            }}
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div>
                                    <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                                        <span className="text-2xl font-bold">{index + 1}</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold  mb-6 text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VitalElementSection;
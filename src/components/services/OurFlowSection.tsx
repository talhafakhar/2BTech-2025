import React from 'react';

interface FlowStep {
    title: string;
    duration: string;
    description: string;
}

interface OurFlowSectionProps {
    heading: string;
    headingHighlight: string;
    description: string;
    services: FlowStep[];
}

const OurFlowSection: React.FC<OurFlowSectionProps> = ({
                                                           heading,
                                                           headingHighlight,
                                                           description,
                                                           services
                                                       }) => {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        <span className="text-primary">{headingHighlight} </span>
                        {heading}
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
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
                                <h3 className="text-2xl font-semibold text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <h4>
                                    <span className="font-medium mt-2">{service.duration}</span>
                                </h4>

                                <p className="text-gray-600 leading-relaxed flex-grow mt-10">
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

export default OurFlowSection;
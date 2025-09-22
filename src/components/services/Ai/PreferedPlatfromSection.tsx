import React from "react";
interface CardProps {
    title: string;
    description: string;
    svgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, svgSrc }) => {
    return (
        <div className="bg-white rounded-xl border   p-6 flex flex-col justify-between shadow-lg">
            <img src={svgSrc} alt={title} className="w-16 h-16 mb-4" />
            <div>
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
            </div>
        </div>
    );
};
interface DeployAISectionProps {
    titleOne: string;
    titleTwo: string;
    titleThree: string;
    cardOneTitle: string;
    cardOneDescription: string;
    cardOneSrc: string;
    cardTwoTitle: string;
    cardTwoDescription: string;
    cardTwoSrc: string;
}
const DeployAISection: React.FC<DeployAISectionProps> = ({
                                                             titleOne,
                                                             titleTwo,
                                                             titleThree,
                                                             cardOneTitle,
                                                             cardOneDescription ,
                                                             cardOneSrc ,
                                                             cardTwoTitle ,
                                                             cardTwoDescription ,
                                                             cardTwoSrc
                                                         }) => {    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto   mb-10">
                <h2 className="text-2xl md:text-4xl font-semibold text-center">
                    {titleOne} <span className="text-primary">{titleTwo}</span> <br /> {titleThree}
                </h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">
                    <Card
                        title={cardOneTitle}
                        description={cardOneDescription}
                        svgSrc={cardOneSrc}
                    />
                    <Card
                        title={cardTwoTitle}
                        description={cardTwoDescription}
                        svgSrc={cardTwoSrc}
                    />
                </div>
            </div>

        </section>
    );
};

export default DeployAISection;

import React from "react";
import Image from "next/image";

interface AiFlowProps {
    title?: string;
    titleHighlight?: string;
    description?: string;
    imageSrc: string;
    marginLeft?: string;
}

const AiFlow: React.FC<AiFlowProps> = ({
                                           title,
                                           titleHighlight,
                                           description,
                                           imageSrc,
                                           marginLeft,
                                       }) => {
    return (
        <div className="px-8 py-10 md:py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div
                    className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-7xl mx-auto z-10">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold  mb-4 leading-tight">
                        {title} <span className="text-primary">{" "}{titleHighlight}</span>
                    </h2>
                    <p className="text-black/70  leading-relaxed mb-12">
                        {description}
                    </p>
                </div>
                <div className="max-w-4xl mx-auto pt-5">
                    <div className={`relative w-full h-96 ${marginLeft ? "h-48 md:h-[300px]" : "h-96 md:h-[520px]" }`}>
                        <Image
                            src={imageSrc}
                            alt="AI Development Process"
                            fill
                            className={`object-contain ${marginLeft ? marginLeft : "md:mr-10 mx-auto"} `}
                        />
                    </div>

                </div>


            </div>
        </div>
    );
};

export default AiFlow;

"use client";
import React from "react";
import Image from "next/image";
import {ArrowRight} from "lucide-react";
interface GenerativeAITrustProps {
    title: string;
    titleTwo: string;
    titleThree: string;
    titleFour: string;
    titleFive: string;
    imageSrc: string;
}
const GenerativeAITrust: React.FC<GenerativeAITrustProps> = ({titleFive,title,titleFour,titleThree,titleTwo,imageSrc}) => {
    return (
        <section className="py-16 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-2xl md:text-4xl text-center font-bold leading-snug max-w-4xl mx-auto">
                    <span className="text-primary">{title}</span>  {titleTwo}{" "}
                    <span className="text-primary">{titleThree}</span> {titleFour}{" "}
                    <span className="text-primary">{titleFive}</span>
                </h2>
                <div className="mt-6">
                    <button className="px-6 py-3 border border-black rounded   flex items-center justify-center gap-2 mx-auto">
                        Connect with an AI Expert
                        <span className="ml-1"><ArrowRight/></span>
                    </button>
                </div>
                <div className="mt-10 max-w-3xl mx-auto">
                    <div className="relative w-full h-64 md:h-96">
                        <Image
                            src={imageSrc}
                            alt="AI"
                            fill
                            priority
                            className="rounded-xl shadow-lg object-cover"
                            sizes="(max-width: 768px) 100vw, 700px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GenerativeAITrust;

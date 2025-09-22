import React from "react";
import {ArrowRight} from "lucide-react";
const VideoBanner: React.FC =  () => {
    return (
        <div className='py-10 container mx-auto px-2'>
            <section className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between bg-black text-white min-h-[300px] md:min-h-[400px]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/services/banner-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="relative z-10 text-center w-full p-8 md:p-16">
                    <h2 className="text-2xl md:text-4xl font-bold max-w-4xl mx-auto leading-[40px] md:leading-[77px]  mb-6">
                        Your Partner In Providing Full-Fledged Website Development Solutions
                    </h2>
                    <a
                        href="https://calendly.com/talhafakhar/discoverycall"
                        target="_blank"
                        className="group relative inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-secondary text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                    >
                        Let's Connect!
                        <span
                            className="ml-3 inline-flex w-8 h-8 rounded-full bg-white text-primary items-center justify-center transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12"
                        >
    <ArrowRight className="w-4 h-4" />
  </span>

                    </a>


                </div>
            </section>
        </div>
    );
};

export default VideoBanner;

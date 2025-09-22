import React from "react";
import {ArrowRight} from "lucide-react";
interface BannerProps {
    title:string;
    description?:string;
    src:string;
}
const Banner: React.FC<BannerProps> =  ({title,description,src}) => {
    return (
        <div className='py-10 container mx-auto px-4'>
            <section className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between bg-black text-white min-h-[300px] md:min-h-[400px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${src})`,
                    }}
                />
                <div className="relative z-10 w-full p-8 md:p-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl font-light mb-8">
                        {description}
                    </p>
                    <a
                        href="https://calendly.com/talhafakhar/discoverycall"
                        target="_blank"
                        className="group relative inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
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

export default Banner;

'use client';
import * as React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

interface OurProcessProps {
    title: string;
    description: string;
}

const OurProcess: React.FC<OurProcessProps> = ({ title, description }) => {
    return (
        <div className="relative  overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10  px-4 py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-2xl sm:text-4xl  font-bold mb-4 leading-tight max-w-3xl mx-auto text-center">
                            Our Process for{" "}
                            <span className="text-primary">
                            {" "}{title}{" "}
                        </span>
                        </h2>
                        <p className="text-lg  text-black/70 text-center mb-8">
                            {description}
                        </p>
                    </motion.div>
                    <div className="max-w-4xl mx-auto ">
<Image src="/assets/services/Process.webp" alt="Process" width={1200} height={400}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;
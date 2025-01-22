import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {motion} from "framer-motion";
import Image from "next/image";

export function ReliableBusiness() {
    const svgFromBottomLeft = {
        hidden: {opacity: 0, x: -200, y: 200},
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
            },
        }),
    }

    return (
        <div className="container mx-auto pt-10 mt-10 border-t-2 px-4">
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-0">
                <div className="flex flex-col gap-4 w-full m-1">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Reliable{' '}
                            <span
                                className="bg-gradient-to-r font-bold from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">IT Solution Company</span>
                        </h2>
                        <h3 className="text-3xl lg:text-4xl mb-5 font-bold text-white">For Start Up Success</h3>
                        <motion.div
                            variants={svgFromBottomLeft}
                            whileInView="visible"
                            initial='hidden'
                            viewport={{once: false}}
                        >
                            <Image
                                src="/assets/svg/rocket.svg"
                                width={400}
                                height={100}
                                alt="Reliable Business IT Solution Company"
                                className='mx-auto w-[300px] md:w-[400px]'
                            />
                        </motion.div>
                    </div>

                </div>
                <div className='flex flex-col  gap-4 w-full '>
                    <div className="flex flex-col lg:flex-row text-center md:text-start gap-4 w-full">
                        <div className="border p-4 bg-gray-800 text-white rounded-md">
                            <h1 className="flex items-center justify-center md:justify-start text-2xl font-bold mb-2">
                                <span className="text-red-500 mr-2">01</span>
                                Scaling & Innovation
                            </h1>
                            <p className="text-gray-400">
                                If you have been struggling to scale and grow your business with time, then 2BTech
                                is here to help with the best Business IT solutions services. The information
                                technology
                                industry can provide you with the results you are looking for through intelligent
                                automation
                                and consistent scaling. Our consultants and developers can help streamline your
                                business
                                processes and make your brand accessible to customers in any corner of the world.
                            </p>
                        </div>

                        <div className="border p-4 bg-gray-800 text-white rounded-md">
                            <h1 className="flex items-center justify-center md:justify-start text-2xl font-bold mb-2">
                                <span className="text-red-500 mr-2">02</span>
                                Lack of Trustable Experts
                            </h1>
                            <p className="text-gray-400">
                                Every company needs a reliable team of experts who is always ready to consult,
                                support,
                                and add value to it at any given time. There are not many specialized, trustable,
                                and
                                affordable Business IT solutions company experts in the market who will help your
                                business
                                like it is their own. You can rely on us to do exactly that. We also update our
                                clients at
                                every step of the way through regular reports. Our staff is ready to assist your
                                business
                                whenever you’re ready.
                            </p>
                        </div>

                    </div>
                    <div className="border p-4 text-center bg-gray-800 text-white rounded-md">
                        <h1 className="flex items-center justify-center text-xl font-bold mb-2">
                            <span className="text-red-500 mr-2">03</span>
                            Security Concerns
                        </h1>
                        <p className="text-gray-400">
                            Right now, no one can safely assume that their company data is completely secure from
                            cyber attacks. 2BTech is a Business IT solutions company committed to protecting clients
                            from data breaches and giving you your peace of mind through services that profoundly
                            focus on cybersecurity. Additionally, our team knows the ins and outs of ransomware
                            usage. Keep your business running with confidence with 2BTech’s personalized security
                            services.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

import React from 'react';
import {motion} from 'framer-motion';
import Image from "next/image";

interface AreYouReadyProps {
    buttonText?: string;
    srcOne: string;
    srcTwo: string;
}

const AreYouReady: React.FC<AreYouReadyProps> = ({buttonText, srcOne, srcTwo}) => {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    return (
        <div className="px-4 py-14 bg-gray-50">

            <div className="max-w-7xl mx-auto text-center">
                <div className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-14 md:gap-5 relative">
                    <div className="flex justify-center md:flex-row flex-col items-center gap-10 md:gap-5">
                        <div>
                            <Image
                                src={srcOne} alt="Paper work" width={200} height={200}/>
                        </div>
                        <div className="md:rotate-0 rotate-90">
                            <svg width="72" height="30" viewBox="0 0 72 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.0991 1.00672C19.4844 0.161454 18.3008 -0.0254115 17.4555 0.589346L0.82231 12.6865C0.331262 13.0437 0.0413993 13.6147 0.042966 14.2219C0.0445326 14.8291 0.337339 15.3987 0.830222 15.7532L16.1462 26.7721C16.9946 27.3825 18.1772 27.1895 18.7876 26.3411C19.398 25.4926 19.2051 24.31 18.3566 23.6996L7.06367 15.5751C32.2092 13.721 58.4589 23.9119 68.9542 29.6069C69.8729 30.1054 71.0217 29.7648 71.5202 28.8461C72.0187 27.9275 71.6781 26.7786 70.7594 26.2802C60.211 20.5564 34.2195 10.3655 8.63462 11.6848L19.6817 3.65034C20.527 3.03558 20.7139 1.85199 20.0991 1.00672Z"
                                    fill="black"
                                />
                            </svg>


                        </div>
                    </div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold  mb-6 leading-tight">
                            Are you ready to make
                            <br/>
                            <span className="text-primary">{" "}this to that?</span>
                        </h3>
                        <div className=" text-center">
                            <button className="relative bg-white border border-black rounded px-4 py-2">
                                <span className="text-lg font-medium">{buttonText}</span>
                            </button>
                        </div>
                    </motion.div>
                    <div className="flex justify-center md:flex-row flex-col items-center gap-10 md:gap-5">
                        <div className="md:rotate-0 rotate-90">
                            <svg width="77" height="35" viewBox="0 0 77 35" fill="#000"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M54.1313 0.904904C54.7013 0.0288349 55.8736 -0.219275 56.7497 0.350736L75.3048 12.4236C75.8138 12.7547 76.1329 13.3099 76.1629 13.9164C76.1929 14.5228 75.93 15.1068 75.4563 15.4866L59.6096 28.187C58.7941 28.8406 57.603 28.7093 56.9494 27.8938C56.2957 27.0782 56.427 25.8872 57.2426 25.2335L69.2358 15.6215C41.9376 14.9034 14.0483 27.4288 3.0209 34.1767C2.12939 34.7223 0.964428 34.4418 0.41889 33.5503C-0.126649 32.6588 0.153819 31.4938 1.04533 30.9483C12.1175 24.173 39.7175 11.673 67.4188 11.8082L54.6855 3.52326C53.8094 2.95325 53.5613 1.78097 54.1313 0.904904Z"
                                      fill="black"/>
                            </svg>
                        </div>
                        <div>
                            <Image
                                src={srcTwo} alt="Phone" width={200} height={200}/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AreYouReady;
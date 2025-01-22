import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function Missing() {
    const issues = [
        "Poor SEO Friendliness",
        "No Adaptation To User Research",
        "Provides Low Quality / User Experience",
        "Takes Too Much Time To Load",
        "High Bounce Rate And Little To No Conversions",
    ];
    return (
        <div className="container mx-auto pt-10 mt-10 border-t-2 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left Section */}
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            What Could Your Current
                        </h2>
                        <span
                            className="bg-gradient-to-r text-3xl lg:text-4xl font-bold from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Website Be Missing?
        </span>
                        <div className="text-white">
                            <p className="mb-4">
                                If you already have a website in place for your business, there are
                                possibilities that it may be lacking one of the following:
                            </p>
                            <ul className="space-y-3">
                                {issues.map((issue, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FontAwesomeIcon
                                            icon={faAnglesRight}
                                            className="text-red-500 mt-1 w-4 h-4"
                                        />
                                        <span className="text-white font-medium">{issue}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-white">
                                Even if just one of the above factors is missing from your site, it
                                can have a damaging long-term impact on your brand. 2BTech web
                                developers can figure out what your website needs at the moment and
                                how to get you there without wasting time.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <Link
                            className="text-white bg-black flex gap-2 items-center rounded-md border p-3 uppercase font-bold group duration-300 hover:bg-white hover:text-black transition-all"
                            href="#"
                        >
                            Free consultation
                            <Image
                                src="/assets/svg/consultation.svg"
                                width={25}
                                height={25}
                                className="transition-all duration-300 group-hover:filter group-hover:invert"
                                alt="arrow to button"
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/assets/svg/service/group.png"
                        alt="groups"
                        width={500}
                        height={500}
                        className="rounded-full  shadow-[0_0_20px_5px_rgba(255,255,255,1)]  h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500] lg:h-[500px] object-cover"
                    />
                </div>
            </div>
        </div>


    );
}

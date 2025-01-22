"use client";
import {Header} from "@/components/header/navbar";
import {Footer} from "@/components/footer/footer";
import {HaveQuestion} from "@/components/sections/HaveQuestion";
import {Review} from "@/components/sections/Review";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {Brands} from "@/components/aboutSections/HorizontalScroll";
import {WhoWeAre} from "@/components/aboutSections/WhoWeAre";
import {ServicesSolution} from "@/components/aboutSections/ServicesSolution";
import {AwardSection} from "@/components/aboutSections/Award";

export default function About() {
    return (
        <>
            <section className='hero'>
                <div className="overlay"></div>
                <Header/>
                <div
                    className="container mx-auto  relative z-10 pt-[3rem] md:pt-[6rem] pb-[6rem] flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-white  max-w-5xl text-[2rem]  md:text-[2.5rem] lg:text-[3rem] font-[700]">
                            About 2BTech Inc
                        </h1>
                        <h2 className="text-gray-300 font-bold italic  mt-4 max-w-5xl mx-auto text-3xl">
                            <span className='text-[#EB535B]'>Innovating</span> Software, <span
                            className='text-[#9261F6]'>Designing</span> Experiences, <span
                            className='text-[#4B7FF8]'>Empowering</span> Brands
                        </h2>
                        <div className="mt-16 flex gap-5 justify-center">
                            <Link
                                href="#"
                                className="group bg-white bg-opacity-0 flex gap-2 items-center text-white border border-white px-4 py-2 rounded-lg uppercase font-bold transition-all duration-300 hover:bg-white hover:text-black"
                            >
                                Free Consultation
                                <Image
                                    src="/assets/svg/consultation.svg"
                                    width={20}
                                    height={20}
                                    alt="arrow to button"
                                    className="group-hover:filter group-hover:invert transition duration-300"
                                />
                            </Link>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-2  py-10 px-5'>
                            <div
                                className='flex items-center gap-4 border border-gray-700 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-110'>
                                <div>
                                    <Image
                                        src="/assets/svg/about/rocket.svg"
                                        alt="rocket"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='flex flex-col text-start'>
                                    <span className='text-white font-extrabold text-3xl'>8+</span>
                                    <span className='text-gray-400 text-sm md:text-base'>Years of Experience</span>
                                </div>
                            </div>
                            <div
                                className='flex items-center gap-4 border border-gray-700 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-110'>
                                <div>
                                    <Image
                                        src="/assets/svg/about/display.svg"
                                        alt="display"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='flex flex-col text-start'>
                                    <span className='text-white font-extrabold text-3xl'>150+</span>
                                    <span className='text-gray-400 text-sm md:text-base'>Projects Done</span>
                                </div>
                            </div>
                            <div
                                className='flex items-center gap-4 border border-gray-700 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-110'>
                                <div>
                                    <Image
                                        src="/assets/svg/about/promise.svg"
                                        alt="hands shaking"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='flex flex-col text-start'>
                                    <span className='text-white font-extrabold text-3xl'>110+</span>
                                    <span className='text-gray-400 text-sm md:text-base'>Team Members</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Brands/>
            <WhoWeAre/>
            <ServicesSolution/>
            <AwardSection/>
            <Review/>
            <HaveQuestion/>
            <Footer/>
        </>
    )
}
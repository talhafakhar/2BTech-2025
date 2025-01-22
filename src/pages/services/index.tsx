"use client";
import {Header} from "@/components/header/navbar";
import {Footer} from "@/components/footer/footer";
import {HaveQuestion} from "@/components/sections/HaveQuestion";
import Image from "next/image";
import React from "react";
import {Brands} from "@/components/aboutSections/HorizontalScroll";
import {OtherServices} from "@/components/servicesSections/OtherServices";
import {DiscoveryCall} from "@/components/servicesSections/YourParter";
import {ServicesCards} from "@/components/servicesSections/ServicesCards";
import {WhyChoice} from "@/components/servicesSections/WhyChoice";
import {HiringOptions} from "@/components/servicesSections/HiringOptions";
import {Missing} from "@/components/servicesSections/Missing";
import {BlogCards} from "@/components/servicesSections/BlogCards";


export default function Services() {
    return (
        <>
            <section className='hero'>
                <div className="overlay"></div>
                <Header/>
                <div className="container relative z-10 mx-auto">
                    <div className="py-10 px-4 md:px-10 lg:px-20">
                        <div className="flex flex-col lg:flex-row justify-between">
                            {/* Left Section */}
                            <div className="text-center lg:text-left mb-8 lg:mb-0 lg:pr-10">
                                <h1 style={{lineHeight: '1.2'}}
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Custom{" "}
                                    <span
                                        className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Web Development</span>{" "}<br/>
                                    Services to Boost Your{" "}<br/>
                                    <span
                                        className="bg-gradient-to-r  from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Brand Impact!</span>
                                </h1>
                                <div className="flex justify-center lg:justify-start mt-6">
                                    <Image
                                        src="/assets/svg/service/website.svg"
                                        alt="website"
                                        width={300}
                                        height={300}
                                        className="w-full max-w-sm md:max-w-md lg:max-w-lg"
                                    />
                                </div>
                            </div>

                            {/* Right Section */}
                            <div
                                className="w-full lg:w-1/2 max-w-lg bg-white bg-opacity-10  p-6 rounded-lg border shadow-lg">
                                <h2 className="text-xl font-bold text-center text-white mt-4 mb-4">
                                    Free Custom Web Development Services Consultation?
                                </h2>
                                <p className="text-gray-300 text-center">
                                    Speak to a digital advisor today to discuss the type of 2BTech’s custom web
                                    development services will suit you best.
                                </p>
                                <form className="space-y-8 mt-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor='name'
                                                   className="block font-semibold text-white">Name</label>
                                            <input
                                                type="text"
                                                id='name'
                                                placeholder="Enter Name"
                                                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='email' className="block font-semibold text-white">Email
                                                Address</label>
                                            <input
                                                id='email'
                                                type="email"
                                                placeholder="Enter email address"
                                                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor='phone' className="block font-semibold text-white">Phone
                                                Number</label>
                                            <input
                                                type="tel"
                                                id='phone'
                                                placeholder="Enter your phone number"
                                                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='subject'
                                                   className="block font-semibold text-white">Business Name</label>
                                            <input
                                                type="text"
                                                id='subject'
                                                placeholder="Business Name"
                                                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor='massege' className="block text-white font-semibold">What do you
                                            want to achieve?</label>
                                        <textarea
                                            rows={4}
                                            id='massege'
                                            placeholder='What do you want to achieve?'
                                            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="border w-full text-white py-2 px-6 rounded-md font-semibold uppercase transition"
                                        >
                                            Get a free estimate
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Brands/>
            <OtherServices/>
            <DiscoveryCall/>
            <ServicesCards/>
            <WhyChoice/>
            <Missing/>
            <HiringOptions/>
            <BlogCards/>
            <HaveQuestion/>
            <Footer/>
        </>
    )
}
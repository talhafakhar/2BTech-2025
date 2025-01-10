import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

export function HaveQuestion() {
    const fromBottom = {
        hidden: {opacity: 0, y: 80},
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
            },
        }),
    }
    return (
        <div className="container mx-auto mt-10" data-track-name="have_question_section"
             data-track-hover="true">
            <motion.div
                variants={fromBottom}
                whileInView="visible"
                initial='hidden'
                viewport={{once: false}}
            >
                <div className="flex flex-col md:flex-row p-8">
                    <div className="w-full md:w-1/2 border p-6 rounded-md shadow-md">
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="text-white">Have</span>{' '}
                            <span
                                className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Question?</span>{' '}
                            <span className="text-white">Write A Message</span>
                        </h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor='help' className="block font-semibold text-white">How Can We Help
                                        You?</label>
                                    <select id='help'
                                            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500">
                                        <option>Please Select</option>
                                        <option>Consultation</option>
                                        <option>Development</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='budget' className="block font-semibold text-white">What Should Ideal
                                        Budget?</label>
                                    <select id='budget'
                                            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500">
                                        <option>100 - 10000</option>
                                        <option>10000 - 20000</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor='name' className="block font-semibold text-white">Name</label>
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
                                    <label htmlFor='subject' className="block font-semibold text-white">Subject</label>
                                    <input
                                        type="text"
                                        id='subject'
                                        placeholder="Enter subject"
                                        className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='massege' className="block text-white font-semibold">Special
                                    Requirement</label>
                                <textarea
                                    rows={4}
                                    id='massege'
                                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="border text-white py-2 px-6 rounded-md font-semibold transition"
                                >
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className="w-full md:w-1/2 p-6 md:pl-10">
                        <h2 className="text-3xl text-white font-bold mb-6">
                            What <span
                            className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Happens</span> Next?
                        </h2>
                        <ul className="space-y-6 text-white">
                            <li className="flex items-start space-x-4 border-b pb-5">
                                <span className="text-red-600 font-bold text-lg border px-2 py-1 rounded-full">01</span>
                                <p>An expert contacts you after having analyzed your requirements.</p>
                            </li>
                            <li className="flex items-start space-x-4 border-b pb-5 ">
                                <span className="text-red-600 font-bold text-lg border px-2 py-1 rounded-full">02</span>
                                <p>If needed, we sign an NDA to ensure the highest privacy level.</p>
                            </li>
                            <li className="flex items-start space-x-4 border-b pb-5">
                                <span className="text-red-600 font-bold text-lg border px-2 py-1 rounded-full">03</span>
                                <p>We submit a comprehensive project proposal with estimates, timelines, CVs, etc.</p>
                            </li>
                        </ul>
                        <div className="flex justify-center mt-8">
                            <Image src="/assets/svg/steps.svg" width={180} height={50} alt="A man step up"/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

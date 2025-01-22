import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
    return (
        <footer className="bg-[#1F1F1F]" data-track-name="footer"
                data-track-hover="true">
            <div className='container mx-auto p-5'>
                <div className="flex items-center justify-between flex-wrap">
                    <div>
                        <Image
                            src="/assets/svg/footer_logo.svg"
                            alt="2B Tech Logo"
                            width={100}
                            height={50}
                        />
                    </div>
                    <div className="flex items-center gap-3 mt-4 sm:mt-0">
                        <p className="text-white font-bold">Follow Us:</p>
                        <Link
                            href="#"
                            aria-label="Visit our Facebook page"
                            className="bg-white px-2 py-1 rounded-full transition-transform transform hover:scale-[2] duration-300"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-blue-600 hover:text-blue-600"
                            />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Visit our Instagram profile"
                            className="bg-white px-2 py-1 rounded-full transition-transform transform hover:scale-[2] duration-300"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-pink-500 hover:text-pink-500"
                            />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Visit our LinkedIn profile"
                            className="bg-white px-2 py-1 rounded-full transition-transform transform hover:scale-[2] duration-300"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-blue-700 hover:text-blue-700"
                            />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Visit our Twitter profile"
                            className="bg-white px-2 py-1 rounded-full transition-transform transform hover:scale-[2] duration-300"
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="text-blue-400 hover:text-blue-400"
                            />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Visit our Google profile"
                            className="bg-white px-2 py-1 rounded-full transition-transform transform hover:scale-[2] duration-300"
                        >
                            <FontAwesomeIcon
                                icon={faGoogle}
                                className="text-red-500 hover:text-red-500"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-white lg:gap-12 gap-5 flex flex-col lg:flex-row p-3 justify-between">
                <div className="flex flex-col lg:w-1/3">
                    <div className="border p-4 mb-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-2">
                            <span>   <Image
                                src="/assets/svg/uk.svg"
                                alt="uk  Flag"
                                width={30}
                                height={20}
                            /></span>
                            <h3 className="font-bold">USA</h3>
                        </div>
                        <p className="text-sm mt-1">
                            5900 Balcones Drive, STE 4000 Austin TX, USA 78731
                        </p>
                        <p className="text-sm mt-1">&#9993; info@2btechinc.com</p>
                        <p className="text-sm mt-1">
                            &#128222; +1 (858) 386-7630 | +1 (737) 299-0421
                        </p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-2">
                            <span>
                                <Image
                                    src="/assets/svg/pakistan.svg"
                                    alt="Pakistan Flag"
                                    width={30}
                                    height={20}
                                />
                            </span>
                            <h3 className="font-bold">PAKISTAN</h3>
                        </div>
                        <p className="text-sm mt-1">
                            Gulberg 3 Block C2, 62, Lahore, Pakistan
                        </p>
                        <p className="text-sm mt-1">&#9993; info@2btechinc.com</p>
                        <p className="text-sm mt-1">&#128222; +92-344-9889555</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:w-2/3 justify-center text-center gap-8 lg:gap-12">
                    <div className="w-full lg:w-1/3">
                        <h3 className="font-bold mb-2">Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href='/about'>
                                    About Us
                                </Link>
                            </li>
                            <li>How It Works</li>
                            <li>Portfolio</li>
                            <li>Blogs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h3 className="font-bold mb-2">Our Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Software Development</li>
                            <li>Digital Marketing</li>
                            <li>Website Development</li>
                            <li>CMS Development</li>
                            <li>CRM Development</li>
                            <li>ERP Development</li>
                            <li>Social Media Marketing</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h3 className="font-bold mb-2">Top Talent</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>WordPress Developer</li>
                            <li>Shopify Developer</li>
                            <li>Squarespace Developer</li>
                            <li>Mean Stack Developer</li>
                            <li>Blockchain Developer</li>
                            <li>JavaScript Developer</li>
                            <li>PHP Developer</li>
                            <li>Webflow Developer</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#1A1A1A] text-white">
                <div className="container mx-auto p-4 flex flex-col sm:flex-row justify-between text-sm">
                    <p className='text-center sm:text-start'>&copy; 2025. 2BTech All Rights Reserved.</p>
                    <div className="flex  justify-center gap-4 mt-2 sm:mt-0">
                        <Link href="#" className="hover:underline">
                            Support
                        </Link>
                        <span className="bg-white h-[20px] w-[2px]"></span>
                        <Link href="#" className="hover:underline">
                            Privacy
                        </Link>
                        <span className="bg-white h-[20px] w-[2px]"></span>
                        <Link href="#" className="hover:underline">
                            Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

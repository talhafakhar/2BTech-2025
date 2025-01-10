import {Navbar} from "flowbite-react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Header = () => {

    return (
        <div>
            <header className="relative pt-5">
                <Navbar fluid rounded className="container mx-auto bg-white bg-opacity-5 rounded-xl">
                    <Navbar.Brand href="#">
                        <Image
                            loading="eager"
                            width={100}
                            height={100}
                            src="/assets/svg/2btech_logo.svg"
                            className="mr-3 h-8 sm:h-11"
                            alt="2BTech Logo"
                        />
                    </Navbar.Brand>
                    <div className="flex gap-1 md:order-2">
                        <Link
                            data-track-click="true"
                            data-track-name="lets_connect_navbar"
                            data-track-hover="true"
                            href="#"
                            className="bg-gradient-to-r p-2 rounded-md text-white from-blue-500 via-blue-700 to-primary font-bold"
                        >
                            Get Innovate Together
                        </Link>
                        <Navbar.Toggle
                            data-track-click="true"
                            data-track-name="menu_navbar"
                            data-track-hover="true"
                            className="text-white hover:bg-transparent"
                        />
                    </div>
                    <Navbar.Collapse className="transition-all duration-500">
                        <div
                            className="flex flex-col menu md:flex-row items-center justify-center   md:justify-start space-y-2 md:space-y-0 md:space-x-6">
                            <Navbar.Link className="text-white border-none font-bold" href="/">Home</Navbar.Link>
                            <div className="border-none font-bold relative group ms-2 md:ms-0">
                                <div className="text-white hover:text-[#0c728e] flex items-center gap-2 cursor-pointer">
                                    Development
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                </div>
                                <div
                                    className="absolute top-12 left-1/2 transform -translate-x-1/2 p-4 bg-white cursor-pointer shadow-xl rounded-lg w-full md:w-72 max-w-md z-[99] opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                                >
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed tracking-wide">
                                        We build secure, user-friendly software tailored to your business and
                                        users&#39; needs
                                    </p>
                                    <ul className="grid grid-cols-2 gap-4 text-lg font-bold text-gray-800">
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">
                                            <FontAwesomeIcon
                                                icon={faLongArrowRight}
                                                className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>Website</span>
                                        </li>
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">
                                            <FontAwesomeIcon
                                                icon={faLongArrowRight}
                                                className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>CMS</span>
                                        </li>
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">
                                            <FontAwesomeIcon
                                                icon={faLongArrowRight}
                                                className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>CRM</span>
                                        </li>
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">
                                            <FontAwesomeIcon
                                                icon={faLongArrowRight}
                                                className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>ERP</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-none font-bold relative group ms-2 md:ms-0">
                                <div className="text-white hover:text-[#0c728e] flex items-center gap-2 cursor-pointer">
                                    Marketing
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                </div>
                                <div
                                    className="absolute top-12 left-1/2 transform -translate-x-1/2 p-4 bg-white cursor-pointer shadow-xl rounded-lg w-full md:w-72 max-w-md z-[99] opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                                >
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed tracking-wide">
                                        We’ll help your business generate long-term value with our full-stack
                                        digital marketing services.
                                    </p>
                                    <ul className="grid grid-cols-2 gap-4 text-lg font-bold ">
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">

                                            <FontAwesomeIcon icon={faLongArrowRight}
                                                             className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>SMM</span>
                                        </li>
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">

                                            <FontAwesomeIcon icon={faLongArrowRight}
                                                             className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>SEO</span>
                                        </li>
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">

                                            <FontAwesomeIcon icon={faLongArrowRight}
                                                             className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>PPC</span>
                                        </li>
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">

                                            <FontAwesomeIcon icon={faLongArrowRight}
                                                             className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>Email</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-none font-bold relative group ms-2 md:ms-0">
                                <div className="text-white hover:text-[#0c728e] flex items-center gap-2 cursor-pointer">
                                    Design
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                </div>
                                <div
                                    className="absolute top-12 left-1/2 transform -translate-x-1/2 p-4 bg-white cursor-pointer shadow-xl rounded-lg w-full md:w-72 max-w-md z-[99] opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                                >
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed tracking-wide">
                                        We design your product, brand & services to enhance visual communication for
                                        effective promotion.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg font-bold">
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">
                                            <FontAwesomeIcon icon={faLongArrowRight}
                                                             className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>UI/UX</span>
                                        </li>
                                        <li className="flex items-center group-hover:scale-105 hover:text-blue-500 transition-all duration-300">

                                            <FontAwesomeIcon icon={faLongArrowRight}
                                                             className="text-blue-500 text-lg mr-2 group-hover:rotate-45 transition-all duration-300"
                                            />
                                            <span>Visual Design</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Navbar.Link href="/blog" className="text-white border-none font-bold">Blog</Navbar.Link>
                            <Navbar.Link className="text-white border-none font-bold" href="/about">About</Navbar.Link>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>

    );
};

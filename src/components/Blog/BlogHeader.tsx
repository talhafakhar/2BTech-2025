import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {
    ChevronDown,
    Home,
    Mail,
} from 'lucide-react';
import Link from 'next/link';
import {servicesItems} from "@/components/Header/Navbar";
const BlogNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setActiveDropdown(null);
    };

    return (
        <nav style={{zIndex:99999}} className={`fixed top-0 w-full transition-all duration-300 bg-white ${scrolled && "shadow-lg border-b"}  border-gray-100`}>
            <div className="max-w-8xl mx-auto px-4">
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src="/assets/header/2btech_header_logo.svg"
                                alt="Logo"
                                width={80}
                                height={80}
                                loading="lazy"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-1 ">
                        <Link href="/" className={` flex items-center space-x-1 px-2 py-1.5 relative transition-colors duration-200 text-black hover:text-secondary   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current
    after:w-0 after:transition-all after:duration-300 hover:after:w-full`}><Home className="h-4 w-4"/><span className="font-medium">Home</span></Link>
                        <Link href="/about-us" className={` flex items-center space-x-1 px-2 py-1.5 relative transition-colors duration-200 text-black hover:text-secondary   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current
    after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>
                            <span className="font-medium">About</span>
                        </Link>
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("services")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                className={` flex items-center space-x-1 px-2 py-1.5 relative transition-colors duration-200 text-black hover:text-secondary   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current
    after:w-0 after:transition-all after:duration-300 hover:after:w-full`}
                            >
                                <span className="font-medium">Services</span>
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                        activeDropdown === "services" ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {activeDropdown === "services" && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[950px] bg-white shadow-2xl rounded-md py-6 px-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="grid grid-cols-3 gap-4">
                                        {servicesItems.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.path}
                                                className="flex flex-col items-start p-5 rounded  hover:border-primary border  hover:shadow-md transition-all duration-200 group bg-gray-50 hover:bg-blue-50"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-primary transition-colors">
                                                        <item.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                                                    </div>
                                                    <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link href="/contact-us"
                              className={` flex items-center space-x-1 px-2 py-1.5 relative transition-colors duration-200 text-black hover:text-secondary   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current
    after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>
                            <Mail className="h-4 w-4"/>
                            <span className="font-medium">Contact</span>
                        </Link>
                        <Link href="/our-work"
                              className={` flex items-center space-x-1 px-2 py-1.5 relative transition-colors duration-200 text-black hover:text-secondary   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current
    after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>
                            <span className="font-medium">Our Work</span>
                        </Link>
                        <Link href="/blogs"
                              className={` flex items-center space-x-1 px-2 py-1.5 relative transition-colors duration-200 text-black hover:text-secondary   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current
    after:w-0 after:transition-all after:duration-300 hover:after:w-full`}>
                            <span className="font-medium">Blog</span>
                        </Link>
                    </div>
                    <div className="hidden lg:flex">
                        <button
                            className={`px-6 py-2 rounded   font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-800 text-gray-800 hover:bg-gray-100`}> Get a purposal
                        </button>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-lg  transition-colors duration-200"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
    <span
        className={`block absolute h-0.5 w-6  transition-all duration-300 bg-black ${
            isOpen  ? "rotate-45 top-2.5" : "top-1"
        }`}
    />
                                <span
                                    className={`block absolute h-0.5 w-6  transition-all duration-300 bg-black
                                     ${
                                        isOpen ? "opacity-0" : "top-2.5"
                                    }`}
                                />
                                <span
                                    className={`block absolute h-0.5 w-6  transition-all duration-300 bg-black ${
                                        isOpen ? "-rotate-45 top-2.5" : "top-4"
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="py-4 space-y-2 border-t border-black">
                        <Link href="/" className="flex items-center space-x-2 px-2 py-3   hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <Home className="h-5 w-5" />
                            <span className="font-medium">Home</span>
                        </Link>

                        <div>
                            <button
                                onClick={() =>
                                    setActiveDropdown(
                                        activeDropdown === "mobile-services" ? null : "mobile-services"
                                    )
                                }
                                className={`w-full flex items-center justify-between px-2 py-3 hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200
                                   text-black
                                `}
                            >
                                <span className="font-medium">Services</span>
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                        activeDropdown === "mobile-services" ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {activeDropdown === "mobile-services" && (
                                <div className="mt-2 space-y-1  animate-slideDown">
                                    {servicesItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="border-b border-gray-100 last:border-b-0"
                                        >
                                            <button className="w-full flex items-center justify-between p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                                                <div className="flex items-center space-x-3">
                                                    <item.icon className="h-4 w-4" />
                                                    <div className="text-left">
                                                        <span className="font-medium block">{item.title}</span>
                                                    </div>
                                                </div>
                                            </button>

                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                        <Link href="/about-us" className="flex items-center space-x-2 px-2 py-3  hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <span className="font-medium">About</span>
                        </Link>
                        <Link href="/contact-us" className="flex items-center space-x-2 px-2 py-3  hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <Mail className="h-5 w-5"/>
                            <span className="font-medium">Contact</span>
                        </Link>
                        <Link href="/our-work" className="flex items-center space-x-2 px-2 py-3  hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <span className="font-medium">Our Work</span>
                        </Link>
                        <Link href="/blogs" className="flex items-center space-x-2 px-2 py-3  hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <span className="font-medium">Blogs</span>
                        </Link>
                        <div className="pt-4 px-2">
                            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default BlogNavbar

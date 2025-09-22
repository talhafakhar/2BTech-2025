import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {
    ArrowRight,
    Bot,
    ChevronDown,
    CodeXml,
    Flag,
    Home,
    Mail,
    Pencil, ShoppingBagIcon,
} from 'lucide-react';
import Link from 'next/link';
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
    const servicesItems = [
        {
            icon: CodeXml,
            title: "Custom Software Development",
            description: "We design and build secure and user-friendly software tailored to your business needs.",
            options: [
                { title: "Web Development", path: "/services/custom-software-development/web-development" },
                { title: "Hybrid App Development", path: "/services/custom-software-development/hybrid-app-development" },
                { title: "Cloud Engineering", path: "/services/custom-software-development/cloud-engineering" },
                { title: "Salesforce Development & Integration", path: "/services/custom-software-development/salesforce-development-integration" },
                { title: "Offshore Development Centre", path: "/services/custom-software-development/offshore-development-centre" },
                { title: "Dedicated Development Teams", path: "/services/custom-software-development/dedicated-development-teams" },
            ],
        },
        {
            icon: Bot,
            title: "AI & Generative AI Solutions",
            description: "Leverage the power of AI to transform your business with our cutting-edge AI and Generative AI solutions.",
            options: [
                { title: "Generative AI (Gen AI)", path: "/services/ai-and-generative-ai-solutions/generative-ai" },
                { title: "AI MVP Development", path: "/services/ai-and-generative-ai-solutions/ai-mvp-development" },
                { title: "AI as a Service (AIaaS)", path: "/services/ai-and-generative-ai-solutions/ai-as-a-service" },
            ],
        },
        {
            icon: Pencil,
            title: "Product Engineering",
            description: "From concept to launch, we provide end-to-end product engineering services to bring your ideas to life.",
            options: [
                { title: "MVP Development", path: "/services/product-engineering/mvp-development" },
                { title: "POC Development", path: "/services/product-engineering/poc-development" },
                { title: "Full-Scale Product Development", path: "/services/product-engineering/full-scale-product-development" },
                { title: "UI/UX Design", path: "/services/product-engineering/ui-ux-design" },
            ],
        },
        {
            icon: ShoppingBagIcon,
            title: "Ecommerce Development",
            description: "We create seamless and engaging eCommerce experiences that drive sales and customer loyalty.",
            options: [
                { title: "Adobe Commerce", path: "/services/ecommerce-development/adobe-commerce-development" },
                { title: "Shopify Development", path: "/services/ecommerce-development/shopify-development" },
                { title: "Bubble Development", path: "/services/ecommerce-development/bubble-development" },
            ],
        },
        {
            icon: Flag,
            title: "Marketing",
            description: "We’ll help your business generate long-term value with our full-stack digital marketing services.",
            options: [
                { title: "SEO", path: "/services/marketing/seo" },
                { title: "PPC", path: "/services/marketing/ppc" },
            ],
        },
    ];

    return (
        <nav style={{zIndex:99999}} className={`fixed top-0 w-full transition-all duration-300 bg-white ${scrolled && "shadow-lg border-b"}  border-gray-100`}>
            <div className="container mx-auto px-4">
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
                                <div className="absolute top-full left-1/2 -translate-x-1/2  w-[900px] bg-white shadow-xl rounded-xl py-3 px-4 animate-in slide-in-from-top-2 duration-200 z-50">
                                    <div className="grid grid-cols-3 gap-3">
                                        {servicesItems.map((item, index) => (
                                            <div key={index}
                                                 className="flex flex-col space-y-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                                                <div className="flex items-center space-x-3">
                                                    <div className="bg-blue-100 p-3 rounded-lg">
                                                        <item.icon className="h-6 w-6 text-blue-600"/>
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                                </div>
                                                <p className="text-sm text-gray-600">{item.description}</p>
                                                <ul className="space-y-2">
                                                    {item.options.map((opt, i) => (
                                                        <Link href={opt.path} key={i}
                                                            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                                                            <ArrowRight className="h-4 w-4"/>
                                                            <span>{opt.title}</span>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            </div>
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
        className={`block absolute h-0.5 w-6  transition-all duration-300 ${
            isOpen  ? "bg-black" : "bg-white"
        } ${
            isOpen  ? "rotate-45 top-2.5" : "top-1"
        }`}
    />
                                <span
                                    className={`block absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                                        isOpen  ? "bg-black" : "bg-white"
                                    } ${
                                        isOpen ? "opacity-0" : "top-2.5"
                                    }`}
                                />
                                <span
                                    className={`block absolute h-0.5 w-6 bg-gray-700 transition-all duration-300  ${
                                        isOpen  ? "bg-black" : "bg-white"
                                    } ${
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
                                <div className="mt-2 space-y-1 pl-4">
                                    {servicesItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col space-y-1 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                        ><div className="flex items-center space-x-3">
                                            <item.icon className="h-4 w-4" />
                                            <span className="font-medium">{item.title}</span>
                                        </div>

                                            <p className="text-sm text-gray-500">{item.description}</p>
                                            <div className="flex flex-col space-y-4 pl-1">
                                                {item.options.map((opt, i) => (
                                                    <Link href={opt.path} key={i} className="flex items-center space-x-2 text-sm">
                                                        <ArrowRight className="h-4 w-4 text-blue-500" />
                                                        <span>{opt.title}</span>
                                                    </Link>
                                                ))}
                                            </div>
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

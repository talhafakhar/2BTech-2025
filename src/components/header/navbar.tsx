import {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    useEffect(() => {
    }, []);

    return (
        <div className="container mx-auto">
            <header
                data-track-hover="true"
                data-track-name="navbar"
                className="border p-1 mt-4 bg-gradient-to-r from-zinc-300 via-white to-zinc-300 rounded-2xl">
                <nav className="flex items-center justify-between px-4 lg:px-8">
                    <div className="flex">
                        <Link href={"/"}
                              data-track-click="true"
                              data-track-name="logo_navbar"
                              data-track-hover="true"
                        >
                            <Image
                                alt="Logo"
                                width={150}
                                height={50}
                                src="/assets/2btech_logo.svg"
                                className="h-14 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-2">
                        <Link
                            data-track-click="true"
                            data-track-name="home_navbar"
                            data-track-hover="true"
                            href="/"
                            className="text-base font-medium  hover:text-primary font-bold  px-4 py-2"
                        >
                            Home
                        </Link>
                        <Link
                            data-track-click="true"
                            data-track-name="about_navbar"
                            data-track-hover="true"
                            href="/about"
                            className="text-base font-medium  hover:text-primary font-bold px-4 py-2"
                        >
                            About
                        </Link>
                        <Link
                            data-track-click="true"
                            data-track-name="pricing_navbar"
                            data-track-hover="true"
                            href="/pricing"
                            className="text-base font-medium  hover:text-primary font-bold  px-4 py-2"
                        >
                            Pricing
                        </Link>
                        <Link
                            data-track-click="true"
                            data-track-name="features_navbar"
                            data-track-hover="true"
                            href="/features"
                            className="text-base font-medium  hover:text-primary font-bold  px-4 py-2"
                        >
                            Features
                        </Link>
                        <Link
                            data-track-click="true"
                            data-track-name="use_case_navbar"
                            data-track-hover="true"
                            href="/use-case"
                            className="text-base font-medium hover:text-primary font-bold px-4 py-2"
                        >
                            Use Case
                        </Link>
                        <Link
                            data-track-click="true"
                            data-track-name="blogs_navbar"
                            data-track-hover="true"
                            href="/blogs"
                            className="text-base font-medium  hover:text-primary font-bold  px-4 py-2"
                        >
                            Blogs
                        </Link>
                    </div>
                    <div className="lg:flex items-center"
                         data-track-click="true"
                         data-track-name="lets_connect_navbar"
                         data-track-hover="true"
                    >
                        <button
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-primary font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 animate-gradient-bg">
                            Let’s Innovate Together
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

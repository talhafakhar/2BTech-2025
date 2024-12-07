import {useEffect} from "react";
import Link from "next/link";

export const Navbar = () => {
    useEffect(() => {
        const button = document.querySelector('.home_button');
        button?.addEventListener('click', () => {
            window.dataLayer.push({
                event: 'home_button_click',
                button_name: 'home_page_navbar',
                action: 'click',
                page_url: window.location.href,
                hover_duration: 0,
                timestamp: new Date().toISOString()
            });
        });
        let hoverStartTime: number | null;
        if (button) {
            button.addEventListener('mouseover', () => {
                hoverStartTime = Date.now();
            });
            button.addEventListener('mouseout', () => {
                if (hoverStartTime) {
                    const hoverEndTime = Date.now();
                    const hoverDuration = (hoverEndTime - hoverStartTime) / 1000;
                    window.dataLayer.push({
                        event: 'home_button_hover',
                        button_name: 'home_page_navbar',
                        action: 'hover',
                        page_url: window.location.href,
                        hover_duration: hoverDuration,
                        timestamp: new Date().toISOString(),
                    });
                    hoverStartTime = null;
                }
            });
        }
    }, []);

    return (
        <div className="container mx-auto">
            <header className="border p-1 mt-4 bg-gradient-to-r from-zinc-300 via-white to-zinc-300 rounded-2xl">
                <nav className="flex items-center justify-between px-4 lg:px-8">
                    <div className="flex">
                        <a href="#">
                            <img
                                alt="Logo"
                                src="/assets/2btech_logo.svg"
                                className="h-14 w-auto"
                            />
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-2">
                        <Link
                            href="/"
                            className="text-base font-medium  hover:text-primary font-bold  px-4 py-2"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-base font-medium  hover:text-primary font-bold px-4 py-2"
                        >
                            About
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-base font-medium  hover:text-primary font-bold  px-4 py-2"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/features"
                            className="text-base font-medium  hover:text-primary font-bold  px-4 py-2"
                        >
                            Features
                        </Link>
                        <Link
                            href="/use-case"
                            className="text-base font-medium hover:text-primary font-bold px-4 py-2"
                        >
                            Use Case
                        </Link>
                        <Link
                            href="/blogs"
                            className="text-base font-medium  hover:text-primary font-bold  px-4 py-2"
                        >
                            Blogs
                        </Link>
                    </div>
                    <div className="lg:flex items-center">
                        <button
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 animate-gradient-bg">
                            Get A Proposal
                        </button>

                    </div>
                </nav>
            </header>
        </div>
    );
}

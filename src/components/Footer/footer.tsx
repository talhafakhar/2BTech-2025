"use client";
import {Facebook, Instagram, Linkedin ,Twitter,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {servicesItems} from "@/components/Header/Navbar";
const DiscordIcon = () => (
    <svg viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.54,34.22A47.42,47.42,0,0,1,14.68,38C7.3,37.79,4.5,33,4.5,33A44.83,44.83,0,0,1,9.31,13.48,16.47,16.47,0,0,1,18.69,10l1,2.31"
            />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.85,22.67a3.48,3.48,0,0,0-3.37,3.9,3.38,3.38,0,0,0,3.31,3.22,3.53,3.53,0,0,0,3.43-3.9A3.45,3.45,0,0,0,17.85,22.67Z"
            />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.2,14.37a28.19,28.19,0,0,1,8.16-2.18A23.26,23.26,0,0,1,24,12a23.26,23.26,0,0,1,3.64.21,28.19,28.19,0,0,1,8.16,2.18m-7.47-2.09,1-2.31a16.47,16.47,0,0,1,9.38,3.51A44.83,44.83,0,0,1,43.5,33S40.7,37.79,33.32,38a47.42,47.42,0,0,1-2.86-3.81m6.46-2.9a29.63,29.63,0,0,1-8.64,3.49,21.25,21.25,0,0,1-4.28.4h0a21.25,21.25,0,0,1-4.28-.4,29.63,29.63,0,0,1-8.64-3.49"
            />
            <path
                fill="none"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M30.15,22.67a3.48,3.48,0,0,1,3.37,3.9,3.38,3.38,0,0,1-3.31,3.22,3.53,3.53,0,0,1-3.43-3.9A3.45,3.45,0,0,1,30.15,22.67Z"
            />
        </g>
    </svg>
);
const socialLinks = [
    {icon: Facebook, href: "https://www.facebook.com/talhafakharofficial", label: "Facebook"},
    {icon: Twitter, href: "https://twitter.com/thetalhafakhar", label: "Twitter"},
    {icon: Linkedin, href: "https://pk.linkedin.com/in/talhafakhar", label: "LinkedIn"},
    {icon: Instagram, href: "https://www.instagram.com/thetalhafakhar/", label: "Instagram"},
    {icon: DiscordIcon, href: "https://lnkd.in/dwA5nG5t", label: "Discord"},
];
const Footer = () => {
    return (
        <footer className="bg-[#f0f7ff]">
            <div className="border-b container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-16">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/assets/header/2btech_header_logo.svg"
                                alt="2btech Footer logo"
                                width={100}
                                height={100}
                                loading="lazy"
                            />
                        </Link>
                      <p>
                          Your on-demand design to engineering partner. Building intelligent software for VC-backed startups and SMEs.
                      </p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="mb-2 font-semibold text-gray-900">Services</h3>
                        <div className="grid  grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                            {servicesItems.map((opt, i) => (
                                <Link
                                    key={i}
                                    href={opt.path}
                                    className="cursor-pointer text-gray-500 hover:text-primary transition-colors text-sm text-nowrap"
                                >
                                    {opt.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <h3 className="mb-2">Quick Links</h3>
                        <ul className="flex flex-col gap-1">
                            <li className="cursor-pointer text-gray-500 hover:text-primary transition-colors">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="cursor-pointer text-gray-500 hover:text-primary transition-colors">
                                <Link href="/about-us">About us</Link>
                            </li>
                            <li className="cursor-pointer text-gray-500 hover:text-primary transition-colors">
                                <Link href="/contact-us">Contact us</Link>
                            </li>
                            <li className="cursor-pointer text-gray-500 hover:text-primary transition-colors">
                                <Link href="/blogs">Blogs</Link>
                            </li>

                        </ul>
                    </div>

                    <div className="col-span-1">
                        <span className="font-semibold">Follow Us:</span>
                        <div className="flex flex-wrap gap-2 items-center mt-4">
                            {socialLinks.map((social, index) => {
                                const SocialIcon = social.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white"
                                    >
                                        <SocialIcon className="w-5 h-5 text-white cursor-pointer"/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex flex-col container mx-auto md:flex-row justify-between text-sm  items-center gap-2">
                <div>© 2025. 2BTech All Rights Reserved.</div>
                <div className="flex gap-4 underline">
                    <a href="#">Support</a>
                    <a href="#">Privacy</a>
                    <a href="#">Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

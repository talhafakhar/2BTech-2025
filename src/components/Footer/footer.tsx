"use client";
import {
    Facebook,
    Linkedin,
    Mail,
    Phone,
    Twitter,
    Instagram,
} from "lucide-react";
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
        <footer className="bg-[#f0f7ff] rounded-t-[3%]">
            <div className="flex flex-col gap-10 border-b container mx-auto px-4 py-5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 w-full border-b py-3">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
                        <Link href="/" className="flex items-center">
                            <div className="transform transition-all duration-300 group-hover:rotate-3">
                                <Image
                                    src="/assets/header/2btech_header_logo.svg"
                                    alt="2btech Footer logo"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                        <div className="flex flex-wrap gap-2 items-center mt-2 md:mt-0">
                            <span className="font-semibold">Follow Us:</span>
                            {socialLinks.map((social, index) => {
                                const SocialIcon = social.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white"
                                    >
                                        <SocialIcon className="w-5 h-5 text-white cursor-pointer" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <hr className="rotate-90 border border-gray-200 w-[80px] hidden md:block" />
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-3 md:gap-0 mt-4 md:mt-0">
                        <h4 className="font-semibold">Join Newsletter</h4>
                        <div className="flex w-full md:w-auto items-center rounded-full overflow-hidden">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="px-4 py-3 italic outline-none bg-primary/10 w-full text-black"
                            />
                            <button className="bg-primary text-white px-4 py-3 rounded-none">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 lg:gap-20">
                    <div className="flex flex-col gap-6 md:col-span-1">
                        <div className="border border-black rounded-lg p-4 w-full">
                            <div className="flex items-center gap-2 font-bold text-lg">
                                <Image
                                    alt="uk flag"
                                    src="/assets/Home/uk.svg"
                                    width={30}
                                    height={20}
                                    loading="lazy"
                                />
                                USA
                            </div>
                            <p className="mt-1 text-sm">
                                5900 Balcones Drive, STE 4000 Austin TX, USA 78731
                            </p>
                            <div className="flex items-center text-sm mt-2">
                                <Mail className="w-4 h-4 mr-2" />
                                info@2techinc.com
                            </div>
                            <div className="flex items-center text-sm mt-2">
                                <Phone className="w-4 h-4 mr-2 text-red-500" />
                                +1 (858) 386-7630 | +1 (737) 299-0421
                            </div>
                        </div>

                        <div className="border border-black rounded-lg p-4 w-full">
                            <div className="flex items-center gap-2 font-bold text-lg">
                                <Image
                                    alt="pak flag"
                                    src="/assets/Home/pakistan.svg"
                                    width={30}
                                    height={20}
                                    loading="lazy"
                                />
                                PAKISTAN
                            </div>
                            <p className="mt-1 text-sm">Gulberg 3 Block C2, 62, Lahore, Pakistan</p>
                            <div className="flex items-center text-sm mt-2">
                                <Mail className="w-4 h-4 mr-2" />
                                info@2techinc.com
                            </div>
                            <div className="flex items-center text-sm mt-2">
                                <Phone className="w-4 h-4 mr-2 text-red-500" />
                                +92-344-9889555
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <ul className="flex flex-wrap gap-8">
                            {servicesItems.map((opt, i) => (
                                <li key={i}>
                                    <div className="cursor-pointer">
                                        {opt.title}
                                    </div>
                                    {opt.options.map((subLink) => (
                                        <div className="mt-2">
                                            <Link href={subLink.path} className="text-sm text-black/70 hover:underline">
                                                {subLink.title}
                                            </Link>
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>

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

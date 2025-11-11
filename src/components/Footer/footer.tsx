"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesItems } from "@/components/Header/Navbar";
const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/2btechinc" },
    { icon: Twitter, href: "https://www.linkedin.com/company/2btechinc/mycompany/" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/2btechinc/mycompany/" },
    { icon: Instagram, href: "hthttps://www.instagram.com/2btechinc/" },
];
const Footer = () => {
    return (
        <footer className="bg-[#f8fbff] text-gray-700">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <Image
                            src="/assets/header/2btech_header_logo.svg"
                            alt="2BTech logo"
                            width={120}
                            height={60}
                        />
                        <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
                            Your on-demand design to engineering partner. Building intelligent
                            software for VC-backed startups and SMEs.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                            Services
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                            {servicesItems.map((opt, i) => (
                                <Link
                                    key={i}
                                    href={opt.path}
                                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 break-words"
                                >
                                    {opt.title}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mx-auto"
                    >
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                            Follow Us
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:scale-105 transition-transform"
                                    >
                                        <Icon className="w-4 h-4 text-white" />
                                    </Link>
                                );
                            })}
                        </div>
                        <h3 className="font-semibold text-gray-900 mt-4 text-lg">
                            Quick Links
                        </h3>
                        <div className="flex flex-col gap-2 mt-2">
                            <Link
                                href="/"
                                className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about-us"
                                className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact-us"
                                className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/blogs"
                                className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                            >
                                Blog
                            </Link>
                        </div>

                    </motion.div>
                </div>
            </div>
            <div className="border-t border-gray-200">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-2">
                    <span>© 2025 2BTech. All Rights Reserved.</span>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-primary transition-colors">
                            Support
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

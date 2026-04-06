import React, {useCallback, useEffect, useState} from "react";
import Footer from "@/components/Footer/footer";
import { NextSeo, WebPageJsonLd } from "next-seo";
import  {servicesItems} from "@/components/Header/Navbar";
import Link from "next/link";
import Image from "next/image";
import {ChevronDown} from "lucide-react";
const CALENDLY_URL = 'https://calendly.com/2btechinc/discoverywith2btech';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 40);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
                setMobileServicesOpen(false);
            }
        };
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const closeMobileMenu = useCallback(() => {
        setIsOpen(false);
        setMobileServicesOpen(false);
    }, []);

    const openCalendly = useCallback(() => {
        window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }, []);

    const navLinkClass = (isScrolled: boolean) => `
        flex items-center space-x-1 px-2 py-1.5 relative transition-colors duration-200
        ${isScrolled ? "text-black hover:text-secondary" : "text-white"}
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current
        after:w-0 after:transition-all after:duration-300 hover:after:w-full
    `;

    return (
        <nav style={{ zIndex: 99999 }} className={`fixed top-0 w-full transition-all duration-300  ${scrolled || isOpen ? 'bg-white shadow-lg border-b border-gray-100' : 'bg-white/40'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-2">

                    {/* Logo */}
                    <Link href="/" onClick={closeMobileMenu}>
                        <Image
                            src="/assets/header/2btech_header_logo.svg"
                            alt="2BTech Logo"
                            width={80}
                            height={80}
                            loading="lazy"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <Link href="/" className={navLinkClass(scrolled)}>
                            <span className="font-medium">Home</span>
                        </Link>

                        <Link href="/about-us" className={navLinkClass(scrolled)}>
                            <span className="font-medium">About</span>
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("services")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className={navLinkClass(scrolled)}>
                                <span className="font-medium">Services</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                            </button>

                            {activeDropdown === "services" && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[950px] bg-white shadow-2xl rounded-md py-6 px-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="grid grid-cols-3 gap-4">
                                        {servicesItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                href={item.path}
                                                className="flex flex-col items-start p-5 rounded hover:border-primary border hover:shadow-md transition-all duration-200 group bg-gray-50 hover:bg-blue-50"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-primary transition-colors">
                                                        <item.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                                                    </div>
                                                    <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/blogs" className={navLinkClass(scrolled)}>
                            <span className="font-medium">Blog</span>
                        </Link>

                        <Link href="/contact-us" className={navLinkClass(scrolled)}>
                            <span className="font-medium">Contact</span>
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex">
                        <button
                            onClick={openCalendly}
                            className={`px-6 py-2 rounded font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                                scrolled
                                    ? "border border-gray-800 text-gray-800 hover:bg-gray-100"
                                    : "border border-white text-white hover:bg-gray-100 hover:text-gray-800"
                            }`}
                        >
                            Get a proposal
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(prev => !prev)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-lg transition-colors duration-200"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                                <span className={`block absolute h-0.5 w-6 transition-all duration-300 ${scrolled || isOpen ? "bg-black" : "bg-white"} ${isOpen ? "rotate-45 top-2.5" : "top-1"}`} />
                                <span className={`block absolute h-0.5 w-6 transition-all duration-300 ${scrolled || isOpen ? "bg-black" : "bg-white"} ${isOpen ? "opacity-0" : "top-2.5"}`} />
                                <span className={`block absolute h-0.5 w-6 transition-all duration-300 ${scrolled || isOpen ? "bg-black" : "bg-white"} ${isOpen ? "-rotate-45 top-2.5" : "top-4"}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="py-4 space-y-2 border-t border-black max-h-[calc(100vh-70px)] overflow-y-auto">

                        <Link href="/" onClick={closeMobileMenu} className="flex items-center  px-2 py-3 hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <span className="font-medium">Home</span>
                        </Link>

                        {/* Mobile Services Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileServicesOpen(prev => !prev)}
                                className="w-full flex items-center justify-between px-2 py-3 text-black hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                                <span className="font-medium">Services</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="mt-1 space-y-1">
                                    {servicesItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            href={item.path}
                                            onClick={closeMobileMenu}
                                            className="flex items-center space-x-3 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                        >
                                            <item.icon className="h-4 w-4 shrink-0" />
                                            <span className="font-medium text-sm">{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="/about-us" onClick={closeMobileMenu} className="flex items-center  px-2 py-3 hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <span className="font-medium">About</span>
                        </Link>

                        <Link href="/blogs" onClick={closeMobileMenu} className="flex items-center  px-2 py-3 hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <span className="font-medium">Blog</span>
                        </Link>

                        <Link href="/contact-us" onClick={closeMobileMenu} className="flex items-center px-2 py-3 hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <span className="font-medium">Contact</span>
                        </Link>

                        <div className="pt-4 px-2 pb-4">
                            <button
                                onClick={openCalendly}
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:opacity-90"
                            >
                                Get a proposal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default function PrivacyPolicy() {
    return (
        <div className="font-syne bg-white ">
            <NextSeo
                title="Privacy Policy | 2BTech"
                description="Read the Privacy Policy of 2BTech to understand how we collect, use, and protect your personal information."
                canonical="https://2btechinc.com/privacy-policy"
                openGraph={{
                    type: "website",
                    url: "https://2btechinc.com/privacy-policy",
                    title: "Privacy Policy | 2BTech",
                    description:
                        "Read the Privacy Policy of 2BTech to understand how we collect, use, and protect your personal information.",
                    images: [
                        {
                            url: "https://2btechinc.com/images/og-image.jpg",
                            width: 1200,
                            height: 630,
                            alt: "Privacy Policy | 2BTech",
                        },
                    ],
                    site_name: "2BTech",
                }}
                twitter={{
                    handle: "@2btech",
                    site: "@2btech",
                    cardType: "summary_large_image",
                }}
                additionalMetaTags={[
                    { name: "robots", content: "index, follow" },
                    { name: "author", content: "2BTech" },
                ]}
            />

            <WebPageJsonLd
                id="https://2btechinc.com/privacy-policy#webpage"
                url="https://2btechinc.com/privacy-policy"
                name="Privacy Policy | 2BTech"
                description="Read the Privacy Policy of 2BTech to understand how we collect, use, and protect your personal information."
            />
<Navbar/>
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_30%)]" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm text-blue-100 backdrop-blur-sm">
                            Legal
                        </span>
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            Your privacy matters to us. This Privacy Policy explains how 2BTech
                            collects, uses, stores, and protects your information when you use
                            our website and services.
                        </p>
                        <p className="mt-4 text-sm text-slate-400">
                            Effective Date: April 6, 2026
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
                        <div className="space-y-10 text-gray-700">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    1. Introduction
                                </h2>
                                <p className="mt-4 leading-8">
                                    2BTech values your privacy and is committed to protecting your
                                    personal information. This Privacy Policy describes how we
                                    collect, use, disclose, and safeguard your information when
                                    you visit our website, engage with our services, or communicate
                                    with us.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    2. Information We Collect
                                </h2>
                                <p className="mt-4 leading-8">
                                    We may collect personal information that you voluntarily provide
                                    to us, including your name, email address, phone number,
                                    company name, project details, and any other information you
                                    submit through contact forms, consultation bookings, or direct
                                    communication.
                                </p>
                                <p className="mt-4 leading-8">
                                    We may also collect non-personal information automatically,
                                    such as your IP address, browser type, device information,
                                    pages visited, referral source, and usage data through cookies
                                    and analytics tools.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    3. How We Use Your Information
                                </h2>
                                <ul className="mt-4 space-y-3 leading-8 text-gray-700">
                                    <li>To respond to inquiries and provide customer support</li>
                                    <li>To deliver and improve our services</li>
                                    <li>To personalize your experience on our website</li>
                                    <li>To send important updates, proposals, or service-related communication</li>
                                    <li>To analyze website performance and user behavior</li>
                                    <li>To comply with legal obligations and protect our rights</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    4. Cookies and Tracking Technologies
                                </h2>
                                <p className="mt-4 leading-8">
                                    Our website may use cookies, analytics tools, and similar
                                    tracking technologies to enhance your browsing experience,
                                    understand user behavior, and improve our website performance.
                                    You can choose to disable cookies through your browser
                                    settings, though some features of the site may not function
                                    properly.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    5. Sharing of Information
                                </h2>
                                <p className="mt-4 leading-8">
                                    We do not sell, rent, or trade your personal information to
                                    third parties. We may share your information with trusted
                                    service providers, contractors, or partners who assist us in
                                    operating our website, delivering services, or managing
                                    communication, provided they agree to keep your information
                                    confidential.
                                </p>
                                <p className="mt-4 leading-8">
                                    We may also disclose information when required by law, to
                                    enforce our legal rights, or to protect the safety, rights,
                                    and property of our company, users, or others.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    6. Data Retention
                                </h2>
                                <p className="mt-4 leading-8">
                                    We retain your information only for as long as necessary to
                                    fulfill the purposes outlined in this Privacy Policy, comply
                                    with legal obligations, resolve disputes, and enforce our
                                    agreements.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    7. Data Security
                                </h2>
                                <p className="mt-4 leading-8">
                                    We take reasonable administrative, technical, and physical
                                    measures to protect your personal information from unauthorized
                                    access, disclosure, alteration, or destruction. However, no
                                    method of transmission over the internet or electronic storage
                                    is completely secure, so we cannot guarantee absolute security.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    8. Your Rights
                                </h2>
                                <p className="mt-4 leading-8">
                                    Depending on your location and applicable laws, you may have
                                    the right to access, correct, update, or delete your personal
                                    information. You may also have the right to object to certain
                                    processing activities or request restrictions on how your data
                                    is used.
                                </p>
                                <p className="mt-4 leading-8">
                                    To exercise any of these rights, please contact us using the
                                    details provided below.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    9. Third-Party Links
                                </h2>
                                <p className="mt-4 leading-8">
                                    Our website may contain links to third-party websites or
                                    services. We are not responsible for the privacy practices,
                                    content, or policies of those third parties. We encourage you
                                    to review their privacy policies before sharing any personal
                                    information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    10. Children’s Privacy
                                </h2>
                                <p className="mt-4 leading-8">
                                    Our website and services are not intended for children under
                                    the age of 13, and we do not knowingly collect personal
                                    information from children. If we become aware that such data
                                    has been collected, we will take appropriate steps to delete it.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    11. Changes to This Privacy Policy
                                </h2>
                                <p className="mt-4 leading-8">
                                    We may update this Privacy Policy from time to time to reflect
                                    changes in our practices, technologies, legal requirements, or
                                    other operational reasons. Any updates will be posted on this
                                    page with a revised effective date.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    12. Contact Us
                                </h2>
                                <p className="mt-4 leading-8">
                                    If you have any questions about this Privacy Policy or how your
                                    information is handled, you may contact us at:
                                </p>

                                <div className="mt-5 rounded-2xl bg-gray-50 p-6">
                                    <p className="font-semibold text-gray-900">2BTech</p>
                                    <p className="mt-2">Website: https://2btechinc.com</p>
                                    <p>Email: info@2btechinc.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
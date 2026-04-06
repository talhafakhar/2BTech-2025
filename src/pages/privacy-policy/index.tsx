import React, {useCallback, useEffect, useState} from "react";
import Footer from "@/components/Footer/footer";
import { NextSeo, WebPageJsonLd } from "next-seo";
import Navbar, {servicesItems} from "@/components/Header/Navbar";
import Link from "next/link";
import Image from "next/image";
import {ChevronDown} from "lucide-react";
const CALENDLY_URL = 'https://calendly.com/2btechinc/discoverywith2btech';
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
import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/web-development/HeroSection';
import React from "react";
import ExpertServices from "@/components/services/web-development/ExpertSection";
import VitalElementSection from "@/components/services/web-development/VitalElementSection";
import WebServicesGrid from "@/components/services/web-development/ServicesSection";
import ContactFormUI from "@/components/About/ContactFormSection";
import OurStack from "@/components/services/web-development/stackSection";
import WebDevServices from "@/components/services/web-development/ModalSection";
import WebsiteMissingSection from "@/components/services/web-development/WebsiteMissingSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import Banner from "@/components/Home/bannerSection";
import {NextSeo, WebPageJsonLd} from "next-seo";

export default function WebDevelopment() {
    return (
        <div className="font-syne">
            <NextSeo
                title=""
                description=""
                canonical="https://2btech.com/services/custom-software-development/web-development"
                openGraph={{
                    url: "https://2btech.com/services/custom-software-development/web-development",
                    title: "",
                    description: "",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/web-development.webp",
                            width: 1200,
                            height: 630,
                            alt: "",
                        },
                    ],
                    siteName: "2BTech",
                }}
                twitter={{
                    handle: "@2btech",
                    site: "@2btech",
                    cardType: "summary_large_image",
                }}
            />

            <WebPageJsonLd
                id="https://2btech.com/services/custom-software-development/web-development"
                description=""
                lastReviewed={new Date().toISOString()}
            />
            <HeroSection
                title="END-TO-END WEB DEVELOPMENT SERVICES"
                description="What do you want to [code, build, deploy. collaborate on, analyze, lean] today?"
                buttonText="Get an Estimate"
                formLabel="Free Web Development Services Consultation?"
            />
            <ExpertServices
                title="Empower Your Online Presence with Expert Website Development Services"
                description="Website development builds and maintains websites, ensuring functionality, design, and security. At 2BTech, we deliver custom web development services tailored to each client’s brand, serving both national and international businesses with solutions that align with their unique goals."
                src="/assets/services/coding.svg"
                width={400}
            />
            <WebServicesGrid
                heading="TYPES OF WEB DEVELOPMENT SERVICES"
                subHeading="Customer-first web solutions"
                description="Achieve your business objectives with Playno's Web Development services. The pre-formed team is committed to driving business transformation through cutting-edge web technologies."
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id: 1,
                        title: "Web App Dev Services",
                        description: "Build dynamic, high-performing custom web applications tailored to meet your unique business needs.",
                    },
                    {
                        id: 2,
                        title: "E-Commerce Website",
                        description: "Promote brand loyalty and increase sales with elevated storefronts and online shopping experiences.",
                    },
                    {
                        id: 3,
                        title: "Custom Web Development Services",
                        description: "Deliver bespoke web development solutions tailored to your unique business requirements.",
                        highlightImage: "/assets/services/codingScreen.svg",
                    },
                    {
                        id: 4,
                        title: "WordPress Development",
                        description: "Create customized scalable websites that anyone can manage, leveraging the flexibility of WordPress.",
                    },
                    {
                        id: 5,
                        title: "Web Accessibility Services",
                        description: "Enhance your website's usability score and guarantee its compliance with global accessibility standards.",
                    },
                    {
                        id: 6,
                        title: "Web Security Solutions",
                        description: "Protect your website and user data with modern security measures that instill trust and safety.",
                        smallImage:"/assets/services/webSecurity.svg",
                    },
                    {
                        id: 7,
                        title: "Content Management System Solutions",
                        description: "Ensure easy website content updates and management with user-friendly CMS platforms.",
                    },
                    {
                        id: 8,
                        title: "API Integration Services",
                        description: "Enhance your website's functionality by seamlessly integrating API software and platforms.",
                    },
                ]}
            />
            <Banner
                title="Ready to Elevate Your Online Presence?"
                src="/assets/services/webDevBanner.svg"
            />
            <VitalElementSection/>
            <OurStack/>
            <WebDevServices/>
            <WebsiteMissingSection/>
            <TestimonialSection/>
            <ContactFormUI/>
            <Footer/>
        </div>
    );
}
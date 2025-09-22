import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/web-development/HeroSection';
import React from "react";
import ExpertServices from "@/components/services/web-development/ExpertSection";
import VitalElementSection from "@/components/services/web-development/VitalElementSection";
import VideoBanner from "@/components/services/web-development/VedioBannerSection";
import WebServicesGrid from "@/components/services/web-development/ServicesSection";
import ContactFormUI from "@/components/About/ContactFormSection";
import OurStack from "@/components/services/web-development/stackSection";
import WebDevServices from "@/components/services/web-development/ModalSection";
import WebsiteMissingSection from "@/components/services/web-development/WebsiteMissingSection";
import TestimonialSection from "@/components/Home/TestimonialSection";

export default function WebDevelopment() {
    return (
        <div className="font-syne">
            <HeroSection
                title="END-TO-END WEB DEVELOPMENT SERVICES"
                description="What do you want to [code, build, deploy. collaborate on, analyze, lean] today?"
                buttonText="Get an Estimate"
                formLabel="Free Web Development Services Consultation?"
            />
            <ExpertServices
                title="Empower Your Online Presence with Expert Website Development Services"
                description="Website development builds and maintains websites, ensuring functionality, design, and security. At 2BTech, we deliver custom web development services tailored to each client’s brand, serving both national and international businesses with solutions that align with their unique goals."
                src="/assets/services/coding.webp"
                width={500}
            />
            <WebServicesGrid
                heading="TYPES OF WEB DEVELOPMENT SERVICES"
                subHeading="Customer-first web solutions"
                description="Achieve your business objectives with Playno's Web Development services. The pre-formed team is committed to driving business transformation through cutting-edge web technologies."
                arrowImage="/assets/services/down-arrow.webp"
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
                        highlightImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
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
                        smallImage:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=150&fit=crop&crop=center"
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
            <VideoBanner/>
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
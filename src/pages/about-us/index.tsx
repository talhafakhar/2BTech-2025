import Footer from '@/components/Footer/footer';
import React from "react";
import HeroSection from "@/components/Home/heroSection";
import GetToKnowUs from "@/components/About/WhoWeAreSection";
import MissionVision from "@/components/About/VisionSection";
import ContactFormUI from "@/components/About/ContactFormSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import ServicesSection from "@/components/Home/ServicesSection";
import Banner from "@/components/Home/bannerSection";
import AdvantagesSection from "@/components/About/AdvantagesSection";
export default function AboutPage() {
    return (
        <div className="font-syne">
            <HeroSection title="Our Journey To Empower Businesses With Technology!"/>
            <GetToKnowUs/>
            <MissionVision/>
            <ServicesSection/>
            <Banner
                title="Ready to Elevate Your Brand? Let's Talk!"
                description="Schedule a free discovery call today and take the first step towards transforming your brand with us."
                src="/assets/Home/banner-bg.webp"
            />
            <AdvantagesSection/>
            <TestimonialSection/>
            <ContactFormUI/>
            <Footer/>
        </div>
    );
}
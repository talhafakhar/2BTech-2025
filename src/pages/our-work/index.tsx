import Footer from '@/components/Footer/footer';
import React from "react";
import HeroSection from "@/components/OurWork/HeroSection";
import Portfolio from "@/components/OurWork/OurWorkSection";
import TestimonialSection from "@/components/Home/TestimonialSection";

export default function OurWork() {
    return (
        <div className="font-syne">
            <HeroSection/>
            <Portfolio/>
            <TestimonialSection/>
            <Footer/>
        </div>
    );
}

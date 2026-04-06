'use client';
import * as React from "react";
import Navbar from "../Header/Navbar";
import ContactUsPage from "@/components/ContactPage/ContactUs";
interface HeroSectionProps {
    title?: string;
}
const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <div className="relative min-h-screen">
             <Navbar/>
             <div className=" min-h-screen pt-20 flex items-center">
                <ContactUsPage/>
             </div> 
        </div>
    );
};

export default HeroSection;
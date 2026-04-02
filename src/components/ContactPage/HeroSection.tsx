'use client';
import * as React from "react";
import Navbar from "../Header/Navbar";
import ContactUsPage from "@/components/ContactPage/ContactUs";
interface HeroSectionProps {
    title?: string;
}
const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <div className="relative min-h-screen overflow-hidden" style={{ backgroundImage: 'url("/assets/Home/contact-bg.png")' }}>      
             <Navbar/>
             <div className="relative z-10 min-h-screen pt-20 flex items-center">
                <ContactUsPage/>
             </div> 
        </div>
    );
};

export default HeroSection;
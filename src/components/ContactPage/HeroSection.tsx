'use client';
import * as React from "react";
import Navbar from "../Header/Navbar";
import ContactUsPage from "@/components/ContactPage/ContactUs";
interface HeroSectionProps {
    title?: string;
}
const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <div >
            <Navbar/>
            <div className="px-4 flex min-h-[50dvh] items-center justify-center relative overflow-hidden" style={{background: "linear-gradient(110deg, rgba(255, 255, 255, 1) 0%, rgba(15, 87, 188, 1) 24%, rgba(191, 30, 46, 1) 100%)",}}>
                <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-white/100 to-transparent pointer-events-none"></div>
            </div>
            <ContactUsPage/>
        </div>
    );
};

export default HeroSection;
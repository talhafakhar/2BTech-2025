import React from 'react';

import Footer from "@/components/Footer/footer";
import HeroSection from "@/components/ContactPage/HeroSection";
import AboutCardContact from "@/components/ContactPage/ContactCards"
const Contact: React.FC = () => {
    return (
        <div className="font-syne">
            <HeroSection/>
            <AboutCardContact/>
            <Footer />
        </div>
    );
};

export default Contact;

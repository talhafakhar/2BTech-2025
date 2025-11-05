import Footer from '@/components/Footer/footer';
import React from "react";
import HeroSection from "@/components/Home/heroSection";
import GetToKnowUs from "@/components/About/WhoWeAreSection";
import HowWeWork from "@/components/About/HowWeWork";
import ServicesSection from "@/components/Home/ServicesSection";
import Banner from "@/components/Home/bannerSection";
import AdvantagesSection from "@/components/About/AdvantagesSection";
import {NextSeo, WebPageJsonLd} from "next-seo";
import AboutCTASection from "@/components/About/CallToActionSection";
import IndustrySectors from "@/components/Home/IndustrySection";
import AboutSection from "@/components/services/AboutSection";
import TechStack from "@/components/About/TechStackSection";

export default function AboutPage() {
    return (
        <div className="font-syne">
            <NextSeo
                title="About 2BTech | Leading Software Development & AI Solutions Company"
                description="Learn about 2BTech — a global team specializing in custom software development, AI solutions, web & mobile apps, and cloud engineering. Discover our mission, values, and how we help businesses grow through technology."
                canonical="https://2btech.com/about-us"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    { name: 'keywords', content: '2BTech, about 2BTech, software development company, AI solutions, web development, mobile app development, cloud engineering, technology partner' },
                    { property: 'dc:creator', content: '2BTech' },
                    { name: 'author', content: '2BTech' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://2btech.com/about-us',
                    title: 'About 2BTech | Leading Software Development & AI Solutions Company',
                    description: 'Learn about 2BTech — a global software company building AI-powered, scalable, and custom digital solutions for businesses worldwide.',
                    images: [
                        {
                            url: 'https://2btech.com/images/about-us.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'About 2BTech - Software Development & AI Solutions Company',
                        },
                    ],
                    site_name: '2BTech',
                }}
                twitter={{
                    handle: '@2btech',
                    site: '@2btech',
                    cardType: 'summary_large_image',
                }}
            />

            <WebPageJsonLd
                id="https://2btech.com/about-us"
                url="https://2btech.com/about-us"
                name="About 2BTech | Leading Software Development & AI Solutions Company"
                description="2BTech is a software development and AI solutions company helping global brands innovate through technology. Learn about our story, mission, and expertise."
                potentialAction={{
                    target: 'https://2btech.com/about-us',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <HeroSection title="Building Software That Actually Works" buttonText="Let's Talk About Your Project"/>
            <AboutSection
                title="Who We Are?"
                description="We started 2BTech because we saw too many companies wasting money on software that didn't fit their needs. Off-the-shelf solutions that required endless workarounds. Development agencies that disappeared after launch. Products built on assumptions instead of understanding.
We do things differently. We're a software development partner that sticks around. We listen first, build second, and measure what matters. Our team has built everything from AI-powered platforms to custom Shopify stores, always with the same goal: create tools that make your business stronger.
Whether you're a startup racing to validate an idea or an enterprise modernizing legacy systems, we bring technical expertise and business thinking to every project. No jargon. No overpromising. Just software that works"
                src="/assets/About/who.webp"
                width={450}
            />
            <GetToKnowUs/>
            <ServicesSection/>
            <HowWeWork/>
            <IndustrySectors/>
            <Banner
                title="Ready to Elevate Your Brand? Let's Talk!"
                description="Schedule a free discovery call today and take the first step towards transforming your brand with us."
                src="/assets/Home/banner-bg.svg"
            />
            <AdvantagesSection/>
          <TechStack/>
            <AboutCTASection/>
            <Footer/>
        </div>
    );
}
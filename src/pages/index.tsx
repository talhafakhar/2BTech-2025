import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/Home/heroSection';
import WorkFlow from '@/components/Home/OurWorkingProcessSection';
import Banner from "@/components/Home/bannerSection";
import HomeServicesSection from "@/components/Home/HomeServicesSection";
import CTASection from "@/components/Home/CTASection";
import WhyChooseUs from "@/components/Home/WhyChooseUsSection";
import React from "react";
import {FAQPageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd} from "next-seo";
import CustomTestimonialSection from "@/components/Home/TestimonialSectionCustom";
import HomeAboutSection from "@/components/Home/AboutSection";
import TechStackHome from "@/components/Home/StackSectionHome";
import HomeIndustrySection from "@/components/Home/HomeIndustrySection";
export default function Home() {
    return (
        <div className="font-syne">
            <NextSeo
                title="2BTech  | Custom Software and AI Agent Development Company"
                description="Custom software and AI agent development company for VC-backed startups and SMEs. On-demand design to engineering teams. MVP, SaaS, AI solutions. Launch faster"
                canonical="https://2btech.com/"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    {name: 'keywords', content: ''},
                    {property: 'dc:creator', content: '2btech'},
                    {name: 'author', content: '2btech'},
                    {name: 'robots', content: 'index, follow'},
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://2btech.com/',
                    title: '2BTech  | Custom Software and AI Agent Development Company',
                    description: 'Custom software and AI agent development company for VC-backed startups and SMEs. On-demand design to engineering teams. MVP, SaaS, AI solutions. Launch faster',
                    images: [
                        {
                            url: 'https://2btech.com/images/og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: '2BTech  | Custom Software and AI Agent Development Company ',
                        },
                    ],
                    site_name: 'https://2btech.com/',
                }}
                twitter={{
                    handle: '@2btech',
                    site: '@2btech',
                    cardType: 'summary_large_image',
                }}
            />
            <OrganizationJsonLd
                type="Organization"
                id="https://2btech.com/#organization"
                name="2btech"
                url="https://2btech.com/"
                logo="https://2btech.com/images/logo.png"
                sameAs={[
                    'https://www.facebook.com/2btech',
                    'https://twitter.com/2btech',
                    'https://www.linkedin.com/company/2btech/',
                ]}
                contactPoints={[
                    {
                        telephone: '+1-234-567-890',
                        contactType: 'Customer Service',
                        areaServed: 'US',
                        availableLanguage: ['English'],
                    },
                ]}
                address={{
                    streetAddress: '456 Strategy Avenue',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    postalCode: '10001',
                    addressCountry: 'US',
                }}
            />
            <WebPageJsonLd
                id="https://2btech.com/#webpage"
                url="https://2btech.com/"
                name="2BTech  | Custom Software and AI Agent Development Company"
                description="Custom software and AI agent development company for VC-backed startups and SMEs. On-demand design to engineering teams. MVP, SaaS, AI solutions. Launch faster"
                potentialAction={{
                    target: 'https://2btech.com/?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />
            <FAQPageJsonLd
                mainEntity={[
                    {
                        id: 1,
                        question: "What is your return policy?",
                        answer: "We offer a 30-day return policy for all unused items in their original packaging. Return shipping costs may apply for items returned without defect."
                    },
                    {
                        id: 2,
                        question: "How long does shipping take?",
                        answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 day delivery."
                    },
                    {
                        id: 3,
                        question: "Do you offer international shipping?",
                        answer: "Yes, we ship to most countries worldwide. International shipping times vary by location, typically 7-14 business days. Additional customs fees may apply."
                    },
                ]}
            />
            <HeroSection
                title="Transforming Ideas Into Tomorrow’s Solutions!"
            />
            <HomeAboutSection/>
            <WhyChooseUs/>
            <HomeServicesSection/>
            <TechStackHome/>
            <HomeIndustrySection/>
            <WorkFlow/>
            <CTASection/>
            <CustomTestimonialSection/>
            <Banner
                title="Ready to Elevate Your Brand? Let's Talk!"
                description="Schedule a free discovery call today and take the first step towards transforming your brand with us."
                src="/assets/Home/banner-bg.svg"
            />
            <Footer/>
        </div>
    );
}
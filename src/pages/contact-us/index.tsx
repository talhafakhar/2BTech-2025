import React from 'react';
import Footer from "@/components/Footer/footer";
import HeroSection from "@/components/ContactPage/HeroSection";
import AboutCardContact from "@/components/ContactPage/ContactCards";
import { BreadcrumbJsonLd, NextSeo, WebPageJsonLd } from "next-seo";

const Contact: React.FC = () => {
    return (
        <div className="font-syne">
            <NextSeo
               title="Contact 2BTech | Get in Touch for AI & Software Solutions"
                description="Get in touch with 2BTech for custom software development, AI agent solutions, SaaS products, MVP development, and digital transformation services."
                canonical="https://2btechinc.com/contact-us"
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "contact 2BTech, software development company contact, AI development company contact, SaaS development consultation, MVP development contact",
                    },
                    { property: "dc:creator", content: "2BTech" },
                    { name: "author", content: "2BTech" },
                    { name: "robots", content: "index, follow" },
                ]}
                openGraph={{
                    type: "website",
                    url: "https://2btechinc.com/contact-us",
                    title: "Contact Us | 2BTech",
                    description:
                        "Get in touch with 2BTech for custom software development, AI agent solutions, SaaS products, MVP development, and digital transformation services.",
                    images: [
                        {
                            url: "https://2btechinc.com/images/og-image.jpg",
                            width: 1200,
                            height: 630,
                            alt: "Contact Us | 2BTech",
                        },
                    ],
                    site_name: "2BTech",
                }}
                twitter={{
                    handle: "@2btech",
                    site: "@2btech",
                    cardType: "summary_large_image",
                }}
            />

            <WebPageJsonLd
                id="https://2btechinc.com/contact-us#webpage"
                url="https://2btechinc.com/contact-us"
                name="Contact Us | 2BTech"
                description="Get in touch with 2BTech for custom software development, AI agent solutions, SaaS products, MVP development, and digital transformation services."
            />

            <BreadcrumbJsonLd
                itemListElements={[
                    {
                        position: 1,
                        name: "Home",
                        item: "https://2btechinc.com/",
                    },
                    {
                        position: 2,
                        name: "Contact Us",
                        item: "https://2btechinc.com/contact-us",
                    },
                ]}
            />

            <HeroSection />
            <AboutCardContact />
            <Footer />
        </div>
    );
};

export default Contact;
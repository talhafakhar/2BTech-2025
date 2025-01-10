import {FAQPageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd} from 'next-seo';
import {Header} from "@/components/header/navbar";
import Link from "next/link";
import {PortfolioSlider} from "@/components/portfolio/PortfolioSlider";
import {WorkFlow} from "@/components/sections/WorkFlow";
import {motion} from "framer-motion";
import {YourPartner} from "@/components/sections/YourPartner";
import {WhyChoose} from "@/components/sections/WhyChoose";
import {StaffAugmentation} from "@/components/sections/StaffAugmentation";
import {ReliableBusiness} from "@/components/sections/ReliableBusiness";
import {Review} from "@/components/sections/Review";
import {Faq} from "@/components/sections/Faq";
import {HaveQuestion} from "@/components/sections/HaveQuestion";
import {Footer} from "@/components/footer/footer";

export default function Home() {
    const heroFromRight = {
        hidden: {opacity: 0, x: 100},
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
            },
        }),
    };
    const heroFromLeft = {
        hidden: {opacity: 0, x: -100},
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
            },
        }),
    };
    return (
        <div>
            <NextSeo
                title="2BTech Inc. - Software, Marketing, and SEO Solutions test"
                description="2BTech Inc. test offers expert software development, marketing, and SEO solutions to help businesses thrive online."
                canonical="https://2btechinc.com/"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    {name: 'keywords', content: 'software, marketing, SEO'},
                    {property: 'dc:creator', content: '2BTech Inc.'},
                ]}
                openGraph={{
                    url: 'https://2btechinc.com/',
                    title: '2BTech Inc. - Software, Marketing, and SEO Solutions',
                    description: '2BTech Inc. offers expert software development, marketing, and SEO solutions to help businesses thrive online.',
                    images: [
                        {
                            url: 'https://2btechinc.com/images/og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: '2BTech Inc. Landing Page',
                        },
                    ],
                    site_name: '2BTech Inc.',
                }}
                twitter={{
                    handle: '@2BTechInc',
                    site: '@2BTechInc',
                    cardType: 'summary_large_image',
                }}
            />
            <OrganizationJsonLd
                type="Organization"
                id="https://2btechinc.com/"
                name="2BTech Inc."
                url="https://2btechinc.com/"
                logo="https://2btechinc.com/images/logo.png"
                sameAs={[
                    'https://www.facebook.com/2BTechInc',
                    'https://twitter.com/2BTechInc',
                    'https://www.linkedin.com/company/2btechinc/',
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
                    streetAddress: '123 Software Lane',
                    addressLocality: 'San Francisco',
                    addressRegion: 'CA',
                    postalCode: '94105',
                    addressCountry: 'US',
                }}
            />

            <WebPageJsonLd
                url="https://2btechinc.com/"
                name="2BTech Inc."
                description="Expert software development, marketing, and SEO solutions to help businesses thrive online."
                potentialAction={{
                    target: 'https://2btechinc.com/',
                    queryInput: 'required name=search_term_string',
                }}
                id="https://2btechinc.com/"
            />
            <FAQPageJsonLd
                mainEntity={[
                    {
                        questionName: 'What services does 2BTech Inc. provide?',
                        acceptedAnswerText: 'We offer software development, digital marketing, and SEO solutions.',
                    },
                    {
                        questionName: 'Where is 2BTech Inc. located?',
                        acceptedAnswerText: 'Our main office is in San Francisco, CA.',
                    },
                ]}
            />
            <section className='hero'>
                <div className="overlay"></div>
                <Header/>
                <div
                    className="container mx-auto  relative z-10 pt-[3rem] md:pt-[7rem] pb-[15rem] flex items-center justify-center">
                    <div className="text-center">
                        <motion.div
                            variants={heroFromLeft}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="text-white  max-w-3xl text-4xl md:text-5xl lg:text-6xl font-[700]">
                                Empowering Your Business With Smarter Solutions
                            </h1>
                        </motion.div>
                        <motion.div
                            variants={heroFromRight}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-gray-300  mt-4 max-w-3xl mx-auto text-lg">
                                Are you looking for a Business IT solutions company that can help your
                                business achieve digital excellence? At 2BTech, we provide professionally
                                managed IT services and optimized resources dedicated to delivering
                                promising results to your brand.
                            </p>
                        </motion.div>
                        <div className="mt-8 flex gap-5 justify-center">
                            <Link href="/services"
                                  className="bg-white transition duration-200 hover:bg-gray-200 text-black font-medium py-3 px-4 rounded">Estimate
                                Project</Link>
                            <Link href='/services' data-track-hover="true"
                                  className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:bg-white hover:bg-opacity-5">
                                Our Blogs
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-4 h-4 ml-1.5">
                                    <path fill-rule="evenodd"
                                          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <PortfolioSlider/>
            <WorkFlow/>
            <YourPartner/>
            <WhyChoose/>
            <StaffAugmentation/>
            <ReliableBusiness/>
            <Review/>
            <Faq/>
            <HaveQuestion/>
            <Footer/>
        </div>
    )
        ;
}

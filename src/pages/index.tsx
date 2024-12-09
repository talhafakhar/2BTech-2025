import {FAQPageJsonLd, NextSeo, OrganizationJsonLd, WebPageJsonLd} from 'next-seo';

export default function Home() {

    return (
        <>
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
        </>
    );
}

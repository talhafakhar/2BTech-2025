import {Head, Html, Main, NextScript} from "next/document";
export default function Document() {
    return (
        <Html lang="en">
            {/* eslint-disable-next-line @next/next/next-script-for-ga */}
            <script
                dangerouslySetInnerHTML={
                    {
                        __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKJ3LQMZ');
                    `
                    }
                }/>
            <Head>
                <meta name="theme-color" content="#ffffff"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name='robots'
                    content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
                />
                <meta name="title" content="2BTech Inc."/>
                <meta name="description" content="2BTech Inc. is a software development company that specializes in building web applications, mobile applications, and APIs."/>
                <meta name="application-name" content="2BTech Inc."/>
                <meta name="keywords" content="2BTech, 2BTech Inc., 2BTech Inc. software development, 2BTech Inc. web development, 2BTech Inc. mobile development, 2BTech Inc. API development"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://2btechinc.com/"/>
                <meta property="og:title" content="2BTech Inc."/>
                <meta property="og:description" content="2BTech Inc. is a software development company that specializes in building web applications, mobile applications, and APIs."/>
                <meta property="og:image" content="https://2btechinc.com/assets/2btech_logo.svg"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://2btechinc.com/"/>
                <meta property="twitter:title" content="2BTech Inc."/>
                <meta property="twitter:description" content="2BTech Inc. is a software development company that specializes in building web applications, mobile applications, and APIs."/>
                <meta property="twitter:image" content="https://2btechinc.com/assets/2btech_logo.svg"/>

            </Head>
            <body className="antialiased">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

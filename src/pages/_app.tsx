import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Navbar} from "@/components/header/navbar";
import {useEffect} from "react";
import {initializeDynamicEventTracking} from "@/helpers/analyticsTracker";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        initializeDynamicEventTracking();
    }, []);
    return (
        <>
            <Head>
                {/*Favicon*/}
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta name="theme-color" content="#ffffff"/>

                {/*Viewport for Mobile*/}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                {/*IE Compatibility*/}
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

                {/*Robots*/}
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
            </Head>
            <Navbar/>
            <Component {...pageProps} />
        </>
    );
}

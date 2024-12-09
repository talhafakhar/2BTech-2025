import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Navbar} from "@/components/header/navbar";
import {useEffect} from "react";
import {initializeDynamicEventTracking} from "@/helpers/analyticsTracker";

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        initializeDynamicEventTracking();
    }, []);
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
        </>
    );
}

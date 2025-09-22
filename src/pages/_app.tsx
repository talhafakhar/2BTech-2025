import "@/styles/globals.css";
import "@/styles/fonts.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import GlobalLoading from "@/components/Common/GlobalLoading";
import loadingAnimation from "@/assets/animations/programming.json";

export default function App({ Component, pageProps }: AppProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [showSpinner, setShowSpinner] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleSpinnerAnimationEnd = () => {
        setShowSpinner(false);
    };

    if (showSpinner) {
        return (
            <GlobalLoading
                isVisible={isVisible}
                onAnimationEnd={handleSpinnerAnimationEnd}
                animationData={loadingAnimation}
            />
        );
    }

    return (
        <div className="font-syne">
            <div className="transition-opacity duration-1000 opacity-100">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

import React from 'react';
import Image from 'next/image';

const InfiniteLogoSlider: React.FC = () => {
    const logos = [
        {name: "Abacus", url: "/assets/services/hero/abacus.webp"},
        {name: "AQ", url: "/assets/services/hero/aq.webp"},
        {name: "Body Factory", url: "/assets/services/hero/body-factory.webp"},
        {name: "BookBlaze", url: "/assets/services/hero/book-bite.webp"},
        {name: "Dapp", url: "/assets/services/hero/dapp.webp"},
        {name: "Forland", url: "/assets/services/hero/forland.webp"},
        {name: "Italian Moda", url: "/assets/services/hero/italianmoda.webp"},
        {name: "Lotte Kolson", url: "/assets/services/hero/lotte-kolson.webp"},
        {name: "Maxima", url: "/assets/services/hero/maxima.webp"},
        {name: "Meplanet", url: "/assets/services/hero/meplanet.webp"},
        {name: "Mesha", url: "/assets/services/hero/mesha.webp"},
        {name: "PAC", url: "/assets/services/hero/pac.webp"},
        {name: "Pandora", url: "/assets/services/hero/pandora.webp"},
        {name: "Realtime", url: "/assets/services/hero/realtime.webp"},
        {name: "Redfluffy", url: "/assets/services/hero/redfluffy.webp"},
        {name: "Relevic", url: "/assets/services/hero/relevic.webp"},
        {name: "Roundd", url: "/assets/services/hero/roundd.webp"},
        {name: "Tribe 35", url: "/assets/services/hero/tribe-35.webp"},
        {name: "Vasl", url: "/assets/services/hero/vasl.webp"},
        {name: "Ways Tax", url: "/assets/services/hero/ways-tax.webp"},
        {name: "XA Studios", url: "/assets/services/hero/xa-studios.webp"},
    ];

    const duplicatedLogos = Array.from({length: 100}, () => logos).flat();
    return (
        <section className="relative w-full overflow-hidden bg-white/60">
            <div className="max-w-8xl mx-auto  w-full flex flex-col md:flex-row px-4 items-center  gap-6 md:gap-0 ">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold py-4 border-black border-b-2 md:border-b-0 md:border-r-4  w-full">
                    Trusted by Leading Brands
                </h2>
                <div className="relative w-full md:w-4/5">
                    <div className="overflow-hidden">
                        <div
                            className="flex w-max animate-scroll gap-6 sm:gap-8 md:gap-12 items-center"
                        >
                            {duplicatedLogos.map((logo, index) => {
                                return (
                                    <div
                                        key={`logo-${index}`}
                                        className="flex-shrink-0 w-20 sm:w-28 md:w-32 lg:w-36 h-14 sm:h-20 md:h-24 flex items-center justify-center  transition duration-300  transform hover:scale-105"
                                    >
                                        <Image
                                            src={logo.url}
                                            alt={logo.name}
                                            width={170}
                                            height={170}
                                            loading="lazy"
                                            className="object-contain"
                                        />

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default InfiniteLogoSlider;
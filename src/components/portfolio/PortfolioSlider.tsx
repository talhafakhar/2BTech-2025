import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, EffectFade, Navigation} from "swiper/modules";

export function PortfolioSlider() {
    const slides = ["abacus", "bookbite", "taxes"];

    function pushToDataLayer(currentSlide: number, event: string) {
        window.dataLayer.push({
            event: event,
            name: slides[currentSlide],
            page_url: window.location.href,
            timestamp: new Date().toISOString(),
        });
    }

    const images = [
        "/assets/abacus.png",
        "/assets/bookbite.png",
        "/assets/taxes.png",
    ];

    return (
        <div className="relative z-10 container mx-auto mt-[-15rem] md:mt-[-14rem] lg:mt-[-13rem] w-full px-4">
            <div className="relative z-10 container mx-auto w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
                <div
                    className="relative mt-10 shadow-[0px_0px_20px_10px_rgba(255,255,255,0.3)] overflow-hidden rounded-lg border border-gray-700">
                    <Swiper
                        modules={[Navigation, Autoplay, EffectFade]}
                        navigation
                        effect="fade"
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={50}
                        onSlideChange={(data) => {
                            pushToDataLayer(data.realIndex, 'portfolio_slider_change')
                        }}
                        slidesPerView={1}
                        loop={true}
                        className="relative w-full aspect-[16/9]"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full"
                                     data-track-name='portfolio_slider'
                                     data-track-hover="true"
                                     data-track-label={slides[index]}
                                     data-track-click="true"
                                >
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="block w-full h-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

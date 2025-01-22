import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Mousewheel} from "swiper/modules";
import Image from "next/image";

export function ServicesSolution() {
    const slidesData = [
        {
            title: "Software Development",
            description:
                "Transform your business with innovative software solutions for web, CRM, ERP, and CMS development.",
            technologies: [
                {name: "MySQL", image: "/assets/svg/about/mysql.svg"},
                {name: "Node.js", image: "/assets/svg/about/node.svg"},
                {name: "React", image: "/assets/svg/about/react.svg"},
                {name: "jQuery", image: "/assets/svg/about/jquery.svg"},
                {name: "Java", image: "/assets/svg/about/java.svg"},
                {name: "SASS", image: "/assets/svg/about/sass.svg"},
            ],
            exploreMoreLink: "#",
            mainImage: "/assets/svg/about/development.svg",
            icon: "/assets/svg/about/code.svg",
        },
        {
            title: "Design & Branding",
            description:
                "Enhance your brand's presence and create a lasting impression with our expert design and branding services, uniquely tailored to reflect your business identity and meet your specific needs.",
            technologies: [
                {name: "Photoshop", image: "/assets/svg/about/photoshop.svg"},
                {name: "Illustrator", image: "/assets/svg/about/ai.svg"},
                {name: "Canva", image: "/assets/svg/about/canva.svg"},
            ],
            exploreMoreLink: "#",
            mainImage: "/assets/svg/about/graphicDesign.svg",
            icon: "/assets/svg/about/design.svg",
        },
        {
            title: "Digital Marketing",
            description:
                "Elevate your brand with our digital marketing services, including SEO, SEM, and social media marketing.",
            technologies: [
                {name: "Google Ads", image: "/assets/svg/about/googleAd.svg"},
            ],
            exploreMoreLink: "#",
            mainImage: "/assets/svg/about/digitalMarketing.svg",
            icon: "/assets/svg/about/marketing.svg",
        },
        {
            title: "IT Outsourcing",
            description:
                "Reduce costs and improve efficiency with our IT outsourcing services, including software development, web design, and digital marketing.",
            technologies: [
                {name: "Jira", image: "/assets/svg/about/jira.svg"},
                {name: "Slack", image: "/assets/svg/about/slack.svg"},
                {name: "Dropbox", image: "/assets/svg/about/dropbox.svg"},
            ],
            exploreMoreLink: "#",
            mainImage: "/assets/svg/about/ITOutsourcing.svg",
            icon: "/assets/svg/about/outsourcing.svg",
        },
    ];
    return (
        <section className="text-white flex flex-col justify-center mt-10">
            <div className="px-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center md:text-4xl lg:text-5xl mb-5">
                    Our <span
                    className='bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>Services & Solutions</span>
                </h2>
                <p className="text-lg text-gray-300 text-center mb-10">
                    Explore our cutting-edge solutions tailored for businesses.
                </p>
                <div className="h-[81vh] sm:h-[75vh] md:h-[70vh] lg:h-[40vh] mx-auto overflow-hidden">
                    <Swiper
                        direction={"vertical"}
                        mousewheel={{
                            forceToAxis: true,
                            releaseOnEdges: true,
                        }}
                        modules={[Mousewheel]}
                        className="h-full"

                    >
                        {slidesData.map((slide, index) => (
                            <SwiperSlide key={index}
                                         className="rounded-2xl flex items-center justify-center p-4 pt-5 max-w-4xl mx-auto bg-gray-800">
                                <div className="px-6 flex flex-col lg:flex-row items-center gap-10">
                                    <div className="lg:w-1/2">
                                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                            <Image width={40} height={40} src={slide.icon} alt={slide.title}/>
                                            {slide.title}
                                        </h2>
                                        <p className="mt-2 text-gray-400 text-sm md:text-base">{slide.description}</p>

                                        <div className="mt-1">
                                            <h3 className="text-lg font-semibold text-gray-800">Technologies:</h3>
                                            <div className="flex flex-wrap gap-4 mt-4">
                                                {slide.technologies.map((tech, techIndex) => (
                                                    <div
                                                        key={techIndex}
                                                        className="bg-blue-50 text-black gap-1 items-center flex font-medium py-2 px-4 rounded-md shadow-sm"
                                                    >
                                                        <Image width={30} height={60} src={tech.image} alt={tech.name}/>
                                                        {tech.name && <span>{tech.name}</span>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <a
                                            href={slide.exploreMoreLink}
                                            className="mt-2 flex text-blue-600 hover:underline text-sm font-medium items-center gap-2"
                                        >
                                            Explore More <span>&rarr;</span>
                                        </a>
                                    </div>
                                    <div className="lg:w-1/2 flex justify-center">
                                        <Image width={300} height={300} src={slide.mainImage} alt={slide.title}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

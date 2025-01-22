import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faLaptopCode, faShoppingCart,} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

export function ServicesCards() {
    const contentFromLeft = {
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
    const contentFromRight = {
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
    const services = [
        {
            title: "E-Commerce Web Development",
            description: "Looking to start an online store? We specialize in SEO-optimized ecommerce websites on Shopify, Wix, Squarespace, or standalone platforms.",
            icon: faShoppingCart,
        },
        {
            title: "Custom Web Development",
            description: "2BTech offers custom web development tailored to your brand. We design personalized sites to match your vision and business needs.",
            icon: faCogs,
        },
        {
            title: "Full Stack Web Development",
            description: "Full stack development covers front-end and back-end. We provide complete solutions for businesses, ensuring seamless functionality and design.",
            icon: faLaptopCode,
        },
    ];
    const services_two = [
        {
            title: "CMS Web Development",
            description: "Get a custom website on WordPress, Shopify, HubSpot, Joomla, or WooCommerce. We build unique, SEO-friendly CMS sites.",
            icon: faCogs,
        },
        {
            title: "Web Application Development",
            description: "2BTech offers expert web app development for shopping carts, forms, and more. Let us build your interactive, server-based apps.",
            icon: faLaptopCode,
        },
    ];
    return (
        <div className='m-2'>
            <div className="container mx-auto p-4 mt-5">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Secure your{" "}
                        <span
                            className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                         Project Scope
                        </span>
                    </h2>
                </div>
                <motion.div
                    variants={contentFromLeft}
                    whileInView="visible"
                    initial='hidden'
                    viewport={{once: false}}
                    className='mx-auto'
                >
                    <div className="grid gap-4 md:grid-cols-2 mt-10 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white bg-opacity-5 p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-3xl flex gap-5 items-center">
                                    <FontAwesomeIcon icon={service.icon}
                                                     className='text-white bg-primary px-2 py-3 rounded-full'/>
                                    <h2 className="text-xl font-bold text-white">{service.title}</h2>
                                </div>
                                <p className="text-white text-center">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    variants={contentFromRight}
                    whileInView="visible"
                    initial='hidden'
                    viewport={{once: false}}
                    className='mx-auto'
                >
                    <div className="grid gap-4 md:grid-cols-1 mt-4 lg:grid-cols-2">
                        {services_two.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white bg-opacity-5 p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-3xl text-center">
                                    <FontAwesomeIcon icon={service.icon}
                                                     className='text-white bg-primary px-2 py-3 rounded-full'/>
                                    <h2 className="text-xl font-bold text-white">{service.title}</h2>
                                </div>
                                <p className="text-white text-center">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>

    );
}

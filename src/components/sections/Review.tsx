import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import Image from "next/image";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";

export function Review() {
    const testimonials = [
        {
            name: 'Asim Fakhar',
            role: 'CEO, Company',
            image: '/assets/svg/user.svg',
            review: '"2BTech is a Digital Marketing Agency that covers all aspects of digital services, from development to design. Highly Recommended."'
        },
        {
            name: 'Sara Khan',
            role: 'Marketing Head, Brandify',
            image: '/assets/svg/user.svg',
            review: '"Their expertise in digital marketing and branding is unmatched. They bring professionalism and creativity to the table."'
        },
        {
            name: 'John Doe',
            role: 'CTO, TechNova',
            image: '/assets/svg/user.svg',
            review: '"An incredible team that understands the nuances of digital transformation and delivers results beyond expectations."'
        },
        {
            name: 'Emily Davis',
            role: 'Entrepreneur',
            image: '/assets/svg/user.svg',
            review: '"They revamped my online presence and helped my business grow exponentially. Their approach is truly innovative."'
        },
        {
            name: 'Ahmed Ali',
            role: 'Product Manager, InnovateX',
            image: '/assets/svg/user.svg',
            review: '"Professional, dedicated, and result-oriented. Their services helped us achieve our business goals effectively."'
        },
        {
            name: 'Jessica Lee',
            role: 'Founder, Creative Minds',
            image: '/assets/svg/user.svg',
            review: '"A fantastic experience working with them. They truly understand the importance of user experience and design."'
        },
    ];


    return (
        <div className='m-2'>
            <div className="container mx-auto mt-7 border rounded-2xl">
                <div className="flex flex-col items-center p-5 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">What{" "}<span
                        className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Clients Say</span>{" "} About
                        Us</h2>
                    <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg">
                        Our work speaks for ourselves. Checkout the testimonials of people who availed our services and
                        why
                        we are considered one of the best Business IT solutions company in USA:
                    </p>
                </div>
                <div className="flex justify-center mb-1 md:mb-10">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        navigation
                        centeredSlides={true}
                        loop={true}
                        className="testimonial-swiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="bg-gray-800  cursor-grab text-white max-w-md w-full sm:w-96 h-auto rounded-lg p-6 mx-auto flex flex-col">
                                    <div
                                        className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-10">
                                        <div
                                            className="bg-gray-300 rounded-full border-4 border-gray-800 flex-shrink-0">
                                            <Image
                                                width={84}
                                                height={64}
                                                src={testimonial.image}
                                                alt="Profile"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="text-center sm:text-left flex flex-col">
                                            <span className="text-xl text-red-500 font-bold">{testimonial.name}</span>
                                            <span className="text-sm">{testimonial.role}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-gray-300 text-sm sm:text-base">
                                            {testimonial.review}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    );
}

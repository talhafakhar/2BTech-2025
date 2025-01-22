import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {motion} from "framer-motion";
import './WorkFlow.module.css';

export function WorkFlow() {
    const workFlow = {
        hidden: {opacity: 0, y: 80},
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
            },
        }),
    };
    const sliderData = [
        {
            title: 'Discovery Call',
            description: `Join us for a discovery call to explore our services and solutions tailored to your needs. Let's get started!`,
            icon: '/assets/svg/phone.svg',
            image: '/assets/svg/discovery.svg',
        },
        {
            title: 'Value Document',
            description: `After the call, our team will create a value document with a summary and goals.`,
            icon: '/assets/svg/proof.svg',
            image: '/assets/svg/proofDocument.svg',
        },
        {
            title: 'Consultation Call',
            description: `We will contact you for a consultation call to answer any questions about our process or services.`,
            icon: '/assets/svg/call.svg',
            image: '/assets/svg/consulting.svg',
        },
        {
            title: 'Detailed Proposal',
            description: `We will send a proposal for your approval, including a personalized quote, goals, and relevant terms.`,
            icon: '/assets/svg/proposal.svg',
            image: '/assets/svg/detailProposal.svg',
        },
        {
            title: 'Agreement',
            description: `Once you accept the given proposal, we will sign an agreement and get started with your project.`,
            icon: '/assets/svg/shakeHand.svg',
            image: '/assets/svg/agreement.svg',
        },
        {
            title: 'Discussion',
            description: `Our project manager will ensure transparent communication between both parties.`,
            icon: '/assets/svg/chat.svg',
            image: '/assets/svg/communication.svg',
        },
        {
            title: 'Project Completion',
            description: `Our team will deliver the finished project to you and get your feedback regarding it.`,
            icon: '/assets/svg/success.svg',
            image: '/assets/svg/complete.svg',
        },
        {
            title: 'After Support',
            description: `We offer consistent quality checks and maintenance services for your delivered product.`,
            icon: '/assets/svg/support.svg',
            image: '/assets/svg/supportCall.svg',
        },
    ];

    return (
        <motion.div
            variants={workFlow}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
        >
            <div className="container mx-auto mt-20 px-5 text-white">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
                    <div className="flex flex-col justify-start lg:w-1/2">
                        <h2 className="shadow-white bg-text uppercase bg-clip-text text-transparent bg-[url('/assets/svg/text-bg.svg')]">
                            Efficient process, quality results, client-focused.
                        </h2>
                        <p className='text-gray-400 leading-1 mt-5'>We follow a simple yet effective working
                            process
                            designed to deliver optimal results for our clients. From understanding client goals to
                            implementing tailored strategies, we ensure every project is executed with precision and
                            care.
                            Our team works closely with clients, maintaining open communication and providing
                            regular
                            updates throughout the project. This structured approach allows us to consistently
                            achieve
                            outstanding outcomes and build long-term relationships with our clients.</p>
                    </div>
                    <div className="swiper-container lg:w-1/2 w-full">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="border rounded-2xl hover:scale-105 transform transition-all duration-300"
                        >
                            {sliderData.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="w-full md:h-60 pb-8 p-5 md:p-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                                        <div className="flex flex-col md:flex-row justify-between items-center">
                                            <div className="text-white md:w-1/2">
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-white p-3 rounded-full shadow-lg">
                                                        <Image
                                                            src={slide.icon}
                                                            width={30}
                                                            height={30}
                                                            alt={slide.title}
                                                            className="w-8 h-8"
                                                        />
                                                    </div>
                                                    <h3 className="ml-4 text-2xl font-extrabold">{slide.title}</h3>
                                                </div>
                                                <p className="text-sm md:text-lg opacity-90">{slide.description}</p>
                                            </div>
                                            <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    width={200}
                                                    height={200}
                                                    className="w-32 h-32 md:w-48 md:h-48"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

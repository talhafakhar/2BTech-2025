import React from "react";
import Image from "next/image";

export function BlogCards() {
    const cardsData = [
        {
            title: "Express JS Vs Node JS: Which Option To Pick For The Best Results?",
            description:
                "When it comes to web development, choosing the right technology stack is crucial for business success. But when it comes...",
            category: "Software Development",
            image: "/assets/svg/service/blog-img.png",
        },
        {
            title: "Express JS Vs Node JS: Which Option To Pick For The Best Results?",
            description:
                "When it comes to web development, choosing the right technology stack is crucial for business success. But when it comes...",
            category: "Software Development",
            image: "/assets/svg/service/blog-img.png",
        },
        {
            title: "Express JS Vs Node JS: Which Option To Pick For The Best Results?",
            description:
                "When it comes to web development, choosing the right technology stack is crucial for business success. But when it comes...",
            category: "Software Development",
            image: "/assets/svg/service/blog-img.png",
        },
    ];

    return (
        <div className='m-2'>
            <div className="container mx-auto pt-10 mt-10 border-t-2 px-4">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        We Love Sharings{" "} <span
                        className="bg-gradient-to-r text-3xl sm:text-4xl font-bold from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Information</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 lg:grid-cols-3 gap-6">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-5 border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image
                                width={300}
                                height={200}
                                src={card.image}
                                alt={card.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-4">
              <span className=" text-white  text-sm uppercase font-light font-mono cursor-pointer  rounded-md ">
                {card.category}
              </span>
                                <h3 className="text-lg font-bold mt-2 text-white">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-white mt-2">{card.description}</p>
                                <div className="mt-4 flex gap-1 items-center justify-between">
                                    <span className='bg-gray-300 w-full h-[1px]'></span>
                                    <a
                                        href="#"
                                        className="text-blue-600  text-nowrap  font-semibold "
                                    >
                                        Read More +
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

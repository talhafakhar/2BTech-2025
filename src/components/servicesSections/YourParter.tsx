import React from 'react';
import Image from "next/image";
import Link from "next/link";

export function DiscoveryCall() {

    return (
        <div className='container mx-auto p-2 relative z-10'>
            <div
                className='flex flex-col md:flex-row items-center py-10 justify-between rounded-lg p-5 relative overflow-hidden'
                style={{
                    backgroundImage: 'url(/assets/svg/service/backgroundPattern.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Dark overlay */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 z-0"
                ></div>

                <h2 className='text-white text-4xl py-5 font-bold w-full md:max-w-3xl px-2 border-l-[10px] relative z-10'>
                    Your Partner In Providing Full-Fledged
                    <span
                        className='bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'> Website Development Solutions</span>
                </h2>
                <Link
                    className=" border text-white md:mt-0 mt-5 hover:bg-white hover:text-black flex gap-1 rounded-md  p-2 uppercase font-bold group duration-300 transition-all relative z-10"
                    href="#"
                >
                    partner with us
                    <Image
                        src={'/assets/svg/service/partner.svg'}
                        width={25}
                        height={25}
                        className='transition-all duration-300 group-hover:filter group-hover:invert'
                        alt='hand shake'
                    />
                </Link>
            </div>
        </div>

    );
}

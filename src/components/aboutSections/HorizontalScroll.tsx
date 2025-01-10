import React, {useEffect, useRef} from 'react';
import Image from 'next/image';

export function Brands() {
    const logosRef = useRef<HTMLUListElement | null>(null);
    useEffect(() => {
        if (logosRef.current) {
            const ul = logosRef.current;
            const clonedUl = ul.cloneNode(true) as HTMLUListElement;
            clonedUl.setAttribute('aria-hidden', 'true');
            ul.insertAdjacentElement('afterend', clonedUl);
        }
    }, []);
    return (
        <div className='container mx-auto my-8 relative z-10'>
            <h3 className="text-4xl text-white mb-5 font-bold text-center">We Got Them <span
                className='bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>Covered!</span>
            </h3>
            <div
                className="w-full inline-flex flex-nowrap p-2  overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul ref={logosRef}
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li className='bg-gray-600 rounded-lg px-1 py-2'>
                        <Image width={100}
                               height={100}
                               src="/assets/about/body-factory.webp"
                               alt="body factory"
                               className="mx-4  object-contain"/>
                    </li>
                    <li className='bg-gray-600 rounded-lg px-1 py-2'>
                        <Image width={100}
                               height={100}
                               src="/assets/about/dapp.webp"
                               alt="drapp"
                               className="mx-4  object-contain"/>
                    </li>
                    <li className='bg-gray-600 rounded-lg px-1 py-2'>
                        <Image width={100}
                               height={100}
                               src="/assets/about/grit-coaches.webp"
                               alt="grit coaches"
                               className="mx-4  object-contain"/>
                    </li>
                    <li className='bg-gray-600 rounded-lg px-1 py-2'>
                        <Image width={100}
                               height={100}
                               src="/assets/about/maxima.webp"
                               alt="maxima"
                               className="mx-4  object-contain"/>
                    </li>
                    <li className='bg-gray-600 rounded-lg px-1 py-2'>
                        <Image width={100}
                               height={100}
                               src="/assets/about/pac.webp"
                               alt="pac"
                               className="mx-4 object-contain"/>
                    </li>
                    <li className='bg-gray-600 rounded-lg px-1 py-2'>
                        <Image width={100}
                               height={100}
                               src="/assets/about/redfluffy.webp"
                               alt="redfluffy"
                               className="mx-4 object-contain"/>
                    </li>
                    <li className='bg-gray-600 rounded-lg px-1 py-2'>
                        <Image width={100}
                               height={100}
                               src="/assets/about/vasl.webp"
                               alt="vasl"
                               className="mx-4  object-contain"/>
                    </li>
                    <li className='bg-gray-600 rounded-lg px-1 py-2'>
                        <Image width={100}
                               height={100}
                               src="/assets/svg/about/bookblaze.svg"
                               alt="vasl"
                               className="mx-4  object-contain"/>
                    </li>
                    <li className='bg-gray-600 rounded-lg px-1 py-2'>
                        <Image width={100}
                               height={100}
                               src="/assets/about/xa-studios.webp"
                               alt="xa studios"
                               className="mx-4  object-contain"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

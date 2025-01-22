import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

export function OtherServices() {

    return (
        <div className='container mx-auto my-10 py-4 relative z-10'>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-6">
                {/* Left Section */}
                <div className="lg:w-2/3 space-y-6 max-w-4xl">
                    <h2 className="text-4xl lg:text-5xl  font-bold text-white" style={{lineHeight: '1.2'}}>
                        Enhance your online presence with
                        <span
                            className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"> Expert Website Development Services</span>
                    </h2>
                    <p className="text-gray-400 lg:text-lg">
                        Website development involves creating and maintaining websites, essential for an online
                        presence. Whether you&#39;re a business, influencer, or blogger, owning a website is crucial.
                    </p>
                    <p className="text-gray-400 lg:text-lg">
                        2BTech offers custom web development services, combining expert programming, design, and
                        security to align with your brand. We cater to clients globally, delivering tailored solutions
                        to meet your unique needs.
                    </p>
                </div>
                {/* Right Section */}
                <div className="lg:w-1/3 mt-10 lg:mt-0 mx-auto
                 bg-white bg-opacity-10 border-t-[10px] border-b-[10px] border-primary  p-6">
                    <h2 className="text-xl font-semibold text-white mb-4 border-white border-b-2">Other Services</h2>
                    <ul className="space-y-2 text-white">
                        <li className="hover:text-blue-500 cursor-pointer flex justify-between">
                            Blockchain Development
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer flex justify-between">
                            Metaverse Software Development
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer flex justify-between">
                            Dev Ops
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer flex justify-between">
                            Mobile App Development
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer flex justify-between">
                            Big Data
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer flex justify-between">
                            UI/UX Design
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer flex justify-between">
                            IoT Development
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer flex justify-between">
                            Software Testing
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import {ArrowRight, Mail, MapPin, Phone} from "lucide-react";
const AboutCardContact = () =>{
	return(
		<div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto px-4">
                <div className="text-center p-8 bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                        5900 Balcones Drive, STE 4000 <br />
                        Austin, TX 78731 USA
                    </p>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">Email</h3>
                    <p className="text-gray-600 leading-relaxed">
                        <a href="mailto:info@2btechinc.com" className="hover:text-primary transition-colors">
                            info@2btechinc.com
                        </a>
                        <br />
                        <a href="mailto:projects@2btechinc.com" className="hover:text-primary transition-colors">
                            business@2btechinc.com
                        </a>
                    </p>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">Phone Number</h3>
                    <p className="text-gray-600 leading-relaxed">
                        <a href="tel:+18563867630" className="hover:text-primary transition-colors">
                            737 299 0421
                        </a>
                        <br />
                        <a href="tel:+17372990421" className="hover:text-primary transition-colors">
                            856 386 7630
                        </a>
                    </p>
                </div>
            </div>
             <div className="flex justify-center mt-12">
                <button
                    onClick={() =>
                        window.open('https://calendly.com/2btechinc/discoverywith2btech', '_blank')
                    }
                    className="group relative inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-secondary text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                >
                    Schedule a Free Discovery Call
                    <span className="ml-3 inline-flex w-8 h-8 rounded-full bg-white text-primary items-center justify-center transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12">
                    	<ArrowRight className="w-4 h-4" />
                    </span>
                </button>
             </div>
          </div>
		)
}
export default AboutCardContact;
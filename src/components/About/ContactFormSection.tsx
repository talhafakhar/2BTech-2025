import React, {useState} from 'react';
import Image from "next/image";

const ContactFormUI = () => {
    const [formData, setFormData] = useState({
        helpType: '',
        budget: '',
        name: '',
        email: '',
        phone: '',
        subject: '',
        requirements: ''
    });

    const handleInputChange = (e:any) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e:Event) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="px-4 py-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-white rounded-2xl shadow-lg border p-6 lg:p-8">
                        <h2 className="text-2xl lg:text-3xl font-bold  mb-8">
                            Have <span className="text-primary">Question?</span> Write A Message
                        </h2>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        How Can We Help You?
                                    </label>
                                    <select
                                        name="helpType"
                                        value={formData.helpType}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none text-gray-600"
                                    >
                                        <option value="">Please Select</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="mobile-app">Mobile App Development</option>
                                        <option value="ui-ux-design">UI/UX Design</option>
                                        <option value="consultation">Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        What Should Ideal Budget?
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none text-gray-600"
                                    >
                                        <option value="">100 - 10000</option>
                                        <option value="100-1000">$100 - $1,000</option>
                                        <option value="1000-5000">$1,000 - $5,000</option>
                                        <option value="5000-10000">$5,000 - $10,000</option>
                                        <option value="10000+">$10,000+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter Name"
                                        className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none text-gray-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter email address"
                                        className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none text-gray-600"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none text-gray-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Enter subject"
                                        className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none text-gray-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Special Requirement
                                </label>
                                <textarea
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 resize-none focus:ring-gray-200 focus:border-transparent outline-none text-gray-600"
                                ></textarea>
                            </div>
                            <button
                                onClick={(e:any)=>{handleSubmit(e)}}
                                className="w-full bg-primary text-white font-semibold py-2 px-6 rounded"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                    <div className="rounded-2xl p-6 lg:p-8">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                    <span className="text-secondary font-bold text-sm">01</span>
                                </div>
                                <p className="font-medium pt-2">
                                    An expert contacts you after having analyzed your requirements.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                    <span className="text-secondary font-bold text-sm">02</span>
                                </div>
                                <p className="font-medium pt-2">
                                    If needed, we sign an NDA to ensure the highest privacy level.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                    <span className="text-secondary font-bold text-sm">03</span>
                                </div>
                                <p className="font-medium pt-2">
                                    We submit a comprehensive project proposal with estimates, timelines, CVs, etc.
                                </p>
                            </div>
                        </div>
                        <div className="flex  justify-center lg:justify-start items-center ">
                            <Image
                                src="/assets/About/question.webp" alt="contact"
                                width={500}
                                height={500}
                                loading="lazy"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormUI;
import React, {useState} from 'react';
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import {ArrowRight} from "lucide-react";
declare global {
    interface Window {
        grecaptcha?: {
            reset: () => void;
        };
    }
}
const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [modalMsg, setModalMsg] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleRecaptchaChange = (value: string | null) => {
        setRecaptchaValue(value);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!recaptchaValue) {
            setModalMsg('⚠️ Please complete the reCAPTCHA.');
            setIsSuccess(false);
            setShowModal(true);
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/contact/send', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...formData, token: recaptchaValue}),
            });

            const data = await res.json();

            if (data.ok) {
                setModalMsg(data.message || '✅ Form submitted successfully!');
                setIsSuccess(true);
                setShowModal(true);
            } else {
                setModalMsg(data.message || '❌ Something went wrong.');
                setIsSuccess(false);
                setShowModal(true);
            }
        } catch (err) {
            console.error(err);
            setModalMsg('❌ Failed to submit the form.');
            setIsSuccess(false);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };
    const handleModalClose = () => {
        setShowModal(false);
        if (isSuccess) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
            setRecaptchaValue(null);
            if (typeof window !== 'undefined' && window.grecaptcha) {
                window.grecaptcha.reset();
            }
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.value;
        setFormData({...formData, [e.target.name]: value});
    };
    return (
        <div className="px-4 max-w-6xl mx-auto">
                <div className="bg-white px-4  rounded-2xl shadow-lg border border-black p-6 lg:p-8 items-center flex justify-center gap-10 flex-col w-full  lg:flex-row">
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                            Feel <span className="text-primary">Free</span> to Contact Us
                        </h2>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        How Can We Help You?
                                    </label>
                                    <select
                                        name="helpType"
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
                                    <PhoneInput
                                        country={'pk'}
                                        value={formData.phone}
                                        onChange={(phone) => setFormData({ ...formData, phone })}
                                        inputProps={{
                                            required: true,
                                            placeholder: 'Enter your phone number',
                                        }}
                                        inputStyle={{
                                            width: '100%',
                                            borderRadius: '0.20rem',
                                            borderColor: '#e5e1e1',
                                            padding: '20px 16px',
                                            paddingLeft: '48px',
                                        }}
                                        containerStyle={{ width: '100%' }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
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
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 resize-none focus:ring-gray-200 focus:border-transparent outline-none text-gray-600"
                                ></textarea>
                            </div>
                            <div className="pt-2">
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Les270rAAAAAKn5vopWuLbq57pjvqm-IAbBGA-d'}
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full bg-primary text-white  gap-2 font-semibold py-2 px-6 rounded"
                            >
                                {loading ? 'Submitting...' : 'SEND MESSAGE'}

                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <div className="flex  justify-center  items-center ">
                            <Image
                                src="/assets/Home/contact.svg" alt="contact"
                                width={400}
                                height={400}
                                loading="lazy"
                            />

                        </div>
                    </div>
                </div>
                 {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-sm text-center">
                        <p className={`mb-4 text-lg font-semibold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                            {modalMsg}
                        </p>
                        <button
                            onClick={handleModalClose}
                            className="bg-primary px-4 py-1.5 rounded font-bold hover:scale-105 text-white transition"
                        >
                            OK
                        </button>
                    </div>
                </div>
                  )}
        </div>
    );
};

export default ContactUsPage;
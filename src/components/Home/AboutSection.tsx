'use client';
import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';
const HomeAboutSection: React.FC= () => {
    return (
        <section className={`py-14`}>
            <div className="max-w-7xl px-4 mx-auto flex md:flex-row flex-col justify-center md:justify-between gap-5 w-full items-center ">
                <motion.div
                    className="md:w-1/2 w-full"
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, ease: "easeInOut"}}
                    viewport={{once: true, amount: 0.3}}
                >
                    <Image
                        src="/assets/services/AaaS/about.webp"
                        alt="3d"
                        width={500}
                        loading="lazy"
                        height={400}
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 w-full"
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, ease: "easeInOut", delay: 0.2}}
                    viewport={{once: true, amount: 0.3}}
                >
                    <h2 className={`text-2xl md:text-3xl  font-bold leading-tight mb-2`}>
                        Transform Your Vision Into Market-Ready Products
                    </h2>
                    <p className="mt-2">2BTech  is a custom software and AI agent development company partnering with VC-backed startups and SMEs to build products that matter. We&#39;re your complete design to engineering team, delivering end-to-end solutions from initial concept to launch and beyond</p>
                    <p className="mt-4">Skip the lengthy hiring process. Our on-demand team of designers, engineers, and AI specialists integrates seamlessly with your business, moving at startup speed with enterprise-level expertise. Whether you&#39;re validating an MVP, building a SaaS platform, or deploying AI agents, we bring technical excellence and strategic thinking to every project.
                    </p>
                    <p className="mt-4">We understand your challenges: investor milestones, tight budgets, and the pressure to prove market fit fast. That&#39;s why we deliver quality products on time, helping you hit your KPIs and scale with confidence</p>
                    <div>
                        <div
                            className={`mt-4 flex gap-2 sm:gap-6 justify-center md:justify-start items-center `}>
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                onClick={() =>
                                    window.open('https://calendly.com/talhafakhar/discoverycall', '_blank')
                                }
                                className="flex items-center  border-black px-6 py-3 rounded border font-semibold transform transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Schedule Free Consultation
                                <svg
                                    className="ml-2 w-5 h-5 transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeAboutSection;

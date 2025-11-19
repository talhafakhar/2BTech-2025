'use client';
import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';
const HomeAboutSection: React.FC= () => {
    return (
        <section className="py-8">
            <div className="max-w-7xl px-4 mx-auto flex md:flex-row flex-col justify-center md:justify-between gap-5 w-full items-center ">
                <motion.div
                    className="md:w-1/2 w-full"
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, ease: "easeInOut"}}
                    viewport={{once: true, amount: 0.3}}
                >
                    <Image
                        src="/assets/Home/about.svg"
                        alt="introduction"
                        width={450}
                        priority
                        height={450}
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
                </motion.div>
            </div>
        </section>
    );
};

export default HomeAboutSection;

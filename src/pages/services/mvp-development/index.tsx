import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/HeroSection';
import React from "react";
import AboutSection from "@/components/services/AboutSection";
import Banner from "@/components/Home/bannerSection";
import FaqSection from "@/components/Home/FaqSection";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
import FinalCTASection from "@/components/services/FinalCTASection";
import OurFlowSection from "@/components/services/OurFlowSection";
import WhatIsSection from "@/components/services/WhatIsSection";
import {easeInOut, motion} from "framer-motion";
import { Rocket, Star} from "lucide-react";
import SubServicesSection from "@/components/services/CustomSoftwareServicesSection";
import TechStackServices from "@/components/services/ServicesStackSection";
import MVPComparison from "@/components/services/MVPComparisonSeciont";
export default function MvpDevelopment() {
    const faqs = [
        {
            id: 1,
            question: "What exactly is an MVP for startups?",
            answer:
                "An MVP for startups is the simplest version of your product that solves a core problem for early users. It includes only essential features needed to validate your business hypothesis and gather feedback.",
        },
        {
            id: 2,
            question: "How much does it cost to build an MVP?",
            answer:
                "MVP costs range from $15,000 for basic validation to $100,000+ for complex products. Most startups invest $25,000–$50,000. Final cost depends on features, platforms, design, and integrations.",
        },
        {
            id: 3,
            question: "How long does startup MVP development take?",
            answer:
                "Standard MVPs take 8–12 weeks. Simple validation MVPs can launch in 4–6 weeks. Complex MVPs with advanced features may need 12–16 weeks.",
        },
        {
            id: 4,
            question: "What's included in MVP builds?",
            answer:
                "MVP builds include discovery, design, development, testing, deployment, and post-launch support. You get a working product with core features, admin dashboard, and basic analytics.",
        },
        {
            id: 5,
            question:
                "Do I need custom software development services for startups or can I use no-code?",
            answer:
                "No-code works for simple ideas but hits limits quickly. Custom software development services for startups give you unlimited flexibility, better performance, and the ability to scale. Investors prefer custom-built MVPs.",
        },
        {
            id: 6,
            question: "Can you build MVP for startups with no technical co-founder?",
            answer:
                "Yes. We become your technical partner, providing strategy, development, and ongoing guidance. Many successful startups launch without technical co-founders.",
        },
        {
            id: 7,
            question: "What happens after MVP launch?",
            answer:
                "We provide post-launch support, monitor performance, gather user feedback, and help you iterate. Most clients continue with us for full product development.",
        },
        {
            id: 8,
            question: "Will the MVP scale to a full product?",
            answer:
                "Yes. We build MVPs with scalable architecture from day one. When you're ready to expand, we add features without rebuilding.",
        },
        {
            id: 9,
            question: "How do you keep MVP costs low?",
            answer:
                "We focus on core features only, use proven tech stacks, reuse components, and follow lean methodology. No waste, no nice-to-haves, just essentials.",
        },
        {
            id: 10,
            question: "Can you help with investor presentations?",
            answer:
                "Yes. We provide technical documentation, architecture diagrams, and growth roadmaps that investors expect. We've helped clients raise $40M+.",
        },
    ];
    const definitionOne = [
        {
            title: "Startup Expertise",
            description:
                "We've launched 50+ MVPs for startups. We understand investor expectations, limited budgets, and the pressure to move fast.",
        },
        {
            title: "Fixed Pricing & Timeline",
            description:
                "No surprises. Fixed scope, fixed price, fixed timeline. We commit to 8–12 weeks and deliver on schedule.",
        },
        {
            title: "Investor-Ready Quality",
            description:
                "MVPs that impress investors with professional design, solid architecture, and clear metrics. We help you tell your story.",
        },
    ];
    const definitionTwo = [
        {
            title: "Technical Leadership",
            description:
                "Get CTO-level guidance without equity dilution. We help you make smart technical decisions.",
        },
        {
            title: "Post-Launch Partnership",
            description:
                "We don't disappear after launch. Ongoing support, iteration planning, and scaling advice included.",
        },
        {
            title: "Proven Process",
            description:
                "Our lean startup methodology delivers MVPs that validate quickly and scale smoothly. Battle-tested with 200+ launches.",
        },
    ];
    const itemVariants: any = {
        hidden: {opacity: 0, y: 40, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9,
            transition: {duration: 0.5, ease: easeInOut},
        },
    };
    const servicesData = [
        {
            id: 1,
            title: "Startup MVP Development",
            description:
                "Purpose-built MVP for startups that need to validate quickly and impress investors. We deliver investor-ready products that demonstrate your vision and prove market demand.",
            keyFeatures: [
                "SaaS platform MVPs",
                "Mobile app MVPs (iOS/Android)",
                "Marketplace MVPs",
                "Fintech and payment MVPs",
                "Healthcare and wellness MVPs",
                "B2B software MVPs",
                "ERP system MVPs",
            ],
            benefits: [
                "8–12 week delivery guaranteed",
                "Fixed-price packages",
                "Investor-ready documentation",
                "Post-launch support included",
                "Built for rapid scaling",
                "Direct founder communication",
            ],
        },
        {
            id: 2,
            title: "MVP Builds for Product Validation",
            description:
                "Quick MVP builds focused on validating your core hypothesis with minimum investment. Test your riskiest assumptions first, then build from there.",
            keyFeatures: [
                "Landing page + waitlist",
                "Prototype with core workflow",
                "Single platform focus (web or mobile)",
                "Essential integrations only",
                "Basic analytics setup",
                "User feedback tools",
            ],
            benefits: [
                "Fastest path to feedback (6–8 weeks)",
                "Lowest cost investment",
                "Real user data for decisions",
                "Clear success metrics",
                "Pivot-friendly architecture",
                "Proof for funding conversations",
            ],
        },
        {
            id: 3,
            title: "Custom Software Development Services for Startups",
            description:
                "Comprehensive custom software development services for startups that need more than templates. We build scalable MVPs with custom features that differentiate you from competitors.",
            keyFeatures: [
                "Unique workflows and logic",
                "Proprietary algorithms",
                "Custom API integrations",
                "Advanced security features",
                "Complex user permissions",
                "Multi-tenant architecture",
            ],
            benefits: [
                "Unique value proposition",
                "Complex business logic",
                "Competitive differentiation",
                "Regulatory requirements",
                "Enterprise B2B sales",
                "Technical co-founder replacement",
            ],
        },
        {
            id: 4,
            title: "Technical Co-Founder as a Service",
            description:
                "No technical co-founder? No problem. Our team becomes your technical leadership, guiding product strategy, architecture decisions, and development execution.",
            keyFeatures: [
                "CTO-level strategic guidance",
                "Product roadmap planning",
                "Technology stack selection",
                "Development team management",
                "Investor presentation support",
                "Technical due diligence prep",
            ],
            benefits: [
                "Perfect for non-technical founders",
                "Ideal for solo founders seeking Series A",
                "Great for startups replacing technical co-founders",
                "Builds technical credibility",
                "Ensures alignment between vision and tech",
                "Provides long-term technical leadership",
            ],
        },
    ];
    const techCategories = [
        {
            name: "Web MVPs",
            technologies: [
                {
                    name: "React", icon: (<svg viewBox="0 0 128 128" className="w-14 h-14">
                        <circle cx="64" cy="64" r="11.4" fill="#61dafb"/>
                        <g stroke="#61dafb" strokeWidth="6" fill="none">
                            <ellipse rx="56" ry="22" cx="64" cy="64"/>
                            <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/>
                            ;
                            <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/>
                        </g>
                    </svg>)
                },
                {
                    name: "Next.js", icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                            id="SVGRepo_iconCarrier"
                            d="M23.749 30.005c-.119.063-.109.083.005.025a.3.3 0 0 0 .095-.061c0-.021 0-.021-.1.036m.24-.13c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.047c0-.027-.016-.021-.079.031m.156-.094c-.057.047-.057.047.011.016a.3.3 0 0 0 .068-.048c0-.025-.016-.02-.079.032m.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032m.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631a15.8 15.8 0 0 0-2.824 6.989c-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208a341 341 0 0 1-2.609-3.495l-2.557-3.453-3.203-4.745a416 416 0 0 0-3.229-4.744c-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792a.57.57 0 0 1-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.6.6 0 0 1-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125a.8.8 0 0 1 .229-.187c.131-.063.183-.073.724-.073.635 0 .74.025.907.208a603 603 0 0 1 3.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083a16.4 16.4 0 0 0 3.285-2.885 15.94 15.94 0 0 0 3.767-8.177c.129-.88.145-1.141.145-2.333s-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a17 17 0 0 0-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.62.62 0 0 1 .317.364c.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 0 1 .313-.395c.124-.063.172-.068.667-.068.463 0 .541.005.645.063z"
                        ></path>
                    </svg>)
                },
                {
                    name: "Tailwind CSS", icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#44a8b3"
                                d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"
                            ></path>
                        </g>
                    </svg>)
                },
                {
                    name: "TypeScript", icon: (<svg viewBox="0 0 256 256" >
                        <rect width="256" height="256" rx="24" fill="#3178C6"/>
                        <text x="128" y="165" textAnchor="middle" fontSize="100" fill="#fff" fontWeight="bold">TS</text>
                    </svg>)
                },
                {
                    name: "AWS",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-8 h-8">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#252F3E"
                                d="M4.51 7.687q0 .297.058.475.061.175.17.384a.23.23 0 0 1 .037.123q.001.08-.1.16l-.336.224a.26.26 0 0 1-.138.048q-.08-.001-.16-.074a1.7 1.7 0 0 1-.192-.251 4 4 0 0 1-.165-.315q-.622.737-1.564.737-.672 0-1.064-.385-.393-.384-.394-1.025-.001-.682.484-1.1c.325-.278.756-.416 1.304-.416q.27.002.564.042c.197.027.4.07.612.118v-.39q-.001-.608-.25-.854-.254-.248-.868-.246-.279-.001-.574.07a4 4 0 0 0-.575.181 2 2 0 0 1-.186.07.3.3 0 0 1-.085.016q-.112.001-.112-.166v-.262c0-.085.01-.15.037-.186a.4.4 0 0 1 .15-.113q.278-.144.67-.24.39-.103.83-.101.948 0 1.394.432.44.432.442 1.314v1.73h.01zm-2.161.811q.261 0 .548-.096c.191-.064.362-.182.505-.342a.85.85 0 0 0 .181-.341c.032-.129.054-.283.054-.465V7.03a4 4 0 0 0-.49-.09 4 4 0 0 0-.5-.033c-.357 0-.618.07-.793.214q-.262.215-.26.614-.002.374.196.566.192.198.559.197m4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a1 1 0 0 1-.049-.214c0-.085.043-.133.128-.133h.522q.15-.001.207.053c.043.032.075.107.107.208l.894 3.535.83-3.535q.038-.16.1-.208a.37.37 0 0 1 .214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.46.46 0 0 1 .107-.208.35.35 0 0 1 .208-.053h.495c.085 0 .133.043.133.133q-.002.04-.01.086a1 1 0 0 1-.038.133l-1.283 4.127q-.048.16-.111.209a.34.34 0 0 1-.203.053h-.457q-.15.001-.213-.053c-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439q-.038.159-.1.213c-.043.038-.118.054-.213.054h-.458zm6.838.144a3.5 3.5 0 0 1-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.4.4 0 0 1-.031-.149v-.272q.001-.167.122-.166a.3.3 0 0 1 .096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064q.505 0 .777-.176a.57.57 0 0 0 .277-.508.52.52 0 0 0-.144-.373q-.144-.152-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.27 1.27 0 0 1-.266-.774q0-.336.143-.593c.096-.17.224-.32.384-.438a1.7 1.7 0 0 1 .553-.277c.213-.064.436-.091.67-.091.118 0 .24.005.357.021a3.4 3.4 0 0 1 .649.145q.143.048.224.096a.5.5 0 0 1 .16.133.3.3 0 0 1 .047.176v.251q-.001.17-.122.171a.6.6 0 0 1-.202-.064 2.4 2.4 0 0 0-1.022-.208c-.303 0-.543.048-.708.15q-.249.148-.25.475 0 .225.16.379c.106.101.303.202.585.293l.756.24q.576.184.825.513.246.33.244.748 0 .345-.138.619a1.4 1.4 0 0 1-.388.47q-.247.197-.591.299a2.5 2.5 0 0 1-.761.112"
                            ></path>
                            <g fill="#F90" fillRule="evenodd" clipRule="evenodd">
                                <path
                                    d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406"></path>
                                <path
                                    d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z"></path>
                            </g>
                        </g>
                    </svg>)
                },
                {
                    name: "Vercel",
                    icon: (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="65"
                        viewBox="0 0 75 65"
                    >
                        <path d="m37.59.25 36.95 64H.64z"></path>
                    </svg>)
                },
                {
                    name: "Heroku",
                    icon: (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                        viewBox="-14.5 0 285 285"
                    >
                        <path
                            id="SVGRepo_iconCarrier"
                            fill="#430098"
                            d="M230.4 0c13.996 0 25.37 11.232 25.597 25.177l.003.423v233.244c0 13.996-11.235 25.37-25.177 25.597l-.423.003H25.6c-13.996 0-25.37-11.235-25.597-25.176L0 258.844V25.6C0 11.601 11.235.23 25.177.003L25.6 0zm0 14.222H25.6c-6.174 0-11.218 4.948-11.374 11.085l-.004.293v233.244c0 6.174 4.948 11.218 11.085 11.374l.293.004h204.8c6.177 0 11.218-4.947 11.374-11.084l.004-.294V25.6c0-6.272-5.102-11.378-11.378-11.378M64 184.89l32 28.444-32 28.445zM92.444 42.667v80.75c14.201-4.622 34.052-9.64 53.334-9.64 17.582 0 28.106 6.913 33.838 12.712 12.109 12.25 12.397 27.82 12.381 29.897v.058l.003 85.334h-28.444v-84.942c-.14-6.639-3.34-14.614-17.778-14.614-28.632 0-60.714 14.257-61.666 14.683l-.02.009L64 166.016V42.666zm99.556 0c-1.92 16.156-8.47 31.644-21.333 46.222h-28.445c11.179-14.667 18.198-30.101 21.334-46.222Z"
                        ></path>
                    </svg>)
                },
                {
                    name: "Node.js", icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                        <g id="SVGRepo_iconCarrier" fill="#8CC84B">
                            <path
                                d="M17.173 2.299a2.45 2.45 0 0 0-2.346 0L4.152 8.189C3.46 8.553 2.992 9.297 3 10.07v11.864c-.005.787.486 1.538 1.197 1.897 1.022.544 2.015 1.143 3.055 1.65 1.203.59 2.706.721 3.923.105.988-.51 1.427-1.646 1.425-2.689.008-3.915.002-7.83.003-11.746.024-.174-.107-.36-.297-.356-.454-.007-.91-.004-1.364-.001-.172-.017-.34.126-.327.299-.006 3.89.001 7.781-.004 11.672a1.32 1.32 0 0 1-.872 1.237c-1.198.42-4.617-1.8-4.617-1.8a.34.34 0 0 1-.193-.33V10.13a.36.36 0 0 1 .225-.365q5.318-2.93 10.637-5.862a.38.38 0 0 1 .418.001q5.318 2.93 10.638 5.86a.37.37 0 0 1 .224.366q.001 5.87-.001 11.741a.34.34 0 0 1-.19.334c-3.514 1.941-7.067 3.82-10.548 5.818-.152.087-.325.186-.495.09-.915-.507-1.82-1.033-2.732-1.544-.1-.062-.226-.089-.33-.02-.408.216-.793.39-1.263.577-.66.261-.554.368.04.714q1.603.905 3.204 1.81c.703.439 1.646.47 2.372.065q5.337-2.943 10.675-5.886c.708-.361 1.202-1.109 1.197-1.896V10.069c.007-.756-.442-1.487-1.114-1.856-3.57-1.974-7.142-3.942-10.713-5.914"></path>
                            <path
                                d="M22.542 11.206c-1.397-.747-3.058-.787-4.61-.69-1.122.112-2.301.421-3.118 1.225-.838.808-1.02 2.113-.622 3.168.285.745 1.003 1.23 1.745 1.486.957.338 1.96.442 2.966.546.916.096 1.833.19 2.714.463.36.12.778.302.889.693.101.464-.01 1.003-.387 1.325-1.195.946-4.521.801-5.702.056-.478-.317-.684-.879-.768-1.414-.009-.167-.143-.32-.324-.307a69 69 0 0 0-1.36 0c-.159-.014-.323.099-.332.26-.093 2.452 2.158 3.52 4.27 3.756 1.208.115 2.441.108 3.63-.15.893-.204 1.789-.579 2.404-1.267.758-.836.907-2.081.567-3.123-.26-.777-1.003-1.276-1.762-1.532-1.033-.354-2.258-.545-3.193-.634-1.36-.13-2.976-.076-3.361-.97-.153-.468-.023-1.049.407-1.337 1.138-.771 3.453-.669 4.632-.092.54.27.854.827.983 1.389.024.165.135.337.326.33.45.008.901.002 1.351.002.155.011.325-.076.355-.234-.02-1.174-.619-2.376-1.7-2.949"></path>
                        </g>
                    </svg>)
                },
                {
                    name: "Python",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-12 h-12">
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill="url(#paint0_linear_87_8204)"
                                    fillRule="evenodd"
                                    d="M13.016 2C10.82 2 9.038 3.725 9.038 5.852v2.667h6.886v.74H5.978C3.781 9.26 2 10.984 2 13.111v5.778c0 2.127 1.781 3.852 3.978 3.852h2.295v-3.26c0-2.127 1.781-3.851 3.978-3.851h7.345c1.859 0 3.366-1.46 3.366-3.26V5.852C22.962 3.725 21.18 2 18.984 2zm-.918 4.74c.76 0 1.377-.596 1.377-1.333 0-.736-.616-1.333-1.377-1.333-.76 0-1.377.597-1.377 1.333 0 .737.617 1.334 1.377 1.334"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    fill="url(#paint1_linear_87_8204)"
                                    fillRule="evenodd"
                                    d="M18.983 30c2.197 0 3.979-1.724 3.979-3.852v-2.666h-6.886v-.741h9.946c2.197 0 3.978-1.725 3.978-3.852V13.11c0-2.127-1.781-3.852-3.978-3.852h-2.295v3.26c0 2.127-1.782 3.851-3.979 3.851h-7.344c-1.859 0-3.366 1.46-3.366 3.26v6.518c0 2.128 1.781 3.852 3.978 3.852zm.918-4.74c-.76 0-1.377.596-1.377 1.333 0 .736.617 1.333 1.377 1.333.761 0 1.378-.597 1.378-1.333 0-.737-.617-1.334-1.378-1.334"
                                    clipRule="evenodd"
                                ></path>
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_87_8204"
                                        x1="12.481"
                                        x2="12.481"
                                        y1="2"
                                        y2="22.741"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#327EBD"></stop>
                                        <stop offset="1" stopColor="#1565A7"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_87_8204"
                                        x1="19.519"
                                        x2="19.519"
                                        y1="9.259"
                                        y2="30"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFDA4B"></stop>
                                        <stop offset="1" stopColor="#F9C600"></stop>
                                    </linearGradient>
                                </defs>
                            </g>
                        </svg>)
                },
                {
                    name: "Ruby on Rails", icon: (  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        viewBox="0 0 512 512"
                    >
                        <g id="SVGRepo_iconCarrier">
                            <path
                                id="5151e0c8492e5103c096af88a51f6584"
                                d="m511.5 101.762-11.253 16.879s-28.133-31.879-79.694-26.257c-51.574 5.626-142.517 58.136-156.585 173.461-14.064 115.324 41.257 240.965 41.257 240.965H55.821s-6.562-41.256 9.377-120.014c15.936-78.76 39.377-131.265 79.694-206.276 40.317-75.007 105.011-136.89 198.773-145.324 93.764-8.441 167.835 66.566 167.835 66.566M6.126 381.17.5 428.053l45.943 5.623 8.442-48.756zm90.012-139.702-43.128-16.88-14.064 39.376 44.068 14.064zm73.136-119.075-32.819-21.566-26.252 29.06 33.754 22.506zm94.694-76.883-22.502-25.317-30.939 15.939 22.502 27.188zm100.329-14.064-3.756-24.377-40.313-1.879 5.622 27.197zm117.199 25.313-30.939-22.502-.939 16.875 26.253 14.064zm-36.57 63.754 25.317 2.811v-11.249l-25.317-5.626zm-80.629-1.871 12.184 22.498 17.815-14.064-3.751-15zm-19.692 57.196L325.85 147.71l-19.687 17.815 27.188 30zm-68.445 74.063 31.876 27.196 7.502-30.943-27.188-20.626zm-2.814 93.767 39.381 16.875-1.871-30.939-35.635-18.754zm72.191 120.016-17.811-36.57h-41.253l9.378 33.758z"
                            ></path>
                        </g>
                    </svg>)
                },
                {
                    name: "PostgreSQL", icon: (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin meet"
                        viewBox="-4 0 264 264"
                        className="w-12 h-12"
                    >
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99q.13-1.094.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"></path>
                            <path
                                fill="#336791"
                                d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686z"
                            ></path>
                            <path
                                fill="#FFF"
                                d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28q.423.059.842.058c3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35m88.784.073c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863q.387 0 .78-.054c2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225"
                            ></path>
                            <path
                                fill="#FFF"
                                d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a530 530 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92q.016.2.035.398a118 118 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36m-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a37 37 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813m-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171 171 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016M66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36 36 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426m22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526m69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.4 15.4 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473q.469.383 1.032.756c6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772"
                            ></path>
                        </g>
                    </svg>)
                },
                {
                    name: "MongoDB",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-12 h-12">
                        <g id="SVGRepo_iconCarrier">
                            <circle cx="512" cy="512" r="512" fill="#13aa52"></circle>
                            <path
                                fill="#fff"
                                d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a727 727 0 0 1 13-78.53l1-.65a204.5 204.5 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347 347 0 0 0-5.05-56.76M512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53"
                            ></path>
                        </g>
                    </svg>)
                },
            ]
        },
        {
            name: "Mobile MVPs",
            technologies: [
                {
                    name: "React Native", icon: (<svg viewBox="0 0 128 128" className="w-14 h-14">
                        <circle cx="64" cy="64" r="11.4" fill="#61dafb"/>
                        <g stroke="#61dafb" strokeWidth="6" fill="none">
                            <ellipse rx="56" ry="22" cx="64" cy="64"/>
                            <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(60 64 64)"/>
                            ;
                            <ellipse rx="56" ry="22" cx="64" cy="64" transform="rotate(120 64 64)"/>
                        </g>
                    </svg>)
                },
                {
                    name: "Flutter",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 32 32">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#40d0fd"
                                d="m15.383 18.316 3.361-3.274h8.349l-7.396 7.396z"
                            ></path>
                            <path
                                fill="#41d0fd"
                                d="m4.907 16.125 4.199 4.299L27.093 2.287h-8.349z"
                                style={{isolation: "isolate"}}
                            ></path>
                            <path
                                fill="#1fbcfd"
                                d="m11.176 22.479 4.259 4.196 4.262-4.237-4.314-4.122z"
                            ></path>
                            <path
                                fill="#095a9d"
                                d="m15.435 26.675 4.262-4.237 7.292 7.375h-8.396z"
                            ></path>
                            <path fill="#0e5199" d="m15.435 26.675 3.971-1.321-1.338-1.297z"></path>
                        </g>
                    </svg>)
                },
                {
                    name: "Swift",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="-252 343.9 106.1 106.1">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#F05138"
                                d="M-145.9 373.3v-3.2c-.1-2.3-.2-4.7-.6-7s-1.1-4.5-2.2-6.6-2.4-4-4.1-5.6c-1.7-1.7-3.6-3-5.6-4.1-2.1-1.1-4.3-1.8-6.6-2.2s-4.6-.6-7-.6h-53.7c-.6 0-1.2 0-1.7.1-1.7.1-3.5.2-5.2.5s-3.4.8-5 1.4c-.5.2-1.1.5-1.6.7-1.6.8-3 1.8-4.4 2.9-.4.4-.9.8-1.3 1.2-1.7 1.7-3 3.6-4.1 5.6-1.1 2.1-1.8 4.3-2.2 6.6s-.5 4.6-.6 7v53.7c.1 2.3.2 4.7.6 7s1.1 4.5 2.2 6.6 2.4 4 4.1 5.6c1.7 1.7 3.6 3 5.6 4.1 2.1 1.1 4.3 1.8 6.6 2.2s4.6.6 7 .6h53.7c2.3-.1 4.7-.2 7-.6s4.5-1.1 6.6-2.2 4-2.4 5.6-4.1c1.7-1.7 3-3.6 4.1-5.6 1.1-2.1 1.8-4.3 2.2-6.6s.6-4.6.6-7v-50.4"
                            ></path>
                            <path
                                fill="#FFF"
                                d="m-168 409.4.3-1.2c4.4-17.5-6.3-38.3-24.5-49.2 8 10.8 11.5 23.9 8.4 35.3-.3 1-.6 2-1 3-.4-.3-.9-.6-1.6-.9 0 0-18.1-11.2-37.7-30.9-.5-.5 10.5 15.7 22.9 28.8-5.9-3.3-22.2-15.2-32.6-24.6 1.3 2.1 2.8 4.2 4.4 6.1 8.6 11 19.9 24.5 33.4 34.9-9.5 5.8-22.9 6.3-36.2 0-3.3-1.5-6.4-3.4-9.3-5.5 5.6 9 14.3 16.8 24.9 21.4 12.6 5.4 25.2 5.1 34.5.1 0 0 .1 0 .1-.1.4-.2.8-.5 1.2-.7 4.5-2.3 13.3-4.6 18.1 4.6 1.4 2.1 3.9-9.9-5.3-21.1"
                            ></path>
                        </g>
                    </svg>)
                },
                {
                    name: "Kotlin", icon: (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        data-name="Layer 1"
                        viewBox="0 0 125 125"
                    >
                        <g id="SVGRepo_iconCarrier">
                            <defs>
                                <linearGradient
                                    id="b"
                                    x1="-21.045"
                                    x2="95.274"
                                    y1="114.925"
                                    y2="-1.395"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0.108" stopColor="#c757bc"></stop>
                                    <stop offset="0.173" stopColor="#cd5ca9"></stop>
                                    <stop offset="0.492" stopColor="#e8744f"></stop>
                                    <stop offset="0.716" stopColor="#f88316"></stop>
                                    <stop offset="0.823" stopColor="#ff8900"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="a"
                                    x1="39.893"
                                    x2="96.589"
                                    y1="147.552"
                                    y2="90.856"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0.296" stopColor="#00afff"></stop>
                                    <stop offset="0.694" stopColor="#5282ff"></stop>
                                    <stop offset="1" stopColor="#945dff"></stop>
                                </linearGradient>
                                <linearGradient
                                    xlinkHref="#a"
                                    id="c"
                                    x1="-1.501"
                                    x2="38.272"
                                    y1="34.501"
                                    y2="-5.273"
                                ></linearGradient>
                            </defs>
                            <path
                                fill="url(#b)"
                                d="M62.759 0 0 65.999V125l62.669-62.779L125 0z"
                            ></path>
                            <path
                                fill="url(#a)"
                                d="m0 125 62.669-62.778L125 125z"
                                data-name="&lt;Path&gt;"
                            ></path>
                            <path fill="url(#c)" d="M0 0h62.759L0 65.999z"></path>
                        </g>
                    </svg>)
                }
            ]
        },
        {
            name: "Infrastructure",
            technologies: [
                {
                    name: "AWS",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-8 h-8">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#252F3E"
                                d="M4.51 7.687q0 .297.058.475.061.175.17.384a.23.23 0 0 1 .037.123q.001.08-.1.16l-.336.224a.26.26 0 0 1-.138.048q-.08-.001-.16-.074a1.7 1.7 0 0 1-.192-.251 4 4 0 0 1-.165-.315q-.622.737-1.564.737-.672 0-1.064-.385-.393-.384-.394-1.025-.001-.682.484-1.1c.325-.278.756-.416 1.304-.416q.27.002.564.042c.197.027.4.07.612.118v-.39q-.001-.608-.25-.854-.254-.248-.868-.246-.279-.001-.574.07a4 4 0 0 0-.575.181 2 2 0 0 1-.186.07.3.3 0 0 1-.085.016q-.112.001-.112-.166v-.262c0-.085.01-.15.037-.186a.4.4 0 0 1 .15-.113q.278-.144.67-.24.39-.103.83-.101.948 0 1.394.432.44.432.442 1.314v1.73h.01zm-2.161.811q.261 0 .548-.096c.191-.064.362-.182.505-.342a.85.85 0 0 0 .181-.341c.032-.129.054-.283.054-.465V7.03a4 4 0 0 0-.49-.09 4 4 0 0 0-.5-.033c-.357 0-.618.07-.793.214q-.262.215-.26.614-.002.374.196.566.192.198.559.197m4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a1 1 0 0 1-.049-.214c0-.085.043-.133.128-.133h.522q.15-.001.207.053c.043.032.075.107.107.208l.894 3.535.83-3.535q.038-.16.1-.208a.37.37 0 0 1 .214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.46.46 0 0 1 .107-.208.35.35 0 0 1 .208-.053h.495c.085 0 .133.043.133.133q-.002.04-.01.086a1 1 0 0 1-.038.133l-1.283 4.127q-.048.16-.111.209a.34.34 0 0 1-.203.053h-.457q-.15.001-.213-.053c-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439q-.038.159-.1.213c-.043.038-.118.054-.213.054h-.458zm6.838.144a3.5 3.5 0 0 1-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.4.4 0 0 1-.031-.149v-.272q.001-.167.122-.166a.3.3 0 0 1 .096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064q.505 0 .777-.176a.57.57 0 0 0 .277-.508.52.52 0 0 0-.144-.373q-.144-.152-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.27 1.27 0 0 1-.266-.774q0-.336.143-.593c.096-.17.224-.32.384-.438a1.7 1.7 0 0 1 .553-.277c.213-.064.436-.091.67-.091.118 0 .24.005.357.021a3.4 3.4 0 0 1 .649.145q.143.048.224.096a.5.5 0 0 1 .16.133.3.3 0 0 1 .047.176v.251q-.001.17-.122.171a.6.6 0 0 1-.202-.064 2.4 2.4 0 0 0-1.022-.208c-.303 0-.543.048-.708.15q-.249.148-.25.475 0 .225.16.379c.106.101.303.202.585.293l.756.24q.576.184.825.513.246.33.244.748 0 .345-.138.619a1.4 1.4 0 0 1-.388.47q-.247.197-.591.299a2.5 2.5 0 0 1-.761.112"
                            ></path>
                            <g fill="#F90" fillRule="evenodd" clipRule="evenodd">
                                <path
                                    d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406"></path>
                                <path
                                    d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z"></path>
                            </g>
                        </g>
                    </svg>)
                },
                {
                    name: "Azure",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 16 16">
                            <path
                                id="SVGRepo_iconCarrier"
                                fill="#0089D6"
                                d="m7.47 12.412 3.348-.592.031-.007-1.722-2.049a292 292 0 0 1-1.723-2.058c0-.01 1.779-4.909 1.789-4.926a789 789 0 0 1 2.934 5.066l2.95 5.115.023.039-10.948-.001zM.9 11.788c0-.003.811-1.412 1.803-3.131L4.507 5.53l2.102-1.764C7.765 2.797 8.714 2 8.717 2a.4.4 0 0 1-.033.085L6.4 6.981l-2.24 4.808-1.63.002c-.897.001-1.63 0-1.63-.003"
                            ></path>
                        </svg>)
                },
                {
                    name: "Google Cloud",
                    icon: (<svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 16 16">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#EA4335"
                                d="m10.313 5.376 1.887-1.5-.332-.414a5.94 5.94 0 0 0-5.586-1.217 5.89 5.89 0 0 0-3.978 4.084c-.03.113.312-.098.463-.056l2.608-.428s.127-.124.201-.205c1.16-1.266 3.126-1.432 4.465-.354z"
                            ></path>
                            <path
                                fill="#4285F4"
                                d="M13.637 6.3a5.84 5.84 0 0 0-1.77-2.838l-1.83 1.82a3.23 3.23 0 0 1 1.193 2.564v.323c.9 0 1.63.725 1.63 1.62 0 .893-.73 1.619-1.63 1.619l-3.257-.003-.325.035v2.507l.325.053h3.257a4.23 4.23 0 0 0 4.08-2.962A4.2 4.2 0 0 0 13.636 6.3z"
                            ></path>
                            <path
                                fill="#34A853"
                                d="M4.711 13.999H7.97v-2.594H4.71c-.232 0-.461-.066-.672-.161l-.458.14-1.313 1.297-.114.447a4.25 4.25 0 0 0 2.557.87z"
                            ></path>
                            <path
                                fill="#FBBC05"
                                d="M4.711 5.572A4.23 4.23 0 0 0 .721 8.44a4.21 4.21 0 0 0 1.433 4.688l1.89-1.884a1.617 1.617 0 0 1 .44-3.079 1.63 1.63 0 0 1 1.714.936l1.89-1.878A4.24 4.24 0 0 0 4.71 5.572z"
                            ></path>
                        </g>
                    </svg>)
                },
                {
                    name: "Github Action", icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path
                            id="SVGRepo_iconCarrier"
                            fillRule="evenodd"
                            d="M3.04 10h2.58l.65 1H2.54l-.5-.5v-9l.5-.5h12l.5.5v4.77l-1-1.75V2h-11zm5.54 1-1.41 3.47h2.2L15 8.7 14.27 7h-1.63l.82-1.46L12.63 4H9.76l-.92.59-2.28 5L7.47 11zm1.18-6h2.87l-1.87 3h3.51l-5.76 5.84L10.2 10H7.47zM6.95 7H4.04V6H7.4zm-.9 2H4.04V8H6.5z"
                            clipRule="evenodd"
                        ></path>
                    </svg>)
                },
                {
                    name: "Gitlab", icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path
                            id="SVGRepo_iconCarrier"
                            fillRule="evenodd"
                            d="M3.04 10h2.58l.65 1H2.54l-.5-.5v-9l.5-.5h12l.5.5v4.77l-1-1.75V2h-11zm5.54 1-1.41 3.47h2.2L15 8.7 14.27 7h-1.63l.82-1.46L12.63 4H9.76l-.92.59-2.28 5L7.47 11zm1.18-6h2.87l-1.87 3h3.51l-5.76 5.84L10.2 10H7.47zM6.95 7H4.04V6H7.4zm-.9 2H4.04V8H6.5z"
                            clipRule="evenodd"
                        ></path>
                    </svg>)
                },
                {
                    name: "Sentry", icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#FB4226"
                                d="M18.242 4.352a2.53 2.53 0 0 0-3.534-.986 2.64 2.64 0 0 0-.946.986l-3.688 6.658.941.563a18.97 18.97 0 0 1 9 15.179h-2.589A16.24 16.24 0 0 0 9.711 13.9l-.941-.561-3.436 6.226.941.562a9.12 9.12 0 0 1 4.225 6.625H4.587a.436.436 0 0 1-.434-.437.46.46 0 0 1 .058-.231l1.648-2.976a5.9 5.9 0 0 0-1.881-1.119l-1.631 2.969a2.76 2.76 0 0 0 .953 3.683A2.5 2.5 0 0 0 4.587 29h8.138v-1.122a11.37 11.37 0 0 0-4.467-9.1l1.3-2.338A14.09 14.09 0 0 1 15.3 27.868v1.126h6.9V27.87a21.34 21.34 0 0 0-9.19-17.66l2.618-4.733a.42.42 0 0 1 .583-.162.43.43 0 0 1 .156.162L27.78 26.084a.456.456 0 0 1-.155.608.4.4 0 0 1-.221.06h-2.67c.033.752.037 1.5 0 2.252h2.679A2.644 2.644 0 0 0 30 26.307a2.8 2.8 0 0 0-.346-1.347Z"
                            ></path>
                        </g>
                    </svg>)
                },
                {
                    name: "LogRocket", icon: (  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="50"
                        fill="none"
                        viewBox="0 0 32 50"
                    >
                        <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M10.677 6.065A18.16 18.16 0 0 1 15.946.624a17.75 17.75 0 0 1 5.2 5.335 26.9 26.9 0 0 1 5.055 16.86c1.097.885 2.227 1.734 3.306 2.636a5.97 5.97 0 0 1 1.904 5.5c-.522 2.514-1.02 5.032-1.572 7.54a2.094 2.094 0 0 1-3.186 1.052c-1.771-1.423-3.496-2.894-5.26-4.318a8.08 8.08 0 0 1-4.985 2.164 8.07 8.07 0 0 1-5.837-2.103c-1.268.933-2.447 2.054-3.687 3.056-.543.533-1.148 1-1.804 1.389a2.095 2.095 0 0 1-2.764-1.353c-.566-2.452-1.16-4.896-1.708-7.351a5.96 5.96 0 0 1 2.007-5.728 157 157 0 0 1 2.921-2.295c.273-.139.136-.45.15-.691a26.93 26.93 0 0 1 5-16.244m1.738 7.59a4.13 4.13 0 0 0 .36 5.473 4.545 4.545 0 0 0 6.214.128 4.135 4.135 0 0 0 1.097-4.542 4.4 4.4 0 0 0-3.69-2.743 4.48 4.48 0 0 0-3.983 1.682"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fill="#F1ECF6"
                            d="M10.119 40.896a1.043 1.043 0 0 1 1.544-.837 9.96 9.96 0 0 0 8.674 0 1.05 1.05 0 0 1 1.546.776q.012 2.303 0 4.605a1.038 1.038 0 0 1-1.622.752c-.46-.39-.875-.83-1.317-1.24-.702 1.313-1.36 2.645-2.067 3.954a1.052 1.052 0 0 1-1.746.011c-.708-1.312-1.364-2.652-2.08-3.964-.435.413-.85.851-1.312 1.24a1.04 1.04 0 0 1-1.62-.76c-.012-1.514 0-3.03 0-4.543"
                        ></path>
                    </svg>)
                },
                {
                    name: "Datadog", icon: (  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                        <path
                            id="SVGRepo_iconCarrier"
                            fill="#632CA6"
                            fillRule="evenodd"
                            d="m12.886 10.938-1.157-.767-.965 1.622-1.122-.33-.988 1.517.05.478 5.374-.996-.313-3.378zm-5.01-1.456.861-.12c.14.064.237.088.404.13.26.069.562.134 1.009-.092.104-.052.32-.251.408-.365l3.532-.644.36 4.388-6.05 1.097zm6.56-1.581-.348.067-.67-6.964L2.004 2.336l1.407 11.481 1.335-.195a3 3 0 0 0-.556-.576c-.393-.33-.254-.888-.022-1.24.307-.596 1.889-1.354 1.8-2.307-.033-.346-.088-.797-.407-1.106-.012.128.01.252.01.252s-.132-.169-.197-.398c-.065-.088-.116-.117-.185-.234-.05.136-.043.294-.043.294s-.107-.255-.125-.47a.8.8 0 0 0-.08.279s-.139-.403-.107-.62c-.064-.188-.252-.562-.199-1.412.348.245 1.115.187 1.414-.256.1-.147.167-.548-.05-1.337-.139-.506-.483-1.26-.618-1.546l-.016.012c.071.23.217.713.273.947.17.71.215.958.136 1.285-.068.285-.23.471-.642.68-.412.208-.958-.3-.993-.328-.4-.32-.709-.844-.744-1.098-.035-.278.16-.445.258-.672-.14.04-.298.112-.298.112s.188-.195.419-.364a2 2 0 0 0 .252-.188c-.146-.003-.264.002-.264.002s.243-.133.496-.23c-.185-.007-.362 0-.362 0s.544-.245.973-.424c.295-.122.583-.086.745.15.212.308.436.476.909.58.29-.13.379-.197.744-.297.321-.355.573-.401.573-.401s-.125.115-.158.297c.182-.145.382-.265.382-.265s-.078.096-.15.249l.017.025c.213-.129.463-.23.463-.23s-.072.091-.156.209c.16-.002.486.006.612.02.745.017.9-.8 1.185-.902.358-.129.518-.206 1.128.396.523.518.932 1.444.73 1.652-.171.172-.507-.068-.879-.534a2 2 0 0 1-.415-.911c-.059-.313-.288-.495-.288-.495s.133.297.133.56c0 .142.018.678.246.979-.022.044-.033.217-.058.25-.265-.323-.836-.554-.929-.622.315.26 1.039.856 1.317 1.428.263.54.108 1.035.24 1.164.039.037.566.698.668 1.03.177.58.01 1.188-.222 1.566l-.647.101c-.094-.026-.158-.04-.243-.09.047-.082.14-.29.14-.333l-.036-.065a2.7 2.7 0 0 1-.819.726c-.367.21-.79.177-1.065.092-.781-.243-1.52-.774-1.698-.914 0 0-.005.112.028.137.197.223.648.628 1.085.91l-.93.102.44 3.444c-.196.029-.226.042-.44.073-.187-.669-.547-1.105-.94-1.36-.347-.223-.825-.274-1.283-.183l-.03.034c.319-.033.695.014 1.08.26.38.24.685.863.797 1.238.144.479.244.991-.144 1.534-.275.386-1.08.6-1.73.138.174.281.409.51.725.554.469.064.914-.018 1.22-.334.262-.27.4-.836.364-1.432l.414-.06.15 1.069 6.852-.83zm-4.168-2.905c-.02.044-.05.073-.005.216l.003.008.007.019.02.042c.08.168.17.326.32.406q.057-.009.12-.013a.55.55 0 0 1 .284.047.6.6 0 0 0 .003-.13c-.01-.212.042-.573-.363-.762-.153-.072-.367-.05-.439.04l.034.007c.108.038.035.075.015.12zm1.134 1.978c-.053-.03-.301-.018-.475.003-.333.04-.691.155-.77.217-.143.111-.078.305.027.384.297.223.556.372.83.336.168-.022.317-.29.422-.534.072-.167.072-.348-.034-.406M8.461 5.259c.093-.09-.467-.207-.902.09-.32.221-.33.693-.024.96q.044.04.08.06a2.8 2.8 0 0 1 .809-.24c.065-.072.14-.2.121-.434-.025-.315-.263-.265-.084-.436"
                            clipRule="evenodd"
                        ></path>
                    </svg>)
                },
            ]
        },
    ];

    return (
        <div className="font-syne">
            <NextSeo
                title="MVP for Startups | Launch in 8-12 Weeks | 2BTech"
                description="Expert MVP for startups with fixed pricing and guaranteed timelines. Startup MVP development from $25K. Custom software development services for startups. Get free quote"
                canonical="https://2btech.com/services/mvp-development"
                openGraph={{
                    url: "https://2btech.com/services/mvp-development",
                    title: "MVP for Startups | Launch in 8-12 Weeks | 2BTech",
                    description: "Expert MVP for startups with fixed pricing and guaranteed timelines. Startup MVP development from $25K. Custom software development services for startups. Get free quote",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/mvp-development.webp",
                            width: 1200,
                            height: 630,
                            alt: "MVP for Startups | Launch in 8-12 Weeks | 2BTech",
                        },
                    ],
                    siteName: "2BTech",
                }}
                twitter={{
                    handle: "@2btech",
                    site: "@2btech",
                    cardType: "summary_large_image",
                }}
            />
            <WebPageJsonLd
                id="https://2btech.com/services/mvp-development"
                url="https://2btech.com/services/mvp-development"
                name="MVP for Startups | Launch in 8-12 Weeks | 2BTech"
                description="Expert MVP for startups with fixed pricing and guaranteed timelines. Startup MVP development from $25K. Custom software development services for startups. Get free quote"
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="Launch Your Product in 8-12 Weeks"
                description="Transform your unique challenges into competitive advantages with bespoke software development services. We create tailored solutions that scale with your growth"
                formLabel="Free MVP Development Services Consultation?"
                buttonText="Get Free MVP Qoute"
                TrustBar={() => (
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex flex-col sm:flex-row  items-center justify-start gap-6 text-sm sm:text-base  font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <Rocket className="w-5 h-5 text-blue-600"/>
                            <span>50+ MVPs Launched</span>
                        </div>
                        <div className="hidden sm:block w-[1px] h-6 bg-black"></div>
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500"/>
                            <span>8-12 Week Delivery</span>
                        </div>
                    </motion.div>
                )}
            />
            <AboutSection
                title="Fast MVP Builds That Win Investors and Customers"
                description="2BTech specializes in MVP for startups that need to move fast and prove their concept. Our startup MVP development process delivers market-ready products in 8-12 weeks, giving you the speed and quality to compete"
                descriptionTwo="We provide custom software development services for startups that understand your challenges: tight budgets, investor deadlines, and the pressure to validate product-market fit. Our MVP builds focus on core features that demonstrate value, gather real user feedback, and position you for Series A funding"
                descriptionThree="descriptionThree=Whether you're a first-time founder or serial entrepreneur, we've helped 50+ startups launch, iterate, and scale. From SaaS platforms to mobile apps, fintech solutions to healthcare tech, we build MVPs that open doors to customers, investors, and growth"
                src="/assets/services/mvp/about.svg"
                width={440}
            />
            <SubServicesSection
                heading="OUR MVP DEVELOPMENT SERVICES"
                headingHighlight="WHAT WE BUILD"
                services={servicesData}
            />
            <WhatIsSection
                heading="WHY CHOOSE 2BTECH FOR"
                highlight="YOUR MVP?"
                definitionOne={definitionOne}
                definitionTwo={definitionTwo}
                imageOne="/assets/services/mvp/missing.svg"
                imageTwo="/assets/services/mvp/technical.svg"
            />
            <Banner
                title="Kickstart Your MVP Project Today"
                description="From idea to launch, we build custom MVPs quickly and efficiently"
                src="/assets/services/mvp/mvpBanner.webp"
            />
            <TechStackServices
                techCategories={techCategories}
            />
            <MVPComparison/>
            <OurFlowSection
                headingHighlight="MVP Process"
                heading="Five-Phase"
                services={[
                    {
                        title: "Discovery & Strategy",
                        duration: "1 Week",
                        keyPoints: [
                            {
                                title: "Product Workshop",
                                detail:
                                    "We run intensive sessions to clarify your vision, identify your core value proposition, and define success metrics.",
                            },
                            {
                                title: "Feature Prioritization",
                                detail:
                                    "Using MoSCoW method, we separate must-haves from nice-to-haves. Build only what validates your hypothesis.",
                            },
                            {
                                title: "Technical Planning",
                                detail:
                                    "Select optimal tech stack, plan architecture for scalability, and create detailed specifications.",
                            },
                            {
                                title: "Deliverables",
                                detail:
                                    "Product requirements document, feature priority matrix, project timeline, cost breakdown.",
                            },
                        ],
                    },
                    {
                        title: "Design Sprint",
                        duration: "1-2 Weeks",
                        keyPoints: [
                            {
                                title: "User Journey Mapping",
                                detail:
                                    "Map critical user flows that demonstrate your core value. Focus on the 'aha moment' experience.",
                            },
                            {
                                title: "Wireframing & Prototyping",
                                detail:
                                    "Create clickable prototypes to visualize the MVP before coding. Test and refine early.",
                            },
                            {
                                title: "UI/UX Design",
                                detail:
                                    "Design interfaces that convert. Modern, intuitive, and aligned with your brand.",
                            },
                            {
                                title: "Deliverables",
                                detail:
                                    "User flow diagrams, interactive prototypes, design system, final UI screens.",
                            },
                        ],
                    },
                    {
                        title: "Development Sprints",
                        duration: "4-8 Weeks",
                        keyPoints: [
                            {
                                title: "Agile Development",
                                detail:
                                    "Two-week sprints with regular demos. See progress weekly, provide feedback continuously.",
                            },
                            {
                                title: "Core Features First",
                                detail:
                                    "Build and test your most important features first. Ensure they work perfectly before moving forward.",
                            },
                            {
                                title: "Quality Assurance",
                                detail:
                                    "Continuous testing catches bugs early. Your MVP launches stable and performant.",
                            },
                            {
                                title: "Deliverables",
                                detail:
                                    "Working software after each sprint, test reports, code documentation.",
                            },
                        ],
                    },
                    {
                        title: "Launch & Deployment",
                        duration: "1 Week",
                        keyPoints: [
                            {
                                title: "Pre-Launch Testing",
                                detail:
                                    "Final QA, performance testing, and security review. Fix any issues before real users arrive.",
                            },
                            {
                                title: "Production Deployment",
                                detail:
                                    "Launch to cloud infrastructure (AWS/Azure/GCP) with monitoring and analytics configured.",
                            },
                            {
                                title: "Launch Support",
                                detail:
                                    "We monitor closely during launch week, ready to address any issues immediately.",
                            },
                            {
                                title: "Deliverables",
                                detail:
                                    "Live product, analytics dashboard, monitoring setup, launch documentation.",
                            },
                        ],
                    },
                    {
                        title: "Post-Launch Iteration",
                        duration: "Ongoing",
                        keyPoints: [
                            {
                                title: "User Feedback Collection",
                                detail:
                                    "Gather qualitative and quantitative feedback. Understand what's working and what needs improvement.",
                            },
                            {
                                title: "Data Analysis",
                                detail:
                                    "Track key metrics: user engagement, conversion rates, retention, and feature usage.",
                            },
                            {
                                title: "Rapid Iteration",
                                detail:
                                    "Make data-driven improvements quickly. Evolve your MVP based on real user behavior.",
                            },
                            {
                                title: "Deliverables",
                                detail:
                                    "Analytics reports, user feedback summaries, iteration roadmap.",
                            },
                        ],
                    },
                ]}
            />

            <FaqSection
                Faq={faqs}
            />
            <FinalCTASection
                heading="Ready to Launch Your MVP?"
                description="Schedule a free product strategy call. We'll discuss your idea, outline an MVP scope, provide timeline and cost estimate, and show you how to go from concept to launch in 8-12 weeks"
                features={[
                    "Feature prioritization workshop",
                    "Technical feasibility ",
                    "Timeline and cost breakdown",
                    "Go-to-market recommendations",
                    "No-obligation MVP ",
                    "Expert advice from seasoned"
                ]}
            />
            <Footer/>
        </div>
    );
}
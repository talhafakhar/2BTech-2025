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
import IndustriesSection from "@/components/services/SalesindustorySection";
import {
    Briefcase,
    Calculator,
    Cpu,
    Factory,
    Film,
    GraduationCap,
    Heart,
    Rocket,
    ShoppingCart,
    Star,
    TrendingUp
} from "lucide-react";
import {easeInOut, motion} from "framer-motion";
import SubServicesSection from "@/components/services/CustomSoftwareServicesSection";
import TechStackServices from "@/components/services/ServicesStackSection";
import CloudPlatformsSection from "@/components/services/CloudPlatformsSection ";
import CloudMigrationProcess from "@/components/services/cloudFlowSection";

export default function CloudMigration() {
    const faqs = [
        {
            id: 1,
            question: "What are cloud migration services?",
            answer:
                "Cloud migration services involve moving your applications, data, and infrastructure from on-premises to platforms like AWS, Azure, or Google Cloud. We handle assessment, planning, execution, and optimization for seamless transitions.",
        },
        {
            id: 2,
            question: "How long does cloud migration take?",
            answer:
                "Small migrations: 4–6 weeks. Mid-size: 8–12 weeks. Enterprise: 12–24 weeks. Timeline depends on application complexity, data volume, and migration approach.",
        },
        {
            id: 3,
            question: "How much does it cost to migrate to AWS or Azure?",
            answer:
                "Migration costs range from $15,000 for small businesses to $500,000+ for large enterprises. Pricing depends on application count, data volume, and complexity. Our Azure and AWS migrations are competitively priced.",
        },
        {
            id: 4,
            question: "Will there be downtime during migration?",
            answer:
                "Most migrations have zero or minimal downtime using phased approaches and parallel running. Any downtime is scheduled during off-peak hours.",
        },
        {
            id: 5,
            question: "What's the difference between AWS and Azure?",
            answer:
                "AWS offers the broadest services and is great for web apps and ML. Azure integrates better with Microsoft tools and hybrid clouds. We help you choose the best fit for your workloads.",
        },
        {
            id: 6,
            question: "How do you ensure security during cloud migration?",
            answer:
                "We use encryption in transit and at rest, strict access controls, and compliance frameworks. All migrations meet SOC 2, HIPAA, or PCI DSS standards.",
        },
        {
            id: 7,
            question: "What is cloud cost optimization?",
            answer:
                "It’s about reducing unnecessary cloud spend through rightsizing, reserved instances, spot usage, and FinOps. Clients see 30–50% savings on average.",
        },
        {
            id: 8,
            question: "Can you migrate to multiple clouds?",
            answer:
                "Yes. We support AWS, Azure, and Google Cloud together for flexibility, redundancy, and vendor independence.",
        },
        {
            id: 9,
            question: "Do you provide cloud infrastructure services after migration?",
            answer:
                "Yes. We offer ongoing managed cloud services including monitoring, optimization, security, and support as your extended cloud team.",
        },
        {
            id: 10,
            question: "What if the migration doesn't work?",
            answer:
                "Every migration includes a rollback plan. We test thoroughly, maintain parallel environments, and ensure zero data loss during cutover.",
        },
    ];
    const definitionOne = [
        {
            title: "Scalability & Flexibility",
            description:
                "Scale resources up or down instantly based on demand. No more over-provisioning or capacity constraints.",
        },
        {
            title: "Cost Optimization",
            description:
                "Reduce capital expenditure on hardware. Pay only for resources you use with cloud cost optimization strategies.",
        },
        {
            title: "Enhanced Performance",
            description:
                "Leverage global infrastructure, CDNs, and cutting-edge technology for faster application performance.",
        },
    ];
    const definitionTwo = [
        {
            title: "Business Continuity",
            description:
                "Built-in redundancy, automated backups, and disaster recovery ensure your business never stops.",
        },
        {
            title: "Innovation Speed",
            description:
                "Deploy new services in minutes, not months. Accelerate time-to-market for new products and features.",
        },
        {
            title: "Global Reach",
            description:
                "Deploy applications across multiple regions worldwide, serving customers with low latency.",
        },
    ];
    const industriesData = [
        {
            icon: Heart,
            title: "Healthcare",
            description: "HIPAA-compliant cloud migrations and secure infrastructure",
            color: "from-blue-50 to-blue-100"
        },
        {
            icon: TrendingUp,
            title: "Financial Services",
            description: "PCI DSS and SOC 2 compliant cloud solutions",
            color: "from-blue-100 to-blue-50"
        },
        {
            icon: ShoppingCart,
            title: "E-commerce",
            description: "Scalable cloud infrastructure for high-traffic sites",
            color: "from-blue-50 to-blue-100"
        },
        {
            icon: Factory,
            title: "Manufacturing",
            description: "IoT integration and cloud-based ERP systems",
            color: "from-blue-100 to-blue-50"
        },
        {
            icon: GraduationCap,
            title: "Education",
            description: "Scalable learning platforms and student data management",
            color: "from-blue-50 to-blue-100"
        },
        {
            icon: Film,
            title: "Media & Entertainment",
            description: "Content delivery and streaming infrastructure",
            color: "from-blue-100 to-blue-50"
        },
        {
            icon: Cpu,
            title: "SaaS Companies",
            description: "Multi-tenant architectures and global deployment",
            color: "from-blue-50 to-blue-100"
        },
        {
            icon: Briefcase,
            title: "Professional Services",
            description: "Collaboration tools and client portal hosting",
            color: "from-blue-100 to-blue-50"
        }
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
            title: "Cloud Migration Approaches",
            description:
                "Select the right migration strategy to modernize your infrastructure while minimizing risk and downtime.",
            keyFeatures: [
                "Lift and Shift (Rehost): Move applications as-is to cloud for quick wins",
                "Replatform: Minor optimizations during migration for better cloud fit",
                "Refactor: Redesign applications for cloud-native architecture",
                "Rebuild: Completely rewrite applications using modern cloud services",
                "Replace: Migrate to SaaS alternatives where appropriate",
            ],
            benefits: [
                "Zero or minimal downtime",
                "Data integrity guaranteed",
                "Security and compliance maintained",
                "Performance testing and optimization",
                "Rollback plan for risk mitigation",
                "Post-migration support included",
            ],
        },
        {
            title: "What We Migrate",
            description:
                "Comprehensive migration coverage across workloads, applications, and infrastructure components.",
            keyFeatures: [
                "Enterprise applications and workloads",
                "Databases (SQL Server, Oracle, MySQL, PostgreSQL)",
                "File storage and backup systems",
                "Email and collaboration tools",
                "Development and testing environments",
                "Disaster recovery infrastructure",
            ],
        },
        {
            title: "AWS Migration Services",
            description:
                "Expert AWS migration services leveraging the full power of Amazon Web Services. Certified AWS professionals following best practices for secure, scalable migrations.",
            keyFeatures: [
                "Compute: EC2, Lambda, ECS, EKS",
                "Storage: S3, EBS, EFS, Glacier",
                "Database: RDS, Aurora, DynamoDB, Redshift",
                "Networking: VPC, Route 53, CloudFront, Load Balancing",
                "Security: IAM, KMS, Secrets Manager, WAF",
                "Migration Tools: Migration Hub, DMS, SMS",
            ],
            process: [
                "Assessment using AWS Migration Evaluator",
                "Architecture design with Well-Architected Framework",
                "Pilot migration for validation",
                "Phased migration using AWS DMS and SMS",
                "Optimization and cost management",
            ],
            benefits: [
                "Largest global cloud provider",
                "Broadest service portfolio (200+ services)",
                "Enterprise-grade security and compliance",
                "Pay-as-you-go pricing with reserved instances",
                "Mature ecosystem and integrations",
            ],
        },
        {
            title: "Azure Migration Services",
            description:
                "End-to-end Azure migration for Microsoft-centric enterprises. Seamless integration with Microsoft ecosystem and hybrid capabilities.",
            keyFeatures: [
                "Compute: Virtual Machines, App Service, AKS",
                "Storage: Blob, File, Archive Storage",
                "Database: Azure SQL, Cosmos DB, PostgreSQL, MySQL",
                "Hybrid: Azure Arc, Azure Stack",
                "AI & Analytics: Azure AI, Synapse, Machine Learning",
                "Migration Tools: Azure Migrate, DMS",
            ],
            advantages: [
                "Native Microsoft integration",
                "Hybrid capabilities with Azure Arc",
                "Strong enterprise SLAs",
                "90+ global compliance certifications",
                "Cost-effective licensing via Azure Hybrid Benefit",
            ],
            perfectFor: [
                "Windows Server & SQL Server workloads",
                ".NET and Microsoft stack applications",
                "Hybrid cloud requirements",
                "Active Directory integration",
                "Microsoft 365 environments",
            ],
        },
        {
            title: "Cloud Consulting Services",
            description:
                "Strategic cloud consulting aligning technology with business goals. From readiness assessments to architecture design and compliance.",
            keyFeatures: [
                "Cloud Strategy & Roadmap",
                "Cloud Readiness Assessment",
                "Architecture Design",
                "TCO Analysis",
                "Vendor Selection (AWS, Azure, GCP)",
                "Compliance & Security Planning",
            ],
        },
        {
            title: "Cloud Infrastructure Services",
            description:
                "Build and manage modern cloud infrastructure using automation, DevOps, and infrastructure as code for performance and reliability.",
            keyFeatures: [
                "Cloud Architecture & Multi-tier Designs",
                "Microservices & Containerized Environments",
                "Serverless Architectures",
                "High Availability & Disaster Recovery",
                "Infrastructure as Code (Terraform, CloudFormation, ARM)",
                "CI/CD Automation & Monitoring",
                "Networking & Security (VPC, VPN, WAF)",
            ],
        },
        {
            title: "Cloud Cost Optimization",
            description:
                "Reduce cloud costs by 30–50% through rightsizing, automation, and FinOps implementation. Achieve measurable ROI within months.",
            keyFeatures: [
                "Resource Rightsizing (20–40% savings)",
                "Reserved Instances & Savings Plans (40–60% discounts)",
                "Spot Instances for Non-Critical Workloads (up to 90% savings)",
                "Storage Optimization & Lifecycle Policies",
                "Auto-Scaling and Off-Hours Shutdown",
                "Real-Time Cost Monitoring & Alerts",
                "FinOps Implementation & Accountability",
            ],
            results: [
                "30–50% reduction in cloud spend",
                "$50K–$500K+ annual savings",
                "ROI in 2–3 months",
            ],
        },
        {
            title: "Multi-Cloud & Hybrid Cloud",
            description:
                "Design and manage multi-cloud or hybrid environments for flexibility, resilience, and cost control.",
            keyFeatures: [
                "Avoid vendor lock-in with multi-cloud strategy",
                "Use best services from each provider",
                "Achieve geographic redundancy",
                "Hybrid connectivity with on-prem infrastructure",
                "Edge computing and workload portability",
            ],
            technologies: [
                "Kubernetes for portability",
                "Terraform for multi-cloud provisioning",
                "Service Mesh for cross-cloud networking",
                "Unified monitoring and logging",
            ],
        },
    ];
    const techCategories = [
        {
            name: "Cloud Platforms",
            technologies: [
                {
                    name: "Amazon Web Services",
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
                    name: "Microsoft Azure",
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
                    name: "Google Cloud Platform",
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
                    name: "Alibaba Cloud",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.988 21.273c-1.203.055-1.081-.574-.377-1.542 1.649-2.209 4.774-5.293 4.881-7.475.189-2.853-2.678-3.781-5.625-3.754a18.3 18.3 0 0 0-5.75 1.174l.126-.042c-4.242 1.38-7.731 4.094-10.058 7.639l-.044.072C.045 20.442.735 23.402 5.156 23.498a17.4 17.4 0 0 0 7.983-2.297l-.085.045c.012 0-6.356 1.816-8.695.479l-.01-.003a1.02 1.02 0 0 1-.571-.85v-.003c-.015-1.106 1.824-2.252 2.853-2.62v-1.916a6.6 6.6 0 0 0 2.442.457 6.73 6.73 0 0 0 4.35-1.589l-.01.008a1.6 1.6 0 0 1 .055.564v-.006h.464q.006-.06.006-.131c0-.279-.082-.539-.224-.756l.003.005a1.42 1.42 0 0 0-1.141-.65h-.002a1.7 1.7 0 0 1 .657.576l.004.006a6.15 6.15 0 0 1-3.978 1.448 6.2 6.2 0 0 1-1.895-.295l.044.012 1.512-1.5-.42-1.092c2.766-1.061 6.047-1.965 9.434-2.558l.328-.047-.932-.78.486-.3c2.512.71 4.155 1.231 4.065 2.563a3.3 3.3 0 0 1-.261.784l.009-.02a33 33 0 0 1-3.801 4.888l.016-.017a19 19 0 0 0-1.516 1.892l-.04.06a3.43 3.43 0 0 0-.687 1.761l-.001.014c.054 4.379 12.914-2.049 15.401-3.753-3.496 1.72-7.56 2.923-11.848 3.383l-.16.014z"></path>
                        </g>
                    </svg>)
                },
                {
                    name: "Oracle Cloud",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-14 h-14">
                        <path
                            id="SVGRepo_iconCarrier"
                            fill="red"
                            fillRule="evenodd"
                            d="M7.957 18.912A6.953 6.953 0 0 1 1 11.962 6.963 6.963 0 0 1 7.957 5h8.087A6.96 6.96 0 0 1 23 11.962a6.95 6.95 0 0 1-6.956 6.95zm7.907-2.453a4.497 4.497 0 0 0 4.503-4.497 4.507 4.507 0 0 0-4.503-4.508H8.136a4.507 4.507 0 0 0-4.503 4.508 4.5 4.5 0 0 0 4.503 4.497z"
                        ></path>
                    </svg>)
                },
            ]
        },
        {
            name: "Containers & Orchestration",
            technologies: [
                {
                    name: "Docker",
                    icon: (
                        <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                            <path
                                id="SVGRepo_iconCarrier"
                                fill="#2396ED"
                                d="m12.342 4.536.15-.227.262.159.116.083c.28.216.869.768.996 1.684q.335-.06.673-.06c.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.04 2.04 0 0 1-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.1 7.1 0 0 1-1.74 1.488 8 8 0 0 1-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.3 8.3 0 0 1-.461-2.83.516.516 0 0 1 .432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 0 1 .3-.81zM2.89 5.784l.04.007a.13.13 0 0 1 .077.082l.006.04v1.315l-.006.041a.13.13 0 0 1-.078.082l-.039.006H1.478a.124.124 0 0 1-.117-.088l-.007-.04V5.912l.007-.04a.13.13 0 0 1 .078-.083l.039-.006H2.89zm1.947 0 .039.007a.13.13 0 0 1 .078.082l.006.04v1.315l-.007.041a.13.13 0 0 1-.078.082l-.039.006H3.424a.125.125 0 0 1-.117-.088L3.3 7.23V5.913a.13.13 0 0 1 .085-.123l.039-.007zm1.976 0 .039.007a.13.13 0 0 1 .077.082l.007.04v1.315l-.007.041a.13.13 0 0 1-.078.082l-.039.006H5.4a.124.124 0 0 1-.117-.088l-.006-.04V5.912l.006-.04a.13.13 0 0 1 .078-.083l.039-.006h1.413zm1.952 0 .039.007a.13.13 0 0 1 .078.082l.007.04v1.315a.13.13 0 0 1-.085.123l-.04.006H7.353a.124.124 0 0 1-.117-.088l-.006-.04V5.912l.006-.04a.13.13 0 0 1 .078-.083l.04-.006h1.412zm1.97 0 .039.007a.13.13 0 0 1 .078.082l.006.04v1.315a.13.13 0 0 1-.085.123l-.039.006H9.322a.124.124 0 0 1-.117-.088l-.006-.04V5.912l.006-.04a.13.13 0 0 1 .078-.083l.04-.006h1.411zm-5.9-1.892.04.007a.13.13 0 0 1 .077.081l.007.041v1.315a.13.13 0 0 1-.085.123l-.039.007H3.424a.125.125 0 0 1-.117-.09l-.007-.04V4.021a.13.13 0 0 1 .085-.122l.039-.007h1.412zm1.976 0 .04.007a.13.13 0 0 1 .077.081l.007.041v1.315a.13.13 0 0 1-.085.123l-.039.007H5.4a.125.125 0 0 1-.117-.09l-.006-.04V4.021l.006-.04a.13.13 0 0 1 .078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 0 1-.085.123l-.04.007h-1.41a.125.125 0 0 1-.117-.09l-.006-.04V4.021l.006-.04a.13.13 0 0 1 .078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 0 1-.085.123l-.04.006h-1.41a.124.124 0 0 1-.117-.088l-.006-.04V2.128l.006-.04a.13.13 0 0 1 .078-.082L7.353 2h1.412z"
                            ></path>
                        </svg>)
                },
                {
                    name: "Kubernetes",
                    icon: (
                        <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill="#326DE6"
                                    d="M4.5 14.569c.214.278.539.431.874.431h5.251c.335 0 .66-.165.875-.434l3.258-4.178c.214-.278.288-.633.214-.978l-1.165-5.207a1.13 1.13 0 0 0-.606-.777l-4.714-2.31A1.06 1.06 0 0 0 8.002 1c-.168 0-.335.038-.485.115l-4.715 2.32a1.13 1.13 0 0 0-.605.777L1.032 9.42c-.084.345 0 .7.214.978l3.254 4.17z"
                                ></path>
                                <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M12.741 9.128q.147.003.293.024l.058.013.031.008a.31.31 0 0 1 .26.371.306.306 0 0 1-.396.223h-.004l-.003-.001-.003-.002-.03-.006-.05-.01a3 3 0 0 1-.274-.106 3 3 0 0 0-.533-.157.24.24 0 0 0-.171.064l-.131-.023a3.97 3.97 0 0 1-1.764 2.212q.022.063.051.123a.24.24 0 0 0-.023.18 3 3 0 0 0 .271.484q.09.117.164.244l.028.057.012.025a.306.306 0 0 1-.381.44.3.3 0 0 1-.172-.18l-.01-.02-.028-.058a3 3 0 0 1-.089-.28 3 3 0 0 0-.21-.512.24.24 0 0 0-.156-.095l-.03-.053-.035-.064a3.97 3.97 0 0 1-2.823-.007l-.07.125a.25.25 0 0 0-.132.064 2.1 2.1 0 0 0-.237.548 3 3 0 0 1-.088.28l-.025.05-.013.027v.001a.306.306 0 0 1-.421.173.31.31 0 0 1-.173-.314.3.3 0 0 1 .041-.12l.014-.03.026-.052q.074-.127.164-.244.162-.234.277-.496a.3.3 0 0 0-.028-.173l.056-.133A3.97 3.97 0 0 1 4.22 9.532l-.134.023a.34.34 0 0 0-.176-.062 3 3 0 0 0-.533.156q-.135.06-.274.105l-.05.011-.03.007H3.02l-.002.002h-.005a.308.308 0 0 1-.397-.349.31.31 0 0 1 .261-.245l.005-.001h.002l.006-.002c.024-.006.054-.014.076-.018q.146-.02.293-.023a3 3 0 0 0 .549-.09.4.4 0 0 0 .131-.133l.128-.037a3.94 3.94 0 0 1 .625-2.752l-.098-.087a.34.34 0 0 0-.062-.176 3 3 0 0 0-.455-.319 3 3 0 0 1-.254-.148l-.048-.038-.015-.013-.004-.003a.323.323 0 0 1-.076-.45.3.3 0 0 1 .244-.107.37.37 0 0 1 .213.08l.022.017q.026.02.046.037.108.101.202.213.188.206.412.372a.24.24 0 0 0 .182.018l.11.078a3.94 3.94 0 0 1 2.552-1.224l.008-.129a.33.33 0 0 0 .099-.158 3 3 0 0 0-.034-.553 3 3 0 0 1-.042-.29v-.087A.306.306 0 0 1 8 2.82a.31.31 0 0 1 .306.337v.087a3 3 0 0 1-.041.29 3 3 0 0 0-.035.553.24.24 0 0 0 .1.153v.007l.007.129c.967.088 1.87.522 2.54 1.223l.116-.082a.34.34 0 0 0 .186-.02q.224-.166.412-.373.094-.112.202-.213l.051-.04.017-.014a.307.307 0 1 1 .381.477l-.024.02q-.023.02-.043.034a3 3 0 0 1-.254.148 3 3 0 0 0-.455.32.24.24 0 0 0-.058.172l-.05.044-.058.053a3.95 3.95 0 0 1 .637 2.745l.123.036a.34.34 0 0 0 .133.132q.27.072.548.09M7.291 5.24q.16-.036.326-.056l-.09 1.6-.008.004a.27.27 0 0 1-.293.256.27.27 0 0 1-.135-.05l-.002.001-1.316-.93c.419-.41.945-.696 1.518-.825m1.618 1.75 1.308-.924a3.2 3.2 0 0 0-1.833-.882l.09 1.598h.002a.27.27 0 0 0 .294.256.27.27 0 0 0 .135-.05zm2.248 1.656L9.609 8.2l-.002-.006a.27.27 0 0 1-.185-.343.27.27 0 0 1 .08-.12L9.5 7.73l1.195-1.067c.366.594.527 1.29.46 1.983zM9.096 9.5l.618 1.49a3.15 3.15 0 0 0 1.275-1.598l-1.593-.269-.002.003a.26.26 0 0 0-.166.023.27.27 0 0 0-.13.348zm-.385 1.905c-.573.13-1.17.1-1.727-.088l.777-1.4h.001a.27.27 0 0 1 .475-.001h.006l.779 1.402a3 3 0 0 1-.311.087m-2.418-.422.611-1.474-.004-.006a.268.268 0 0 0-.297-.37L6.6 9.13l-1.579.267a3.16 3.16 0 0 0 1.272 1.586m-.997-4.32 1.201 1.071-.001.007a.269.269 0 0 1-.106.462l-.001.005-1.54.443a3.13 3.13 0 0 1 .447-1.988m2.95 1.154h-.492l-.307.38.11.476.443.213.442-.212.11-.476z"
                                    clipRule="evenodd"
                                ></path>
                            </g>
                        </svg>)
                },
                {
                    name: "Amazon ECS",
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
                    name: "Azure Container",
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
                    name: "Helm",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                            <path
                                id="SVGRepo_iconCarrier"
                                fill="#0F1689"
                                d="m4.807 4.377.016.015-.147.147a12 12 0 0 0-.314.324c-.197.213-.372.452-.389.52h.91a.13.13 0 0 0 .109-.049A4.1 4.1 0 0 1 7.778 4a4.14 4.14 0 0 1 3.317 1.336.11.11 0 0 0 .089.047l.595-.001h.295l.047-.009a5 5 0 0 0-.745-.864l.013-.013a3 3 0 0 0 .72-.823c.135-.213.237-.446.3-.69a.8.8 0 0 0 .022-.29c-.013-.132-.086-.243-.262-.222a.5.5 0 0 0-.103.023 1.1 1.1 0 0 0-.33.193 3.04 3.04 0 0 0-.922 1.31l-.014.03-.006.011-.16-.093c-.122-.07-.24-.14-.364-.202q-.27-.135-.553-.24a5.2 5.2 0 0 0-.982-.247q-.091-.014-.183-.032a3.15 3.15 0 0 0 .038-1.482 1.5 1.5 0 0 0-.147-.41.5.5 0 0 0-.163-.19.2.2 0 0 0-.225.002.4.4 0 0 0-.089.08.9.9 0 0 0-.153.284q-.102.297-.125.61a3.2 3.2 0 0 0 .083 1.073l.004.023a4.94 4.94 0 0 0-2.268.696l-.009-.007-.007-.007a3.2 3.2 0 0 0-.62-.96 1.8 1.8 0 0 0-.494-.397.8.8 0 0 0-.16-.062c-.177-.043-.298.049-.31.23l-.001.023v.016c-.007.14.028.272.074.402.166.464.439.856.792 1.196zm6.569 7.125q.375-.346.67-.76l-.004-.017h-.294q-.3.001-.6-.002a.22.22 0 0 0-.168.069q-1.426 1.392-3.405 1.2a3.9 3.9 0 0 1-1.392-.414 4.1 4.1 0 0 1-1.103-.809.13.13 0 0 0-.104-.045l-.616.001h-.267a.4.4 0 0 0-.064.005q.346.486.797.877l-.01.018-.025.023-.014.014a3.15 3.15 0 0 0-.742 1.057 1.6 1.6 0 0 0-.121.4.56.56 0 0 0 .02.294.2.2 0 0 0 .15.125q.095.015.183-.02a1.1 1.1 0 0 0 .337-.194c.376-.313.673-.71.865-1.16l.02-.044.011-.024a4.9 4.9 0 0 0 2.267.7l.003.01q.003.007.002.01a2.7 2.7 0 0 0-.091.582q-.024.373.038.741c.032.18.076.356.162.517q.045.086.11.158c.108.118.241.117.353.002a.4.4 0 0 0 .065-.084q.066-.118.117-.244.105-.306.124-.63a3 3 0 0 0-.092-1.059l-.004-.022q.402-.045.793-.15.383-.108.747-.273a5.4 5.4 0 0 0 .7-.392l.009.022.011.03c.184.512.503.964.923 1.308q.12.096.257.163.09.044.19.056a.2.2 0 0 0 .228-.14.4.4 0 0 0 .02-.104 1 1 0 0 0-.061-.403 3.03 3.03 0 0 0-.943-1.348zm-.556-4.965.072.001q.08.003.156-.002c.084-.008.144.022.205.079q.4.367.802.73l.264.24q.017.014.037.033l.022.019.02-.018.04-.035 1.1-1.002a.15.15 0 0 1 .117-.046 4 4 0 0 0 .276.001v2.95a7 7 0 0 1-.774.002V7.995l-.015-.007-.763.696-.769-.693-.015.005v1.499h-.768c-.014-.05-.02-2.79-.006-2.958zm-6.323.003h-.763v1.046a10 10 0 0 1-.95-.004v-1.04h-.77v2.947c.064.015.716.014.774-.004V8.373h.946v.743q-.001.19.002.38H4.5c.016-.072.013-2.906-.003-2.955zm.915 2.954V6.55c.045-.014 1.723-.02 1.833-.005v.627l-.015.002h-.008l-.052.003h-.98v.489h.934v.65h-.926a3.5 3.5 0 0 0-.007.55l.023.001.052.003h.979v.625zM8.123 6.54c-.014.055-.017 2.876-.003 2.955h1.832v-.772h-.985l-.053-.003-.03-.002V6.541h-.761z"
                            ></path>
                        </svg>)
                },
                {
                    name: "Istio",
                    icon: (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="128"
                        height="60"
                        viewBox="0 0 128 60"
                    >
                        <path
                            fill="#000"
                            d="M58.434 48.823a.44.44 0 0 1-.134-.326V22.583a.44.44 0 0 1 .134-.326.45.45 0 0 1 .327-.134h3.527a.45.45 0 0 1 .325.134.45.45 0 0 1 .134.326v25.914a.44.44 0 0 1-.134.326.44.44 0 0 1-.325.134h-3.527a.44.44 0 0 1-.327-.134M70.969 48.477a6.56 6.56 0 0 1-2.818-1.955 4.34 4.34 0 0 1-1-2.78v-.345a.44.44 0 0 1 .134-.326.44.44 0 0 1 .326-.135h3.374a.44.44 0 0 1 .326.135.45.45 0 0 1 .134.326v.077a2.01 2.01 0 0 0 1.054 1.667 4.67 4.67 0 0 0 2.664.709 4.45 4.45 0 0 0 2.492-.633 1.86 1.86 0 0 0 .958-1.591 1.43 1.43 0 0 0-.786-1.322 12.7 12.7 0 0 0-2.549-.939l-1.457-.46a21.5 21.5 0 0 1-3.3-1.227 6.6 6.6 0 0 1-2.262-1.783 4.43 4.43 0 0 1-.92-2.894 5.08 5.08 0 0 1 2.109-4.275 9 9 0 0 1 5.558-1.591 10.45 10.45 0 0 1 4.1.748 6.3 6.3 0 0 1 2.722 2.07 5 5 0 0 1 .958 3.009.44.44 0 0 1-.134.326.44.44 0 0 1-.325.134h-3.258a.44.44 0 0 1-.326-.134.44.44 0 0 1-.134-.326 1.97 1.97 0 0 0-.978-1.667 4.65 4.65 0 0 0-2.665-.671 4.74 4.74 0 0 0-2.435.556 1.72 1.72 0 0 0-.938 1.553 1.51 1.51 0 0 0 .9 1.4 16 16 0 0 0 3.01 1.055l.843.229a27 27 0 0 1 3.412 1.246 6.7 6.7 0 0 1 2.338 1.763 4.4 4.4 0 0 1 .958 2.933 4.99 4.99 0 0 1-2.146 4.275 9.54 9.54 0 0 1-5.712 1.552 11.6 11.6 0 0 1-4.227-.709M97.039 32.837a.44.44 0 0 1-.326.135h-3.911a.17.17 0 0 0-.191.192v9.239a2.95 2.95 0 0 0 .632 2.108 2.7 2.7 0 0 0 2.013.652h1.15a.44.44 0 0 1 .325.134.44.44 0 0 1 .134.326v2.875a.47.47 0 0 1-.459.5l-1.994.039a8 8 0 0 1-4.524-1.035q-1.495-1.035-1.533-3.91V33.166a.17.17 0 0 0-.191-.192h-2.186a.44.44 0 0 1-.326-.135.44.44 0 0 1-.134-.326V29.83a.44.44 0 0 1 .134-.326.44.44 0 0 1 .326-.135h2.186a.17.17 0 0 0 .191-.192v-4.485a.44.44 0 0 1 .134-.326.44.44 0 0 1 .325-.134h3.336a.44.44 0 0 1 .325.134.44.44 0 0 1 .135.326v4.485a.17.17 0 0 0 .191.192h3.911a.45.45 0 0 1 .326.135.45.45 0 0 1 .134.326v2.683a.45.45 0 0 1-.133.324M101.694 25.917a2.65 2.65 0 0 1-.767-1.955 2.65 2.65 0 0 1 .767-1.955 2.65 2.65 0 0 1 1.955-.767 2.65 2.65 0 0 1 1.955.767 2.65 2.65 0 0 1 .767 1.955 2.65 2.65 0 0 1-.767 1.955 2.65 2.65 0 0 1-1.955.767 2.65 2.65 0 0 1-1.955-.767m-.211 22.906a.44.44 0 0 1-.134-.326V29.79a.44.44 0 0 1 .134-.326.45.45 0 0 1 .326-.134h3.527a.45.45 0 0 1 .326.134.45.45 0 0 1 .134.326v18.707a.44.44 0 0 1-.134.326.44.44 0 0 1-.326.134h-3.527a.44.44 0 0 1-.326-.134M114.019 47.734a8.1 8.1 0 0 1-3.047-4.255 14.4 14.4 0 0 1-.652-4.37 14.3 14.3 0 0 1 .614-4.371A7.87 7.87 0 0 1 114 30.56a9.07 9.07 0 0 1 5.252-1.5 8.54 8.54 0 0 1 5.041 1.5 8 8 0 0 1 3.009 4.14 12.4 12.4 0 0 1 .69 4.37 13.8 13.8 0 0 1-.651 4.37 8.26 8.26 0 0 1-3.028 4.275 8.48 8.48 0 0 1-5.1 1.553 8.75 8.75 0 0 1-5.194-1.534m7.629-3.1a4.54 4.54 0 0 0 1.476-2.262 11.3 11.3 0 0 0 .383-3.221 10.6 10.6 0 0 0-.383-3.22 4.17 4.17 0 0 0-1.457-2.243 4.07 4.07 0 0 0-2.531-.785 3.94 3.94 0 0 0-2.453.785 4.38 4.38 0 0 0-1.5 2.243 11.8 11.8 0 0 0-.383 3.22 11.8 11.8 0 0 0 .383 3.221 4.22 4.22 0 0 0 1.476 2.262 4.08 4.08 0 0 0 2.549.8 3.8 3.8 0 0 0 2.44-.809zM15.105 32.057v15.565a.06.06 0 0 1-.049.059L.069 50.25a.06.06 0 0 1-.064-.083l14.987-33.47a.06.06 0 0 1 .114.025zM17.631 23.087v24.6a.06.06 0 0 0 .053.059l22.449 2.507a.06.06 0 0 0 .061-.084L17.745.032a.06.06 0 0 0-.114.024zM39.961 52.548l-24.833 7.45a.06.06 0 0 1-.043 0L.079 52.548a.059.059 0 0 1 .026-.113h39.839a.06.06 0 0 1 .017.113"
                        ></path>
                    </svg>)
                },
            ]
        },
        {
            name: "Infrastructure as Code",
            technologies: [
                {
                    name: "CloudFormation",
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
                    name: "ARM Templates",
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
                    name: "Pulumi",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="425"
                            height="106"
                            fill="none"
                            viewBox="0 0 425 106"
                        >
                            <path
                                fill="#F26E7E"
                                fillRule="evenodd"
                                d="M17.072 58.87c3.912-2.258 3.918-9.57.015-16.33S6.849 32.13 2.937 34.388c-3.91 2.259-3.917 9.57-.014 16.33s10.238 10.41 14.15 8.152m.024 14.475c3.903 6.76 3.896 14.072-.015 16.33S6.835 88.283 2.932 81.523s-3.897-14.071.015-16.33c3.91-2.258 10.246 1.392 14.149 8.152m26.653 15.41c3.904 6.76 3.897 14.071-.014 16.33s-10.246-1.392-14.15-8.152c-3.902-6.76-3.896-14.071.015-16.33s10.246 1.392 14.15 8.152m-.008-30.805c3.903 6.76 3.897 14.072-.015 16.33-3.91 2.258-10.246-1.392-14.149-8.152s-3.897-14.071.015-16.33c3.91-2.258 10.246 1.392 14.149 8.152"
                                clipRule="evenodd"
                            ></path>
                            <path
                                fill="#8A3391"
                                fillRule="evenodd"
                                d="M97.061 50.735c3.903-6.76 3.897-14.071-.014-16.33-3.912-2.258-10.246 1.392-14.15 8.152s-3.896 14.072.015 16.33 10.246-1.392 14.15-8.152m.001 14.468c3.911 2.258 3.918 9.57.015 16.33s-10.239 10.41-14.15 8.151c-3.91-2.258-3.917-9.569-.014-16.329s10.238-10.41 14.149-8.152M70.414 80.588c3.91 2.258 3.917 9.569.014 16.33-3.903 6.759-10.238 10.409-14.15 8.151-3.91-2.258-3.917-9.57-.014-16.33s10.238-10.41 14.15-8.151m-.015-30.798c3.91 2.258 3.917 9.569.014 16.33s-10.238 10.41-14.15 8.151c-3.91-2.258-3.917-9.57-.014-16.33s10.238-10.41 14.15-8.151"
                                clipRule="evenodd"
                            ></path>
                            <path
                                fill="#F7BF2A"
                                fillRule="evenodd"
                                d="M64.122 8.178c0 4.516-6.328 8.177-14.135 8.177s-14.134-3.66-14.134-8.177S42.18 0 49.987 0c7.807 0 14.135 3.661 14.135 8.178M37.474 23.546c0 4.517-6.328 8.178-14.135 8.178S9.205 28.063 9.205 23.546c0-4.516 6.328-8.177 14.134-8.177 7.807 0 14.135 3.661 14.135 8.177m39.197 8.178c7.806 0 14.134-3.661 14.134-8.178 0-4.516-6.328-8.177-14.135-8.177s-14.134 3.661-14.134 8.177c0 4.517 6.328 8.178 14.135 8.178M64.122 38.95c0 4.516-6.328 8.177-14.135 8.177s-14.134-3.661-14.134-8.177c0-4.517 6.328-8.178 14.134-8.178 7.807 0 14.135 3.661 14.135 8.178"
                                clipRule="evenodd"
                            ></path>
                            <path
                                fill="#000"
                                fillRule="evenodd"
                                d="M254.218 19h5.255c1.631 0 2.537.906 2.537 2.537v61.02c0 1.63-.906 2.536-2.537 2.536h-5.255c-1.631 0-2.537-.906-2.537-2.537v-61.02c0-1.63.906-2.536 2.537-2.536M153.154 85.093c1.631 0 2.537-.906 2.537-2.537v-20.43h10.645c13.5 0 21.971-8.064 21.971-20.204 0-12.095-8.471-20.204-21.971-20.204h-18.799c-1.631 0-2.537.906-2.537 2.537v58.3c0 1.632.906 2.538 2.537 2.538zm2.537-54.36h9.966c7.61 0 11.914 4.394 11.914 11.189 0 6.84-4.304 11.234-11.914 11.234h-9.966zm40.227 10.011v26.365c0 11.551 7.475 19.026 18.755 19.026 5.979 0 11.098-2.945 14.269-7.248v3.67c0 1.63.906 2.536 2.537 2.536h5.3c1.631 0 2.537-.906 2.537-2.537V40.744c0-1.63-.906-2.537-2.537-2.537h-5.3c-1.631 0-2.537.906-2.537 2.537v23.013c0 7.791-5.617 13.272-12.14 13.272-6.252 0-10.555-4.439-10.555-10.781V40.744c0-1.63-.906-2.537-2.537-2.537h-5.255c-1.631 0-2.537.906-2.537 2.537m77.599 0v26.365c0 11.551 7.474 19.026 18.754 19.026 5.98 0 11.099-2.945 14.27-7.248v3.67c0 1.63.906 2.536 2.537 2.536h5.3c1.631 0 2.537-.906 2.537-2.537V40.744c0-1.63-.906-2.537-2.537-2.537h-5.3c-1.631 0-2.537.906-2.537 2.537v23.013c0 7.791-5.617 13.272-12.141 13.272-6.251 0-10.555-4.439-10.555-10.781V40.744c0-1.63-.906-2.537-2.536-2.537h-5.255c-1.631 0-2.537.906-2.537 2.537m128.38 15.447v26.41c0 1.631-.906 2.537-2.536 2.537h-5.3c-1.631 0-2.537-.906-2.537-2.537V57.098c0-6.342-3.941-10.78-9.74-10.78-5.844 0-11.37 5.888-11.37 13v23.285c0 1.63-.906 2.536-2.537 2.536h-5.3c-1.631 0-2.537-.906-2.537-2.537V57.098c0-6.342-3.941-10.78-9.739-10.78-5.572 0-11.371 5.344-11.371 13v23.285c0 1.63-.906 2.536-2.537 2.536h-5.3c-1.63 0-2.536-.906-2.536-2.537V40.745c0-1.63.906-2.537 2.536-2.537h5.3c1.631 0 2.537.906 2.537 2.537v3.579c3.307-4.349 8.064-7.203 13.545-7.203 7.067 0 13.001 3.67 15.946 9.74 3.08-5.89 8.788-9.74 15.492-9.74 10.193 0 17.984 7.52 17.984 19.072M425 25.434c0-3.579-2.809-6.342-6.433-6.342s-6.387 2.763-6.387 6.342c0 3.533 2.763 6.297 6.387 6.297S425 28.966 425 25.433m-1.268 15.311c0-1.63-.906-2.537-2.537-2.537h-5.255c-1.631 0-2.537.906-2.537 2.537v41.812c0 1.631.906 2.537 2.537 2.537h5.255c1.631 0 2.537-.906 2.537-2.537z"
                                clipRule="evenodd"
                            ></path>
                        </svg>)
                },
                {
                    name: "Terraform",
                    icon: (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"

                        className="product-page-content_productsDropdownIcon__gXtly"
                        viewBox="0 0 24 24"
                    >
                        <g fill="#000">
                            <path d="M10.336 1.5 2 6.268v11.456l3.131 1.793V8.061l5.205-2.979z"></path>
                            <path
                                d="M13.664 1.5v9.123h-3.328V7.219L7.203 9.012V20.7l3.133 1.796V13.4h3.328v3.381l3.131-1.793V3.293z"></path>
                            <path d="M22 17.732 13.664 22.5v-3.582l5.203-2.98V4.484L22 6.276z"></path>
                        </g>
                    </svg>)
                },
            ]
        },
        {
            name: "Migration Tools",
            technologies: [
                {
                    name: "AWS Migration Hub",
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
                    name: "Azure Migrate",
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
                    name: "Google Cloud Migrate",
                    icon: (
                        <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none"
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
            ]
        },
        {
            name: "CI/CD & DevOps",
            technologies: [
                {
                    name: "Jenkins", icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="none"
                                d="M19.513 25.173c-.068 0-.136 0-.2-.01q.098.01.2.01M18.919 25.087a2 2 0 0 0 .392.076 2 2 0 0 1-.392-.076M20.091 27.511a5.135 5.135 0 0 1 0 0"
                            ></path>
                            <path
                                fill="#f0d6b7"
                                d="M7.436 14.214A.8.8 0 0 1 7.6 14.1a.6.6 0 0 0-.164.114M10.412 18.253c.06.421.24 4.164 2.766 6.25a16 16 0 0 0 1.549.162c.28-.6 1.312-.554 1.985-.4a6.65 6.65 0 0 1-2.176-1.778 4.47 4.47 0 0 1-1.472-2.656c1.348 1.87 2.462 3.5 4.913 4.326 1.855.622 4.021-.285 5.446-1.286a6.3 6.3 0 0 0 1.365-1.68 14.24 14.24 0 0 0 2.145-8.621 9.6 9.6 0 0 0-.5-3.446c-.453-.908-1.984-1.72-2.88-.9a1 1 0 0 1-.016-.246c-.143.134-.23.232-.23.232a1.2 1.2 0 0 1-.122-.487 1.55 1.55 0 0 1 1.5-1.5 8.7 8.7 0 0 0-1.479-1.563 10.5 10.5 0 0 0-6.047-.222 8.06 8.06 0 0 0-5.975 5.4 14 14 0 0 0-.388 2.263c-.031.884.416 1.655.45 2.617-.239.394-.969.443-1.474.416a7 7 0 0 0-.136-.566 5.2 5.2 0 0 0-1.265-.5 1.72 1.72 0 0 1 1.009 2.038c-.373-.213-.462-1.15-.9-1.177-.626-.038-.512 1.216-.509 1.95a2.29 2.29 0 0 1-.19-2.213c-.284-.139-.444.061-.6.217-.222 1.036-.547 1.873.062 2.92a1.73 1.73 0 0 0 1.414.6c.567-.056.706-.624 1.324-.618a.51.51 0 0 1 .431.468m6.449 1.947-.3-.061s-.314-1.1-.163-1.306c.08-.107.52-.268 1.136.028-.004.001-.734.123-.673 1.339m5.706 1.341a5.27 5.27 0 0 1-3.426-.014 4.7 4.7 0 0 1-1.283-1.427c-.155-.2-.927-.708-.012-.709.717 1.8 3.18 1.592 5.257 1.543a1.1 1.1 0 0 1-.536.608Zm.3-1.6a4 4 0 0 1 0-1.063 8.5 8.5 0 0 0 2.96-1.185 3.43 3.43 0 0 1-2.961 2.246Zm2.756-8.073c-.183.061-1.37.762-1.278-.122a1.35 1.35 0 0 1 1.026-1.077 3 3 0 0 1 0-.4h.079a17 17 0 0 0 1.172 2.29c-.317.738-2.4 1.39-2.366.066.45-.2 1.227-.04 1.626-.291-.094-.257-.2-.5-.3-.756Zm-5.187 4.75a1 1 0 0 1 .046.1c.091-.507.259-1.1.548-1.013a.68.68 0 0 1 .5.638 7 7 0 0 0-.948.738c.065.3.144.6.523.668 1.106.189 2.393-.677 3.189-.979.493-.832-.043-1.138-.487-1.673-.91-1.1-2.13-2.456-2.086-4.1.368-.267.4.407.452.53a15 15 0 0 0 2.543 3.486c.214.234.567.459.606.614.113.451-.294.991-.247 1.29a6.6 6.6 0 0 1-4.466 1.4 1.32 1.32 0 0 1-.175-1.702Zm1.958 2.321A5 5 0 0 1 22.47 20c-1.811.09-3.952-.358-4.427-1.629a10.3 10.3 0 0 0 4.35.565Zm-4.256-8.648a7 7 0 0 0 .977 1.829c.228.222.67.492.451 1.109a1.4 1.4 0 0 1-.642.534c-.79.233-2.631.048-2.008-.937.653.03 1.532.424 2.02-.05a10 10 0 0 1-.322-.551c-.5.316-1.874.33-1.874-.479 0-.852 1.339-1.034 1.339-1.034l.01.024a1.1 1.1 0 0 1 .048-.448Zm-3.224-2.928c1.195-.815 1.8-.35 2.1.188a.568.568 0 0 1 .274.828c-1.658-.386-2.482.694-2.985 1.814-.129.234-.136.068-.21-.136a.4.4 0 0 1-.061-.136.6.6 0 0 0-.092-.121c-.24-.247-.365-1.524.974-2.437"
                            ></path>
                            <path
                                fill="#335061"
                                d="M6.283 29.28h8.753q-.06-.204-.118-.394a12 12 0 0 1-.476-1.948 21 21 0 0 1-3.087-1.655 2.4 2.4 0 0 1-.24-.257l-5.266 2.353s.189.754.434 1.901"
                            ></path>
                            <path
                                fill="#6d6b6d"
                                d="M9.433 7a2 2 0 0 1 .467-.088 4 4 0 0 0 .747.029c.494-.123.912-1.231 1.285-1.644a11 11 0 0 1 .941-.776A7.35 7.35 0 0 0 9.433 7M7.177 12.586a2.147 2.147 0 0 1 3.145 1.747c.694-.018.259-.866.134-1.413-.369-1.608.487-3.34.192-4.861-3.866.578-3.648 3.547-3.471 4.527"
                            ></path>
                            <path
                                fill="#dcd9d8"
                                d="M13.249 3.851c-1.82.516-4.152 1.838-4.9 3.473A7.4 7.4 0 0 0 9.433 7a7.35 7.35 0 0 1 3.44-2.479 2 2 0 0 0 .159-.166c.192-.093.476-.086.487-.375-.083-.089-.171-.157-.27-.129M7.5 8.985c-.8.885-.636 2.542-.538 3.721a2 2 0 0 1 .218-.12c-.18-.979-.394-3.949 3.471-4.527a3 3 0 0 0-.142-.493A4.4 4.4 0 0 0 7.5 8.985"
                            ></path>
                            <path
                                fill="#f7e4cd"
                                d="M10.412 18.253a.51.51 0 0 0-.42-.468c.335.668-.516.878-.6 1.355a4 4 0 0 0 .125.832 11.4 11.4 0 0 0 1.445 3.365 3.18 3.18 0 0 0 2.22 1.166c-2.53-2.085-2.71-5.829-2.77-6.25M21.525 16.338a.68.68 0 0 0-.5-.638c-.289-.082-.457.506-.548 1.013a2.4 2.4 0 0 1 .1.363 7 7 0 0 1 .948-.738M24.344 11.744c-.092.884 1.1.183 1.278.122l-.043-.286a3.2 3.2 0 0 1-.209-.913 1.35 1.35 0 0 0-1.026 1.077M16.739 11.744c0 .809 1.371.795 1.874.479a4.1 4.1 0 0 1-.525-1.489l-.01-.024s-1.339.182-1.339 1.034M7.192 14.885a1 1 0 0 1-.125.109 1.22 1.22 0 0 1 .37-.781.6.6 0 0 1 .163-.113.98.98 0 0 1 .782-.032 5.2 5.2 0 0 1 1.265.5c-.193-.664-.524-1.263-1.208-1.338a2.034 2.034 0 0 0-2.2 1.963A3.86 3.86 0 0 0 7.254 17.8c-.61-1.042-.284-1.879-.062-2.915M17.165 4.443a10.5 10.5 0 0 1 6.047.222 4 4 0 0 0-.49-.329c-1.889-1.066-5.086-1.867-7.1-.866-1.621.808-3.813 2.146-4.56 3.841a4.1 4.1 0 0 1 .123 2.532 8.06 8.06 0 0 1 5.98-5.4M23.188 7.728a1.2 1.2 0 0 0 .122.487s.087-.1.23-.232c.031-.734.865-1.152 1.832-.866-.222-.286-.447-.589-.681-.889a1.55 1.55 0 0 0-1.503 1.5M14.092 10.058c.074.2.082.37.21.136a.35.35 0 0 1-.21-.136"
                            ></path>
                            <path
                                fill="#f7e4cd"
                                d="M14.032 9.922a1.5 1.5 0 0 1 .114-.758 2.82 2.82 0 0 1 2.47-1.755 1.2 1.2 0 0 1 .4.143c-.3-.538-.9-1-2.1-.188-1.338.913-1.217 2.19-.973 2.434a.6.6 0 0 1 .089.124"
                            ></path>
                            <path
                                fill="#49728b"
                                d="m5.849 27.379 5.266-2.353c-.386-.448-1.079-1.3-1.2-1.257a24 24 0 0 0-5.61 3.485 20 20 0 0 1 .81 2.026h1.168a61 61 0 0 0-.434-1.901"
                            ></path>
                            <path
                                fill="#335061"
                                d="M27 29.307a21 21 0 0 0 .548-2.058c.036-.181.106-.475.156-.756l-2.886-2.144a5.12 5.12 0 0 1 .13 3.9c.1.372.454.515.6.85q-.052.09-.1.179h1.476a.15.15 0 0 1 .076.029M24.441 28.074a1.1 1.1 0 0 0 .172-.381 1.1 1.1 0 0 1-.172.381M23.617 23.946a.95.95 0 0 1 .514-.106l-.238-.177a1.5 1.5 0 0 0-.276.283"
                            ></path>
                            <path
                                fill="#49728b"
                                d="M27.756 25.879c-.074-.537-.8-.935-1.172-1.266-.684-.613-1.112-1.153-1.823-1.726a4.4 4.4 0 0 1-.869.776l.238.177a.93.93 0 0 1 .686.51l2.884 2.143a2.3 2.3 0 0 0 .056-.614"
                            ></path>
                            <path
                                fill="#fff"
                                d="M20.572 29.2a.4.4 0 0 0 .009.076h.479a.333.333 0 0 1 .666 0h.774v-.03a21 21 0 0 0-1.2-.593c-.424-.178-.728.547-.728.547"
                            ></path>
                            <path
                                fill="#dcd9d8"
                                d="M20.572 29.2s.3-.73.73-.548c.322.138.921.449 1.2.593q.014-.33.034-.66c-.618.039-.961-.559-1.394-.605-.378-.041-.7.435-1.19.229-.113.124-.215.259-.33.381a6 6 0 0 1 .489.685h.476a.4.4 0 0 1-.015-.075"
                            ></path>
                            <path
                                fill="#fff"
                                d="M14.511 25.169a6.7 6.7 0 0 1-2.269-.4.282.282 0 0 0 .017.421 7.7 7.7 0 0 0 2.14.578 1.8 1.8 0 0 0 .112-.599"
                            ></path>
                            <path
                                fill="#dcd9d8"
                                d="M14.357 26.069a1.2 1.2 0 0 1 .041-.3 7.7 7.7 0 0 1-2.14-.578 4.24 4.24 0 0 0 2.099.878"
                            ></path>
                            <path
                                fill="#d33833"
                                d="M24.613 27.693a3 3 0 0 0 .073-.87 7 7 0 0 0-.2-1.378 3 3 0 0 0-1.009.049c-.3.061-.609.122-.669.487s.122.548-.061.852-.487.122-.791.3c-.207.124-.076.445.029.638a12 12 0 0 0 2.459.3 1.1 1.1 0 0 0 .169-.378M15.562 29.219l.047.128c.014.04.029.093.042.139l-.009-.117Z"
                            ></path>
                            <path
                                fill="#d33833"
                                d="m19.563 27.925.021-.527a1.3 1.3 0 0 1-.96-.074c-.937-.511-.05-.36-.382-1.038a3.2 3.2 0 0 0-1.224-.365c-1.228 0-1.7-.247-1.568 1.169q.102 1.14.191 2.28c.1.188.19.357.262.5a4.8 4.8 0 0 0 1.833-.559 21 21 0 0 0 1.827-1.386M20.027 27.2c.021.089.043.189.064.31a.7.7 0 1 0 .428-1.31.95.95 0 0 1-.492 1"
                            ></path>
                            <path
                                fill="#ef3d3a"
                                d="M21.953 27.137c.3-.183.609 0 .791-.3s0-.487.061-.852.365-.426.669-.487a3 3 0 0 1 1.009-.049 1.13 1.13 0 0 0-.348-.652c-.747-.436-2.056.825-2.665 1.093l-.057.023a1.7 1.7 0 0 1 .175.558 1.5 1.5 0 0 1 .412-.042 2 2 0 0 1 .276.033q.067.014.133.032a1.5 1.5 0 0 1 .243.092 4 4 0 0 0-.757.1.7.7 0 0 0-.2.095 9 9 0 0 0-.035.9q.158.045.322.084c-.105-.183-.236-.504-.029-.628M15.651 29.485c.051.183.095.348.253.385-.072-.144-.163-.313-.262-.5ZM15.45 27.089c-.129-1.416.34-1.169 1.568-1.169a3.2 3.2 0 0 1 1.224.365c.332.678-.555.527.382 1.038a1.3 1.3 0 0 0 .96.074v-.063a3 3 0 0 0-.916-.29 4 4 0 0 0-.371-.036 1.6 1.6 0 0 1 .291-.106 3.3 3.3 0 0 0 .906-.281c0-.079.006-.158.009-.236a2 2 0 0 1-.2-.027 2 2 0 0 1-.177-.044 1.6 1.6 0 0 1-.294-.127c-.178-.1-.331-.216-.525-.322a9 9 0 0 0-2.408-.881c-.921-.176-.929 1.105-.89 2.049 0 .1.008.192.013.28a6.6 6.6 0 0 0 .544 1.9l.079.15q-.093-1.133-.195-2.274M20.52 26.2a1 1 0 0 0-.582.2 1.7 1.7 0 0 0 .007.412c.011.079.028.155.048.238l.031.131v.017a.95.95 0 0 0 .496-.998"
                            ></path>
                            <path
                                fill="#231f20"
                                d="M14.146 9.164a1.5 1.5 0 0 0-.114.758.4.4 0 0 0 .061.136.35.35 0 0 0 .21.136c.5-1.12 1.327-2.2 2.985-1.814a.568.568 0 0 0-.274-.828 1.2 1.2 0 0 0-.4-.143 2.82 2.82 0 0 0-2.468 1.755M24.252 12.627c-.032 1.324 2.049.672 2.366-.066a17 17 0 0 1-1.172-2.29h-.079a3 3 0 0 0 0 .4 3.2 3.2 0 0 0 .209.913c.095.256.205.5.3.756-.397.247-1.176.09-1.624.287M18.934 12.773c-.488.474-1.367.08-2.02.05-.623.985 1.218 1.17 2.008.937a1.4 1.4 0 0 0 .642-.534c.219-.617-.223-.887-.451-1.109a7 7 0 0 1-.977-1.829 1.1 1.1 0 0 0-.049.445 4.1 4.1 0 0 0 .525 1.489c.114.21.227.399.322.551M20.605 18.315a6.6 6.6 0 0 0 4.466-1.4c-.047-.3.36-.84.247-1.29-.039-.155-.392-.38-.606-.614a15 15 0 0 1-2.543-3.486c-.053-.123-.085-.8-.452-.53-.044 1.642 1.176 3 2.086 4.1.444.535.98.841.487 1.673-.8.3-2.083 1.169-3.189.979-.379-.065-.458-.365-.523-.668a2.4 2.4 0 0 0-.1-.363 1 1 0 0 0-.046-.1 1.32 1.32 0 0 0 .173 1.699M7.6 14.1a1 1 0 0 0-.159.111 1.22 1.22 0 0 0-.37.781 1 1 0 0 0 .125-.109c.153-.156.313-.357.6-.217a2.29 2.29 0 0 0 .19 2.213c0-.733-.117-1.987.509-1.95.438.027.527.964.9 1.177a1.72 1.72 0 0 0-1.017-2.036.98.98 0 0 0-.778.03M22.868 18.875a4 4 0 0 0 0 1.063 3.43 3.43 0 0 0 2.962-2.249 8.5 8.5 0 0 1-2.962 1.186M22.47 20a5 5 0 0 0-.077-1.066 10.3 10.3 0 0 1-4.35-.562c.475 1.272 2.616 1.72 4.427 1.628M17.846 19.39c-.915 0-.143.51.012.709a4.7 4.7 0 0 0 1.284 1.428 5.27 5.27 0 0 0 3.426.014 1.1 1.1 0 0 0 .536-.609c-2.078.05-4.541.257-5.258-1.542"
                            ></path>
                            <path
                                fill="#81b0c4"
                                d="M24.96 29.28a1.7 1.7 0 0 0-1.042-.753 1.43 1.43 0 0 0-.918.12c-.008.2-.018.415-.031.632Z"
                            ></path>
                            <path
                                fill="#f0d6b7"
                                d="M21.971 24.749c-.686.061-1.493.373-2.252.419-.069 0-.138.006-.206.006s-.136 0-.2-.01a2 2 0 0 1-.392-.076 2 2 0 0 1-.188-.07c0 .052-.071.033-.082.076q.127.1.247.179c.12.079.159.1.238.143a2.2 2.2 0 0 0 .475.19 3 3 0 0 0 .816.09c.1 0 .212 0 .327-.009.415-.303.783-.656 1.217-.938"
                            ></path>
                            <path
                                fill="#81b0c4"
                                d="m19.086 29.048-.351.233h.527q-.086-.119-.176-.233"
                            ></path>
                            <path
                                fill="#231f20"
                                d="M4.681 29.769v-.335a.153.153 0 0 1 .153-.153h.283a20 20 0 0 0-.81-2.026 24 24 0 0 1 5.61-3.485c.118-.047.811.809 1.2 1.257a2.4 2.4 0 0 0 .24.257 21 21 0 0 0 3.087 1.655 12 12 0 0 0 .476 1.948q.058.191.118.394h.162a.153.153 0 0 1 .153.153v.158h.139a.153.153 0 0 1 .153.153V30h1.691v-.255a.153.153 0 0 1 .153-.153h.78v-.158a.153.153 0 0 1 .153-.153h.317l.351-.233q.09.114.176.233h.843a6 6 0 0 0-.489-.685c.115-.122.217-.256.33-.381.492.206.812-.27 1.19-.229.433.046.776.644 1.394.605q-.02.33-.034.66v.03h.474q.019-.326.031-.632a1.43 1.43 0 0 1 .918-.12 1.7 1.7 0 0 1 1.042.753h.481q.052-.09.1-.179c-.143-.335-.495-.477-.6-.85a5.12 5.12 0 0 0-.13-3.9.93.93 0 0 0-.686-.51.95.95 0 0 0-.514.106 1.5 1.5 0 0 1 .275-.283 4.4 4.4 0 0 0 .869-.776c.712.573 1.141 1.112 1.824 1.725.37.332 1.1.73 1.172 1.266a2.3 2.3 0 0 1-.054.614c-.051.281-.12.575-.156.756A21 21 0 0 1 27 29.307a.15.15 0 0 1 .072.127V30h.368c.258-.808.511-1.635.766-2.489a6.2 6.2 0 0 0 .478-2.187c-.078-.617-1.04-1.265-1.547-1.754-.281-.271-1.593-1.267-1.669-1.64s.535-1.178.731-1.586a11.7 11.7 0 0 0 .621-1.788c1.032-3.627 1.137-8.611-.339-11.592a12.5 12.5 0 0 0-3.1-3.428c-2.3-1.742-6.563-1.935-9.339-.913a13.5 13.5 0 0 0-2.2.939c-1.818 1.066-3.748 1.78-4.287 3.928-1.328.6-1.729 2.3-1.662 4.268a6.2 6.2 0 0 1 .149 1.227c-.037.184-.286.419-.336.538a5.3 5.3 0 0 0 .609 4.592A3.23 3.23 0 0 0 8.468 19.5a4.6 4.6 0 0 0 .447 1.672c.17.373.805 1.043.571 1.519a7 7 0 0 1-1.495.966c-1.158.695-2 1.12-3.066 1.89-.692.5-1.773.562-1.6 1.71a18 18 0 0 0 .808 2.513q.038.117.08.232h.47Zm8.351-25.414a2 2 0 0 1-.159.166 11 11 0 0 0-.941.776c-.373.413-.79 1.521-1.285 1.644a4 4 0 0 1-.747-.029A2 2 0 0 0 9.433 7a7.4 7.4 0 0 1-1.084.325c.748-1.635 3.08-2.957 4.9-3.473.1-.028.188.04.271.129-.011.287-.296.281-.488.374m-2.385 3.7c.3 1.521-.561 3.254-.192 4.861.125.546.56 1.394-.134 1.413a2.147 2.147 0 0 0-3.145-1.747 2 2 0 0 0-.218.12c-.1-1.179-.266-2.836.538-3.721a4.4 4.4 0 0 1 3.009-1.419 3 3 0 0 1 .142.497ZM7.254 17.8a3.86 3.86 0 0 1-1.022-2.6 2.034 2.034 0 0 1 2.2-1.963c.684.075 1.014.674 1.208 1.338.054.187.1.379.136.566.505.027 1.235-.022 1.474-.416-.034-.962-.481-1.733-.45-2.617a14 14 0 0 1 .388-2.263 4.1 4.1 0 0 0-.123-2.532c.747-1.695 2.939-3.032 4.56-3.841 2.009-1 5.207-.2 7.1.866a4 4 0 0 1 .49.329 8.7 8.7 0 0 1 1.479 1.563c.234.3.459.6.681.889-.967-.287-1.8.132-1.832.866a1 1 0 0 0 .016.246c.9-.821 2.427-.009 2.88.9a9.6 9.6 0 0 1 .5 3.446 14.24 14.24 0 0 1-2.145 8.621 6.3 6.3 0 0 1-1.365 1.68c-1.425 1-3.591 1.908-5.446 1.286-2.451-.823-3.565-2.456-4.913-4.326a4.47 4.47 0 0 0 1.472 2.656 6.65 6.65 0 0 0 2.176 1.778c-.673-.158-1.7-.208-1.985.4a16 16 0 0 1-1.549-.162 3.18 3.18 0 0 1-2.22-1.166 11.4 11.4 0 0 1-1.445-3.365 4 4 0 0 1-.125-.832c.088-.478.939-.687.6-1.355-.618-.006-.757.562-1.324.618a1.73 1.73 0 0 1-1.416-.61m12.77 9.38-.031-.131a3 3 0 0 1-.048-.238 1.7 1.7 0 0 1-.007-.412 1 1 0 0 1 .582-.2.7.7 0 1 1-.428 1.31 5 5 0 0 0-.064-.31Zm-7.782-2.419a6.7 6.7 0 0 0 2.269.4 1.8 1.8 0 0 1-.112.6 1.2 1.2 0 0 0-.041.3 4.24 4.24 0 0 1-2.1-.882.28.28 0 0 1-.016-.413Zm7.367.839a2.2 2.2 0 0 1-.475-.19 3.3 3.3 0 0 1-.485-.322c.011-.043.079-.024.082-.076a2 2 0 0 0 .188.07 2 2 0 0 0 .392.076 3 3 0 0 0 .406.004c.759-.046 1.566-.358 2.252-.419-.433.283-.8.636-1.218.938a6 6 0 0 1-.327.009 3 3 0 0 1-.815-.085Zm-1.872 3.706a4.8 4.8 0 0 1-1.833.559c-.158-.037-.2-.2-.253-.385a3 3 0 0 0-.089-.267 6.6 6.6 0 0 1-.544-1.9c0-.088-.009-.182-.013-.28-.039-.944-.031-2.225.89-2.049a9 9 0 0 1 2.408.881c.194.106.347.225.525.322a1.6 1.6 0 0 0 .294.127 2 2 0 0 0 .177.044 2 2 0 0 0 .2.027c0 .078-.006.157-.009.236a3.3 3.3 0 0 1-.906.281 1.6 1.6 0 0 0-.291.106 4 4 0 0 1 .371.036 3 3 0 0 1 .916.29v.063l-.021.527a21 21 0 0 1-1.822 1.387Zm4.245-1.536q-.164-.039-.322-.084a9 9 0 0 1 .035-.9.7.7 0 0 1 .2-.095 4 4 0 0 1 .757-.1 1.5 1.5 0 0 0-.243-.092 2 2 0 0 0-.133-.032 2 2 0 0 0-.276-.038 1.5 1.5 0 0 0-.407.038 1.7 1.7 0 0 0-.175-.558l.057-.023c.609-.268 1.918-1.529 2.665-1.093a1.13 1.13 0 0 1 .348.652 7 7 0 0 1 .2 1.378 3 3 0 0 1-.073.87 1.1 1.1 0 0 1-.172.381 12 12 0 0 1-2.461-.3Z"
                            ></path>
                            <path
                                fill="#f7e4cd"
                                d="M17.53 18.862c-.616-.3-1.056-.135-1.136-.028-.152.2.163 1.306.163 1.306l.3.061c-.057-1.217.673-1.339.673-1.339"
                            ></path>
                            <path
                                fill="#1d1919"
                                d="M21.393 28.961a.334.334 0 0 0-.333.319h.666a.334.334 0 0 0-.333-.319"
                            ></path>
                            <path
                                fill="#231f20"
                                d="M15.642 29.745a.153.153 0 0 0-.153-.153h-.139v.177a.153.153 0 0 1-.153.153H4.834a.153.153 0 0 1-.153-.153V30h10.961ZM26.918 29.922h-8.5a.153.153 0 0 1-.153-.153v-.177h-.78a.153.153 0 0 0-.153.153V30h9.737v-.231a.153.153 0 0 1-.151.153"
                            ></path>
                            <path
                                fill="#231f20"
                                d="M4.834 29.922H15.2a.153.153 0 0 0 .153-.153v-.335a.153.153 0 0 0-.153-.153H4.834a.153.153 0 0 0-.153.153v.335a.153.153 0 0 0 .153.153M18.266 29.769a.153.153 0 0 0 .153.153h8.5a.153.153 0 0 0 .153-.153v-.335a.15.15 0 0 0-.072-.127.15.15 0 0 0-.081-.026h-8.5a.153.153 0 0 0-.153.153z"
                            ></path>
                        </g>
                    </svg>)
                },
                {
                    name: "Azure DevOps",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill="url(#azure-devops-color-16__paint0_linear_707_116)"
                                    d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.958L3.004 10.97l8.951.7V4.005zm-2.984.428L6.994 1v2.001L2.382 4.356 1 6.13v4.029l1.978.873V5.869l9.038-1.818z"
                                ></path>
                                <defs>
                                    <linearGradient
                                        id="azure-devops-color-16__paint0_linear_707_116"
                                        x1="8"
                                        x2="8"
                                        y1="14.956"
                                        y2="1.026"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#0078D4"></stop>
                                        <stop offset="0.16" stopColor="#1380DA"></stop>
                                        <stop offset="0.53" stopColor="#3C91E5"></stop>
                                        <stop offset="0.82" stopColor="#559CEC"></stop>
                                        <stop offset="1" stopColor="#5EA0EF"></stop>
                                    </linearGradient>
                                </defs>
                            </g>
                        </svg>)
                },
                {
                    name: "Terraform",
                    icon: (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"

                        className="product-page-content_productsDropdownIcon__gXtly"
                        viewBox="0 0 24 24"
                    >
                        <g fill="#000">
                            <path d="M10.336 1.5 2 6.268v11.456l3.131 1.793V8.061l5.205-2.979z"></path>
                            <path
                                d="M13.664 1.5v9.123h-3.328V7.219L7.203 9.012V20.7l3.133 1.796V13.4h3.328v3.381l3.131-1.793V3.293z"></path>
                            <path d="M22 17.732 13.664 22.5v-3.582l5.203-2.98V4.484L22 6.276z"></path>
                        </g>
                    </svg>)
                },
                {
                    name: "Grafana",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                            viewBox="-11.5 0 279 279"
                        >
                            <g id="SVGRepo_iconCarrier">
                                <defs>
                                    <linearGradient
                                        id="linearGradient-1"
                                        x1="49.995%"
                                        x2="49.995%"
                                        y1="122.45%"
                                        y2="31.139%"
                                    >
                                        <stop offset="0%" stopColor="#FFF100"></stop>
                                        <stop offset="100%" stopColor="#F05A28"></stop>
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#linearGradient-1)"
                                    d="M255.59 122.775c-.46-4.675-1.226-10.04-2.759-16.017a98 98 0 0 0-7.204-19.16 106.7 106.7 0 0 0-13.412-20.54c-2.222-2.681-4.675-5.287-7.28-7.816 3.908-15.558-4.752-29.046-4.752-29.046-14.945-.92-24.448 4.675-27.973 7.204-.613-.23-1.15-.537-1.763-.767-2.529-.996-5.135-1.992-7.894-2.835a130 130 0 0 0-8.277-2.3c-2.835-.69-5.67-1.226-8.583-1.686-.537-.076-.996-.153-1.533-.23C157.646 8.738 138.946 0 138.946 0c-20.922 13.258-24.831 31.805-24.831 31.805s-.077.383-.23 1.073c-1.15.307-2.299.69-3.449.996-1.609.46-3.218 1.073-4.751 1.686a123 123 0 0 0-4.752 1.916 117 117 0 0 0-9.35 4.599c-2.989 1.686-5.9 3.525-8.737 5.441l-.766-.307c-28.97-11.036-54.643 2.223-54.643 2.223-2.376 30.809 11.572 50.198 14.331 53.724-.69 1.916-1.303 3.832-1.916 5.748-2.146 6.974-3.755 14.101-4.751 21.535-.154 1.073-.307 2.146-.384 3.219C7.894 146.916 0 173.97 0 173.97c22.302 25.674 48.359 27.283 48.359 27.283l.077-.076c3.295 5.9 7.127 11.495 11.419 16.783a112 112 0 0 0 5.671 6.362c-8.124 23.298 1.15 42.61 1.15 42.61 24.83.92 41.155-10.882 44.603-13.564a85 85 0 0 0 7.511 2.222 109.7 109.7 0 0 0 23.298 3.449c1.916.076 3.909.153 5.825.076h2.759l1.226-.076v.076c11.726 16.708 32.265 19.084 32.265 19.084 14.638-15.405 15.48-30.733 15.48-34.028v-1.38c3.066-2.145 5.979-4.445 8.738-6.974 5.824-5.288 10.959-11.342 15.25-17.857l1.15-1.839c16.554.92 28.28-10.27 28.28-10.27-2.759-17.243-12.569-25.673-14.638-27.283 0 0-.077-.076-.23-.153s-.153-.153-.153-.153c-.077-.077-.23-.154-.383-.23.076-1.073.153-2.07.23-3.142.153-1.84.153-3.756.153-5.595v-2.913l-.077-1.149-.076-1.533c0-.536-.077-.996-.154-1.456-.076-.46-.076-.996-.153-1.456l-.153-1.456-.23-1.456c-.307-1.916-.613-3.756-1.073-5.672-1.763-7.433-4.675-14.484-8.43-20.845a70.4 70.4 0 0 0-14.025-16.707c-5.365-4.752-11.42-8.584-17.704-11.42-6.36-2.835-12.952-4.675-19.543-5.518-3.295-.46-6.59-.613-9.886-.536h-2.453l-1.226.077c-.46 0-.92.076-1.303.076a52 52 0 0 0-4.981.69c-6.591 1.226-12.799 3.602-18.24 6.897s-10.193 7.358-14.025 11.956a54.7 54.7 0 0 0-8.89 15.021 52.9 52.9 0 0 0-3.525 16.094c-.077 1.303-.077 2.683-.077 3.986v.996l.077 1.073c.076.613.076 1.303.153 1.916.23 2.682.766 5.288 1.456 7.74 1.456 4.982 3.755 9.503 6.59 13.335s6.285 6.975 9.887 9.504c3.602 2.452 7.51 4.215 11.343 5.364 3.832 1.15 7.664 1.61 11.266 1.61h1.993c.23 0 .46 0 .689-.077.383 0 .766-.077 1.15-.077.076 0 .23 0 .306-.076l.383-.077c.23 0 .46-.076.69-.076.46-.077.843-.154 1.303-.23s.843-.154 1.226-.307c.843-.153 1.61-.46 2.376-.69 1.533-.536 3.066-1.15 4.368-1.839 1.38-.69 2.606-1.533 3.832-2.3.307-.23.69-.459.997-.766 1.226-.996 1.456-2.835.46-4.061-.844-1.073-2.376-1.38-3.603-.69l-.92.46a25 25 0 0 1-3.295 1.38c-1.15.382-2.375.689-3.602.919-.613.076-1.226.153-1.916.23-.306 0-.613.076-.996.076h-1.84c-.383 0-.766 0-1.149-.076h-.46c-.153 0-.383 0-.536-.077-.383-.077-.69-.077-1.073-.153-2.836-.383-5.671-1.226-8.354-2.453a29.3 29.3 0 0 1-7.74-5.058c-2.376-2.146-4.445-4.675-6.055-7.587s-2.759-6.131-3.295-9.503c-.23-1.686-.383-3.449-.307-5.135 0-.46.077-.92.077-1.38v-.613c0-.23.077-.46.077-.69.076-.919.23-1.839.383-2.758 1.303-7.358 4.981-14.562 10.653-20.003 1.456-1.38 2.988-2.606 4.598-3.755a31.7 31.7 0 0 1 5.211-2.99 36 36 0 0 1 5.672-2.068c1.915-.537 3.908-.844 5.977-1.073.997-.077 1.993-.154 3.066-.154h2.376l.843.077c2.222.153 4.368.46 6.514.996 4.292.92 8.507 2.53 12.415 4.675 7.818 4.369 14.485 11.113 18.547 19.237 2.07 4.061 3.525 8.43 4.215 12.951.153 1.15.307 2.3.383 3.45l.077.842.077.843v3.296c0 .536-.077 1.456-.077 1.992-.077 1.227-.23 2.53-.383 3.756s-.383 2.452-.613 3.678a50 50 0 0 1-.843 3.602 64 64 0 0 1-2.3 7.128 62.4 62.4 0 0 1-7.204 13.105c-5.9 8.124-13.948 14.715-23.144 18.93-4.599 2.069-9.427 3.602-14.408 4.368-2.453.46-4.982.69-7.511.766h-3.832a36 36 0 0 1-4.062-.23c-5.365-.383-10.653-1.379-15.864-2.835-5.135-1.456-10.116-3.525-14.868-5.978-9.427-5.058-17.933-11.956-24.524-20.31a79 79 0 0 1-8.584-13.334 79 79 0 0 1-5.671-14.638c-1.38-5.058-2.223-10.193-2.606-15.405l-.077-.996v-6.821c.077-2.529.307-5.211.614-7.817.306-2.606.766-5.288 1.302-7.894.537-2.605 1.15-5.211 1.916-7.817a103 103 0 0 1 5.442-14.791c4.368-9.35 10.04-17.704 16.86-24.371 1.686-1.686 3.449-3.22 5.288-4.752a78 78 0 0 1 5.748-4.138c1.916-1.303 3.985-2.453 6.055-3.526a40 40 0 0 1 3.142-1.533l3.219-1.379c2.146-.92 4.368-1.686 6.667-2.376.537-.153 1.15-.306 1.686-.536.537-.154 1.15-.307 1.686-.46 1.15-.307 2.3-.613 3.45-.843.536-.153 1.149-.23 1.762-.383.613-.154 1.15-.23 1.763-.384.613-.076 1.15-.23 1.762-.306l.843-.153.92-.154c.613-.076 1.15-.153 1.763-.23.69-.076 1.302-.153 1.992-.23.537-.076 1.456-.153 1.993-.23.383-.076.843-.076 1.226-.153l.843-.076.383-.077h.46c.69-.077 1.303-.077 1.993-.153l.996-.077h.767c.536 0 1.149-.076 1.685-.076a99 99 0 0 1 6.745 0c4.445.153 8.813.69 13.028 1.456 8.507 1.61 16.478 4.291 23.758 7.893 7.28 3.526 13.719 7.894 19.39 12.646.383.306.69.613 1.073.92.306.306.69.613.996.92.69.612 1.303 1.225 1.993 1.838.69.614 1.303 1.227 1.916 1.84a44 44 0 0 1 1.839 1.916c2.376 2.529 4.598 5.058 6.59 7.664a99 99 0 0 1 9.734 15.25l.46.92.46.92c.306.613.613 1.226.843 1.84.306.613.536 1.149.843 1.762.23.613.536 1.15.766 1.763.92 2.299 1.84 4.521 2.53 6.59 1.149 3.373 1.992 6.362 2.682 8.967a2.043 2.043 0 0 0 2.299 1.61c1.15-.077 1.992-.996 1.992-2.146.077-2.759 0-6.054-.383-9.81"
                                ></path>
                            </g>
                        </svg>)
                },
            ]
        },
        {
            name: "Security & Compliance",
            technologies: [
                {
                    name: "AWS IAM",
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
                    name: "Azure AD",
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
                    name: "GCP Logging",
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
                    name: "HashiCorp Vault",
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                        <g id="SVGRepo_iconCarrier" fill="#000">
                            <path d="M6.835.6 1 3.96v8.074l2.192 1.264V5.224l3.643-2.1z"></path>
                            <path
                                d="M9.165.6v6.43h-2.33v-2.4L4.642 5.894v8.237l2.193 1.266v-6.41h2.33v2.383l2.192-1.264V1.864z"></path>
                            <path d="M15 12.04 9.165 15.4v-2.525l3.642-2.1V2.703L15 3.966z"></path>
                        </g>
                    </svg>)
                },
            ]
        },


    ];
    const processSteps = [
        {
            title: "1. Discovery & Assessment",
            duration: "1–2 Weeks",
            points: [
                {
                    title: "Infrastructure Audit",
                    detail:
                        "Inventory all applications, servers, databases, and dependencies. Understand current architecture and performance.",
                },
                {
                    title: "Cloud Readiness Assessment",
                    detail:
                        "Evaluate which applications are cloud-ready. Identify modernization opportunities and blockers.",
                },
                {
                    title: "TCO Analysis",
                    detail:
                        "Calculate current infrastructure costs vs projected cloud costs. Model different migration scenarios.",
                },
            ],
            deliverables:
                "Infrastructure inventory, migration priority matrix, TCO comparison, migration roadmap.",
        },
        {
            title: "2. Strategy & Planning",
            duration: "1–2 Weeks",
            points: [
                {
                    title: "Migration Strategy Selection",
                    detail:
                        "Choose the right migration approach (lift-shift, replatform, refactor) for each application.",
                },
                {
                    title: "Architecture Design",
                    detail:
                        "Design target cloud architecture with security, scalability, and cost optimization.",
                },
                {
                    title: "Risk Mitigation Planning",
                    detail:
                        "Identify risks and create rollback plans. Define success criteria and testing approach.",
                },
            ],
            deliverables:
                "Detailed migration plan, architecture diagrams, risk register, project timeline.",
        },
        {
            title: "3. Pilot Migration",
            duration: "2–4 Weeks",
            points: [
                {
                    title: "Proof of Concept",
                    detail:
                        "Migrate a non-critical application to validate approach. Test performance, security, and processes.",
                },
                {
                    title: "Team Training",
                    detail:
                        "Train your team on cloud tools and processes. Knowledge transfer throughout the project.",
                },
                {
                    title: "Process Refinement",
                    detail:
                        "Refine migration procedures based on pilot learnings. Update documentation and runbooks.",
                },
            ],
            deliverables:
                "Pilot migration report, refined procedures, training materials.",
        },
        {
            title: "4. Migration Execution",
            duration: "4–12 Weeks",
            points: [
                {
                    title: "Phased Migration",
                    detail:
                        "Migrate applications in waves based on priority and dependencies. Minimize business disruption.",
                },
                {
                    title: "Data Migration",
                    detail:
                        "Transfer databases and storage with data validation. Use native tools (AWS DMS, Azure Migrate) for efficiency.",
                },
                {
                    title: "Testing & Validation",
                    detail:
                        "Comprehensive testing of functionality, performance, and security. User acceptance testing before cutover.",
                },
            ],
            deliverables:
                "Migrated applications, performance test results, updated documentation.",
        },
        {
            title: "5. Optimization & Support",
            duration: "Ongoing",
            points: [
                {
                    title: "Performance Tuning",
                    detail:
                        "Optimize cloud resources for performance and cost. Implement auto-scaling and load balancing.",
                },
                {
                    title: "Cost Optimization",
                    detail:
                        "Continuous monitoring and rightsizing. Implement FinOps best practices.",
                },
                {
                    title: "Ongoing Support",
                    detail:
                        "24/7 monitoring and incident response. Regular health checks and optimization recommendations.",
                },
            ],
            deliverables:
                "Monthly cost reports, performance dashboards, optimization recommendations.",
        },
    ]
    const platforms = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-14 h-14">
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
            </svg>),
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 16 16">
                <path
                    id="SVGRepo_iconCarrier"
                    fill="#0089D6"
                    d="m7.47 12.412 3.348-.592.031-.007-1.722-2.049a292 292 0 0 1-1.723-2.058c0-.01 1.779-4.909 1.789-4.926a789 789 0 0 1 2.934 5.066l2.95 5.115.023.039-10.948-.001zM.9 11.788c0-.003.811-1.412 1.803-3.131L4.507 5.53l2.102-1.764C7.765 2.797 8.714 2 8.717 2a.4.4 0 0 1-.033.085L6.4 6.981l-2.24 4.808-1.63.002c-.897.001-1.63 0-1.63-.003"
                ></path>
            </svg>),
        },
        {
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
            </svg>),
        },
        {
            icon: (  <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                className="w-14 h-14"
                viewBox="0 0 598 418"
            >
                <image
                    xlinkHref="data:image/png;base64,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Dp7QGipXMakDTmi1l07Jgi6RtulmWdbeVsfESU0zZZuGzNy+qGy7yy33uUNvvBvvuOOBjm/e/8jk8269r+vqa28bd/fSFdsvWp7sds/Z5y675ojX/uNf+77yvD8ddPCff/Tceed87bBDzvr00c858+Ttn/PLE7ab95OXbvuc05/3y0vc/mf+1z31t/91e/z+UrfzWRe77c+5wm199n/d1DMvcRP0P8398QWuesEFXClHFbqemfWJwHnnucpZV7vuMy930/58tZt95gVur3d96ZbnbH/Q91750nk//dinvnzJuf+7Pbvqwd74ZFsdP2tJX3+bRKEusTBUklROCZUi3SAohdw9qAvGPYZaiVEKN8cioJcuFUrqBxydlVH0b4x7c6tD8Yu5OKV5Iibu2mGk7ZsyadxCgVum+gwNY2Uxon1Y+lY91MjQetPeYx8Odm0rcGRPHRIBYGJBEBtEdA3DyuotSoVqSjfQSRtEkeTOpr3L2yvJj7faftx759EIgs30IgSbZ8u2n127qGfZvRdXw6xZpE1bCYGJ4ztclvStmD598oPD0ZR1V3jqqT+ZU8i4iVGtHUmeoFarwegI2jzh22JaVSpWnAUqaigHVms3g8u1RVQCqt5Cc7ZQ8QJCaD4NzvjI+I6oHYg7Uc+poIFjxHWi1jlLknycuHAGohot/eE2aObTkRQzxqX5zG170ul7p8GcgxrBU16RRDu/JTE7vT8Jd/wk6dtJtNNvsmCHcz44/59nvn/+n8947/w//uy9n/j9j977qTO//66P/vq77/nkL775wU/98qvv/8zvv/zJz/72C8d/5hefnXnQ6Z/c7rk/+thuR/78/Sef9vDbP/uLJW/49M/vf9WnfnbPSz73k9uf99mf3X7Q539x04Gf/8l1B36Z9MWfb7WxBQAAEABJREFU3/isL/z4pv2++OPb9vrCD27b+Us/uGXbz5x20/T5P766e/6ZN8argeFfNggCKlu+euYltc/94rrxX/i/a7f61M9u2/mTP7p730/95KHnffLHi17xylP+9+7dDv/F/Ld88aef//BHzvnKySef9c0T3nX2aR/+/N9+/vu/3HMW2vf+vySY8+G62YrWqSltKxJaP1CDNRGCKCTPlmPYovyvnizo5yLITYI48DJ8N3QHbg1UGngFx3bLq2lIVMz0vQwemk4DPY0AAYtCLA9cqQaZ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"
                    width="598"
                    height="418"
                ></image>
            </svg>),
        }
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="Cloud Migration Services | AWS & Azure Migration | 2BTech"
                description="Expert cloud migration services with zero downtime. Trusted cloud migration company for AWS & Azure. Cloud consulting services and infrastructure management. Get free assessment"
                canonical="https://2btech.com/services/cloud-migration"
                openGraph={{
                    url: "https://2btech.com/services/cloud-migration",
                    title: "Cloud Migration Services | AWS & Azure Migration | 2BTech",
                    description: "Expert cloud migration services with zero downtime. Trusted cloud migration company for AWS & Azure. Cloud consulting services and infrastructure management. Get free assessment",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/cloud-migration.webp",
                            width: 1200,
                            height: 630,
                            alt: "Cloud Migration Services | AWS & Azure Migration | 2BTech",
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
                id="https://2btech.com/services/cloud-migration"
                name="Cloud Migration Services | AWS & Azure Migration | 2BTech"
                description=" Expert cloud migration services with zero downtime. Trusted cloud migration company for AWS & Azure. Cloud consulting services and infrastructure management. Get free assessment"
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title="Cloud Migration Service Provider"
                description="Transform your legacy systems into scalable cloud solutions with expert cloud migration services. We deliver seamless cloud infrastructure services that reduce costs, improve performance, and accelerate innovation"
                formLabel="Free Cloud Migration Services Consultation?"
                platforms={platforms}
                TrustBar={() => (
                    <motion.div
                        variants={itemVariants}
                        className="mt-6 flex flex-col sm:flex-row gap-3 items-center  text-sm  font-medium"
                    >
                        <div className="flex flex-col  gap-2">
                            <div className="flex gap-1 item-center"><Rocket className="w-5 h-5 text-primary"/><span className="text-lg">10+</span></div>
                            <span> Cloud Migrations Completed</span>
                        </div>
                        <div className="hidden sm:block w-[1px] h-10 bg-black"></div>
                        <div className="flex flex-col  gap-2">
                            <div className="flex gap-1 item-center"><Star className="w-5 h-5 text-yellow-500"/><span className="text-lg">99.9%</span></div>
                            <span> Uptime Guarantee</span>
                        </div>
                        <div className="hidden sm:block w-[1px] h-10 bg-black"></div>
                        <div className="flex flex-col  gap-2">
                            <div className="flex gap-1 item-center">  <Calculator className="w-5 h-5 text-secondary"/><span className="text-lg">40%</span></div>
                            <span> Average Cost Savings</span>
                        </div>
                    </motion.div>
                )}
            />
            <AboutSection
                title="Expert Cloud Migration Services for Business Transformation"
                description="2BTech delivers comprehensive cloud migration services that move your applications, data, and infrastructure to AWS, Azure, or Google Cloud with zero downtime. As a trusted cloud migration company, we combine technical expertise with strategic cloud consulting services to ensure your transition is smooth, secure, and cost-effective"
                descriptionTwo="Our cloud infrastructure services cover everything from initial assessment and planning through migration execution and ongoing optimization. Whether you need to migrate to AWS, require azure migration services, or want to leverage multi-cloud strategies, we build cloud solutions that scale with your busines"
                descriptionThree="We specialize in cloud cost optimization, helping businesses reduce infrastructure expenses by 30-50% while improving performance. Our cloud consulting services provide strategic guidance on architecture, security, compliance, and modernization, ensuring your cloud investment delivers maximum RO"
                src="/assets/services/cloudMigration/cloud.svg"
                width={440}
            />
            <SubServicesSection
                heading="OUR CLOUD ENGINEERING SERVICES"
                headingHighlight="Our Expertise"
                subtitle="Seamless transition from on-premises to cloud with our proven migration methodology. We handle application migration, database migration, and infrastructure migration with minimal disruption"
                services={servicesData}
            />
            <WhatIsSection
                heading="Why Migrate"
                highlight="to the Cloud?"
                description="Cloud migration services encompass the complete process of moving your digital assets, applications, databases, and IT infrastructure from on-premises data centers to cloud platforms like AWS, Azure, or Google Cloud. As a specialized cloud migration company, we handle every aspect of your cloud journey"
                definitionOne={definitionOne}
                definitionTwo={definitionTwo}
                imageOne="/assets/services/cloudMigration/cloud-management.svg"
                imageTwo="/assets/services/cloudMigration/Security.svg"
            />
            <CloudPlatformsSection/>
            <CloudMigrationProcess
                heading="Our Cloud"
                highlight="Migration Process"
                description="A structured and proven approach to ensure a smooth and cost-efficient transition to the cloud."
                steps={processSteps}
            />
            <TechStackServices
                techCategories={techCategories}
            />
            <OurFlowSection
                heading="for Cloud Migration?"
                headingHighlight="Why Choose 2BTech"
                services={[
                    {
                        title: "Certified Cloud Experts",
                        duration: "",
                        description:
                            "AWS, Azure, and Google Cloud certified architects and engineers. 10+ successful migrations completed.",
                    },
                    {
                        title: "Zero-Downtime Migrations",
                        duration: "",
                        description:
                            "Proven methodologies ensure business continuity. Most migrations completed with zero user impact.",
                    },
                    {
                        title: "Security First Approach",
                        duration: "",
                        description:
                            "Compliance with SOC 2, HIPAA, PCI DSS, and GDPR. Security and data protection are never compromised.",
                    },
                    {
                        title: "Cost Optimization Focus",
                        duration: "",
                        description:
                            "Average 40% cost reduction through rightsizing and FinOps. We align cloud spending with business value.",
                    },
                    {
                        title: "Transparent Process",
                        duration: "",
                        description:
                            "Weekly status updates, real-time dashboards, and direct access to the migration team. No surprises.",
                    },
                    {
                        title: "Post-Migration Support",
                        duration: "",
                        description:
                            "We don't disappear after go-live. Ongoing optimization, monitoring, and support included.",
                    },
                ]}
            />
            <IndustriesSection industries={industriesData}/>
            <Banner
                title="Optimize Your Cloud Migration Today"
                description="Get a Free Assessment & Customized Strategy"
                src="/assets/services/cloudMigration/cloudBannerBg.webp"
            />
            <FaqSection
                Faq={faqs}
            />
            <FinalCTASection
                heading="Ready to Modernize Your Infrastructure?"
                description="Schedule a free cloud assessment. We'll evaluate your current infrastructure, estimate migration costs and timeline, and create a customized cloud strategy"
                features={[
                    "Infrastructure audit and inventory",
                    "Cloud readiness evaluation",
                    "TCO analysis (cloud vs on-premises)",
                    "Migration roadmap and timeline",
                    "No-obligation proposal"
                ]}
            />
            <Footer/>
        </div>
    );
}
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
                buttonText="Get Free Cloud Assessment"
                TrustBar={() => (
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex flex-col sm:flex-row gap-3 items-center  text-sm  font-medium"
                    >
                        <div className="flex  flex-col  gap-2">
                            <Rocket className="w-5 h-5 text-primary"/>
                            <span>10+ Cloud Migrations Completed</span>
                        </div>
                        <div className="hidden sm:block w-[1px] h-10 bg-black"></div>
                        <div className="flex flex-col  gap-2">
                            <Star className="w-5 h-5 text-yellow-500"/>
                            <span>99.9% Uptime Guarantee</span>
                        </div>
                        <div className="hidden sm:block w-[1px] h-10 bg-black"></div>
                        <div className="flex flex-col  gap-2">
                            <Calculator className="w-5 h-5 text-secondary"/>
                            <span>40% Average Cost Savings</span>
                        </div>
                    </motion.div>
                )}
            />
            <AboutSection
                title="Expert Cloud Migration Services for Business Transformation"
                description="2BTech delivers comprehensive cloud migration services that move your applications, data, and infrastructure to AWS, Azure, or Google Cloud with zero downtime. As a trusted cloud migration company, we combine technical expertise with strategic cloud consulting services to ensure your transition is smooth, secure, and cost-effective"
                descriptionTwo="Our cloud infrastructure services cover everything from initial assessment and planning through migration execution and ongoing optimization. Whether you need to migrate to AWS, require azure migration services, or want to leverage multi-cloud strategies, we build cloud solutions that scale with your busines"
                descriptionThree="We specialize in cloud cost optimization, helping businesses reduce infrastructure expenses by 30-50% while improving performance. Our cloud consulting services provide strategic guidance on architecture, security, compliance, and modernization, ensuring your cloud investment delivers maximum RO"
                src="/assets/services/cloudMigration/cloud.webp"
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
                imageOne="/assets/services/cloudMigration/cloud-management.webp"
                imageTwo="/assets/services/cloudMigration/Security.svg"
            />
            <CloudPlatformsSection/>
            <CloudMigrationProcess/>
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
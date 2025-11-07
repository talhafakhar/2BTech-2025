import React from "react";
import { motion } from "framer-motion";

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
];

const CloudMigrationProcess = () => {
    return (
        <section className="relative overflow-hidden py-20">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center  mb-4"
                >
                    Our Cloud <span className="text-primary"> Migration Process</span>
                </motion.h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    A structured and proven approach to ensure a smooth, secure, and cost-effective transition to the cloud.
                </p>

                <div className="space-y-20">
                    {processSteps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-start gap-8 ${
                                idx % 2 === 0 ? "" : "md:flex-row-reverse"
                            }`}
                        >
                            <div className="md:w-1/2 space-y-4">
                                <h3 className="text-2xl font-semibold">
                                    {step.title}{" "}
                                    <span className="text-primary">({step.duration})</span>
                                </h3>

                                <ul className="space-y-3">
                                    {step.points.map((p, i) => (
                                        <li key={i}>
                                            <p className="font-medium text-secondary">{p.title}</p>
                                            <p className="text-gray-600 text-sm">{p.detail}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-blue-50 rounded p-6 border border-blue-100 shadow-sm">
                                <h4 className="font-semibold text-primary mb-2">
                                    Deliverables
                                </h4>
                                <p className="text-gray-700 text-sm">{step.deliverables}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CloudMigrationProcess;

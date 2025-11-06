import React from "react";
import {
    CheckCircle,
    TrendingUp,
    DollarSign,
    Puzzle,
    ShieldCheck,
    Infinity,
} from "lucide-react";
import {easeOut, motion, Variants} from "framer-motion";

export default function CustomSoftwareSection() {
    const benefits = [
        {
            icon: CheckCircle,
            title: "Perfect Fit",
            description:
                "Built specifically for your processes, not generic solutions that force you to adapt.",
        },
        {
            icon: TrendingUp,
            title: "Competitive Advantage",
            description:
                "Unique features and capabilities your competitors can't replicate.",
        },
        {
            icon: DollarSign,
            title: "Long-Term Value",
            description:
                "No recurring license fees or per-user charges. Better ROI over time.",
        },
        {
            icon: Puzzle,
            title: "Seamless Integration",
            description: "Connects perfectly with your existing systems and tools.",
        },
        {
            icon: Infinity,
            title: "Unlimited Scalability",
            description:
                "Grows with your business without limitations or upgrade costs.",
        },
        {
            icon: ShieldCheck,
            title: "True Ownership",
            description:
                "Complete control over features, updates, and direction. No vendor lock-in.",
        },
    ];

    // Framer Motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };
    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 80,
            scale: 0.95,
            filter: "blur(4px)",
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };



    const headingVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    };

    return (
        <div className="py-20 relative overflow-hidden ">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-10 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto  px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
                        Why Custom Software Beats{" "}
                        <span className="text-primary">
                            Off-the-Shelf Solutions
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-lg">
                        Tailored software gives your business the flexibility,
                        control, and scalability you deserve.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                transition={{ type: "spring"}}
                                className="border rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-primary/90 rounded-xl flex items-center justify-center">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() =>
                            window.open(
                                "https://calendly.com/talhafakhar/discoverycall",
                                "_blank"
                            )
                        }
                        className="border border-black font-semibold px-10 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:bg-black hover:text-white"
                    >
                        Discuss Your Project
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

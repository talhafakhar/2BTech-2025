"use client";
import React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
interface Metric {
    end: number;
    suffix: string;
    label: string;
    delay?: number;
}
const MetricCard: React.FC<Metric> = ({ end, suffix, label, delay = 0 }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const [display, setDisplay] = React.useState(0);
    React.useEffect(() => {
        if (inView) {
            const controls = animate(count, end, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, count, end]);
    React.useEffect(() => {
        return rounded.onChange((v) => setDisplay(v));
    }, [rounded]);
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="p-6 rounded-lg space-y-4 border border-black text-center"
        >
            <h2 className="text-6xl font-bold">
                {display}
                {suffix}
            </h2>
            <p>{label}</p>
        </motion.div>
    );
};
const KeyAndStackSection: React.FC = () => {
    const stackLogos = Array.from({ length: 24 }, (_, i) => ({
        src: `/assets/services/stack/stack-${i + 1}.svg`,
        alt: `Logo ${i + 1}`,
    }));

    const metrics: Metric[] = [
        { end: 60, suffix: "%", label: "time savings on routine tasks" },
        { end: 40, suffix: "%", label: "cost reduction in operational expenses" },
        { end: 5, suffix: "", label: "scalability without additional staffing" },
        { end: 24, suffix: "", label: "AI-powered availability" },
    ];

    return (
        <section className="py-16 px-4 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold mb-8"
                >
                    Key <span className="text-primary">Metrics</span>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {metrics.map((metric, index) => (
                        <MetricCard
                            key={index}
                            end={metric.end}
                            suffix={metric.suffix}
                            label={metric.label}
                            delay={index * 0.2}
                        />
                    ))}
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold mt-10"
                >
                    <span className="text-primary">Stack</span> we use
                </motion.h2>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
                    {stackLogos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex justify-center items-center bg-primary/10 py-4 rounded"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={50}
                                height={50}
                                style={{ objectFit: "contain" }}
                            />
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-14 flex justify-center"
                >
                    <button className="px-6 py-3 border border-black rounded flex items-center justify-center gap-2">
                        Connect with an AI Expert
                        <ArrowRight />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};


export default KeyAndStackSection;

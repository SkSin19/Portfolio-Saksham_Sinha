"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { value: 5, suffix: "+", label: "REAL PROJECTS SHIPPED" },
    { value: 10000, suffix: "+", label: "TOTAL USERS & VISITORS" },
    { value: 100, suffix: "+", label: "LIVE APP USERS" },
    { value: 8.39, suffix: "", label: "CGPA @ KIIT" },
];

function CountUp({ target, suffix }: { target: number | string; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView || typeof target === "string") return;
        let start = 0;
        const duration = 1500;
        const step = (target / duration) * 16;
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Number.isInteger(target) ? Math.floor(start) : Math.round(start * 100) / 100);
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span ref={ref}>
            {typeof target === "string" ? target : count}
            {suffix}
        </span>
    );
}

export default function StatsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 relative" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="border border-white/10 p-8 text-center hover:border-[#00f5ff]/30 transition-colors duration-300 group"
                        >
                            <div
                                className="text-5xl md:text-6xl font-black text-[#00f5ff] mb-3 group-hover:glow-cyan"
                                style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                                <CountUp target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-white/40 text-xs tracking-widest font-mono">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
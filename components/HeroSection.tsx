"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ROLES = ["Full-Stack Developer", "App Developer", "UI/UX Designer", "ML Engineer"];

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = ROLES[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % ROLES.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, roleIndex]);

    const scrollDown = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00f5ff]/5 blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ff006e]/5 blur-3xl"
                />
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block border border-[#00f5ff]/30 px-4 py-2 text-xs tracking-[0.3em] text-[#00f5ff] mb-8 font-mono"
                >
                    WELCOME TO MY DIGITAL REALM
                </motion.div>

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-none"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                >
                    <span className="text-gradient-cyan-pink">Saksham</span>
                    <span className="text-white">Sinha</span>
                </motion.h1>

                {/* Animated subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xl md:text-3xl mb-8 font-mono h-10 flex items-center justify-center gap-3"
                >
                    <span className="text-[#00f5ff]">Full-Stack</span>
                    <span className="text-white/60">Developer &amp;</span>
                    <span className="text-[#ff006e]">
                        {displayed}
                        <span className="cursor-blink">|</span>
                    </span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-12 font-mono"
                >
                    B.Tech CS @ KIIT Bhubaneswar · CGPA 8.39 · Building full-stack web & mobile apps,
                    leading teams, and driving real-world impact with 10,000+ users across projects.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex items-center justify-center gap-4 flex-wrap"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,245,255,0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="bg-[#00f5ff] text-black px-8 py-4 text-sm tracking-widest font-bold font-mono hover:bg-[#00f5ff]/90 transition-all"
                    >
                        VIEW PROJECTS
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,0,110,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="border border-[#ff006e] text-[#ff006e] px-8 py-4 text-sm tracking-widest font-mono hover:bg-[#ff006e]/10 transition-all"
                    >
                        GET IN TOUCH
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                    onClick={scrollDown}
                >
                    <span className="text-white/30 text-xs tracking-widest font-mono">SCROLL</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center pt-2"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00f5ff]" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    >
                        <ChevronDown size={16} className="text-white/30" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        title: "FRONTEND & MOBILE",
        color: "#00f5ff",
        skills: [
            { name: "React.js / Next.js", level: 92 },
            { name: "React Native", level: 88 },
            { name: "TypeScript / JavaScript", level: 90 },
            { name: "Figma / UI-UX Design", level: 82 },
        ],
    },
    {
        title: "BACKEND & DATABASE",
        color: "#ff006e",
        skills: [
            { name: "Node.js / Express.js", level: 88 },
            { name: "MongoDB", level: 87 },
            { name: "REST APIs", level: 90 },
            { name: "Java / C / C++", level: 78 },
        ],
    },
    {
        title: "TOOLS & DEVOPS",
        color: "#00ff88",
        skills: [
            { name: "Git / GitHub", level: 92 },
            { name: "AWS (Hosting & Services)", level: 75 },
            { name: "Linux Administration", level: 80 },
            { name: "Adobe Photoshop / Blender", level: 72 },
        ],
    },
    {
        title: "AI / ML & SOFT SKILLS",
        color: "#ffa500",
        skills: [
            { name: "Python / Machine Learning", level: 76 },
            { name: "Problem Solving", level: 93 },
            { name: "Mentorship & Leadership", level: 90 },
            { name: "Public Speaking", level: 85 },
        ],
    },
];

export default function SkillsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-32 grid-bg relative">
            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <div className="flex flex-col items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="border border-[#ff006e]/40 px-4 py-2 text-xs tracking-widest text-[#ff006e] font-mono mb-4"
                    >
                        ABILITIES PROTOCOL
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-center"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                        <span className="text-white">TECHNICAL </span>
                        <span className="text-[#ff006e] glow-pink">SKILLS</span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className="border border-white/10 p-6 bg-[#050508]/80 backdrop-blur-sm relative group hover:border-white/20 transition-all duration-300"
                        >
                            {/* Decorative Corner Light */}
                            <div
                                className="absolute top-0 right-0 w-2 h-2"
                                style={{ backgroundColor: category.color, boxShadow: `0 0 10px ${category.color}` }}
                            />

                            <h3
                                className="text-sm font-bold font-mono tracking-widest mb-6"
                                style={{ color: category.color }}
                            >
                                // {category.title}
                            </h3>

                            <div className="flex flex-col gap-5">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col gap-1.5 font-mono text-xs">
                                        <div className="flex justify-between text-white/70">
                                            <span>{skill.name}</span>
                                            <span style={{ color: category.color }}>{skill.level}%</span>
                                        </div>
                                        <div className="w-full h-1 bg-white/5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1.2, delay: idx * 0.1 + 0.3, ease: "easeOut" }}
                                                className="h-full"
                                                style={{
                                                    backgroundColor: category.color,
                                                    boxShadow: `0 0 8px ${category.color}`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

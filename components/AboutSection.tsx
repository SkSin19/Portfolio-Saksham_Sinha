"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Terminal, Code, Cpu, ShieldCheck, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTab, setActiveTab] = useState("profile");

    const terminalLogs = [
        "Initializing dev shell v1.0.0...",
        "Loading identity matrix...",
        "Status: ACTIVE",
        "Name: Saksham Sinha",
        "Role: Full-Stack Developer & Technical Executive",
        "Institute: KIIT Bhubaneswar // CGPA: 8.39",
        "Location: Bhubaneswar, India",
        "Focus: Web, Mobile, ML & UI/UX",
        "Availability: Open to opportunities.",
        "System: Online and ready to deploy."
    ];

    const experience = [
        {
            role: "KIIT E-Cell Technical Executive",
            period: "Nov 2024 – Present",
            highlights: [
                "Engineered official E-Cell website — 30% load time reduction, 10,000+ annual visitors",
                "Solo-architected 'Pandora's Paradox' hackathon platform — 2000+ registrations, 100% uptime",
                "Built E-Summit 2025 web portal with responsive UI for 2000+ attendees",
                "Qualified 100+ high-value partnership prospects via strategic lead generation",
            ],
        },
    ];

    return (
        <section id="about" className="py-32 bg-[#050508]/50 border-y border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="border border-[#00f5ff]/40 px-4 py-2 text-xs tracking-widest text-[#00f5ff] font-mono mb-4"
                    >
                        IDENTITY PROTOCOL
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-center"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                        <span className="text-white">ABOUT </span>
                        <span className="text-[#00f5ff] glow-cyan">ME</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Cyber Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 relative group"
                    >
                        {/* Corner brackets */}
                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#00f5ff]" />
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#00f5ff]" />
                        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#ff006e]" />
                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#ff006e]" />

                        <div className="border border-white/10 bg-[#07070c] p-2 relative overflow-hidden">
                            <div className="relative aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src="/profile.jpg"
                                    alt="Saksham Sinha"
                                    width={640}
                                    height={360}
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                                    priority
                                />
                                {/* Cyber HUD Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60" />
                                <div className="absolute top-2 left-2 text-[9px] font-mono bg-black/60 text-[#00f5ff] px-2 py-0.5 border border-[#00f5ff]/20">
                                    SYS.REC // SAKSHAM
                                </div>
                                <div className="absolute bottom-2 right-2 text-[9px] font-mono bg-black/60 text-[#ff006e] px-2 py-0.5 border border-[#ff006e]/20">
                                    KIIT_ECELL
                                </div>
                                {/* Scanline effect */}
                                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] bg-[size:100%_4px,_6px_100%] opacity-20" />
                            </div>
                        </div>

                        {/* Education badge below image */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="mt-4 border border-white/10 bg-[#07070c] p-3 flex items-center gap-3"
                        >
                            <GraduationCap size={16} className="text-[#00f5ff] shrink-0" />
                            <div className="font-mono text-[10px] leading-relaxed">
                                <div className="text-white/80">B.Tech in Computer Science</div>
                                <div className="text-white/40">KIIT Bhubaneswar · CGPA 8.39 · 2024–2028</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Center: Terminal Shell */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:col-span-4 border border-white/10 bg-[#07070c] overflow-hidden self-stretch flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#0a0a14]">
                            <div className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="text-[10px] text-white/40 font-mono tracking-widest flex items-center gap-1">
                                <Terminal size={10} className="text-[#00f5ff]" /> bash --profile.sh
                            </span>
                            <span className="w-6" />
                        </div>
                        <div className="p-5 font-mono text-xs leading-relaxed text-white/70 flex-1">
                            {terminalLogs.map((log, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className={
                                        log.includes("ACTIVE")
                                            ? "text-[#00ff88]"
                                            : log.includes("Name:")
                                            ? "text-[#ff006e]"
                                            : log.includes("Institute:")
                                            ? "text-[#00f5ff]"
                                            : "text-white/60"
                                    }
                                >
                                    <span className="text-[#00f5ff]/70 mr-2">&gt;</span> {log}
                                </motion.div>
                            ))}
                            <motion.div
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 h-3.5 bg-[#ff006e] ml-2 align-middle"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Info Card & Story */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 flex flex-col gap-6"
                    >
                        <div className="flex gap-4 border-b border-white/10 pb-4">
                            {["profile", "experience"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`text-xs font-mono tracking-widest pb-2 uppercase relative transition-colors ${
                                        activeTab === tab ? "text-[#00f5ff]" : "text-white/40 hover:text-white/70"
                                    }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTabUnderline"
                                            className="absolute bottom-0 left-0 right-0 h-px bg-[#00f5ff]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {activeTab === "profile" ? (
                            <div className="flex flex-col gap-4 font-mono text-sm leading-relaxed text-white/70">
                                <p>
                                    Hey, I&apos;m <span className="text-[#00f5ff]">Saksham Sinha</span> — a
                                    Full-Stack Developer and Technical Executive at KIIT E-Cell. I build
                                    scalable web & mobile apps, mentor teams, and turn ideas into products
                                    with real user impact.
                                </p>
                                <p>
                                    Proficient in <span className="text-[#ff006e]">Next.js, React Native, Node.js, MongoDB</span> and more.
                                    I also work with ML, Figma, and Blender to deliver end-to-end solutions.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="border border-white/5 bg-[#050508] p-4 flex gap-3 items-center hover:border-[#00f5ff]/20 transition-colors">
                                        <Code size={18} className="text-[#00f5ff]" />
                                        <div>
                                            <div className="text-white font-bold text-xs">Full-Stack Dev</div>
                                            <div className="text-[10px] text-white/40">Web & Mobile Apps</div>
                                        </div>
                                    </div>
                                    <div className="border border-white/5 bg-[#050508] p-4 flex gap-3 items-center hover:border-[#ff006e]/20 transition-colors">
                                        <Cpu size={18} className="text-[#ff006e]" />
                                        <div>
                                            <div className="text-white font-bold text-xs">30% Faster</div>
                                            <div className="text-[10px] text-white/40">Load time optimizations</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-5 font-mono text-sm text-white/70">
                                {experience.map((exp, i) => (
                                    <div key={i} className="flex flex-col gap-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <span className="text-[#ff006e] font-bold text-xs leading-snug">{exp.role}</span>
                                            <span className="text-[10px] text-white/30 whitespace-nowrap shrink-0">{exp.period}</span>
                                        </div>
                                        <ul className="flex flex-col gap-2">
                                            {exp.highlights.map((h, j) => (
                                                <li key={j} className="flex gap-2 text-[11px] leading-relaxed text-white/60">
                                                    <span className="text-[#00f5ff] mt-0.5 shrink-0">▸</span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                <div className="border border-[#00f5ff]/20 bg-[#00f5ff]/5 p-4 flex gap-3 items-center mt-2">
                                    <ShieldCheck size={20} className="text-[#00f5ff]" />
                                    <span className="text-xs text-[#00f5ff] leading-relaxed">
                                        Coursework: OOP · DBMS · Probability & Statistics · Linux Administration
                                    </span>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
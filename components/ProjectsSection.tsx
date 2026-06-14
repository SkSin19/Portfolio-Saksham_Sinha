"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

// Custom Github icon (lucide-react version may not export Github)
const Github = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const projects = [
    {
        id: 1,
        title: "Kute: Dating & Chat App",
        type: "MOBILE APP",
        typeColor: "#00f5ff",
        period: "May 2025 – Nov 2025",
        description:
            "Modern dating app with advanced matching algorithms and interactive games to boost engagement. Achieved 100+ live users.",
        tech: ["React Native", "Node.js", "Express.js", "MongoDB"],
        accent: "#00f5ff",
        dotColor: "#00f5ff",
        borderColor: "rgba(0,245,255,0.3)",
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        id: 2,
        title: "Rant",
        type: "WELLNESS PLATFORM",
        typeColor: "#ff006e",
        period: "Nov 2025 – Jan 2026",
        description:
            "Peer-to-peer platform connecting users with trained listeners for real-time mental health support. Proven to improve mental health for 100+ live users in a first-rate city.",
        tech: ["React Native", "Node.js", "MongoDB", "WebSockets"],
        accent: "#ff006e",
        dotColor: "#ff006e",
        borderColor: "rgba(255,0,110,0.3)",
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        id: 3,
        title: "KIIT E-Cell Official Website",
        type: "WEB APP",
        typeColor: "#00ff88",
        period: "Jan 2025 – Oct 2025",
        description:
            "Played a major part in development of the official KIIT E-Cell Webpage with 10,000+ visits. Refactored code to improve load times by 20%.",
        tech: ["Next.js", "React", "Node.js", "MongoDB"],
        accent: "#00ff88",
        dotColor: "#00ff88",
        borderColor: "rgba(0,255,136,0.3)",
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        id: 4,
        title: "E-Summit 2025 Official Website",
        type: "EVENT PLATFORM",
        typeColor: "#ffa500",
        period: "Aug 2025 – Present",
        description:
            "Official E-Summit 2025 Webpage with 3,000+ visits and 800+ live applications. Tech stack: Next.js, Express.js, Node.js, MongoDB, AWS. Improved load times by 30%.",
        tech: ["Next.js", "Express.js", "Node.js", "MongoDB", "AWS"],
        accent: "#ffa500",
        dotColor: "#ffa500",
        borderColor: "rgba(255,165,0,0.3)",
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        id: 5,
        title: "Build School 2026 Website",
        type: "COMMUNITY PLATFORM",
        typeColor: "#bf5fff",
        period: "Aug 2025 – Present",
        description:
            "Led a team of colleagues to build the Build School website from scratch. Gained 2,000+ visits from students and companies, bridging mentors and students.",
        tech: ["Next.js", "React", "Node.js", "MongoDB"],
        accent: "#bf5fff",
        dotColor: "#bf5fff",
        borderColor: "rgba(191,95,255,0.3)",
        liveUrl: "#",
        sourceUrl: "#",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group cursor-pointer"
        >
            <div
                className="border transition-all duration-300 overflow-hidden h-full flex flex-col"
                style={{
                    borderColor: hovered ? project.borderColor : "rgba(255,255,255,0.08)",
                    boxShadow: hovered ? `0 0 30px ${project.accent}20` : "none",
                }}
            >
                {/* Project preview */}
                <div className="relative bg-[#0d0d18] h-44 flex items-center justify-center overflow-hidden shrink-0">
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            animate={hovered ? { scale: [1, 1.3, 1] } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: project.dotColor }}
                        />
                        <div
                            className="absolute w-12 h-12 rounded-full border border-dashed animate-spin"
                            style={{ borderColor: project.dotColor, animationDuration: "3s" }}
                        />
                    </div>
                    <div className="absolute top-3 right-3 text-[9px] font-mono text-white/30 border border-white/10 px-2 py-0.5">
                        {project.period}
                    </div>
                    <div className="absolute bottom-3 text-xs font-mono tracking-widest text-white/30">
                        {project.type}
                    </div>

                    {/* Hover overlay with buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hovered ? 1 : 0 }}
                        className="absolute inset-0 bg-[#050508]/80 flex items-center justify-center gap-4"
                    >
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="border text-xs px-5 py-2.5 font-mono tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                            style={{ borderColor: project.accent, color: project.accent }}
                        >
                            <ExternalLink size={12} /> LIVE
                        </a>
                        <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-white/30 text-white/60 text-xs px-5 py-2.5 font-mono tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                        >
                            <Github size={12} /> CODE
                        </a>
                    </motion.div>
                </div>

                {/* Project info */}
                <div className="p-5 bg-[#050508] flex flex-col gap-3 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <h3
                            className="text-base font-bold font-mono leading-snug"
                            style={{ color: project.accent }}
                        >
                            {project.title}
                        </h3>
                        <span
                            className="text-[10px] px-2 py-0.5 font-mono tracking-wider shrink-0 mt-0.5"
                            style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
                        >
                            {project.type}
                        </span>
                    </div>
                    <p className="text-white/50 text-xs font-mono leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tech.map((t) => (
                            <span key={t} className="border border-white/15 text-white/40 text-[10px] px-2 py-0.5 font-mono">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-32 grid-bg relative">
            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="flex justify-center mb-8"
                >
                    <div className="border border-[#ff006e]/40 px-4 py-2 text-xs tracking-widest text-[#ff006e] font-mono">
                        PORTFOLIO
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black text-center mb-6"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                >
                    <span className="text-white">FEATURED </span>
                    <span className="text-[#ff006e] glow-pink">PROJECTS</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="text-white/40 text-center font-mono text-sm max-w-lg mx-auto mb-16"
                >
                    Real-world products I&apos;ve built and shipped — from dating apps with 100+ active users to
                    event platforms handling 3,000+ visitors.
                </motion.p>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* View all */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center"
                >
                    <motion.a
                        href="https://github.com/SkSin19"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,245,255,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="border border-[#00f5ff] text-[#00f5ff] px-12 py-4 text-sm tracking-widest font-mono hover:bg-[#00f5ff]/5 transition-all flex items-center gap-3"
                    >
                        <Github size={16} /> VIEW ALL ON GITHUB
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
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
        liveUrl: "https://play.google.com/store/apps/details?id=com.dating.kute&hl=en",
        sourceUrl: "https://github.com/SkSin19/Kute",
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
        title: "Digital Security Solutions",
        type: "WEB APP",
        typeColor: "#00ff88",
        period: "2025 – Present",
        description:
            "Full-stack e-commerce and enquiry platform for a security camera products business. Features 3D CCTV model hero, Cloudflare Turnstile bot protection, live MongoDB product catalog, and animated UI.",
        tech: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Three.js"],
        accent: "#00ff88",
        dotColor: "#00ff88",
        borderColor: "rgba(0,255,136,0.3)",
        liveUrl: "https://digitalsecuritysolutions.in",
        sourceUrl: "https://github.com/SkSin19/DSS_Website",
    },
    {
        id: 4,
        title: "KIIT E-Cell Official App",
        type: "MOBILE APP",
        typeColor: "#ffa500",
        period: "2025 – Present",
        description:
            "Official mobile app for KIIT E-Cell built with Expo Router. Handles event listings, member management, and organizational updates for one of India's largest student entrepreneurship cells.",
        tech: ["React Native", "Expo Router", "TypeScript", "Node.js", "MongoDB"],
        accent: "#ffa500",
        dotColor: "#ffa500",
        borderColor: "rgba(255,165,0,0.3)",
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        id: 5,
        title: "KIIT E-Cell Official Website",
        type: "WEB APP",
        typeColor: "#bf5fff",
        period: "Jan 2025 – Oct 2025",
        description:
            "Played a major part in development of the official KIIT E-Cell Webpage with 10,000+ visits. Refactored code to improve load times by 20%.",
        tech: ["Next.js", "React", "Node.js", "MongoDB"],
        accent: "#bf5fff",
        dotColor: "#bf5fff",
        borderColor: "rgba(191,95,255,0.3)",
        liveUrl: "https://www.kiitecell.org/",
        sourceUrl: "https://www.kiitecell.org/",
    },
    {
        id: 6,
        title: "E-Summit 2025 Official Website",
        type: "EVENT PLATFORM",
        typeColor: "#ff6b35",
        period: "Aug 2025 – Present",
        description:
            "Official E-Summit 2025 Webpage with 3,000+ visits and 800+ live applications. Improved load times by 30%.",
        tech: ["Next.js", "Express.js", "Node.js", "MongoDB", "AWS"],
        accent: "#ff6b35",
        dotColor: "#ff6b35",
        borderColor: "rgba(255,107,53,0.3)",
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        id: 7,
        title: "Build School 2026 Website",
        type: "COMMUNITY PLATFORM",
        typeColor: "#f7df1e",
        period: "Aug 2025 – Present",
        description:
            "Led a team of colleagues to build the Build School website from scratch. Gained 2,000+ visits from students and companies, bridging mentors and students.",
        tech: ["Next.js", "React", "Node.js", "MongoDB"],
        accent: "#f7df1e",
        dotColor: "#f7df1e",
        borderColor: "rgba(247,223,30,0.3)",
        liveUrl: "https://www.kiitecell.org/build-school",
        sourceUrl: "https://www.kiitecell.org/build-school",
    },
];

const hackathonProjects = [
    {
        id: "h1",
        title: "Medisphere",
        type: "HACKATHON",
        subtitle: "Medicine at Ease",
        description:
            "Hackathon project enabling easy access to medicines and health resources. Built under time pressure with a complete mobile-first experience.",
        tech: ["React Native", "Node.js", "Express.js", "MongoDB"],
        accent: "#00d4aa",
        borderColor: "rgba(0,212,170,0.3)",
        sourceUrl: "#",
    },
    {
        id: "h2",
        title: "Kraving",
        type: "HACKATHON",
        subtitle: "Hostellite Food App",
        description:
            "Food ordering and discovery app tailored for hostel students, connecting them with nearby mess and canteen options on campus.",
        tech: ["React Native", "Node.js", "MongoDB"],
        accent: "#ff4757",
        borderColor: "rgba(255,71,87,0.3)",
        sourceUrl: "#",
    },
    {
        id: "h3",
        title: "Pixelligence",
        type: "HACKATHON",
        subtitle: "AI-Powered Photo Search",
        description:
            "Google Photos-inspired gallery app that uses Gemini API to auto-tag images with semantic keywords, enabling natural language photo search.",
        tech: ["React Native", "Gemini API", "Node.js", "MongoDB"],
        accent: "#a29bfe",
        borderColor: "rgba(162,155,254,0.3)",
        sourceUrl: "#",
    },
    {
        id: "h4",
        title: "Reroll",
        type: "HACKATHON",
        subtitle: "Social Media for Education",
        description:
            "Education-focused social media platform where students share knowledge, collaborate on projects, and build learning communities.",
        tech: ["React Native", "Node.js", "Express.js", "MongoDB", "WebSockets"],
        accent: "#fd9644",
        borderColor: "rgba(253,150,68,0.3)",
        sourceUrl: "#",
    },
    {
        id: "h5",
        title: "Pandora's Paradox",
        type: "HACKATHON",
        subtitle: "Hackathon Platform",
        description:
            "Full-stack hackathon registration and management platform that handled large-scale participant registrations smoothly under peak load.",
        tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
        accent: "#e84393",
        borderColor: "rgba(232,67,147,0.3)",
        sourceUrl: "#",
    },
];

const sideProjects = [
    {
        id: "s1",
        title: "Alpaca Classifier",
        subtitle: "Deep Learning · End-to-End",
        description:
            "End-to-end mobile app that classifies whether an image contains an alpaca or not. React Native frontend, Node.js middleware, FastAPI + TensorFlow inference backend.",
        tech: ["React Native", "Node.js", "FastAPI", "TensorFlow"],
        accent: "#74b9ff",
        sourceUrl: "#",
    },
    {
        id: "s2",
        title: "Housing Prices Predictor",
        subtitle: "Machine Learning",
        description:
            "Classic ML regression project predicting housing prices from feature data. Covers data preprocessing, feature engineering, and model evaluation.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        accent: "#55efc4",
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
            transition={{ duration: 0.7, delay: index * 0.08 }}
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

function HackathonCard({ project, index }: { project: typeof hackathonProjects[0]; index: number }) {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative cursor-pointer"
        >
            <div
                className="border transition-all duration-300 p-5 h-full flex flex-col gap-3 bg-[#050508]"
                style={{
                    borderColor: hovered ? project.borderColor : "rgba(255,255,255,0.08)",
                    boxShadow: hovered ? `0 0 20px ${project.accent}18` : "none",
                }}
            >
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h3 className="text-sm font-bold font-mono" style={{ color: project.accent }}>
                            {project.title}
                        </h3>
                        <p className="text-[10px] font-mono text-white/30 mt-0.5">{project.subtitle}</p>
                    </div>
                    <span
                        className="text-[9px] px-2 py-0.5 font-mono tracking-wider shrink-0"
                        style={{ backgroundColor: `${project.accent}18`, color: project.accent }}
                    >
                        {project.type}
                    </span>
                </div>
                <p className="text-white/40 text-[11px] font-mono leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <span key={t} className="border border-white/10 text-white/30 text-[9px] px-1.5 py-0.5 font-mono">
                            {t}
                        </span>
                    ))}
                </div>
                <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[10px] font-mono text-white/30 hover:text-white/60 transition-colors mt-1 w-fit"
                >
                    <Github size={10} /> CODE
                </a>
            </div>
        </motion.div>
    );
}

function SideProjectCard({ project, index }: { project: typeof sideProjects[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-white/06 bg-[#050508] p-5 flex gap-4 items-start hover:border-white/15 transition-all duration-300"
        >
            <div
                className="w-2 h-2 rounded-full shrink-0 mt-1.5"
                style={{ backgroundColor: project.accent }}
            />
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-sm font-bold font-mono" style={{ color: project.accent }}>
                        {project.title}
                    </span>
                    <span className="text-[10px] font-mono text-white/30">{project.subtitle}</span>
                </div>
                <p className="text-white/40 text-[11px] font-mono leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tech.map((t) => (
                        <span key={t} className="border border-white/10 text-white/30 text-[9px] px-1.5 py-0.5 font-mono">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white/20 hover:text-white/50 transition-colors shrink-0"
            >
                <Github size={14} />
            </a>
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

                {/* Main projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* Hackathon projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-white/08" />
                        <div className="border border-white/20 px-4 py-1.5 text-[10px] tracking-widest text-white/40 font-mono">
                            HACKATHON BUILDS
                        </div>
                        <div className="h-px flex-1 bg-white/08" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {hackathonProjects.map((project, i) => (
                            <HackathonCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                </motion.div>

                {/* Side projects / experiments */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px flex-1 bg-white/08" />
                        <div className="border border-white/20 px-4 py-1.5 text-[10px] tracking-widest text-white/40 font-mono">
                            SIDE PROJECTS &amp; EXPERIMENTS
                        </div>
                        <div className="h-px flex-1 bg-white/08" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        {sideProjects.map((project, i) => (
                            <SideProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                </motion.div>

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
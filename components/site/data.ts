export const profile = {
    name: "Saksham Sinha",
    first: "Saksham",
    role: "Full-Stack & Mobile Developer",
    email: "sakshamsinha9999@gmail.com",
    phone: "+917394062133",
    location: "Bhubaneswar, India",
    github: "https://github.com/SkSin19",
    linkedin: "https://www.linkedin.com/in/saksham-sinha-6b6376301/",
    education: "B.Tech in Computer Science · KIIT Bhubaneswar · CGPA 8.39 · 2024–2028",
};

export type Theme = "yellow" | "orange" | "red" | "dark";

export type Project = {
    title: string;
    category: string;
    period: string;
    description: string;
    tech: string[];
    stats: string[];
    theme: Theme;
    logo?: string;
    liveUrl?: string;
    sourceUrl?: string;
};

export const projects: Project[] = [
    {
        title: "HoneyBee",
        category: "AI Homework Checker",
        period: "2026",
        description:
            "Snap a photo of a solution and HoneyBee reads it, verifies the maths symbolically and pinpoints exactly what went wrong. Expo app backed by a FastAPI pipeline with OCR, LaTeX extraction and a fine-tuned transformer that classifies 13 kinds of mistakes.",
        tech: ["React Native", "Expo Router", "FastAPI", "PyTorch", "Transformers", "OCR"],
        stats: ["13 error classes", "Fine-tuned classifier", "Symbolic math check"],
        theme: "yellow",
        sourceUrl: "https://github.com/SkSin19/Honey-Bee",
    },
    {
        title: "Kute",
        category: "Dating & Chat App",
        period: "May 2025 – Nov 2025",
        description:
            "Modern dating app with advanced matching algorithms and interactive games to boost engagement.",
        tech: ["React Native", "Node.js", "Express.js", "MongoDB"],
        stats: ["100+ live users", "Live on Play Store", "Real-time chat"],
        theme: "orange",
        logo: "/images/KUTE_LOGO.webp",
        liveUrl: "https://play.google.com/store/apps/details?id=com.dating.kute&hl=en",
        sourceUrl: "https://github.com/SkSin19/Kute",
    },
    {
        title: "Rant",
        category: "Wellness Platform",
        period: "Nov 2025 – Jan 2026",
        description:
            "Peer-to-peer platform connecting users with trained listeners for real-time mental health support.",
        tech: ["React Native", "Node.js", "MongoDB", "WebSockets"],
        stats: ["100+ live users", "Real-time sessions", "Trained listeners"],
        theme: "red",
    },
    {
        title: "Digital Security Solutions",
        category: "E-Commerce Platform",
        period: "2025 – Present",
        description:
            "Full-stack e-commerce and enquiry platform for a security camera business, with a 3D CCTV hero, Cloudflare Turnstile bot protection and a live MongoDB catalog.",
        tech: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Three.js"],
        stats: ["3D product hero", "Live catalog", "Bot protected"],
        theme: "dark",
        logo: "/images/DSS_Logo.webp",
        liveUrl: "https://digitalsecuritysolutions.in",
        sourceUrl: "https://github.com/SkSin19/DSS_Website",
    },
    {
        title: "KIIT E-Cell App",
        category: "Community App",
        period: "2025 – Present",
        description:
            "Official mobile app for KIIT E-Cell built with Expo Router - events, member management and updates for one of India's largest student entrepreneurship cells.",
        tech: ["React Native", "Expo Router", "TypeScript", "Node.js", "MongoDB"],
        stats: ["Official app", "Events & members", "Expo Router"],
        theme: "yellow",
        logo: "/images/E-Cell_Logo.webp",
    },
    {
        title: "KIIT E-Cell Website",
        category: "Community Website",
        period: "Jan 2025 – Oct 2025",
        description:
            "Played a major part in building the official KIIT E-Cell website and refactored it for faster loads.",
        tech: ["Next.js", "React", "Node.js", "MongoDB"],
        stats: ["10,000+ visits", "20% faster loads", "Core contributor"],
        theme: "orange",
        logo: "/images/E-Cell_Logo.webp",
        liveUrl: "https://www.kiitecell.org/",
    },
    {
        title: "E-Summit 2025",
        category: "Flagship Event Platform",
        period: "Aug 2025 – Present",
        description: "Official E-Summit 2025 website handling registrations and applications for the flagship event.",
        tech: ["Next.js", "Express.js", "Node.js", "MongoDB", "AWS"],
        stats: ["3,000+ visits", "800+ applications", "30% faster loads"],
        theme: "red",
        logo: "/images/ESummit_Logo.webp",
    },
    {
        title: "Build School 2026",
        category: "Community Platform",
        period: "Aug 2025 – Present",
        description:
            "Led a team to build the Build School website from scratch, bridging mentors, companies and students.",
        tech: ["Next.js", "React", "Node.js", "MongoDB"],
        stats: ["2,000+ visits", "Team lead", "Built from scratch"],
        theme: "dark",
        logo: "/images/BuildSchool_Logo.webp",
        liveUrl: "https://www.kiitecell.org/build-school",
    },
    {
        title: "Pandora's Paradox",
        category: "Hackathon Event Website",
        period: "Aug 2025 – Sep 2025",
        description: "Single-handedly built the official website for the Pandora's Paradox hackathon.",
        tech: ["Next.js", "React", "Node.js", "MongoDB"],
        stats: ["3,000+ visits", "Solo build", "100% uptime"],
        theme: "yellow",
        liveUrl: "https://www.kiitecell.org/build-school",
    },
];

export const smallProjects = [
    { title: "Medisphere", kind: "Hackathon", subtitle: "Medicine at ease", tech: ["React Native", "Node.js", "MongoDB"] },
    { title: "Kraving", kind: "Hackathon", subtitle: "Hostellite food app", tech: ["React Native", "Node.js", "MongoDB"] },
    { title: "Pixelligence", kind: "Hackathon", subtitle: "AI-powered photo search", tech: ["React Native", "Gemini API", "Node.js"] },
    { title: "Reroll", kind: "Hackathon", subtitle: "Social media for education", tech: ["React Native", "WebSockets", "MongoDB"] },
    { title: "Caelifi", kind: "Hackathon", subtitle: "IoT smart solar", tech: ["Next.js", "Node.js", "IoT"] },
    { title: "Alpaca Classifier", kind: "Side project", subtitle: "Deep learning, end-to-end", tech: ["React Native", "FastAPI", "TensorFlow"] },
    { title: "Housing Prices Predictor", kind: "Side project", subtitle: "Machine learning", tech: ["Python", "Scikit-learn", "Pandas"] },
];

export const experience = [
    {
        role: "Founder",
        org: "Quarks Digital",
        period: "Present",
        place: "Bhubaneswar, Odisha",
        description:
            "Founded a digital marketing agency that helps businesses grow through SEO, social media marketing, web and app development, brand strategy and business automation.",
        tags: ["Leadership", "Web & App Dev", "SEO", "Brand Strategy"],
        link: { label: "Quarks on LinkedIn", href: "https://www.linkedin.com/company/quarksdigital/" },
    },
    {
        role: "Technical Executive",
        org: "KIIT E-Cell",
        period: "Nov 2024 – Present",
        place: "KIIT Bhubaneswar",
        description:
            "Engineered the official E-Cell website (30% faster, 10,000+ yearly visitors), solo-built the Pandora's Paradox hackathon platform (2000+ registrations, 100% uptime) and the E-Summit 2025 portal for 2000+ attendees.",
        tags: ["Next.js", "Node.js", "MongoDB", "Team Lead"],
        link: { label: "kiitecell.org", href: "https://www.kiitecell.org/" },
    },
    {
        role: "Intern",
        org: "InAmigos NGO",
        period: "Internship",
        place: "Remote",
        description:
            "Internship with InAmigos, a non-profit working on social-impact initiatives - contributing to its community work and outreach.",
        tags: ["Social Impact", "Outreach", "Teamwork"],
    },
];

export const stats = [
    { label: "Total users & visitors", value: "10K+", theme: "yellow" as Theme },
    { label: "Live app users", value: "100+", theme: "orange" as Theme },
    { label: "Faster load times", value: "30%", theme: "red" as Theme },
    { label: "Real projects shipped", value: "9+", theme: "dark" as Theme },
];

export const steps = [
    {
        n: "01",
        title: "Understand",
        body: "I read the whole problem before touching code - who uses it, what matters, and what is worth keeping.",
    },
    {
        n: "02",
        title: "Design",
        body: "Wireframes, data models and APIs mapped out in Figma and on paper so the build has a clear spine.",
    },
    {
        n: "03",
        title: "Build",
        body: "Next.js, React Native, Node and MongoDB - shipped in small, tested steps with performance watched throughout.",
    },
    {
        n: "04",
        title: "Ship & Grow",
        body: "Deploy, measure real users, then iterate. That's how projects went from zero to thousands of visits.",
    },
];

export const toolkit = [
    {
        title: "Frontend & Mobile",
        items: ["React.js / Next.js", "React Native / Expo", "TypeScript / JavaScript", "Figma / UI-UX"],
    },
    {
        title: "Backend & Data",
        items: ["Node.js / Express.js", "MongoDB", "REST APIs & WebSockets", "Java / C / C++"],
    },
    {
        title: "AI / ML",
        items: ["Python", "PyTorch / TensorFlow", "FastAPI", "Transformers & OCR"],
    },
    {
        title: "Tools & DevOps",
        items: ["Git / GitHub", "AWS hosting", "Linux", "Photoshop / Blender"],
    },
    {
        title: "KIIT E-Cell · Technical Executive",
        items: [
            "Official website - 30% faster, 10,000+ yearly visitors",
            "Pandora's Paradox - 2000+ registrations, 100% uptime",
            "E-Summit 2025 portal for 2000+ attendees",
        ],
    },
    {
        title: "Beyond code",
        items: ["Problem solving", "Mentorship & leadership", "Public speaking", "Hackathons"],
    },
];

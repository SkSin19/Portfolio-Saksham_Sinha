"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { CoverPoster } from "./Poster";
import Figure, { FIGURE_ASPECT, type Tint } from "./Figure";
import { profile, projects, stats } from "./data";

gsap.registerPlugin(ScrollTrigger);

const covers = projects.map((p) => ({
    title: p.title === "Digital Security Solutions" ? "DSS" : p.title,
    category: p.category,
    theme: p.theme,
    logo: p.logo,
    bee: p.title === "HoneyBee",
}));

const faceLooks: { bg: string; text: string; tint: Tint }[] = [
    { bg: "bg-yellow", text: "text-ink", tint: "yellow" },
    { bg: "bg-orange", text: "text-ink", tint: "orange" },
    { bg: "bg-red", text: "text-paper", tint: "red" },
    { bg: "bg-ink", text: "text-yellow", tint: "yellow" },
];

// Covers repeat so the drifting row always spans the screen
const strip = [...covers, ...covers];

// Hero + stats in one pinned sequence: the yellow figure shrinks down into a 3D box
// while a giant sentence slides past, then the box turns to show each stat.
export default function HeroSequence() {
    const root = useRef<HTMLElement>(null);
    const stripScroll = useRef<HTMLDivElement>(null);
    const stripIntro = useRef<HTMLDivElement>(null);
    const frame = useRef<HTMLDivElement>(null);
    const line = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const vw = () => window.innerWidth;
            const vh = () => root.current!.offsetHeight;
            const heroH = () => Math.min(vh() * (vw() < 768 ? 0.62 : 0.86), (vw() * (vw() < 768 ? 0.95 : 0.5)) / FIGURE_ASPECT);
            const cardW = () => Math.min(vw() * 0.6, 300);
            const cardH = () => cardW() * (4 / 3);

            gsap.set(line.current, { x: vw, yPercent: -50 });

            // Load-in (separate elements from the scroll tweens so the two never fight)
            const intro = gsap.timeline({ paused: true });
            intro
                .from(".hero-line > span", { yPercent: 110, duration: 1, stagger: 0.08, ease: "power4.out" })
                .from(".seq-figure-in", { y: 160, autoAlpha: 0, duration: 1.3, ease: "power3.out" }, 0.1)
                .from(stripIntro.current, { autoAlpha: 0, y: 60, duration: 1.2, ease: "power3.out" }, 0.3)
                .from(".hero-fade", { autoAlpha: 0, y: 20, duration: 0.6, stagger: 0.08 }, 0.8);
            const play = () => intro.play();
            window.addEventListener("loader:done", play, { once: true });
            const fallback = setTimeout(play, 3600);

            // Scroll sequence
            const tl = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    trigger: root.current,
                    start: "top top",
                    end: () => `+=${vh() * 4.5}`,
                    pin: true,
                    scrub: 0.8,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(".hero-ui", { y: -120, autoAlpha: 0, duration: 1.2 }, 0)
                // Covers keep drifting, they just rise out of the way
                .to(stripScroll.current, { y: () => -vh() * 0.36, duration: 2, ease: "power1.inOut" }, 0)
                .fromTo(
                    frame.current,
                    {
                        "--w": () => `${heroH() * FIGURE_ASPECT}px`,
                        "--h": () => `${heroH()}px`,
                        "--b": "0px",
                        "--r": "0px",
                    },
                    {
                        "--w": () => `${cardW()}px`,
                        "--h": () => `${cardH()}px`,
                        "--b": () => `${(vh() - cardH()) / 2}px`,
                        "--r": "22px",
                        duration: 2,
                        ease: "power2.inOut",
                    },
                    0
                )
                .to(".seq-figure-0", { top: "24%", duration: 2, ease: "power2.inOut" }, 0)
                .to(".seq-bg-0", { opacity: 1, duration: 0.8 }, 1.2)
                .to(".seq-label-0", { opacity: 1, y: 0, duration: 0.6 }, 1.6)
                .to(".seq-side", { autoAlpha: 1, duration: 0.3 }, 1.8)
                .to(line.current, { x: () => -(line.current!.scrollWidth - vw() * 0.35), duration: 10 }, 0.4);

            // Box turns a quarter at a time
            [3, 5.4, 7.8].forEach((t, i) => {
                tl.to(frame.current, { "--ry": `${-(i + 1) * 90}deg`, duration: 1.6, ease: "power2.inOut" }, t);
            });
            tl.to({}, { duration: 0.6 });

            return () => {
                clearTimeout(fallback);
                window.removeEventListener("loader:done", play);
            };
        }, root);

// Drift the covers sideways in one row; each card's height and tilt follow a gentle
        // wave across the screen, so they sit side by side at different heights.
        const cards = Array.from(stripIntro.current?.querySelectorAll<HTMLElement>(".strip-card") ?? []);
        let offset = 0;
        const tick = (_t: number, dt: number) => {
            const w = window.innerWidth;
            const mobile = w < 768;
            const gap = mobile ? 150 : 250;
            const total = gap * cards.length;
            const amp = mobile ? 40 : 70;
            offset = (offset + dt * (mobile ? 0.03 : 0.045)) % total;
            cards.forEach((card, i) => {
                const x = ((i * gap - offset) % total + total) % total - gap;
                const t = x / w;
                gsap.set(card, {
                    x,
                    y: Math.sin(t * Math.PI * 1.7 + 0.4) * amp,
                    rotate: Math.cos(t * Math.PI * 2.1) * 13,
                });
            });
        };
        gsap.ticker.add(tick);

        return () => {
            gsap.ticker.remove(tick);
            ctx.revert();
        };
    }, []);

    return (
        <section id="top" ref={root} className="relative h-[100svh] min-h-[620px] overflow-hidden bg-paper">
            {/* Row of project covers drifting sideways behind the figure */}
            <div ref={stripScroll} className="absolute inset-x-0 top-[50%] md:top-[56%] z-[5] h-0" aria-hidden="true">
                <div ref={stripIntro} className="absolute inset-x-0 top-0">
                    {strip.map((c, i) => (
                        <div
                            key={i}
                            className="strip-card absolute left-0 top-0 w-[130px] h-[92px] -mt-[46px] md:w-[220px] md:h-[150px] md:-mt-[75px] will-change-transform"
                        >
                            <div className="w-full h-full rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
                                <CoverPoster {...c} index={i % covers.length} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Giant sentence that slides past */}
            <div
                ref={line}
                className="display absolute top-1/2 left-0 z-[6] whitespace-nowrap text-[clamp(90px,15vw,250px)] text-ink/90 will-change-transform"
            >
                Every product ships in careful steps while I watch users and performance grow.
            </div>

            {/* Figure → 3D box. Size comes from CSS vars so the faces' depth tracks the width. */}
            <div
                ref={frame}
                className="absolute z-10"
                style={
                    {
                        "--w": "72vh",
                        "--h": "86vh",
                        "--b": "0px",
                        "--r": "0px",
                        "--ry": "0deg",
                        width: "var(--w)",
                        height: "var(--h)",
                        bottom: "var(--b)",
                        left: "calc(50% - var(--w) / 2)",
                    } as React.CSSProperties
                }
            >
                <div className="seq-figure-in absolute inset-0 [perspective:1400px]">
                    <div
                        className="absolute inset-0 [transform-style:preserve-3d]"
                        style={{ transform: "translateZ(calc(var(--w) / -2)) rotateY(var(--ry))" }}
                    >
                        {stats.map((s, i) => {
                            const look = faceLooks[i];
                            return (
                                <div
                                    key={s.label}
                                    className={`absolute inset-0 overflow-hidden [backface-visibility:hidden] ${look.text} ${i > 0 ? "seq-side invisible" : ""}`}
                                    style={{
                                        borderRadius: "var(--r)",
                                        transform: `rotateY(${i * 90}deg) translateZ(calc(var(--w) / 2))`,
                                    }}
                                >
                                    <div className={`seq-bg-${i} absolute inset-0 ${look.bg}`} style={{ opacity: i === 0 ? 0 : 1 }} />
                                    <div className={`seq-figure-${i} absolute inset-x-0 bottom-0`} style={{ top: i === 0 ? "0%" : "24%" }}>
                                        <Figure tint={look.tint} priority={i === 0} />
                                    </div>
                                    <div
                                        className={`seq-label-${i} absolute inset-x-0 top-0 pt-[7%] text-center`}
                                        style={i === 0 ? { opacity: 0, transform: "translateY(10px)" } : undefined}
                                    >
                                        <p className="text-[10px] md:text-[11px] uppercase tracking-widest opacity-75">{s.label}</p>
                                        <p className="font-serif text-5xl md:text-6xl leading-none mt-1">{s.value}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Hero UI - fades out as the sequence starts */}
            <div className="hero-ui absolute inset-0 z-20 pointer-events-none">
                <h1 className="display absolute left-5 md:left-10 top-24 md:top-28 text-[clamp(44px,5.4vw,92px)]">
                    <span className="hero-line block overflow-hidden"><span className="block">Hi,</span></span>
                    <span className="hero-line block overflow-hidden"><span className="block">I&apos;m <span className="italic text-[clamp(60px,6.2vw,150px)]">Saksham</span></span></span>
                </h1>

                <div className="hero-fade hidden md:block absolute right-[8%] top-[28%] w-28 h-28">
                    <svg viewBox="0 0 100 100" className="spin-slow w-full h-full">
                        <defs>
                            <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                        </defs>
                        <text fontSize="9.5" letterSpacing="2.4" className="uppercase fill-ink">
                            <textPath href="#badge-circle">Available for work • Open to internships •</textPath>
                        </text>
                    </svg>
                    <span className="absolute inset-0 grid place-items-center text-xl">✦</span>
                </div>

                <a
                    href={`mailto:${profile.email}`}
                    className="hero-fade pointer-events-auto absolute left-5 md:left-10 bottom-6 md:bottom-10 inline-flex items-center gap-2 rounded-full bg-yellow pl-1.5 pr-4 py-1.5 text-sm font-medium shadow-lg hover:bg-ink hover:text-yellow transition-colors"
                >
                    <span className="relative w-8 h-8 rounded-full overflow-hidden bg-ink">
                        <Image src="/profile.jpg" alt="" fill sizes="32px" className="object-cover" />
                    </span>
                    Say hello <ArrowUpRight size={14} />
                </a>

                <p className="hero-fade hidden md:block absolute right-10 bottom-10 max-w-[230px] text-[13px] leading-snug text-muted text-right">
                    {profile.role} at KIIT Bhubaneswar. Building web &amp; mobile apps that real people use.
                </p>
            </div>
        </section>
    );
}

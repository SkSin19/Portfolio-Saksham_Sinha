"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { BeeGlyph, themeClasses } from "./Poster";
import { projects, smallProjects, profile, type Project } from "./data";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = ({ size = 14 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const cardTones = ["bg-paper text-ink", "bg-ink text-yellow", "bg-yellow text-ink", "bg-red text-paper", "bg-orange text-ink", "bg-[#2a2a2a] text-paper"];

function Panel({ project, index }: { project: Project; index: number }) {
    const pill = project.theme === "dark" ? "bg-white/10 text-paper" : project.theme === "red" ? "bg-black/15 text-paper" : "bg-black/10 text-ink";
    return (
        <article
            className={`work-panel relative shrink-0 w-full md:w-[78vw] lg:w-[64vw] h-[78svh] md:h-[calc(100svh-7rem)] rounded-[28px] overflow-hidden p-6 md:p-10 flex flex-col ${themeClasses[project.theme]}`}
        >
            <div className="flex flex-col md:flex-row md:justify-between gap-4 relative z-10">
                <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.2em] opacity-70">
                        {String(index + 1).padStart(2, "0")} · {project.category} · {project.period}
                    </p>
                    <h3 className="display text-[clamp(48px,6.5vw,104px)] mt-2">{project.title}</h3>
                </div>
                <ul className="flex md:flex-col flex-wrap gap-2 md:items-end shrink-0">
                    {project.stats.map((s) => (
                        <li key={s} className={`rounded-full px-3 py-1 text-xs font-medium ${pill}`}>{s}</li>
                    ))}
                </ul>
            </div>

            <p className="relative z-10 mt-4 max-w-xl text-sm md:text-base leading-relaxed opacity-80">{project.description}</p>

            <div className="relative z-10 mt-5 flex flex-wrap gap-3">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-ink text-yellow px-4 py-2 text-xs font-medium hover:opacity-80 transition-opacity">
                        Visit live <ArrowUpRight size={14} />
                    </a>
                )}
                {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-current px-4 py-2 text-xs font-medium hover:bg-current/10 transition-colors">
                        <GithubIcon /> Source
                    </a>
                )}
            </div>

            {/* Fanned stack of cards */}
            <div className="work-fan absolute inset-x-0 bottom-0 h-[42%] [perspective:1400px] pointer-events-none">
                {project.tech.slice(0, 5).map((t, i) => (
                    <div
                        key={t}
                        className={`fan-card absolute bottom-[-18%] w-[42%] md:w-[30%] aspect-[4/3] rounded-2xl p-4 flex flex-col justify-between border border-black/10 shadow-[0_-10px_40px_rgba(0,0,0,0.25)] ${cardTones[(i + index) % cardTones.length]}`}
                        style={{ left: `${8 + i * 14}%`, transformOrigin: "bottom center" }}
                        data-i={i}
                    >
                        <span className="text-[10px] uppercase tracking-widest opacity-60">Stack · 0{i + 1}</span>
                        <span className="font-black uppercase leading-[0.85] tracking-tighter text-[clamp(22px,3vw,46px)]">{t}</span>
                    </div>
                ))}
                {project.logo && (
                    <div className="fan-card absolute bottom-[8%] right-[6%] w-[22%] md:w-[16%] aspect-square rounded-2xl bg-white p-3 shadow-xl" data-i={5}>
                        <Image src={project.logo} alt={`${project.title} logo`} fill sizes="200px" className="object-contain p-3" />
                    </div>
                )}
                {project.title === "HoneyBee" && (
                    <div className="fan-card absolute bottom-[8%] right-[6%] w-[22%] md:w-[16%] aspect-square rounded-2xl bg-ink grid place-items-center shadow-xl" data-i={5}>
                        <BeeGlyph size={96} className="w-2/3 h-auto" />
                    </div>
                )}
            </div>
        </article>
    );
}

export default function Work() {
    const root = useRef<HTMLElement>(null);
    const track = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const t = track.current!;
                const tween = gsap.to(t, {
                    x: () => -(t.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".work-pin",
                        start: "top top",
                        end: () => `+=${t.scrollWidth - window.innerWidth}`,
                        pin: true,
                        scrub: 0.8,
                        invalidateOnRefresh: true,
                    },
                });

                gsap.utils.toArray<HTMLElement>(".work-panel").forEach((panel) => {
                    gsap.fromTo(
                        panel.querySelectorAll(".fan-card"),
                        { y: 220, rotateX: 50, rotateZ: 0 },
                        {
                            y: (i) => -i * 10,
                            rotateX: 18,
                            rotateZ: (i) => (i - 2) * 5,
                            stagger: 0.05,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: panel,
                                containerAnimation: tween,
                                start: "left 90%",
                                end: "left 30%",
                                scrub: true,
                            },
                        }
                    );
                });
            });

            mm.add("(max-width: 767px)", () => {
                gsap.utils.toArray<HTMLElement>(".work-panel").forEach((panel) => {
                    gsap.fromTo(
                        panel.querySelectorAll(".fan-card"),
                        { y: 180, rotateX: 50 },
                        {
                            y: (i) => -i * 8,
                            rotateX: 16,
                            rotateZ: (i) => (i - 2) * 5,
                            stagger: 0.05,
                            scrollTrigger: { trigger: panel, start: "top 85%", end: "top 30%", scrub: true },
                        }
                    );
                });
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={root} className="relative bg-paper">
            <div className="work-pin md:h-[100svh] md:overflow-hidden flex flex-col pt-24 md:pt-0">
                <div ref={track} className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6 px-5 md:px-10 md:h-full will-change-transform">
                    <div className="shrink-0 md:w-[36vw] flex flex-col justify-center gap-6 mb-6 md:mb-0">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Selected work · {projects.length} projects</p>
                        <h2 className="display text-[clamp(56px,7vw,120px)]">
                            Things I&apos;ve
                            <br />
                            <span className="italic">built &amp; shipped.</span>
                        </h2>
                        <p className="max-w-sm text-muted text-sm leading-relaxed">
                            Apps and platforms with real users.
                        </p>
                    </div>
                    {projects.map((p, i) => (
                        <Panel key={p.title} project={p} index={i} />
                    ))}
                    <div className="hidden md:block shrink-0 w-[4vw]" />
                </div>
            </div>

            {/* Hackathons & side projects */}
            <div className="px-5 md:px-10 py-24 md:py-32">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                    <h3 className="display text-[clamp(40px,5vw,80px)]">
                        Hackathons <span className="italic">&amp;</span> experiments
                    </h3>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start rounded-full bg-ink text-yellow px-5 py-2.5 text-sm font-medium hover:opacity-80">
                        <GithubIcon /> More on GitHub
                    </a>
                </div>
                <ul className="border-t border-ink/15">
                    {smallProjects.map((p, i) => (
                        <li key={p.title} className="group border-b border-ink/15">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-5 transition-[padding] duration-300 group-hover:md:pl-4">
                                <span className="text-xs text-muted w-8">{String(i + 1).padStart(2, "0")}</span>
                                <span className="font-serif text-3xl md:text-4xl md:w-[34%] group-hover:italic">{p.title}</span>
                                <span className="text-sm text-muted md:w-[26%]">{p.subtitle}</span>
                                <span className="flex flex-wrap gap-1.5 md:ml-auto">
                                    {p.tech.map((t) => (
                                        <span key={t} className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] group-hover:bg-yellow transition-colors">{t}</span>
                                    ))}
                                </span>
                                <span className="text-[11px] uppercase tracking-widest text-muted md:w-24 md:text-right">{p.kind}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

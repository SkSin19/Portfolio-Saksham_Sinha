"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { experience } from "./data";

gsap.registerPlugin(ScrollTrigger);

// Dark section; experience cards alternate left / right down the page.
export default function Experience() {
    const root = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".exp-card").forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { x: i % 2 ? 160 : -160, opacity: 0, rotate: i % 2 ? 4 : -4 },
                    {
                        x: 0,
                        opacity: 1,
                        rotate: 0,
                        ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 90%", end: "top 55%", scrub: true },
                    }
                );
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={root} className="relative bg-ink text-paper px-5 md:px-10 py-24 md:py-32 overflow-hidden">
            {/* Faint tile grid in the background */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "120px 150px",
                }}
            />

            <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16 md:mb-20">
                <h2 className="display text-[clamp(52px,7vw,112px)]">
                    Where I&apos;ve been
                    <br />
                    <span className="italic text-yellow">building…</span>
                </h2>
                <div className="max-w-xs md:text-right text-sm text-paper/60 leading-relaxed">
                    <p className="text-paper font-medium">Experience</p>
                    <p>Running an agency, leading tech for a student entrepreneurship cell, and working for social impact.</p>
                </div>
            </div>

            <ol className="relative flex flex-col gap-10 md:gap-14">
                {experience.map((e, i) => {
                    const right = i % 2 === 1;
                    const featured = i === 0;
                    return (
                        <li key={e.org} className={`exp-card w-full md:w-[58%] ${right ? "md:self-end" : "md:self-start"}`}>
                            <article
                                className={`relative rounded-2xl overflow-hidden border ${
                                    featured ? "bg-yellow text-ink border-yellow" : "bg-[#1e1e1e] text-paper border-white/10"
                                }`}
                            >
                                <header className={`flex items-center justify-between px-5 py-3 ${featured ? "bg-ink text-yellow" : "bg-white/5"}`}>
                                    <div className="flex gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-current opacity-40" />
                                        <span className="w-2 h-2 rounded-full bg-current opacity-40" />
                                        <span className="w-2 h-2 rounded-full bg-current opacity-40" />
                                    </div>
                                    <span className="text-[11px] uppercase tracking-widest opacity-70">
                                        {String(i + 1).padStart(2, "0")} / {String(experience.length).padStart(2, "0")}
                                    </span>
                                </header>

                                <div className="p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-6">
                                    <div className="text-left">
                                        <p className={`text-[11px] uppercase tracking-[0.2em] ${featured ? "opacity-70" : "text-yellow"}`}>
                                            {e.period} · {e.place}
                                        </p>
                                        <h3 className="display text-[clamp(40px,4.4vw,68px)] mt-3">{e.org}</h3>
                                        <p className="font-serif italic text-2xl mt-1 opacity-80">{e.role}</p>
                                        <p className={`mt-5 max-w-lg text-sm md:text-[15px] leading-relaxed ${featured ? "text-ink/80" : "text-paper/65"}`}>
                                            {e.description}
                                        </p>
                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {e.tags.map((t) => (
                                                <li
                                                    key={t}
                                                    className={`rounded-full px-3 py-1 text-xs ${featured ? "bg-ink/10" : "bg-white/10"}`}
                                                >
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {e.link && (
                                        <a
                                            href={e.link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`self-end inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                                                featured ? "bg-ink text-yellow hover:bg-ink/80" : "bg-yellow text-ink hover:bg-paper"
                                            }`}
                                        >
                                            {e.link.label} <ArrowUpRight size={14} />
                                        </a>
                                    )}
                                </div>
                            </article>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}

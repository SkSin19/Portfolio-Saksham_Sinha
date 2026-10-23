"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap } from "lucide-react";
import { toolkit, profile } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function Toolkit() {
    const root = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".tool-card").forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { y: 120, rotate: i % 2 ? 6 : -6, opacity: 0 },
                    {
                        y: 0,
                        rotate: 0,
                        opacity: 1,
                        ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 95%", end: "top 60%", scrub: true },
                    }
                );
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <section id="toolkit" ref={root} className="relative bg-paper px-5 md:px-10 py-24 md:py-32">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                <h2 className="display text-[clamp(52px,7vw,112px)]">
                    See what I
                    <br />
                    <span className="italic">bring to the table</span>
                </h2>
                <div className="flex items-center gap-3 max-w-sm text-sm text-muted">
                    <GraduationCap className="shrink-0 text-ink" size={22} />
                    <span>{profile.education}</span>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {toolkit.map((group, i) => (
                    <article key={group.title} className="tool-card rounded-2xl overflow-hidden bg-yellow shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <header className="flex items-center justify-between bg-ink text-yellow px-5 py-3">
                            <span className="text-xs tracking-[0.25em]">{"■".repeat(Math.min(5, group.items.length + 1))}</span>
                            <span className="text-[11px] uppercase tracking-widest text-paper/60">0{i + 1}</span>
                        </header>
                        <div className="p-6">
                            <h3 className="font-serif text-3xl leading-tight">{group.title}</h3>
                            <ul className="mt-5 space-y-2.5">
                                {group.items.map((item) => (
                                    <li key={item} className="flex gap-3 text-sm leading-snug">
                                        <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-ink" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

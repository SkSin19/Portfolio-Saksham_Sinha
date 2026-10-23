"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Tape from "./Tape";
import { profile } from "./data";

gsap.registerPlugin(ScrollTrigger);

const facts = [
    { k: "Based in", v: "Bhubaneswar, India" },
    { k: "Studying", v: "B.Tech CS · KIIT · 2024–28" },
    { k: "CGPA", v: "8.14" },
    { k: "Founder of", v: "Quarks Digital" },
];

const now = [
    "Leading tech at KIIT E-Cell",
    "Helping real clients build their businesses ground up through Quarks Digital",
    "Open to internships & freelance work",
];

// Dark "about me" block: photo on a glowing yellow disc, intro, quick facts, what I'm doing now.
export default function About() {
    const root = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".about-glow",
                { scale: 0.6, opacity: 0.3 },
                { scale: 1.1, opacity: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 80%", end: "center center", scrub: true } }
            );
            gsap.fromTo(
                ".about-photo",
                { y: 120 },
                { y: -20, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } }
            );
            gsap.from(".about-reveal", {
                y: 40,
                opacity: 0,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: { trigger: ".about-copy", start: "top 80%", end: "top 40%", scrub: true },
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={root} className="relative bg-ink text-paper overflow-hidden px-5 md:px-10 py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
                {/* Photo */}
                <div className="relative mx-auto w-full max-w-[520px] aspect-[4/5]">
                    <div className="about-glow absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(255,203,31,0.55),rgba(255,122,0,0.15)_45%,transparent_70%)] blur-2xl" />
                    <div className="absolute inset-x-[6%] bottom-0 top-[14%] rounded-t-full bg-yellow" />
                    <div className="about-photo absolute inset-0">
                        <Image
                            src="/images/hero/SAKSHAM_NO_BG.png"
                            alt={profile.name}
                            fill
                            sizes="(max-width: 1024px) 90vw, 520px"
                            className="object-cover object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
                        />
                    </div>
                    <div className="absolute left-[-8%] right-[-8%] bottom-[14%] -rotate-[7deg]">
                        <Tape text={profile.name.toUpperCase()} size="sm" speed={26} />
                    </div>
                </div>

                {/* Copy */}
                <div className="about-copy">
                    <p className="about-reveal text-[11px] uppercase tracking-[0.3em] text-paper/50">About me</p>
                    <h2 className="about-reveal display text-[clamp(48px,6vw,96px)] mt-4">
                        Hi, I&apos;m Saksham.
                        <br />
                        <span className="italic text-yellow">I build things people use.</span>
                    </h2>
                    <p className="about-reveal mt-6 max-w-xl text-paper/70 leading-relaxed">
                        I&apos;m a full-stack website and mobile app developer studying Computer Science at KIIT. I am also an aspiring ML engineer with a considerable knowledge in machine learning, deep learning and transformers.
                    </p>

                    <dl className="about-reveal mt-8 grid grid-cols-2 gap-px rounded-2xl overflow-hidden bg-white/10 max-w-xl">
                        {facts.map((f) => (
                            <div key={f.k} className="bg-ink p-4">
                                <dt className="text-[11px] uppercase tracking-widest text-paper/45">{f.k}</dt>
                                <dd className="font-serif text-2xl mt-1">{f.v}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="about-reveal mt-8 max-w-xl">
                        <p className="text-[11px] uppercase tracking-widest text-yellow mb-3">Right now</p>
                        <ul className="space-y-2">
                            {now.map((n) => (
                                <li key={n} className="flex gap-3 text-sm text-paper/80">
                                    <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-yellow" />
                                    {n}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="about-reveal mt-10 flex flex-wrap gap-3">
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 rounded-full bg-yellow text-ink px-5 py-2.5 text-sm font-medium hover:bg-paper transition-colors"
                        >
                            Say hello <ArrowUpRight size={16} />
                        </a>
                        <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-yellow hover:text-yellow transition-colors">
                            GitHub <ArrowUpRight size={16} />
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-yellow hover:text-yellow transition-colors">
                            LinkedIn <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

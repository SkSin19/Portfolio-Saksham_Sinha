"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tape from "./Tape";
import { steps } from "./data";

gsap.registerPlugin(ScrollTrigger);

const PATH =
    "M -40 140 C 200 120, 300 200, 260 300 S 120 500, 300 580 C 460 650, 640 500, 560 410 C 480 320, 360 440, 480 560 C 620 700, 720 800, 620 930 S 300 1060, 400 1180 C 480 1280, 760 1280, 720 1430 S 560 1690, 1060 1740";
const STOPS = [0.13, 0.42, 0.66, 0.86];
const VB = { w: 1000, h: 1800 };

export default function Process() {
    const root = useRef<HTMLElement>(null);
    const drawn = useRef<SVGPathElement>(null);
    const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
    const [reached, setReached] = useState(-1);

    useEffect(() => {
        const path = drawn.current!;
        const len = path.getTotalLength();
        setPoints(STOPS.map((s) => {
            const p = path.getPointAtLength(len * s);
            return { x: p.x, y: p.y };
        }));

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            mm.add("(min-width: 768px)", () => {
                gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
                gsap.to(path, {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".process-canvas",
                        start: "top 55%",
                        end: "bottom 60%",
                        scrub: 0.5,
                        onUpdate: (self) => {
                            let r = -1;
                            STOPS.forEach((s, i) => { if (self.progress >= s) r = i; });
                            setReached(r);
                        },
                    },
                });
            });
            mm.add("(max-width: 767px)", () => {
                gsap.fromTo(".process-mline", { scaleY: 0 }, {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: { trigger: ".process-mobile", start: "top 70%", end: "bottom 70%", scrub: true },
                });
                gsap.utils.toArray<HTMLElement>(".process-mstep").forEach((el) => {
                    gsap.from(el, { opacity: 0, x: 30, scrollTrigger: { trigger: el, start: "top 80%", end: "top 55%", scrub: true } });
                });
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <section id="process" ref={root} className="relative bg-paper overflow-hidden">
            <div className="relative z-10 px-5 md:px-10 pt-24 md:pt-32 flex flex-col md:flex-row md:justify-between gap-6">
                <h2 className="display text-[clamp(52px,7vw,112px)]">
                    From rough idea
                    <br />
                    <span className="italic">to real users</span>
                </h2>
                <p className="max-w-xs text-sm text-muted leading-relaxed md:text-right md:pt-4">
                    How every project goes from a rough idea to something thousands of people open.
                </p>
            </div>

            {/* Decorative tapes */}
            <div className="absolute -right-24 top-[48%] w-[40vw] rotate-[-35deg] hidden md:block">
                <Tape text="SHIPPING SOON" size="sm" speed={22} />
            </div>
            <div className="absolute -left-24 top-[62%] w-[45vw] rotate-[70deg] hidden md:block">
                <Tape text="WORK IN PROGRESS" size="sm" speed={26} reverse />
            </div>

            {/* Desktop: drawn path */}
            <div className="process-canvas relative hidden md:block mx-auto w-full max-w-[1200px]" style={{ aspectRatio: `${VB.w} / ${VB.h}` }}>
                <svg viewBox={`0 0 ${VB.w} ${VB.h}`} className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
                    <path d={PATH} fill="none" stroke="#e4e3de" strokeWidth="34" strokeLinecap="round" />
                    <path ref={drawn} d={PATH} fill="none" stroke="var(--yellow)" strokeWidth="34" strokeLinecap="round" />
                </svg>
                {points.map((p, i) => {
                    const left = (p.x / VB.w) * 100;
                    const top = (p.y / VB.h) * 100;
                    const onRight = p.x < VB.w / 2;
                    const active = reached >= i;
                    return (
                        <div key={steps[i].n} className="absolute" style={{ left: `${left}%`, top: `${top}%` }}>
                            <span
                                className={`absolute -translate-x-1/2 -translate-y-1/2 grid place-items-center w-14 h-14 rounded-full text-lg font-medium transition-all duration-500 ${
                                    active ? "bg-ink text-yellow scale-110" : "bg-[#cfcfcb] text-paper"
                                }`}
                            >
                                {steps[i].n}
                            </span>
                            <div
                                className={`absolute top-0 -translate-y-1/2 w-[300px] transition-all duration-700 ${
                                    onRight ? "left-12 text-left" : "right-12 text-right"
                                } ${active ? "opacity-100 translate-x-0" : `opacity-0 ${onRight ? "translate-x-6" : "-translate-x-6"}`}`}
                            >
                                <h3 className="display text-5xl">{steps[i].title}</h3>
                                <p className="mt-3 text-sm text-muted leading-relaxed">{steps[i].body}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile: vertical timeline */}
            <div className="process-mobile relative md:hidden px-5 py-16">
                <div className="absolute left-[38px] top-16 bottom-16 w-2 rounded-full bg-[#e4e3de]" />
                <div className="process-mline absolute left-[38px] top-16 bottom-16 w-2 rounded-full bg-yellow origin-top" />
                <ol className="relative flex flex-col gap-14">
                    {steps.map((s) => (
                        <li key={s.n} className="process-mstep flex gap-5">
                            <span className="shrink-0 grid place-items-center w-11 h-11 rounded-full bg-ink text-yellow text-sm">{s.n}</span>
                            <div>
                                <h3 className="display text-4xl">{s.title}</h3>
                                <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <div className="h-16 md:h-24" />
        </section>
    );
}

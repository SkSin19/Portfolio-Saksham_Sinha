"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Monogram from "./Monogram";
import Tape from "./Tape";

export default function Loader() {
    const root = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        const counter = { v: 0 };
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    document.documentElement.style.overflow = "";
                    setDone(true);
                    window.dispatchEvent(new Event("loader:done"));
                },
            });
            tl.from(".ld-mark", { scale: 0, rotate: -120, duration: 0.8, ease: "back.out(1.7)" })
                .from(".ld-name span", { yPercent: 110, duration: 0.6, stagger: 0.04, ease: "power3.out" }, "-=0.3")
                .from(".ld-tape-a", { xPercent: -120, yPercent: -60, rotate: -60, duration: 1, ease: "power3.out" }, 0.3)
                .from(".ld-tape-b", { xPercent: 120, yPercent: 60, rotate: 40, duration: 1, ease: "power3.out" }, 0.4)
                .to(counter, { v: 100, duration: 1.8, ease: "power2.inOut", onUpdate: () => setCount(Math.round(counter.v)) }, 0)
                .to(".ld-inner", { opacity: 0, y: -30, duration: 0.4 }, "+=0.15")
                .to(root.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.1");
        }, root);
        return () => {
            ctx.revert();
            document.documentElement.style.overflow = "";
        };
    }, []);

    if (done) return null;

    return (
        <div ref={root} className="fixed inset-0 z-[100] bg-[#2a2a2a] text-white overflow-hidden">
            <div className="ld-inner absolute inset-0 flex flex-col items-center justify-center gap-3">
                <Monogram size={64} className="ld-mark" />
                <div className="ld-name font-serif text-3xl overflow-hidden flex">
                    {"Saksham®".split("").map((c, i) => (
                        <span key={i} className="inline-block">{c}</span>
                    ))}
                </div>
            </div>
            <div className="ld-tape-a absolute -left-24 top-16 w-[70vw] -rotate-[28deg]">
                <Tape text="LOADING" size="sm" speed={14} />
            </div>
            <div className="ld-tape-b absolute -right-24 bottom-24 w-[70vw] -rotate-[24deg]">
                <Tape text="LOADING" size="sm" speed={14} reverse />
            </div>
            <div className="absolute bottom-6 right-8 font-serif text-5xl tabular-nums text-white/80">{count}%</div>
        </div>
    );
}

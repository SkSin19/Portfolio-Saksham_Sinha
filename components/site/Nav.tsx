"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Monogram from "./Monogram";
import { profile } from "./data";

const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#work", label: "Work" },
    { href: "#process", label: "Process" },
    { href: "#toolkit", label: "Toolkit" },
    { href: "#contact", label: "Contact" },
];

export default function Nav() {
    const [hidden, setHidden] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let last = 0;
        const onScroll = () => {
            const y = window.scrollY;
            setHidden(y > last && y > 200);
            last = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-transform duration-500 ${hidden && !open ? "-translate-y-full" : ""}`}
        >
            <nav className="mx-4 md:mx-8 mt-4 flex items-center justify-between rounded-full bg-white/80 backdrop-blur-md px-4 py-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
                <a href="#top" className="flex items-center gap-2">
                    <Monogram size={22} color="var(--yellow-deep)" />
                    <span className="font-serif text-xl leading-none">Saksham<sup className="text-[10px]">®</sup></span>
                </a>
                <ul className="hidden md:flex items-center gap-8 text-[13px] text-ink/70">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="relative hover:text-ink transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full">
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    href={`mailto:${profile.email}`}
                    className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-yellow px-4 py-2 text-[13px] font-medium hover:bg-ink hover:text-yellow transition-colors"
                >
                    Let&apos;s talk <ArrowUpRight size={14} />
                </a>
                <button className="md:hidden p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>
            {open && (
                <div className="md:hidden mx-4 mt-2 rounded-3xl bg-ink text-paper p-6 flex flex-col gap-4">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-serif text-4xl">
                            {l.label}
                        </a>
                    ))}
                    <a href={`mailto:${profile.email}`} className="mt-2 self-start rounded-full bg-yellow text-ink px-5 py-2.5 text-sm font-medium">
                        Let&apos;s talk
                    </a>
                </div>
            )}
        </header>
    );
}

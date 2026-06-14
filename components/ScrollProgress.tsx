"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const el = document.documentElement;
            const scrollTop = el.scrollTop || document.body.scrollTop;
            const scrollHeight = el.scrollHeight - el.clientHeight;
            setProgress((scrollTop / scrollHeight) * 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed right-0 top-0 w-1 h-screen bg-white/5 z-50">
            <div
                className="w-full bg-gradient-to-b from-[#00f5ff] to-[#ff006e] transition-all duration-100"
                style={{ height: `${progress}%` }}
            />
        </div>
    );
}
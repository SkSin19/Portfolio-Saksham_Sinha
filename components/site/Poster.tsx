import Image from "next/image";
import type { Theme } from "./data";

export const themeClasses: Record<Theme, string> = {
    yellow: "bg-yellow text-ink",
    orange: "bg-orange text-ink",
    red: "bg-red text-paper",
    dark: "bg-ink text-yellow",
};

export function BeeGlyph({ size = 48, className = "" }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
            <ellipse cx="22" cy="20" rx="12" ry="8" fill="#fff" opacity="0.85" transform="rotate(-25 22 20)" />
            <ellipse cx="42" cy="20" rx="12" ry="8" fill="#fff" opacity="0.85" transform="rotate(25 42 20)" />
            <ellipse cx="32" cy="38" rx="16" ry="18" fill="#ffcb1f" />
            <path d="M17 32h30M16 40h32M19 48h26" stroke="#0f0f0f" strokeWidth="5" strokeLinecap="round" />
            <circle cx="32" cy="20" r="7" fill="#0f0f0f" />
            <path d="M28 14l-4-7M36 14l4-7" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

// Magazine-cover style tile for the hero's 3D ring: oversized title bleeding off the edge.
export function CoverPoster({
    title,
    category,
    theme,
    logo,
    bee,
    index,
}: {
    title: string;
    category: string;
    theme: Theme;
    logo?: string;
    bee?: boolean;
    index: number;
}) {
    const dots = theme === "red" || theme === "dark" ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.13)";
    return (
        <div className={`relative w-full h-full overflow-hidden rounded-2xl ${themeClasses[theme]}`}>
            <div
                className="absolute inset-0"
                style={{ backgroundImage: `radial-gradient(${dots} 1.5px, transparent 1.6px)`, backgroundSize: "9px 9px" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
            <div className="absolute left-3 right-3 top-2.5 flex justify-between text-[9px] md:text-[10px] font-semibold uppercase tracking-widest opacity-80">
                <span>{category}</span>
                <span>No.{String(index + 1).padStart(2, "0")}</span>
            </div>
            {(logo || bee) && (
                <div className="absolute right-3 top-8 w-[30%] aspect-square rounded-xl bg-white/90 p-1.5 shadow-md rotate-6">
                    {logo ? (
                        <Image src={logo} alt="" width={120} height={120} className="w-full h-full object-contain" />
                    ) : (
                        <BeeGlyph className="w-full h-full" />
                    )}
                </div>
            )}
            <span
                className="absolute -left-1 -bottom-2 font-black uppercase leading-[0.8] tracking-[-0.06em] text-[clamp(30px,3.4vw,54px)] whitespace-nowrap -rotate-6 origin-bottom-left"
                style={{ textShadow: "0 4px 0 rgba(0,0,0,0.12)" }}
            >
                {title}
            </span>
        </div>
    );
}

// Small typographic "poster" tile used as floating artwork for a project.
export default function Poster({
    title,
    theme,
    logo,
    className = "",
    bee,
}: {
    title: string;
    theme: Theme;
    logo?: string;
    className?: string;
    bee?: boolean;
}) {
    return (
        <div className={`relative overflow-hidden rounded-xl shadow-[0_14px_40px_rgba(0,0,0,0.22)] ${themeClasses[theme]} ${className}`}>
            <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_30%_20%,#fff,transparent_60%)]" />
            {logo && (
                <Image src={logo} alt="" width={120} height={120} className="absolute right-2 top-2 w-1/3 h-auto object-contain opacity-90" />
            )}
            {bee && <BeeGlyph className="absolute right-2 top-2 w-1/3 h-auto" />}
            <span className="absolute left-3 bottom-2 right-3 font-black uppercase leading-[0.85] tracking-tighter text-[clamp(16px,1.6vw,24px)] break-words">
                {title}
            </span>
        </div>
    );
}

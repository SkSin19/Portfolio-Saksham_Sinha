import Image from "next/image";

export type Tint = "yellow" | "orange" | "red";

export const FIGURE_SRC = "/images/hero/taped-figure.webp";
export const FIGURE_ASPECT = 1149 / 1369;

// The art is yellow already; the other box faces shift its hue to match their colour.
const tintFilters: Record<Tint, string | undefined> = {
    yellow: undefined,
    orange: "hue-rotate(-18deg) saturate(1.25)",
    red: "hue-rotate(-38deg) saturate(1.5) brightness(0.95)",
};

export default function Figure({ tint = "yellow", priority = false, className = "" }: { tint?: Tint; priority?: boolean; className?: string }) {
    return (
        <div className={`absolute inset-0 ${className}`}>
            <Image
                src={FIGURE_SRC}
                alt=""
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-bottom"
                style={{ filter: tintFilters[tint] }}
                draggable={false}
            />
        </div>
    );
}

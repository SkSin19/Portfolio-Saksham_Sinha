type TapeProps = {
    text?: string;
    className?: string;
    style?: React.CSSProperties;
    speed?: number;
    reverse?: boolean;
    size?: "sm" | "md" | "lg";
};

const sizes = {
    sm: "h-7 text-[11px]",
    md: "h-10 text-sm",
    lg: "h-14 text-lg md:text-xl",
};

// A strip of caution tape with scrolling repeated text.
export default function Tape({ text = "AVAILABLE FOR WORK", className = "", style, speed = 30, reverse, size = "md" }: TapeProps) {
    const items = Array.from({ length: 12 });
    const strip = (
        <div className="flex shrink-0 items-center">
            {items.map((_, i) => (
                <span key={i} className="flex items-center gap-4 px-4 font-semibold uppercase tracking-tight whitespace-nowrap">
                    {text}
                    <span className="font-black tracking-[-0.2em]">{"///"}</span>
                </span>
            ))}
        </div>
    );

    return (
        <div
            className={`tape overflow-hidden flex items-center ${sizes[size]} ${className}`}
            style={style}
            aria-hidden="true"
        >
            <div
                className={`marquee-track ${reverse ? "reverse" : ""}`}
                style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
            >
                {strip}
                {strip}
            </div>
        </div>
    );
}

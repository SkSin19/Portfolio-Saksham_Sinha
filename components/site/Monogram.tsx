// "SS" brand mark - two interlocking chevron blocks.
export default function Monogram({ size = 40, className = "", color = "var(--yellow)" }: { size?: number; className?: string; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
            <g fill={color}>
                <path d="M8 10h22l-8 10h14l-8 10H8l8-10H8z" />
                <path d="M56 54H34l8-10H28l8-10h20l-8 10h8z" />
                <circle cx="48" cy="16" r="6" />
                <circle cx="16" cy="48" r="6" />
            </g>
        </svg>
    );
}

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Tape from "./Tape";
import { profile } from "./data";

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9z" />
    </svg>
);
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
);

const socials = [
    { href: profile.github, label: "GitHub", icon: <GithubIcon /> },
    { href: profile.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> },
    { href: `mailto:${profile.email}`, label: "Email", icon: <Mail size={16} /> },
    { href: `tel:${profile.phone}`, label: "Phone", icon: <Phone size={16} /> },
];

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-ink text-paper overflow-hidden">
            <div className="px-5 md:px-10 pt-24 md:pt-32 pb-10 grid md:grid-cols-[1.6fr_1fr] gap-12">
                <div>
                    <h2 className="display text-[clamp(52px,7vw,116px)]">
                        Let&apos;s see if I make
                        <br />
                        sense for your team.
                    </h2>
                    <a
                        href={`mailto:${profile.email}`}
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow text-ink px-6 py-3 text-sm font-medium hover:bg-paper transition-colors"
                    >
                        Say hello <ArrowUpRight size={16} />
                    </a>
                    <p className="mt-6 text-sm text-paper/50">
                        {profile.email} · {profile.location}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 text-sm">
                    <div>
                        <p className="text-[11px] uppercase tracking-widest text-paper/40 mb-4">Navigate</p>
                        <ul className="space-y-2">
                            {[["#work", "Work"], ["#process", "Process"], ["#toolkit", "Toolkit"], ["#top", "Back to top"]].map(([h, l]) => (
                                <li key={h}><a href={h} className="hover:text-yellow transition-colors">{l}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-[11px] uppercase tracking-widest text-paper/40 mb-4">Social</p>
                        <ul className="space-y-2">
                            {socials.slice(0, 2).map((s) => (
                                <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-yellow transition-colors">{s.label}</a></li>
                            ))}
                        </ul>
                        <p className="text-[11px] uppercase tracking-widest text-paper/40 mt-8 mb-3">Find me on</p>
                        <div className="flex gap-2">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    aria-label={s.label}
                                    className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-yellow hover:text-ink transition-colors"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Crossing caution tapes */}
            <div className="relative h-[260px] md:h-[340px]">
                <p className="absolute left-5 md:left-10 top-4 z-20 text-xs text-paper/50 rotate-[-6deg]">
                    © {new Date().getFullYear()} Designed &amp; built by {profile.name}
                </p>
                <div className="absolute left-[-10%] right-[-10%] top-[30%] rotate-[-7deg] z-10">
                    <Tape text="AVAILABLE FOR WORK" size="lg" speed={40} />
                </div>
                <div className="absolute left-[-10%] right-[-10%] top-[45%] rotate-[6deg]">
                    <Tape text="LET'S BUILD SOMETHING" size="lg" speed={34} reverse />
                </div>
                <div className="absolute left-[-10%] right-[-10%] top-[68%] rotate-[-3deg] z-10">
                    <Tape text="AVAILABLE FOR WORK" size="lg" speed={46} />
                </div>
            </div>
        </footer>
    );
}

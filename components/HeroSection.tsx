"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const d1EyeRef = useRef<HTMLParagraphElement>(null);
  const d1H1Ref = useRef<HTMLHeadingElement>(null);
  const d1H2Ref = useRef<HTMLHeadingElement>(null);
  const d1SubRef = useRef<HTMLParagraphElement>(null);
  const d1RuleRef = useRef<HTMLDivElement>(null);
  const d2EyeRef = useRef<HTMLParagraphElement>(null);
  const d2H1Ref = useRef<HTMLHeadingElement>(null);
  const d2H2Ref = useRef<HTMLHeadingElement>(null);
  const d2SubRef = useRef<HTMLParagraphElement>(null);
  const d2RuleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * Spacer = 600vh  →  6 "screens" of scroll budget
       *
       * Segment map (tl has duration=6 so each unit = 1vh-screen):
       *   0 → 1   photo slides down off screen + name lifts
       *   1 → 2   panel1 lines stagger IN from bottom
       *   2 → 3   panel1 HOLDS (nothing moves — pure dwell)
       *   3 → 4   panel1 lines stagger OUT to right
       *   4 → 5   panel2 lines stagger IN from left
       *   5 → 6   panel2 HOLDS (dwell)
       */
      const tl = gsap.timeline({ paused: true });

      // ── 0→1  Photo exits down, name drifts up ──────────────────
      tl.to(photoRef.current, { yPercent: 110, ease: "none" }, 0).to(
        nameRef.current,
        { yPercent: -12, ease: "none" },
        0,
      );

      // ── 1→2  Panel 1 lines slide in from below, staggered ──────
      const p1lines = [
        d1EyeRef.current,
        d1H1Ref.current,
        d1H2Ref.current,
        d1SubRef.current,
        d1RuleRef.current,
      ];
      p1lines.forEach((el, i) => {
        tl.fromTo(
          el,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, ease: "none", duration: 0.18 },
          1 + i * 0.16,
        );
      });

      // ── 2→3  DWELL — nothing, tl just advances ─────────────────
      tl.to({}, { duration: 1 }, 2);

      // ── 3→4  Panel 1 lines slide out to right, staggered ───────
      p1lines.forEach((el, i) => {
        tl.to(
          el,
          { x: "110vw", opacity: 0, ease: "none", duration: 0.18 },
          3 + i * 0.16,
        );
      });

      // ── 4→5  Panel 2 lines slide in from left, staggered ───────
      const p2lines = [
        d2EyeRef.current,
        d2H1Ref.current,
        d2H2Ref.current,
        d2SubRef.current,
        d2RuleRef.current,
      ];
      p2lines.forEach((el, i) => {
        tl.fromTo(
          el,
          { x: "-110vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "none", duration: 0.18 },
          4 + i * 0.16,
        );
      });

      // ── 5→6  DWELL ─────────────────────────────────────────────
      tl.to({}, { duration: 1 }, 5);

      // Wire scrub to spacer
      ScrollTrigger.create({
        trigger: spacerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4,
        onUpdate: (self) => {
          tl.progress(self.progress);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
                #hero-spacer {
                    height: 600vh;
                    position: relative;
                }
                #hero-sticky {
                    position: sticky;
                    top: 0;
                    height: 100vh;
                    width: 100%;
                    overflow: hidden;
                    background: #080810;
                }
                #hero-sticky::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(
                        0deg,
                        transparent, transparent 3px,
                        rgba(0,245,255,0.011) 3px,
                        rgba(0,245,255,0.011) 4px
                    );
                    pointer-events: none;
                    z-index: 10;
                }

                /* TOP BAR */
                #hero-topbar {
                    position: absolute;
                    top: clamp(1.2rem, 3vw, 2rem);
                    left: clamp(1.5rem, 4vw, 3rem);
                    right: clamp(1.5rem, 4vw, 3rem);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    z-index: 20;
                }
                .htb-tag {
                    font-family: 'Courier New', monospace;
                    font-size: clamp(0.52rem, 1vw, 0.65rem);
                    letter-spacing: 0.38em;
                    color: rgba(255,255,255,0.25);
                    text-transform: uppercase;
                }
                .htb-rule {
                    flex: 1; height: 1px;
                    background: rgba(255,255,255,0.07);
                    margin: 0 1.5rem;
                }

                /* BIG NAME */
                #hero-name {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                    pointer-events: none;
                    will-change: transform;
                }
                #hero-name span {
                    font-family: 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
                    font-weight: 900;
                    font-size: clamp(4.5rem, 19vw, 17rem);
                    letter-spacing: -0.04em;
                    line-height: 1;
                    color: #dddbe8;
                    text-transform: uppercase;
                    white-space: nowrap;
                    text-shadow:
                        0 0 120px rgba(0,245,255,0.06),
                        0 0 2px rgba(0,245,255,0.12);
                }

                /* PHOTO WRAPPER — sits above name, clips at bottom */
                #hero-photo-wrap {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 2;
                    width: min(42vw, 600px);
                    height: 92vh;
                    pointer-events: none;
                    will-change: transform;
                    }

                    .hero-photo {
                    object-fit: contain;
                    object-position: bottom center;
                    }

                    @media (max-width: 640px) {
                    #hero-photo-wrap {
                        width: 72vw;
                        height: 105vh;
                    }
                    }
                #hero-photo-wrap img {
                    height: 100%;
                    width: auto;
                    object-fit: contain;
                    object-position: bottom center;
                    display: block;
                }

                /* DETAILS PANELS */
                .hero-panel {
                    position: absolute;
                    bottom: clamp(2.5rem, 7vh, 5rem);
                    left: 0; right: 0;
                    padding: 0 clamp(1.5rem, 5vw, 4rem);
                    z-index: 15;
                    overflow: hidden;
                }
                /* each line is individually animated — start hidden */
                .det-line {
                    will-change: transform, opacity;
                    opacity: 0;
                }
                .det-eye {
                    font-family: 'Courier New', monospace;
                    font-size: clamp(0.55rem, 1.2vw, 0.7rem);
                    letter-spacing: 0.4em;
                    color: #00f5ff;
                    text-transform: uppercase;
                    margin: 0 0 0.5rem;
                }
                .det-h {
                    font-family: 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
                    font-weight: 900;
                    font-size: clamp(1.6rem, 4.8vw, 4.2rem);
                    line-height: 0.88;
                    letter-spacing: -0.025em;
                    color: #fff;
                    text-transform: uppercase;
                    margin: 0;
                }
                .det-h + .det-h { margin-top: 0.04em; }
                .ac  { color: #00f5ff; }
                .acp { color: #ff006e; }
                .det-sub {
                    font-family: 'Courier New', monospace;
                    font-size: clamp(0.58rem, 1.1vw, 0.72rem);
                    letter-spacing: 0.22em;
                    color: rgba(255,255,255,0.36);
                    text-transform: uppercase;
                    margin: 0.75rem 0 0;
                }
                .det-rule {
                    margin-top: 1rem;
                    width: clamp(36px, 7vw, 70px);
                    height: 1px;
                    background: #00f5ff;
                    box-shadow: 0 0 8px rgba(0,245,255,0.55);
                }
                .det-rule-pink {
                    background: #ff006e;
                    box-shadow: 0 0 8px rgba(255,0,110,0.55);
                }

                /* CORNER TAGS */
                .hcoord {
                    position: absolute;
                    font-family: 'Courier New', monospace;
                    font-size: 0.5rem;
                    letter-spacing: 0.2em;
                    color: rgba(255,255,255,0.13);
                    text-transform: uppercase;
                    z-index: 20;
                }
                #hc-bl { bottom: clamp(0.9rem,2vw,1.5rem); left: clamp(1.5rem,4vw,3rem); }
                #hc-br { bottom: clamp(0.9rem,2vw,1.5rem); right: clamp(1.5rem,4vw,3rem); }

                /* SCROLL CUE */
                #hero-cue {
                    position: absolute;
                    right: clamp(1.2rem,2.5vw,2rem);
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 20;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 7px;
                    animation: cueFade 1s ease 2s both;
                }
                @media (max-width: 640px) { #hero-cue { display: none; } }
                @keyframes cueFade { from { opacity:0; } to { opacity:1; } }
                .cue-label {
                    font-family: 'Courier New', monospace;
                    font-size: 0.48rem;
                    letter-spacing: 0.35em;
                    color: rgba(255,255,255,0.18);
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    text-transform: uppercase;
                }
                .cue-track {
                    width: 1px; height: 48px;
                    background: rgba(255,255,255,0.1);
                    position: relative; overflow: hidden;
                }
                .cue-runner {
                    position: absolute;
                    top: 0; left: 0;
                    width: 1px; height: 48px;
                    background: rgba(0,245,255,0.65);
                    animation: cueRun 2s ease-in-out infinite;
                }
                @keyframes cueRun {
                    0%   { transform: translateY(-100%); }
                    100% { transform: translateY(220%); }
                }
            `}</style>

      <div id="hero-spacer" ref={spacerRef}>
        <div id="hero-sticky">
          <div id="hero-topbar">
            <span className="htb-tag">Portfolio · 2025</span>
            <div className="htb-rule" />
            <span className="htb-tag">B.Tech CS · KIIT</span>
          </div>

          {/* Name — z:1 */}
          <div id="hero-name" ref={nameRef}>
            <span>SAKSHAM</span>
          </div>

          {/* Photo wrapper — z:2, slides down via yPercent on wrapper */}
          <div id="hero-photo-wrap" ref={photoRef}>
            <div id="hero-photo-wrap" ref={photoRef}>
              <Image
                src="/images/hero/SAKSHAM_NO_BG.png"
                alt="Saksham Sinha"
                fill
                priority
                draggable={false}
                className="hero-photo"
              />
            </div>
          </div>

          {/* Panel 1 — each line individually ref'd */}
          <div className="hero-panel">
            <p className="det-eye det-line" ref={d1EyeRef}>
              Saksham Sinha
            </p>
            <h2 className="det-h det-line" ref={d1H1Ref}>
              Full-Stack &amp; <span className="ac">Mobile</span> Dev
            </h2>
            <h2 className="det-h det-line" ref={d1H2Ref}>
              &amp; <span className="acp">ML</span> Engineer
            </h2>
            <p className="det-sub det-line" ref={d1SubRef}>
              React Native · Next.js · Node.js · MongoDB · TensorFlow
            </p>
            <div className="det-rule det-line" ref={d1RuleRef} />
          </div>

          {/* Panel 2 */}
          <div className="hero-panel">
            <p className="det-eye det-line" ref={d2EyeRef}>
              By the numbers
            </p>
            <h2 className="det-h det-line" ref={d2H1Ref}>
              <span className="ac">10,000+</span> Live Users
            </h2>
            <h2 className="det-h det-line" ref={d2H2Ref}>
              CGPA <span className="acp">8.39</span>
            </h2>
            <p className="det-sub det-line" ref={d2SubRef}>
              Kute · Zepto Clone · DSS · KIIT E-Cell · Hackathon Builds
            </p>
            <div className="det-rule det-rule-pink det-line" ref={d2RuleRef} />
          </div>

          <span className="hcoord" id="hc-bl">
            20.2961° N, 85.8245° E
          </span>
          <span className="hcoord" id="hc-br">
            Bhubaneswar · India
          </span>

          <div id="hero-cue">
            <div className="cue-track">
              <div className="cue-runner" />
            </div>
            <span className="cue-label">Scroll</span>
          </div>
        </div>
      </div>
    </>
  );
}

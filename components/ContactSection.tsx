/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

// Custom Github icon
const Github = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom LinkedIn icon
const LinkedInIcon = ({
  size = 24,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-32 bg-[#050508]/40 border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="border border-[#00f5ff]/40 px-4 py-2 text-xs tracking-widest text-[#00f5ff] font-mono mb-4"
          >
            COMMUNICATION LINK
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-center"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-white">GET IN </span>
            <span className="text-[#00f5ff] glow-cyan">TOUCH</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between border border-white/10 p-8 bg-[#07070c] relative"
          >
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#00f5ff] shadow-[0_0_10px_#00f5ff]" />

            <div className="flex flex-col gap-6 mb-6">
              <h3 className="text-xl font-bold font-mono text-white mb-2">
                // DIRECTORIES
              </h3>

              <div className="flex items-center gap-4 font-mono text-xs">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#00f5ff] bg-white/5">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-white/40">EMAIL</div>
                  <a
                    href="mailto:sakshamsinha9999@gmail.com"
                    className="text-white hover:text-[#00f5ff] transition-colors"
                  >
                    sakshamsinha9999@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#ff006e] bg-white/5">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-white/40">PHONE</div>
                  <a
                    href="tel:+917394062133"
                    className="text-white hover:text-[#ff006e] transition-colors"
                  >
                    +91 7394062133
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#00ff88] bg-white/5">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-white/40">LOCATION</div>
                  <span className="text-white">Bhubaneswar, India</span>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 pt-8 border-t border-white/10 flex gap-6">
              <motion.a
                whileHover={{ y: -3, color: "#00f5ff" }}
                href="https://github.com/SkSin19"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 flex items-center gap-2 font-mono text-xs"
              >
                <Github size={16} /> GITHUB
              </motion.a>
              <motion.a
                whileHover={{ y: -3, color: "#00f5ff" }}
                href="https://www.linkedin.com/in/saksham-sinha-6b6376301/"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 flex items-center gap-2 font-mono text-xs"
              >
                <LinkedInIcon size={16} /> LINKEDIN
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 border border-white/10 p-8 bg-[#050508]/80 backdrop-blur-sm"
          >
            {/* <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 font-mono text-xs"
            >
              <div className="flex flex-col gap-2">
                <label className="text-white/60 tracking-wider">
                  IDENTIFICATION (NAME)
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/60 tracking-wider">
                  COMMS CHANNEL (EMAIL)
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all"
                  placeholder="e.g. hello@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/60 tracking-wider">MESSAGE</label>
                <textarea
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(0,245,255,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="bg-[#00f5ff] text-black font-bold tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-[#00f5ff]/90 transition-all cursor-pointer disabled:opacity-50 w-full"
              >
                {status === "sending" ? (
                  <span>SENDING...</span>
                ) : status === "success" ? (
                  <span className="text-[#00ff88]">MESSAGE SENT ✓</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send size={14} />
                  </>
                )}
              </motion.button>
            </form> */}
            <div className="coming-soon-box flex align-center justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute gap-2">
            <span className="text-2xl md:text-4xl text-[#00f5ff] glow-cyan font-black">Coming</span>
            <span className="text-2xl md:text-4xl text-[#ffffff] glow-cyan font-black">Soon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { ArrowUp, Terminal, Shield, Cpu } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative py-16 border-t border-white/5 bg-[#030306] overflow-hidden font-mono">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-[#00f5ff]/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-white/5 pb-12">
                    
                    {/* Left: Brand info */}
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <div className="w-6 h-6 border border-[#00f5ff] flex items-center justify-center relative">
                                <span className="font-orbitron font-bold text-[#00f5ff] text-[10px]" style={{ fontFamily: "var(--font-orbitron)" }}>SS</span>
                                <div className="absolute inset-0 bg-[#00f5ff]/5" />
                            </div>
                            <span className="text-white font-bold text-sm tracking-widest font-orbitron" style={{ fontFamily: "var(--font-orbitron)" }}>
                                SAKSHAM<span className="text-white/60">.DEV</span>
                            </span>
                        </div>
                        <p className="text-[10px] text-white/30 tracking-wider">
                            FULL-STACK DEVELOPER // KIIT BHUBANESWAR
                        </p>
                    </div>

                    {/* Middle: Active system diagnostics */}
                    <div className="flex justify-center gap-6 text-[10px]">
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-2 border border-white/5 bg-white/5 px-3.5 py-2 hover:border-[#00f5ff]/20 transition-all cursor-default"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5ff] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f5ff]"></span>
                            </span>
                            <span className="text-white/50 tracking-wider">SYSTEM: OPERATIONAL</span>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-2 border border-white/5 bg-white/5 px-3.5 py-2 hover:border-[#ff006e]/20 transition-all cursor-default"
                        >
                            <Cpu size={12} className="text-[#ff006e] animate-pulse" />
                            <span className="text-white/50 tracking-wider">PING: 14MS</span>
                        </motion.div>
                    </div>

                    {/* Right: Scroll to top */}
                    <div className="flex justify-center md:justify-end">
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.05, borderColor: "#00f5ff", color: "#ffffff" }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs text-white/50 hover:text-white transition-all cursor-pointer"
                        >
                            <span>BACK TO TOP</span>
                            <ArrowUp size={12} className="text-[#00f5ff]" />
                        </motion.button>
                    </div>
                </div>

                {/* Bottom credits */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[10px] text-white/20">
                    <div>© {new Date().getFullYear()} SAKSHAM SINHA. ALL RIGHTS RESERVED.</div>
                    <div className="flex gap-6">
                        <motion.span 
                            whileHover={{ color: "rgba(255,255,255,0.6)", y: -1 }}
                            className="hover:text-white/50 transition-colors cursor-pointer flex items-center gap-1"
                        >
                            <Terminal size={10} /> TERMINAL_LINK
                        </motion.span>
                        <motion.span 
                            whileHover={{ color: "rgba(255,255,255,0.6)", y: -1 }}
                            className="hover:text-white/50 transition-colors cursor-pointer flex items-center gap-1"
                        >
                            <Shield size={10} /> SECURITY_ENCRYPT
                        </motion.span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

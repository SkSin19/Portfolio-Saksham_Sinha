"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id.toLowerCase());
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050508]/90 backdrop-blur-md border-b border-[#00f5ff]/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => scrollTo("home")}
                >
                    <div className="w-9 h-9 border border-[#00f5ff] flex items-center justify-center relative">
                        <span
                            className="font-orbitron font-bold text-[#00f5ff] text-sm"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            SS
                        </span>
                        <div className="absolute inset-0 bg-[#00f5ff]/5" />
                    </div>
                    <span style={{ fontFamily: "var(--font-orbitron)" }} className="text-white font-bold text-lg">
                        SAKSHAM<span className="text-white/60">.DEV</span>
                    </span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.button
                            key={link}
                            onClick={() => scrollTo(link)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className="text-white/60 hover:text-white text-xs tracking-widest transition-colors duration-200 font-mono relative group"
                        >
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00f5ff] group-hover:w-full transition-all duration-300" />
                        </motion.button>
                    ))}
                </div>

                {/* Hire Me */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,0,110,0.5)" }}
                    onClick={() => scrollTo("contact")}
                    className="hidden md:block border border-[#ff006e] text-[#ff006e] px-5 py-2 text-xs tracking-widest font-mono hover:bg-[#ff006e]/10 transition-all duration-300"
                >
                    HIRE ME
                </motion.button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#00f5ff]"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#050508]/95 backdrop-blur-md border-t border-[#00f5ff]/10"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link}
                                    onClick={() => scrollTo(link)}
                                    className="text-white/60 hover:text-[#00f5ff] text-xs tracking-widest text-left font-mono py-2 border-b border-white/5"
                                >
                                    {link}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollTo("contact")}
                                className="border border-[#ff006e] text-[#ff006e] px-5 py-2 text-xs tracking-widest font-mono mt-2"
                            >
                                HIRE ME
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
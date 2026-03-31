"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, TerminalSquare } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center p-[1px]">
                        <div className="w-full h-full bg-surface rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors">
                            <TerminalSquare className="w-5 h-5 text-white" />
                        </div>
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                        MQL5<span className="text-primary">.ai</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
                    <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2 hidden sm:block">
                        Login
                    </Link>
                    <Link href="/generate">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:glow transition-shadow"
                        >
                            <Bot className="w-4 h-4" />
                            Build a Bot
                        </motion.button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

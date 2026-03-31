"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium mb-8 text-gray-300"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>The future of algorithmic trading is here</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        Build <span className="text-gradient">Professional MT5 Bots</span> with AI
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Describe your trading strategy in plain English. Our AI generates flawless, optimized MQL5 Expert Advisors and Custom Indicators in seconds. No coding required.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/generate" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:glow transition-all hover:scale-105 active:scale-95">
                                Start Building Free
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <Link href="#how-it-works" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 glass hover:bg-white/10 transition-all">
                                <Terminal className="w-5 h-5" />
                                View Examples
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Hero Image / Editor mock */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-20 relative rounded-2xl glass p-2 border border-white/10 mx-auto max-w-5xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                    <div className="bg-[#0D0D0D] rounded-xl border border-white/5 overflow-hidden">
                        <div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/40">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="mx-auto flex items-center gap-2 text-xs text-gray-500 font-mono">
                                <Code2 className="w-3 h-3" />
                                <span>MACD_RSI_Bot.mq5</span>
                            </div>
                        </div>
                        <div className="p-6 font-mono text-sm md:text-base text-gray-300 overflow-x-auto">
                            <pre>
                                <code className="language-mql5">
                                    <span className="text-gray-500">//+------------------------------------------------------------------+</span><br />
                                    <span className="text-gray-500">//|                                                 MACD_RSI_Bot.mq5 |</span><br />
                                    <span className="text-gray-500">//|                                                Generated by AI   |</span><br />
                                    <span className="text-gray-500">//+------------------------------------------------------------------+</span><br />
                                    <span className="text-accent">#include</span> &lt;Trade\Trade.mqh&gt;<br /><br />
                                    <span className="text-primary">input int</span>    InpMACDFast = <span className="text-yellow-400">12</span>;  <span className="text-gray-500">// MACD Fast EMA</span><br />
                                    <span className="text-primary">input int</span>    InpMACDSlow = <span className="text-yellow-400">26</span>;  <span className="text-gray-500">// MACD Slow EMA</span><br />
                                    <span className="text-primary">input int</span>    InpRSIPeriod = <span className="text-yellow-400">14</span>; <span className="text-gray-500">// RSI Period</span><br />
                                    <br />
                                    <span className="text-primary">CTrade</span> trade;<br />
                                </code>
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

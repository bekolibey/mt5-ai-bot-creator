"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Clock, CodeXml, Infinity as InfinityIcon } from "lucide-react";

const features = [
    {
        icon: <Cpu className="w-6 h-6 text-primary" />,
        title: "Advanced AI Model",
        description: "Trained exclusively on millions of lines of MQL5 documentation and successful Expert Advisors to ensure flawless code generation."
    },
    {
        icon: <Zap className="w-6 h-6 text-accent" />,
        title: "Lightning Fast",
        description: "Go from idea to deployed trading robot in under 60 seconds. Skip weeks of manual programming and debugging."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
        title: "Error-Free Compilation",
        description: "Every generated bot is pre-validated to guarantee it compiles without errors in the MetaTrader 5 MetaEditor."
    },
    {
        icon: <CodeXml className="w-6 h-6 text-blue-400" />,
        title: "Clean, Commented Code",
        description: "We don't just output spaghetti code. You receive well-structured, human-readable MQL5 with clear comments."
    },
    {
        icon: <InfinityIcon className="w-6 h-6 text-purple-400" />,
        title: "Unlimited Strategies",
        description: "From simple Moving Average crossovers to complex multi-timeframe price action systems using custom indicators."
    },
    {
        icon: <Clock className="w-6 h-6 text-orange-400" />,
        title: "24/7 Market Edge",
        description: "Automate your trading completely. Let your AI-built algorithm monitor the markets and execute trades while you sleep."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Why build with <span className="text-gradient">MQL5.ai</span>?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We provide the most powerful infrastructure for algorithmic traders to bring their strategies to life instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-white/[0.02] transition-colors group cursor-default"
                        >
                            <div className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

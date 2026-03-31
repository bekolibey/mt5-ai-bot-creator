"use client";

import { Check, Shield } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Starter",
        price: "$100",
        description: "Perfect for testing ideas and building simple indicators.",
        features: [
            "10 AI Generations per month",
            "Standard MQL5 Code Output",
            "Unlimited Downloads",
            "Community Support",
        ],
        highlight: false,
        cta: "Get Started",
    },
    {
        name: "Pro Trader",
        price: "$245",
        description: "For serious traders automating complex logic and EAs.",
        features: [
            "Unlimited AI Generations",
            "Advanced Risk Management Logic",
            "Multi-Timeframe Analysis Support",
            "Priority Email Support",
            "Backtesting Optimization Ready",
        ],
        highlight: true,
        cta: "Upgrade to Pro",
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-32 pb-24 px-6 relative overflow-hidden">
                {/* Glow behind pricing */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Invest in your <span className="text-gradient">Automated Edge</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
                        Stop paying thousands to freelancers for slow updates. Describe your strategy once and generate unlimited iterations in seconds.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative text-left">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`flex flex-col p-8 rounded-3xl border ${plan.highlight ? 'border-primary glow bg-surface' : 'border-white/10 glass'}`}
                            >
                                {plan.highlight && (
                                    <div className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block w-fit mb-6">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>
                                <div className="mb-8">
                                    <span className="text-5xl font-bold">{plan.price}</span>
                                    {plan.name === "Pro Trader" && <span className="text-gray-500 text-lg">/mo</span>}
                                </div>

                                <ul className="mb-8 flex-1 space-y-4">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex flex-start gap-3 text-sm text-gray-300">
                                            <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/dashboard" className="w-full">
                                    <button className={`w-full py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] ${plan.highlight ? 'bg-primary text-white hover:bg-primary/90' : 'glass hover:bg-white/5'}`}>
                                        {plan.cta}
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Shield className="w-4 h-4 text-gray-500" />
                        Secure payments handled via industry leading providers. No hidden fees.
                    </div>
                </div>
            </main>
        </div>
    );
}

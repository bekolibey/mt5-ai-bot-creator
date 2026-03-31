"use client";

import Link from "next/link";
import { Bot, Code2, Plus, ArrowRight, Activity, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

const mockBots = [
    { id: 1, name: "MACD Multi-Timeframe", type: "Expert Advisor", status: "Active", date: "2 Hours ago", performace: "+12.4%" },
    { id: 2, name: "RSI Scalper PRO", type: "Custom Indicator", status: "Draft", date: "1 Day ago", performace: "-" },
    { id: 3, name: "Gold Grid System", type: "Expert Advisor", status: "Active", date: "3 Days ago", performace: "+4.1%" },
];

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">My Algorithmic Portfolio</h1>
                        <p className="text-gray-400">Manage and deploy your generated MQL5 trading robots.</p>
                    </div>
                    <Link href="/generate">
                        <button className="bg-primary text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:glow transition-all">
                            <Plus className="w-5 h-5" />
                            New Bot
                        </button>
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors" />
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                <Bot className="w-5 h-5" />
                            </div>
                            <h3 className="text-gray-400 font-medium">Total Bots Generated</h3>
                        </div>
                        <p className="text-4xl font-bold">12</p>
                    </div>

                    <div className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-colors" />
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                                <Activity className="w-5 h-5" />
                            </div>
                            <h3 className="text-gray-400 font-medium">Active Configurations</h3>
                        </div>
                        <p className="text-4xl font-bold">4</p>
                    </div>

                    <div className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[50px] group-hover:bg-green-500/20 transition-colors" />
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                                <Zap className="w-5 h-5" />
                            </div>
                            <h3 className="text-gray-400 font-medium">Est. Monthly ROI</h3>
                        </div>
                        <p className="text-4xl font-bold text-green-400">+16.5%</p>
                    </div>
                </div>

                {/* Recent Bots List */}
                <div className="glass rounded-2xl border border-white/5 overflow-hidden">
                    <div className="px-6 py-5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Recent Generations</h2>
                        <Link href="/generate" className="text-primary text-sm font-medium flex items-center gap-1 hover:text-primary/80 transition-colors">
                            View all <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="divide-y divide-white/5">
                        {mockBots.map((bot) => (
                            <div key={bot.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Code2 className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-lg">{bot.name}</h4>
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                                            <span>{bot.type}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-600" />
                                            <span>{bot.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="text-right hidden sm:block">
                                        <div className="text-sm text-gray-400 font-medium mb-1">Status</div>
                                        <div className={`text-sm font-semibold ${bot.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>
                                            {bot.status}
                                        </div>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <div className="text-sm text-gray-400 font-medium mb-1">Performance</div>
                                        <div className="text-sm font-semibold text-white">{bot.performace}</div>
                                    </div>
                                    <button className="px-4 py-2 rounded-lg bg-surface border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

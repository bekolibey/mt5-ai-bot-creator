import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MQL5.ai. Empowering algorithmic traders.</p>
          <p className="mt-2 text-xs">This product is an AI tool and not financial advice. Test Expert Advisors on a demo account before risking real money.</p>
        </div>
      </footer>
    </main>
  );
}

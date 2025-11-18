import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* subtle texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.06),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.06),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(251,191,36,0.05),transparent_20%)]" />

      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
            <span>Auralynx AI</span>
          </div>
          <p className="opacity-80">© {new Date().getFullYear()} Auralynx, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

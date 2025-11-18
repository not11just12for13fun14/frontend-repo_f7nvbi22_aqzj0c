import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#cta' },
    { label: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_0_30px_rgba(168,85,247,0.35)]" />
              <span className="text-white font-semibold tracking-tight">Auralynx AI</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center rounded-lg bg-white/10 text-white px-4 py-2 hover:bg-white/20 transition-colors border border-white/10">
                Get started
              </a>
            </nav>

            {/* Mobile toggle */}
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 text-white border border-white/10">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden px-4 sm:px-6 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                    {item.label}
                  </a>
                ))}
                <a href="#cta" className="w-full rounded-lg bg-white text-slate-900 font-medium px-4 py-3 text-center">
                  Get started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

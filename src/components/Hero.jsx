import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-24 sm:pb-28 lg:pb-32 overflow-hidden">
      {/* Background gradient auras */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-[900px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),rgba(168,85,247,0.14)_40%,rgba(251,191,36,0.10)_65%,transparent_70%)] blur-2xl" />
        <div className="absolute top-1/2 -translate-y-1/2 left-10 h-72 w-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 animate-pulse" />
              Introducing our AI voice agent platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Build AI voice agents your users will love
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              Launch conversational experiences with natural speech, real-time understanding, and enterprise-grade reliability. Designed for modern teams.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)] transition-shadow">
                Get a demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium border border-white/10 hover:bg-white/15">
                Explore features
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">Trusted by teams shipping AI products at scale.</p>
          </div>

          {/* Spline container */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-3xl border border-white/10 overflow-hidden bg-slate-900/40">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* soft gradient overlay to blend */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

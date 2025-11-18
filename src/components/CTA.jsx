export default function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.06),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1">
          <div className="rounded-[22px] bg-slate-900/60 p-8 sm:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to build your voice agent?</h3>
                <p className="mt-3 text-slate-300">Get early access to our SDKs, guides, and reference architectures.</p>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-[1fr_auto] gap-3">
                <input type="email" required placeholder="Work email" className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
                <button className="h-12 rounded-xl bg-white text-slate-900 font-medium px-6 hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)] transition-shadow">Join waitlist</button>
                <p className="sm:col-span-2 text-xs text-slate-400">By signing up, you agree to our Terms and Privacy Policy.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

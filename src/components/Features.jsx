import { Waveform, ShieldCheck, Zap, Globe } from 'lucide-react'

const features = [
  {
    title: 'Realtime voice',
    description: 'Ultra-low latency streaming with natural prosody and interruptions.',
    icon: Waveform,
  },
  {
    title: 'Enterprise-grade',
    description: 'SOC 2 ready, SSO, audit logs, rate limits, and fine-grained access control.',
    icon: ShieldCheck,
  },
  {
    title: 'Instant actions',
    description: 'Connect to your stack and let agents take action safely with guardrails.',
    icon: Zap,
  },
  {
    title: 'Global scale',
    description: 'Multi-region edge deployment for high reliability and performance.',
    icon: Globe,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">What you get</h2>
          <p className="mt-3 text-slate-300">Everything you need to design, deploy, and scale voice-first AI experiences.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <div className="size-10 rounded-xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30 flex items-center justify-center text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

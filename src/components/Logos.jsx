const logos = [
  { name: 'Aurora', svg: (
    <svg viewBox="0 0 120 24" className="h-5 opacity-70"><text x="0" y="16" fill="currentColor">Aurora</text></svg>
  )},
  { name: 'Nebula', svg: (
    <svg viewBox="0 0 120 24" className="h-5 opacity-70"><text x="0" y="16" fill="currentColor">Nebula</text></svg>
  )},
  { name: 'Quanta', svg: (
    <svg viewBox="0 0 120 24" className="h-5 opacity-70"><text x="0" y="16" fill="currentColor">Quanta</text></svg>
  )},
  { name: 'Helix', svg: (
    <svg viewBox="0 0 120 24" className="h-5 opacity-70"><text x="0" y="16" fill="currentColor">Helix</text></svg>
  )},
  { name: 'Pulse', svg: (
    <svg viewBox="0 0 120 24" className="h-5 opacity-70"><text x="0" y="16" fill="currentColor">Pulse</text></svg>
  )},
]

export default function Logos() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center text-slate-400">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center h-12 rounded-xl border border-white/10 bg-white/5">
              {l.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

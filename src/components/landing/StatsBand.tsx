const stats = [
  ["$2.4B", "Assets Advised"],
  ["500+", "Clients"],
  ["14", "Years"],
  ["8.7%", "Avg. Return"],
]

export function StatsBand() {
  return (
    <section className="bg-brand-navy py-14 text-white" data-fade-in>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(([value, label]) => (
          <div key={label}>
            <p className="text-4xl font-semibold tracking-tight text-brand-gold">{value}</p>
            <p className="mt-2 text-sm font-medium text-slate-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

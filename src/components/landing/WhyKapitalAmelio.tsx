import { CheckCircle2 } from "lucide-react"

const points = [
  "Fiduciary-first advice across every recommendation",
  "Transparent fees with no opaque product incentives",
  "Dedicated advisor access for timely decisions",
  "Coordinated tax, estate, and investment planning",
]

export function WhyKapitalAmelio() {
  return (
    <section id="about" className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div data-fade-in>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
            Why Kapital Amelio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            Calm, precise guidance when the stakes are personal.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            We combine institutional discipline with boutique attention, helping clients
            understand the tradeoffs behind every move.
          </p>
          <ul className="mt-8 grid gap-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative min-h-[420px] rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          data-fade-in
        >
          <div className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <div>
                <p className="text-sm text-slate-500">Planning model</p>
                <p className="mt-1 text-xl font-semibold text-brand-navy">2027 outlook</p>
              </div>
              <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-navy">
                On track
              </span>
            </div>
            <div className="grid content-end gap-3">
              {[72, 48, 88, 64, 78].map((height, index) => (
                <div key={height} className="grid grid-cols-[80px_1fr] items-center gap-4">
                  <span className="text-xs font-medium text-slate-500">Q{index + 1}</span>
                  <div className="h-9 rounded-lg bg-slate-100">
                    <div
                      className="h-9 rounded-lg bg-brand-navy"
                      style={{ width: `${height}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-5">
              <div>
                <p className="text-sm text-slate-500">Risk score</p>
                <p className="mt-1 text-2xl font-semibold text-brand-navy">Moderate</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Liquidity runway</p>
                <p className="mt-1 text-2xl font-semibold text-brand-navy">18 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

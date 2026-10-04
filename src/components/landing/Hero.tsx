import { ArrowRight, BarChart3, ShieldCheck, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-brand-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center" data-fade-in>
          <Badge variant="accent" className="w-fit">
            Independent finance management
          </Badge>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight text-brand-navy sm:text-6xl lg:text-7xl">
            Smarter finance. Clearer decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Kapital Amelio helps individuals and businesses manage wealth, investments,
            and long-range financial strategy with disciplined advice and transparent
            planning.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="h-11 bg-brand-gold px-5 text-brand-navy hover:bg-brand-gold/85">
              Book a Consultation
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="ghost"
              className="h-11 px-5 text-brand-navy hover:bg-white hover:text-brand-navy"
            >
              Explore Services
            </Button>
          </div>
          <p className="mt-8 text-sm font-medium text-slate-600">
            Trusted by 500+ clients | SEC Registered | Est. 2012
          </p>
        </div>
        <div className="relative min-h-[440px]" data-fade-in>
          <div className="absolute inset-x-6 top-6 h-72 rounded-full border border-brand-gold/25" />
          <Card className="relative mx-auto max-w-md border-slate-200 shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Assets advised</p>
                  <p className="mt-2 text-4xl font-semibold text-brand-navy">$2.4B</p>
                </div>
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                  <TrendingUp className="size-6" />
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                {[
                  ["Diversified portfolio health", "94%"],
                  ["Client retention", "98%"],
                  ["Planning milestones funded", "86%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-600">{label}</span>
                      <span className="font-semibold text-brand-navy">{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-brand-gold" style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="absolute right-0 bottom-10 hidden w-56 rounded-lg border border-slate-200 bg-white p-5 shadow-lg sm:block">
            <BarChart3 className="size-5 text-brand-gold" />
            <p className="mt-3 text-sm font-medium text-brand-navy">
              Quarterly strategy review
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Risk, tax, and liquidity mapped in one view.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 hidden w-52 rounded-lg border border-slate-200 bg-brand-navy p-5 text-white shadow-lg sm:block">
            <ShieldCheck className="size-5 text-brand-gold" />
            <p className="mt-3 text-sm font-medium">Fiduciary counsel</p>
            <p className="mt-1 text-xs leading-5 text-slate-300">
              Advice aligned to your goals first.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, Building2, Landmark, LineChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Landmark,
    title: "Wealth Management",
    description: "Personalized plans for preservation, growth, estate goals, and cash-flow clarity.",
  },
  {
    icon: LineChart,
    title: "Investment Advisory",
    description: "Evidence-led portfolio construction with disciplined risk management and review.",
  },
  {
    icon: Building2,
    title: "Corporate Financial Planning",
    description: "Capital planning, executive benefits, and treasury strategy for growing companies.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-fade-in>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            Integrated advice for every financial chapter.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="transition-shadow hover:shadow-md" data-fade-in>
              <CardHeader>
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                  <service.icon className="size-5" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-gold"
                >
                  Learn more <ArrowRight className="size-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

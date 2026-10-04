import { BriefcaseBusiness, Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const columns = [
  ["Company", "About", "Careers", "Contact"],
  ["Services", "Wealth Management", "Investment Advisory", "Corporate Planning"],
  ["Resources", "Insights", "Market Notes", "Planning Guides"],
  ["Legal", "Privacy", "Disclosures", "Terms"],
]

export function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#home" className="text-xl font-semibold tracking-tight">
              Kapital <span className="text-brand-gold">Amelio</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Premium financial management for families, founders, and growth-minded
              organizations.
            </p>
            <form className="mt-6 flex max-w-sm gap-2">
              <Input
                type="email"
                aria-label="Newsletter email"
                placeholder="Email address"
                className="border-white/15 bg-white/10 text-white placeholder:text-slate-400"
              />
              <Button className="bg-brand-gold text-brand-navy hover:bg-brand-gold/85">
                Join
              </Button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map(([title, ...items]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <ul className="mt-4 grid gap-3 text-sm text-slate-300">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#home" className="transition-colors hover:text-brand-gold">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-8 bg-white/15" />
        <div className="flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Kapital Amelio. All rights reserved.</p>
          <div className="flex gap-3">
            {[BriefcaseBusiness, Send, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#contact"
                className="flex size-9 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-colors hover:border-brand-gold hover:text-brand-gold"
                aria-label="Social link"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

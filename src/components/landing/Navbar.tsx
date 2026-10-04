import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
]

function Wordmark() {
  return (
    <a href="#home" className="text-lg font-semibold tracking-tight text-brand-navy">
      Kapital <span className="text-brand-gold">Amelio</span>
    </a>
  )
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button className="bg-brand-gold text-brand-navy hover:bg-brand-gold/85">
            Get Started
          </Button>
        </div>
        <Sheet>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-brand-navy md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                Kapital <span className="text-brand-gold">Amelio</span>
              </SheetTitle>
              <SheetDescription>Financial strategy with a steady hand.</SheetDescription>
            </SheetHeader>
            <nav className="mt-10 grid gap-3" aria-label="Mobile navigation">
              {links.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<a href={link.href} />}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-navy"
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <Button className="mt-8 w-full bg-brand-gold text-brand-navy hover:bg-brand-gold/85">
              Get Started
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

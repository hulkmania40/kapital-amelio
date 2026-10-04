import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CtaBanner() {
  return (
    <section id="contact" className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8" data-fade-in>
        <h2 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
          Ready to take control of your finances?
        </h2>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            required
            aria-label="Email address"
            placeholder="you@example.com"
            className="h-12"
          />
          <Button className="h-12 bg-brand-gold px-6 text-brand-navy hover:bg-brand-gold/85">
            Request a Call
          </Button>
        </form>
      </div>
    </section>
  )
}

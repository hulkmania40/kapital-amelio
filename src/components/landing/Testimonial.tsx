import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonial() {
  return (
    <section id="insights" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8" data-fade-in>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
          Client perspective
        </p>
        <blockquote className="mt-6 text-2xl font-medium leading-10 tracking-tight text-brand-navy sm:text-3xl sm:leading-[1.35]">
          "Kapital Amelio brought structure and confidence to decisions we had been
          delaying for years. Their team makes complex planning feel clear without
          oversimplifying the stakes."
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Avatar>
            <AvatarImage src="" alt="Portrait of Elena Morris" />
            <AvatarFallback>EM</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="font-semibold text-brand-navy">Elena Morris</p>
            <p className="text-sm text-slate-500">Founder, Northline Studio</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        "flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-brand-navy shadow-sm transition-colors outline-none placeholder:text-slate-500 focus-visible:border-brand-gold focus-visible:ring-3 focus-visible:ring-brand-gold/20 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }

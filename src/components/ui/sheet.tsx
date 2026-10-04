import * as React from "react"
import { Dialog } from "@base-ui/react/dialog"
import { X } from "lucide-react"
import { cn } from "cn"

function Sheet({ ...props }: Dialog.Root.Props) {
  return <Dialog.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: Dialog.Trigger.Props) {
  return <Dialog.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: Dialog.Close.Props) {
  return <Dialog.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: Dialog.Portal.Props) {
  return <Dialog.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: Dialog.Backdrop.Props) {
  return (
    <Dialog.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-brand-navy/45 transition-opacity data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({ className, children, ...props }: Dialog.Popup.Props) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Popup
        data-slot="sheet-content"
        className={cn(
          "fixed top-0 right-0 z-50 h-dvh w-80 max-w-[85vw] border-l border-slate-200 bg-white p-6 shadow-xl transition-transform duration-300 data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full",
          className
        )}
        {...props}
      >
        {children}
        <SheetClose className="absolute top-4 right-4 rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand-navy focus-visible:ring-3 focus-visible:ring-brand-gold/25 focus-visible:outline-none">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </Dialog.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2 pr-8", className)} {...props} />
}

function SheetTitle({ className, ...props }: Dialog.Title.Props) {
  return (
    <Dialog.Title
      className={cn("text-lg font-semibold text-brand-navy", className)}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }: Dialog.Description.Props) {
  return (
    <Dialog.Description className={cn("text-sm text-slate-600", className)} {...props} />
  )
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
}

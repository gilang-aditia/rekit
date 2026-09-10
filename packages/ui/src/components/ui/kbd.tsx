import * as React from "react"

import { cn } from "@/lib/utils"

const Kbd = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"kbd">>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 shrink-0 select-none items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground",
        "[&_svg:not([class*='size-'])]:size-3",
        "in-[data-slot=button]:bg-background/20 in-[data-slot=button]:text-current dark:in-[data-slot=button]:bg-background/10",
        className
      )}
      {...props}
    />
  )
)
Kbd.displayName = "Kbd"

const KbdGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="kbd-group"
    className={cn("inline-flex items-center gap-1", className)}
    {...props}
  />
))
KbdGroup.displayName = "KbdGroup"

export { Kbd, KbdGroup }

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Select bawaan browser. Dipakai saat butuh menu asli platform — terutama di
 * mobile — tanpa portal atau JavaScript tambahan seperti pada <Select>.
 */
const NativeSelect = React.forwardRef<
  HTMLSelectElement,
  React.ComponentPropsWithoutRef<"select"> & {
    size?: "sm" | "default"
    containerClassName?: string
  }
>(({ className, containerClassName, size = "default", children, ...props }, ref) => (
  <div
    data-slot="native-select"
    className={cn("relative w-fit", containerClassName)}
  >
    <select
      ref={ref}
      data-slot="native-select-control"
      data-size={size}
      className={cn(
        "w-full appearance-none rounded-lg border border-input bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors outline-none",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        "data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)]",
        "dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        "[&>option]:bg-popover [&>option]:text-popover-foreground",
        className
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-muted-foreground" />
  </div>
))
NativeSelect.displayName = "NativeSelect"

export { NativeSelect }

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const markerVariants = cva(
  "flex w-full items-center gap-2 text-xs text-muted-foreground",
  {
    variants: {
      variant: {
        /** Catatan sistem, rata tengah tanpa garis. */
        default: "justify-center text-center",
        /** Pembatas berlabel: garis di kiri dan kanan label. */
        separator:
          "before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border",
        /** Baris status berbingkai, misalnya aktivitas alat. */
        outline:
          "justify-start rounded-lg border border-dashed px-2.5 py-1.5 text-left",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Penanda di dalam aliran percakapan: pembatas tanggal, catatan sistem,
 * atau status pengerjaan yang sedang berjalan.
 */
const Marker = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof markerVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    data-slot="marker"
    data-variant={variant}
    className={cn(
      markerVariants({ variant }),
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
      className
    )}
    {...props}
  />
))
Marker.displayName = "Marker"

const MarkerLabel = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="marker-label"
    className={cn("inline-flex items-center gap-1.5 whitespace-nowrap", className)}
    {...props}
  />
))
MarkerLabel.displayName = "MarkerLabel"

/** Teks berdenyut untuk status yang sedang berjalan ("Sedang berpikir…"). */
const MarkerShimmer = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="marker-shimmer"
    className={cn("animate-pulse", className)}
    {...props}
  />
))
MarkerShimmer.displayName = "MarkerShimmer"

export { Marker, MarkerLabel, MarkerShimmer, markerVariants }

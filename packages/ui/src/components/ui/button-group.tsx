import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
  [
    "flex w-fit items-stretch",
    // Sudut dalam dirapatkan supaya kelompok terbaca sebagai satu kesatuan.
    "[&>*]:focus-visible:z-10 [&>*]:focus-visible:relative",
    "[&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit",
    "has-[>[data-slot=button-group]]:gap-2",
  ],
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof buttonGroupVariants>
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    data-slot="button-group"
    data-orientation={orientation}
    className={cn(buttonGroupVariants({ orientation }), className)}
    {...props}
  />
))
ButtonGroup.displayName = "ButtonGroup"

type ButtonGroupSeparatorProps = React.ComponentPropsWithoutRef<"div"> & {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
  asChild?: boolean
}

const ButtonGroupSeparator = React.forwardRef<
  HTMLDivElement,
  ButtonGroupSeparatorProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <Separator
    ref={ref}
    data-slot="button-group-separator"
    orientation={orientation}
    className={cn(
      "relative !m-0 self-stretch bg-border data-[orientation=vertical]:h-auto",
      className
    )}
    {...props}
  />
))
ButtonGroupSeparator.displayName = "ButtonGroupSeparator"

const ButtonGroupText = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="button-group-text"
    className={cn(
      "flex items-center gap-1.5 rounded-lg border border-border bg-muted px-2.5 text-sm font-medium text-muted-foreground",
      "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  />
))
ButtonGroupText.displayName = "ButtonGroupText"

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants }

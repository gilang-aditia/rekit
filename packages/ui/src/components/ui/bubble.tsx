import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const bubbleVariants = cva(
  "group/bubble relative w-fit max-w-[min(36rem,85%)] rounded-xl px-3 py-2 text-sm break-words [&_a]:underline [&_a]:underline-offset-3",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        primary: "bg-primary text-primary-foreground [&_a]:text-primary-foreground",
        outline: "border border-border bg-background text-foreground",
        ghost: "bg-transparent px-0 text-foreground",
      },
      align: {
        start: "mr-auto rounded-bl-sm",
        end: "ml-auto rounded-br-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      align: "start",
    },
  }
)

/** Permukaan visual satu pesan. Tata letak barisnya diurus <Message>. */
const Bubble = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof bubbleVariants> & { asChild?: boolean }
>(({ className, variant, align, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      ref={ref}
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant, align }), className)}
      {...props}
    />
  )
})
Bubble.displayName = "Bubble"

const BubbleGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="bubble-group"
    className={cn(
      // Gelembung berurutan dari pengirim sama dirapatkan.
      "flex flex-col gap-1 [&>[data-align=end]]:items-end",
      className
    )}
    {...props}
  />
))
BubbleGroup.displayName = "BubbleGroup"

const BubbleActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="bubble-actions"
    className={cn(
      "mt-1.5 flex flex-wrap items-center gap-1.5 opacity-0 transition-opacity",
      "group-hover/bubble:opacity-100 group-focus-within/bubble:opacity-100",
      className
    )}
    {...props}
  />
))
BubbleActions.displayName = "BubbleActions"

const BubbleFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="bubble-footer"
    className={cn(
      "mt-1 flex items-center gap-1.5 text-xs opacity-70 tabular-nums",
      className
    )}
    {...props}
  />
))
BubbleFooter.displayName = "BubbleFooter"

export { Bubble, BubbleGroup, BubbleActions, BubbleFooter, bubbleVariants }

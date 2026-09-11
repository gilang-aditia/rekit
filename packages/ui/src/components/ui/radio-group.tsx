import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "@moonblanck/rakit-ui"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    data-slot="radio-group"
    className={cn("grid gap-2.5", className)}
    {...props}
  />
))
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    data-slot="radio-group-item"
    className={cn(
      "aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none",
      "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:border-primary",
      "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
      "dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator
      data-slot="radio-group-indicator"
      className="relative flex size-full items-center justify-center"
    >
      <CircleIcon className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary text-primary" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "@moonblanck/rakit-ui"
import { CheckIcon, MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    data-slot="checkbox"
    className={cn(
      "peer size-4 shrink-0 rounded-[4px] border border-input bg-transparent shadow-xs transition-shadow outline-none",
      "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
      "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
      "dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className="flex items-center justify-center text-current transition-none"
    >
      {props.checked === "indeterminate" ? (
        <MinusIcon className="size-3.5" />
      ) : (
        <CheckIcon className="size-3.5" />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = "Checkbox"

export { Checkbox }

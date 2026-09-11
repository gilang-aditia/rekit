import * as React from "react"
import { Label as LabelPrimitive } from "@moonblanck/rakit-ui"

import { cn } from "@/lib/utils"

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-slot="label"
    className={cn(
      "flex items-center gap-1.5 text-sm leading-none font-medium select-none",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      "group-data-disabled:pointer-events-none group-data-disabled:opacity-50",
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }

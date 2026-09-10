import * as React from "react"
import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

const Spinner = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<typeof Loader2Icon>>(
  ({ className, ...props }, ref) => (
    <Loader2Icon
      ref={ref}
      role="status"
      aria-label="Memuat"
      data-slot="spinner"
      className={cn("size-4 shrink-0 animate-spin text-muted-foreground", className)}
      {...props}
    />
  )
)
Spinner.displayName = "Spinner"

export { Spinner }

import * as React from "react"
import { Group, Panel, Separator } from "react-resizable-panels"
import { GripVerticalIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Group> & {
    /** Alias kompatibel untuk `orientation`. */
    direction?: "horizontal" | "vertical"
  }
>(({ className, direction, orientation, ...props }, ref) => {
  const resolved = orientation ?? direction ?? "horizontal"

  return (
    <Group
      elementRef={ref}
      data-slot="resizable-panel-group"
      orientation={resolved}
      // Dipakai turunan untuk menata handle; react-resizable-panels v4
      // tidak lagi memancarkan atribut ini sendiri.
      data-panel-group-direction={resolved}
      className={cn(
        "flex size-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
})
ResizablePanelGroup.displayName = "ResizablePanelGroup"

const ResizablePanel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Panel>
>(({ ...props }, ref) => (
  <Panel elementRef={ref} data-slot="resizable-panel" {...props} />
))
ResizablePanel.displayName = "ResizablePanel"

const ResizableHandle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Separator> & { withHandle?: boolean }
>(({ withHandle, className, ...props }, ref) => (
  <Separator
    elementRef={ref}
    data-slot="resizable-handle"
    className={cn(
      "relative flex w-px items-center justify-center bg-border outline-none",
      "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
      "focus-visible:ring-3 focus-visible:ring-ring/50",
      // Handle mewarisi arah dari group lewat selektor induk.
      "in-data-[panel-group-direction=vertical]:h-px in-data-[panel-group-direction=vertical]:w-full",
      "in-data-[panel-group-direction=vertical]:after:left-0 in-data-[panel-group-direction=vertical]:after:h-1 in-data-[panel-group-direction=vertical]:after:w-full in-data-[panel-group-direction=vertical]:after:-translate-y-1/2 in-data-[panel-group-direction=vertical]:after:translate-x-0",
      "in-data-[panel-group-direction=vertical]:[&>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-xs border bg-border">
        <GripVerticalIcon className="size-2.5" />
      </div>
    )}
  </Separator>
))
ResizableHandle.displayName = "ResizableHandle"

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

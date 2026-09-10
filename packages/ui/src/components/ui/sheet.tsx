import * as React from "react"
import { Dialog as SheetPrimitive } from "radix-ui"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/** Root/Portal Radix tidak merender elemen DOM, jadi tidak ada ref untuk diteruskan. */
function Sheet(props: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetPortal(
  props: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Portal>
) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

const SheetTrigger = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger>
>(({ ...props }, ref) => (
  <SheetPrimitive.Trigger ref={ref} data-slot="sheet-trigger" {...props} />
))
SheetTrigger.displayName = "SheetTrigger"

const SheetClose = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>
>(({ ...props }, ref) => (
  <SheetPrimitive.Close ref={ref} data-slot="sheet-close" {...props} />
))
SheetClose.displayName = "SheetClose"

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    data-slot="sheet-overlay"
    className={cn(
      "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className
    )}
    {...props}
  />
))
SheetOverlay.displayName = "SheetOverlay"

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left"
    showCloseButton?: boolean
  }
>(({ className, children, side = "right", showCloseButton = true, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      data-slot="sheet-content"
      data-side={side}
      className={cn(
        "fixed z-50 flex flex-col gap-4 bg-popover text-sm text-popover-foreground ring-1 ring-foreground/10 transition ease-in-out outline-none",
        "data-[state=open]:animate-in data-[state=open]:duration-300",
        "data-[state=closed]:animate-out data-[state=closed]:duration-200",
        "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:sm:max-w-sm",
        "data-[side=right]:data-[state=open]:slide-in-from-right data-[side=right]:data-[state=closed]:slide-out-to-right",
        "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:sm:max-w-sm",
        "data-[side=left]:data-[state=open]:slide-in-from-left data-[side=left]:data-[state=closed]:slide-out-to-left",
        "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto",
        "data-[side=top]:data-[state=open]:slide-in-from-top data-[side=top]:data-[state=closed]:slide-out-to-top",
        "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto",
        "data-[side=bottom]:data-[state=open]:slide-in-from-bottom data-[side=bottom]:data-[state=closed]:slide-out-to-bottom",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <SheetPrimitive.Close data-slot="sheet-close" asChild>
          <Button variant="ghost" size="icon-sm" className="absolute top-3 right-3">
            <XIcon />
            <span className="sr-only">Tutup</span>
          </Button>
        </SheetPrimitive.Close>
      )}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = "SheetContent"

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="sheet-header"
    className={cn("flex flex-col gap-1.5 p-4", className)}
    {...props}
  />
))
SheetHeader.displayName = "SheetHeader"

const SheetFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="sheet-footer"
    className={cn("mt-auto flex flex-col gap-2 border-t bg-muted/50 p-4", className)}
    {...props}
  />
))
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    data-slot="sheet-title"
    className={cn("font-heading text-base leading-none font-medium", className)}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    data-slot="sheet-description"
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = "SheetDescription"

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

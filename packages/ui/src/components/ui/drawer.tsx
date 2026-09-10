import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

/**
 * Tipe prop ditulis terhadap elemen DOM yang benar-benar dirender, bukan
 * diturunkan dari tipe vaul. vaul meneruskan tipe @radix-ui/react-dialog yang
 * hanya bisa dinamai lewat jalur internal pnpm, sehingga .d.ts hasil build
 * tidak portabel bagi konsumen.
 */
type DrawerButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean
}
type DrawerDivProps = React.ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean
}

/** Root/Portal vaul tidak merender elemen DOM, jadi tidak ada ref untuk diteruskan. */
function Drawer(props: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerPortal(
  props: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Portal>
) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

const DrawerTrigger = React.forwardRef<HTMLButtonElement, DrawerButtonProps>(({ ...props }, ref) => (
  <DrawerPrimitive.Trigger ref={ref} data-slot="drawer-trigger" {...props} />
))
DrawerTrigger.displayName = "DrawerTrigger"

const DrawerClose = React.forwardRef<HTMLButtonElement, DrawerButtonProps>(({ ...props }, ref) => (
  <DrawerPrimitive.Close ref={ref} data-slot="drawer-close" {...props} />
))
DrawerClose.displayName = "DrawerClose"

const DrawerOverlay = React.forwardRef<HTMLDivElement, DrawerDivProps>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    data-slot="drawer-overlay"
    className={cn(
      "fixed inset-0 z-50 bg-black/40 supports-backdrop-filter:backdrop-blur-xs",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className
    )}
    {...props}
  />
))
DrawerOverlay.displayName = "DrawerOverlay"

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerDivProps>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      data-slot="drawer-content"
      className={cn(
        // vaul menandai arah lewat data-vaul-drawer-direction, jadi keempat
        // arah bisa ditata tanpa prop tambahan.
        "group/drawer-content fixed z-50 flex h-auto flex-col bg-popover text-sm text-popover-foreground ring-1 ring-foreground/10",
        "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl",
        "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl",
        "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:sm:max-w-sm",
        "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:sm:max-w-sm",
        className
      )}
      {...props}
    >
      {/* Gagang seret hanya relevan untuk drawer vertikal. */}
      <div className="mx-auto mt-3 hidden h-1.5 w-24 shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="drawer-header"
    className={cn("flex flex-col gap-1.5 p-4", className)}
    {...props}
  />
))
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="drawer-footer"
    className={cn("mt-auto flex flex-col gap-2 border-t bg-muted/50 p-4", className)}
    {...props}
  />
))
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2"> & { asChild?: boolean }
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    data-slot="drawer-title"
    className={cn("font-heading text-base leading-none font-medium", className)}
    {...props}
  />
))
DrawerTitle.displayName = "DrawerTitle"

const DrawerDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p"> & { asChild?: boolean }
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    data-slot="drawer-description"
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = "DrawerDescription"

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

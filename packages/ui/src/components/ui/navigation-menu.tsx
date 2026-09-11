import * as React from "react"
import { NavigationMenu as NavigationMenuPrimitive } from "@moonblanck/rakit-ui"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className="absolute top-full left-0 isolate z-50 flex justify-center">
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      data-slot="navigation-menu-viewport"
      className={cn(
        "relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full origin-top overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10",
        "data-[state=open]:animate-in data-[state=open]:zoom-in-90",
        "data-[state=closed]:animate-out data-[state=closed]:zoom-out-95",
        "md:w-(--radix-navigation-menu-viewport-width)",
        className
      )}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName = "NavigationMenuViewport"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & {
    /** Matikan untuk menempatkan konten langsung di bawah item, tanpa viewport bersama. */
    viewport?: boolean
  }
>(({ className, children, viewport = true, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    data-slot="navigation-menu"
    data-viewport={viewport}
    className={cn(
      "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    {viewport && <NavigationMenuViewport />}
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    data-slot="navigation-menu-list"
    className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}
    {...props}
  />
))
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    data-slot="navigation-menu-item"
    className={cn("relative", className)}
    {...props}
  />
))
NavigationMenuItem.displayName = "NavigationMenuItem"

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-8 w-max items-center justify-center rounded-lg border border-transparent bg-background px-2.5 text-sm font-medium transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-muted data-[state=open]:hover:bg-muted data-[active=true]:bg-muted/50 data-[active=true]:text-foreground"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    data-slot="navigation-menu-trigger"
    className={cn(navigationMenuTriggerStyle(), "group gap-1", className)}
    {...props}
  >
    {children}
    <ChevronDownIcon
      className="relative top-px size-3 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    data-slot="navigation-menu-content"
    className={cn(
      "top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
      "data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in",
      "data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out",
      "data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52",
      "data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
      // Tanpa viewport bersama, konten jadi popover mandiri di bawah item.
      "group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow-md group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10",
      "group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95",
      "group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = "NavigationMenuContent"

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    data-slot="navigation-menu-link"
    className={cn(
      "flex flex-col gap-1 rounded-md p-2 text-sm transition-all outline-none",
      "hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
      "data-[active=true]:bg-muted/50 data-[active=true]:text-foreground",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  />
))
NavigationMenuLink.displayName = "NavigationMenuLink"

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    data-slot="navigation-menu-indicator"
    className={cn(
      "top-full z-10 flex h-1.5 items-end justify-center overflow-hidden",
      "data-[state=visible]:animate-in data-[state=visible]:fade-in",
      "data-[state=hidden]:animate-out data-[state=hidden]:fade-out",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = "NavigationMenuIndicator"

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}

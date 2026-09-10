import * as React from "react"
import { Menubar as MenubarPrimitive } from "radix-ui"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    data-slot="menubar"
    className={cn(
      "flex h-8 items-center gap-0.5 rounded-lg border border-input bg-background p-0.5 shadow-xs dark:bg-input/30",
      className
    )}
    {...props}
  />
))
Menubar.displayName = "Menubar"

/** Sub/Menu Radix tidak merender elemen DOM, jadi tidak ada ref untuk diteruskan. */
function MenubarMenu(
  props: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Menu>
) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarSub(
  props: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Sub>
) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarPortal(
  props: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Portal>
) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    data-slot="menubar-trigger"
    className={cn(
      "flex h-7 select-none items-center rounded-[min(var(--radius-md),12px)] px-2.5 text-sm font-medium outline-hidden",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = "MenubarTrigger"

const MenubarGroup = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Group>
>(({ ...props }, ref) => (
  <MenubarPrimitive.Group ref={ref} data-slot="menubar-group" {...props} />
))
MenubarGroup.displayName = "MenubarGroup"

const MenubarRadioGroup = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioGroup>
>(({ ...props }, ref) => (
  <MenubarPrimitive.RadioGroup
    ref={ref}
    data-slot="menubar-radio-group"
    {...props}
  />
))
MenubarRadioGroup.displayName = "MenubarRadioGroup"

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      data-slot="menubar-content"
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-(--radix-menubar-content-available-height) min-w-36 origin-(--radix-menubar-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
))
MenubarContent.displayName = "MenubarContent"

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
    variant?: "default" | "destructive"
  }
>(({ className, inset, variant = "default", ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    data-slot="menubar-item"
    data-inset={inset}
    data-variant={variant}
    className={cn(
      "relative flex cursor-default items-center gap-2 rounded-md px-1.5 py-1 text-sm outline-hidden select-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-[inset]:pl-8",
      "data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:*:[svg]:!text-destructive",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = "MenubarItem"

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    data-slot="menubar-checkbox-item"
    checked={checked}
    className={cn(
      "relative flex cursor-default items-center gap-2 rounded-md py-1 pr-1.5 pl-8 text-sm outline-hidden select-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    <span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CheckIcon className="size-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = "MenubarCheckboxItem"

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    data-slot="menubar-radio-item"
    className={cn(
      "relative flex cursor-default items-center gap-2 rounded-md py-1 pr-1.5 pl-8 text-sm outline-hidden select-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    <span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CircleIcon className="size-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = "MenubarRadioItem"

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    data-slot="menubar-label"
    data-inset={inset}
    className={cn(
      "px-1.5 py-1 text-xs text-muted-foreground data-[inset]:pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = "MenubarLabel"

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    data-slot="menubar-separator"
    className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
MenubarSeparator.displayName = "MenubarSeparator"

const MenubarShortcut = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="menubar-shortcut"
    className={cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    )}
    {...props}
  />
))
MenubarShortcut.displayName = "MenubarShortcut"

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    data-slot="menubar-sub-trigger"
    data-inset={inset}
    className={cn(
      "flex cursor-default items-center gap-2 rounded-md px-1.5 py-1 text-sm outline-hidden select-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      "data-[inset]:pl-8",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto size-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = "MenubarSubTrigger"

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    data-slot="menubar-sub-content"
    className={cn(
      "z-50 min-w-32 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = "MenubarSubContent"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  MenubarGroup,
  MenubarPortal,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarRadioGroup,
}

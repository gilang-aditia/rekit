import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const itemVariants = cva(
  "group/item flex flex-wrap items-center rounded-lg border border-transparent text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [a]:hover:bg-muted/50 [a]:transition-colors",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "gap-4 p-4",
        sm: "gap-2.5 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Item = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof itemVariants> & { asChild?: boolean }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      ref={ref}
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
})
Item.displayName = "Item"

const ItemGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="list"
    data-slot="item-group"
    className={cn("group/item-group flex flex-col", className)}
    {...props}
  />
))
ItemGroup.displayName = "ItemGroup"

type ItemSeparatorProps = React.ComponentPropsWithoutRef<"div"> & {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
  asChild?: boolean
}

const ItemSeparator = React.forwardRef<HTMLDivElement, ItemSeparatorProps>(
  ({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    data-slot="item-separator"
    orientation="horizontal"
    className={cn("my-0", className)}
    {...props}
    />
  )
)
ItemSeparator.displayName = "ItemSeparator"

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 rounded-lg border bg-muted text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 overflow-hidden rounded-lg [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const ItemMedia = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof itemMediaVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="item-media"
    data-variant={variant}
    className={cn(itemMediaVariants({ variant, className }))}
    {...props}
  />
))
ItemMedia.displayName = "ItemMedia"

const ItemContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="item-content"
    className={cn("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", className)}
    {...props}
  />
))
ItemContent.displayName = "ItemContent"

const ItemTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="item-title"
    className={cn("flex w-fit items-center gap-2 text-sm leading-snug font-medium", className)}
    {...props}
  />
))
ItemTitle.displayName = "ItemTitle"

const ItemDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="item-description"
    className={cn(
      "line-clamp-2 text-sm leading-normal font-normal text-balance text-muted-foreground",
      "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-foreground",
      className
    )}
    {...props}
  />
))
ItemDescription.displayName = "ItemDescription"

const ItemActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="item-actions"
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
))
ItemActions.displayName = "ItemActions"

const ItemHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="item-header"
    className={cn("flex basis-full items-center justify-between gap-2", className)}
    {...props}
  />
))
ItemHeader.displayName = "ItemHeader"

const ItemFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="item-footer"
    className={cn("flex basis-full items-center justify-between gap-2", className)}
    {...props}
  />
))
ItemFooter.displayName = "ItemFooter"

export {
  Item,
  ItemGroup,
  ItemSeparator,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
  itemVariants,
}

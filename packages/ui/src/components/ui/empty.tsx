import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const Empty = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty"
    className={cn(
      "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-xl border-dashed p-6 text-center text-balance md:p-12",
      className
    )}
    {...props}
  />
))
Empty.displayName = "Empty"

const EmptyHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-header"
    className={cn("flex max-w-sm flex-col items-center gap-2 text-center", className)}
    {...props}
  />
))
EmptyHeader.displayName = "EmptyHeader"

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-10 rounded-lg bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const EmptyMedia = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof emptyMediaVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-media"
    data-variant={variant}
    className={cn(emptyMediaVariants({ variant }), className)}
    {...props}
  />
))
EmptyMedia.displayName = "EmptyMedia"

const EmptyTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-title"
    className={cn("font-heading text-base font-medium tracking-tight", className)}
    {...props}
  />
))
EmptyTitle.displayName = "EmptyTitle"

const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="empty-description"
    className={cn(
      "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-foreground",
      className
    )}
    {...props}
  />
))
EmptyDescription.displayName = "EmptyDescription"

const EmptyContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-content"
    className={cn(
      "flex w-full max-w-sm min-w-0 flex-col items-center gap-2 text-sm text-balance",
      className
    )}
    {...props}
  />
))
EmptyContent.displayName = "EmptyContent"

export {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  emptyMediaVariants,
}

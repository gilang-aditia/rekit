import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * Membungkus input dengan addon di salah satu sisi (ikon, label, tombol).
 * Border dan ring dipindah ke pembungkus supaya seluruh grup terlihat
 * sebagai satu kontrol saat difokus.
 */
const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    data-slot="input-group"
    className={cn(
      "group/input-group relative flex w-full items-center rounded-lg border border-input transition-colors outline-none",
      "h-8 has-[>textarea]:h-auto",
      "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
      "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20",
      "has-[[data-slot=input-group-control]:disabled]:opacity-50",
      "dark:bg-input/30",
      className
    )}
    {...props}
  />
))
InputGroup.displayName = "InputGroup"

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center gap-1.5 py-1 text-sm font-medium text-muted-foreground select-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-2.5 has-[>button]:ml-[-0.25rem]",
        "inline-end": "order-last pr-2.5 has-[>button]:mr-[-0.25rem]",
        "block-start":
          "order-first w-full justify-start px-2.5 pt-2.5 [.border-b]:pb-2.5",
        "block-end":
          "order-last w-full justify-start px-2.5 pb-2.5 [.border-t]:pt-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof inputGroupAddonVariants>
>(({ className, align = "inline-start", ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    data-slot="input-group-addon"
    data-align={align}
    className={cn(inputGroupAddonVariants({ align }), className)}
    onClick={(event) => {
      // Klik pada addon memindahkan fokus ke kontrolnya, seperti <label>.
      if (event.target instanceof HTMLElement && event.target.closest("button")) {
        return
      }
      event.currentTarget.parentElement
        ?.querySelector<HTMLElement>("[data-slot=input-group-control]")
        ?.focus()
      props.onClick?.(event)
    }}
    {...props}
  />
))
InputGroupAddon.displayName = "InputGroupAddon"

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    data-slot="input-group-control"
    className={cn(
      "flex h-full w-full min-w-0 flex-1 rounded-lg bg-transparent px-2.5 py-1 text-base outline-none",
      "placeholder:text-muted-foreground",
      "disabled:cursor-not-allowed",
      "md:text-sm",
      className
    )}
    {...props}
  />
))
InputGroupInput.displayName = "InputGroupInput"

const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    data-slot="input-group-control"
    className={cn(
      "field-sizing-content flex min-h-16 w-full flex-1 resize-none rounded-lg bg-transparent px-2.5 py-2 text-base outline-none",
      "placeholder:text-muted-foreground",
      "disabled:cursor-not-allowed",
      "md:text-sm",
      className
    )}
    {...props}
  />
))
InputGroupTextarea.displayName = "InputGroupTextarea"

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, type = "button", variant = "ghost", size = "icon-xs", ...props }, ref) => (
  <Button
    ref={ref}
    type={type}
    data-slot="input-group-button"
    variant={variant}
    size={size}
    className={cn("shadow-none", className)}
    {...props}
  />
))
InputGroupButton.displayName = "InputGroupButton"

const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="input-group-text"
    className={cn(
      "flex items-center gap-1.5 text-sm text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  />
))
InputGroupText.displayName = "InputGroupText"

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  inputGroupAddonVariants,
}

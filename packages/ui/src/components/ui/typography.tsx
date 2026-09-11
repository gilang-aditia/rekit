import * as React from "react"
import { Slot } from "@moonblanck/rakit-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-heading scroll-m-20 text-4xl font-semibold tracking-tight text-balance",
      h2: "font-heading scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "font-heading scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "font-heading scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 not-first:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded-sm bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm leading-none font-medium",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

/** Elemen HTML yang paling masuk akal untuk tiap varian. */
const variantElement = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  blockquote: "blockquote",
  list: "ul",
  inlineCode: "code",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
} as const

const Typography = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"p"> &
    VariantProps<typeof typographyVariants> & {
      asChild?: boolean
      /** Ganti elemen yang dirender tanpa mengubah gayanya. */
      as?: React.ElementType
    }
>(({ className, variant = "p", asChild = false, as, ...props }, ref) => {
  const Comp = asChild
    ? Slot.Root
    : (as ?? variantElement[variant ?? "p"])

  return (
    <Comp
      ref={ref}
      data-slot="typography"
      data-variant={variant}
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  )
})
Typography.displayName = "Typography"

export { Typography, typographyVariants }

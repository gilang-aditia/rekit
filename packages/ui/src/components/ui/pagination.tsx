import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const Pagination = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    role="navigation"
    aria-label="pagination"
    data-slot="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
))
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-slot="pagination-content"
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ ...props }, ref) => <li ref={ref} data-slot="pagination-item" {...props} />)
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  isActive?: boolean
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
}

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, size = "icon", ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({ variant: isActive ? "outline" : "ghost", size }),
        className
      )}
      {...props}
    />
  )
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof PaginationLink>
>(({ className, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Halaman sebelumnya"
    size="default"
    className={cn("gap-1 px-2.5", className)}
    {...props}
  >
    <ChevronLeftIcon />
    <span className="hidden sm:block">Sebelumnya</span>
  </PaginationLink>
))
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof PaginationLink>
>(({ className, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Halaman berikutnya"
    size="default"
    className={cn("gap-1 px-2.5", className)}
    {...props}
  >
    <span className="hidden sm:block">Berikutnya</span>
    <ChevronRightIcon />
  </PaginationLink>
))
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden
    data-slot="pagination-ellipsis"
    className={cn("flex size-8 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontalIcon className="size-4" />
    <span className="sr-only">Halaman lainnya</span>
  </span>
))
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}

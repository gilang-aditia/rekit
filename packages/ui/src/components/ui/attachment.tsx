import * as React from "react"
import { Slot } from "radix-ui"
import { FileIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Kartu berkas di dalam percakapan. Pakai `asChild` bila seluruh kartu jadi
 * tautan — <AttachmentActions> tetap bisa diklik terpisah karena
 * menghentikan perambatan event.
 */
const Attachment = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      ref={ref}
      data-slot="attachment"
      className={cn(
        "group/attachment relative flex w-full max-w-sm items-center gap-2.5 rounded-lg border border-border bg-background p-2 text-left text-sm transition-colors outline-none",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "[a&]:hover:bg-muted/50 [button&]:hover:bg-muted/50",
        className
      )}
      {...props}
    />
  )
})
Attachment.displayName = "Attachment"

const AttachmentPreview = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="attachment-preview"
    className={cn(
      "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted text-muted-foreground",
      "[&_img]:size-full [&_img]:object-cover",
      "[&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    {children ?? <FileIcon />}
  </div>
))
AttachmentPreview.displayName = "AttachmentPreview"

const AttachmentContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="attachment-content"
    className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
    {...props}
  />
))
AttachmentContent.displayName = "AttachmentContent"

const AttachmentName = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="attachment-name"
    className={cn("truncate text-sm leading-snug font-medium", className)}
    {...props}
  />
))
AttachmentName.displayName = "AttachmentName"

const AttachmentMeta = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="attachment-meta"
    className={cn(
      "flex items-center gap-1.5 text-xs text-muted-foreground tabular-nums",
      className
    )}
    {...props}
  />
))
AttachmentMeta.displayName = "AttachmentMeta"

const AttachmentActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, onClick, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="attachment-actions"
    className={cn("flex shrink-0 items-center gap-1", className)}
    onClick={(event) => {
      // Mencegah kartu-sebagai-tautan ikut aktif saat tombol aksi ditekan.
      event.stopPropagation()
      onClick?.(event)
    }}
    {...props}
  />
))
AttachmentActions.displayName = "AttachmentActions"

/** Bilah kemajuan unggahan. Sembunyikan begitu unggahan selesai. */
const AttachmentProgress = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { value?: number }
>(({ className, value = 0, ...props }, ref) => {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      data-slot="attachment-progress"
      className={cn(
        "mt-1 h-1 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    >
      <div
        data-slot="attachment-progress-indicator"
        className="h-full bg-primary transition-[width]"
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
})
AttachmentProgress.displayName = "AttachmentProgress"

const AttachmentGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="attachment-group"
    className={cn("flex flex-col gap-1.5", className)}
    {...props}
  />
))
AttachmentGroup.displayName = "AttachmentGroup"

export {
  Attachment,
  AttachmentGroup,
  AttachmentPreview,
  AttachmentContent,
  AttachmentName,
  AttachmentMeta,
  AttachmentActions,
  AttachmentProgress,
}

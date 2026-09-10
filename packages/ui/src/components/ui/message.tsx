import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const messageVariants = cva("group/message flex w-full gap-2.5", {
  variants: {
    align: {
      start: "flex-row",
      end: "flex-row-reverse",
    },
  },
  defaultVariants: {
    align: "start",
  },
})

/** Satu baris percakapan: avatar, header, isi, dan footer. */
const Message = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof messageVariants>
>(({ className, align, ...props }, ref) => (
  <div
    ref={ref}
    role="listitem"
    data-slot="message"
    data-align={align ?? "start"}
    className={cn(messageVariants({ align }), className)}
    {...props}
  />
))
Message.displayName = "Message"

const MessageAvatar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="message-avatar"
    className={cn("shrink-0 pt-0.5", className)}
    {...props}
  />
))
MessageAvatar.displayName = "MessageAvatar"

const MessageContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="message-content"
    className={cn(
      "flex min-w-0 flex-1 flex-col gap-1",
      "group-data-[align=end]/message:items-end",
      className
    )}
    {...props}
  />
))
MessageContent.displayName = "MessageContent"

const MessageHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="message-header"
    className={cn(
      "flex items-baseline gap-2 text-xs text-muted-foreground",
      "group-data-[align=end]/message:flex-row-reverse",
      className
    )}
    {...props}
  />
))
MessageHeader.displayName = "MessageHeader"

const MessageAuthor = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="message-author"
    className={cn("text-sm font-medium text-foreground", className)}
    {...props}
  />
))
MessageAuthor.displayName = "MessageAuthor"

const MessageTime = React.forwardRef<
  HTMLTimeElement,
  React.ComponentPropsWithoutRef<"time">
>(({ className, ...props }, ref) => (
  <time
    ref={ref}
    data-slot="message-time"
    className={cn("text-xs text-muted-foreground tabular-nums", className)}
    {...props}
  />
))
MessageTime.displayName = "MessageTime"

const MessageFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="message-footer"
    className={cn("flex items-center gap-1.5 text-xs text-muted-foreground", className)}
    {...props}
  />
))
MessageFooter.displayName = "MessageFooter"

const MessageActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="message-actions"
    className={cn(
      "flex items-center gap-1 opacity-0 transition-opacity",
      "group-hover/message:opacity-100 group-focus-within/message:opacity-100",
      className
    )}
    {...props}
  />
))
MessageActions.displayName = "MessageActions"

const MessageList = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="list"
    data-slot="message-list"
    className={cn("flex flex-col gap-4", className)}
    {...props}
  />
))
MessageList.displayName = "MessageList"

export {
  Message,
  MessageList,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageAuthor,
  MessageTime,
  MessageFooter,
  MessageActions,
  messageVariants,
}

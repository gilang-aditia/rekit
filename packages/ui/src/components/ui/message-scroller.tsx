import * as React from "react"
import { ArrowDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type MessageScrollerContextValue = {
  viewportRef: React.RefObject<HTMLDivElement | null>
  isAtBottom: boolean
  scrollToBottom: (behavior?: ScrollBehavior) => void
}

// useLayoutEffect memperingatkan saat render di server; di sana efeknya
// memang tidak relevan karena tidak ada elemen yang bisa digulir.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

const MessageScrollerContext =
  React.createContext<MessageScrollerContextValue | null>(null)

function useMessageScroller() {
  const context = React.useContext(MessageScrollerContext)
  if (!context) {
    throw new Error("useMessageScroller harus dipakai di dalam <MessageScroller>")
  }
  return context
}

/**
 * Wadah gulir untuk percakapan. Selama pengguna berada di dasar, balasan baru
 * otomatis diikuti; begitu ia menggulir ke atas, posisi bacanya dipertahankan
 * termasuk saat riwayat lama disisipkan di awal daftar.
 */
const MessageScroller = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    /** Jarak dari dasar (px) yang masih dianggap "di dasar". */
    threshold?: number
  }
>(({ className, children, threshold = 32, ...props }, ref) => {
  const viewportRef = React.useRef<HTMLDivElement | null>(null)
  const [isAtBottom, setIsAtBottom] = React.useState(true)
  const previousHeight = React.useRef(0)

  const scrollToBottom = React.useCallback((behavior: ScrollBehavior = "smooth") => {
    const viewport = viewportRef.current
    if (!viewport) return
    viewport.scrollTo({ top: viewport.scrollHeight, behavior })
  }, [])

  const handleScroll = React.useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const distance =
      viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight
    setIsAtBottom(distance <= threshold)
  }, [threshold])

  useIsomorphicLayoutEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const observer = new ResizeObserver(() => {
      const grownBy = viewport.scrollHeight - previousHeight.current

      if (isAtBottom) {
        viewport.scrollTop = viewport.scrollHeight
      } else if (grownBy > 0 && viewport.scrollTop <= threshold) {
        // Riwayat disisipkan di atas: geser turun sebesar tambahannya supaya
        // pesan yang sedang dibaca tidak melompat.
        viewport.scrollTop += grownBy
      }

      previousHeight.current = viewport.scrollHeight
    })

    observer.observe(viewport)
    for (const child of Array.from(viewport.children)) {
      observer.observe(child)
    }
    previousHeight.current = viewport.scrollHeight

    return () => observer.disconnect()
  }, [isAtBottom, threshold])

  const contextValue = React.useMemo<MessageScrollerContextValue>(
    () => ({ viewportRef, isAtBottom, scrollToBottom }),
    [isAtBottom, scrollToBottom]
  )

  return (
    <MessageScrollerContext.Provider value={contextValue}>
      <div
        ref={ref}
        data-slot="message-scroller"
        data-at-bottom={isAtBottom}
        className={cn("relative flex min-h-0 flex-1 flex-col", className)}
        {...props}
      >
        <div
          ref={viewportRef}
          onScroll={handleScroll}
          data-slot="message-scroller-viewport"
          className="flex-1 overflow-y-auto overscroll-contain"
        >
          {children}
        </div>
      </div>
    </MessageScrollerContext.Provider>
  )
})
MessageScroller.displayName = "MessageScroller"

const MessageScrollerContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="message-scroller-content"
    className={cn("flex flex-col gap-4 p-4", className)}
    {...props}
  />
))
MessageScrollerContent.displayName = "MessageScrollerContent"

/** Tombol "lompat ke pesan terbaru"; muncul hanya saat tidak di dasar. */
const MessageScrollerButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, children, onClick, ...props }, ref) => {
  const { isAtBottom, scrollToBottom } = useMessageScroller()

  if (isAtBottom) return null

  return (
    <Button
      ref={ref}
      type="button"
      data-slot="message-scroller-button"
      variant="outline"
      size="icon-sm"
      className={cn(
        "absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full shadow-md",
        className
      )}
      onClick={(event) => {
        onClick?.(event)
        scrollToBottom()
      }}
      {...props}
    >
      {children ?? <ArrowDownIcon />}
      <span className="sr-only">Lompat ke pesan terbaru</span>
    </Button>
  )
})
MessageScrollerButton.displayName = "MessageScrollerButton"

export {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerButton,
  useMessageScroller,
}

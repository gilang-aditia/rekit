import * as React from "react"
import { Search, X } from "lucide-react"

import { cn } from "@/lib/utils"

function SearchInput({
  className,
  value,
  onChange,
  onClear,
  placeholder = "Cari...",
  ...props
}: React.ComponentProps<"input"> & {
  onClear?: () => void
}) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const hasValue = value !== undefined && value !== ""

  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        ref={inputRef}
        type="search"
        data-slot="search-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent pl-8 pr-8 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 md:text-sm dark:bg-input/30 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
        )}
        {...props}
      />
      {hasValue && onClear && (
        <button
          type="button"
          onClick={() => {
            onClear()
            inputRef.current?.focus()
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-3.5" />
          <span className="sr-only">Clear search</span>
        </button>
      )}
    </div>
  )
}

export { SearchInput }

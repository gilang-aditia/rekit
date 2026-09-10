import * as React from "react"
import { SearchIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const SearchInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input"> & {
    onClear?: () => void
    /** Class untuk pembungkus terluar; `className` tetap menuju elemen input. */
    containerClassName?: string
  }
>(
  (
    {
      className,
      containerClassName,
      value,
      defaultValue,
      onChange,
      onClear,
      placeholder = "Cari...",
      ...props
    },
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement)

    // Mode tak terkendali tidak punya `value`, jadi isi dilacak dari DOM.
    const [hasValue, setHasValue] = React.useState(
      () => String(value ?? defaultValue ?? "").length > 0
    )

    React.useEffect(() => {
      if (value !== undefined) setHasValue(String(value).length > 0)
    }, [value])

    return (
      <div
        data-slot="search-input"
        className={cn("relative", containerClassName)}
      >
        <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={innerRef}
          type="search"
          data-slot="search-input-control"
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={(event) => {
            if (value === undefined) setHasValue(event.target.value.length > 0)
            onChange?.(event)
          }}
          className={cn(
            "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent py-1 pr-8 pl-8 text-base transition-colors outline-none",
            "placeholder:text-muted-foreground",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
            "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
            "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
            "md:text-sm dark:bg-input/30",
            "[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden",
            className
          )}
          {...props}
        />
        {hasValue && onClear && (
          <button
            type="button"
            data-slot="search-input-clear"
            onClick={() => {
              onClear()
              if (value === undefined) setHasValue(false)
              innerRef.current?.focus()
            }}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <XIcon className="size-3.5" />
            <span className="sr-only">Bersihkan pencarian</span>
          </button>
        )}
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"

export { SearchInput }

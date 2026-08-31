import * as React from 'react'
import { Button } from 'rakit-ui'
import { CodeBlock } from './CodeBlock'
import { cn } from '@/lib/utils'

interface ComponentPreviewProps {
  title?: string
  description?: string
  children: React.ReactNode
  code?: string
  align?: 'center' | 'start' | 'end'
}

export function ComponentPreview({
  title,
  description,
  children,
  code,
  align = 'center',
}: ComponentPreviewProps) {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <>
      {(title || description) && (
        <div className="mt-6 flex flex-col gap-1">
          {title && <h3 className="scroll-m-28 text-lg font-medium tracking-tight">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      )}

      <div
        data-slot="component-preview"
        className="group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-2xl border"
      >
        <div data-slot="preview" dir="ltr">
          <div
            data-align={align}
            className="preview relative flex h-72 w-full justify-center p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start"
          >
            <div className="flex flex-wrap items-center gap-2 md:flex-row">{children}</div>
          </div>
        </div>

        {code && (
          <div className="relative border-t bg-code">
            <div className={cn('relative', !expanded && 'max-h-72 overflow-hidden')}>
              <CodeBlock code={code} language="tsx" bare />
            </div>

            {!expanded && (
              <div className="absolute inset-0 flex items-center justify-center pb-4">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, var(--color-code), color-mix(in oklab, var(--color-code) 60%, transparent), transparent)',
                  }}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setExpanded(true)}
                  className="relative z-10 rounded-lg bg-background text-foreground shadow-none hover:bg-muted"
                >
                  View Code
                </Button>
              </div>
            )}

            {expanded && (
              <div className="flex justify-center pb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setExpanded(false)}
                  className="rounded-lg bg-background text-foreground shadow-none hover:bg-muted"
                >
                  Collapse
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

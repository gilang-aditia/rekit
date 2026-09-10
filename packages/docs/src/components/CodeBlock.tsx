import { Highlight, themes } from 'prism-react-renderer'
import { useTheme } from './ThemeProvider'
import { CopyButton } from './CopyButton'
import { cn } from '@/lib/utils'

type CodeBlockProps = {
  code: string
  language?: string
  /** Blok kode di dalam wadah lain (preview, tabs) tidak perlu bingkai sendiri. */
  bare?: boolean
  className?: string
}

export function CodeBlock({ code, language = 'tsx', bare = false, className }: CodeBlockProps) {
  return (
    <figure className={cn('relative', !bare && 'overflow-hidden rounded-xl bg-zinc-950 text-zinc-50', className)}>
      <CopyButton value={code.trim()} />
      <Highlight theme={themes.oneDark} code={code.trim()} language={language}>
        {({ className: prismClass, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              prismClass,
              'no-scrollbar min-w-0 overflow-x-auto overscroll-x-contain px-4 py-3.5 font-mono text-sm leading-relaxed outline-none'
            )}
            style={{ ...style, backgroundColor: 'transparent' }}
          >
            <code>
              {tokens.map((line, i) => (
                <span key={i} {...getLineProps({ line, className: 'line block' })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </figure>
  )
}

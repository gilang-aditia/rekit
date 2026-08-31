import * as React from 'react'
import { CodeBlock } from './CodeBlock'
import { cn } from '@/lib/utils'

interface InstallTabsProps {
  items?: {
    npm?: string
    pnpm?: string
    yarn?: string
    bun?: string
    npx?: string
  }
  /** Contoh: "add button" — perintah dibangkitkan untuk semua package manager. */
  cliCommand?: string
}

export function InstallTabs({ items, cliCommand }: InstallTabsProps) {
  const commands = cliCommand
    ? {
        pnpm: `pnpm dlx rakit-ui@latest ${cliCommand}`,
        npm: `npx @moonblanck/rakit-ui@latest ${cliCommand}`,
        yarn: `yarn dlx rakit-ui@latest ${cliCommand}`,
        bun: `bunx --bun rakit-ui@latest ${cliCommand}`,
      }
    : items

  const tabs = React.useMemo(
    () => (commands ? (Object.keys(commands) as Array<keyof typeof commands>) : []),
    [commands]
  )
  const [active, setActive] = React.useState(tabs[0])

  if (!commands || tabs.length === 0) return null

  const current = tabs.includes(active) ? active : tabs[0]

  return (
    <div data-slot="tabs" className="relative mt-6 flex w-full flex-col gap-2">
      <div
        data-slot="tabs-list"
        className="flex w-fit items-center gap-6 rounded-none border-b bg-transparent px-0 pb-0"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={current === tab}
            data-state={current === tab ? 'active' : 'inactive'}
            onClick={() => setActive(tab)}
            className={cn(
              'relative inline-flex h-7 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-all',
              'after:absolute after:inset-x-0 after:bottom-[-5px] after:h-0.5 after:bg-foreground after:opacity-0 after:transition-opacity',
              'text-foreground/60 hover:text-foreground',
              current === tab && 'text-foreground after:opacity-100'
            )}
          >
            {tab === 'npx' ? 'CLI' : tab}
          </button>
        ))}
      </div>

      <div className="no-scrollbar overflow-x-auto rounded-xl bg-code">
        <CodeBlock code={commands[current] || ''} language="bash" bare />
      </div>
    </div>
  )
}

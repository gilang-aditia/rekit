import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Heading = { id: string; text: string; depth: number }

/**
 * Membaca heading dari konten yang sudah ter-render, lalu menyorot
 * heading yang sedang terlihat — seperti "On This Page" milik shadcn.
 */
export function Toc() {
  const { pathname } = useLocation()
  const [headings, setHeadings] = React.useState<Heading[]>([])
  const [activeId, setActiveId] = React.useState<string>('')

  React.useEffect(() => {
    const content = document.querySelector('[data-docs-content]')
    if (!content) return

    const found = Array.from(content.querySelectorAll('h2, h3')).map((el, index) => {
      // Heading membungkus judulnya dalam <span>; tanda "#" di sebelahnya diabaikan.
      const label = el.querySelector('a > span:first-child') ?? el
      const text = label.textContent?.trim() ?? ''
      if (!el.id) {
        el.id =
          text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || `section-${index}`
      }
      el.classList.add('scroll-m-24')
      return { id: el.id, text, depth: el.tagName === 'H2' ? 2 : 3 }
    })

    setHeadings(found)
    setActiveId(found[0]?.id ?? '')
  }, [pathname])

  React.useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 1 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="flex flex-col gap-2 p-4 pt-0 text-sm">
      <p className="h-6 bg-background text-xs font-medium text-muted-foreground">On This Page</p>
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          data-active={activeId === heading.id}
          data-depth={heading.depth}
          className={cn(
            'text-[0.8rem] text-muted-foreground no-underline transition-colors hover:text-foreground',
            'data-[active=true]:font-medium data-[active=true]:text-foreground',
            'data-[depth=3]:pl-4'
          )}
        >
          {heading.text}
        </a>
      ))}
    </div>
  )
}
